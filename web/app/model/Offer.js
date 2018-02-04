Ext.define('KeanBooks.model.Offer', {
    extend: 'KeanBooks.model.Bet',    
    
    proxy: {
        type: 'rest',
        url : KeanBooks.classes.Constants.APP_SERVER_URL + 'offers',
        reader : {
            rootProperty : 'rows'
        },       
        api: {
		    create  : KeanBooks.classes.Constants.APP_SERVER_URL + 'offers/create',
		    read    : KeanBooks.classes.Constants.APP_SERVER_URL + 'offers/byId',
		    update  : KeanBooks.classes.Constants.APP_SERVER_URL + 'offers/update',
		    destroy : KeanBooks.classes.Constants.APP_SERVER_URL + 'offers/destroy'
		}

    }
});
