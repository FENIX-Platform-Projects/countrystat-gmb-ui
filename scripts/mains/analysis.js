/*global require*/

var pathProjectRoot = "../../";
var projectRoot = "./";
var submoduleRoot = './submodules/';

require.config({
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },
    paths: {
        compilerPaths: pathProjectRoot + 'submodules/fenix-ui-common/js/Compiler',
        commonPaths: pathProjectRoot + 'submodules/fenix-ui-common/js/paths',
        menuPaths: pathProjectRoot + 'submodules/fenix-ui-menu/src/js/paths',
        dashboardPaths: pathProjectRoot + 'submodules/fenix-ui-dashboard/src/js/paths',
        chartPaths: pathProjectRoot + 'submodules/fenix-ui-chart-creator/src/js/paths',
        mapPaths: pathProjectRoot + 'submodules/fenix-ui-map-creator/src/js/paths',
        tablePaths: pathProjectRoot + 'submodules/fenix-ui-table-creator/src/js/paths',
        filterPaths: pathProjectRoot + 'submodules/fenix-ui-filter/src/js/paths',
        analysisPaths: pathProjectRoot + 'submodules/fenix-ui-analysis/src/js/paths',
        olapPaths: pathProjectRoot + 'submodules/fenix-ui-olap/src/js/paths',
        reportPaths: pathProjectRoot + 'submodules/fenix-ui-reports/src/js/paths',
        visualizationPaths: pathProjectRoot + 'submodules/fenix-ui-visualization-box/src/js/paths',
        dataEditorPaths: pathProjectRoot + 'submodules/fenix-ui-DataEditor/js/paths',
        dsdEditorPaths: pathProjectRoot + 'submodules/fenix-ui-DSDEditor/js/paths',
        metadataEditorPaths: pathProjectRoot + 'submodules/fenix-ui-metadata-editor/js/paths',
        metadataViewerPaths: pathProjectRoot + 'submodules/fenix-ui-metadata-viewer/src/js/paths',
        catalogPaths: pathProjectRoot + 'submodules/fenix-ui-catalog/src/js/paths',
        dataManagementPaths: pathProjectRoot + 'submodules/fenix-ui-data-management/src/js/paths',
        fenixMap: pathProjectRoot + 'submodules/fenix-ui-map/src/paths'
    }
});

require([
    "compilerPaths",
    "commonPaths",
    "menuPaths",
    "filterPaths",
    "analysisPaths",
    "catalogPaths",
    "visualizationPaths",
    "olapPaths",
    "metadataViewerPaths",
    "chartPaths",
    "mapPaths",
    "reportPaths",
    "fenixMap",
    "dashboardPaths"
], function (Compiler, Common, Menu, Filter, Analysis, Catalog, Box, Olap, MetadataViewer, ChartCreator, MapCreator, Report, Map, Dashboard) {

    'use strict';

    var submodules_path = projectRoot + '../../submodules/';

    var commonConfig = Common;
    commonConfig.baseUrl = submodules_path + 'fenix-ui-common/js';

    var catalogConfig = Catalog;
    catalogConfig.baseUrl = submodules_path + 'fenix-ui-catalog/src/js';

    var menuConfig = Menu;
    menuConfig.baseUrl = submodules_path + 'fenix-ui-menu/src/js';

    var analysisConfig = Analysis;
    analysisConfig.baseUrl = submodules_path + 'fenix-ui-analysis/src/js';

    var boxConfig = Box;
    boxConfig.baseUrl = submodules_path + 'fenix-ui-visualization-box/src/js';

    var filterConfig = Filter;
    filterConfig.baseUrl = submodules_path + 'fenix-ui-filter/src/js';

    var olapConfig = Olap;
    olapConfig.baseUrl = submodules_path + 'fenix-ui-olap/src/js';

    var metadataViewerConfig = MetadataViewer;
    metadataViewerConfig.baseUrl = submodules_path + 'fenix-ui-metadata-viewer/src/js';

    var chartConfig = ChartCreator;
    chartConfig.baseUrl = submodules_path + 'fenix-ui-chart-creator/src/js';

    var mapCreatorConfig = MapCreator;
    mapCreatorConfig.baseUrl = submodules_path + 'fenix-ui-map-creator/src/js';

    var reportConfig = Report;
    reportConfig.baseUrl = submodules_path + 'fenix-ui-reports/src/js';

    var mapConfig = Map;
    mapConfig.baseUrl = submodules_path + 'fenix-ui-map/src/js';

    var dashboardConfig = Dashboard;
    dashboardConfig.baseUrl = submodules_path + 'fenix-ui-dashboard/src/js';


    Compiler.resolve([commonConfig, catalogConfig, menuConfig, filterConfig, analysisConfig, boxConfig, olapConfig, metadataViewerConfig, chartConfig, mapCreatorConfig, reportConfig, mapConfig, dashboardConfig], {
        placeholders: {"FENIX_CDN": "//fenixrepo.fao.org/cdn"},
        config: {
            waitSeconds : 30,

            // Specify the paths of vendor libraries
            paths: {
                host: '../analysis/host',
                underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                'packery': '{FENIX_CDN}/js/packery/1.4.3/dist/packery.pkgd.min',

                'host/config' : '../../config/config',
                'fx-menu/templates': '../../scripts/templates',


                //Components configuration
                //            "fx-catalog/config/fx-catalog-blank-filter": '../../config/submodules/catalog/blankFilter',
                //              'fx-analysis/config/services' : '../../config/submodules/analysis/services',


//                'fx-catalog/config/config' : '../../config/submodules/fx-catalog/configAnalisi',
                'fx-common/config/auth_users': "../../config/auth_users.json",

                //    'fx-submodules/config/baseConfig': '../../config/submodules/config_base',

                // METADATA VIEWER
                //      'fx-md-v/config/': '../../config/submodules/fx-md-viewer/',
                //        'fx-md-v/config/config': '../../config/submodules/fx-md-viewer/config',

                //          'fx-report/config/md-export/config': '../../config/submodules/fx-report/md-export/config'
            },

            // Underscore and Backbone are not AMD-capable per default,
            // so we need to use the AMD wrapping of RequireJS
            shim: {
                underscore: {
                    exports: '_'
                }
            }
            // For easier development, disable browser caching
            // Of course, this should be removed in a production environment
            //, urlArgs: 'bust=' +  (new Date()).getTime()
        }
    });

    require(['host'], function (Host) {

        new Host().start();

    });
});