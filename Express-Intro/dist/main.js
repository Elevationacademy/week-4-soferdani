const fetchBookData = function () {
    let input = $("#book-input").val()

    $.get(`books/${input}`, function (bookData) { //how its acctually work ?!?!
        console.log(bookData);
        $("body").append(`<div>${bookData.title} - ${bookData.author}`)
    })
}
