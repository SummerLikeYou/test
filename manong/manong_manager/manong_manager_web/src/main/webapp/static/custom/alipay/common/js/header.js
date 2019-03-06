//top_bar中的下拉菜单
$(function() {
$("#jq_topmenu li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},
function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();
});
});
//top_bar中的下拉菜单
$(function() {
$("#jq_topmenu1 li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox1").show();},
function(){$(this).removeClass("hover").find("div.jq_hidebox1").hide();
});
});
$(function() {
$("#jq_topmenu1 li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},
function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();
});
});
$(function() {
$("#jq_topmenu2 li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox2").show();},
function(){$(this).removeClass("hover").find("div.jq_hidebox2").hide();
});
});
$(function() {
	$('.menu > li').hover(function(){
	$(this).find('.sub_menu').show();
	$(this).find('.web_nav').show();
}, function() {
	$('.sub_menu').stop(true,true).hide();
	$('.web_nav').stop(true,true).hide();
});

});

//分类菜单开始
$(function (){
  $(".all_class dd").hover(function(){
  $(".nav_right",this).show();
  });
  $(".all_class dd").mouseleave(function(){
  $(".nav_right",this).hide();
  });
});
$(function(){
    $(".js_toggle").Jdropdown({
            delay: 100
    })
});


//菜单切换
(function(a) {
    a.fn.Jdropdown = function(d, e) {
        var c = a.extend({
            event: "mouseover",
            current: "hover",
            delay: 0,
            fun: "default"
        }, d || {});
        var b = (c.event == "mouseover") ? "mouseout" : "mouseleave";
        a.each(this, function() {
            var h = null,
                f = false;
            a(this).bind(c.event, function() {
                if (f) {
                    clearTimeout(g)
                } else {
                    var j = a(this);
                    h = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            var _flag_temp = 0;
                            j.addClass(c.current).children(".menu-in").show();
                            var _c = j.children(".menu-in");
                             _c.css('top','0px');
                        }
                        f = true;
                        if (e) {
                            e(j)
                        }
                    }, c.delay)
                }
            }).bind(b, function() {
                if (f) {
                    var j = a(this);
                    g = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            j.removeClass(c.current).children(".menu-in").hide();

                        }

                        f = false
                    }, c.delay)
                } else {
                    clearTimeout(h)
                }
            })
        })
    }
})(jQuery);

$(function() {
		$('.nav-menu > li').hover(function(){
		$(this).find('.children').animate({ opacity:'show', height:'show' },200);

}, function() {
		$('.children').stop(true,true).hide();
	});

});
//全部分类隐藏显示
$(function() {
              	$('.nav_category').bind('mouseenter', function(){
              		$('.category').css('display', 'block');
              	});
              	$('.category').bind('mouseleave',function(){
              		$('.category').css('display','none');
              	});
})
//右侧栏
$(document).ready(function(){

	$("#leftsead a").hover(function(){
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").show();
		}else{
			$(this).children("img.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("img.hides").animate({marginRight:'0px'},1000);
		}
	},function(){
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").hide('slow');
		}else{
			$(this).children("img.hides").animate({marginRight:'-163px'},1000,function(){$(this).hide();$(this).next("img.shows").show();});
		}
	});

	$("#top_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 1000);});
});
