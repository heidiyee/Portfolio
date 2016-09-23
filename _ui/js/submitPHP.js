var submit = function() {

    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        console.log("called");
        // var dataString = 'name' + name + 'email' + email;
        if (name == '' || email == '' || message == '') {
            // alert("Please Fill All Fields");
            console.log("not all fields filled");
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
                    }
                }
            });
        }
        return false;
    });
};



$(document).ready(submit);
