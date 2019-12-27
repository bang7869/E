//   $(document).click(function(){
//     //input 요소의 포커스 이벤트 처리
//     $('#btn1').focus(function(){
//         if($("#Hwan1").css("display") == "none"){   
//             jQuery('#Hwan1').css("display", "block");   
//             jQuery('#Hwan2').css("display", "none");
//             jQuery('#Hwan3').css("display", "none");
//         } else {  
//             jQuery('#Hwan2').css("display", "none");   
//             jQuery('#Hwan3').css("display", "none");   
//         } 
//     });
     
// });
// $(document).click(function(){
//     //input 요소의 포커스 이벤트 처리
//     $('#btn2').focus(function(){
//         if($("#Hwan2").css("display") == "none"){
//             jQuery('#Hwan2').css("display", "block");
//             jQuery('#Hwan1').css("display", "none");
//             jQuery('#Hwan3').css("display", "none");
//         } else {  
//             jQuery('#Hwan1').css("display", "none");   
//             jQuery('#Hwan3').css("display", "none");   
//         } 
//     });
     
// });
//   $(document).click(function(){
//     //input 요소의 포커스 이벤트 처리
//     $('#btn3').focus(function(){
//         if($("#Hwan3").css("display") == "none"){   
//             jQuery('#Hwan3').css("display", "block");   
//             jQuery('#Hwan1').css("display", "none");
//             jQuery('#Hwan2').css("display", "none");
//         } else {  
//             jQuery('#Hwan1').css("display", "none");   
//             jQuery('#Hwan2').css("display", "none");   
//     });
     
// });
// Z

function btn1(){   
    if($("#Hwan1").css("display") == "none"){   
                    jQuery('#Hwan1').css("display", "block");   
                    jQuery('#Hwan2').css("display", "none");
                    jQuery('#Hwan3').css("display", "none");
                } else {  
                    jQuery('#Hwan2').css("display", "none");   
                    jQuery('#Hwan3').css("display", "none");   
                } 
}


function btn2(){   
    if($("#Hwan2").css("display") == "none"){   
                    jQuery('#Hwan2').css("display", "block");   
                    jQuery('#Hwan1').css("display", "none");
                    jQuery('#Hwan3').css("display", "none");
                } else {  
                    jQuery('#Hwan1').css("display", "none");   
                    jQuery('#Hwan3').css("display", "none");   
                } 
}


function btn3(){   
    if($("#Hwan3").css("display") == "none"){   
                    jQuery('#Hwan3').css("display", "block");   
                    jQuery('#Hwan2').css("display", "none");
                    jQuery('#Hwan1').css("display", "none");
                } else {  
                    jQuery('#Hwan2').css("display", "none");   
                    jQuery('#Hwan1').css("display", "none");   
                } 
}


