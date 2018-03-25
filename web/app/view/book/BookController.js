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
	
    setItemId : function (book,storeName){
		
    	var store = Ext.getStore(storeName);
       	store.getProxy().setExtraParams({id : book.get('rowId')});
       	
	}
});
