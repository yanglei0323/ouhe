function understands_video() {//检测是否支持video标签
  return !!document.createElement('video').canPlayType; // boolean
}
$(function () {



	$('.body-box').fullpage({
                navigation: true,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
				navigationTooltips: ['关于欧禾', '发展历程', '欧禾文化', '欧禾速递', '全球G&S', '战略伙伴', '联系方式'],
                afterLoad: function (anchorLink, index) {
                   
                },
                onLeave: function (index, direction) {
                    if (direction == 5)
                    {
                        if (understands_video()) {//支持video执行
                            
                            var myVid3 = $("#vid_2")[0];
                            myVid3.play();
                            /*
                            if (myVid3.currentTime || myVid3.currentTime==0)
                            { 
                                myVid3.currentTime = 0;
                                myVid3.play();
                            }
                            */
                        }
                    }
                }
            });
	
	Sresize()//初始化resize

    setTimeout(function () {
        Sresize();
    }, 300)


	
	
    $(".top-banner ul").bxSlider({
			auto: true,
			infiniteLoop: true,
			mode: 'horizontal',
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});

    
})

function mainBgResize($img, w_r, h_r, W, H) {
    var sw = w_r,
        sh = w_r / W * H

    if (sh < h_r) {
        // alert(h_r)
        sh = h_r;
        sw = h_r / H * W
    }

    $img.css({ height: sh, width: sw, marginTop: -(sh - h_r) / 2, marginLeft: -(sw - w_r) / 2, 'visibility': 'visible' });

}

function Sresize() {//初始化 resize
	$(".top-banner ul li").height($(window).height());
	
	$(".sh-team li:nth-child(6n),.sh-team li:nth-child(6n-1)").addClass("odd");
	
	var $h=$(window).height(),$w=$(window).width();
	if($h<=780)
	{
		$("body").removeClass("h700").removeClass("h650").removeClass("h600").removeClass("h550");
		$("body").addClass("h750");
	}
	if($h<=720)
	{
		$("body").removeClass("h650").removeClass("h600").removeClass("h550");
		$("body").addClass("h700");
	}
	if($h<=670)
	{
		$("body").removeClass("h600").removeClass("h550");
		$("body").addClass("h650");
	}
	if($h<=620)
	{
		$("body").removeClass("h550");
		$("body").addClass("h600");
	}
	if($h<=570)
	{
		
		$("body").addClass("h550");
	}
	if($h>=780)
	{
		$("body").removeClass("h750").removeClass("h700").removeClass("h650").removeClass("h600").removeClass("h550");
	}
	if($w<=767)
	{
		$("body").removeClass("h750").removeClass("h700").removeClass("h650").removeClass("h600").removeClass("h550");
	}
	
	$(".video-auto-box").each(function () {
	    mainBgResize($(this).find(".auto-box-div"), $(this).width(), $(this).height() + 10, 1030, 400);
	});

}

$(function () {


    //窗口改变大小回调ratio；
    var rtime = new Date();
    var timeout = false;
    var delta = 200;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta); //resize只回调最后一次
        }
    });
    function resizeend() {  //window.resize回调
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            Sresize()//ratio
            setTimeout(function () {
                Sresize();
            }, 300)
        }
    }
    //
})