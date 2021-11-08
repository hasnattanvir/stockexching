// ---------- home bannar slider ----------

$(document).ready(function() {
    var swiper = new Swiper(".banner_slider", {
        autoplay: false,
        loop: true,
        speed: 1000,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

});
// --------- flipstart slider --------------
$(document).ready(function() {
    var coverflow = $("#coverflow").flipster({
        loop: true,
        autoplay: 3000,
        pauseOnHover: false,
        start: 'center',
        // style: 'carousel',
    });
});


// quoter slider our happy client

$(document).ready(function() {
    var swiper = new Swiper(".quoterslide", {

        spaceBetween: 30,
        // slidesPerGroup: 1,
        autoplay: true,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 2500,
        effect: 'slide',
        direction: 'horizontal',
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });

});



// team member slider

$(document).ready(function() {
    var swiper = new Swiper('.teamslider', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: true,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 700,
        effect: 'slide',
        initialSlide: 7,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

});





// wow and animated css

// $(document).ready(function() {
//     new WOW().init();

// });



// mmenu js

$(document).ready(function() {

    var menu = new MmenuLight(
        document.querySelector('#menu'),
        'all'
    );

    var navigator = menu.navigation({
        // selectedClass: 'Selected',
        // slidingSubmenus: true,
        // theme: 'dark',
        // title: 'Menu'
    });

    var drawer = menu.offcanvas({
        // position: 'left'
    });

    //	Open the menu.
    document.querySelector('a[href="#menu"]')
        .addEventListener('click', evnt => {
            evnt.preventDefault();
            drawer.open();
        });

});




// scroll top icon

// $(document).ready(function() {

//     var scrolltotop = {
//         setting: {
//             startline: 100,
//             scrollto: 0,
//             scrollduration: 1e3,
//             fadeduration: [500, 100]
//         },
//         controlHTML: '<img src="top_arrow.png" alt="photos">',
//         controlattrs: {
//             offsetx: 5,
//             offsety: 5
//         },
//         anchorkeyword: "#top",
//         state: {
//             isvisible: !1,
//             shouldvisible: !1
//         },
//         scrollup: function() {
//             this.cssfixedsupport || this.$control.css({
//                 opacity: 0
//             });
//             var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
//             t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
//                 scrollTop: t
//             }, this.setting.scrollduration)
//         },
//         keepfixed: function() {
//             var t = jQuery(window),
//                 o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
//                 s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
//             this.$control.css({
//                 left: o + "px",
//                 top: s + "px"
//             })
//         },
//         togglecontrol: function() {
//             var t = jQuery(window).scrollTop();
//             this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
//                 opacity: 1
//             }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
//                 opacity: 0
//             }, this.setting.fadeduration[1]), this.state.isvisible = !1)
//         },
//         init: function() {
//             jQuery(document).ready(function(t) {
//                 var o = scrolltotop,
//                     s = document.all;
//                 o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({
//                     position: o.cssfixedsupport ? "fixed" : "absolute",
//                     bottom: o.controlattrs.offsety,
//                     right: o.controlattrs.offsetx,
//                     opacity: 0,
//                     cursor: "pointer"
//                 }).attr({
//                     title: "Scroll to Top"
//                 }).click(function() {
//                     return o.scrollup(), !1
//                 }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
//                     width: o.$control.width()
//                 }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function() {
//                     return o.scrollup(), !1
//                 }), t(window).bind("scroll resize", function(t) {
//                     o.togglecontrol()
//                 })
//             })
//         }
//     };
//     scrolltotop.init();

// });