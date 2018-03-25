/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 */
Ext.define('KeanBooks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
//        'Ext.MessageBox',

        'KeanBooks.view.welcome.WelcomePanel',
        
        'KeanBooks.view.main.MainController',
        'KeanBooks.view.main.MainModel',
        
        'KeanBooks.view.login.LoginForm',
        
        'KeanBooks.view.book.BookController',
        'KeanBooks.view.book.BookList',
        
        'KeanBooks.view.buy.BuyController',
        'KeanBooks.view.buy.BuyForm',
        
        'KeanBooks.view.sell.SellController',
        'KeanBooks.view.sell.SellForm',
        
        'KeanBooks.model.User',
        'KeanBooks.model.Book',
        'KeanBooks.model.Offer',
        'KeanBooks.model.Bid',
        'KeanBooks.classes.Constants',
        'KeanBooks.classes.Events'

    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        	{
            	hidden : true,
            	title: 'None',
	            items: [{xtype: 'welcome-panel'}]
        	},
            {
	            title: 'Browse',
	            iconCls: 'x-fa fa-home',
	            layout: 'fit',
	            items: [{xtype: 'book-list'}]
        	},
        	{
	            title: KeanBooks.classes.Constants.OFFER_TO_BUY,
	            iconCls: 'x-fa fa-users',
                items: [{xtype: 'buy-form',title: KeanBooks.classes.Constants.OFFER_TO_BUY}]
        	},
        	{
	            title: KeanBooks.classes.Constants.OFFER_TO_SELL,
	            iconCls: 'x-fa fa-users',
                items: [{xtype: 'sell-form',title: KeanBooks.classes.Constants.OFFER_TO_SELL}]
        	},
        	{
        		title: 'Sign In',
	            iconCls: 'x-fa fa-user',	 
	            items: [{xtype: 'login-form'}]
	        }
    ]
});
