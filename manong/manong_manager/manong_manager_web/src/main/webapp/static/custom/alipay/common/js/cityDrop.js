$(function () {

    $.fn.hhDrop = function (options) {
        var options = jQuery.extend({}, options || {});

        var defaults = {province: Cookies.get("PROVINCE")};

        return this.each(function () {
            //默认
            var options = $.extend(defaults, options);
            var $this = $(this);
            $this.find('span.key_word b').text(options.province);
            var $boxSearch = $this.find('.boxSearch');
            $boxSearch.bind('click', function (event) {
				event.preventDefault();
                var _this = $(this);
                //点击本身显示隐藏
                if (_this.hasClass('boxSearchHover')) {
                    _this.removeClass('boxSearchHover');
                    _this.parent().find('.search_form_suggest').hide();
                } else {
                    _this.parent().find('.search_form_suggest').show();
                }

                _this.next().find('.clr_after a').each(function(){
					$(this).bind('click',function (e) {
						e.preventDefault();
						_this.find('span.key_word b').text($(this).text());
						Cookies.remove('PROVINCE');
						Cookies.set('PROVINCE', $(this).text(), {path:'/', expires:60 * 60 * 24 * 7});
						window.location.reload();
					});
				});
                $(document).bind('click', function (event) {
                    if (!$(event.target).parent().hasClass('boxSearch') && !$(event.target).hasClass('boxSearch') && !$(event.target).parent().parent().hasClass('boxSearch')) {
                        _this.parent().find('.search_form_suggest').hide();
                    }
                });

            });

        });

    }

});
