var newsContainer = document.querySelector('[data-top-news]');
var apiKey = '';
var sections = ['technology', 'science', 'sports']

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

topNews = function () {
    if (!newsContainer) return;

    topNewsRequest();
};

topNewsRequest = function () {
    // Get a list of posts
    xhrRequest('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=112825e1191b476e886285a885e9ac9b', 'GET', function (result) {
        console.log(result);
        result.forEach(function (results) {
            //newsContainer.textContent = post;
            console.log(results);
        });
    });
};

topNewsFailure = function () {

}


