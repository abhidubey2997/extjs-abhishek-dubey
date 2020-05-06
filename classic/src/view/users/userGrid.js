/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.users.userGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userGrid',

    requires: [
        'MyApp.store.users.user',
    ],
    controller: 'Grid',


    title: 'UserDetails',

    /*bind: {
            store:'users.user'
        },*/

    store: {
        type: 'users.user'
    },

    listeners: {
        itemclick: 'onGridItemClick'
    },
    columns: [{
        xtype: 'rownumberer',
    },
    {
        text: 'id',
        dataIndex: 'id'
    },
    {
        text: 'firstname',
        dataIndex: 'firstName'

    },
    {
        text: 'MiddleName',
        dataIndex: 'middleName'
    },
    {
        text: 'LastName',
        dataIndex: 'lastName'
    },
    {
        text: 'Age',
        dataIndex: 'age'
    },
    {
        text: 'Gender',
        dataIndex: 'gender'
    }
    ],

    viewConfig: {
        stripeRows: false,
        getRowClass: function (record) {
            return record.get('age') > 50 ? 'senior-row' : 'young-row';
        }
    },



});

