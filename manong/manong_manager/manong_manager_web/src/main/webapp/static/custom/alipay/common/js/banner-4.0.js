;
(function($) {
	$.fn.lubo = function(options) {
		return this.each(function() {
			var _lubo = jQuery('#bannerWrap');
			var _box = jQuery('#bannerInner');
			var _this = jQuery(this); // 
			var luboHei = _box.height();
			var Over = 'mouseover';
			var Out = 'mouseout';
			var Click = 'click';
			var Li = "li";
			var _cirBox = '#bannerIdx';
			var cirOn = 'idxActive';
			var _cirOn = '.idxActive';
			var cirlen = _box.children(Li).length; //圆点的数量  图片的数量
			var luboTime = 2000; //轮播时间
			var switchTime = 400; //图片切换时间
			
			
			
			if(cirlen<=1)
			{//只是一张图片的时候不轮播
				return false;
			}
			cir();
			//根据图片的数量来生成圆点

			function cir() {

				_lubo.append('<ul id="bannerIdx"></ul>');

				var cir_box = jQuery('#bannerIdx');

				for (var i = 0; i < cirlen; i++) {

					cir_box.append('<li style="" value="' + i + '"></li>');
				}

				var cir_dss = cir_box.width();

				cir_box.css({

					left: '50%',

					marginLeft: -cir_dss / 2,

					bottom: '2%'

				});

				cir_box.children(Li).eq(0).addClass(cirOn);

			}
			


			//定时器

			int = setInterval(clock, luboTime);

			function clock() {

				var cir_box = jQuery(_cirBox);

				var onLen = jQuery(_cirOn).val();

				_box.children(Li).eq(onLen).stop(false, false).animate({

					opacity: 0

				}, switchTime,function(){
					_box.children(Li).css("z-index",100);
				});

				if (onLen == cirlen - 1) {

					onLen = -1;

				}

				_box.children(Li).eq(onLen + 1).stop(false, false).animate({

					opacity: 1

				}, switchTime,function(){
					_box.children(Li).eq(onLen + 1).css("z-index",110);
				});

				cir_box.children(Li).eq(onLen + 1).addClass(cirOn).siblings().removeClass(cirOn);

			}

			// 鼠标在图片上 关闭定时器

			_lubo.bind(Over, function() {

				clearTimeout(int);

			});

			_lubo.bind(Out, function() {

				int = setInterval(clock, luboTime);

			});

			//鼠标划过圆点 切换图片

			jQuery(_cirBox).children(Li).bind(Over, function() {

				var inde = jQuery(this).index();

				jQuery(this).addClass(cirOn).siblings().removeClass(cirOn);

				_box.children(Li).stop(false, false).animate({

					opacity: 0

				}, switchTime,function(){
					_box.children(Li).css("z-index",100);
				});

				_box.children(Li).eq(inde).stop(false, false).animate({

					opacity: 1

				}, switchTime,function(){
					_box.children(Li).eq(inde).css("z-index",110);
				});

			});


		});

	}

})(jQuery);
