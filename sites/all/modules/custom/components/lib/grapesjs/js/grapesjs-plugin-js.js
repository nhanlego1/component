/*! grapesjs-plugin-filestack - 0.0.2 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-plugin-js"] = t() : e["grapesjs-plugin-js"] = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t) {
        "use strict";
        grapesjs.plugins.add("gjs-plugin-js", function(e) {
        })
    }])
});