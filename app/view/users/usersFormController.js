Ext.define('MyApp.view.users.userFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usersForm',

    /*OnSubmit: function () {
        var store = this.getStore('users.user');
        //store = this.getStore();
        console.log(store);
    //console.log(store.getAt(0).get('id'));
        alert(store);
    },*/



    OnSubmit: function(sender,record, ){
        //var form = this.up('form').getForm();
 
        var data= this.getView().getValues();
        alert(JSON.stringify(data.getValues()));
        console.log(data);
        var store = this.getView().getStore('users.user'); 
        console.log(store);
 
        store.add(data);
       
    },




    closeWindow: function () {
        //this.up('window').close();
        //Ext.Msg.alert('Alert box', 'form clossed sussesfully.');
        alert("window Closed");
    }
});

