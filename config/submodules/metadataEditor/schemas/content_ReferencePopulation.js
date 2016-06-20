define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "content_ReferencePopulation",
        "title": "Reference Population",
        "type": "object",
        "required": ["statisticalPopulation", "referencePeriod", "referenceArea"],
        "properties": {
            "statisticalPopulation": {
                "title": "Statistical population",
                "type": "string"
            },
            "statisticalUnit": {
                "title": "Statistical unit",
                "type": "string"
            },
            "referencePeriod": {
                "title": "Period of reference"
            },
            "referenceArea": {
                "title": "Area of reference"
            }
        }
    },
    "options": {
        "fields": {
            "statisticalPopulation": {
                "helper": "Target statistical population (one or more) the resource refers to."
            },
            "statisticalUnit": {
                "helper": "Simplest unit for which information is sought and for which statistics are ultimately compiled.",
            },
            "referencePeriod": {
                "type": "select",
                "removeDefaultNone": false,
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_FAO_Period.json",
                "helper": "Specific time periods (e.g. a day, a week, a month, a fiscal year, a calendar year or several calendar years) the statistical variables refer to."
            },
            "referenceArea": {
                "type": "select",
                "removeDefaultNone": false,
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_GAUL_ReferenceArea.json",
                "helper": "Type of geographical units the resource represents or refers to. Note that the spatial resolution must refer to the minimum mapping unit whose bounds are officially recognized indipendently from the measurement process of the phonomenon taken into account. Examples are: countries, administrative level 2, etc."
            }
        }
    }
});
