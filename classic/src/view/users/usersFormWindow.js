Ext.define('MyApp.view.users.usersFormWindow', {
    extend: 'Ext.window.Window',

    alias: 'users.userform',


    controller:'usersForm',
    title: 'UserForm',
    height: 450,
    width: 300,    
    bodyPadding: 10,
    defaultType: 'textfield',
    items: {
        xtype: 'form',

        items: [{
            xtype: 'numberfield',
            anchor: '100%',
            name: 'Id',
            fieldLabel: 'User Id',
            allowBlank: false,
            minLength: '2',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            allowBlank: false,
            minLength: '3'

        },
        {
            xtype: 'textfield',
            fieldLabel: 'Middle Name',
            name: 'middleName',
            allowBlank: false,
            minLength: '3'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false,
            minLength: '3'

        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age',
            allowBlank: false,
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: true,
            minValue: '0'
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'Gender',
            name: 'gender',
            defaultType: 'radiofield',
            columns: 1,
            verticale: false,
            items: [
                {
                    boxLabel: 'Male',
                    inputValue: 'male',
                    id: 'male'
                },
                {
                    boxLabel: 'Female',
                    inputValue: 'female',
                    id: 'female'
                },
                {
                    boxLabel: 'Others',
                    inputValue: 'others',
                    id: 'others'
                }
            ]
        }
        ],

        //xtype: 'button', 
        buttons: [

            {
                text: 'submit',
                handler:'OnSubmit' 
            },

            {
                
                text: 'Close',
                handler:'closeWindow' 
                

            }
        ]
    }



});