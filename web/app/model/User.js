Ext.define('KeanBooks.model.User', {
    extend: 'Ext.data.Model',
    requires : ['KeanBooks.classes.Constants'],
    
    fields: [
        { name: 'username', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' }
    ],

    getFullName: function() {
	    var fn = this.get('firstName'),
	    	ln = this.get('lastName');
	    return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || 'Anonymous');
    },

	getShortName: function() {
	    var fn = this.get('firstName'),
	    	ln = this.get('lastName');
	    return (fn) ? (fn) : (ln || 'Anonymous');
	},

    isLoggedIn: function() {
    	return this.get('email') !==  KeanBooks.classes.Constants.EMPTY_MAIL_TEXT; 
    }
    
});
