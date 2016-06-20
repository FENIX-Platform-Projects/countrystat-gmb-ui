define({
    "schemaSource": "./submodules/fenix-ui-metadata-editor/config/schemas/contactsSCH.json",
    "optionsSource": "./submodules/fenix-ui-metadata-editor/config/schemas/contactsOPTS.json",
    "required": ["dataCollection", "collectionPeriodicity"],
    "schema": {
        "type": "object",
        "properties": {
            "typeOfCollection": {
                "title": "Type of collection"
            },
            "samplingProcedure": {
                "title": "Sampling procedure",
                "type": "string"
            },
            "dataCollection": {
                "title": "Data collection",
                "type": "string"
            },
            "collectionPeriodicity": {
                "title": "Periodicity of data collection"
            }
        }
    },
    "options": {
        "fields":
            {
                "typeOfCollection": {
                    "type": "select",
                    "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_FAOSTAT_Collection.json",
                    "helper": "Coded element which specifies the type of data collection method (e.g. census, random sampling, etc.)."
                },
                "samplingProcedure": {
                    "helper": "The type of sample design used to select the survey respondents to represent the population. It may refer to information on sample design, sample size, sample frame, sample updating etc."
                },
                "dataCollection": {
                    "helper": "Methods used to gather data from the respondents (e.g. postal survey, CAPI, on-line survey, face-to-face interviews etc.) and description of data collection methods. This metadata element also includes more precise information about the kind of questionnaire (structured, unstructured etc.) and if necessary somenoteworthy aspects of the data collection process."
                },
                "collectionPeriodicity": {                    
                    "type": "select",
                    "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_FAO_Period.json",
                    "helper": "Frequency with which the data are collected from the sources."
                },


                "dataCollector": {
                    "validator": function (callback) {
                        var ok = { "status": true };
                        var ko = {
                            "status": false,
                            "message": "Fill at least one contact (Phone, Email or Address)"
                        };
                        var val = this.getValue();
                        if (!val.contactInfo) {
                            callback(ko);
                        }
                        var cntInfo = val.contactInfo;

                        if (cntInfo.phone && cntInfo.phone.trim() != '') {
                            callback(ok);
                            return;
                        }
                        if (cntInfo.address && cntInfo.address.trim() != '') {
                            callback(ok);
                            return;
                        }
                        if (cntInfo.emailAddress && cntInfo.emailAddress.trim() != '') {
                            callback(ok);
                            return;
                        }
                        callback(ko);
                    }
                }
            }
    }
});
