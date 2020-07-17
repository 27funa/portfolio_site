$(function(){
    // $('.hero-container').each(function(){
    //     var $slides = $(this).find('img'),
    //         slideCount = $slides.length,
    //         currentIndex = 0;

    //     $slides.eq(currentIndex).fadeIn();

    //     setInterval(showNextSlide, 7000);

    //     function showNextSlide(){
    //         var nextIndex = (currentIndex + 1) % slideCount;

    //         $slides.eq(currentIndex).fadeOut(1000);

    //         $slides.eq(nextIndex).fadeIn(1000);

    //         currentIndex = nextIndex;
    //     }
    // });

    /* Sticky header */
    $('.page-header').each(function () {

        var $window = $(window), // Window オブジェクト
            $header = $(this),   // ヘッダー

            // ヘッダーのクローン
            $headerClone = $header.contents().clone(),

            // ヘッダーのクローンのコンテナー
            $headerCloneContainer = $('<div class="page-header-clone"></div>'),

            // HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
            threshold = $header.offset().top + $header.outerHeight();

        // コンテナーにヘッダーのクローンを挿入
        $headerCloneContainer.append($headerClone);

        // コンテナーを body の最後に挿入
        $headerCloneContainer.appendTo('body');

        // スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
        $window.on('scroll', $.throttle(1000 / 15, function () {
            if ($window.scrollTop() > threshold) {
                $headerCloneContainer.addClass('visible');
            } else {
                $headerCloneContainer.removeClass('visible');
            }
        }));

        // スクロールイベントを発生させ、初期位置を決定
        $window.trigger('scroll');
    });

    /* Tabs */
    $('.work-section').each(function () {

        var $container = $(this),                            // a
            $navItems = $container.find('.tabs-nav li'),     // b
            $highlight = $container.find('.tabs-highlight'); // c
        // タブの各要素を jQuery オブジェクト化
        // a タブとパネルを含む全体のコンテナー
        // b タブのリスト
        // c 選択中タブのハイライト

        // jQuery UI Tabs を実行
        $container.tabs({

            // 非表示にする際のアニメーション
            hide: { duration: 250 },

            // 表示する際のアニメーション
            show: { duration: 125 },

            // 読み込み時とタブ選択時にハイライトの位置を調整
            create: moveHighlight,
            activate: moveHighlight
        });

        // ハイライトの位置を調整する関数
        function moveHighlight (event, ui) {
            var $newTab = ui.newTab || ui.tab,  // 新しく選択されたタブの jQuery オブジェクト
                left = $newTab.position().left; // 新しく選択されたタブの左位置

            // ハイライトの位置をアニメーション
            $highlight.animate({ left: left }, 500, 'easeOutExpo');
        }
    });

    /* Back-toTop button (Smooth scroll) */
    $('.back-to-top').on('click', function () {

        // Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', // イージングの種類
            speed: 500             // 所要時間
        });
    });
});