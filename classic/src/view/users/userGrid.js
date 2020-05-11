/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.users.userGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userGrid',
    title: 'UserDetails',
    controller: 'Grid',
    id:'userGrid_list',
    /*requires: [
        'MyApp.store.users.user',
    ],*/
    
    viewModel: {
        type: 'userGrid'
    },
    /*bind: {
            store: '{users.user}'
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
        text: 'Id',
        dataIndex: 'id'
    },
    {
        text: 'FirstName',
        dataIndex: 'firstname'

    },
    {
        text: 'MiddleName',
        dataIndex: 'middlename'
    },
    {
        text: 'LastName',
        dataIndex: 'lastname'
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

