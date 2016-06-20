define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "content",
        "title": "Content",
        "type": "object",
        //"required": ["resourceRepresentationType", "keywords", "description"],
        "required": ["keywords", "description"],
        "properties": {
            /*"resourceRepresentationType": {
                "title": "Type of resource",
                "default": "dataset"
            },*/
            "keywords": {
                "title": "Keywords",
                "type": "array",
                "items": {
                    "title": "Keyword",
                    "type": "string"
                }
            },
            "description": {
                "title": "Abstract",
                "type": "string"
            },
            "statisticalConceptsDefinitions": {
                "title": "Statistical concepts / definitions",
                "type": "string"
            }
        }
    },
    "options": {
        "fields": {
            /*"resourceRepresentationType": {
                "helper": "Typology of the resource the metadata refers to. This metadata element determines whether certain meta-data entities are, or are not applicable. For example, the metadata entities \u0027SpatialRepresentation\u0027 and \u0027ReferenceSystem\u0027 are only available for geospatial resource types (e.g. raster; vector).",
                "type": "select",
                "dataSource": {
                    "dataset": "Dataset"
                }
            },*/
            "keywords": {
                "helper": "Commonly used word(s), formalized word(s) or phrase(s) used to describe the resource.",
                "toolbarSticky": true
            },
            "abstract": {
                "helper": "Overview of the main characteristics of the resource and summary of the information contained in the resource, in an easily understandable manner, for technical and non-technical users."
            },
            "statisticalConceptsDefinitions": {
                "type": "textarea",
                "helper": "Definitions of the statistical concepts under measure (i.e. the statistical domain) and the main variables provided. The considered types of variables (e.g. raw figures, annual growth rates, index, ow or stock data, ...) should be defined and described in accordance with internationally accepted statistical standards, guidelines, or good practices."
            }
        }
    }
});