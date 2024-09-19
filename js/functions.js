$(function(){
    
    
    var show = $('.areaservicos>div>span');

$('.boxservico1').click(function(){
    $('.popup1').fadeIn();
})

$('.areaservicos>div').click(function(){
    $('.popup1').fadeOut();
})

if(show.style.display == 'block'){
    console.log('ta block')
}







})