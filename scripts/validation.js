$(document).ready(function(){

    $("#error").hide();

    var name = "";
    var gender = "";
    var dateOfBirth = "";
    var nationality = "";
    var mobileCode = "";
    var mobile = "";
    var nationalID = "";
    var email = "";
    var passport = "";
    var test = "";
    var reasonTest = "";
    var reasonTestTravel ="";

    var name_error = false;
    var gender_error = false;
    var dob_error = false;
    var nationality_error = false;
    var mobile_error = false;
    var nationalID_error = false;
    var email_error = false;
    var passport_error = false;
    var test_error = false;
    var reasonTest_error = false;

    $("#name").on('blur',function(){
        nameValidation(); 
    });
    $("#nationality").on('blur',function(){
        nationalityValidation(); 
    });
    $("#mobile").on('blur',function(){
        mobileValidation(); 
    });
    $("#nationalID").on('blur',function(){
        nationalIDValidation(); 
    });
    $("#email").on('blur',function(){
        emailValidation(); 
    });
    $("#passport").on('blur',function(){
        passportValidation(); 
    });
    $("#test").on('blur',function(){
        testValidation(); 
    });
    $("#reasonTest").on('blur',function(){
        reasonTestValidation(); 
    });
    $("#dob").on('blur',function(){
        dateValidation(); 
    });


    function nameValidation(){
        name = $("#name").val(); 
        if (name.length < 1) { 
            $("#name").css("border","1px solid red");
            $("#error").html("Name field required"); 
            $("#error").show(); 
            name_error = false;
        }
        else if(!name.match(/^[a-zA-Z\s]+$/)){
            $("#name").css("border","1px solid red");
            $("#error").html("Name field Alphabets and white spaces allowed"); 
            $("#error").show(); 
            name_error = false;
        }
        else { 
            $("#name").css("border","1px solid green");
            $("#error").hide(); 
            name_error = true;
        } 
    }

    function genderValidation(){
        gender = $("input[name='gender']:checked").val();
        var genderLength = $("input[name='gender']:checked").length;
            if(genderLength == 0){
                $("#error").html("Gender not selected"); 
                $("#error").show(); 
                gender_error = false;
            }
            else{
                $("#error").html(""); 
                $("#error").hide();
                gender_error = true;
            }
    }

    function nationalityValidation(){
        nationality = $("#nationality").val(); 
            if(nationality == "" ){
                $("#nationality").css("border","1px solid red");
                $("#error").html("Nationality required"); 
                $("#error").show(); 
                nationality_error = false;
            }
            else{
                $("#nationality").css("border","1px solid green");
                $("#error").html(""); 
                $("#error").hide();
                nationality_error = true;
            }
    }

    function mobileValidation(){
        mobileCode = $("#mobileCode").val(); 
        mobile = $("#mobile").val(); 
            if(mobileCode == "" ){
                $("#mobileCode").css("border","1px solid red");
                $("#error").html("Mobile Code not selected"); 
                $("#error").show(); 
            }
            else{
                $("#mobileCode").css("border","1px solid green");
                $("#error").html(""); 
                $("#error").hide();
            }
            
        if (mobile.length < 1) { 
            $("#mobile").css("border","1px solid red");
            $("#error").html("Mobile Number required"); 
            $("#error").show(); 
            mobile_error = false;
        }
        else if(mobile.length < 9 ){
            $("#mobile").css("border","1px solid red");
            $("#error").html("Mobile number must be minimum 9 characters"); 
            $("#error").show(); 
            mobile_error = false;
            
        }
        else if(!mobile.match(/^[0-9]+$/)){
            $("#mobile").css("border","1px solid red");
            $("#error").html("Numbers only allowed"); 
            $("#error").show(); 
            mobile_error = false;
        }
        else { 
            $("#mobile").css("border","1px solid green");
            $("#error").hide(); 
            mobile_error = true;
        } 
    }

    function nationalIDValidation(){
        nationalID = $("#nationalID").val(); 
        if (nationalID.length < 1) { 
            $("#nationalID").css("border","1px solid red");
            $("#error").html("National ID required"); 
            $("#error").show(); 
            nationalID_error = false;
        }
        else if(!nationalID.match(/^[0-9a-zA-Z]+$/)){
            $("#nationalID").css("border","1px solid red");
            $("#error").html("National ID field no special character allowed"); 
            $("#error").show(); 
            nationalID_error = false;
        }
        else { 
            $("#nationalID").css("border","1px solid green");
            $("#error").hide(); 
            nationalID_error = true;
        } 
    }

    function emailValidation(){
        email = $("#email").val(); 
        
        // if(email.length < 1 ){
        //     $("#email").css("border","1px solid red");
        //     $("#error").html("Email required"); 
        //     $("#error").show(); 
        //     email_error = false;
            
        // }
        if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
            // $("#email").css("border","1px solid red");
            $("#error").html("Email not valid"); 
            $("#error").show(); 
            email_error = false;
        }
        else { 
            // $("#email").css("border","1px solid green");
            $("#error").hide(); 
            email_error = true;
        } 
    }

    function passportValidation(){
        passport = $("#passport").val(); 
        reasonTestTravel = $("#reasonTest").val(); 
        if(reasonTestTravel == "Travel"){
            if (passport.length < 1) { 
                $("#passport").css("border","1px solid red");
                $("#error").html("Passport required"); 
                $("#error").show(); 
                passport_error = false;
            }
            else if(!passport.match(/^[0-9a-zA-Z]+$/)){
                $("#passport").css("border","1px solid red");
                $("#error").html("Passport field no special character allowed"); 
                $("#error").show(); 
                passport_error = false;
            }
            else { 
                $("#passport").css("border","1px solid green");
                $("#error").hide(); 
                passport_error = true;
            }
        }
        else if(!passport.match(/^[0-9a-zA-Z]+$/) && reasonTestTravel != "Travel" && passport != ""){
            $("#passport").css("border","1px solid #ced4da");
            $("#error").html("Passport field no special character allowed"); 
            $("#error").show(); 
            passport_error = false;
        }
        else if(reasonTestTravel != "Travel"){ 
            $("#passport").css("border","1px solid #ced4da");
            $("#error").hide(); 
            passport_error = true;
        } 
    }

    function testValidation(){
        test = $("#test").val(); 
            if(test == "" ){
                $("#test").css("border","1px solid red");
                $("#error").html("Test required"); 
                $("#error").show(); 
                test_error = false;
            }
            else{
                $("#test").css("border","1px solid green");
                $("#error").html(""); 
                $("#error").hide();
                test_error = true;
            }
    }

    function reasonTestValidation(){
        reasonTest = $("#reasonTest").val(); 
        reasonTestTravel = $("#reasonTest").val();
        if(reasonTestTravel == "Travel"){
            passportValidation();
        }
        else if(reasonTestTravel != "Travel"){
            passportValidation();
        }
            if(reasonTest == "" ){
                $("#reasonTest").css("border","1px solid red");
                $("#error").html("Reason for Test required"); 
                $("#error").show(); 
                reasonTest_error = false;
            }
            else{
                $("#reasonTest").css("border","1px solid green");
                $("#error").html(""); 
                $("#error").hide();
                reasonTest_error = true;
            }
    }

    function dateValidation(){
        dateOfBirth = $("#dob").val();
        dobHijri = $("#dob_hijri").val();  
            if(dateOfBirth == "" ){
                $("#dob").css("border","1px solid red");
                $("#error").html("Date of Birth not selected"); 
                $("#error").show(); 
                dob_error = false;
            }
            else{
                $("#dob").css("border","1px solid green");
                $("#error").html(""); 
                $("#error").hide();
                dob_error = true;
                years = $("#years").val();
                months = $("#months").val();
                weeks = $("#weeks").val();
                days = $("#days").val();
            }
    }



    $(".form").submit( function(e){
        e.preventDefault();
        genderValidation();


        if( name_error == false || gender_error == false || 
            nationality_error == false || mobile_error == false || nationalID_error == false || 
            // email_error == false || 
            passport_error == false || test_error == false || reasonTest_error == false || dob_error == false){
            alert("form not valid");
        }
        else{
            var data = {
                name: name,
                gender: gender,
                dateOfBirth: dateOfBirth,
                nationality: nationality,
                mobileCode: mobileCode,
                mobile: mobile,
                nationalID: nationalID,
                email: email,
                passport: passport,
                test: test,
                hij_date : dobHijri,
                patient_age : years,
                patient_agemonth : months,
                patient_ageweek : weeks,
                patient_agedays : days,
                reason_test : reasonTest
            };

            // API

            $(function(){
                $.ajax({
                    type: 'POST',
                    contentType: "application/json",
                    url: 'http://46.151.213.119:8056/drive/lab/saveData',
                    data: JSON.stringify(data),
                    success: function(responseData){
                        $("#refNo").html(responseData.data);
                        $("#submitMsg").html("Submitted Successfully");
                        $("#submitMsg").css("color", "green");
                        var myModal = new bootstrap.Modal(document.getElementById('popupModal'), {keyboard: false});
                        myModal.show()
                        $("#closeModal").on('click', function(){
                            location.reload();
                            myModal.hide();
                        });
                    },
                    error: function(error){
                        console.log(error);
                        $("#submitMsg").html("Not submited");
                        $("#submitMsg").css("color", "red");
                    },
                });
            })
            
        }
    });
})