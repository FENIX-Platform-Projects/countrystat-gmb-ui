/*global define*/
define([
    'jquery',
    'underscore',
    'fx-menu/start',
    'host/config',
    'progressbar',
    'fx-common/AuthManager',
    'text!templates/table.hbs',
    'text!templates/legend.hbs',
    'amplify'
], function ($, _,TopMenu, C, ProgressBar,AuthManager ,TableTemplate, LegendTemplate) {

    'use strict';


    var s = {
        TABLE_CONTAINER : '#key-indicator-table-container',
        LEGEND_CONTAINER: '#key-indicator-legend-container'
    };

    function Host() {
    }

    Host.prototype.initFenixComponent = function () {

        var self = this;

        this.initPageStructure();

        var menuConf  = {
            url: C.TOP_MENU,
            active: 'indicators',
            container: '#sidebar-wrapper',
            template: 'fx-menu/templates/side.html',
            lang: "EN"

        };

        var menuConfAuth = _.extend({}, menuConf, {
            hiddens: ['login']
        }), menuConfPub = _.extend({}, menuConf, {
            hiddens: ['createdataset',  'logout']
        });

        $(s.TABLE_CONTAINER).append(TableTemplate);

        $(s.LEGEND_CONTAINER).append(LegendTemplate);


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

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

/*
        this.initPercentageAnimations();
*/

    };

    return Host;

});