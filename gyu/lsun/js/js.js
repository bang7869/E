$(document).ready(function(){
    //input 요소의 포커스 이벤트 처리
    $('#gongji').focus(function(){
        $(this).css('background-color','#2e1705');
        $('#event').css('background-color','#a97b48');
    });
    
});
  $(document).click(function(){
    //input 요소의 포커스 이벤트 처리
    $('#gongji').focus(function(){
        if($("#gongji1").css("display") == "none"){   
            jQuery('#gongji1').css("display", "block");   
            jQuery('#event1').css("display", "none");
        } else {  
            jQuery('#event1').css("display", "none");   
        } 
    });
     
});

$(document).ready(function(){
    //input 요소의 포커스 이벤트 처리
    $('#event').click(function(){
        if($("#event1").css("display") == "none"){   
            jQuery('#event1').css("display", "block");  
            jQuery('#gongji1').css("display", "none");
        } else {  
            jQuery('#gongji1').css("display", "none");   
        }  
    });
    
});



$(document).ready(function(){
    //input 요소의 포커스 이벤트 처리
    $('#event').focus(function(){
        $(this).css('background-color','#2e1705');
        $('#gongji').css('background-color','#a97b48');
    });
});