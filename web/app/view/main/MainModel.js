/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('KeanBooks.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires : ['KeanBooks.classes.Constants','KeanBooks.model.User'],
    alias: 'viewmodel.main',
    data: {
        name: 'KeanBooks',    
        book: 	undefined,
        ask:  	undefined,
        bid:  	undefined,
        user:	new KeanBooks.model.User({
        	    id	: undefined,
        	    name: undefined,
        	    firstName: KeanBooks.classes.Constants.EMPTY_NAME,
        	    lastName: undefined,
        	    imageUrl: undefined,
        	    email: KeanBooks.classes.Constants.EMPTY_MAIL_TEXT		
        })
    }

});
