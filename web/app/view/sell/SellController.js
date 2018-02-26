/**
 * This class is the controller for the  for SellForm.
 */
Ext.define('KeanBooks.view.sell.SellController', {
    extend: 'Ext.app.ViewController',    
    alias: 'controller.sell',
    requires: ['Ext.MessageBox',
               'KeanBooks.classes.Constants'],           
	listen: {
		   	store: {
				'#bids': {load : 'onBetsLoad'}
			}
	},
	
    onBetsLoad: function (store){
        
    	this.getViewModel().set('bid',store.getBestDeal());
    	
    },
	        
    onBet: function (button) {
    	
    	Ext.Msg.confirm(KeanBooks.classes.Constants.OFFER_TO_SELL, 
    					KeanBooks.classes.Constants.ARE_YOU_SURE, 
    					'onConfirm', this);
    
    },	
	
    onConfirm: function (choice) {
    	   
    	if (choice === 'yes') {	 
         	 var bet = new KeanBooks.model.Offer(this.getView().getValues());
    		 bet.set('rowId',0);
    		 bet.set('email',this.getViewModel().get('user').get('email'));
          	 bet.save(
          			{
          				//TODO gen err handler
          	            success: function(record, operation) {
          	            	if (operation._response.responseText.substring(0,2) === "{}"){
          	            		Ext.Msg.alert('Thank You', 'You have a sale at ' + record.get('price'), Ext.emptyFn);
              	            	// bids and offers stores have book id added to the proxy at this point 
              	            	Ext.data.StoreManager.lookup('bids').load(); // best deal would be updated in view
          	            	}else{
              	            	Ext.Msg.alert('Thank You', 'The book is listed at' + record.get('price'), Ext.emptyFn);
              	            	record.set('rowId',record.get('0'));
              	            	record.commit();
              	            	Ext.data.StoreManager.lookup('offers').add(record);
          	            	}
          	            },
          	            failure: function(record, operation) {
          	            	Ext.Msg.alert('Oops! Something went wrong',  operation.error.response.statusText, Ext.emptyFn);
          	            }    			
          	        }
          	 );
        }
    
    }
    
});
