Ext.define('KeanBooks.model.Entity', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'rowId', 	type: 'number' },
        { name: 'id',	 	type: 'string' }        
    ],
    
    idProperty : 'rowId'

});
