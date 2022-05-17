var URL ="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
$('#clk').on('click',function(){
    console.log('aaaaa')
    $.ajax({
        url:URL

    }).done(function(res){
        console.log(res)
        $('#res').text(res)
    })
})
$('#clk1').on('click',function(){
    $.ajax({
        type:'POST',
        url:URL
    }).done(function(res){
        console.log(res)
        $('#res').text(res)
    })
})