define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "accessibility_dataDissemination_releasePolicy",
        "title": "Release Policy",
        "type": "object",
        "properties": {
            "releaseCalendar": {
                "title": "Release calendar",
                "type": "string"
            },
            "releaseCalendarAccess": {
                "title": "Access to the release calendar",
                "type": "string"
            },
            "disseminationPeriodicity": {
                "title": "Dissemination periodicity",
            },
            "embargoTime": {
                "title": "Embargo time",
                "type": "object",
                "properties": {
                    "from": {
                        "title": "From",
                        "format": "date"
                    },
                    "to": {
                        "title": "To",
                        "format": "date"
                    }
                }
            }
        }
    },
    "options": {
        "fields": {
            "releaseCalendar": {
                "helper": "Policy regarding the release of the resource in accordance with the pre-announced schedule. It also provides information on the availability of the release calendar."
            },
            "releaseCalendarAccess": {
                "helper": "Link or references to the release calendar."
            },
            "disseminationPeriodicity": {
                "type": "select",
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_FAO_Period.json",
                "helper": "Frequency of data dissemination (e.g. daily, monthly, quarterly, yearly)"
            },
            "embargoTime": {
                "helper": "Time span between the completion of the production process of statistical data and their publication.",
                "fields": {
                    "from": {
                        "picker": {
                            "format": "DD/MM/YYYY"
                        }
                    },
                    "to": {
                        "picker": {
                            "format": "DD/MM/YYYY"
                        }
                    }
                }
            }
        }
    }
});
