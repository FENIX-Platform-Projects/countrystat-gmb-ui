define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality",
        "title": "Data Quality",
        "type": "object",
        "properties": {
            "qualityManagement": {
                "title": "Quality management",
                "type": "string"
            },
            "qualityAssessment": {
                "title": "Data quality assessment",
                "type": "string"
            },
            "qualityAssurance": {
                "title": "Quality assurance",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "This section provides a description and evaluation of the data quality. It allows to describe the data quality assurance process, inclusive of data validation, completeness and accuracy standards. In addition an assessment of the comparability and intern coherence of the resource is considered a quality dimension.",
        "fields": {
            "qualityManagement": {
                "helper": "Structure, responsibilities and procedures established for guaranteeing the quality of the data."
            },
            "qualityAssessment": {
                "helper": "Overall qualitative assessment of the quality of the statistical outputs."
            },
            "qualityAssurance": {
                "helper": "Description of the process assuring that the data production processes conforms to the statistical quality standards."
            }
        }
    }
});
