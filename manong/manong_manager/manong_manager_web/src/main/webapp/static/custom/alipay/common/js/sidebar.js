//侧边功能
$(function()
{

	;
	(function()
	{
		var back_top = $('#ry_sidebar .ry_go_top'),
			_sidebar = $('#ry_sidebar'),
			winH = 0,
			winW = 0,
			goTop_show = false,
			_t = 0,
			_l = 0;

		function sideBarSit()
		{
			winH = $(window)
				.height();
			winW = $(window)
				.width();
			_l = winW / 2 + 666;
			_l <= 1413 ? _sidebar.css('left', winW - 41) : _sidebar.css('left', _l);

		}
		sideBarSit();
		$(window)
			.resize(function()
			{
				sideBarSit();
				getTop() >= winH ? back_top.show() : back_top.hide();
			})

		$(window)
			.scroll(function()
			{
				getTop() >= winH ? back_top.show() : back_top.hide();

			})

	})()

})

function getTop()
{
	var t = document.documentElement.scrollTop ||
		window.pageYOffset ||
		document.body.scrollTop;
	return t;
}

function setTop(t)
{
	document.documentElement.scrollTop = t;
	window.pageYOffset = t; //Safari
	document.body.scrollTop = t; //DOCTYPE未申明
}

function backTop()
{
	var t = getTop();
	setTop(t);

	function clearTimer(timer)
	{
		t = 0;
		setTop(t);
		clearInterval(timer);
	}

	var timer = setInterval(function()
	{
		t <= 0 ? clearTimer(timer) : t -= 200;
		setTop(t);
	}, 30)
}