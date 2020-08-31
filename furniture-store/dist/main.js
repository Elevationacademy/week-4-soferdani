$("#btn").on("click",function(){
    valFromUser = $("#inputFromUser").val()
    $("#inputFromUser").val("")
    $.get(`/priceCheck/${valFromUser}`,function(res){
        const htmlToAppnd = `<p>${res.price}</p>`
        $(".appendTO").append(htmlToAppnd)
    })

})