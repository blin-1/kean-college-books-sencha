Ext.define('KeanBooks.store.Bids', {
    extend: 'Ext.data.Store',
    storeId: 'bids',
    model: 'KeanBooks.model.Bid',
	getBestDeal : function () {		
		return this.getAt(this.getCount()-1);
	}
});
