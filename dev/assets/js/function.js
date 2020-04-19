(function($, window, undefined){

    $(function(){

        $('.dropdown__title').on('click', function(){
            $(this).siblings('.dropdown__content').stop().slideToggle();
        })

        $('.franchiseeDetail__imgs .slider').slick({
            dots: true,
            arrows: true,
            adaptiveHeight: true,
        })
        $('.feed__slider').slick({
            dots: true,
            arrows: true,
            adaptiveHeight: true,
        })

        $('.js-scrollCustom').niceScroll({
            cursorcolor:"#414349",
            cursorwidth:"5px",
            cursorborder: 'none'
        })
        $('.js-scrollCustom--white').niceScroll({
            cursorcolor:"#fff",
            cursorwidth:"5px",
            cursorborder: 'none'
        })

        $('.js-modal-close').on('click', function(e){
            e.preventDefault();
            $(this).parents('.modal').hide();
        })

        $('.search-history__tab button').on('click', function(e) {
            e.preventDefault();
            $('.search-history__tab button').removeClass('active');
            $(this).addClass('active');
            var tabNumber = $(this).data('tab');
            $('.search-history__view').hide();
            $('.search-history__view' + tabNumber).stop().fadeIn();
        });

        $('.header').on('mouseleave', function(){
            document.getElementById('searchHistory').style.display='none'
            document.getElementById('searchKeyword').style.display='none'
        })

        $('#searchInput')
            .on('focus', function(){
                document.getElementById('searchHistory').style.display='block'
            })
            .on('keyup', function(e){
                if(e.target.value) {
                    document.getElementById('searchHistory').style.display='none'
                    document.getElementById('searchKeyword').style.display='block';
                    var key_word = e.target.value;
                    $('#searchKeyword a').map(function(index, item){
                        // 정규표현식 처리

                    })
                } else {
                    document.getElementById('searchHistory').style.display='block'
                    document.getElementById('searchKeyword').style.display='none';
                }
            })

    });
})(jQuery, window);

function showModal(el) {
    document.querySelector(el).style.display = 'flex';
}