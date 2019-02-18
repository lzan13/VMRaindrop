$(function () {
    //随机显示博客封面
    if (Maple.enableRandomCover) {
        randomSiteCover();
    }

    //点击向下的箭头滚动到文章区域
    $('.indicator').click(function () {
        var scrollTop = $('.site-content').offset().top;
        $('html,body').animate({scrollTop: scrollTop}, 500);
    });

    //默认滚动到文章列表
    if ($('body').hasClass('paged')) {
        var scrollTop = $('.site-content').offset().top;
        $('html,body').animate({scrollTop: scrollTop}, 0);
        $('.header-big').removeClass('invisible');
    }
});


/**
 * 随机生成博客封面
 */
function randomSiteCover() {
    var randomNum = Math.floor(Math.random() * 9 + 1);
    $('.header-big').css('background-image', "url(" + Maple.blogUrl + "/assets/images/covers/cover_bg_" + randomNum + ".jpg)");
}