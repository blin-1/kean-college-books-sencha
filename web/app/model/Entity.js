Ext.define('KeanBooks.model.Entity', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'rowId', 	type: 'number' },
        { name: 'id',	 	type: 'string' }        
    ],
    
    idProperty : 'rowId'
    
/*    proxy: {
        type: 'rest',
        url : 'http://localhost:8888/books/',
        //url: 'https://kean-college-router.appspot.com/books/',
        reader : {
            rootProperty : 'rows'
        }
    }*/
    
 // do not delete - mind not supported PUT on some servers
 /*   proxy : {
        type : 'ajax',
       
        api : {
            read :   'http://localhost:8888' + '/select',
            create : 'http://localhost:8888' + '/create',
            update : 'http://localhost:8888/update',
            destroy :'http://localhost:8888/destroy'
        },
        reader : {
            type : 'json',
            rootProperty : 'rows'
        },
        writer : {
            type : 'json',
            rootProperty : 'data'//,
            allowSingle : false
        }
    }*/

});
