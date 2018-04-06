$(document).ready(function() {
    $(".blue").click(function(){
      $(this).addClass("blue__active");
      setTimeout(function() { 
        $(".blue").removeClass("blue__active");
      }, 700);
      
    });
    
    $(".green").click(function(){
      $(this).addClass("green__active");
      setTimeout(function() { 
        $(".green").removeClass("green__active");
      }, 700);
    });
    
    $(".yellow").click(function(){
      $(this).addClass("yellow__active");
      setTimeout(function() { 
        $(".yellow").removeClass("yellow__active");
      }, 700);
    });
    
    $(".red").click(function(){
      $(this).addClass("red__active");
      setTimeout(function() { 
        $(".red").removeClass("red__active");
      }, 700);
    });
    
    
  });