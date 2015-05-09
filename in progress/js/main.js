$(document).ready(function ()
{
    var headerImageHeight = $('.post-header-container img').height(); // Height of the post header image.
    
    $('.post-header-title-container').css('height', headerImageHeight);
    
    $(window).resize(function() {
        // Get the height of the image.
        headerImageHeight = $('.post-header-container img').height();
        
        // Set the same height to the post header title container.
        $('.post-header-title-container').css('height', headerImageHeight);
    });
});