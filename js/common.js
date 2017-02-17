$(window).load(function () {
            $(".mobile-header-icon").click(function () {
                $(this).toggleClass("mobile-header-icon-click mobile-header-icon-out");
                $(".mobile-nav").slideToggle(250);
            });
            $(".mobile-nav a").each(function (index) {
                $(this).css({'animation-delay': (index / 10) + 's'});
            });
			$(".mobile-nav a").click(function () {
				$(".mobile-header-icon").toggleClass("mobile-header-icon-click mobile-header-icon-out");
                $(".mobile-nav").slideToggle(250);
            });
			
        });

$(function(){

	//手机导航
    $(document).on("click", ".nfl a", function () {
        $("body").toggleClass("menu-open");
    });
	
    
    //导航鼠标经过效果
	
	
	//
	
	
	
    //--------------模拟下拉
	$(document).on("click", ".select-box dt", function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    $(".select-box").removeClass("open");

	    $(this).parents(".select-box").toggleClass("open");
	})
	
	$(document).on("click", ".select-box dd a", function (e) {
	    $(this).addClass("on").siblings().removeClass("on");
	    $(this).parents(".select-box").find("dt b").text($(this).text());
	    $(this).parents(".select-box").find("input").val($(this).attr("data-val"));

	    $(".select-box").removeClass("open");
	})
	
	$(document).click(function () {
	    $(".select-box").removeClass("open");

	})
    //end
	
	

    //鼠标经过

    //

	
	

	
});




//公共选项卡切换
$(function(){

    $(document).on("mouseenter", ".tab-box .tab-a", function () {
        $(this).addClass("on").siblings().removeClass("on");
        var ii = $(this).index();		
        $(this).parents(".tab-box").find(".tab-b").eq(ii).show().siblings().hide();
		imgratio()
    })
    //
    $(".tab-box").each(function (i) {
        $(this).find(".tab-a:eq(0)").mouseenter();
    });	
})
//

//无图图像
var nullimg='../images/error.jpg';
function lod(t){
	t.onerror = null;
	t.src=nullimg
}
$(document).ready(function(){
	$("img").each(function(){
	if($(this).attr("src")=="")
	{
		$(this).attr({"src":nullimg})
	}
	})
})
//


//内容区 字体字号 s
$(document).ready(function () {
    //
    $('.basic-list span.s4 i.i1').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.art-text-box.edit_con_original').css('font-size', '1em');
    })
    $('.basic-list span.s4 i.i2').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.art-text-box.edit_con_original').css('font-size', '1.2em');
    })
	 $('.basic-list span.s4 i.i3').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.art-text-box.edit_con_original').css('font-size', '1.4em');
    })
    //
})


// 弹出新窗口打印
/*打印标记*/
function doPrint() {
    bdhtml = window.document.body.innerHTML;
    sprnstr = "<!--startprint-->";
    eprnstr = "<!--endprint-->";
    prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    OpenWindow = window.open("");
    OpenWindow.document.write("<!DOCTYPE HTML><HTML><HEAD><meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/><TITLE>打印页<\/TITLE><link href=\"../css\/print.css\" rel=\"stylesheet\" type=\"text\/css\" \/><link rel='stylesheet' href='../build/mediaelementplayer.min.css' /><link rel='stylesheet' href='../build/mejs-skins.css' /><\/HEAD><BODY><div id=\"printbox\" class=\"news_cont\" ><\/div><\/BODY><\/HTML>");
    OpenWindow.document.getElementById("printbox").innerHTML = prnhtml;
    OpenWindow.document.close();
    OpenWindow.print();
}
/*打印区的内容一定要加<!--startprint-->和<!--endprint-->标记*/
//<a href="javascript:;" onClick="doPrint()">打印</a>


