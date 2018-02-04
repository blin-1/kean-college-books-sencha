/**
 * This view is login form.
 */
Ext.define('KeanBooks.view.login.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    requires : ['KeanBooks.classes.Constants'],
    floating: true,
    centered: true,
    bodyBorder: true,
    bodyPadding: true,
    closeable: false,
    width:450,
    controller: 'login',
    viewModel: {
        type: 'main'  
    },
    modal: true,    
    bind: {
        title: 'Welcome, {user.firstName}'
    },
    defaultType: 'textfield',
    items: [
       {
        xtype : 'emailfield',
        reference : 'emailField',
    	name:  'email',
        label: 'e-Mail',
        bind: '{user.email}',
        placeHolder: KeanBooks.classes.Constants.EMPTY_MAIL_TEXT,
        required : true,
        readOnly:  true
       },
       {
        xtype: 'toolbar',
        docked: 'bottom',
        layout : 'vbox',
        items: [ {
            xtype: 'button',
            reference : 'googleLoginButton',
            text: 'Google Login',
            //iconCls: 'x-fa fa-check',
            handler: 'onGoogleLogin'
        },
/*        {
            xtype: 'button',
            text: 'Email Login',
            iconCls: 'x-fa fa-check',
            handler: 'onEmailLogin'
        },*/
        //'->',
        {
            xtype: 'button',
            reference : 'googleLogoutButton',
            text: 'Logout',
            //iconCls: 'x-fa fa-close',
            handler: 'onLogout'
        }
        ]
    }]

});