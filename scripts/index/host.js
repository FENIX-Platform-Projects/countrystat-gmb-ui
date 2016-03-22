/*global define*/
define([
    'jquery',
    'underscore',
    'fx-menu/start',
    'host/config',
    'progressbar',
    'fx-common/AuthManager',
    'amplify'
], function ($, _,TopMenu, C, ProgressBar, AuthManager) {

    'use strict';

    var s = {
        PERCENTAGE_ONE : '#percentage-one',
        PERCENTAGE_TWO : '#percentage-two'
    };

    function Host() {
    }

    Host.prototype.initFenixComponent = function () {


        var self = this;
        this.initPageStructure();

        var menuConf = {
            url: C.TOP_MENU,
            active: 'home',
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

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        this.initPercentageAnimations();

    };

    Host.prototype.initPercentageAnimations = function () {

        var c ={
            color: '#db514b',
            strokeWidth: 10,
            trailWidth: 9,
            trailColor: "rgba(255,255,255,0.2)",
            duration: 1500,
            easing : 'easeOut',
            text: {
                value: '0'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        };

        var circle = new ProgressBar.Circle(s.PERCENTAGE_ONE, c);

        circle.animate(0.54);

        var circle_two = new ProgressBar.Circle(s.PERCENTAGE_TWO, c);

        circle_two.animate(0.46);

    };



    return Host;

});