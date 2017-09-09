Ext.define('Unopar.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Unopar.view.auth.Login'
    ],
    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },
    routes: {
        ':node': 'onRouteChange'
    },
    onToggleMenu: function (button, pressed) {
        var me = this,
            treelist = me.lookupReference('navigationTreeList'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);
        if (pressed) {
            me.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(me.oldWidth);
        }

        if (Ext.isIE8) {
            me.repaintList(treelist, pressed);
        }
    },
    repaintList: function (treelist, microMode) {
        treelist.getStore().getRoot().cascade(function (node) {
            var item, toolElement;

            item = treelist.getItem(node);

            if (item && item.isTreeListItem) {
                if (microMode) {
                    toolElement = item.getToolElement();

                    if (toolElement && toolElement.isVisible(true)) {
                        toolElement.syncRepaint();
                    }
                }
                else {
                    if (item.element.isVisible(true)) {
                        item.iconElement.syncRepaint();
                        item.expanderElement.syncRepaint();
                    }
                }
            }
        });
    },
    onLogout: function (button, Opts) {
        this.redirectTo('login');
    },
    onRouteChange:function(id){
        if (id == 'login') {
            Ext.widget('auth-login').show();
        } else {
            this.setCurrentView(id);
        }
    },
    lastView: null,
    setCurrentView: function(hashTag) {
        var hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) || store.findNode('viewType', hashTag),
            view = (node && node.get('viewType')) || 'errors-page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag,  // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        me.lastView = newView;
    },
    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);
        }
    },
});
