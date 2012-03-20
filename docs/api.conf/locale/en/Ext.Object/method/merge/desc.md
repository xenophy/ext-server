Merges any number of objects recursively without referencing them or their children.

    var extjs = {
        companyName: 'Ext JS',
        products: ['Ext JS', 'Ext GWT', 'Ext Designer'],
        isSuperCool: true,
        office: {
            size: 2000,
            location: 'Palo Alto',
            isFun: true
        }
    };
    
    var newStuff = {
        companyName: 'Sencha Inc.',
        products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
        office: {
            size: 40000,
            location: 'Redwood City'
        }
    };
    
    var sencha = Ext.Object.merge(extjs, newStuff);
    
    // extjs and sencha then equals to
    {
        companyName: 'Sencha Inc.',
        products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
        isSuperCool: true,
        office: {
            size: 30000,
            location: 'Redwood City',
            isFun: true
        }
    }
