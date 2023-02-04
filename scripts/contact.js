"use strict";
(function(core) {
    class contact {


        //varibles
        fullName = "";
        phoneNumber = "";
        email = "";

        //constructor takes 2 strings, and a int
        constructor(fullName, phoneNumber, email) {
            this.fullName = fullName;
            this.phoneNumber = phoneNumber;
            this.email = email;
        }

        //getters returns the named varible
        get fullName() {
            return this.fullName;
        }

        get phoneNumber() {
            return this.phoneNumber;
        }

        get email() {
            return this.email;
        }


        //setters
        set fullName(fullName) {
            this.fullName = fullName;
        }

        set phoneNumber(phoneNumber) {
            this.phoneNumber = phoneNumber
        }

        set email(email) {
            this.email = email;
        }

        //prints out all info on contact to the console
        toString() {
            return ("Name: " + this.fullName + ", phoneNumber: " + this.phoneNumber + ", email: " + this.email);
        }

        serialize() {
            if (this.fullName != "" && this.phoneNumber != "" && this.email != "") {
                return `${this.fullName}, ${this.phoneNumber}, ${this.email}`;
            }
            console.error("one or more of the properties of the contact object are missing or invalid");
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(", ");
            this.fullName = propertyArray[0];
            this.phoneNumber = propertyArray[1];
            this.email = propertyArray[2];
        }
    }

    core.contact = contact;
})(core || (core = {}));