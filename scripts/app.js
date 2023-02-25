(function(){

    /*
    Names: Avery Routh, Veronica Gibb
    Student IDs: 100666214, 100708836
    Date completed: Jan 27th 2023
     */

    window.addEventListener("load", Start)

    function DisplayHomePage(){
        console.log('this is my home page');
        //switch page to about us page when button is clicked
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click",function (){
            location.href = "about.html"
        });

        //set a dynamic first paragraph
        let body = document.getElementsByTagName("div")[3];
        let para = document.createElement('p');

        para.setAttribute("id", "para");
        para.setAttribute("class","mt-3");
        para.textContent = "Hello welcome to my portfolio website where you can see examples of my work."
        body.appendChild(para);


        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");

        newItem.setAttribute("class","nav-item");



        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"index.html\">\n" +
            "                                <i class=\"fa-solid fa-house-user\"></i> Human Resources\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[4]);

    }


    function DisplayProjectsPage(){
        console.log("this is the projects page")
        //adding text.
        let body = document.getElementsByClassName("col")[1];
        let para = document.createElement('p');

        para.setAttribute("id", "para");
        para.setAttribute("class","mt-3");
        para.setAttribute("float", "right");
        para.textContent = "We were tasked with creating a nature diorama that was small in scale with some degree " +
                            "of man-made structures that had been overtaken by nature. I based my project off of the " +
                            "roads leading to old Japanese shrines, set on a foggy day."
        body.appendChild(para);
        let body2 = document.getElementsByClassName("col")[2];
        let para2 = document.createElement('p');

        para2.setAttribute("id", "para2");
        para2.setAttribute("class","mt-3");
        para2.textContent = "This was a personal project for an art test. I was asked to create a smokescreen effect" +
                            " based on the smoke screen from the old splinter cell games. Once I submitted my art test" +
                            " the person running it said I had created what he wanted perfectly, which is why I am " +
                            "including it here."
        body2.appendChild(para2);

        let body3 = document.getElementsByClassName("col")[5];
        let para3 = document.createElement('p');

        para3.setAttribute("id", "para3");
        para3.setAttribute("class","mt-3");
        para3.textContent = "My goal was to create a system that would allow the player to teleport to a point" +
                            " they are pointing at. It spawns a ball based on ray trace lines that sets the location " +
                            "for the player to teleport for. I did this as a personal project to try and recreate the " +
                            "teleportation system from the Dishonored games, and while far from perfect I feel like my " +
                            "system works fairly well."
        body3.appendChild(para3);



        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");

        newItem.setAttribute("class","nav-item");



        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"index.html\">\n" +
            "                                <i class=\"fa-solid fa-house-user\"></i> Human Resources\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[4]);

    }

    function DisplayServicesPage(){
        let ServiceContent1 = document.getElementsByTagName("ServiceBody1")[0];
        let ServiceParagraph1 = document.createElement("p");
        ServiceParagraph1.setAttribute("id","ProductParagraph")
        ServiceParagraph1.setAttribute("class","mt-3")
        ServiceParagraph1.textContent = "We are good at lots of things.  One is web design"
        ServiceContent1.appendChild(ServiceParagraph1);

        let ServiceContent2 = document.getElementsByTagName("ServiceBody2")[0];
        let ServiceParagraph2 = document.createElement("p");
        ServiceParagraph2.setAttribute("id","ServiceParagraph2")
        ServiceParagraph2.setAttribute("class","mt-3")
        ServiceParagraph2.textContent = "We are good at lots of things.  One is custom programing"
        ServiceContent2.appendChild(ServiceParagraph2);

        let ServiceContent3 = document.getElementsByTagName("ServiceBody3")[0];
        let ServiceParagraph3 = document.createElement("p");
        ServiceParagraph3.setAttribute("id","ServiceParagraph3")
        ServiceParagraph3.setAttribute("class","mt-3")
        ServiceParagraph3.textContent = "We are good at lots of things.  One is Mobile development"
        ServiceContent3.appendChild(ServiceParagraph3);



        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");

        newItem.setAttribute("class","nav-item");



        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"index.html\">\n" +
            "                                <i class=\"fa-solid fa-house-user\"></i> Human Resources\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[4]);

    }

    function DisplayAboutUsPage(){
        let AboutContent1 = document.getElementsByTagName("AboutBody1")[0];
        let AboutParagraph1 = document.createElement("p");
        AboutParagraph1.setAttribute("id","ProductParagraph")
        AboutParagraph1.setAttribute("class","mt-3")
        AboutParagraph1.textContent = "I am Veronica"
        AboutContent1.appendChild(AboutParagraph1);

        let AboutContent2 = document.getElementsByTagName("AboutBody2")[0];
        let AboutParagraph2 = document.createElement("p");
        AboutParagraph2.setAttribute("id","AboutParagraph2")
        AboutParagraph2.setAttribute("class","mt-3")
        AboutParagraph2.textContent = "I am Avery"
        AboutContent2.appendChild(AboutParagraph2);

        let AboutContent3 = document.getElementsByTagName("AboutBody3")[0];
        let AboutParagraph3 = document.createElement("p");
        AboutParagraph3.setAttribute("id","AboutParagraph3")
        AboutParagraph3.setAttribute("class","mt-3")
        AboutParagraph3.textContent = "We are partners"
        AboutContent3.appendChild(AboutParagraph3);


        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");

        newItem.setAttribute("class","nav-item");



        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"index.html\">\n" +
            "                                <i class=\"fa-solid fa-house-user\"></i> Human Resources\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[4]);

    }

    function DisplayContactPage(){

        let SubmitBtn = document.getElementById("SubmitBtn");
        SubmitBtn.addEventListener("click",function (){
            let firstName = document.getElementById("firstName").value;
            console.log(firstName);
            let lastName = document.getElementById("lastName").value;
            console.log(lastName);
            let contactNumber = document.getElementById("contactNumber").value;
            console.log(contactNumber);
            let emailAddress = document.getElementById("emailAddress").value;
            console.log(emailAddress);
            let shortMessage = document.getElementById("shortMessage").value;
            console.log(shortMessage);
            window.setTimeout(function(){


                window.location.href = "index.html";

            }, 3000);
        });


        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");

        newItem.setAttribute("class","nav-item");



        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"index.html\">\n" +
            "                                <i class=\"fa-solid fa-house-user\"></i> Human Resources\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[4]);
    }

    function loginButton(){
        let navbar = document.getElementsByClassName("navbar-nav ms-auto mb-2 mb-lg-0")[0];
        let newItem = document.createElement("li");
        newItem.setAttribute("class","nav-item");
        newItem.innerHTML = "<li class=\"nav-item\">\n" +
            "                            <a class=\"nav-link\" aria-current=\"page\" href=\"login.html\">\n" +
            "                                <i class=\"fas fa-sign-in-alt\"></i> Login\n" +
            "                            </a>\n" +
            "                        </li>";

        navbar.insertBefore(newItem, navbar.children[5]);
    }

    function DisplayRegisterPage(){
        console.log("Register Page")

        $("#firstName").noValidate;
        $("#lastName").noValidate;
        $("#emailAddress").noValidate;
        $("#password").noValidate;
        $("#confirmPassword").noValidate;
        let submitButton = document.getElementById("submitButton")
        submitButton.setAttribute("onsubmit", "return false;")
        let ErrorMessage = document.createElement("div");
        ErrorMessage.setAttribute("id", "ErrorMessage")
        ErrorMessage.textContent += "error";
        let h1 = document.getElementById("h1-register")
        h1.append(ErrorMessage);
        $("#ErrorMessage").hide();

        $("#submitButton").on("click",() => {
            ErrorMessage.textContent = "Error ";
             console.log(RegisterFormValidation());

            event.preventDefault();
        });
    }
    function ValidatePass(input_field_id, conf_input_field_id, error_message){
        /**
         * This function will validate a field based on the supplied regex
         * @param {string} input_field_id
         * @param {string} confirmed input field
         * @param {string} error_message
         */

        let ErrorMessage =$("#ErrorMessage").hide();

        $(input_field_id).on("blur", function(){
            let input_field_text =$(this).val();
            let conf_input_field_text =$(conf_input_field_id);
            if (input_field_text != conf_input_field_text.textContent) {
                console.log("didnt match the regular expersion");
                $(this).trigger("focus");
                $(this).trigger("select");
                ErrorMessage.addClass("alert alert-danger");
                ErrorMessage.textContent += error_message;
                ErrorMessage.show();
            }
            if (ErrorMessage.textContent = ""){
                ErrorMessage.removeAttr("class");
                ErrorMessage.hide();
            }
        })


    }
    function ValidateField(input_field_id, regular_expression, error_message){
        /**
         * This function will validate a field based on the supplied regex
         * @param {string} input_field_id
         * @param {RegExp} regular_expression
         * @param {string} error_message
         */

        let ErrorMessage =$("#ErrorMessage").hide();
        console.log("time to test the field")

        $(input_field_id).on("blur", function(){
            let input_field_text =$(this).val();
            if (!regular_expression.test(input_field_text)) {
                console.log("didnt match the regular expersion");
                $(this).trigger("focus")
                $(this).trigger("select");
                ErrorMessage.addClass("alert alert-danger")
                ErrorMessage.textContent += error_message;
                ErrorMessage.show();
            }
            if (ErrorMessage.textContent = ""){
                ErrorMessage.removeAttr("class");
                ErrorMessage.hide();
            }
        })


    }
    function RegisterFormValidation(){

        let ErrorMessage = $("#ErrorMessage");

        ErrorMessage.textContent = undefined;

        let error = "";

        $("#submitButton").on("click",() => {
            let firstName = $('#FirstName').val();

            let lastName = $('#lastName').val();
            if (firstName.length <= 2) {
                error += ('Error: First Name must be at least 2 characters long.\n');
            }
            if (lastName.length <= 2) {
                error += ('Error: Last Name must be at least 2 characters long.\n');
            }


            let email = $('#emailAddress').val();
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex to check for email validity

            if (email.length < 8 || !emailRegex.test(email)) {
                error += ('Error: email address must have a minimum length of 8 characters and an "@" symbol.\n');
            }

            let password = $('#password').val();
            let confirmPassword = $('#confirmPassword').val();

            if (password.length < 6) {
                error += ('Error: Password must be at least 6 characters long.\n');
            }

            if (password !== confirmPassword) {
                error += ('Error: Passwords do not match.\n');
            }


            if(error != ""){

                ErrorMessage.show();
                ErrorMessage.addClass("alert alert-danger");
                return "error";
            }else{
                ErrorMessage.hide();
            }

        });
    }

    function DisplayFooter(){
        let bottomNavbar = document.createElement('nav');
        bottomNavbar.classList.add('navbar', 'navbar-expand-sm', 'navbar-dark', 'bg-dark', 'fixed-bottom');
        bottomNavbar.id = 'bottom-navbar';
        bottomNavbar.innerHTML = `<div class="container-fluid">
        <span class="navbar-text mx-auto">&copy; ${new Date().getFullYear()} - WEBD 6201 SITE</span>
        </div>`;

        document.body.appendChild(bottomNavbar);
    }

    function Start()
    {
        loginButton();
        DisplayFooter();
        console.log("App Started!")
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Projects":
                DisplayProjectsPage();
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
            case "Register":
                DisplayRegisterPage();
                break;
        }
    }

})();

