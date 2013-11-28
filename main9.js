/**
 * Created by оо on 28.11.13.
 */
;jQuery(function($){
    var offset = $("#last").offset(),
        win = $(window),
        body = $("body");


    win.scroll(function(){
    var distanceTop = offset - win.height();
        if(win.scrollTop > distanceTop){
            body.addClass("with-banner");
        }

        else{
            body.removeClass("with-banner");
        }
        $("#slide-box .close").click(function(){
            $(this).closest(" .banner").remove();
        });
})





})(jQuery)