define(['fx-MetaEditor2/codelists/ClCodelist'], function (CLCodelist) {
    //'use strict'

    return {
        "schema": {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "id": "accessibility_confidentiality",
            "title": "Confidentiality",
            "type": "object",
            "required": ["confidentialityStatus"],
            "properties": {
                "confidentialityPolicy": {
                    "title": "Confidentiality - Policy",
                    "type": "string"
                },
                "confidentialityDataTreatment": {
                    "title": "Confidentiality - Data treatment",
                    "type": "string"
                },
                "confidentialityStatus": {
                    "title": "Status of confidentiality"
                }
            }
        },
        "options": {
            "helper": "This section information on the level of confidentiality and the applied policy for releasing the resource. This metadata sub-entity concerns legislation (or any other formal provision) related to statistical confidentiality applied to the resource as well as the actual confidentiality data treatment applied (also with regard to the aggregated data disseminated).",
            "fields": {
                "confidentialityPolicy": {
                    "helper": "Legislative measures or other formal procedures which prevent unauthorized disclosure of data that identify a person or economic entity either directly or indirectly. It consists in textual description and references to legislation or other rules related to statistical confidentiality."
                },
                "confidentialityDataTreatment": {
                    "helper": "Rules applied for treating the resource to ensure confidentiality and prevent unauthorized disclosure."
                },
                "confidentialityStatus": {
                    "helper": "Coded information describing the degree of confidentiality of the resource",
                    "type": "select",
                    "dataSource": CLCodelist
                }
            }
        }
    }
});
