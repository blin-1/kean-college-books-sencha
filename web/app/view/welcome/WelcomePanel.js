/**
 * This view is a welcome form.
 */
Ext.define('KeanBooks.view.welcome.WelcomePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'welcome-panel',
    centered: true,
    bodyBorder: true,
    bodyPadding: true,
    closeable : false,
    html : '<b style="font-size:40px; color:#33A2FF">' 
    	+ 'Welcome to Kean University' 
    	+ '</br></br> <center>' 
    	+ 'Textbook Auction'
    	+ '</center></b>'
});