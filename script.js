var authTerm = $("#search-authorortitle").val().trim();
var isbnTerm = $("#search-ISBN").val().trim();
var genTerm = $("#search-genre").val().trim();

function buildNewYorkURL() {
    var nyBook = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"
    var url = nyBook + "author=" + authTerm + "&isbn=" + isbnTerm + "&api-key=Elscl5JmJnrLqqoCMZB0BAkVXEoApHOU";
    return (url);
};
function buildGoodReadsURL() {
    var goodReads = "https://www.goodreads.com/search.xml?"
    var url = goodReads + "q=" + authTerm + isbnTerm + "slug=" + genTerm + "&key=506nRRgeF7qmVFcKIaro9g";
    return (url);
};
function clear() {
    $("#results-section").empty();
};
function updatePage(bookData) {
    var bookView = $("#results-section").val();

    for (i = 0; i < bookView; i++) {
        var book = bookData.reponse.docs[i];
        var bookCount = i + 1;
        var $bookList = $("<ul>");
        $bookList.addClass("list-group");
        $("book-section").append($bookList);

    }

}
$('#run-search').on('click', function (event) {
    event.preventDefault();
    clear();
    var NYurl = buildNewYorkURL();
    var GRurl = buildGoodReadsURL();
    $.ajax({
        url: NYurl,
        method: "GET"
    }).then(updatePage);
    $.ajax({
        url: GRurl,
        method: "GET"
    }).then(updatePage)
});