Ext.define('KeanBooks.model.Bid', {
    extend: 'KeanBooks.model.Bet',    

    proxy: {
        type: 'rest',
        reader : {
            rootProperty : 'rows'
        },
		api: {
		    create  : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'bids/create',
		    read    : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'bids/byId',
		    update  : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'bids/update',
		    destroy : KeanBooks.classes.Credentials.APP_SERVER_BASE_URL + 'bids/destroy'
		}
    }
});
