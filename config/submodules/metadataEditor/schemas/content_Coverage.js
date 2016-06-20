define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "content_Coverage",
        "title": "Coverage",
        "type": "object",
        "required": ["coverageGeographic"],
        "properties": {
            "sector": {
                "title": "Sector",
                "type": "object"
            },
            "demoStats": {
                "title": "Demographic and social statistics"
            },
            "ecoStats": {
                "title": "Economic statistics"
            },
            "envStats": {
                "title": "Environmental and multi-Domain statistics"
            },
            "coverageSectorsDetails": {
                "title": "Main sector(s)",
                "type": "string"
            },
            "coverageTime": {
                "title": "Coverage period",
                "type": "object",
                "required": ["from", "to"],
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
            },
            "coverageGeographic": {
                "title": "Geographic extent",
                "uniqueItems": true
            }
        },
        "dependencies": {
            "demoStats": ["sector"],
            "ecoStats": ["sector"],
            "envStats": ["sector"]
        }
    },
    "options": {
        "fields": {
            "sector": {
                "type": "select",
                "dataSource": {
                    "Demographic and social statistics": "Demographic and social statistics",
                    "Economic statistics": "Economic statistics",
                    "Environment and multi-domain statistics": "Environment and multi-domain statistics"
                },
                "helper": "Sector(s) the resource refers to as specified in the selected codelist. The word \u0027Sector\u0027 indicates the subject area the resource refers to. These sectors can be institutional sectors, economic or other sectors (e.g. local government sector, agriculture, forestry, business services, etc.)."
            },
            "demoStats": {
                "type": "select",
                "dataSource": {
                    "0103": "Health",
                    "0104": "Labour",
                    "0101": "Population",
                    "0102": "Education"
                },
                "dependencies": {
                    "sector": "Demographic and social statistics"
                }
            },
            "ecoStats": {
                "type": "select",
                "dataSource": {
                    "0201": "Agriculture",
                    "0210": "Official Development Assistance",
                    "0212": "Public Finance",
                    "0211": "Prices",
                    "0214": "Transport",
                    "0205": "Globalisation",
                    "0204": "Energy",
                    "0213": "Tourism",
                    "0203": "Debt",
                    "0202": "Balance of Payments",
                    "0209": "Monetary Statistics",
                    "0208": "Mining",
                    "0207": "National Account",
                    "0206": "Internation Trade"
                },
                "dependencies": {
                    "sector": "Economic statistics"
                }
            },
            "envStats": {
                "type": "select",
                "dataSource": {
                    "0303": "Living conditions, pover...-cutting social issues",
                    "0301": "Environment",
                    "0302": "Information Society"
                },
                "dependencies": {
                    "sector": "Environment and multi-domain statistics"
                }
            },

            "coverageSectorsDetails": {
                "helper": "Textual element delimiting the statistical results with regard to the main sectors covered."
            },
            "coverageTime": {
                "helper": "Information about the time period for which data are available. It requests to report the time window of reference (reporting the starting date and the ending date) even if it presents some lacks.",
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
            },
            "coverageGeographic": {
                "type": "select",
                "multiple": true,
                "size": 10,
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_GAUL0.json",
                "helper": "Geographical coverage represented by the resource. It is highly recommended to make reference to officially recognized or easily identifiable macro-areas (e.g. South Saharan Africa, North America, OECD member countries..)."
            }
        }
    }
});
