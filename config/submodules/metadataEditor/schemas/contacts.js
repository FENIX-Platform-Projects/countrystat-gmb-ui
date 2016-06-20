define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "contacts",
        "title": "Contacts",
        "type": "object",
        "required": ["organization"],
        "properties": {
            "organization": {
                "title": "Organization",
                "type": "string"
            },
            "organizationUnit": {
                "type": "string",
                "title": "Organization unit/division"
            },
            "pointOfContact": {
                "title": "Point of contact",
                "type": "string"
            },
            "position": {
                "type": "string",
                "title": "Position"
            },
            "role": {
                "title": "Role"
            },
            "specify": {
                "type": "string",
                "title": "Specify"
            },
            "contactInfo": {
                "type": "object",
                "title": "Contact information",
                "properties": {
                    "phone": {
                        "title": "Telephone number",
                        "type": "string"
                    },
                    "address": {
                        "title": "Address",
                        "type": "string"
                    },
                    "emailAddress": {
                        "title": "E-mail address",
                        "type": "string"
                    },
                    "hoursOfService": {
                        "type": "string",
                        "title": "Hour of service"
                    },
                    "contactInstruction": {
                        "type": "string",
                        "title": "Instruction"
                    }
                }
            }
        }
    },
    "options": {
        "fields": {
            "organization": {
                "helper": "Name of the responsible organization."
            },
            "organizationUnit": {
                "helper": "Addressable subdivision of an organization."
            },
            "pointOfContact": {
                "helper": "Responsible person-surname, given name, title separated by a delimiter. It contains information about the party who can be contacted for acquiring knowledge the resource."
            },
            "position": {
                "helper": "Role or position of the responsible person."
            },
            "role": {
                "type": "select",
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_ResponsiblePartyRole.json",
                "helper": "Function performed by the responsible party concerning the resource."
            },
            "specify": {
                "helper": "Textual metadata element that allows to specify the role performed by the responsible party. This field is conditional to the element \u003crole\u003e."
            },
            "contactInfo": {
                "fields": {
                    "phone": {
                        "helper": "Telephone numbers at which the organization or individual may be contacted."
                    },
                    "address": {
                        "helper": "Physical address at which the organization or individual may be contacted."
                    },
                    "emailAddress": {
                        "type":"email",
                        "helper": "E-mail address at which the organization or individual may be contacted."
                    },
                    "hoursOfService": {
                        "helper": "Time period (including time zone) when individuals can contact the organization or individual."
                    },
                    "contactInstruction": {
                        "helper": "Supplemental instructions on how or when to contact the individual or organization."
                    }
                },
                "validator": function (callback) {
                    var val = this.getValue();
                    var ok = { "status": true };
                    if (val.phone && val.phone.trim() != '') {
                        callback(ok);
                        return;
                    }
                    if (val.address && val.address.trim() != '') {
                        callback(ok);
                        return;
                    }
                    if (val.emailAddress && val.emailAddress.trim() != '') {
                        callback(ok);
                        return;
                    }
                    callback({
                        "status": false,
                        "message": "Fill at least one contact (Phone, Email or Address)"
                    });
                }
            }
        }
    }
});