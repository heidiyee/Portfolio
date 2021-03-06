function validateEmail(elementValue){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(elementValue);
}

var submit = function() {
    var name = $("#name");
    var nameVal = name.val();
    var email = $("#email");
    var emailVal = email.val();
    var emailValid = false;
    var message = $("#message");
    var messageVal = message.val();

    name.on('input', function() {
        name.removeClass('red');
    });

    email.on('input', function() {
        email.removeClass('red');
    });

    message.on('input', function() {
        message.removeClass('red');
    });

    $(".submit").click(function() {
        nameVal = name.val();
        emailVal = email.val();
        emailValid = validateEmail(emailVal);
        messageVal = message.val();

        // var dataString = 'name' + name + 'email' + email;
        if (nameVal == '' || emailVal == '' || messageVal == '' || emailValid == false) {
            $("#result").hide().html("Please fill out all three fields. ").fadeIn(500);
            if (nameVal == "") {
                name.addClass('red');
            }
            if (messageVal == "" ) {
                message.addClass('red');
            }
            if (emailVal == "" || emailValid == false) {
                email.addClass('red');

                if (emailVal !== "" && emailValid == false) {
                    $('#result').append("<br>You must enter a valid email.").fadeIn(500);
                }
            }

        } else {
            var formData = $('.form').serialize();
                // AJAX code to submit form.
            $.ajax({
            type: "POST",
            url: "/email.php",
            cache: false,
            data: formData,
            success: function(data) {
                    if (data.toLowerCase().indexOf("thanks") >= 0) {
                        $('.form').addClass('hide');
                        $("#result").css("color", "#6ac1c6");
                        $("#result").html(data);
                    } else {
                        $("#result").html("There was a problem sending your message, please try again");
                    }
                }
            });
        }
        return false;
    });
};



$(document).ready(submit);
