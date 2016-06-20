define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality_timelinessAndPunctuality",
        "title": "Timeliness and Punctuality",
        "type": "object",
        "properties": {
            "timeliness": {
                "title": "Timeliness",
                "type": "string"
            },
            "punctuality": {
                "title": "Punctuality",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "Evaluation of the timeliness of the resource dissemination with respect to the phenomenon it describes. In addition this section take in to account the punctuality of data dissemination.",
        "fields": {
            "timeliness": {
                "helper": "It refers to the speed of data availability, length of time between data availability and the event or phenomenon they describe."
            },
            "punctuality": {
                "helper": "Time lag between the release date of data and the target date announced in some official release calendar."
            }
        }
    }
});
