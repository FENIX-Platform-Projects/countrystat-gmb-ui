define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "accessibility_dataDissemination_distribution",
        "title": "Distribution",
        "type": "object",
        "properties": {
            "onlineResource": {
                "title": "Link to the on-line resource",
                "type": "string"
            },
            "disseminationFormat": {
                "title": "Dissemination formats",
                "type": "array",
                "items": { "type": "string" }
            }
        }
    },
    "options": {
        "helper": "This section reports the mode of distribution of the resource with a focus on how to access the resource, the supported formats.",
        "fields": {
            "onlineResource": {
                "type": "url",
                "helper": "Link to the on-line resource. It is conditional to the policy governing distribution and sharing mechanism. For \u0027restricted\u0027 resources it is not available."
            },
            "disseminationFormat": {
                "helper": "Formats available for downloading the resources (e.g. excel, csv, pdf, etc.). . . It is conditional to the policy governing distribution and sharing mechanism. For \u0027restricted\u0027 resources it is not available."
            }
        }
    }
});
