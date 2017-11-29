/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//$(document).ready(function(){
////    var widthLen = ($(".head-dinamic").width() / 100);
////    var heightLen = ($(".head-dinamic").height() / 100);
////    var res = widthLen * heightLen;
////    for(var i = 0; i < res;i++){
////        var miniBlock = document.createElement("div");
////        miniBlock.className = "mini-block";
//////        miniBlock.style.width = widthLen+"px";
//////        miniBlock.style.height = heightLen+"px";
////        $(".head-dinamic").append(miniBlock);
////    }  
//});


function scrollFooter(scrollY, heightFooter)
{
    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
//    $('header').css({
//        'height' : windowHeight + 'px',
//        'line-height' : windowHeight + 'px'
//    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    };
});

$(window).ready(function(){
	/* делаем плавное появление */
        setTimeout (function(){
            $(".aone").fadeIn('slow');
        },1000);  
                
        setTimeout (function(){
            $(".atwo").fadeIn('slow');
        },2000);
        
        setTimeout (function(){
            $(".athree").fadeIn('slow');
        },3000);
        
        setTimeout (function(){
            $(".head-R").show('drop');
        },3500);

        
        
        
});