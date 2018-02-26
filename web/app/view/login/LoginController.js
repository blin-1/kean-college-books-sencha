/**
 * This class is the controller for the  for LoginForm.
 */
Ext.define('KeanBooks.view.book.LoginController', {
    extend: 'Ext.app.ViewController',
    id : 'LoginController',
    alias: 'controller.login',
    requires: ['KeanBooks.classes.Constants',
               'KeanBooks.classes.Credentials',
               'KeanBooks.classes.Events'],
    
    auth2 : null,
    
/*    control: {
        'emailfield[reference=emailField]': {
        	validitychange: 'onEmailChange'
        }
    },*/
    
    
    init : function () {
    
       	var me = this;
    	var auth2; 		// The Sign-In object.
    	
    	var appStart = function() {
    	  gapi.load('auth2', initSigninV2);
    	};

    	var initSigninV2 = function() {
    	  
    	  auth2 = gapi.auth2.init({
    	      client_id: KeanBooks.classes.Credentials.OATH2_CLIENT_ID,
    	      scope: 'profile'
    	  });

    	  // Listen for sign-in state changes.
    	  auth2.isSignedIn.listen(signinChanged);

    	  // Listen for changes to current user.
    	  auth2.currentUser.listen(userChanged);

    	  // Sign in the user if they are currently signed in.
    	  if (auth2.isSignedIn.get() == true) {
    	    auth2.signIn();
    	  }
    	  
    	  // Start with the current live values.
    	  refreshValues();
    	  
    	  // save reference   
       	  me.auth2 = auth2;
       	  
    	};

    	var refreshValues = function() {
      	  if (auth2){
      	    me.setModelState(auth2.isSignedIn.get());
      	  }
      	};
    	
    	var signinChanged = function (val) {
    	  me.setModelState(val);
    	};

    	var userChanged = function (user) {
	  	   	if (auth2.isSignedIn.get()){
	  	   		me.setModelState(true);
		   	}
    	};
    	
    	appStart();
    	
    },
    
    onGoogleLogin: function (button) {

    	this.auth2.signIn();	   	
    
    },
            
    onLogout: function (btn) {
    	
    	this.auth2.signOut();
	    
    },
    

    
    setModelState: function (signedIn) {
    	
   		var user = this.getViewModel().get('user');
   		var emailField = this.lookup('emailField');
   		var googleLoginButton = this.lookup('googleLoginButton');
   		var googleLogoutButton = this.lookup('googleLogoutButton');
	    if (!signedIn){
		    user.set('id',undefined);
		    user.set('name',undefined);
		    user.set('firstName',KeanBooks.classes.Constants.EMPTY_NAME);
		    user.set('lastName',undefined);
		    user.set('imageUrl',undefined);
		    user.set('email',KeanBooks.classes.Constants.EMPTY_MAIL_TEXT);
		    // not implementing email login yet
		    //this.lookup('emailField').enable();
		    emailField.setRequired(true);
		    googleLogoutButton.hide();
		    googleLoginButton.show();
	    }else{
	   		var googleUser	= this.auth2.currentUser.get();
	   		user.set('id',googleUser.getBasicProfile().getId());
		    user.set('name',googleUser.getBasicProfile().getName());
		    user.set('firstName',googleUser.getBasicProfile().getGivenName());
		    user.set('lastName',googleUser.getBasicProfile().getFamilyName());
		    user.set('imageUrl',googleUser.getBasicProfile().getImageUrl());
		    user.set('email',googleUser.getBasicProfile().getEmail());
		    //this.lookup('emailField').disable();
		    emailField.setRequired(false);
		    googleLogoutButton.show();
		    googleLoginButton.hide();
	    };
	    this.fireEvent(KeanBooks.classes.Events.USER_STATUS_CHANGE);
    }
    
    /*    onEmailLogin: function (button) {
	
	// not implementing that yet
	return;
	var email = this.lookup('emailField');
	var model = this.getViewModel();
	//errors = model.getValidation();
	//console.log('errors',errors)
	//errors.isValid();
	//console.log('valid',erors.isValid())
	email.disable();
    email.setRequired(false);
    //console.log('validate: ', email..validate());
    //var form=email.up('login-form');
    ////formAllowBlank(false);
    //if (errors.isValid()){
	//    model.set('email',email.getValue());
    //}
    model.set('email',email.getValue())
   	this.fireEvent(KeanBooks.classes.Events.USER_LOGGED_IN_VIA_EMAIL,model);
},

onEmailChange: function (field) {

	//debugger;
	//this.getViewModel().set('email',field.getValue());
    
},*/
    
});
