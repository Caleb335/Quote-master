$(document).ready(function () {

    var quote;

    function getNewQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response) {
                quote = response.quoteText;
                $('#quote').text(response.quoteText);
                if (response.quoteAuthor) {
                    $('#author').text('' + response.quoteAuthor);
                } else {
                    $('#author').text('- unknown');
                }
            }
        });
    }

    getNewQuote();

    $('.get-quote').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });

    $('.share-quote').onClick(function(event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
    });
});
