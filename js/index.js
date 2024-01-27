

$('.btn-success').click(()=>{
      console.log($('.dashboard-contain').css('left'))
      if($('.dashboard-contain').css('left')=="-200px"){
            $('.dashboard-contain').animate({'left':"0"},1000)


      }else{
            $('.dashboard-contain').animate({'left':"-200px"},1000)


      }

})
$('#closeddashboard').click(()=>{
      $('.dashboard-contain').animate({'left':"-200px"},1000)


})
$('.singerone-number').click(()=>{
      
      $('.singerone-content').slideToggle(500) 
      if($('.singerone-content').css('display')!= "none"){
            $('.singerone-content').siblings('p').slideUp(500)


      }
      


})
$('.singertwo-number').click(()=>{
      
      $('.singertwo-content').slideToggle(500)
      if($('.singetwo-content').css('display')!= "none"){
            $('.singertwo-content').siblings('p').slideUp(500)


      }

})
$('.singerthree-number').click(()=>{
      
      $('.singerthree-content').slideToggle(500)
      if($('.singethree-content').css('display')!= "none"){
            $('.singerthree-content').siblings('p').slideUp(500)


      }

})




var countDownDate = new Date("Feb 5 , 2025 ").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    


   $('#day').text(days + " day")
   $('#hours').text(hours + " H")
   $('#minutes').text(minutes + " m")
   $('#second').text(seconds + " S")

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



($('.textarea').keyup(()=>{
 let remain= ( 100 - $('.textarea').val().length)
 $('#char-remain').html(`<h6><span class="text-danger">${remain}</span> Characyer Reamining</h6>`)
 if(remain==0){
      $('#char-remain').html(`<h6> you finished char</h6>`)

 }
}))