$(function () {
    'use strict'
    //Adjust Slider Height
   var winH    =$(window).height(),
       upperrH =$('.upper-bar').innerHeight(),
       navH    =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperrH + navH ));
    
    $('.collapse .nav-item').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Featured Work Shuffle 
    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    
    var isDone = false;
    
        $(window).scroll(function() {
            
            if( ! isDone && $(window).scrollTop() >= 2500 ) {
               
           $(".count").countTo({});
               
             isDone = true;  
        
           }
            
        });
    
    
    $(".typeme").typed({
        strings: ["0201111555678"],
        startDelay: 6500,
        showCursor: false,
    });
    
    $(".typemein").typed({
        strings: ["KhaledAhmed552@gmail.com"],
        startDelay: 7000,
        showCursor: false,
    });
    
    $(".typemeinfo").typed({
        strings: ["Lets Work Together!"],
        startDelay: 7500,
        showCursor: false,
    });
            
    
    
    $("html").niceScroll({
        cursorcolor: "#ed1d24",
        cursorwidth: "8px",
        cursorspeed: ""
    });  
    
   
        
        
    
        $(window).scroll(function(){
         
            
       if($(window).scrollTop() >= 1500){
           
          $('.scroll-to-top').fadeIn(500); 
           
       } else{
           
           $('.scroll-to-top').fadeOut(500);  
       } 
             
        
    });
    
    $('.scroll-to-top').click(function (event){
        
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop:0
            
        },1000);
    });
    
    
});

 $(window).load(function(){
        $("body").css("overflow","auto");
        $(".loading-overlay .spinner").fadeOut(4000,function(){
            $(this).parent().fadeOut(4000);
        });
    });


 