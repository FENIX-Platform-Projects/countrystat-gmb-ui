define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "dataQuality_accuracy",
        "title": "Accuracy",
        "type": "object",
        "properties": {
            "accuracyNonSampling": {
                "title": "Accuracy - non sampling error",
                "type": "string"
            },
            "accuracySampling": {
                "title": "Accuracy - sampling error",
                "type": "string"
            }
        }
    },
    "options": {
        "helper": "Closeness of computations or estimates to the exact values that the statistics were intended to measure. Accuracy can contain either measures of numerical results of the methods for assessing the accuracy of data or qualitative assessment indicators. It may also be described in terms of the major sources of error that potentially cause inaccuracy (e.g. sampling, non-response, response error).",
        "fields": {
            "accuracyNonSampling": {
                "helper": "Error in sample estimates which cannot be attributed to sampling fluctuations. (e.g. defects in the sampling frame, faulty demarcation of sample units, defects in the selection of sample units, mistakes in the collection of data due to personal variations, misunderstanding, bias, negligence . . . etc.)"
            },
            "accuracySampling": {
                "helper": "If probability sampling is used, the accuracy is an evaluation of difference between a population value and an estimate thereof, derived from a random sample (so due to the fact that only a subset of the population is enumerate), normally in the form of coefficient of variation, standard error or confidence intervals. For non-probability sampling, random errors cannot be calculated without reference to some kind of model, in this case estimates of the accuracy, a motivation for the invoked model for this estimation and brief discussion of sampling bias should be provided."
            }
        }
    }
});