Ext.define('KeanBooks.model.Bet', {
    extend: 'KeanBooks.model.Entity',
    
    fields: [
     		
            { name: 'price', type: 'number' },
            { name: 'date',	 type: 'date' },
      		{ name: 'email', type: 'string' },
      		{ name: 'phone', type: 'number' }
      		
 	]

});
