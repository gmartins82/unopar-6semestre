/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Unopar.Application',

    name: 'Unopar',

    requires: [
        // This will automatically load all classes in the Unopar namespace
        // so that application classes do not need to require each other.
        'Unopar.*'
    ],

    // The name of the initial view to create.
    mainView: 'Unopar.view.Main'
});
