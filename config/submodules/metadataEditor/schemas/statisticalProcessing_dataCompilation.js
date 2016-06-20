define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "statisticalProcessing_dataCompilation",
        "title": "Data Compilation",
        "type": "object",
        "description": "This section describes the main statistics actions operated on data (e.g. data editing, imputation, weighting, adjustment for non-response, model used etc.).",
        "properties": {
            "missingData": {
                "title": "Missing data",
                "type": "string"
            },
            "weights": {
                "title": "Weights",
                "type": "string"
            },
            "aggregationProcessing": {
                "title": "Process of aggregation",
                "type": "string"
            },
            "aggregationFormula": {
                "title": "Aggregation formula",
                "type": "string"
            },
            "dataAdjustment": {
                "title": "Process of adjustment",
            },
            "dataAdjustmentDetails": {
                "title": "Details on process of adjustment",
                "type": "string"
            },
            "indexType": {
                "title": "Type of index",
                "type": "string"
            },
            "basePeriod": {
                "title": "Base period",
                "format": "date",
                "type": "string"
            }
        }

    },
    "options": {
        "fields": {
            "missingData": {
                "helper": "It describe under which circumstance missing data are estimated or imputed and when the cells are left empty. It also describe methodologies used to estimate/impute missing values."
            },
            "weights": {
                "helper": "Description of weights system (if any) used in order to produce accurate statistical results. This field reports the criteria for using weights in analysis of collection, the formulas and coefficients developed and how they are applied to data."
            },
            "aggregationProcessing": {
                "helper": "Information about the methodology used to aggregate data."
            },
            "aggregationFormula": {
                "helper": "Formula used to aggregate data."
            },
            "dataAdjustment": {
                "helper": "Type of adjustment used represented by a code.",
                "type": "select",
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_ADJUSTMENT.json"
            },
            "dataAdjustmentDetails": {
                "helper": "Set of procedures employed to modify statistical data to enable it to be conform with national or international standards (such as seasonal adjustment methods, time series decomposition, or other similar methods)."
            },
            "indexType": {
                "helper": "Type of index number used in the statistical production process."
            },
            "basePeriod": {
                "helper": "Period of time used as a base of an index number or to which a time series refers (e.g. base year 2000 for certain annual data).",
                "picker": {
                    "format": "DD/MM/YYYY"
                }
            }
        }
    }

    
})
