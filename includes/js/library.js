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

    var farenheitCelcius = function (temp) {
        // convert from F to C
        celcius.value = '';
        convertTempC = (temp - 32) * 5 / 9;
        celcius.value = Math.round(convertTempC);
    };

    var celciusFarenheit = function (temp) {
        // convert from C to F
        farenheit.value = ''
        convertTempF = (temp * 9 / 5) + 32;
        farenheit.value = Math.round(convertTempF);
    };


    document.documentElement.addEventListener('input', convertTemp, false);

}

xhrRequest = function (url, method, success, failure, always) {

    // Make sure a URL and method were provided
    if (!url || !method) return;

    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process request state changes
    xhr.onreadystatechange = function () {

        // Only run if the request is complete
        if (xhr.readyState !== 4) return;

        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Run the success callback
            if (success && typeof success === 'function') {
                success(JSON.parse(xhr.responseText), xhr);
            }
        } else {
            // Run the failure callback
            if (failure && typeof failure === 'function') {
                failure(xhr);
            }
        }

        if (always && typeof always === 'function') {
            always(JSON.parse(xhr.responseText), xhr);
        }

    };

    // Create and send a request
    // Defaults to GET
    xhr.open(method, url);
    xhr.send();

};

var quoteBlock = document.querySelector('[data-random-quote]');

randomRon = function () {
    // Get a list of posts
    xhrRequest('http://ron-swanson-quotes.herokuapp.com/v2/quotes', 'GET', function (posts) {
        posts.forEach(function (post) {
                quoteBlock.textContent = post;
        });
    });
};

randomRonFailure = function() {

}

randomRonBtn = function() {

    var newQuote = function(event) {
        // if click comes from quote button grab a new one
        if(event.target.matches('[data-quote-btn]')) {
            randomRon();
        }
    }
};

document.addEventListener('click', randomRonBtn, false);
