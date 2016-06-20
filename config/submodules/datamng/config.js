/*global define*/
define(['jquery', 'fx-submodules/config/baseConfig'],
    function ($, config_base) {

        'use strict';

        //Use the following example to override properties:
        //services.SERVICE_BASE_ADDRESS = "http://fenix.fao.org/d3s_dev2/msd";

        /*var services = {

            TOP_MENU: {
                url: 'json/fenix-ui-topmenu_config.json',
                active: "createdataset"
            },
            SERVICE_BASE_ADDRESS: "http://fenix.fao.org/d3s_dev/msd"
        };*/

        var cfg = {};
        $.extend(cfg, config_base);

        cfg.TOP_MENU = {
            url: '../../../config/submodules/fx-menu/topmenu_config.json',
            container: '#sidebar-wrapper',
            template: 'fx-menu/templates/side.html',
            active: "createdataset",
            lang: "EN"
        };

        cfg.SECONDARY_MENU = {
            url: '../../../submodules/fenix-ui-data-management/config/secondary_menu.json',
            disable: ['delete', 'close', 'data', 'dsd']
        }

        cfg.SITE_TEMPLATE = 'topmenu';

        cfg.METADATA_PATH = {
            schemaPath: '../../config/submodules/metadataEditor/schemas/'
        };


        cfg.METADATA_SEC = [
            {
                id: "identification", text: "Identification", icon: "img/fenix-catalog-sprite-small.svg",
                state: {
                    selected: true
                }
            },
            {id: "contacts", text: "Contacts"},
            {
                id: "content", text: "Content", children: [
                {id: 'content_ReferencePopulation', text: "Reference Population"},
                {id: 'content_Coverage', text: "Coverage"}
            ]
            },
            {id: "institutionalMandate", text: "Institutional Mandate"},
            {
                id: "statisticalProcessing",
                text: "Statistical Processing",
                state: {disabled: true, opened: true},
                children: [
                    {id: 'statisticalProcessing_primaryDataCollection', text: "Primary Data Collection"},
                    {id: 'statisticalProcessing_secondaryDataCollection', text: "Secondary Data Collection"},
                    {id: 'statisticalProcessing_dataCompilation', text: "Data Compilation"},
                    {id: 'statisticalProcessing_dataValidation', text: "Data Validation"}
                ]
            },
            {
                id: "dataQuality", text: "Data Quality", children: [
                {id: "dataQuality_accuracy", text: "Accuracy"},
                {id: "dataQuality_dataRevision", text: "Data Revision"},
                {id: "dataQuality_relevance", text: "Relevance"},
                {id: "dataQuality_compatibilityCoherence", text: "Compatibility Coherence"},
                {id: "dataQuality_timelinessAndPunctuality", text: "Timeliness and Puctuality"}
            ]
            },
            {
                id: "accessibility", text: "Accessibility", state: {disabled: true, opened: true}, children: [
                {
                    id: "accessibility_dataDissemination",
                    text: "Data Dissemination",
                    state: {disabled: true, opened: true},
                    children: [
                        {id: "accessibility_dataDissemination_distribution", text: "Distribution"},
                        {id: "accessibility_dataDissemination_releasePolicy", text: "Release Policy"}
                    ],

                },
                {id: "accessibility_clarity", text: "Clarity"},
                {id: "accessibility_confidentiality", text: "Confidentiality"}
            ]
            },
            {
                id: "maintenance", text: "Maintenance", children: [
                {id: "maintenance_update", text: "Update"},
                {id: "maintenance_metadataMaintenance", text: "Metadata Maintenance"}
            ]
            }
            //,{ id: "documents", text: "Documents" }
        ];


        cfg.DSD_EDITOR_CONTEXT_SYSTEM = "cstat_gmb";
        cfg.DSD_EDITOR_LABEL = "CountrySTAT Gambia"
        cfg.DSD_EDITOR_DATASOURCES = ["D3S"];

        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_PROD.json";
        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_PROD.json";

        return cfg;
    });