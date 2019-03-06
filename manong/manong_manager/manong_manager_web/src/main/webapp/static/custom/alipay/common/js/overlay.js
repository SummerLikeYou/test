var loginindex;

/*兼容之前的弹出框开始*/

/* 显示遮罩层 */
function showOverlay(overlayId)
{
	var $overlay = $("#" + overlayId);
	$overlay.css(
	{
		height: document.body.scrollHeight,
		width: document.body.scrollWidth
	});
	$overlay.fadeTo(200, 0.5);
}

function dialogAlert(msg)
{
	var $dialog = $('#dialogAlert'),
		$close = $dialog.find(".js-close");

	showDialogAndOverlay('dialogAlert', 'overlay');
	$dialog.find('.demand_con')
		.text(msg);
	$dialog.css(
	{
		"z-index": 9999,
		"display": "block"
	});
	$close.one("click", function()
	{
		$dialog.hide();
		hideOverlay('overlay');
	});
}

function showDialogAndOverlay(dialogId, overlayId)
{
	adjust('#' + dialogId);
	showOverlay(overlayId);
	$("#" + dialogId)
		.show();
}

/* 隐藏覆盖层 */
function hideOverlay(overlayId)
{
	$('#' + overlayId)
		.fadeOut(200);
}

function dialogAlert(msg)
{
	var $dialog = $('#dialogAlert'),
		$close = $dialog.find(".js-close");

	showDialogAndOverlay('dialogAlert', 'overlay');
	$dialog.find('.demand_con')
		.text(msg);
	$dialog.css(
	{
		"z-index": 9999,
		"display": "block"
	});
	$close.one("click", function()
	{
		$dialog.hide();
		hideOverlay('overlay');
	});
}

function dialogConfirm(msg, callback)
{
	var $dialog = $("#dialogConfirm"),
		$ok = $dialog.find(".js-ok"),
		$close = $dialog.find(".js-close");

	showDialogAndOverlay("dialogConfirm", "overlay");
	$dialog.find(".demand_con")
		.text(msg);
	$dialog.css(
	{
		"z-index": 9999,
		"display": "block"
	});
	$ok.one("click", function()
	{
		if($.isFunction(callback) && callback())
		{
			closeConfirm();
		}
		else
		{
			closeConfirm();
		}
	});
	$close.one("click", function()
	{
		closeConfirm();
	});
}

function closeConfirm()
{
	$('#dialogConfirm')
		.hide();
	hideOverlay('overlay');
}

/* 定位到页面中心 */
function adjust(id)
{
	var h = $(id)
		.height();
	var t = scrollY() + windowHeight() / 2 - h / 2;
	if(t < 0) t = 0;

	var l = scrollX() + windowWidth() / 2;
	if(l < 0) l = 0;
	$(id)
		.css(
		{
			left: l + 'px',
			top: t + 'px'
		})
		.css('z-index', 9999);
}

//浏览器视口的高度
function windowHeight()
{
	var de = document.documentElement;
	return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
}

//浏览器视口的宽度
function windowWidth()
{
	var de = document.documentElement;
	return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
}

/* 浏览器垂直滚动位置 */
function scrollY()
{
	var de = document.documentElement;
	return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
}

/* 浏览器水平滚动位置 */
function scrollX()
{
	var de = document.documentElement;
	return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
}
/*兼容之前的弹出框结束*/

var _area = ['450px', '400px'];
//登录开始
var title_style = ["登录", "background-color:#ffffff;padding-right:20px;text-align: center;border:none;font-size: 20px;color: #000000;height: 88px;line-height: 88px;"];
//登录结束

/**
 * 登录回调函数
 *
 * @param param 登录后跳转的URL、提交的form或回调函数
 * @param closeCallback 关闭登录弹窗后的回调函数
 */
