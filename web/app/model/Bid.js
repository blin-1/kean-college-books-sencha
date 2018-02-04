Ext.define('KeanBooks.model.Bid', {
    extend: 'KeanBooks.model.Bet',    

    proxy: {
        type: 'rest',
        reader : {
            rootProperty : 'rows'
        },
		api: {
		    create  : KeanBooks.classes.Constants.APP_SERVER_URL + 'bids/create',
		    read    : KeanBooks.classes.Constants.APP_SERVER_URL + 'bids/byId',
		    update  : KeanBooks.classes.Constants.APP_SERVER_URL + 'bids/update',
		    destroy : KeanBooks.classes.Constants.APP_SERVER_URL + 'bids/destroy'
		}
    }
});
