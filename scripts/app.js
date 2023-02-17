(function(){


    window.addEventListener("load", Start)

    function DisplayHomePage(){



        //switch page to about us page when button is clicked
        $("#AboutUsBtn").on("click", () => {
           location.href = "about.html"
        });

        $("main").append('<p id="MainParagraph" class="mt-3">This is my main paragraph</p>');
        $("body").append('<article class="container">' +
            '<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>');



    }


    function DisplayProductsPage(){

    }

    function DisplayServicesPage(){

    }

    function DisplayAboutUsPage(){

    }

    function DisplayContactPage(){
        console.log("Contact Us Page")

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckBox = document.getElementById("subscribeCheckBox");

        sendButton.addEventListener("click", function ()
        {
            ContactFormValidation();

            if(subscribeCheckBox.checked){
                AddContact(document.getElementById("FullName").value,
                            document.getElementById("PhoneNumber").value,
                            document.getElementById("EmailAddress").value);
            }
        });
    }

    function DisplayContactListPage(){
        console.log("Contact List Page")

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactlist");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contactn = new core.contact();

                contactn.deserialize(contactData);
                data += `<tr><th scope="row" class = "text-center" >${index}</th>
                    <td>${contactn.fullName} </td>
                    <td>${contactn.phoneNumber}</td>
                    <td>${contactn.email}</td>
                    <td>
                        <button value="${key}" class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit fa-sm">Edit</i>
                        </button>
                    </td>
                    <td>
                        <button value="${key}" class="btn btn-danger btn-sm delete">
                            <i class="fas fa-trash-alt fa-sm">Delete</i>
                        </button>
                    </td>
                    </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }

        $("#addButton").on("click", () =>{
           location.href = "edit.html#add"
        });

        $("button.delete").on("click",function(){
           if(confirm("Delete contact, are you sure?")){
               localStorage.removeItem($(this).val())
           }
           location.href = "contact-list.html";
        });

        $("button.edit").on("click", function(){
            console.log("hello world")
           location.href="edit.html#" + $(this).val();
        });
    }

    function DisplayEditPage(){
        let page = location.hash.substring(1);
        switch(page){
            case "add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i>add`);

                $("#editButton").on("click",(event)=>{
                   event.preventDefault();
                    AddContact(document.getElementById("FullName").value,
                        document.getElementById("PhoneNumber").value,
                        document.getElementById("EmailAddress").value);
                    location.href="contact-list.html"
                });
                $("#cancelButton").on("click",()=>{
                    location.href="contact-list.html"
                });


                break;
            default:{
                let contactc = new core.contact();
                contactc.deserialize(localStorage.getItem(page));

                $("#FullName").val(contactc.fullName);
                $("#PhoneNumber").val(contactc.phoneNumber);
                $("#EmailAddress").val(contactc.email);

                $("#editButton").on("click", (event) => {
                    event.preventDefault();

                    contactc.fullName = $("#FullName").val();
                    contactc.phoneNumber = $("#PhoneNumber").val();
                    contactc.email = $("#EmailAddress").val();

                    localStorage.setItem(page, contactc.serialize());

                    location.href = "contact-list.html";
                });

                $("#cancelButton").on("click", () => {
                    location.href = "contact-list.html";
                });

            }
            break;
        }
    }

    function DisplayLoginPage(){
        console.log("login page");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function(){

            console.log("you pressed the button");

            let success = false;
            let newUser = new core.User();

            $.get("./data/user.json", function(data){
                for(const user of data.user){
                    if(userName.value === user.Username && password.value === user.Password){
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }
                if(success){
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    location.href = "contact-list.html";
                }else{
                    $("userName").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger")
                        .text("Error: Invalid Login Credentials").show();
                }

            });
        });

        $("#cancelButton").on("click", function(){
            document.forms[0].reset();
            location.href = "index.html";
        });

    }
    function DisplayRegisterPage(){
        console.log("register page");
    }
    /**
     *
     * @param fullName
     * @param phoneNumber
     * @param emailAddress
     * @constructor
     */
    function AddContact(fullName, phoneNumber, emailAddress){
        let contactb = new core.contact(fullName, phoneNumber, emailAddress);
        if(contactb.serialize()){
            let key = contactb.fullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contactb.serialize());
        }
    }

    /**
     *
     * @param {string}input_field_id
     * @param {RegExp}regular_expression
     * @param {string}error_message
     * @constructor
     */
    function ValidateField(input_field_id, regular_expression, error_message){
        let messageArea = $("#messageArea").hide();

        $(input_field_id).on("blur", function(){
           let inputFieldText = $(this).val();
           if(!regular_expression.test(inputFieldText)){
               $(this).trigger("focus");
               $(this).trigger("select");
               messageArea.addClass("alert alert-danger");
               messageArea.text("Please enter a valid First and Last Name (Firstname [middle] Lastname)");
               messageArea.show();
           }else{
               messageArea.removeAttr("class");
               messageArea.hide();
           }
        });
    }

    function ContactFormValidation(){
        ValidateField("#FullName",
            /^([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})$/,
            "Please enter a valid first and last name");
        ValidateField("#PhoneNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid phone number");
        ValidateField("#EmailAddress",
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address");
    }


    function AjaxRequest(method, url, callback){
        let XHR = new XMLHttpRequest();

        XHR.addEventListener("readystatechange", ()=>{
            if(XHR.readyState === 4 && XHR.status === 200){
                //$("header").html(XHR.responseText);
                //$(`li>a:contains( ${document.title})`).addClass("active");
                if(typeof callback === "function"){
                    callback(XHR.responseText);
                }else{
                    console.error("ERROR: callback not a function")
                }
            }
        });

        XHR.open(method, url);

        XHR.send();
    }

    function LoadHeader(html_data){
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }


    function CheckLogin(){
        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i>Logout</a>`)
        }

        $("#logout").on("click", function(){
            console.log("i pressed logout now what");
           sessionStorage.clear();

           location.href = "index.html";
        });
    }

    function Start()
    {
        console.log("App Started!")

        AjaxRequest("GET", "header.html", LoadHeader);
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }
    }

})();

