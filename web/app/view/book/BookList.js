Ext.define('KeanBooks.view.book.BookList', {
    extend: 'Ext.grid.Grid',
    xtype: 'book-list',
    controller: 'book',
    requires: [
        'KeanBooks.store.Books',
        'Ext.grid.plugin.ColumnResizing',
        'Ext.grid.plugin.ViewOptions'
    ],
    title: 'Books',
    store: 'books',
    plugins: ['columnresizing','gridviewoptions'],    
    columns: [
		        { text: 'ISBN',		dataIndex: 'id', 			width: 150},
		        { text: 'Title',	dataIndex: 'title', 		width: 250, flex:3, minWidth:150 },
		        { text: 'Author',	dataIndex: 'author', 		width: 150, flex:2, minWidth:100 },
		        { text: 'Edition',	dataIndex: 'edition', 		width: 80 }
    ],
    emptyText : 'Currently there are no books for sale'
});
