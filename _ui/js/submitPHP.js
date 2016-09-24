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

    console.log("hello" + nameVal + emailVal + messageVal);

    name.on('input', function() {
        name.removeClass('red');
        nameVal = name.val();

    });

    email.on('input', function() {
        email.removeClass('red');
        emailVal = email.val();
        emailValid = validateEmail(emailVal);
        console.log(emailValid);
    });

    message.on('input', function() {
        message.removeClass('red');
        messageVal = message.val();
    });

    $("#submit").click(function() {

        // var dataString = 'name' + name + 'email' + email;
        if (nameVal == '' || emailVal == '' || messageVal == '' || emailValid == false) {
            if (nameVal == "") {
                console.log(nameVal);
                name.addClass('red');
            }
            if (emailVal == "" || emailValid == false) {
                console.log(emailVal);
                email.addClass('red');
            }
            if (messageVal == "" ) {
                console.log(messageVal);
                message.addClass('red');
            }

        } else {
                // AJAX code to submit form.
            $.ajax({
            type: "POST",
            url: "email.php",
            cache: false,
            success: function(data) {
                    console.log(data);
                    if (data.toLowerCase().indexOf("thanks") >= 0) {
                        $("#result").html(data);
                    } else {
                        $("#result").html("There was a problem sending your message, please try again");
                    }
                }
            });
        }
        $("#result").html("Please fill out all three fields");
        return false;
    });
};



$(document).ready(submit);
