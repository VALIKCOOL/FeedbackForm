$(document).ready(function () {
    birthdaySetup();

    $("#feedbackForm").submit(function (e) {
        if (checkBirthday() && checkGender())
            return true;
        else return false;
    });
    $("#date")
        .datepicker({
            nextText: "",
            prevText: "",
            maxDate: new Date,
            yearRange: '1901:2016',
            dateFormat: 'mm/dd/yy',
            changeMonth: true,
            changeYear: true
        })
        .mask("99/99/9999");

    $("#ID").mask("aa-999999");

    function birthdaySetup() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (var i = 1; i < 32; i++) {
            $("#day").append($("<option></option>").attr("value", i).text(i));
        }

        $.each(months, function (key, value) {
            $("#month").append($("<option></option>").attr("value", value).text(value));
        });

        for (var i = 2016; i > 1900; i--) {
            $("#year").append($("<option></option>").attr("value", i).text(i));
        }
    }

//    function checkEmpty() {
//        var error = $('<div class="warnText">Fill above field</div>');
//        var correctFlag = false;
//        //        alert( $("input[type=text], input[type=email], textarea").length);
//        $(":text, input[type=email], textarea").each(function (index) {
//            //console.log(this.value);
//            if (this.value === "") {
//                correctFlag = false;
//                var temp = error.clone();
//            } else correctFlag = true;
//        });
//        return correctFlag;
//    }

    function checkBirthday() {
        var correctAge = false;
        var selectedBirhday = $("#date").val();
        var ageDifMs = Date.now() - Date.parse(selectedBirhday);
        var ageDate = new Date(ageDifMs);
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        
        if (age<16)
            {
            $("#invalidAge").fadeIn("slow");
            correctAge = false;
            }
        else
            {
            $("#invalidAge").fadeOut("slow");
             correctAge = true;
            }
            return correctAge;
    }

    function checkGender() {
        if ($("#genderDropDown").find(":selected").text() === "I am...") {
            $("#invalidGender").fadeIn("slow");
            return false;
        } else return true;
    }
});