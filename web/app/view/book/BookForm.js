/**
 * This view is book form.
 */
Ext.define('KeanBooks.view.book.BookForm', {
    extend: 'Ext.form.Panel',
    xtype: 'book-form',
    controller: 'book',
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
					xtype : 'numberfield',
					name  : 'edition',
					label : 'Edition'
	          },
			  {
					xtype : 'toolbar',
					docked : 'bottom',
					layout : 'vbox',
					items : [ 
					    {
							xtype : 'button',
							reference : 'listButton',
							text : 'Add this book to the list',
							//iconCls: 'x-fa fa-check',
							handler : 'onList'
						}
					]
			  }
	        ]
});