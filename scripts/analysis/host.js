/*global define, amplify*/
define([
    'jquery',
    'underscore',
    'fx-menu/start',
    'fx-ana/start',
    'fx-cat-br/start',
    'fx-md-v/start',
    'fx-report',
    'host/config',
    'fx-common/AuthManager',
    'amplify'
], function ($, _, TopMenu, Analysis, Catalog, MetadataViewer, Report, C, AuthManager) {

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
    };

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

        var self  =this;

        this.$modalMetadata = $(s.MODAL_METADATA);

        this.$report = new Report();

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

        this.analysis = new Analysis({
            container: document.querySelector(s.ANALYSIS_CONTAINER),
            listenToCatalog: {
                active: true,
                event: 'fx.widget.catalog.select'
            },
            stack: {
                active: true,
                container: document.querySelector(s.MODULES_STACK_CONTAINER)
            },
            session: {
                active: false
            }
        }).init();

        this.catalog = new Catalog({

            container: document.querySelector(s.CATALOG_CONTAINER),

            catalog: {
                BLANK_FILTER: C.CATALOG_BLANK_FILTER
            },

            results: {
                actions: {
                    SELECT_RESOURCE: {
                        event: 'select',
                        labels: {
                            EN: 'View'
                        }
                    },
                    METADATA: {
                        event: 'metadata',
                        labels: {
                            EN: 'Metadata'
                        }
                    },
                    DOWNLOAD: {
                        event: 'download',
                        labels: {
                            EN: 'Download'
                        }
                    }

                }
            }

        }).init();
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

        amplify.subscribe('fx.widget.catalog.select', _.bind(this.closeOverly, this));

        amplify.subscribe('fx.widget.catalog.metadata', _.bind(this.onMetadataClick, this));

        amplify.subscribe('fx.widget.catalog.download',_.bind(this.onDownloadClick, this));
    };


    Host.prototype.onMetadataClick = function(model) {

        var self = this;

        this.$modalMetadata.modal('show');

        var metadata = new MetadataViewer();

        self.$modalMetadata.find(s.MODAL_METADATAVIEWER_CONTAINER).empty();

        metadata.init({
            lang: 'en',
            data: model,
            //domain: "rlm_" + request.inputs.indicator[0],
            placeholder: self.$modalMetadata.find(s.MODAL_METADATAVIEWER_CONTAINER)
        });

        self._listenToExportMetadata(model);

    };

    Host.prototype._listenToExportMetadata = function(model) {
        var fileName = model.title['EN'].replace(/[^a-z0-9]/gi, '_').toLowerCase();

        var self = this;
        $(s.BTN_EXPORT_METADATA).on('click', function() {

            var payload = {
                input: {
                    config: {
                        uid: model.uid
                    }
                },
                output: {
                    config: {
                        lang: 'en'.toUpperCase(),
                        fileName: fileName + '.pdf'
                    }
                }
            };

            self.$report.init('metadataExport');
            self.$report.exportData(payload, C.MD_EXPORT_URL);
        });
    };


    Host.prototype.onDownloadClick = function (model) {

        var payload = {
            input:{
                config:{
                    uid: model.uid,
                    environment_url : C.DATA_ENVIROMENT_URL
                }
            },
            output: {
                config:{
                    lang : 'en'.toUpperCase()
                }
            }
        };

        this.$report.init('tableExport');
        this.$report.exportData(payload,C.MD_EXPORT_URL);
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

    /* AUX */
    Host.prototype.addItem = function () {

        var item = {"filter":{"dsd.contextSystem":{"enumeration":["cstat_afg"]},"meContent.resourceRepresentationType":{"enumeration":["dataset"]}},"creationDate":1400407200000,"title":{"EN":"Import Quantity of Crops and livestock products by year, commodity (Ton)"},"uid":"002CTR045","dsd":{"rid":"63_153"},"meMaintenance":{"seUpdate":{"updateDate":1435214850175}},"rid":"9_5703","contacts":[{"position":{"EN":""},"organization":{"EN":"CountrySTAT"},"role":"distributor","contactInfo":{"emailAddress":"faqiria@yahoo.com","hoursOfService":{"EN":""},"contactInstruction":{"EN":""}},"specify":{"EN":""},"organizationUnit":{"EN":""},"roleLabel":{"EN":"Distributor"}}],"meContent":{"description":{"EN":"Import Quantity of Crops and livestock products\r\nby year, commodity .\r\nUnit of measurement: Ton"},"resourceRepresentationType":"dataset","keywords":["Import","Crops","Livestock"],"statisticalConceptsDefinitions":{"EN":""},"seReferencePopulation":{"statisticalPopulation":{"EN":"Crops and livestock"},"referencePeriod":{"version":"1.0","codes":[{"code":"9","label":{"EN":"Year"}}],"idCodeList":"FAO_Period","extendedName":{"EN":"FAO Reference Period"}},"referenceArea":{"version":"1.0","codes":[{"code":"ADM0","label":{"EN":"International or country boundaries."}}],"idCodeList":"GAUL_ReferenceArea","extendedName":{"EN":"GAUL reference area"}}},"seCoverage":{"coverageSectors":{"codes":[{"code":"0206","label":{"EN":"Internation Trade"}}],"idCodeList":"UNECA_ClassificationOfActivities","extendedName":{"EN":"UNECA Classification of Activities -Domains, topics and indicators"}},"coverageSectorsDetails":{"EN":""},"coverageTime":{"from":1167606000000,"to":1356908400000},"coverageGeographic":{"version":"2014","codes":[{"code":"1","label":{"PT":"Afeganistão","FR":"Afghanistan","AR":"أفغانستان","EN":"Afghanistan","RU":"Афганистан","ES":"Afganistán","ZH":"阿富汗"}}],"idCodeList":"GAUL0","extendedName":{"EN":"Global administrative unit layer country level"}}},"resourceRepresentationTypeLabel":{"EN":"Dataset"}},"languageDetails":{"EN":""},"characterSet":{"codes":[{"code":"106","label":{"EN":"UTF-8"}}],"idCodeList":"IANAcharacterSet","extendedName":{"EN":"Internet Assigned Numbers Authority codelist"}},"metadataStandardName":"FENIX","metadataStandardVersion":"1.0","metadataLanguage":{"version":"1998","codes":[{"code":"eng","label":{"EN":"English"}}],"idCodeList":"ISO639-2","extendedName":{"EN":"International Standard Organization - Language"}},"meInstitutionalMandate":{"legalActsAgreements":{"EN":"For legal acts concerning statistics at national levels see links to country websites.\r\n"},"institutionalMandateDataSharing":{"EN":"\"Article I of the constitution indeed requires the Organization to collect, analyse, interpret and disseminate information relating to nutrition, food and agriculture (the term “agriculture” and its derivatives includes forestry, fisheries and aquaculture). The first session of the FAO Conference in 1945 provided the rationale: “If FAO is to carry out its work successfully it will need to know where and why hunger and malnutrition exist, what forms they take, and how widespread they are. Such data will serve as a basis for making plans, determining the efficacy of measures used, and measuring progress from time to time.” \r\nMember countries reaffirmed this mandate in 2000 when formulating the Organization’s strategic thrusts for the 2000-2015 period: Corporate Strategy E1 commits the Organization to building “an integrated information resource base, with current, relevant and reliable statistics, information and knowledge made accessible to all FAO clients.\r\n\"\r\n"}},"meAccessibility":{"seConfidentiality":{"confidentialityPolicy":{"EN":"Only non-confidential data are recorded.\r\n"},"confidentialityDataTreatment":{"EN":""},"confidentialityStatus":{"version":"1.0","codes":[{"code":"F","label":{"EN":"Free"}}],"idCodeList":"CL_CONF_STATUS","extendedName":{"EN":"Confidentiality status (SDMX)"}}}},"meDataQuality":{"qualityManagement":{"EN":"","parent":"qualityManagement."},"qualityAssessment":{"EN":"Based on TWG quality assessment methodology.\r\n","parent":"qualityAssessment."},"qualityAssurance":{"EN":"Statistics are subject to the general quality assurance framework , where domain-specific quality assurance activities (the use of best practices, quality reviews, self-assessments, compliance monitoring) are carried out systematically. \r\n","parent":"qualityAssurance."},"seAccuracy":{"accuracyNonSampling":{"EN":"It is not possible to asses the accuracy but when there is a substantial amount of estimated or imputed data points, the accuracy for certain products, countries and regions is not that good.\r\n"},"accuracySampling":{"EN":""}},"seComparability":{"comparabilityGeographical":{"EN":"All data refers to Afghanistan/Afghanistan regions.\r\n\r\n"},"comparabilityTime":{"EN":""},"coherenceIntern":{"EN":"Among Afghanistan domains fairly good overall coherence.\r\n"}}},"meStatisticalProcessing":{"seDataCompilation":{"missingData":{"EN":"\"Missing data are highlighted in the dataset using the following symbols: \r\n-data not available = \"\"..\"\" and \"\"...\"\" missing data (data exist but have not been collected)\r\n\r\n-\"\".\"\" data for this category do not exist and / or data included in another category\"\r\n"},"weights":{"EN":"No weights.\r\n"},"aggregationProcessing":{"EN":""},"indexType":{"EN":"No index.\r\n"},"dataAdjustment":{"version":"1.1","codes":[{"code":"_Z","label":{"EN":"Not applicable"}}],"idCodeList":"CL_ADJUSTMENT","extendedName":{"EN":"Adjustment code list (ESTAT)"}},"dataAdjustmentDetails":{"EN":""}},"seDataValidation":{"dataValidationIntermediate":{"EN":""},"dataValidationOutput":{"EN":"Countries and International Organizations are responsible for transmitting data which have already been checked. Validation at FAO concerns any transmission errors, consolidation and data consistency- data also validated internally followed by peer-review.\r\n"},"dataValidationSource":{"EN":""}},"seDataSource":{"seSecondaryDataCollection":{"dataCollection":{"EN":"Technical Working Group\r\n"},"originOfCollectedData":{"version":"1.0","codes":[{"code":"D","label":{"EN":"Consultants"}}],"idCodeList":"FAOSTAT_OriginData","extendedName":{"EN":"Origin of collected data"}},"rawDataDescription":{"EN":""}}}},"language":{"version":"1998","codes":[{"code":"eng","label":{"EN":"English"}}],"idCodeList":"ISO639-2","extendedName":{"EN":"International Standard Organization - Language"}},"actions":{"SELECT_RESOURCE":{"event":"select","labels":{"EN":"Select Resource"}}}};

        this.analysis.add(item);

    };

    return Host;

});
