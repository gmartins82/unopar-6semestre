/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Unopar.Application', {
    extend: 'Ext.app.Application',
    name: 'Unopar',
    defaultToken : 'home',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    }
});
