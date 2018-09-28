showPassword = function () {
    // listening for form submissions
    document.addEventListener('change', function (event) {
        
        var form = event.target.closest('form'),
            password = form.querySelectorAll('[data-password]');
        
        // if checkbox is checked change type to text else if unchecked change to password
        if (event.target.checked == true) {
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'text';
            }
        } else if (event.target.checked == false) {
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'password';
            }
        }

    }, false)
};