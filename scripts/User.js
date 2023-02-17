(function(core){

    class User{

        DisplayName = ``;
        EmailAddress = ``;
        Username = ``;
        Password = ``;

        /**
         *
         * @param displayName
         * @param emailAddress
         * @param username
         * @param password
         */
        constructor(displayName = "", emailAddress = "",username ="", password = "") {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }


        get DisplayName(){ return this.DisplayName; }
        get EmailAddress(){ return this.EmailAddress; }
        get Username(){ return this.Username; }
        get Password(){ return this.Password; }

        set DisplayName(name){ this.DisplayName = name; }
        set EmailAddress(emailAddress){ this.EmailAddress = emailAddress; }
        set Username(username){ this.Username = username; }
        set Password(password){ this.Password = password; }
        toString(){
            return `Display Name; ${this.DisplayName}\nEmail Address: ${this.EmailAddress}\nUsername: ${this.Username}`;
        }

        toJSON(){
            return{
                "DisplayName"   : this.DisplayName,
                "EmailAddress"  : this.EmailAddress,
                "Username"      : this.Username,
                "Password"      : this.Password
            }
        }

        fromJSON(data){
            this.DisplayName    = data.DisplayName;
            this.EmailAddress   = data.EmailAddress;
            this.Username       = data.Username;
            this.Password       = data.Password;
        }

        serialize() {
            if (this.DisplayName != "" && this.EmailAddress != "" && this.Username != "" && this.Password != "") {
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.Username}, ${this.Password}`;
            }
            console.error("one or more of the properties of the contact object are missing or invalid");
            return null;
        }

        deserialize(data) {
            let propertyArray   = data.split(", ");
            this.DisplayName    = propertyArray[0];
            this.EmailAddress   = propertyArray[1];
            this.Username       = propertyArray[2];
            this.Password       = propertyArray[3];
        }
    }
    core.User = User;

})(core || (core = {}));