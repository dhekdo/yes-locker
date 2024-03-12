// 메일 입력창
$(".select_box img").click(function(){
    $(".select_box input").css({"background-color":"#FCFCFC", "box-shadow":"none"});
    $(".select_box input").toggleClass("place_on");
    $(".select_box .bg").toggle();
    $(".select_box ul").slideToggle(200);
    

    if( $(".select_box .bg").css("display") == "none" ){
        $(".select_box input").css({
            "background-color" : "#FCFCFC",
            "box-shadow" : "inset 0px 0px 8px #00000012"
        });
    }
});

// 클릭시 버튼 변경&팝업
$(".pass_bt").click(function(){
    $(this).text("완료").addClass("bt_on").css({transition:"all 0.5s"}).attr("onclick","popupInfoEnterOpen();");
    $(this).siblings().removeAttr("onclick").addClass("back_wait_bt");
    $(".main >div").stop().animate({"top":"-100%"},"slow");

    $(".back_wait_bt").click(function(){
        $(".pass_bt").text("다음").removeClass("bt_on").removeAttr("onclick");
        $(this).attr("onclick","back();").removeClass("back_wait_bt");
        $(".main >div").stop().animate({"top":0},"slow");
    });
});

