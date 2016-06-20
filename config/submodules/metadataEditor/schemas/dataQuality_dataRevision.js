define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality_dataRevision",
        "title": "Data revision",
        "type": "object",
        "properties": {
            "revisionPolicy": {
                "title": "Revision policy",
                "type": "string"
            },
            "revisionPractice": {
                "title": "Revision practice",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "This section describes the policy and practice for identifying the revision status of the data, as well as the availability of revision studies and analysis.",
        "fields": {
            "revisionPolicy": {
                "helper": "Policy concerning the periodically revision of the resource and ensuring the transparency of disseminated data."
            },
            "revisionPractice": {
                "helper": "Information concerning the revision of data in order to give compilers the possibility of incorporating new and more accurate information in the resource. It also describes the revision status of available data. Data may also be subject to regular or ad hoc revisions as a result of the introduction of new classification, compilation frameworks and methodologies in order to improve the accuracy of the resource.",
            }
        }
    }
});