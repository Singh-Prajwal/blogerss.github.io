$(document).ready(function(){

    $nav=$('.nav')
    $toggleCollapse=$('.toggle-collapse')


    /**click operation of toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapsebar');
    }) 

    //Owl carousel in blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });

    
    //scroll up functionality


    $('.move-up span i').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000);
    })

});