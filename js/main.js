$(document).ready(function ()
{
    $("p:has(img)").contents().unwrap();

    $(".post-container").animate({
        opacity: 1
    }, 1000 );

    // Get and set height of the post header image to title container.
    imagesLoaded( '.post-header-title-container', function() {
        var headerImageHeight = $('.post-header-container img').height();
        $('.post-header-title-container').css('height', headerImageHeight);
        
        // Intro animations.
        $(".post-header-title-container").animate({
            "padding-top": "0",
            opacity: "1"
        }, {
            duration: 500,
            specialEasing: {
                "padding-top": "easeOutQuint",
                opacity: "linear"
            }
        });
    });
    

    // Initialize lazy image loading.
    $(".lazy").lazyload({
        effect : "fadeIn"
    });
    
    // When window gets resized.
    $(window).resize(function() {
        // Get the height of the image.
        headerImageHeight = $('.post-header-container img').height();
        
        // Set the same height to the post header title container.
        $('.post-header-title-container').css('height', headerImageHeight);
    });
    
    // Scroll to top.
    $('.top-button').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
    
    // About button.
    /*
    $('#navigation-button').click(function () {
        
        $(".post-container").load("/blog/about/index.html .post-container", 
            // Re-apply javascript to newly loaded elements.
            function() {
                // Lazy loading.
                $(".lazy").lazyload({ effect: "fadeIn" });
                
                // Post title container height.
                var headerImageHeight = $('.post-header-container img').height(); // Height of the post header image.
                $('.post-header-title-container').css('height', headerImageHeight);
                
                // Scroll to top.
                $('.top-button').click(function () {
                    $('html, body').animate({scrollTop: 0}, 500);
                    return false;
                });
            }
        );  
        //history.replaceState({}, 'About', '/about5');
    });
    */
});