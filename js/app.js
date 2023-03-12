// I was using with jQuery library files 

$(document).ready(function(){

    // start backtottops section 
    $('.backtotop_btns').hide();

    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
       // console.log(getscrolltop); //370

        if(getscrolltop >= 370){
            $('.backtotop_btns').fadeIn(1200);
        }else{
            $('.backtotop_btns').fadeOut(1200);

        }
    });

    //end backtotops section
  
    // start nav bar
    $(window).scroll(function(){

        var scrollposition = $(this).scrollTop();
        // console.log(scrollposition);

        if(scrollposition >= 200){
            $('.navbar').addClass('navmenus');
        }else {
            $('.navbar').removeClass('navmenus');
        }

    });


    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('crossxs');
    });
    

    //end nav bar


    //start properties section 

    $('.propertieslists').click(function(){

        $(this).addClass('activeitems').siblings().removeClass('activeitems');


        var filervalue = $(this).attr('data-filter');
        // console.log(filervalue);

        if(filervalue === 'all'){
            $('.filters').show();

        }else{
            $('.filters').hide();

            $('.filters').not('.'+filervalue).hide();
            $('.filters').filter('.'+filervalue).show();
        }

        lightbox.option({
            showImgaeNumberLabel: false
        });

    });
    //end properites section


    //start adv section 

    $(window).scroll(function(){

        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint >= 2002){
            $('.forlevis').addClass('fromleftlevis');
            $('.forlogos').addClass('fromtoplogos');
            $('.forerens').addClass('frombottomerens');
        }
    });
    // end adv section 

    //start client section 
    $(window).scroll(function(){

        let getscrollvalue = $(this).scrollTop();
        // console.log(getscrollvalue);//4464

        if(getscrollvalue >= 4464){
            $('.clientLefts').addClass('fromleftlevis');
            $('.clientTops').addClass('forerwins');
            $('.clientRights').addClass('fromrightlogos');



        }
    });

    //end client section 

    // start contact section 

    $(window).scroll(function(){

        getpoint = $(this).scrollTop();
        //console.log(getpoint);//6535

        if(getpoint >= 6535){
            $('.halfmoves').addClass('wholemove');

        }
    });
    // end contact section 


    // start footer section 

    const getyear = $('#getyear');
    const getfullyear = new Date().getFullYear();
    getyear.text(getfullyear);


    // end footer section 









});