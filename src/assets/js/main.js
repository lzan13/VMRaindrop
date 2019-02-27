$(function () {
    // 加载博客后端配置的属性
    //是否开启随机封面图，默认为true
    VBlog.enableRandomCover = typeof enableRandomCover !== 'undefined' ? enableRandomCover : true;
    //是否开启滚动加载更多，默认为true
    VBlog.enableInfiniteScroll = typeof enableInfiniteScroll !== 'undefined' ? enableInfiniteScroll : true;

    // 随机显示博客封面
    if (VBlog.enableRandomCover) {
        randomSiteCover();
    }
    // 是否开启无限滚动加载更多
    if (VBlog.enableInfiniteScroll) {
        infiniteScroll();
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
        $('#header-big').removeClass('invisible');
    }
});


/**
 * 随机生成博客封面
 */
function randomSiteCover() {
    var randomNum = Math.floor(Math.random() * 9 + 1);
    // 设置头图随机封面
    setRandomBackgound(document.getElementById("header-big"));

    // 设置文章随机封面
    var items = $(".cover-image");
    for (var i = 0; i < items.length; i++) {
        setRandomBackgound(items[i]);
    }
}

/**
 * 使用 infinite-scroll 自动加载更多
 */
function infiniteScroll() {
    $('.posts-container').infiniteScroll({
        path: '.pagination-next a',
        hideNav: '.pagination-nav',
        status: '.pagination-status',
        append: '.post-card',
        history: false,
    });
    $('.posts-container').on('append.infiniteScroll', function (event, response, path, items) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i].getElementsByClassName("cover-image")[0];
            setRandomBackgound(item);
        }
    });
}

/**
 * 设置元素随机封面图，这里先获取下要显示封面图部分的背景图是否已经有设置，如果已经设置，则不再设置随机背景图
 * @param {父类节点} item 
 */
function setRandomBackgound(item) {
    var cover = item.style.backgroundImage;
    if (cover === '' || cover === 'none' || cover === 'undefined') {
        var randomNum = Math.floor(Math.random() * 9 + 1);
        item.style.backgroundImage = "url(" + VBlog.url + "/assets/images/covers/cover-bg-" + randomNum + ".jpg)";
    }
}