define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality_compatibilityCoherence",
        "title": "Comparability Coherence",
        "type": "object",
        "properties": {
            "comparabilityGeographical": {
                "title": "Geographic comparability",
                "type": "string"
            },
            "comparabilityTime": {
                "title": "Time comparability",
                "type": "string"
            },
            "coherenceIntern": {
                "title": "Internal coherence",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "Degree of data comparability across the geographic areas or regions referenced by the resource. Data might be derived from surveys that in general are conducted by different statistical agencies. These surveys often refer to populations of different geographical areas, sometimes based on different methodologies.",
        "fields": {
            "comparabilityGeographical": {
                "helper": "Degree of data comparability across the geographic areas or regions referenced by the resource. Data might be derived from surveys that in general are conducted by different statistical agencies. These surveys often refer to populations of different geographical areas, sometimes based on different methodologies."
            },
            "comparabilityTime": {
                "helper": "Extent to which data are comparable or reconcilable over time. It refers to the degree of comparability between the measures of a time series (e.g. related to a country, a commodity and a variable) included in the resource."
            },
            "coherenceIntern": {
                "helper": "General estimate of the extent to which data are consistent within the resource."
            }
        }
    }
});
