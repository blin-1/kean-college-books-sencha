Ext.define('KeanBooks.store.Books', {
    extend: 'Ext.data.Store',
    storeId: 'books',
    model: 'KeanBooks.model.Book',
    autoLoad: true
});
