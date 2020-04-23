/*
 * onepagescroll.js v1.0.0
 * Athuor : Mystika
 * Fork this script on github https://github.com/mystika/onepagescroll
 * http://mystika.me
 */
window.togg = true;

function onepagescroll(selector, options) {
    window.pages = [];
    window.currentPage = 1;
    var isPageChanging = false;
    var keyUp = {
        38: 1,
        33: 1
    };
    var keyDown = {
        40: 1,
        34: 1
    };

    var def = {
        pageContainer: 'section',
        animationType: 'ease-in-out',
        animationTime: 500,
        infinite: true,
        pagination: true,
        keyboard: true,
        direction: 'vertical',
    };

    window.setting = extend({}, def, options);

    /* initialization */

    function init() {

        window.addEventListener('wheel', onScrollEventHandler);

        css(document.querySelector(selector), {
            transition: 'transform ' + setting.animationTime + 'ms ' + setting.animationType
        });

        //allow keyboard input
        if (setting.keyboard) {
            addEventListener('keydown', function (e) {
                if (keyUp[e.keyCode] && togg == true)
                    changePage(1, pages.length, -1);
                else if (keyDown[e.keyCode] && togg == true)
                    changePage(pages.length, 1, 1);
            });
        }

        document.querySelector(selector).classList.add('ops-container');

        detectTransitionEnd() && document.querySelector(selector).addEventListener(detectTransitionEnd(), function () {
            isPageChanging = false;
        });

        var bullet_list_container = null;
        /* create navigation bullets */
        if (setting.pagination) {
            bullet_list_container = document.createElement("ul");
            bullet_list_container.classList.add('ops-navigation');
        }

        window.index = 1;

        //var sel = +":not(.asd)";

        //selector + ' > ' + setting.pageContainer

		[].forEach.call(document.querySelectorAll(selector + ' > ' + setting.pageContainer), function (obj) {
            if (setting.pagination) {
                var bullet_list = document.createElement('li');
                var bullet = document.createElement('a');
                bullet.setAttribute('data-targetindex', index);
                bullet.href = "#" + index;
                bullet.setAttribute('onclick', "navi(" + index + ")")
                bullet_list.appendChild(bullet);
                bullet_list_container.appendChild(bullet_list);
            }

            obj.classList.add('ops-page');

            if (setting.direction == 'horizontal') {
                css(obj, {
                    left: (index - 1) * 100 + '%',
                    position: 'absolute'
                });
            }

            pages.push(obj);
            obj.setAttribute('data-pageindex', index++);
        });

        if (setting.pagination) {
            var place = document.getElementById("nav");
            place.appendChild(bullet_list_container);
            document.querySelector('a[data-targetindex="' + currentPage + '"]').classList.add('active');
        }


    }

    /* wheel event handler */
    window.onScrollEventHandler = function (e) {


        if (e.wheelDelta > 30 && togg == true) {
            changePage(1, pages.length, -1);

        } else if (e.wheelDelta < -30 && togg == true) {
            changePage(pages.length, 1, 1);
        }
    }


    /* dected transitions completion for block duplicated scrolling */
    function detectTransitionEnd() {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions)
            if (el.style[t] !== undefined)
                return transitions[t];
        return true;
    }


    /* css setter */
    function css(obj, styles) {
        for (var _style in styles)
            if (obj.style[_style] !== undefined)
                obj.style[_style] = styles[_style];

    }

    /* extend function for user customization */
    function extend() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    //function for page transition
    window.changePage = function (compare, edge, increase) {
        if (isPageChanging) return;

        if (currentPage == compare) {
            if (setting.infinite)
                currentPage = edge;
            else
                return;
        } else {
            currentPage += increase;
        }

        if (setting.animationTime) isPageChanging = true;

        if (setting.pagination) {
            document.querySelector('a.active[data-targetindex]').classList.remove('active');
            document.querySelector('a[data-targetindex="' + currentPage + '"]').classList.add('active');
        }
        if (setting.direction == 'vertical') {
            css(document.querySelector(selector), {
                transform: 'translate3d(0,' + -(currentPage - 1) * 100 + '%,0)'
            });
        } else if (setting.direction == 'horizontal') {
            css(document.querySelector(selector), {
                transform: 'translate3d(' + -(currentPage - 1) * 100 + '%,0,0)'
            });
        }


        //update to dbox content

        if (currentPage == 1) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Winter 2019");
                $("#medium").text("Photography, Book Design, Research Creation");
            }).fadeIn(250);
        }

        if (currentPage == 2) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Fall 2018");
                $("#medium").text("Photography, Digital Collage, Bookmaking");
            }).fadeIn(250);
        }
        
        if (currentPage == 3) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Fall 2019");
                $("#medium").text("Creative Direction, Photography, Digital Collage");
            }).fadeIn(250);
        }
        
         if (currentPage == 4) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Fall 2017");
                $("#medium").text("Typography, Advertising");
            }).fadeIn(250);
        }
        
        if (currentPage == 5) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Winter 2018");
                $("#medium").text("Creative Direction, Photography, Layout Design");
            }).fadeIn(250);
        }
        
        if (currentPage == 6) {
            $("#dbox").fadeOut(250, function () {
                $("#date").text("Ongoing");
                $("#medium").text("Analogue & Digital Illustration, Concept Generation");
            }).fadeIn(250);
        }
    };

    /* swipe */
    var fpos = 0;
    var lpos = 0;
    var _n = 90;

    //bind touch
    document.addEventListener('touchstart', function (e) {
        //e.preventDefault();
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
            var touch = e.touches[0] || e.changedTouches[0];
            if (setting.direction == 'vertical')
                fpos = touch.pageY;
            else if (setting.direction == 'horizontal')
                fpos = touch.pageX;
        }
    });

    document.addEventListener('touchend', function (e) {
        //e.preventDefault();
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
            var touch = e.touches[0] || e.changedTouches[0];
            if (setting.direction == 'vertical')
                lpos = touch.pageY;
            else if (setting.direction == 'horizontal')
                lpos = touch.pageX;
        }
        if (fpos + _n < lpos && togg == true)
            changePage(1, pages.length, -1);
        else if (fpos > lpos + _n && togg == true)
            changePage(pages.length, 1, 1);
    });


    /* check documents ready statement and do init() */
    if (document.readyState === 'complete')
        init();
    else
        window.addEventListener('onload', init(), false);

}
