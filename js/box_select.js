// 화살표 사라지게
$(".locker_wrap >img").click(function(){
    $(this).animate({opacity:0}).siblings("img").animate({opacity:1});
});

// 화살표 클릭시 함 이동
$(".locker_wrap .right_ar").click(function(){
    $(".locker_wrap .locker_left").animate({"left":"-100%"},"slow");
    $(".locker_wrap .locker_right").animate({"left": "-50%"},"slow");
});

$(".locker_wrap .left_ar").click(function(){
    $(".locker_wrap .locker_right").animate({"left":"50%"},"slow");
    $(".locker_wrap .locker_left").animate({"left": "0%"},"slow");
});

// 함 클릭 이벤트
$(".locker li").click(function(){
    $(this).css({"background-color":"#FECB24"}).siblings().css({"background-color":""}); //클릭시 노란색
    $(this).parent().siblings().children().css({"background-color":""}); //색상 중복 방지
    $(this).parents(".locker").siblings().find("li").css({"background-color":""}); //중복 방지
    $(".next_bt").css({"background-color":"#F3F7FF", color:"#3379F5"}); //선택 버튼 활성화

});

// 사용중 함 클릭시 css고정
$(".locker li.use").click(function(){
    $(this).css({"background-color":""});
});