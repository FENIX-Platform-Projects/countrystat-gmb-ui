define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "basicMeta",
        "title": "Basic Metadata",
        "type": "object",
        "required": ["title", "creationDate", "characterSet", "metadataStandardName"],
        "properties": {
            "title": {
                "title": "Title",
                "type": "string"
            },
            "creationDate": {
                "title": "Creation Date",
                "format": "date",
                "type": "string"
            },
            "language": {
                "title": "Language(s)",
                "default": "eng"
            },
            "languageDetails": {
                "title": "Language details",
                "type": "string"
            },
            "characterSet": {
                "title": "Character-set",
                "default": "106"
            },
            "metadataStandardName": {
                "type": "string",
                "title": "Used metadata standard",
                "default": "FENIX"
            },
            "metadataStandardVersion": {
                "title": "Version of metadata standard",
                "type": "string",
                "default": "1.0"
            },
            "metadataLanguage": {
                "title": "Language(s) used for metadata",
                "type": "string",
                "uniqueItems": true,
                "default": "eng"
            },
            "noDataValue": {
                "title": "Value assigned to No-data",
                "type": "string"
            }
        }
    },
    "options": {
        "fields": {
            "title": {
                "helper": "Textual label used as title of the resource."
            },
            "creationDate": {
                "helper": "Creation date of the resource.",
                "picker": {
                    "format": "DD/MM/YYYY"
                }
            },
            "language": {
                "helper": "Language used by the resource for textual information.",
                "type": "select",
                //"dataSource": "fx-MetaEditor2/config/CL/CL_Languages.json"
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_Languages.json"
            },
            "languageDetails": {
                "helper": "Comments and additional details about the language used for the textual information of the resource. This field is addressed to highlight some particular inconsistencies in the language (or languages) used in the resource, if any. For example to alert that the resource is not completely homogeneous in the language used for textual information. Otherwise it can be leaved empty.",
            },
            "characterSet": {
                "helper": "Full name of the character coding standard used by the resource.",
                "type": "select",
                //"dataSource": "fx-MetaEditor2/config/CL/CL_IANACharacterSet.json"
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_IANACharacterSet.json",
            },
            "metadataStandardName": {
                "helper": "Name of the metadata standard specifications used. In FENIX framework this field would be pre-compiled by \u0027FENIX\u0027.",
            },
            "metadataStandardVersion": {
                "helper": "Version of the metadata standard specifications used.",
            },
            "metadataLanguage": {
                "helper": "Version of the metadata standard specifications used.",
                "type": "select",
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_Languages.json"
            },
            "noDataValue": {
                "helper": "Value assigned to the cells to represent the absence of data. Missing values are usually highlight through apposite ags, however the data matrix does not report empty cells but a predefined combination of characters (such as \u0027NA\u0027, \u0027000\u0027 . . . ) indicating the absence of data."
            }
        }
    }
});