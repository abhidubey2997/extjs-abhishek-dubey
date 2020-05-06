Ext.define('MyApp.store.users.user', {
    extend: 'Ext.data.Store',

    alias: 'store.users.user',

    model: 'MyApp.model.users.user',


    data: { items: [
            {
                id: '11',
                firstName: 'abhi',
                middleName: 'jeet',
                lastName: 'kumar',
                age: '21',
                gender: 'male'
            },
            {
                id: '121',
                firstName: 'abhi',
                middleName: 'jeet',
                lastName: 'kumar',
                age: '52',
                gender: 'male'
            },
            {
                id: '13',
                firstName: 'abhi',
                middleName: 'jeet',
                lastName: 'kumar',
                age: '35',
                gender: 'male'
            }
           
            ]},
           // data: { items: [] },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
}); 
