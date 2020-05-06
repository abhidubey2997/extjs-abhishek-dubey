Ext.define('MyApp.view.users.recordForm', {
    extend: 'Ext.window.Window',
    closable: true,
    width: 320,
    //Define xtype
    // xtype: 'userform',
    alias: 'users.recordform',
    model: true,
    autoDestroy: false,
    floating: true,
    viewModel: {
        type: 'recordForm'
    },

   

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    

    defaults: {
        xtype: 'textfield',
        margin: 10,
        labelAlign: 'top'
    },


    items: [{
        fieldLabel: 'Id',
        bind: {
            value: '{userData.id}'
        },
        name: 'Id'
    }, {
        fieldLabel: 'FirstName',
        bind: {
            value: '{userData.FirstName}'
        },
        name: 'FirstName'

    }, {
        fieldLabel: 'MiddleName',
        bind: {
            value: '{userData.MiddleName}'
        },
        name: 'MiddleName'

    }, {
        fieldLabel: 'LastName',
        bind: '{lastName}'
        //},
        //name: 'LastName'

    }, {
        fieldLabel: 'Age',
        bind: {
            value: '{userData.dateOfBirth}'
        },
        name: 'Age'

    }, {
        fieldLabel: 'Gender',
        bind: {
            value: '{userData.Gender}'
        },
        name: 'Gender'

    }],
});