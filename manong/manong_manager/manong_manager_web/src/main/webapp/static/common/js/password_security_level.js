function checkPasswordStrong(val) {
	var modes = 0;
    if (val.length > 0) {
		if (/\d/.test(val)) {
		 modes ++; //数字
		}
		if (/[a-z]/.test(val)) {
		 modes ++; //小写
		}
		if (/[A-Z]/.test(val)) {
		 modes ++; //大写  
		}
		if (/\W/.test(val)) {
		 modes ++; //特殊字符
		}
    }
    switch (modes) {
	case 0:
   	 	$("#weak").css("backgroundColor","#ccc");
   	 	$("#medium").css("backgroundColor","#ccc");
   	 	$("#strong").css("backgroundColor","#ccc");
   	 	$("#poleStrong").css("backgroundColor","#ccc");
 		break;
	case 1:
		$("#weak").css("backgroundColor","#f58f98");
		$("#medium").css("backgroundColor","#ccc");
		$("#strong").css("backgroundColor","#ccc");
		$("#poleStrong").css("backgroundColor","#ccc");
	   	break;
	case 2:
		$("#weak").css("backgroundColor","#f58f98");
		$("#medium").css("backgroundColor","#f47920");
		$("#strong").css("backgroundColor","#ccc");
		$("#poleStrong").css("backgroundColor","#ccc");
	   break;
 	case 3:
	 	$("#weak").css("backgroundColor","#f58f98");
	 	$("#medium").css("backgroundColor","#f47920");
	 	$("#strong").css("backgroundColor","#78a355");
	 	$("#poleStrong").css("backgroundColor","#ccc");
     	break;
 	case 4:
	 	$("#weak").css("backgroundColor","#f58f98");
	 	$("#medium").css("backgroundColor","#f47920");
	 	$("#strong").css("backgroundColor","#78a355");
	 	$("#poleStrong").css("backgroundColor","#007947");
     	break;
	}
}

	
$(function(){ 
	$('#pwd').keyup(function () { 
		var strongRegex = new RegExp("^(?=.{6,})((?=.*[A-Z])|(?=.*[a-z]))(?=.*[0-9])(?=.*\\W).*$", "g"); 
		var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
		var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
	
		if (false == enoughRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-defule'); 
			 //密码小于六位的时候，密码强度图片都为灰色 
		} 
		else if (strongRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-strong'); 
			$('#securityLevel').val('3')
			 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
		} 
		else if (mediumRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-medium'); 
			$('#securityLevel').val('2')
			 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} 
		else { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass('pw-weak'); 
			$('#securityLevel').val('1')
			 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
		} 
		return true; 
	}); 
}) 