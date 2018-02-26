/**
 * This class is the controller for the  for BookForm and BookList
 */
Ext.define('KeanBooks.view.book.BookController', {
    extend: 'Ext.app.ViewController',    
    alias: 'controller.book',
    id : 'BookController',
    requires: ['Ext.MessageBox','KeanBooks.classes.Constants','KeanBooks.classes.Events'],
    
    control : {
		'[xtype=book-list]' : {
			
			itemtap : 		'onitemtap',
			itemdoubletap : 'onitemdoubletap'

		}
		
    },	
    
    onitemtap : function(grid) {

		var book = grid.getSelection();
		this.getViewModel().set('book', book);
		this.setItemId(book, 'offers');
		this.setItemId(book, 'bids');

	},
	
	onitemdoubletap : function (grid) {
		
		this.fireEvent(KeanBooks.classes.Events.REDIRECT_TO,KeanBooks.classes.Constants.TAB_PANELS.BUY);
		
	},
    	
    onList: function (button) {
    	
    	Ext.Msg.confirm(KeanBooks.classes.Constants.LIST_A_BOOK, 
    					KeanBooks.classes.Constants.ARE_YOU_SURE, 
    					'onConfirm', this);
    
    },
    
    onConfirm: function (choice) {
   
    	if (choice === 'yes') {	 
    		 var book = new KeanBooks.model.Book(this.getView().getValues());
    		 book.set('rowId',0);
    		 book.save
    		 (
          			{
          				//TODO gen err handler
          	            success: function(record, operation) {
          	            	Ext.Msg.alert('Thank You', 'The book is listed', Ext.emptyFn);
          	            	//Ext.data.StoreManager.lookup('books').add(record);
          	            },
          	            failure: function(record, operation) {
          	            	Ext.Msg.alert('Oops! Something went wrong',  operation.error.response.statusText, Ext.emptyFn);
          	            }    			
          	        }
          	 );
        }	
    },
	
    setItemId : function (book,storeName){
		
    	var store = Ext.getStore(storeName);
       	store.getProxy().setExtraParams({id : book.get('id')});
       	
	}
});
