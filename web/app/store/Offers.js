Ext.define('KeanBooks.store.Offers', {
    extend: 'Ext.data.Store',
    storeId: 'offers',
    model: 'KeanBooks.model.Offer',
    getBestDeal : function () {    	
    	return this.getAt(0);
    }
});
