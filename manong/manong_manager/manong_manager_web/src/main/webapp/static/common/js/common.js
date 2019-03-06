

jQuery.dateCollections = (function(){

    var nowDate = new Date();
    var cloneNowDate = new Date();

    var fullYear = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
    var date = nowDate.getDate();

    var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天

    // 格式化日期 (2016-02-14)
    function getFullDate(targetDate) {
        var D, y, m, d;
        if (targetDate) {
            D = new Date(targetDate);
            y = D.getFullYear();
            m = D.getMonth() + 1;
            d = D.getDate();
        } else {
            y = fullYear;
            m = month;
            d = date;
        }
        m = m > 9 ? m : '0' + m;
        d = d > 9 ? d : '0' + d;

        return y + '-' + m + '-' + d;
    }

    // 一天的时间戳(毫秒为单位)
    var timestampOfDay = 1000*60*60*24;

    // 今天，昨天
    var fullToday = getFullDate();
    var fullYesterday = getFullDate(nowDate - timestampOfDay);

    var nowDay = nowDate.getDay(); // getDay 方法返回0 表示星期天
    nowDay = nowDay === 0 ? 7 : nowDay;

    // 本周一，本周末(星期天)
    // 注：在safari下（nowDate +- 0）不会转换为时间戳，这里在nowDate前加上运算符+，手动转换时间戳运算
    var fullMonday = getFullDate( +nowDate - (nowDay-1)*timestampOfDay );
    var fullSunday = getFullDate( +nowDate + (7-nowDay)*timestampOfDay );

    // 月初，月末
    var fullStartOfMonth = getFullDate( cloneNowDate.setDate(1) );
    var fullEndOfMonth = getFullDate( cloneNowDate.setDate(endOfMonth) );

    return {
        fullToday: fullToday,
        fullYesterday: fullYesterday,
        fullMonday: fullMonday,
        fullSunday: fullSunday,
        fullStartOfMonth: fullStartOfMonth,
        fullEndOfMonth: fullEndOfMonth
    };

}());

function PrefixCharToInteger(value, length, c) {
	return (Array(length).join(c) + value).substr(length*(-1));
}



Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}


function formatDatebox(value) {
	if (value == null || value == '') {
		return '';
	}
	var dt;
	if (value instanceof Date) {
		dt = value;
	} else {
		dt = new Date(value);
	}
	return dt.format("yyyy-MM-dd"); // 扩展的Date的format方法(上述插件实现)
}


function messagebox(message){
	$.messager.show({

		title:'提示',
		msg:message,
		showType:'show',
		style:{
			right:'',
			top:document.body.scrollTop+document.documentElement.scrollTop,
			bottom:''
		}
	});
}
function guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
/*
function showalert(message){
	$.messager.alert(message);
}
function showerror(message){
	$.messager.alert(message,'error');
}
function info(message){
	$.messager.alert(message,'info');
}
function showquestion(message){
	$.messager.alert(message,'question');
}
function showwarning(message){
	$.messager.alert(message,'warning');
}
*/
		
$(function() {
	$(".my_wechat_cancel").click(function() {
		$(".wechat_barcode").hide(200);
	});
	$(".my_wechat_hide").click(function() {
		$(".wechat_barcode").show(200);
	});

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
	$(".checkboxPic").click(function() {
		if ($(this).attr("isshow") == "false") {
			$(this).attr("isshow", "true");
			$(".checkboxPic i").addClass("i_nocheck");
		} else {
			$(".checkboxPic i").removeClass("i_nocheck");
			$(".checkboxPic i").addClass("i_icon");
			$(this).attr("isshow", "false");
		}
	});
	//radio选择
	$(function() {
		$(".pay_list_c1").on("click", function() {
			$(this).addClass("oncheck").siblings().removeClass("oncheck");
		});
	});
	//select
	$('.nice-select').click(function(e) {
		$('.nice-select').find('ul').hide();
		$(this).find('ul').show();
		e.stopPropagation();
	});
	$('.nice-select li').hover(function(e){
		$(this).toggleClass('on');
		e.stopPropagation();
	});
	$('.nice-select li').click(function(e) {
		var $select=$(this);
		var val =$select.text();
		var dataVal =$select.attr("data-value");
		var target=$select.parent().attr('target');
		$('#'+target).val(dataVal);
		$(this).parents('.nice-select').find("input[type='text']").val(val);
		$('.nice-select ul').hide();
		e.stopPropagation();
	});
	$(document).click(function() {
		$('.nice-select ul').hide();
	});
});