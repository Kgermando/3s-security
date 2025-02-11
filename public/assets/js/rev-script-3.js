'use strict'

var tpj3 = jQuery;
var revapi1014;

// tpj3(document).ready(function () {
function load_rev_slider_3() {
    if (tpj3("#rev_slider_1014_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1014_1");
    } else {
        revapi1014 = tpj3("#rev_slider_1014_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                bullets: {
                    enable: false,
                    hide_onmobile: true,
                    hide_under: 960,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 80,
                    v_offset: 50,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [820, 760, 700, 600],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                disable_onmobile: "on"
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: ".site-header",
            fullScreenOffset: "0px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
        var newCall = new Object(),
            cslide;

        newCall.callback = function () {
            var proc = revapi1014.revgetparallaxproc(),
                fade = 1 + proc,
                scale = 1 + (Math.abs(proc) / 10);

            punchgs.TweenLite.set(revapi1014.find('.slotholder, .rs-background-video-layer'), {
                opacity: fade,
                scale: scale
            });
        }
        newCall.inmodule = "parallax";
        newCall.atposition = "start";

        revapi1014.bind("revolution.slide.onloaded", function (e) {
            revapi1014.revaddcallback(newCall);
        });
    }
}; 
