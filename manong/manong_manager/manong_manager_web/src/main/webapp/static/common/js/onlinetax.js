// JavaScript Document
$(function() {
	 //品牌翻转
        var turn = function(target,time,opts){
            target.find('.cura').hover(function(){
                $(this).find('img').eq(0).stop().animate(opts[0],time,function(){
                    $(this).hide().next().show();
                    $(this).next().animate(opts[1],time);
                });
            },function(){
                $(this).find('.back').animate(opts[0],time,function(){
                    $(this).hide().prev().show();
                    $(this).prev().animate(opts[1],time);
                });
            });
        };
        var verticalOpts = [{'width':0},{'width':'284px'}];
        turn($('#vertical'),150,verticalOpts);
	
	
	});
$(document).ready(function(){
	var $tab_li = $('#notice_tit ul li');
	$tab_li.hover(function(){
		$(this).addClass('select').siblings().removeClass('select');
		var index = $tab_li.index(this);
		$('div.notice_con > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#right_notice_tit ul li');
	$tab_li.hover(function(){
		$(this).addClass('select').siblings().removeClass('select');
		var index = $tab_li.index(this);
		$('div.right_notice_con > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#resource_tit ul li');
	$tab_li.hover(function(){
		$(this).addClass('select').siblings().removeClass('select');
		var index = $tab_li.index(this);
		$('div.resource_con > div').eq(index).show().siblings().hide();
	});	
});

