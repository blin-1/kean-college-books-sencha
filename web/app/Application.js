/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('KeanBooks.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KeanBooks',
    
    requires : ['KeanBooks.store.Books','KeanBooks.store.Bids','KeanBooks.store.Offers'],
                
    stores: [
             
             //add global / shared stores here
             'KeanBooks.store.Books',
             'KeanBooks.store.Offers',
             'KeanBooks.store.Bids'
        

    ],
    
    launch: function () {
    
    	
    	
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
