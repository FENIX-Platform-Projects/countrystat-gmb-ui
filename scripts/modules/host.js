/*global define*/
define([
    'jquery',
    'underscore',
    'fx-menu/start',
    'host/config',
    'fx-common/AuthManager',
    'amplify'
], function ($, _,TopMenu, C, AuthManager) {

    'use strict';

    function Host() {
    }

    Host.prototype.initFenixComponent = function () {

        var self = this;

        this.initPageStructure();

        var menuConf  ={
            url: C.TOP_MENU,
            active: 'modules',
            container: '#sidebar-wrapper',
            template: 'fx-menu/templates/side.html',
            lang: "EN"

        };
        var menuConfAuth = _.extend({}, menuConf, {
            hiddens: ['login']
        }), menuConfPub = _.extend({}, menuConf, {
            hiddens: ['createdataset',  'logout']
        });

        this.authManager = new AuthManager({
            onLogin: function () {
                self.topMenu.refresh(menuConfAuth);
            },
            onLogout: function () {
                self.topMenu.refresh(menuConfPub);
            },
            modal : {
                keyboard: true,
                backdrop: false
            }
        });

        this.topMenu = new TopMenu(this.authManager.isLogged() ? menuConfAuth : menuConfPub);

    };

    Host.prototype.initPageStructure = function () {

        // Menu Toggle Script

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

    };

    return Host;

});