/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 */
 (function ($) {
    $.fn.extend({
        "placeholder": function (options) {
            options = $.extend({
                placeholderColor: '#ACA899',
                isUseSpan: false, //是否使用插入span标签模拟placeholder的方式,默认false,默认使用value模拟
                onInput: true  //使用标签模拟(isUseSpan为true)时，是否绑定onInput事件取代focus/blur事件
            }, options);
			
            $(this).each(function () {
				
                var _this = this;
                var supportPlaceholder = 'placeholder' in document.createElement('input');
                if (!supportPlaceholder) {
                    var defaultValue = $(_this).attr('placeholder');
                    var defaultColor = $(_this).css('color');
                    if (options.isUseSpan == false) {
                        $(_this).focus(function () {
                            var pattern = new RegExp("^" + defaultValue + "$|^$");
                            pattern.test($(_this).val()) && $(_this).val('').css('color', defaultColor);
                        }).blur(function () {
                            if ($(_this).val() == defaultValue) {
                                $(_this).css('color', defaultColor);
                            } else if ($(_this).val().length == 0) {
                                $(_this).val(defaultValue).css('color', options.placeholderColor)
                            }
                        }).trigger('blur');
                    } else {
                        var $imitate = $('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden; color:' + options.placeholderColor + '; width:' + $(_this).outerWidth() + 'px; height:' + $(_this).outerHeight() + 'px;">' + defaultValue + '</span>');
                        $imitate.css({
                            'margin-left': $(_this).css('margin-left'),
                            'margin-top': $(_this).css('margin-top'),
                            'font-size': $(_this).css('font-size'),
                            'font-family': $(_this).css('font-family'),
                            'font-weight': $(_this).css('font-weight'),
                            'padding-left': parseInt($(_this).css('padding-left')) + 2 + 'px',
                            'line-height': _this.nodeName.toLowerCase() == 'textarea' ? $(_this).css('line-weight') : $(_this).outerHeight() + 'px',
                            'padding-top': _this.nodeName.toLowerCase() == 'textarea' ? parseInt($(_this).css('padding-top')) + 2 : 0
                        });
                        $(_this).before($imitate.click(function () {
                            $(_this).trigger('focus');
                        }));

                        $(_this).val().length != 0 && $imitate.hide();

                        if (options.onInput) {
                            //绑定oninput/onpropertychange事件
                            var inputChangeEvent = typeof (_this.oninput) == 'object' ? 'input' : 'propertychange';
                            $(_this).bind(inputChangeEvent, function () {
                                $imitate[0].style.display = $(_this).val().length != 0 ? 'none' : 'inline-block';
                            });
                        } else {
                            $(_this).focus(function () {
                                $imitate.hide();
                            }).blur(function () {
                                /^$/.test($(_this).val()) && $imitate.show();
                            });
                        }
                    }
                }
            });
            return this;
        }
    });

 })(jQuery);
 
$(function(){
	$('input').placeholder();
    $('textarea').placeholder();	 
})




$(function () {

    //分享





    $(".f-shear a.a2").click(function () {//微信
        var url = $(this).attr("data-img")
        //alert(url)
        var title = ""
        title += "<div class='weixin'>"
        title += "<i class='c'>x</i>"
        title += "<h2>二维码</h2>"
        title += "<div class='img'><img src='" + url + "' width='100px;' height='100px;'></div>"
        title += "<p>扫一扫</p>"
        title += "</div>"
        $("body").remove(".weixin");
        $("body").append(title)
        //var op="http://service.weibo.com/share/share.php?url='"+ url +"'&title='"+ title +"'&searchPic=false"
        //window.open(op)
    })
    $(document).on("click", ".weixin .c", function () {
        $(".weixin").remove();
    })
    //

    $(".f-shear a.a1").click(function () {//电话
        var url = $(this).attr("data-phone")
        //alert(url)
        var title = ""
        title += "<div class='weixin-phone'>"
        title += "<i class='c'>x</i>"
        title += "<h2>电话</h2>"
        var xxl = $(window).width() <= 1024 ? "<a href='tlp:" + url + "'>" + url + "</a>" : url;
        title += "<div class='img'>" + xxl + "</div>"
        title += "</div>"
        $("body").remove(".weixin");
        $("body").append(title)
        //var op="http://service.weibo.com/share/share.php?url='"+ url +"'&title='"+ title +"'&searchPic=false"
        //window.open(op)
    })
    $(document).on("click", ".weixin-phone .c", function () {
        $(".weixin-phone").remove();
    })
    //
})



function scrollFunc(e){
    $(".mouse").fadeOut();
}
window.onmousewheel=scrollFunc;
window.onclick=scrollFunc;