function loginCallback(param, closeCallback)
{
	$.ajax(
	{
		type: 'post',
		url: root + '/isLogged',
		dataType: 'json',
		success: function(logged)
		{
			var $loginForm, loggedCallback, $form, forwardUrl;

			$loginForm = $("#ajaxLoginForm");

			if(!!param)
			{
				if("string" === typeof param)
				{
					forwardUrl = param;
				}
				else if($.isFunction(param))
				{
					loggedCallback = param;
				}
				else if($(param)
					.is("form"))
				{
					$form = $(param);
				}
			}
			if(logged)
			{
				if(!!loggedCallback)
				{
					loggedCallback();
				}
				else if(!!$form)
				{
					$form.submit();
				}
				else if(!!forwardUrl)
				{
					window.location = forwardUrl;
				}
			}
			else
			{
				showLogin(closeCallback);
				//重新绑定登录界面
				$("#ajaxLogin")
					.on("click", function(event)
					{
						var $account, accountValue, $password, passwordValue, $error;
						event.preventDefault();
						$error = $("#ajaxError");
						$account = $loginForm.find("input[name='account']");
						accountValue = $.trim($account.val());
						if(accountValue == null || accountValue.length < 1)
						{
							//$account.focus();
							$error.html('*登录名不能为空');
							$error.css("display", "block");
							return false;
						}
						else
						{
							$error.html('');
							$error.css("display", "block");
						}

						$password = $loginForm.find("input[name='password']");
						passwordValue = $.trim($password.val());
						if(passwordValue == null || passwordValue.length < 1)
						{
							$error.html('*密码不能为空');
							$error.css("display", "block");
							return false;
						}
						else
						{
							$error.html('');
							$error.css("display", "block");
						}
						$.ajax(
						{
							type: 'post',
							url: root + '/ajaxlogin',
							data: $loginForm.serialize(),
							dataType: 'json',
							success: function(data)
							{
								if(data.status == 200)
								{
									if(!!$form)
									{
										$form.submit();
									}
									else if(!!forwardUrl)
									{
										window.location = forwardUrl;
									}
									else if($.isFunction(loggedCallback))
									{
										loggedCallback(data);
									}
									closeLogin();
								}
								else
								{
									$error.html("*" + data.message);
									$error.css("display", "block");
								}
							}
						});
						return false;
					});
			}
		}
	});
}

function showLogin(closeCallback)
{
	layer.config(
	{
		extend: ['/skin/myskin/style.css'],
		skin: 'layer-ext-myskin'
	});
	loginindex = layer.open(
	{
		type: 1,
		title: title_style,
		area: _area,
		closeBtn: 1,
		content: $('#my_login_wrap'),
		success: function()
		{
			placeholder_fn();
			$("#ajaxLogin")
				.focus();
			$(document)
				.keydown(function(event)
				{
					if(event.keyCode == 13)
					{ //绑定回车 
						$('#ajaxLogin')
							.click(); //自动/触发登录按钮 
					}
				});
		},
		cancel: function()
		{
			if(!!closeCallback)
			{
				closeCallback();
			}
			return true;
		}
	});
}

function closeLogin()
{
	layer.close(loginindex);
}

function placeholder_fn()
{
	var layer_login_btn = $("body .layer-ext-myskin .layui-layer-content .my_login_wrap .commont");
	var layer_user = $("body .layer-ext-myskin .layui-layer-content .my_login_wrap .user input");
	var layer_pass = $("body .layer-ext-myskin .layui-layer-content .my_login_wrap .pass input");
	//初始化，防止保存的密码造成重影
	function init()
	{
		for(var i = 0; i < layer_login_btn.length; i++)
		{
			if(layer_login_btn.eq(i)
				.find("input")
				.val() != "")
			{
				layer_login_btn.eq(i)
					.find("span")
					.hide();
			}
		}
	}
	init();
	//选择保存的密码时，会触发初始化
	$(window)
		.on("click", function()
		{
			if(layer_login_btn.height() > 0)
			{
				init();
				//如果删除保存的用户名，则保存的密码也随之被删除
				layer_user.on("keydown", function()
				{
					if($(this)
						.val() == "")
					{
						layer_pass.val("");
						layer_pass.parent()
							.find("span")
							.show();
					}
				});
				layer_user.on("keyup", function()
				{
					if($(this)
						.val() == "")
					{
						layer_pass.val("");
						layer_pass.parent()
							.find("span")
							.show();
					}
				});
			}
		});
	for(var i = 0; i < layer_login_btn.length; i++)
	{
		(function(i)
		{
			var _btn = layer_login_btn.eq(i)
				.find("input");
			var _span = layer_login_btn.eq(i)
				.find("span");
			layer_login_btn.eq(i)
				.on("click", function()
				{
					_span.hide();
					_btn.focus();
				});
			_btn.on("focus", function()
			{
				_span.hide();
			});
			_btn.on("blur", function()
			{
				if(_btn.val() == "")
				{
					_span.show();
				}
				else
				{
					_span.hide();
				}
			});
		})(i);
	}
}