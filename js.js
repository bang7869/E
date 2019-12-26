$(document).ready(function(){
    //input 요소의 포커스 이벤트 처리
    $('#gongji').focus(function(){
        $(this).css('background-color','#2e1705');
        $('#event').css('background-color','#a97b48');
    });
    
});
$(document).ready(function(){
    //input 요소의 포커스 이벤트 처리
    $('#event').focus(function(){
        $(this).css('background-color','#2e1705');
        $('#gongji').css('background-color','#a97b48');
    });
    
});