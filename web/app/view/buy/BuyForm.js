/**
 * This view is buy form.
 */
Ext.define('KeanBooks.view.buy.BuyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'buy-form',
    controller: 'buy',
    viewModel: 'main',
    floating: true,
    centered: true,
    width:500,
    bodyBorder: true,
    bodyPadding: true,
    modal: true,
    closeable : false,
	items : [ 
	          {
					xtype : 'numberfield',
					name  : 'id',
					label : 'Book Id',
					readOnly : true,
					hidden : true,
					bind :  '{book.rowId}'
	          },
	          {
					xtype : 'numberfield',
					//name  : 'id',
					label : 'ISBN',
					readOnly : true,
					bind :  '{book.id}'
	          },
	          {
					xtype : 'textfield',
					name  : 'title',
					label : 'Title',
					readOnly : true,
					placeHolder: 'Please select a book from the list', 
					bind :  '{book.title}'
	          }, 
	          {
					xtype : 'textfield',
					name  : 'author',
					label : 'Author',
					readOnly : true,
					placeHolder: 'If not listed, you might have to add it', 
					bind :  '{book.author}'
	          }, 
	          {
					xtype : 'textfield',
					name  : 'edition',
					label : 'Edition',
					readOnly : true,
					bind :  '{book.edition}'
	          },
	          {
					xtype : 'numberfield',
					name  : 'price',
					placeHolder: 'N/A', 
					label : 'Asking Price',
					readOnly : true,
					bind :  '{ask.price}'
	          },
	          {
					xtype : 'textfield',
					name  : 'sellerNotes',
					placeHolder: 'Notes from Seller',
					label : 'Seller Notes',
					readOnly : true,
					bind :  '{ask.notes}'
	          },
/*	          {
					xtype : 'numberfield',
					name  : 'price',
					placeHolder: 'N/A', 
					label : 'Price',
					readOnly : true,
					bind :  '{bid.price}'
	          },*/
	          {
					xtype : 'textfield',
					name  : 'notes',
					placeHolder: 'Notes to Seller [optional]',
					label : 'Notes',
					bind :  '{bid.notes}'
	          },
	          
			  {
					xtype : 'toolbar',
					docked : 'bottom',
					layout : 'vbox',
					items : [ 
					    {
							xtype : 'button',
							reference : 'betButton',
							text : 'Buy it',
							//iconCls: 'x-fa fa-check',
							handler : 'onBet'
						} 
					]
			  }
	        ]
});