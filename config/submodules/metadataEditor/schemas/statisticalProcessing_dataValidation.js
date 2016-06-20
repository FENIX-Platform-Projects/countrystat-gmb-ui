define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "statisticalProcessing_dataValidation",
        "title": "Data Validation",
        "type": "object",
        "properties": {
            "dataValidationIntermediate": {
                "title": "Data validation - intermediate",
                "type": "string"
            },
            "dataValidationOutput": {
                "title": "Data validation - output",
                "type": "string"
            },
            "dataValidationSource": {
                "title": "Data validation - source",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "Data Validation",
        "fields": {
            "dataValidationIntermediate": {
                "helper": "Assessment of the quality and correctness of intermediate calculations leading to statistical outputs."
            },
            "dataValidationOutput": {
                "helper": "Assessment of discrepancies and/or inaccuracies observed in the statistical outputs."
            },
            "dataValidationSource": {
                "helper": "Assessment of discrepancies and/or inaccuracies inherent to the data source."
            }

        }
    }
})
