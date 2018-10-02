showPassword = function () {

    var togglePassword = function (event) {

        // See if the element is our checkbox if not quit and return
        if (!event.target.matches('[data-toggle-password]')) return;

        var form = event.target.closest('form'),
            password = form.querySelectorAll('[data-password]');

        // if input has type checkbox and is checked/unchecked
        if (event.target.checked == true) {
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'text';
            }
        } else if (event.target.checked == false) {
            for (let i = 0; i < password.length; i++) {
                password[i].type = 'password';
            }
        }
    };

    // listening for input field events
    document.addEventListener('input', togglePassword, false);
};

temperatureConv = function () {

    var convertTemp = function (event) {

        // See if the element is our checkbox if not quit and return
        if (!event.target.matches('[data-temperature]')) return;

        var celcius = document.querySelector('#celcius'),
            tempCelcius = celcius.value,
            farenheit = document.querySelector('#farenheit'),
            tempFarenheit = farenheit.value;
        // 
        if (event.target.id === 'farenheit') {
            farenheitCelcius(tempFarenheit);
        }

        if (event.target.id === 'celcius') {
            celciusFarenheit(tempCelcius);
        }

    };

    var farenheitCelcius = function(temp) {
        // convert from F to C
        celcius.value = '';
        convertTempC = (temp - 32) * 5 / 9;
        celcius.value = Math.round(convertTempC);
    };

    var celciusFarenheit = function(temp) {
        // convert from C to F
        farenheit.value = ''
        convertTempF = (temp * 9 / 5) + 32;
        farenheit.value = Math.round(convertTempF);
    };


    document.documentElement.addEventListener('input', convertTemp, false);

}