/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.ClassManager', function() {

    var manager = Ext.ClassManager,
        cls, emptyFn = function(){};

    beforeEach(function() {

        manager.enableNamespaceParseCache = false;

        global.My = {
            awesome: {
                Class: function(){console.log(11);},
                Class1: function(){console.log(12);},
                Class2: function(){console.log(13);}
            },
            cool: {
                AnotherClass: function(){console.log(21);},
                AnotherClass1: function(){console.log(22);},
                AnotherClass2: function(){console.log(23);}
            }
        };

    });

    afterEach(function() {

        if(global.Something) {
            global.Something = undefined;
        }

        if(global.My) {
            global.My = undefined;
        }

        if(global.I) {
            global.I = undefined;
        }

        if(global.Test) {
            global.Test = undefined;
        }

        try {
            delete global.Something;
            delete global.My;
            delete global.I;
            delete global.Test;
            delete global.a;
            delete global.b;
            delete global.c;
        } catch (e) {}

        manager.enableNamespaceParseCache = true;
    });

    describe("parseNamespace", function() {

        it("should return the broken-down namespace", function() {

            var parts = manager.parseNamespace('Some.strange.alien.Namespace');

            [Ext.global, 'Some', 'strange', 'alien', 'Namespace'].forEach(function(v, c) {
                parts[c].should.equal(v);
            });

        });

        it("should return the broken-down namespace with object rewrites", function() {

            var parts = manager.parseNamespace('Ext.some.Namespace');

            [Ext, 'some', 'Namespace'].forEach(function(v, c) {
                parts[c].should.equal(v);
            });

        });

    });

    describe("exist", function() {
        it("should return whether a single class exists", function() {
            manager.isCreated('My.notexisting.Class').should.equal(false);
            manager.isCreated('My.awesome.Class').should.equal(true);
        });
    });

    /*
    describe("loader preprocessor", function() {

        beforeEach(function() {
            cls = function(){};
        });

        it("should load and replace string class names with objects", function() {

            var data = {
                    extend: 'My.awesome.Class',
                    mixins: {
                        name1: My.cool.AnotherClass,
                        name2: 'My.cool.AnotherClass1'
                    }
                },
                expected = {
                    extend: My.awesome.Class,
                    mixins: {
                        name1: My.cool.AnotherClass,
                        name2: My.cool.AnotherClass1
                    }
                },
                classNames;

            spyOn(Ext.Loader, 'require').andCallFake(function(classes, fn) {
                classNames = classes;
                fn();
            });

            Ext.Class.getPreprocessor('loader').fn(cls, data, emptyFn, emptyFn);

            expect(Ext.Loader.require).toHaveBeenCalled();
            expect(classNames).toEqual(['My.awesome.Class', 'My.cool.AnotherClass1']);
            expect(data).toEqual(expected);
        });
    });
    */

    describe("create", function() {

        var subClass, parentClass, mixinClass1, mixinClass2, subSubClass;

        beforeEach(function() {

            mixinClass1 = manager.create('I.am.the.MixinClass1', {

                config: {
                    mixinConfig: 'mixinConfig'
                },

                constructor: function() {
                    this.mixinConstructor1Called = true;
                },

                mixinProperty1: 'mixinProperty1',

                mixinMethod1: function() {
                    this.mixinMethodCalled = true;
                }
            });

            mixinClass2 = manager.create('I.am.the.MixinClass2', {

                constructor: function() {
                    this.mixinConstructor2Called = true;
                },

                mixinProperty2: 'mixinProperty2',

                mixinMethod2: function() {
                    this.mixinMethodCalled = true;
                }
            });

            parentClass = manager.create('I.am.the.ParentClass', {

                alias: ['parentclass', 'superclass'],

                mixins: {
                    mixin1: 'I.am.the.MixinClass1'
                },

                config: {
                    name: 'parentClass',
                    isCool: false,
                    members: {
                        abe: 'Abraham Elias',
                        ed: 'Ed Spencer'
                    },
                    hobbies: ['football', 'bowling']
                },

                onClassExtended: function(subClass, data) {
                    subClass.onClassExtendedCalled = true;
                },

                constructor: function(config) {
                    this.initConfig(config);

                    this.parentConstructorCalled = true;

                    this.mixins.mixin1.constructor.apply(this, arguments);
                },

                parentProperty: 'parentProperty',

                parentMethod: function() {
                    this.parentMethodCalled = true;
                }
            });

            subClass = manager.create('I.am.the.SubClass', {

                alias: 'subclass',

                extend: 'I.am.the.ParentClass',

                mixins: {
                    mixin1: 'I.am.the.MixinClass1',
                    mixin2: 'I.am.the.MixinClass2'
                },
                config: {
                    name: 'subClass',
                    isCool: true,
                    members: {
                        jacky: 'Jacky Nguyen',
                        tommy: 'Tommy Maintz'
                    },
                    hobbies: ['sleeping', 'eating', 'movies'],
                    isSpecial: true
                },
                constructor: function() {
                    this.subConstrutorCalled = true;

                    this.superclass.constructor.apply(this, arguments);

                    this.mixins.mixin2.constructor.apply(this, arguments);
                },
                myOwnMethod: function() {
                    this.myOwnMethodCalled = true;
                }
            });
        });

        it("should create the namespace", function() {
            Ext.isDefined(I).should.be.ok;
            Ext.isDefined(I.am).should.be.ok;
            Ext.isDefined(I.am.the).should.be.ok;
            Ext.isDefined(I.am.the.SubClass).should.be.ok;
        });

        it("should get className", function() {
            Ext.getClassName(subClass).should.equal('I.am.the.SubClass');
        });

        describe("addStatics", function() {

            it("single with name - value arguments", function() {

                var called = false;

                subClass.addStatics({
                    staticMethod: function(){
                        called = true;
                    }
                });

                Ext.isDefined(subClass.staticMethod).should.be.ok;
                subClass.staticMethod();

                called.should.be.ok;
            });

            it("multiple with object map argument", function() {

                subClass.addStatics({
                    staticProperty: 'something',
                    staticMethod: function(){}
                });

                subClass.staticProperty.should.equal('something');
                Ext.isDefined(subClass.staticMethod).should.be.ok;
            });

        });

        describe("mixin", function() {

            it("should have all properties of mixins", function() {

                var obj = new subClass();
                obj.mixinProperty1.should.equal('mixinProperty1');
                obj.mixinProperty2.should.equal('mixinProperty2');
                Ext.isDefined(obj.mixinMethod1).should.be.ok;
                Ext.isDefined(obj.mixinMethod2).should.be.ok;
                obj.config.mixinConfig.should.equal('mixinConfig');

            });

        });

        describe("config", function() {

            it("should merge properly", function() {

                var obj = new subClass();

                obj.config.mixinConfig.should.equal('mixinConfig');
                obj.config.name.should.equal('subClass');
                obj.config.isCool.should.equal(true);
                obj.config.members.abe.should.equal('Abraham Elias');
                obj.config.members.ed.should.equal('Ed Spencer');
                obj.config.members.jacky.should.equal('Jacky Nguyen');
                obj.config.members.tommy.should.equal('Tommy Maintz');

                ['sleeping', 'eating', 'movies'].forEach(function(v, c) {
                    obj.config.hobbies[c].should.equal(v);
                });

                obj.config.isSpecial.should.equal(true);

            });

            it("should apply default config", function() {

                var obj = new subClass();

                obj.getName().should.equal('subClass');
                obj.getIsCool().should.equal(true);

                ['sleeping', 'eating', 'movies'].forEach(function(v, c) {
                    obj.getHobbies()[c].should.equal(v);
                });

            });

            it("should apply with supplied config", function() {

                var obj = new subClass({
                    name: 'newName',
                    isCool: false,
                    members: {
                        aaron: 'Aaron Conran'
                    }
                });

                obj.getName().should.equal('newName');
                obj.getIsCool().should.equal(false);
                obj.getMembers().aaron.should.equal('Aaron Conran');
            });

        });

        describe("overriden methods", function() {

            it("should call self constructor", function() {
                var obj = new subClass();
                obj.subConstrutorCalled.should.be.ok;
            });

            it("should call parent constructor", function() {
                var obj = new subClass();
                obj.parentConstructorCalled.should.be.ok;
            });

            it("should call mixins constructors", function() {
                var obj = new subClass();
                obj.mixinConstructor1Called.should.be.ok;
                obj.mixinConstructor2Called.should.be.ok;
            });
        });

        describe("alias", function() {

            it("should store alias", function() {
                manager.getByAlias('subclass').should.equal(subClass);
            });

            it("should store multiple aliases", function() {
                manager.getByAlias('parentclass').should.equal(parentClass);
                manager.getByAlias('superclass').should.equal(parentClass);
            });

        });

    });

    describe("instantiate", function() {

        beforeEach(function() {

            manager.create('Test.stuff.Person', {
                alias: 'person',
                constructor: function(name, age, sex) {
                    this.name = name;
                    this.age = age;
                    this.sex = sex;
                },
                eat: function(food) {
                    this.eatenFood = food;
                }
            });

            manager.create('Test.stuff.Developer', {
                alias: 'developer',
                extend: 'Test.stuff.Person',
                constructor: function(isGeek, name, age, sex) {

                    this.isGeek = isGeek;

                    return this.superclass.constructor.apply(this, arguments);
                },
                code: function(language) {
                    this.languageCoded = language;
                    this.eat('bugs');
                }
            });
        });

        it("should create the instance by full class name", function() {

            var me = manager.instantiate('Test.stuff.Person', 'Jacky', 24, 'male');
            (me instanceof Test.stuff.Person).should.equal(true);

        });

        it("should create the instance by alias", function() {

            var me = manager.instantiateByAlias('person', 'Jacky', 24, 'male');
            (me instanceof Test.stuff.Person).should.equal(true);

        });

        it("should pass all arguments to the constructor", function() {

            var me = manager.instantiateByAlias('person', 'Jacky', 24, 'male');
            me.name.should.equal('Jacky');
            me.age.should.equal(24);
            me.sex.should.equal('male');

        });

        it("should have all methods in prototype", function() {

            var me = manager.instantiateByAlias('person', 'Jacky', 24, 'male');

            me.eat('rice');

            me.eatenFood.should.equal('rice');

        });

        it("should works with inheritance", function() {

            var me = manager.instantiateByAlias('developer', true, 'Jacky', 24, 'male');

            me.code('javascript');

            me.languageCoded.should.equal('javascript');
            me.eatenFood.should.equal('bugs');
        });

    });

    /*
    describe("post-processors", function() {

        xdescribe("uses", function() {
            //expect(Something.Cool).toBeDefined();
            //expect(Something.Cool instanceof test).toBeTruthy();
        });

        describe("singleton", function() {
            it("should create the instance namespace and return the class", function() {
                var test = Ext.define('Something.Cool', {
                    singleton: true,
                    someMethod: function() {
                        this.someMethodCalled = true;
                    },
                    someProperty: 'something'
                });

                expect(Something.Cool).toBeDefined();
                expect(Something.Cool instanceof test).toBeTruthy();
            });
        });

        describe("alias xtype", function() {
            it("should set xtype as a static class property", function() {
                var test = Ext.define('Something.Cool', {
                    alias: 'widget.cool'
                });

                expect(Something.Cool.xtype).toEqual('cool');
            });
        });

        describe("alternate", function() {
            it("should create the alternate with a string for alternateClassName property", function() {
                Ext.define('Something.Cool', {
                    alternateClassName: 'Something.CoolAsWell',

                    someMethod: function() {
                        this.someMethodCalled = true;
                    },

                    someProperty: 'something'
                });

                expect(Something.CoolAsWell).toBeDefined();
                expect(Something.CoolAsWell).toBe(Something.Cool);
            });

            it("should create the alternate with an array for alternateClassName property", function() {
                Ext.define('Something.Cool', {
                    alternateClassName: ['Something.CoolAsWell', 'Something.AlsoCool']
                });

                expect(Something.CoolAsWell).toBe(Something.Cool);
                expect(Something.AlsoCool).toBe(Something.Cool);
            });
        });
    });

    */

    describe("createNamespaces", function() {

        var w = global;

        it("should have an alias Ext.namespace", function() {

            Ext.namespace('a', 'b', 'c');

            Ext.isDefined(a).should.be.ok;
            Ext.isDefined(b).should.be.ok;
            Ext.isDefined(c).should.be.ok;

        });

        it("should create a single top level namespace", function() {

            Ext.ClassManager.createNamespaces('FooTest1');
            Ext.isDefined(w.FooTest1).should.be.ok;

            delete w.FooTest1;
        });

        it("should create multiple top level namespace", function() {

            Ext.ClassManager.createNamespaces('FooTest2', 'FooTest3', 'FooTest4');

            Ext.isDefined(w.FooTest2).should.be.ok;
            Ext.isDefined(w.FooTest3).should.be.ok;
            Ext.isDefined(w.FooTest4).should.be.ok;

            delete w.FooTest2;
            delete w.FooTest3;
            delete w.FooTest4;
        });

        it("should create a chain of namespaces, starting from a top level", function() {

            Ext.ClassManager.createNamespaces('FooTest5', 'FooTest5.ns1', 'FooTest5.ns1.ns2', 'FooTest5.ns1.ns2.ns3');

            Ext.isDefined(w.FooTest5).should.be.ok;
            Ext.isDefined(w.FooTest5.ns1).should.be.ok;
            Ext.isDefined(w.FooTest5.ns1.ns2).should.be.ok;
            Ext.isDefined(w.FooTest5.ns1.ns2.ns3).should.be.ok;

            delete w.FooTest5;
        });

        it("should create lower level namespaces without first defining the top level", function() {

            Ext.ClassManager.createNamespaces('FooTest6.ns1', 'FooTest7.ns2');

            Ext.isDefined(w.FooTest6).should.be.ok;
            Ext.isDefined(w.FooTest6.ns1).should.be.ok;
            Ext.isDefined(w.FooTest7).should.be.ok;
            Ext.isDefined(w.FooTest7.ns2).should.be.ok;

            delete w.FooTest6;
            delete w.FooTest7;
        });

        it("should create a lower level namespace without defining the middle level", function() {

            Ext.ClassManager.createNamespaces('FooTest8', 'FooTest8.ns1.ns2');

            Ext.isDefined(w.FooTest8).should.be.ok;
            Ext.isDefined(w.FooTest8.ns1).should.be.ok;
            Ext.isDefined(w.FooTest8.ns1.ns2).should.be.ok;

            delete w.FooTest8;
        });

        it("should not overwritte existing namespace", function() {

            Ext.ClassManager.createNamespaces('FooTest9');

            FooTest9.prop1 = 'foo';

            Ext.ClassManager.createNamespaces('FooTest9');

            FooTest9.prop1.should.equal("foo");

            delete w.FooTest9;
        });

    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
