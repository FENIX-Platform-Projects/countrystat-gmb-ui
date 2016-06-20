define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality_relevance",
        "title": "Relevance",
        "type": "object",
        "properties": {
            "userNeeds": {
                "title": "User needs",
                "type": "string"
            },
            "userSatisfaction": {
                "title": "User satisfaction",
                "type": "string"
            },
            "completeness": {
                "title": "Completeness",
                "type": "string"
            },
            "completenessPercentage": {
                "title": "Percentage of completeness",
                "type": "number",
                "minimum": 0,
                "maximum": 100
            }
        }
    },
    "options": {
        "helper": "Evaluation of data-quality through user satisfaction involving also information about the resource-completeness.",
        "fields": {
            "userNeeds": {
                "helper": "Classification of users with some indication of their importance, an indication of the uses for which they want the statistical outputs and as well users and uses given special considerations. Unmet user needs and the reasons for not meeting them should be included as well."
            },
            "userSatisfaction": {
                "helper": "How the views and opinions of the users are collected. In addition the main results regarding the user satisfaction should be shown (in the form of a user satisfaction index if available) and the date of most recent user satisfaction survey."
            },
            "completeness": {
                "helper": "State of completeness of the resource."
            },
            "completenessPercentage": {
                "helper": "Percentage of the state of completeness of the resource."
            }
        }
    }

});
