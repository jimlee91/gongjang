(function($, window, undefined){

    $(function(){

    });

    $('.js-modal-close').on('click', function(e){
        e.preventDefault();
        $(this).parents('.modal').hide();
    })



})(jQuery, window);

function showModal(el) {
    document.querySelector(el).style.display = 'flex';
}