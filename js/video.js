$(function () {
    var sw, sh, winw, winh, html1;
    $(".vid-box").html("")
    $(window).resize(function () {
        winw = $(".vid-box").width();
        winh = $(window).height();
        sw = winw;
        sh = sw / 1260 * 492;
        //sh=$(window).height()
        var h = (winh - sh) / 2;
        h < 0 ? h == 0 : 0;
        $(".vid-box").css({ width: sw, height: sh, marginTop: 0 })
        $(".vi").css({ width: sw, height: sh })
    });
    $(window).resize();
    if ($(window).width() < 1024) {
        aboutvideo(sh, sw, $(".vid-box").data("mp4"), $(".vid-box").data("img"));
    }
    else {
        aboutvideo(sh, sw, $(".vid-box").data("mp4"), $(".vid-box").data("img"));
    }
})
function aboutvideo(h, w, src, img) {
    if ($("html").hasClass("lt9")) {
        $(".video_t").html("");

        videoBox(h, w, src, img);
    }
    else {
        html1 = '<video class="vi"  loop="loop"   poster="' + img + '" width="' + w + '" height="' + h + '">'
        html1 += '<source src="' + src + '" type="video/mp4" />'
        html1 += '</video>'
        $(".vid-box").html(html1)
    }
}
function videoBox(height, width, url, img) {

    var s1 = new SWFObject("../flash/flvplayer.swf", "single", width, height, "7");
    s1.addParam("allowfullscreen", "true");
    s1.addParam("wmode", "transparent");
    s1.addVariable("file", url);
    s1.addVariable("image", img);
    s1.addVariable("autostart", "false");
    s1.addVariable("width", width);
    s1.addVariable("backcolor", 0x000000);
    s1.addVariable("frontcolor", 0xFFFFFF);
    s1.addVariable("lightcolor", 0x000000);
    s1.addVariable("height", height);
    s1.write("playerswf");
    //alert($("#playerswf").html())
}
