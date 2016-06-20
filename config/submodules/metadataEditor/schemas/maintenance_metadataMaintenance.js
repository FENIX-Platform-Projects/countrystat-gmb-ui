define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "maintenance_metadataMaintenance",
        "title": "Metadata Maintenance",
        "type": "object",
        "properties": {
            "metadataLastCertified": {
                "title": "Metadata last certified",
                "format": "date"
            },
            "metadataLastPosted": {
                "title": "Metadata last posted",
                "format": "date"
            },
            "metadataLastUpdate": {
                "title": "Metadata last update",
                "format": "date"
            }
        }
    },
    "options": {
        "helper": "This section involves maintenance operations concerning the periodic update of metadata to ensure that the resource is properly described.",
        "fields": {
            "metadataLastCertified": {
                "helper": "Latest date of certification of the metadata.",
                "picker": {
                    "format": "DD/MM/YYYY"
                }
            },
            "metadataLastPosted": {
                "helper": "Latest date of publication of the metadata. It is usually automatically updated by the metadata production system.",
                "picker": {
                    "format": "DD/MM/YYYY"
                }
            },
            "metadataLastUpdate": {
                "helper": "Most recent date of update of the metadata.",
                "picker": {
                    "format": "DD/MM/YYYY"
                }
            }
        }
    }
});
