
// 팝업
$(".home_bt").click(function(){
    home(); //홈버튼 클릭시 홈으로 이동
});

$(".back_bt").click(function(){
    back(); //뒤로가기 버튼 클릭시 이전 페이지로 이동
});

$(".no_bt").click(function(){
    popupDown(); //팝업 취소 버튼 클릭시 팝업닫기
});

// 홈 버튼 이동
function home() {
    window.location.href = './index.html';
}
// 뒤로가기 버튼 이동
function back() {
    window.location.href = 'javascript:history.back();';
}

// 팝업 닫기(모두 적용)
function popupDown(){
    $(".main").css({opacity:1});
    $(".popup_wrap").css({opacity:0, transition:"all 0.3s", "z-index":"-99"});
    $(".footer_info").css({position:"static", "bottom":"", "left": "" , "z-index":""});
}

// 개인정보 팝업
function popupAgreeOpen(){
    $(".main").css({opacity:0.3});
    $(".popup_agree").css({opacity:1, transition:"all 0.3s", "z-index":"100"});
    $(".footer_info").css({position:"sticky", "bottom":0, "left": 0 , "z-index":"999"});
}


// 정보 확인 팝업 오픈
function popupInfoEnterOpen(){
    $(".main").css({opacity:0.3});
    $(".popup_info_enter").css({opacity:1, transition:"all 0.3s", "z-index":"100"});
    $(".footer_info").css({position:"sticky", "bottom":0, "left": 0 , "z-index":"999"});
}

function popupInfoEnterDown(){
    $(".main").css({opacity:1});
    $(".popup_info_enter").css({opacity:0});
    $(".footer_info").css({position:"static", "bottom":"", "left": "" , "z-index":""});
}

