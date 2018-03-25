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
					xtype : 'numberfield',
					name  : 'id',
					label : 'ISBN'
	          },
	          {
					xtype : 'textfield',
					name  : 'title',
					label : 'Title'
	          }, 
	          {
					xtype : 'textfield',
					name  : 'author',
					label : 'Author'
	          }, 
	          {
					xtype : 'textfield',
					name  : 'edition',
					label : 'Edition'
	          },
	          {
					xtype : 'numberfield',
					name  : 'price',
					label : 'Price'
	          },
	          {
					xtype : 'emailfield',
					name  : 'email',
					label : 'E-mail to contact',
					bind :  '{user.email}',
					readOnly : true
					
	          },
	          {
					xtype : 'textfield',
					name  : 'notes',
					label : 'Notes',
					placeHolder: 'Notes to Buyer'
	          },
			  {
					xtype : 'toolbar',
					docked : 'bottom',
					layout : 'vbox',
					items : [ 
					    {
							xtype : 'button',
							reference : 'betButton',
							text : 'Offer it for sale',
							//iconCls: 'x-fa fa-check',
							handler : 'onBet'
						} 
					]
			  }
	        ]
});