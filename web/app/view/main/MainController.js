/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('KeanBooks.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    id : 'MainController',
    requires : ['KeanBooks.classes.Events','KeanBooks.classes.Constants'],            
    
    pendingNavigation : undefined,
                
    listen: {
        controller: {
            '#LoginController': {
            	USER_STATUS_CHANGE : 	'checkPendingNavigation'
            },
			'*': {
				REDIRECT_TO :		 	'redirectTo'
			}
        }
    },
    
    control : {
            '[xtype=app-main]' : {
                beforeactiveitemchange : 	'authorize',
                      activeitemchange : 	'loadNecessaryStores'
            }	
    },
    
	checkPendingNavigation: function () {

		if (this.getViewModel().get('user').isLoggedIn()){
			if (this.pendingNavigation){
				this.getView().setActiveItem(this.pendingNavigation);
				this.pendingNavigation = undefined;
			}
    	};
		
	},
    
    redirectTo: function (panelNumber){

    	this.getView().setActiveItem(panelNumber);
    	
    },
	
    authorize: function (tabPanel, value){
    	
    	var panelNumber = tabPanel.getItems().indexOf(value);
    	
    	if (panelNumber === KeanBooks.classes.Constants.TAB_PANELS.BUY ||
    		panelNumber === KeanBooks.classes.Constants.TAB_PANELS.SELL){
    		return this.allowTo(panelNumber);
    	}else{ 
    		return true;
    	}
    	
    },

    allowTo: function (panelNumber){
		
        if (this.getViewModel().get('user').isLoggedIn()){
        	this.pendingNavigation = undefined;
        	return true;
        }else{
        	this.getView().setActiveItem(KeanBooks.classes.Constants.TAB_PANELS.LOGIN);
        	this.pendingNavigation = panelNumber;
        	return false;
        }
	
	},
	
	loadNecessaryStores: function (tabPanel,value){
		
    	var panelNumber = tabPanel.getItems().indexOf(value);
 
    	if (panelNumber === KeanBooks.classes.Constants.TAB_PANELS.BUY){
    		return Ext.data.StoreManager.lookup('offers').load();
    	};
    	
    	if (panelNumber === KeanBooks.classes.Constants.TAB_PANELS.SELL){
    		return Ext.data.StoreManager.lookup('bids').load();
    	};
    	
    	if (panelNumber === KeanBooks.classes.Constants.TAB_PANELS.BROWSE_BOOKS){
    		return Ext.data.StoreManager.lookup('books').load();
    	};
	}

});