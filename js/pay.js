$("input[name='pay']").change(function(){
	// var test = $("input[name='pay']:checked").val();
	$(this).parent().css({border:"5px solid #3379F5", opacity:1, "box-shadow" :"0 0 30px #3379F580"}).siblings().css({border:"", opacity:"0.5", "box-shadow" :""});		
    $(this).siblings().css({color:"#3379F5", "font-weight":"600"}).parent().siblings().find("label").css({color:"", "font-weight":""});
    $(".next_bt").css({"background-color":"#F3F7FF", color:"#3379F5"}); //선택 버튼 활성화
});

