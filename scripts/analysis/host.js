/*global define, amplify*/
define([
    'jquery',
    'underscore',
    'fx-menu/start',
    'fx-analysis/start',
    'host/config',
    'fx-common/AuthManager',
    'amplify'
], function ($, _, TopMenu, Analysis, C, AuthManager) {

    'use strict';

    var s = {
        ANALYSIS_CONTAINER: '#fx-analysis-container',
        CATALOG_CONTAINER: '#fx-catalog-container',
        MODULES_STACK_CONTAINER: '#fx-modules-stack-container',
        OVERLAY: "#overlay",
        OVERLAY_CONTENT: '.overlay-content',
        OVERLAY_OPEN: '.open-overlay',
        OVERLAY_CLOSE: '.close-overlay',
        PAGE_CONTENT: "#analysis-page-content",
        MODAL_METADATA: '#cstat-metadata-modal',
        MODAL_METADATAVIEWER_CONTAINER: '[data-content="metadata-viewer-container"]',

        BTN_EXPORT_METADATA : '.fx-md-report-btn'
    }, catalogs = [], instances = [];


    function Host() {
        this.bindEventListener();
        this.initPage();
    }

    Host.prototype.initPage = function () {

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    };

    Host.prototype.start = function () {
        this.initFenixComponent();
    };

    Host.prototype.initFenixComponent = function () {

        var self  = this;

        // this.$modalMetadata = $(s.MODAL_METADATA);

        //this.$report = new Report();

        var menuConf  = {
            url: C.TOP_MENU,
            active: "analysis",
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

        var analysis = new Analysis({
            $el: s.ANALYSIS_CONTAINER,
            environment : "production",
            defaultSelectors: ['resourceType', 'contextSystem'],
            catalog_default_selectors : ['contextSystem', 'resourceType'],
            cache : false,
            catalog_selectors_registry : {
                contextSystem : {
                    selector : {
                        id : "dropdown",
                        source : [
                            {value : "cstat_gmb", label : "CountrySTAT Gambia"}
                        ],
                        default : ["cstat_gmb"],
                        hideSummary : true
                    },

                    template : {
                        hideRemoveButton : false
                    },

                    format : {
                        output : "enumeration",
                        metadataAttribute: "dsd.contextSystem"
                    }
                }
            }

        });

    };

    Host.prototype.bindEventListener = function () {

        var self = this;

        //$(s.OVERLAY_OPEN).on('click', _.bind(this.addItem, this));
        $(s.OVERLAY_OPEN).on('click', _.bind(this.toggleOverly, this));

        $(s.OVERLAY).on('click', function (e){

            if( e.target !== this ){
                return;
            }

            self.closeOverly();

        });

    };


    Host.prototype.toggleOverly = function () {

        this.overlayStatus === 'opened' ? this.closeOverly() : this.openOverly();

    };

    Host.prototype.openOverly = function () {
        this.overlayStatus = 'opened';

        $(s.OVERLAY_OPEN).find('img').attr('src', 'css/icons/close-ico.svg');

        $(s.OVERLAY).addClass('show');

        $(window).trigger('resize');

    };

    Host.prototype.closeOverly = function () {

        this.overlayStatus = 'closed';

        $(s.OVERLAY_OPEN).find('img').attr('src', 'css/icons/catalog-ico.svg');

        $(s.OVERLAY).removeClass('show');

        $(window).trigger('resize');

    };

    return Host;

});
