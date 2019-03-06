// JavaScript Document
$(function()
{;
	(function()
	{//input
		supportPlaceholder = 'placeholder' in document.createElement('input'),
			placeholder = function(input)
			{
				var text = input.attr('placeholder'),
					defaultValue = input.defaultValue;
				if(!defaultValue)
				{
					input.val(text)
						.css("color", "#999");
				}
				input.focus(function()
				{
					if(input.val() == text)
					{
						$(this)
							.val("");
					}
				});
				input.blur(function()
				{
					if(input.val() == "")
					{
						$(this)
							.val(text)
							.css("color", "#999");
					}
				});
				//输入的字符不为灰色  
				input.keydown(function()
				{
					$(this)
						.css("color", "");
				});
			};
		//当浏览器不支持placeholder属性时，调用placeholder函数   
		if(!supportPlaceholder)
		{
			$('input')
				.each(function()
				{
					text = $(this)
						.attr("placeholder");
					if($(this)
						.attr("type") == "text")
					{
						placeholder($(this));
					}
				});
		}
	})();
	(function()
	{//textarea
		supportPlaceholder = 'placeholder' in document.createElement('textarea'),
			placeholder = function(textarea)
			{
				var text = textarea.attr('placeholder'),
					defaultValue = textarea.defaultValue;
				if(!defaultValue)
				{
					textarea.html(text)
						.css("color", "#999");
				}
				textarea.focus(function()
				{
					if(textarea.html() == text)
					{
						$(this)
							.html("");
					}
				});
				textarea.blur(function()
				{
					if(textarea.html() == "")
					{
						$(this)
							.html(text)
							.css("color", "#999");
					}
				});
				//输入的字符不为灰色  
				textarea.keydown(function()
				{
					$(this)
						.css("color", "");
				});
			};
		//当浏览器不支持placeholder属性时，调用placeholder函数   
		if(!supportPlaceholder)
		{
			$('textarea')
				.each(function()
				{
					text = $(this)
						.attr("placeholder");
					placeholder($(this));
				});
		}
	})()
});