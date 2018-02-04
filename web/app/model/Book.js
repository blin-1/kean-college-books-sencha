Ext.define('KeanBooks.model.Book', {
    extend: 'KeanBooks.model.Entity',
    requires: ['KeanBooks.classes.Constants'],
    fields: [
             
        { name: 'title', 	type: 'string' },
        { name: 'author',	type: 'string' },
        { name: 'edition',	type: 'string' }
        
    ],
    
    proxy: {
        type: 'rest',
        url : KeanBooks.classes.Constants.APP_SERVER_URL + 'books/',
        reader : {
            rootProperty : 'rows'
        },
		api: {
		    create  : KeanBooks.classes.Constants.APP_SERVER_URL + 'books/create',
		    read    : KeanBooks.classes.Constants.APP_SERVER_URL + 'books/',
		    update  : KeanBooks.classes.Constants.APP_SERVER_URL + 'books/update',
		    destroy : KeanBooks.classes.Constants.APP_SERVER_URL + 'books/destroy'
		}
    }
    
});
