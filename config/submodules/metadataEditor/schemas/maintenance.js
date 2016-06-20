define({
    "schema":{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "maintenance",
        "title": "Maintenance",
        "type": "object",
        "properties": {
            "maintenanceAgency": {
                "title": "Maintenance agency",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "This section provides information about the frequency of resource upgrade and metadata maintenance.",
        "fields": {
            "helper": "Organization or other expert body that maintains the resource."
        }
    }

});
