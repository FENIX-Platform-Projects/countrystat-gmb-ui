define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "accessibility_clarity",
        "title": "Clarity",
        "type": "object",
        "properties": {
            "clarity": {
                "title": "Clarity",
                "type": "string"
            },
            "metadataCompletenessRate": {
                "title": "Metadata completeness rate",
                "type": "number",
                "minimum": 0,
                "maximum": 100
            }
        }
    },
    "options": {
        "helper": "This section gives information about the availability of additional information (documentation, further metadata. . . ) linked to the resource.",
        "fields": {
            "clarity": {
                "helper": "Extent to which easily comprehensible metadata are available. It indicates whether a resource is accompanied by appropriate metadata and other relevant documentation."
            },
            "metadataCompletenessRate": {
                "helper": "The percentage of completeness of metadata offers a numerical evaluation of the extent to which the resource is documented."
            }
        }
    }
});
