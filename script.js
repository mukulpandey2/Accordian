
$(document).ready(function () {
   
   $(".a-title").click(function () {
    $(this).next(".a-desc").slideToggle();
    // $(this).toggleClass('active');
    $(this).children(".icon").text(function (index, text) {
        return text=== '+' ? '-' :'+';
       
      })
      
   })
 
   
});
