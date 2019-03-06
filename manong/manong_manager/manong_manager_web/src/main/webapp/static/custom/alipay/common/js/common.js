$(function() {
//	$(".my_wechat_cancel").click(function() {
//		$(".wechat_barcode").hide(200);
//	});
//	$(".my_wechat_hide").click(function() {
//		$(".wechat_barcode").show(200);
//	});

//	$(".login_li").hover(function() {
//		$(this).addClass("active");
//		$(".register_li").removeClass("active");
//		$(".login_area").show();
//		$(".register_area").hide();
//	});
//	$(".register_li").hover(function() {
//		$(this).addClass("active");
//		$(".login_li").removeClass("active")
//		$(".register_area").show();
//		$(".login_area").hide();
//	});

	//协议条款
//	$(".checkboxPic").click(function() {
//		if ($(this).attr("isshow") == "false") {
//			$(this).attr("isshow", "true");
//			$(".checkboxPic i").addClass("i_nocheck");
//		} else {
//			$(".checkboxPic i").removeClass("i_nocheck");
//			$(".checkboxPic i").addClass("i_icon");
//			$(this).attr("isshow", "false");
//		}
//	});
	//radio选择
//	$(function() {
//		$(".pay_list_c1").on("click", function() {
//			$(this).addClass("oncheck").siblings().removeClass("oncheck");
//		});
//	});
	//select
	$('.nice-select').click(function(e) {
		$('.nice-select').find('ul').hide();
		$('.iteam').css('z-index',10);
		$(this).parent().css('z-index',25);
		$(this).find('ul').show();
		e.stopPropagation();
	});
//	$('.nice-select li').hover(function(e){
//		$(this).toggleClass('on');
//		e.stopPropagation();
//	});
//	$('.nice-select li').click(function(e) {
//		var $select=$(this);
//		var val =$select.text();
//		var dataVal =$select.attr("data-value");
//		var target=$select.parent().attr('target');
//		$('#'+target).val(dataVal);
//		$(this).parents('.nice-select').find("input[type='text']").val(val);
//		$('.nice-select ul').hide();
//		e.stopPropagation();
//	});
//	$(document).click(function() {
//		$('.nice-select ul').hide();
//	});
});