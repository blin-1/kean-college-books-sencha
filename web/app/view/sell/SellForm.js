/**
 * This view is sell form.
 */
Ext.define('KeanBooks.view.sell.SellForm', {
    extend: 'Ext.form.Panel',
    xtype: 'sell-form',
    controller: 'sell',
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
					name  : 'id',
					label : 'ISBN',
					readOnly : true,
					bind :  '{book.id}'
	          },
	          {
					xtype : 'numberfield',
					name  : 'bestPrice',
					placeHolder: 'N/A', 
					label : 'Best Offer',
					readOnly : true,
					bind :  '{bid.price}'
	          },
	          {
					xtype : 'numberfield',
					name  : 'price',
					label : 'Your price'
	          },
	          {
					xtype : 'textfield',
					name  : 'notes',
					label : 'Notes'
	          },
			  {
					xtype : 'toolbar',
					docked : 'bottom',
					layout : 'vbox',
					items : [ 
					    {
							xtype : 'button',
							reference : 'betButton',
							text : 'List it for sale',
							//iconCls: 'x-fa fa-check',
							handler : 'onBet'
						} 
					]
			  }
	        ]
});