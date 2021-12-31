

$(document).ready(function(){
    
    // Date and Age Calculator
    $("#dob").change(function(){
        var dob = $("#dob").val();
        dob = new Date(dob);
        var today = new Date();
        // var one_day = 1000*60*60*24;

        // var year = Math.floor(Math.ceil((today.getTime()-dob.getTime())/(one_day))/365);
        // var month = Math.floor(Math.ceil((today.getTime()-dob.getTime())/(one_day))%365/30);
        // var week = Math.floor(Math.ceil((today.getTime()-dob.getTime())/(one_day))%30/7,0);
        // var day = Math.floor(Math.ceil((today.getTime()-dob.getTime())/(one_day))%365%7,0);

        var yearNow = today.getFullYear();
        var monthNow = today.getMonth();
        var dateNow = today.getDate();

        var yearDob = dob.getFullYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();


        var year = yearNow - yearDob;
        if (monthNow >= monthDob)
            var month = monthNow - monthDob;
        else {
            year--;
            var month = 12 + monthNow -monthDob;
        }

        if (dateNow >= dateDob){
            var days = dateNow - dateDob;
            var day = Math.floor(Math.ceil((days)%7,0));
        }
        else {
            month--;
            var days = 31 + dateNow - dateDob;
            var day = Math.floor(Math.ceil((days)%7,0));

            if (month < 0) {
            month = 11;
            year--;
            }
        }

        week = Math.floor(days/7);

        $("#years").val(year);
        $("#months").val(month);
        $("#weeks").val(week);
        $("#days").val(day);

        $("#dob_hijri").val(kuwaiticalendar());
    });




// API

    $(function(){
        $.ajax({
            type: 'GET',
            dataType:"json",
		crossDomain: true,
            // contentType: "application/json; charset=utf-8",
            url: 'http://46.151.213.119:8056/drive/lab/getInputData',
			
			// commented by abin for checking the API read issue, changing from localhost to Static IP
            success: function(data) {
                // console.log(data);
                // tests
                tests = data.data.tests;
                for (var i = 0; i < tests.length; i++) {
                    $("<option>").val(tests[i].test_id)
                    .text(tests[i].test_name)
                    .appendTo($('select#test'));
                }
                // mobile code
                mobileCode = data.data.dialCode;
                $("#mobileCode").html("");
                for (var i = 0; i < mobileCode.length; i++) {
                    $("<option>").val(mobileCode[i])
                    .text(mobileCode[i])
                    .appendTo($('select#mobileCode'));
                }
                // Nationality
                nationality = data.data.nationality;
                for (var i = 0; i < nationality.length; i++) {
                    $("<option>").val(nationality[i].code)
                    .text(nationality[i].name)
                    .appendTo($('select#nationality'));
                }
            }
        });
    })




})
