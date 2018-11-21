$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });

    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })

}),
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousels"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b: f.slide;
            e || d.data("bs.carousels", e = new c(this, f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousels-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousels", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousels", a.proxy(this.pause, this)).on("mouseleave.bs.carousels", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    },
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    },
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    },
    c.prototype.to = function(a) {
        var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (! (a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousels",
        function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next": "prev", this.$items.eq(a))
    },
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    },
    c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    },
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left": "right",
        i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
        k = a.Event("slide.bs.carousels", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousels", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd",
            function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                },
                0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    };
    var d = a.fn.carousels;
    a.fn.carousels = b,
    a.fn.carousels.Constructor = c,
    a.fn.carousels.noConflict = function() {
        return a.fn.carousels = d,
        this
    };
    var e = function(c) {
        var d, e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousels")) {
            var g = a.extend({},
            f.data(), e.data()),
            h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousels").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousels.data-api", "[data-slide]", e).on("click.bs.carousels.data-api", "[data-slide-to]", e),
    a(window).on("load",
    function() {
        a('[data-ride="carousels"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("bs.collapse"),
            f = a.extend({},
            d.DEFAULTS, c.data(), "object" == typeof b && b); ! e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({},
        d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (! (e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    },
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    },
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    },
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        },
        this)).end()
    },
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    },
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle": e.data();
        c.call(f, h)
    })
};
$(function(){
		$("#down").click(function(){
			// 初始化完就调用上升函数,实现无限窗帘
			up();
		});
	});
	// 上升
	function up(){
		$('body,html').animate({scrollTop:$(window).height()-$(".navbar").height()}, 500)
}
 $(function() {
	 var panelHeight=$(window).height();
	 $(".bg-img").css("height",panelHeight-50);

 })
