$(function () {
    // 加载博客后端配置的属性
    VBlog.enableRandomCover = typeof enableRandomCover !== 'undefined' ? enableRandomCover : true;

    // 随机显示博客封面
    if (VBlog.enableRandomCover) {
        randomSiteCover();
    }

    // 点击向下的箭头滚动到文章区域
    $('.indicator').click(function () {
        var scrollTop = $('.site-content').offset().top;
        $('html,body').animate({ scrollTop: scrollTop }, 500);
    });

    // 默认滚动到文章列表
    if ($('body').hasClass('paged')) {
        var scrollTop = $('.site-content').offset().top;
        $('html,body').animate({ scrollTop: scrollTop }, 0);
        $('.header-big').removeClass('invisible');
    }
});


/**
 * 随机生成博客封面
 */
function randomSiteCover() {
    var randomNum = Math.floor(Math.random() * 9 + 1);
    /**
     * 这里先获取下要显示封面图部分的背景图是否已经有设置，如果已经设置，则不再设置随机背景图
     */ 
    var cover = $(".header-big").css("backgroundImage");
    if(cover === 'none'){
        $('.header-big').css('background-image', "url(" + VBlog.url + "/assets/images/covers/cover-bg-" + randomNum + ".jpg)");
    }
}