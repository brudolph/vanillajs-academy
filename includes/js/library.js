showPassword = function () {
    // listening for form submissions
    document.addEventListener('change', function (event) {
        var form = event.target.closest('form'),
            password = form.querySelectorAll('[data-password]');

        

        // if input has type checkbox and is part of the log in form
        if (event.target.checked == true) {
            //passwords.type = 'text';
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'text';
            }
        } else if (event.target.checked == false) {
            //passwords.type = 'password';
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'password';
            }
        }

    }, false)
};