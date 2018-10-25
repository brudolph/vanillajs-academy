var quoteBlock = document.querySelector('[data-random-quote]');

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

randomRon = function () {
    // Get a list of posts
    xhrRequest('http://ron-swanson-quotes.herokuapp.com/v2/quotes', 'GET', function (posts) {
        posts.forEach(function (post) {
            quoteBlock.textContent = post;
        });
    });
};

randomRonFailure = function () {

}

randomRonBtn = function () {

    // if click comes from quote button grab a new one
    if (event.target.matches('[data-quote-btn]')) {
        randomRon();
    }

};

document.addEventListener('click', randomRonBtn, false);
