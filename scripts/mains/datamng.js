/*global require*/
// relative or absolute path of Components' main.js
require([
    '../../submodules/fenix-ui-common/js/Compiler',
    '../../submodules/fenix-ui-common/js/paths',
    '../../submodules/fenix-ui-datamanagement-commons/js/paths',
    '../../submodules/fenix-ui-DataEditor/js/paths',
    '../../submodules/fenix-ui-DSDEditor/js/paths',
    '../../submodules/fenix-ui-metadata-editor/js/paths',
    '../../submodules/fenix-ui-catalog/src/js/paths',
    '../../submodules/fenix-ui-menu/src/js/paths',
    '../../submodules/fenix-ui-data-management/src/js/paths',
    '../../submodules/fenix-ui-filter/src/js/paths'
], function (Compiler, FenixCommons, DataMngCommons, DataEditor, DSDEditor, MetadataEditor, Catalog, Menu, DataMng, Filter) {

    'use strict';

    var dataEditorConfig = DataEditor;
    dataEditorConfig.baseUrl = '../../submodules/fenix-ui-DataEditor/js';

    var dataMngCommonsConfig = DataMngCommons;
    dataMngCommonsConfig['baseUrl'] = '../../submodules/fenix-ui-datamanagement-commons/js';

    var dsdEditorConfig = DSDEditor;
    dsdEditorConfig.baseUrl = '../../submodules/fenix-ui-DSDEditor/js';

    var metadataEditorConfig = MetadataEditor;
    metadataEditorConfig.baseUrl = '../../submodules/fenix-ui-metadata-editor/js/';

    var catalogConfig = Catalog;
    catalogConfig.baseUrl = '../../submodules/fenix-ui-catalog/src/js/';

    var menuConfig = Menu;
    menuConfig.baseUrl = '../../submodules/fenix-ui-menu/src/js';

    var dataMngConfig = DataMng;
    dataMngConfig.baseUrl = '../../submodules/fenix-ui-data-management/src/js';

    var fenixCommonConfig = FenixCommons;
    fenixCommonConfig.baseUrl = '../../submodules/fenix-ui-common/js';

    var filterConfig = Filter;
    filterConfig.baseUrl = '../../submodules/fenix-ui-filter/src/js/';

    Compiler.resolve([dataEditorConfig, dataMngCommonsConfig, dsdEditorConfig, metadataEditorConfig, catalogConfig, menuConfig, dataMngConfig, fenixCommonConfig, filterConfig],
        {
            placeholders: {"FENIX_CDN": "//fenixrepo.fao.org/cdn"},
            config: {
                waitSeconds : 30,

                locale: 'en',

                // Specify the paths of vendor libraries
                paths: {
                    underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                    backbone: "{FENIX_CDN}/js/backbone/1.1.2/backbone.min",
                    //handlebars: "{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
                    //MOVE ON THE CDN!!!
                    handlebars: "../../submodules/fenix-ui-metadata-editor/lib/handlebars",
                    chaplin: "{FENIX_CDN}/js/chaplin/1.0.1/chaplin.min",
                    amplify: '{FENIX_CDN}/js/amplify/1.1.2/amplify.min',
                    rsvp: '{FENIX_CDN}/js/rsvp/3.0.17/rsvp',
                    'bootstrap-datetimepicker': "{FENIX_CDN}/js/bootstrap-datetimepicker/3.1.3/bootstrap-datetimepicker",
                    'packery': '{FENIX_CDN}/js/packery/1.4.3/dist/packery.pkgd.min',

                    //'fx-menu/templates': '../../scripts/templates',
                    'fx-d-m/templates/site' : '../../scripts/templates/site-sidemenu.hbs',

                    pnotify: '{FENIX_CDN}/js/pnotify/2.0.1/pnotify.custom.min',
                    'fx-menu/templates': '../../scripts/templates',

                    'fx-common/config/auth_users': "../../config/auth_users.json",


                    'fx-d-m/config/config': '../../config/submodules/datamng/config',
                    //'fx-catalog/config/config': '../../config/submodules/catalog/config',

                    /*
                     'fx-d-m/templates/site' : '../../submodules/fenix-ui-data-management/src/js/templates/site-sidemenu.hbs',
                     */

                    'fx-submodules/config/baseConfig': '../../config/submodules/config_base'

                },

                // Underscore and Backbone are not AMD-capable per default,
                // so we need to use the AMD wrapping of RequireJS
                shim: {
                    underscore: {
                        exports: '_'
                    },
                    backbone: {
                        deps: ['underscore', 'jquery'],
                        exports: 'Backbone'
                    },
                    handlebars: {
                        exports: 'Handlebars'
                    },
                    amplify: {
                        deps: ['jquery'],
                        exports: 'amplifyjs'
                    }
                }
                // For easier development, disable browser caching
                // Of course, this should be removed in a production environment
                //, urlArgs: 'bust=' +  (new Date()).getTime()
            }
        });

    // Bootstrap the application
    require([
        'fx-d-m/start',
        'fx-d-m/routes',
        'fx-common/AuthManager'
    ], function (Application, routes, AuthManager) {


        var authMAnager = new AuthManager();
        if(authMAnager.isLogged()) {


            var app = new Application({
                routes: routes,
                controllerSuffix: '-controller',
                controllerPath: '../../submodules/fenix-ui-data-management/src/js/controllers/',
                root: '/fenix/',
                pushState: false
            });
        }else{
            window.location.replace("./index.html");
        }
    });
});