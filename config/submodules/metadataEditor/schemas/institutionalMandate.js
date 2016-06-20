define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "institutionalMandate",
        "title": "Institutionale Mandate",
        "type": "object",
        "properties": {
            "legalActsAgreements": {
                "title": "Legal acts/agreements",
                "type": "string"
            },
            "institutionalMandateDataSharing": {
                "title": "Data sharing arrangements",
                "type": "string"
            }
        }
    },
    "options": {
        "fields": {
            "legalActsAgreements": {
                "helper": "References (citations or website link) to legal acts or other formal or informal agreements that assign responsibility as well as authority to an agency for the collection, processing, and dissemination of the resource."
            },
            "institutionalMandateDataSharing": {
                "helper": "References (citations or website link) to arrangements or procedures for data sharing and coordination."
            }
        }
    }
});
