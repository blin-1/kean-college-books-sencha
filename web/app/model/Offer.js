Ext.define('KeanBooks.model.Offer', {
    extend: 'KeanBooks.model.Bet',    
    
    proxy: {
        type: 'rest',
        url : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'offers',
        reader : {
            rootProperty : 'rows'
        },       
        api: {
		    create  : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'offers/create',
		    read    : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'offers/byId',
		    update  : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'offers/update',
		    destroy : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'offers/destroy'
		}

    }
});
