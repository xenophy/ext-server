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

describe('Ext.Class', function() {

    var emptyFn = function(){},
        cls;

    beforeEach(function() {
        global.My = {
            awesome: {
                Class: function(){},
                Class1: function(){},
                Class2: function(){}
            },
            cool: {
                AnotherClass: function(){},
                AnotherClass1: function(){},
                AnotherClass2: function(){}
            }
        };
    });

    afterEach(function() {
        if (global.My) {
            global.My = undefined;
        }

        try {
            delete global.My;
        } catch (e) {}
    });

    // START PREPROCESSORS =================================================================== /
    describe("preprocessors", function() {

        beforeEach(function() {
            cls = Ext.Class.create(null, {});
        });

        describe("extend", function() {

            it("should extend from Base if no 'extend' property found", function() {

                var data = {};

                Ext.Class.preprocessors.extend.fn(cls, data, emptyFn, {}, emptyFn);

                ((new cls) instanceof Ext.Base).should.be.ok;
            });

            it("should extend from given parent class", function() {
                var data = {
                    extend: My.awesome.Class
                };

                Ext.Class.preprocessors.extend.fn(cls, data, emptyFn, {}, emptyFn);

                ((new cls) instanceof My.awesome.Class).should.be.ok;
            });

            it("should have superclass reference", function() {
                var data = {
                    extend: My.awesome.Class
                };

                var parentPrototype = My.awesome.Class.prototype;

                Ext.Class.preprocessors.extend.fn(cls, data, emptyFn, {}, emptyFn);

                (cls.superclass).should.equal(parentPrototype);
                ((new cls).superclass).should.equal(parentPrototype);
            });
        });

        describe("other preprocessors", function() {

            beforeEach(function() {
                Ext.Class.preprocessors.extend.fn(cls, {}, emptyFn, {}, emptyFn);
            });

            describe("config", function() {

                it("should create getter if not exists", function() {
                    var data = {
                        config: {
                            someName: 'someValue'
                        }
                    };

                    Ext.Class.preprocessors.config.fn(cls, data, emptyFn, {}, emptyFn);

                    Ext.isDefined(data.getSomeName).should.be.ok;
                });

                it("should NOT create getter if already exists", function() {
                    var data = {
                        config: {
                            someName: 'someValue'
                        }
                    };

                    var called = false;
                    cls.prototype.getSomeName = function() {
                        called = true;
                    };

                    Ext.Class.preprocessors.config.fn(cls, data, emptyFn, {}, emptyFn);

                    Ext.isDefined(data.getSomeName).should.not.be.ok;
                });

                it("should create setter if not exists", function() {
                    var data = {
                        config: {
                            someName: 'someValue'
                        }
                    };

                    Ext.Class.preprocessors.config.fn(cls, data, emptyFn, {}, emptyFn);

                    Ext.isDefined(data.setSomeName).should.be.ok;
                });

                it("should NOT create setter if already exists", function() {
                    var data = {
                        config: {
                            someName: 'someValue'
                        }
                    };

                    var called = false;

                    cls.prototype.setSomeName = function() {
                        called = true;
                    };

                    Ext.Class.preprocessors.config.fn(cls, data, emptyFn, {}, emptyFn);

                    Ext.isDefined(data.setSomeName).should.not.be.ok;
                });
            });

            describe("statics", function() {

                it("should copy static properties to the class", function() {

                    var data = {
                        statics: {
                            someName: 'someValue',
                            someMethod: Ext.emptyFn
                        }
                    };

                    Ext.Class.preprocessors.statics.fn(cls, data, emptyFn, {}, emptyFn);

                    var obj = new cls;

                    Ext.isDefined(data.statics).should.not.be.ok;
                    cls.someName.should.equal('someValue');
                    cls.someMethod.should.equal(Ext.emptyFn);
                });
            });

            describe("inheritableStatics", function() {

                it("should store names of inheritable static properties", function() {
                    var data = {
                        inheritableStatics: {
                            someName: 'someValue',
                            someMethod: Ext.emptyFn
                        }
                    };

                    Ext.Class.preprocessors.inheritableStatics.fn(cls, data, emptyFn, {}, emptyFn);

                    var obj = new cls;

                    Ext.isDefined(obj.inheritableStatics).should.not.be.ok;
                    cls.someName.should.equal('someValue');
                    ['someName', 'someMethod'].forEach(function(v, c) {
                        cls.prototype.$inheritableStatics[c].should.equal(v);
                    });
                    cls.someMethod.should.equal(Ext.emptyFn);
                });

                it("should inherit inheritable statics", function() {
                    var data = {
                        inheritableStatics: {
                            someName: 'someValue',
                            someMethod: Ext.emptyFn
                        }
                    }, cls2 = Ext.Class.create(null, {});

                    Ext.Class.preprocessors.inheritableStatics.fn(cls, data, emptyFn, {}, emptyFn);
                    Ext.Class.preprocessors.extend.fn(cls2, { extend: cls }, emptyFn, {}, emptyFn);

                    cls2.someName.should.equal('someValue');
                    cls2.someMethod.should.equal(Ext.emptyFn);
                });

                it("should NOT inherit inheritable statics if the class already has it", function() {
                    var data = {
                        inheritableStatics: {
                            someName: 'someValue',
                            someMethod: Ext.emptyFn
                        }
                    }, cls2 = Ext.Class.create(null, {});

                    cls2.someName = 'someOtherValue';
                    cls2.someMethod = function(){};

                    Ext.Class.preprocessors.inheritableStatics.fn(cls, data, emptyFn, {}, emptyFn);
                    Ext.Class.preprocessors.extend.fn(cls2, { extend: cls }, emptyFn, {}, emptyFn);

                    cls2.someName.should.equal('someOtherValue');
                    cls2.someMethod.should.not.equal(Ext.emptyFn);
                });
            });
        });
    });

    // END PREPROCESSORS =================================================================== /

    describe("Instantiation", function() {

        var subClass, parentClass, mixinClass1, mixinClass2;

        beforeEach(function() {

            mixinClass1 = new Ext.Class({
                config: {
                    mixinConfig: 'mixinConfig'
                },

                constructor: function(config) {
                    this.initConfig(config);

                    this.mixinConstructor1Called = true;
                },

                mixinProperty1: 'mixinProperty1',

                mixinMethod1: function() {
                    this.mixinMethodCalled = true;
                }
            });

            mixinClass2 = new Ext.Class({
                constructor: function(config) {
                    this.initConfig(config);

                    this.mixinConstructor2Called = true;
                },

                mixinProperty2: 'mixinProperty2',

                mixinMethod2: function() {
                    this.mixinMethodCalled = true;
                }
            });

            parentClass = new Ext.Class({
                mixins: {
                    mixin1: mixinClass1
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

            subClass = new Ext.Class({
                extend: parentClass,
                mixins: {
                    mixin1: mixinClass1,
                    mixin2: mixinClass2
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
                constructor: function(config) {
                    this.initConfig(config);

                    this.subConstrutorCalled = true;

                    subClass.superclass.constructor.apply(this, arguments);

                    this.mixins.mixin2.constructor.apply(this, arguments);
                },
                myOwnMethod: function() {
                    this.myOwnMethodCalled = true;
                }
            });
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
                called.should.equal(true);
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


        describe("override", function() {
            it("should override", function() {
                subClass.override({
                    myOwnMethod: function(){
                        this.isOverridden = true;

                        this.callParent(arguments);
                    }
                });

                var obj = new subClass;
                obj.myOwnMethod();

                (obj.isOverridden).should.equal(true);
                (obj.myOwnMethodCalled).should.equal(true);
            });
        });

        describe("define override", function() {
            var obj,
                createFnsCalled;

            beforeEach(function () {
                createFnsCalled = [];
                function onCreated () {
                    createFnsCalled.push(this.$className);
                }

                Ext.define('Foo.UnusedOverride', {
                    override: 'Foo.Nothing',

                    foo: function (x) {
                        return this.callParent([x*2]);
                    }
                }, onCreated);

                // this override comes before its target:
                Ext.define('Foo.SingletonOverride', {
                    override: 'Foo.Singleton',

                    foo: function (x) {
                        return this.callParent([x*2]);
                    }
                }, onCreated);

                Ext.define('Foo.Singleton', {
                    singleton: true,
                    foo: function (x) {
                        return x;
                    }
                });

                Ext.define('Foo.SomeClass', {
                    method1: function(x) {
                        return 'b' + x;
                    },

                    statics: {
                        staticMethod: function (x) {
                            return 'B' + x;
                        }
                    }
                });

                // this override comes after its target:
                Ext.define('Foo.SomeClassOverride', {
                    override: 'Foo.SomeClass',

                    method1: function(x) {
                        return 'a' + this.callParent([x*2]) + 'c';
                    },

                    method2: function() {
                        return 'two';
                    },

                    statics: {
                        newStatic: function () {
                            return 'boo';
                        },
                        staticMethod: function (x) {
                            return 'A' + this.callParent([x*2]) + 'C';
                        }
                    }
                }, onCreated);

                obj = Ext.create('Foo.SomeClass');
            });

            afterEach(function () {
                var classes = Ext.ClassManager.classes,
                    alternateToName = Ext.ClassManager.maps.alternateToName;

                try {
                    delete Ext.global.Foo;
                } catch (e) {
                    Ext.global.Foo = null;
                }
                obj = null;

                Ext.each(
                    ['Foo.SingletonOverride', 'Foo.Singleton', 'Foo.SomeClassOverride', 'Foo.SomeClass'],
                    function (className) {
                        try {
                            delete classes[className];
                            delete alternateToName[className];
                        } catch(e) {
                            classes[className] = null;
                            alternateToName[className] = null;
                        }
                    }
                );

            });

            it("should call the createdFn", function () {
                (createFnsCalled.length).should.equal(2);
                (createFnsCalled[0]).should.equal('Foo.Singleton');
                (createFnsCalled[1]).should.equal('Foo.SomeClass');
            });

            it("can add new methods", function() {
                (obj.method2()).should.equal('two');
            });

            it("can add new static methods", function() {
                (Foo.SomeClass.newStatic()).should.equal('boo');
            });

            it("callParent should work for instance methods", function() {
                (obj.method1(21)).should.equal('ab42c');
            });

            it("callParent should work for static methods", function() {
                (Foo.SomeClass.staticMethod(21)).should.equal('AB42C');
            });

            it('works with singletons', function () {
                (Foo.Singleton.foo(21)).should.equal(42);
            });
        });

        describe("mixin", function() {
            it("should have all properties of mixins", function() {
                var obj = new subClass;
                (obj.mixinProperty1).should.equal('mixinProperty1');
                (obj.mixinProperty2).should.equal('mixinProperty2');
                Ext.isDefined(obj.mixinMethod1).should.be.ok;
                Ext.isDefined(obj.mixinMethod2).should.be.ok;
                obj.config.mixinConfig.should.equal('mixinConfig');
            });
        });

        describe("config", function() {
            it("should merge properly", function() {

                var obj = new subClass;

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

                var obj = new subClass;

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

                (obj.getName()).should.equal('newName');
                (obj.getIsCool()).should.equal(false);
                (obj.getMembers().aaron).should.equal('Aaron Conran');
            });

            it("should not share the same config", function() {
                var obj1 = new subClass({
                    name: 'newName',
                    isCool: false,
                    members: {
                        aaron: 'Aaron Conran'
                    }
                });

                var obj2 = new subClass();

                obj2.getName().should.not.equal('newName');
            });
        });

        describe("overriden methods", function() {
            it("should call self constructor", function() {
                var obj = new subClass;
                obj.subConstrutorCalled.should.be.ok;
            });

            it("should call parent constructor", function() {
                var obj = new subClass;
                obj.parentConstructorCalled.should.be.ok;
            });

            it("should call mixins constructors", function() {
                var obj = new subClass;
                obj.mixinConstructor1Called.should.be.ok;
                obj.mixinConstructor2Called.should.be.ok;
            });
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
