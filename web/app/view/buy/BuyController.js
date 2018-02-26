/**
 * This class is the controller for the  for BuyForm.
 */
Ext.define('KeanBooks.view.buy.BuyController', {
    extend: 'Ext.app.ViewController',    
    alias: 'controller.buy',
    
    requires: ['Ext.MessageBox',
               'KeanBooks.classes.Constants'],           
	listen: {
		store: {
			'#offers': {load : 'onBetsLoad'}
		}
	},
	
    onBetsLoad: function (store){
        
    	this.getViewModel().set('ask',store.getBestDeal());
    	
    },
	        
    onBet: function (button) {
    	
    	Ext.Msg.confirm(KeanBooks.classes.Constants.OFFER_TO_BUY, 
    					KeanBooks.classes.Constants.ARE_YOU_SURE, 
    					'onConfirm', this);
    
    },
        
    onConfirm: function (choice) {
    	   
    	if (choice === 'yes') {	 
         	 var bet = new KeanBooks.model.Bid(this.getView().getValues());
    		 bet.set('rowId',0);
    		 bet.set('email',this.getViewModel().get('user').get('email'));
          	 bet.save(
          			{
          				//TODO gen err handler
          	            success: function(record, operation) {
          	            	if (operation._response.responseText.substring(0,2) === "{}"){ // we have a trade
          	            		Ext.Msg.alert('Thank You', 'Your bid of ' + bet.get('price') + ' is accepted and you have a trade', Ext.emptyFn);
              	            	// bids and offers stores have book id added to the proxy at this point 
              	            	Ext.data.StoreManager.lookup('offers').load(); // best deal would be updated in view
          	            	}else{
              	            	Ext.Msg.alert('Thank You', 'Your bid of ' + bet.get('price') + ' is accepted', Ext.emptyFn);
              	            	record.set('rowId',record.get('0'));
              	            	record.commit();
              	            	Ext.data.StoreManager.lookup('bids').add(record);
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
