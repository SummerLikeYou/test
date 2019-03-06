// JavaScript Document
$(function()
{
	//品牌翻转
	var turn = function(target, time, opts)
	{
		target.find('.cura')
			.hover(function()
			{
				$(this)
					.find('.in_1')
					.eq(0)
					.stop()
					.animate(opts[0], time, function()
					{
						$(this)
							.hide()
							.next()
							.show();
						$(this)
							.next()
							.animate(opts[1], time);
					});
			}, function()
			{
				$(this)
					.find('.back')
					.animate(opts[0], time, function()
					{
						$(this)
							.hide()
							.prev()
							.show();
						$(this)
							.prev()
							.animate(opts[1], time);
					});
			});
	};
	var verticalOpts = [
	{
		'width': 0
	},
	{
		'width': '284px'
	}];
	turn($('#vertical'), 150, verticalOpts);

});
$(document)
	.ready(function()
	{
		var $tab_li = $('#notice_tit ul li');
		$tab_li.bind('hover', function()
		{
			$(this)
				.addClass('select')
				.siblings()
				.removeClass('select');
			var index = $tab_li.index(this);
			$('div.notice_con > div')
				.eq(index)
				.show()
				.siblings()
				.hide();
		});
	});
$(document)
	.ready(function()
	{
		var $tab_li = $('#right_notice_tit ul li');
		$tab_li.hover(function()
		{
			$(this)
				.addClass('select')
				.siblings()
				.removeClass('select');
			var index = $tab_li.index(this);
			$('div.right_notice_con > div')
				.eq(index)
				.show()
				.siblings()
				.hide();
		});
	});
$(document)
	.ready(function()
	{
		var $tab_li = $('#resource_tit ul li');
		$tab_li.hover(function()
		{
			$(this)
				.addClass('select')
				.siblings()
				.removeClass('select');
			var index = $tab_li.index(this);
			$('div.resource_con > div')
				.eq(index)
				.show()
				.siblings()
				.hide();
		});
	});
$(document)
	.ready(function()
	{
		var $tab_li = $('#download_tit ul li');
		$tab_li.hover(function()
		{
			$(this)
				.addClass('select')
				.siblings()
				.removeClass('select');
			var index = $tab_li.index(this);
			$('div.resource_con > div')
				.eq(index)
				.show()
				.siblings()
				.hide();
		});
	});
$(document)
	.ready(function()
	{
		var $tab_li = $('#hot_notice_tit ul li');
		$tab_li.hover(function()
		{
			$(this)
				.addClass('select')
				.siblings()
				.removeClass('select');
			var index = $tab_li.index(this);
			$('div.hot_list > div')
				.eq(index)
				.show()
				.siblings()
				.hide();
		});
	});
//radio选择
$(function()
{
	$(".pay_list_c1")
		.on("click", function()
		{
			$(this)
				.addClass("oncheck")
				.siblings()
				.removeClass("oncheck");
		})
});
//左侧栏展开
$(function()
{
	$('.problem_content_left .nav_box')
		.bind('click', function()
		{
			if($(this)
				.hasClass('unfold'))
			{
				$(this)
					.removeClass('unfold')
					.find('h3.nav_til')
					.find('span')
					.eq(1)
					.attr('class', 'til_arr_up');
			}
			else
			{
				$(this)
					.addClass('unfold')
					.find('h3.nav_til')
					.find('span')
					.eq(1)
					.attr('class', 'til_arr_down');
			}
		})

	;
	(function()
	{
		//		搜索列表
		var selectBtn = $('#result_list_head ul li a'),
			len = selectBtn.length;
		for(var i = 0; i < len; i++)
		{
			(function(i)
			{
				selectBtn.eq(i)
					.bind('click', function()
					{
						selectBtn.parent()
							.removeClass('selected');
						selectBtn.eq(i)
							.parent()
							.addClass('selected');

					})

			})(i)
		}

	})()

})