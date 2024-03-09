var pdSVG = pdSVG || {};

!function () {
    pdSVG.ignoreSelection = !1, pdSVG.DRAG_NONE = 0, pdSVG.DRAG_RANGE = 1, pdSVG.DRAG_PAN = 2, pdSVG.DRAG_TIME = 3, pdSVG.SELECT_NONE = -1, pdSVG.SELECT_AUTO = 0, pdSVG.SELECT_ADD = 1, pdSVG.SELECT_DEL = 2, pdSVG.SELECT_INV = 3, pdSVG.DATA_FORMAT_UNKNOWN = 0, pdSVG.DATA_FORMAT_DAY_HOUR = 1, pdSVG.DATA_FORMAT_HOURLY = 2, pdSVG.DATA_FORMAT_DAILY = 3, pdSVG.DATA_FORMAT_MONTHLY = 4;
    pdSVG.namespace = "http://www.w3.org/2000/svg";
    var t = {
        alignmentBaseline: "alignment-baseline",
        baselineShift: "baseline-shift",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorRendering: "color-rendering",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        vertAdvY: "vert-adv-y",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode"
    };
    pdSVG.fromCamelCase = function (e) {
        return t[e] || e;
    };
    var e = {
        hex: "#EEEEEE", color: [.93333333, .93333333, .93333333, 1]
    }, i = [{
        hex: "#B2DF8A", color: [.69803921, .8745098, .54117647, 1]
    }, {
        hex: "#33A02C", color: [.2, .62745098, .17254902, 1]
    }, {
        hex: "#A6CEE3", color: [.65098039, .80784313, .89019608, 1]
    }, {
        hex: "#1F78B4", color: [.12156862, .47058824, .70588235, 1]
    }, {
        hex: "#FB9A99", color: [.98431372, .60392157, .6, 1]
    }, {
        hex: "#E31A1C", color: [.89019607, .10196078, .10980392, 1]
    }, {
        hex: "#FDBF6F", color: [.99215686, .74901961, .43529412, 1]
    }, {
        hex: "#FF7F00", color: [1, .49803922, 0, 1]
    }, {
        hex: "#CAB2D6", color: [.79215686, .69803922, .83921569, 1]
    }, {
        hex: "#6A3D9A", color: [.41568627, .23921569, .60392157, 1]
    }, {
        hex: "#FFFF44", color: [1, 1, .26666667, 1]
    }, {
        hex: "#B15928", color: [.69411765, .34901961, .15686275, 1]
    }];

    function r(t) {
        return pd.toStringWithPrecisionRange(t, 0, 3);
    }

    pdSVG.getStandardColor = function (t) {
        return (t = pd.toNumber(t, -1)) >= 0 && t < i.length ? i[t] : e;
    }, pdSVG.addStandardColor = function (t) {
        var e = 0;
        return pd.isObject(t) && pd.isString(t.hex) && pd.isArray(t.color) ? e = i.push(t) : pd.isArray(t) && t.length > 2 ? e = i.push({
            hex: pd.toHexColorString(t), color: [+t[0] || 0, +t[1] || 0, +t[2] || 0, +t[3] || 1]
        }) : pd.isString(t) && (e = i.push({
            hex: t, color: pd.parseHexColorString(t)
        })), e - 1;
    }, pdSVG.setStandardColorPalette = function (t) {
        if (pd.isArray(t) && t.length > 1) {
            i.length = 0;
            for (var e = 0, r = t.length; e < r; ++e) pdSVG.addStandardColor(t[e]);
        }
        return pdSVG;
    }, pdSVG.getStandardColorPalette = function () {
        return i;
    }, pdSVG.getDefaultColor = function () {
        return e;
    }, pdSVG.getUnitsPrefixScaleFactor = function (t) {
        switch (t) {
            case 7:
                return 1e-15;

            case 6:
                return 1e-12;

            case 5:
                return 1e-9;

            case 4:
                return 1e-6;

            case 3:
                return .001;

            case 2:
                return .01;

            case 1:
                return .1;

            case 0:
                return 1;

            case -1:
                return 10;

            case -2:
                return 100;

            case -3:
                return 1e3;

            case -4:
                return 1e6;

            case -5:
                return 1e9;

            case -6:
                return 1e12;

            case -7:
                return 1e15;
        }
        return 1;
    }, pdSVG.getUnitsPrefix = function (t) {
        switch (t) {
            case 7:
                return "P";

            case 6:
                return "T";

            case 5:
                return "G";

            case 4:
                return "M";

            case 3:
                return "k";

            case 2:
                return "h";

            case 1:
                return "da";

            case 0:
                return "";

            case -1:
                return "d";

            case -2:
                return "c";

            case -3:
                return "m";

            case -4:
                return "μ";

            case -5:
                return "n";

            case -6:
                return "p";

            case -7:
                return "f";
        }
        return "";
    }, pdSVG.getColorScaleCallback = function (t) {
        switch (t) {
            case 0:
                return pd.colorScaleRed;

            default:
            case 1:
                return pd.colorScaleGreen;

            case 2:
                return pd.colorScaleBlue;

            case 3:
                return pd.colorScaleRedWhiteBlue;

            case 4:
                return pd.colorScaleRainbow;

            case 5:
                return pd.colorScaleEcotect;

            case 6:
                return pd.colorScaleSepia;
        }
    }, pdSVG.Axis = function (t) {
        t = t || {}, this.title = t.title ? t.title.toString() : "", this.units = t.units ? t.units.toString() : "", this.max = pd.toNumber(t.max, 100), this.min = pd.toNumber(t.min, 0), this.tickMajor = pd.toNumber(t.tickMajor, 25), this.tickMinor = pd.toNumber(t.tickMinor, 5), this.scaleFunction = pd.isFunction(t.scaleFunction) ? t.scaleFunction : null, this.scale = pd.toNumber(t.scale, 1), this.prefix = pd.toInteger(t.prefix, 0), this.format = t.format || null, this.offset = pd.toNumber(t.offset, 0), this.labelRotate = pd.toNumber(t.labelRotate, 0), this.gridLines = t.gridLines || null, this.hilite = !1, this.useUnitsAsTitle = !1, this.extra = {};
    }, pdSVG.Axis.prototype.renderVertical = function (t, e, i, a, n) {
        var o, s = pd.toNumber(i, 0), l = n ? -2 : -4, d = n ? -4 : -7, p = this.max + .5 * this.tickMinor,
            u = this.min - .5 * this.tickMinor, c = pdSVG.getUnitsPrefixScaleFactor(this.prefix),
            h = this.hilite ? " hilite" : "", m = "text-grid" + h, f = "line-axis" + h, x = "line-grid" + h,
            y = !pd.closeTo(this.labelRotate, 0, .5), g = n ? -6 : -9, b = y ? "middle" : "end",
            v = y ? "-0.2em" : "0.4em", M = this.format || r, T = this.scaleFunction, A = [], C = !1,
            D = null != this.gridLines;
        D && ((C = pd.isFunction(this.gridLines)) || pd.isArray(this.gridLines) && !(this.gridLines.length < 2) || (D = !1)), (n || y || this.units && e.top <= 10) && (p = this.max - .5 * this.tickMajor), a == pd.Align.RIGHT && (g *= -1, l *= -1, d *= -1, y || (b = "start"));
        var S = pd.snapTo(this.min, this.tickMajor);
        S < this.min && (S += this.tickMajor);
        var O, k = this.max - this.min;
        if (pd.safeDivide(k, this.tickMajor) < 200) {
            var F = this.max + Math.max(.1, .1 * this.tickMajor);
            for (O = S; O < F; O += this.tickMajor) {
                if (o = T ? T(O) : e.top + (this.max - O) * this.scale + this.offset, D) for (var P = 0, E = this.gridLines.length; P < E; P += 2) C ? A = this.gridLines(O, A) : (A[0] = pd.toNumber(this.gridLines[P], 0), A[1] = pd.toNumber(this.gridLines[P + 1], 0)), t.appendChild(pdDOM.svgElem("line", {
                    "class": x, x1: pd.toNumber(A[0], 0), y1: o, x2: pd.toNumber(A[1], 0), y2: o
                }));
                t.appendChild(pdDOM.svgElem("line", {
                    "class": f, x1: s + d, y1: o, x2: s, y2: o
                })), O > u && O < p && (y ? t.appendChild(pdDOM.svgText(M(O * c), {
                    "class": m,
                    transform: "rotate(" + this.labelRotate.toFixed(1) + ", " + (s + g) + ", " + o + ")",
                    "text-anchor": b,
                    x: s + g,
                    y: o,
                    dy: "-0.25em"
                })) : t.appendChild(pdDOM.svgText(M(O * c), {
                    "class": m, "text-anchor": b, x: s + g, y: o, dy: v
                })));
            }
        }
        if ((S = pd.snapTo(this.min, this.tickMinor)) < this.min && (S += this.tickMinor), pd.safeDivide(k, this.tickMinor) < 500) for (O = S; O <= this.max; O += this.tickMinor) {
            if (o = T ? T(O) : e.top + (this.max - O) * this.scale + this.offset, D) for (P = 0, E = this.gridLines.length; P < E; P += 2) C ? A = this.gridLines(O, A) : (A[0] = pd.toNumber(this.gridLines[P], 0), A[1] = pd.toNumber(this.gridLines[P + 1], 0)), t.appendChild(pdDOM.svgElem("line", {
                "class": x, x1: pd.toNumber(A[0], 0), y1: o, x2: pd.toNumber(A[1], 0), y2: o
            }));
            t.appendChild(pdDOM.svgElem("line", {
                "class": f, x1: s, y1: o, x2: s + l, y2: o
            }));
        }
        if (this.units || this.prefix) {
            var R;
            if (y) o = T ? T(this.max) : e.top + this.offset; else (R = n || e.top <= 15 ? pd.mapAndConstrainTo(e.top, 0, 8, .8, .4) : pd.mapAndConstrainTo(e.top, 0, 16, .8, -.8)) < -.1 && (g = 2 * pd.sign(g)), v = R + "em";
            y ? t.appendChild(pdDOM.svgText(pdSVG.getUnitsPrefix(this.prefix) + this.units, {
                "class": "text-axis" + h,
                transform: "rotate(" + this.labelRotate.toFixed(1) + ", " + (s + g) + ", " + o + ")",
                "text-anchor": b,
                x: s + g,
                y: e.top + this.offset,
                dy: v
            })) : this.useUnitsAsTitle && !this.title ? t.appendChild(pdDOM.svgText(pdSVG.getUnitsPrefix(this.prefix) + this.units, {
                "class": "text-axis" + h, "text-anchor": "start", x: s + 3, y: e.top, dy: "-0.4em"
            })) : t.appendChild(pdDOM.svgText(pdSVG.getUnitsPrefix(this.prefix) + this.units, {
                "class": "text-axis" + h, "text-anchor": b, x: s + g, y: e.top + this.offset, dy: v
            }));
        }
        return this.title && (o = T ? .5 * (T(this.min) + T(this.max)) : e.top + .5 * (this.min + this.max) * this.scale, a == pd.Align.RIGHT && e.right >= 30 ? (s = i + pd.mapAndConstrainTo(e.right, 30, 45, 20, 30), t.appendChild(pdDOM.svgText(this.title, {
            fill: this.hilite ? "red" : "slate",
            transform: "rotate(90, " + s + ", " + o + ")",
            "font-size": pd.snapTo(pd.mapAndConstrainTo(e.right, 30, 50, .6, 1), .05) + "em",
            "text-anchor": "middle",
            x: s,
            y: o,
            dy: "0.0em"
        }))) : a == pd.Align.LEFT && e.left >= 30 && (s = i - pd.mapAndConstrainTo(e.left, 30, 45, 20, 30), t.appendChild(pdDOM.svgText(this.title, {
            fill: this.hilite ? "red" : "slate",
            transform: "rotate(-90, " + s + ", " + o + ")",
            "font-size": pd.snapTo(pd.mapAndConstrainTo(e.left, 30, 50, .6, 1), .05) + "em",
            "text-anchor": "middle",
            x: s,
            y: o,
            dy: "-0.3em"
        })))), !0;
    }, pdSVG.Axis.prototype.renderHorizontal = function (t, e, i, a, n) {
        var o, s = pd.toNumber(i, 0), l = n ? 2 : 4, d = n ? 4 : 7, p = this.max + .5 * this.tickMinor,
            u = this.min - .5 * this.tickMinor, c = pdSVG.getUnitsPrefixScaleFactor(this.prefix),
            h = this.hilite ? " hilite" : "", m = "text-grid" + h, f = "line-axis" + h, x = "line-grid" + h,
            y = "middle", g = "1.0em", b = this.format || r, v = this.scaleFunction, M = [], T = !1,
            A = null != this.gridLines;
        A && ((T = pd.isFunction(this.gridLines)) || pd.isArray(this.gridLines) && !(this.gridLines.length < 2) || (A = !1)), a == pd.Align.TOP && (l *= -1, d *= -1, g = "-0.2em"), (this.units || this.prefix) && (p = this.max - .5 * this.tickMajor);
        var C = pd.snapTo(this.min, this.tickMajor);
        C < this.min && (C += this.tickMajor);
        var D, S = this.max - this.min;
        if (pd.safeDivide(S, this.tickMajor) < 200) {
            var O = this.max + Math.max(.1, .1 * this.tickMajor);
            for (D = C; D < O; D += this.tickMajor) {
                if (o = v ? v(D) : e.left + (D - this.min) * this.scale + this.offset, A) for (var k = 0, F = this.gridLines.length; k < F; k += 2) T ? M = this.gridLines(D, M) : (M[0] = pd.toNumber(this.gridLines[k], 0), M[1] = pd.toNumber(this.gridLines[k + 1], 0)), t.appendChild(pdDOM.svgElem("line", {
                    "class": x, x1: o, y1: pd.toNumber(M[0], 0), x2: o, y2: pd.toNumber(M[1], 0)
                }));
                t.appendChild(pdDOM.svgElem("line", {
                    "class": f, x1: o, y1: s + d, x2: o, y2: s
                })), D > u && D < p && t.appendChild(pdDOM.svgText(b(D * c), {
                    "class": m, "text-anchor": y, x: o, y: s + d, dy: g
                }));
            }
        }
        if ((C = pd.snapTo(this.min, this.tickMinor)) < this.min && (C += this.tickMinor), pd.safeDivide(S, this.tickMinor) < 500) for (D = C; D <= this.max; D += this.tickMinor) {
            if (o = v ? v(D) : e.left + (D - this.min) * this.scale + this.offset, A) for (k = 0, F = this.gridLines.length; k < F; k += 2) T ? M = this.gridLines(D, M) : (M[0] = pd.toNumber(this.gridLines[k], 0), M[1] = pd.toNumber(this.gridLines[k + 1], 0)), t.appendChild(pdDOM.svgElem("line", {
                "class": x, x1: o, y1: pd.toNumber(M[0], 0), x2: o, y2: pd.toNumber(M[1], 0)
            }));
            t.appendChild(pdDOM.svgElem("line", {
                "class": f, x1: o, y1: s, x2: o, y2: s + l
            }));
        }
        return (this.units || this.prefix) && ((n || e.right <= 15) && (y = "end"), D = this.max, o = v ? v(D) : e.left + (D - this.min) * this.scale + this.offset, t.appendChild(pdDOM.svgText(pdSVG.getUnitsPrefix(this.prefix) + this.units, {
            "class": "text-axis" + h, "text-anchor": y, x: o, y: s + d, dy: g
        }))), this.title && (o = v ? .5 * (v(this.min) + v(this.max)) : e.left + (.5 * (this.min + this.max) - this.min) * this.scale, a == pd.Align.TOP && e.top >= 30 ? (s = i - pd.mapAndConstrainTo(e.top, 30, 45, 20, 30), t.appendChild(pdDOM.svgText(this.title, {
            fill: this.hilite ? "red" : "slate",
            "font-size": pd.snapTo(pd.mapAndConstrainTo(e.top, 30, 50, .6, 1), .05) + "em",
            "text-anchor": "middle",
            x: o,
            y: s,
            dy: "0.2em"
        }))) : a == pd.Align.BOTTOM && e.bottom >= 30 && (s = i + pd.mapAndConstrainTo(e.bottom, 30, 45, 20, 30), t.appendChild(pdDOM.svgText(this.title, {
            fill: this.hilite ? "red" : "slate",
            "font-size": pd.snapTo(pd.mapAndConstrainTo(e.bottom, 30, 50, .6, 1), .05) + "em",
            "text-anchor": "middle",
            x: o,
            y: s,
            dy: "0.4em"
        })))), !0;
    };
}(), (pd = pd || {}).GridCell = function (t, e, i) {
    this.x = t || 0, this.y = e || 0, this.value = i || 0, this.avg = 0, this.color = "", this.extra = null;
}, pd.Grid2D = function (t) {
    var e = this;
    t = t || {}, this.type = 0, this._rows = 0, Object.defineProperty(this, "rows", {
        get: function () {
            return e._rows;
        }, set: function (t) {
            t = pd.constrainTo(pd.toInteger(t, e._rows), 0, 5e3), e._rows != t && e.setSize(e._cols, t);
        }
    }), this._cols = 0, Object.defineProperty(this, "cols", {
        get: function () {
            return e._cols;
        }, set: function (t) {
            t = pd.constrainTo(pd.toInteger(t, e._cols), 0, 5e3), e._cols != t && e.setSize(t, e.rows);
        }
    }), this.cells = [];
}, pd.Grid2D.prototype.setSize = function (t, e) {
    t = Math.max(1, pd.toInteger(t, this._cols)), e = Math.max(1, pd.toInteger(e, this._rows));
    var i = this.cells;
    i.length = e;
    for (var r = 0; r < e; ++r) {
        i[r] || (i[r] = []);
        var a = i[r], n = a.length;
        a.length = t;
        for (var o = n; o < t; ++o) a[o] = new pd.GridCell();
    }
    return this._cols = t, this._rows = e, this;
}, pd.Grid2D.prototype.setArea = function (t, e, i, r, a, n) {
    var o, s, l = i - t, d = r - e, p = Math.max(2, Math.round(Math.abs(pd.safeDivide(l, a)))),
        u = Math.max(2, Math.round(Math.abs(pd.safeDivide(l, n))));
    a = l / (p - 1), n = d / (u - 1);
    var c = this.cells;
    c.length = u, o = t;
    for (var h = 0; h < u; ++h) {
        c[h] || (c[h] = []);
        var m = c[h];
        m.length = p, s = e;
        for (var f = 0; f < p; ++f) {
            if (m[f]) {
                var x = m[f];
                x.x = o, x.y = s;
            } else m[f] = new pd.GridCell(o, s, 0);
            s += n;
        }
        o += a;
    }
    return this._cols = p, this._rows = u, this;
}, pd.Grid2D.prototype.map = function (t) {
    if (!pd.isFunction(t)) throw new Error("callback must be a valid function");
    for (var e = this._cols, i = this._rows, r = this.cells, a = 0; a < i; ++a) for (var n = r[a], o = 0; o < e; ++o) t(n[o], o, a);
    return this;
}, pd.Grid2D.prototype.getCell = function (t, e) {
    return t >= 0 && t < this._cols && e >= 0 && e < this._rows ? this.cells[e][t] : null;
}, pd.Grid2D.prototype.getRow = function (t) {
    return t >= 0 && t < this._rows ? this.cells[t] : null;
}, pd.Grid2D.prototype.toJSON = function (t, e) {
    var i = "";
    t = t || "";
    var r = this._cols, a = this._rows, n = this.cells, o = 0;
    e = Math.max(0, pd.toNumber(e, 5)), i += t + '"Grid2D": {\n', i += t + '  "type": ' + this.type + ",\n", i += t + '  "cols": ' + this._cols + ",\n", i += t + '  "rows": ' + this._rows + ",\n", i += t + '  "cells": [\n';
    for (var s = 0; s < a; ++s) {
        var l = n[s];
        i += t + "    [ ";
        for (var d = 0; d < r; ++d) o = l[d].value, d > 0 && (i += ", "), pd.closeTo(o, 0) ? i += o.toString() : i += o.toFixed(e);
        i += s < a - 1 ? " ],\n" : " ]\n";
    }
    return i += t + "  ]\n", i += t + "}";
}, pd.Grid2D.prototype.toCSV = function (t) {
    var e = "", i = this._cols, r = this._rows, a = this.cells, n = 0;
    t = Math.max(0, pd.toNumber(t, 5)), e += "#PD:Grid2D, Cols, Rows\n", e += this.type + ", " + this._cols + ", " + this._rows + "\n";
    for (var o = 0; o < r; ++o) {
        for (var s = a[o], l = 0; l < i; ++l) n = s[l].value, l > 0 && (e += ", "), pd.closeTo(n, 0) ? e += n.toString() : e += n.toFixed(t);
        e += "\n";
    }
    return e;
};

var pdWeather = pdWeather || {};

!function () {
    function t(t, e) {
        if (t && e >= 0 && e <= 365) for (var i in t) t.hasOwnProperty(i) && (t[i][e] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    function e(t, e) {
        return t < e ? t : 0;
    }

    pdWeather.Metric = {
        DRY_BULB: 0,
        DEW_POINT: 1,
        REL_HUMIDITY: 2,
        ATM_PRESSURE: 3,
        ET_SOLAR_HORIZONTAL: 4,
        ET_SOLAR_DIRECT: 5,
        INFRA_RED_HORIZONTAL: 6,
        SOLAR_GLOBAL_HORIZONTAL: 7,
        SOLAR_DIRECT_NORMAL: 8,
        SOLAR_DIFFUSE_HORIZONTAL: 9,
        ILLUM_GLOBAL_HORIZONTAL: 10,
        ILLUM_DIRECT_NORMAL: 11,
        ILLUM_DIFFUSE_HORIZONTAL: 12,
        ILLUM_ZENITH: 13,
        WIND_DIRECTION: 14,
        WIND_SPEED: 15,
        CLOUD_COVER_TOTAL: 16,
        CLOUD_COVER_OPAQUE: 17,
        VISIBILITY: 18,
        CEILING_HEIGHT: 19,
        PRECIPITABLE_WATER: 20,
        AEROSOL_DEPTH: 21,
        SNOW_DEPTH: 22,
        SNOW_DAYS_SINCE_LAST_FALL: 23,
        ALBEDO: 24,
        RAINFALL: 25
    }, pdWeather.Data = function () {
        return this.stationName = "[None]", this.stateOrRegion = "-", this.country = "-", this.WMO = "-", this.latitude = 0, this.longitude = 0, this.timezone = 0, this.elevation = 0, this.leapYear = !1, this.dayCount = 0, this.annualHourly = {
            tempDryBulb: [],
            tempDewPoint: [],
            relHumidity: [],
            atmPressure: [],
            extRadHorizontal: [],
            extRadDirectBeam: [],
            infraRedHorizontal: [],
            solarGlobalHorizontal: [],
            solarDirectBeam: [],
            solarDiffuseHorizontal: [],
            illumGlobalHorizontal: [],
            illumDirectBeam: [],
            illumDiffuseHorizontal: [],
            zenithLuminance: [],
            windDirection: [],
            windSpeed: [],
            cloudCover: [],
            cloudOpaque: [],
            visibility: [],
            ceilingHeight: [],
            precipitableWater: [],
            aerosolOpticalDepth: [],
            snowDepth: [],
            snowDaysSince: [],
            albedo: [],
            precipitationDepth: []
        }, this;
    }, pdWeather.Data.prototype.getMetric = function (t) {
        var e = {
            decimals: 1
        };
        switch (t) {
            default:
            case 0:
                e.data = this.annualHourly.tempDryBulb, e.name = "Dry Bulb Temperature", e.shortName = "Dry Bulb Temp.", e.abbrev = "DBT", e.units = "°C", e.min = -70, e.max = 70, e.step = 1;
                break;

            case 1:
                e.data = this.annualHourly.tempDewPoint, e.name = "Dew Point Temperature", e.shortName = "Dew Point Temp.", e.abbrev = "DPT", e.units = "°C", e.min = -70, e.max = 70, e.step = 1;
                break;

            case 2:
                e.data = this.annualHourly.relHumidity, e.name = "Relative Humidity", e.shortName = "Relative Humidity", e.abbrev = "RH", e.units = "%", e.min = 0, e.max = 100, e.step = 1;
                break;

            case 3:
                e.data = this.annualHourly.atmPressure, e.name = "Atmospheric Pressure", e.shortName = "Atmospheric Pressure", e.abbrev = "AP", e.units = "Pa", e.min = 31e3, e.max = 12e4, e.step = 100;
                break;

            case 4:
                e.data = this.annualHourly.extRadHorizontal, e.name = "Extraterrestrial Horizontal Radiation", e.shortName = "ET Hor. Radiation", e.abbrev = "EHR", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 5:
                e.data = this.annualHourly.extRadDirectBeam, e.name = "Extraterrestrial Direct Normal Radiation", e.shortName = "ET Direct Radiation", e.abbrev = "EDN", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 6:
                e.data = this.annualHourly.infraRedHorizontal, e.name = "Horizontal Infrared Radiation from Sky", e.shortName = "IR Hor. Radiation", e.abbrev = "IHR", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 7:
                e.data = this.annualHourly.solarGlobalHorizontal, e.name = "Global Horizontal Solar Radiation", e.shortName = "Global Hor. Radiation", e.abbrev = "GHS", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 8:
                e.data = this.annualHourly.solarDirectBeam, e.name = "Direct Normal Solar Radiation", e.shortName = "Direct Norm. Solar", e.abbrev = "DNS", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 9:
                e.data = this.annualHourly.solarDiffuseHorizontal, e.name = "Diffuse Horizontal Solar Radiation", e.shortName = "Diffuse Hor. Solar", e.abbrev = "DHS", e.units = "Wh/m2", e.min = 0, e.max = 1500, e.step = 10;
                break;

            case 10:
                e.data = this.annualHourly.illumGlobalHorizontal, e.name = "Global Horizontal Illuminance", e.shortName = "Global Hor. Illum.", e.abbrev = "GHI", e.units = "Lux", e.min = 0, e.max = 5e5, e.step = 1e3;
                break;

            case 11:
                e.data = this.annualHourly.illumDirectBeam, e.name = "Direct Normal Illuminance", e.shortName = "Direct Norm. Illum.", e.abbrev = "DNI", e.units = "Lux", e.min = 0, e.max = 5e5, e.step = 1e3;
                break;

            case 12:
                e.data = this.annualHourly.illumDiffuseHorizontal, e.name = "Diffuse Horizontal Illuminance", e.shortName = "Diffuse Hor. Illum.", e.abbrev = "DHI", e.units = "Lux", e.min = 0, e.max = 5e5, e.step = 1e3;
                break;

            case 13:
                e.data = this.annualHourly.zenithLuminance, e.name = "Zenith Luminance", e.shortName = "Zenith Lum.", e.abbrev = "ZI", e.units = "cd/m2", e.min = 0, e.max = 75e3, e.step = 100;
                break;

            case 14:
                e.data = this.annualHourly.windDirection, e.name = "Wind Direction", e.shortName = "Wind Direction", e.abbrev = "WD", e.decimals = 0, e.units = "deg", e.min = 0, e.max = 360, e.step = 1;
                break;

            case 15:
                e.data = this.annualHourly.windSpeed, e.name = "Wind Speed", e.shortName = "Wind Speed", e.abbrev = "WS", e.units = "m/s", e.min = 0, e.max = 40, e.step = .5;
                break;

            case 16:
                e.data = this.annualHourly.cloudCover, e.name = "Total Cloud Cover", e.shortName = "Cloud Cover", e.abbrev = "CC", e.units = "%", e.min = 0, e.max = 100, e.step = 1;
                break;

            case 17:
                e.data = this.annualHourly.cloudOpaque, e.name = "Opaque Sky Cover", e.shortName = "Opaque Sky", e.abbrev = "OS", e.units = "%", e.min = 0, e.max = 100, e.step = 1;
                break;

            case 18:
                e.data = this.annualHourly.visibility, e.name = "Visibility", e.shortName = "Visibility", e.abbrev = "VIS", e.units = "km", e.min = 0, e.max = 9e3, e.step = 10;
                break;

            case 19:
                e.data = this.annualHourly.ceilingHeight, e.name = "Ceiling Height", e.shortName = "Ceiling Height", e.abbrev = "CH", e.units = "m", e.min = 0, e.max = 9e4, e.step = 100;
                break;

            case 20:
                e.data = this.annualHourly.precipitableWater, e.name = "Precipitable Water", e.shortName = "Precipitable Water", e.abbrev = "PW", e.decimals = 1, e.units = "mm", e.min = 0, e.max = 500, e.step = 1;
                break;

            case 21:
                e.data = this.annualHourly.aerosolOpticalDepth, e.name = "Aerosol Optical Depth", e.shortName = "Aerosol Depth", e.abbrev = "AD", e.units = "thou", e.decimals = 3, e.min = 0, e.max = .9, e.step = .01;
                break;

            case 22:
                e.data = this.annualHourly.snowDepth, e.name = "Snow Depth", e.shortName = "Snow Depth", e.abbrev = "SD", e.units = "cm", e.min = 0, e.max = 500, e.step = 1;
                break;

            case 23:
                e.data = this.annualHourly.snowDaysSince, e.name = "Days Since Last Snowfall", e.shortName = "Days Since Snowfall", e.abbrev = "DSS", e.units = "days", e.decimals = 0, e.min = 0, e.max = 90, e.step = 1;
                break;

            case 24:
                e.data = this.annualHourly.albedo, e.name = "Albedo", e.shortName = "Albedo", e.abbrev = "ALB", e.units = "0-1", e.decimals = 3, e.min = 0, e.max = 1, e.step = .01;
                break;

            case 25:
                e.data = this.annualHourly.precipitationDepth, e.name = "Precipitation Depth", e.shortName = "Precipitation", e.abbrev = "PD", e.units = "mm", e.min = 0, e.max = 900, e.step = 1;
        }
        return e;
    }, pdWeather.Data.prototype.getSubHourlyValue = function (t, e, i) {
        if (this.dayCount > 0) {
            var r = this.dayCount - 1, a = Math.round(e < 0 ? 0 : e > r ? r : e),
                n = i < 0 ? 0 : i > 23.999 ? 23.999 : i, o = Math.floor(n), s = Math.ceil(n);
            return o == s ? t[a][o] : s > 23 ? pd.mapTo(n, o, s, t[a][o], t[a < r ? a + 1 : 0][0]) : pd.mapTo(n, o, s, t[a][o], t[a][s]);
        }
        return 0;
    }, pdWeather.Data.prototype.getValue = function (t, e, i) {
        if (this.dayCount > 0) {
            var r = this.dayCount - 1, a = Math.round(e < 0 ? 0 : e > r ? r : e),
                n = Math.round(i < 0 ? 0 : i > 23 ? 23 : i);
            return t[a][n];
        }
        return 0;
    }, pdWeather.Data.prototype.calcAverageTemperatureAtHour = function (t, e, i) {
        var r = 0;
        if (this.dayCount > 0 && this.annualHourly.tempDryBulb.length >= this.dayCount) {
            var a, n = 0, o = this.annualHourly.tempDryBulb;
            e < t && (e += this.dayCount), e - t >= this.dayCount && (e = t + this.dayCount - 1);
            for (var s = t; s <= e; ++s) a = s >= this.dayCount ? s - this.dayCount : s, r += this.getSubHourlyValue(o, a, i), ++n;
            n > 0 && (r /= n);
        }
        return r;
    }, pdWeather.Data.prototype.calcAverageTemperatureOverPeriod = function (t, e) {
        var i = 0;
        if (this.dayCount > 0 && this.annualHourly.tempDryBulb.length >= this.dayCount) {
            for (var r, a = 0, n = this.annualHourly.tempDryBulb, o = (t = pd.constrainTo(pd.toInteger(t, 0), 0, this.dayCount - 1)) - (e = pd.constrainTo(pd.toInteger(e, 30), 1, this.dayCount) - 1); o <= t; ++o) {
                r = o < 0 ? n[o + this.dayCount] : n[o];
                for (var s = 0; s < 24; ++s) i += r[s], ++a;
            }
            a > 0 && (i /= a);
        }
        return i;
    }, pdWeather.Data.prototype.calc30DayMeanOutdoorTemperature = function (t) {
        var e = 0;
        if (this.dayCount > 0 && this.annualHourly.tempDryBulb.length >= this.dayCount) {
            for (var i, r, a, n, o = this.annualHourly.tempDryBulb, s = 0, l = (t = pd.constrainTo(pd.toInteger(t, 0), 0, this.dayCount - 1)) - 29; l <= t; ++l) {
                a = n = (r = l < 0 ? o[l + this.dayCount] : o[l])[0];
                for (var d = 1; d < 24; ++d) a > (i = r[d]) && (a = i), n < i && (n = i);
                e += .5 * (a + n), s++;
            }
            s > 0 && (e /= s);
        }
        return e;
    }, pdWeather.Data.prototype.copyFrom = function (t) {
        var e = !1;
        if ("stationName" in t && (this.stationName = t.stationName, e = !0), "stateOrRegion" in t && (this.stateOrRegion = t.stateOrRegion, e = !0), "country" in t && (this.country = t.country, e = !0), "WMO" in t && (this.WMO = t.WMO, e = !0), "latitude" in t && (this.latitude = pd.toNumber(t.latitude, this.latitude), e = !0), "longitude" in t && (this.longitude = pd.toNumber(t.longitude, this.longitude), e = !0), "timezone" in t && (this.timezone = pd.toNumber(t.timezone, this.timezone), e = !0), "elevation" in t && (this.elevation = pd.toNumber(t.elevation, this.elevation), e = !0), "annualHourly" in t) {
            var i = this.annualHourly, r = t.annualHourly;
            for (var a in i) i.hasOwnProperty(a) && r.hasOwnProperty(a) && (i[a] = r[a], e = !0);
        }
        return e;
    }, pdWeather.Data.prototype.setValuesFromArray = function (t, e) {
        var i, r;
        if (!pd.isArray(t)) throw new Error("Invalid Argument: 'data' must be a valid array.");
        if (!pd.isArray(e)) throw new Error("Invalid Argument: 'array' must be a valid array.");
        if (e.length >= 8760) {
            var a = 0;
            r = e.length > 8783 ? 366 : 365;
            for (var n = 0; n < r; ++n) {
                t[n] || (t[n] = []), i = t[n];
                for (var o = 0; o < 24; ++o) i[o] = e[a++];
            }
        } else {
            if (!(e.length >= 365 && pd.isArray(e[0]) && e[0].length >= 24)) throw new Error("Provided array must contain a full year of hourly data.");
            var s;
            r = Math.min(e.length, 366);
            for (n = 0; n < r; ++n) {
                s = e[n], t[n] || (t[n] = []), i = t[n];
                for (o = 0; o < 24; ++o) i[o] = s[o];
            }
        }
        return this;
    }, pdWeather.Data.prototype.parseWEA = function (i, r) {
        if (pd.isString(i) || pd.isObject(i) && pd.isString(i.result) && (i = i.result), !i || !i.length) throw new TypeError("ERROR: Sent empty or invalid 'text' parameter.");
        var a = i.match(/[^\r\n]+/g);
        if (a.length < 8760 || !pd.startsWith(a[0], "place")) return window.alert("ERROR: WEA file is invalid or incomplete as it does not contain a full year of hourly solar data."), !1;
        var n, o, s = 0, l = 0, d = a.length, p = 1, u = 0, c = this.annualHourly;
        for (t(c, 0), this.stationName = r || "WEA_FILE", this.stateOrRegion = "", this.country = "", this.WMO = "", n = 0; n < d; ++n) if (a[n].length > 1) switch (a[n].charAt(0)) {
            case "p":
                pd.startsWith(a[n], "place ") && (this.stationName = a[n].substr(6));
                break;

            case "l":
                pd.startsWith(a[n], "latitude ") ? this.latitude = parseFloat(a[n].substr(9)) : pd.startsWith(a[n], "longitude ") && (this.longitude = -parseFloat(a[n].substr(10)));
                break;

            case "t":
                pd.startsWith(a[n], "time_zone ") && (this.timezone = -parseFloat(a[n].substr(10)) / 15);
                break;

            case "s":
                pd.startsWith(a[n], "site_elevation ") && (this.elevation = parseFloat(a[n].substr(15)));
                break;

            case "w":
            case "#":
                break;

            default:
                for (; n < d; ++n) (o = a[n].trim().match(/\S+/g)).length > 4 && (parseInt(o[0], 10) - 1, s = parseInt(o[1], 10), l = Math.floor(parseFloat(o[2])), s != p && (t(c, ++u), p = s), u >= 0 && u <= 365 && l >= 0 && l < 24 && (c.solarDirectBeam[u][l] = e(parseFloat(o[3]), 9998.9), c.solarDiffuseHorizontal[u][l] = e(parseFloat(o[4]), 9998.9)));
        }
        return this.leapYear = 365 == u, this.dayCount = u + 1, !0;
    }, pdWeather.Data.prototype.parseEPW = function (i, r) {// i is the epw file data
        if (pd.isString(i) || pd.isObject(i) && pd.isString(i.result) && (i = i.result), !i || !i.length) throw new TypeError("ERROR: Sent empty or invalid 'text' parameter.");
        (r = r || {}).progressIncrement = r.progressIncrement || .1, r.callbackComplete = r.callbackComplete || null, r.callbackProgress = r.callbackProgress || null;
        var a, n, o = i.split("\n"), s = o.length, l = 0;// o is a list of each line in the epw file
        // console.log(o);
        if (o.length < 8765 || !pd.startsWith(o[0], "LOCATION")) return window.alert("ERROR: EPW file is invalid or corrupted as it does not contain a full year of hourly data."), !1;
        var d = 0, p = 1, u = 0, c = 0, h = this.annualHourly;
        t(h, 0);
        var m = r.callbackProgress ? 0 : 1.1, f = 1, x = 0;
        for (r.debug && console.time("parseEPW"), a = 0; a < s; ++a) if (o[a].length > 1) switch (o[a].charAt(0)) {
            case "L":
                (n = pd.parseCSV(o[a])).length > 9 && (this.stationName = n[1].toString(), this.stateOrRegion = n[2].toString(), this.country = n[3].toString(), this.WMO = n[5].toString(), this.latitude = parseFloat(n[6]), this.longitude = parseFloat(n[7]), this.timezone = parseFloat(n[8]), this.elevation = parseFloat(n[9]));
                break;

            case "D":
                o[a].charAt(1);
                break;

            case "T":
            case "G":
            case "H":
            case "C":
                break;

            default:// s is the length of a line in epw
                for (f = s - a; a < s; ++a) (n = pd.parseCSV(o[a])).length > 9 && (/*year*/parseInt(n[0], 10), /*this is the month*/m_omk = parseInt(n[1], 10) - 1, /*day*/d = parseInt(n[2], 10), /*hour*/c = parseInt(n[3], 10) - 1, parseInt(n[4], 10), d != p && (t(h, ++u), p = d), u >= 0 && u <= 365 && c >= 0 && c < 24 && (h.tempDryBulb[u][c] = e(parseFloat(n[6]), 98.9), h.tempDewPoint[u][c] = e(parseFloat(n[7]), 98.9), h.relHumidity[u][c] = e(parseFloat(n[8]), 998.9), h.atmPressure[u][c] = e(parseFloat(n[9]), 999998.9), h.extRadHorizontal[u][c] = e(parseFloat(n[10]), 9998.9), h.extRadDirectBeam[u][c] = e(parseFloat(n[11]), 9998.9), h.infraRedHorizontal[u][c] = e(parseFloat(n[12]), 9998.9), h.solarGlobalHorizontal[u][c] = e(parseFloat(n[13]), 9998.9), h.solarDirectBeam[u][c] = e(parseFloat(n[14]), 9998.9), h.solarDiffuseHorizontal[u][c] = e(parseFloat(n[15]), 9998.9), h.illumGlobalHorizontal[u][c] = e(parseFloat(n[16]), 999998.9), h.illumDirectBeam[u][c] = e(parseFloat(n[17]), 999998.9), h.illumDiffuseHorizontal[u][c] = e(parseFloat(n[18]), 999998.9), h.zenithLuminance[u][c] = e(parseFloat(n[19]), 9998.9), h.windDirection[u][c] = e(parseFloat(n[20]), 998.9), h.windSpeed[u][c] = e(parseFloat(n[21]), 998.9), h.cloudCover[u][c] = 10 * e(parseFloat(n[22]), 98.9), h.cloudOpaque[u][c] = 10 * e(parseFloat(n[23]), 98.9), h.visibility[u][c] = e(parseFloat(n[24]), 9998.9), h.ceilingHeight[u][c] = e(parseFloat(n[25]), 99998.9), h.precipitableWater[u][c] = e(parseFloat(n[28]), 998.9), h.aerosolOpticalDepth[u][c] = e(parseFloat(n[29]), .998), h.snowDepth[u][c] = e(parseFloat(n[30]), 998.9), h.snowDaysSince[u][c] = e(parseFloat(n[31]), 98.9), h.albedo[u][c] = e(parseFloat(n[32]), 998.9), h.precipitationDepth[u][c] = e(parseFloat(n[33]), 98.9)), ++l), (x = l / f) >= m && (r.callbackProgress && r.callbackProgress(x), m += r.progressIncrement);
            // console.log(h.tempDryBulb);

        }
        // const highDesignDayMinTempDB = findHighdesignDay(h.tempDryBulb, 20.2);
        return this.leapYear = 365 == u, this.dayCount = u + 1, r.debug && console.timeEnd("parseEPW"), r.callbackProgress && r.callbackProgress(1), r.callbackComplete && r.callbackComplete(), !0;
    };
}();

// function findHighdesignDay(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (array[i][j] === target) {
//                 // console.log(array[i]);
//                 const numbers = array[i];
//                 numbers.sort((a, b) => a - b);
//                 // console.log(numbers[0]);
//                 return numbers[0];
//             }
//         }
//     }
//     return null; // Target not found in the array
// }


var pd = pd || {};

!function () {
    var t = 101.325;
    pd.Psychrometrics = function (e) {
        e = e || {}, this.dryBulb = pd.toNumber(e.dryBulb, 25), this.wetBulb = 0, this.absoluteHumidity = pd.toNumber(e.absoluteHumidity, 0), this.relativeHumidity = pd.toNumber(e.relativeHumidity, 60), this.vapPressure = 0, this.satPoint = 0, this.airVolume = 0, this.dewPoint = 0, this.enthalpy = 0;
        var i = pd.toNumber(e.atmPressure, 101.365);
        Object.defineProperty(this, "atmPressure", {
            get: function () {
                return i;
            }, set: function (e) {
                i = pd.constrainTo(pd.toNumber(e, i), 51.365, 131.366), t = i;
            }
        }), this.getAtmPressureInPascal = function () {
            return 1e3 * i;
        }, Object.defineProperty(this, "dbt", {
            set: function (t) {
                this.dryBulb = t;
            }, get: function () {
                return this.dryBulb;
            }
        }), Object.defineProperty(this, "abs", {
            set: function (t) {
                this.absoluteHumidity = t;
            }, get: function () {
                return this.absoluteHumidity;
            }
        }), Object.defineProperty(this, "rel", {
            set: function (t) {
                this.relativeHumidity = t;
            }, get: function () {
                return this.relativeHumidity;
            }
        });
    };
    pd.Psychrometrics.prototype.getTemperatureUnits = function (t) {
        return t ? "Celsius" : "°C";
    }, pd.Psychrometrics.prototype.convertFarenheitToCelsius = function (t) {
        return 5 / 9 * (t - 32);
    }, pd.Psychrometrics.prototype.convertCelsiusToFarenheit = function (t) {
        return 1.8 * t + 32;
    }, pd.Psychrometrics.prototype.convertFarenheitToRankine = function (t) {
        return t + 459.67;
    }, pd.Psychrometrics.prototype.convertCelsiusToKelvin = function (t) {
        return t + 273.15;
    }, pd.Psychrometrics.prototype.getHumidityUnits = function (t) {
        return t ? "Grams of Moisture per Kilogram of Dry Air" : "g/kg";
    }, pd.Psychrometrics.prototype.convertHumRatioToAbsHumidity = function (t) {
        return 1e3 * t;
    }, pd.Psychrometrics.prototype.convertAbsHumidityToHumRatio = function (t) {
        return t / 1e3;
    }, pd.Psychrometrics.prototype.getPressureUnits = function (t) {
        return t ? "Kilo-Pascal" : "kPa";
    }, pd.Psychrometrics.prototype.convertPsiToPascal = function (t) {
        return 6894.75729 * t;
    }, pd.Psychrometrics.prototype.convertPascalToPsi = function (t) {
        return .000145037738 * t;
    }, pd.Psychrometrics.prototype.ASHRAE_SatVapPres = function (t) {
        var e, i = this.convertCelsiusToKelvin(t);
        if (t >= -100 && t <= 0) e = -5674.5359 / i + 6.3925247 - .009677843 * i + 6.2215701e-7 * i * i + 2.0747825e-9 * Math.pow(i, 3) - 9.484024e-13 * Math.pow(i, 4) + 4.1635019 * Math.log(i); else {
            if (!(t > 0 && t <= 200)) return -99999;
            e = -5800.2206 / i + 1.3914993 - .048640239 * i + 41764768e-12 * i * i - 1.4452093e-8 * Math.pow(i, 3) + 6.5459673 * Math.log(i);
        }
        return Math.exp(e);
    }, pd.Psychrometrics.prototype.ASHRAE_SatHumRatio = function (t) {
        var e = this.getAtmPressureInPascal(), i = this.ASHRAE_SatVapPres(t);
        return .621945 * i / (e - i);
    }, pd.Psychrometrics.prototype.ASHRAE_SatAirEnthalpy = function (t) {
        return this.ASHRAE_MoistAirEnthalpy(t, this.ASHRAE_SatHumRatio(t));
    }, pd.Psychrometrics.prototype.ASHRAE_DewPointFromVapPres = function (t, e) {
        var i = [-100, 200], r = (i[0] + i[1]) / 2;
        if (e <= this.ASHRAE_SatVapPres(i[0]) || e >= this.ASHRAE_SatVapPres(i[1])) return NaN;
        var a, n, o, s = t, l = Math.log(e), d = 0;
        do {
            a = s, n = Math.log(this.ASHRAE_SatVapPres(a)), o = a > r ? -.01 : .01, s = a - (n - l) / ((Math.log(this.ASHRAE_SatVapPres(a + o)) - n) / o), s = Math.min(Math.max(s, i[0]), i[1]), ++d;
        } while (Math.abs(s - a) > .001 && d < 20);
        return Math.min(s, t);
    }, pd.Psychrometrics.prototype.ASHRAE_DewPointFromHumRatio = function (t, e) {
        if (e < 0) throw new Error("Humidity ratio is negative");
        var i = this.ASHRAE_VapPresFromHumRatio(e);
        return this.ASHRAE_DewPointFromVapPres(t, i);
    }, pd.Psychrometrics.prototype.ASHRAE_DewPointFromWetBulb = function (t, e) {
        if (e > t) throw new Error("Wet bulb temperature is above dry bulb temperature");
        var i = this.ASHRAE_HumRatioFromWetBulb(t, e);
        return this.ASHRAE_DewPointFromHumRatio(t, i);
    }, pd.Psychrometrics.prototype.ASHRAE_MoistAirVolume = function (t, e) {
        if (e < 0) throw new Error("Humidity ratio is negative");
        var i = this.getAtmPressureInPascal();
        return 287.042 * this.convertCelsiusToKelvin(t) * (1 + 1.607858 * e) / i;
    }, pd.Psychrometrics.prototype.ASHRAE_MoistAirDensity = function (t, e) {
        if (e < 0) throw new Error("Humidity ratio is negative");
        return (1 + e) / this.ASHRAE_MoistAirVolume(t, e);
    }, pd.Psychrometrics.prototype.ASHRAE_MoistAirEnthalpy = function (t, e) {
        return 1e3 * (1.006 * t + e * (2501 + 1.86 * t));
    }, pd.Psychrometrics.prototype.ASHRAE_VapPresFromRelHum = function (t, e) {
        if (e < 0 || e > 1) throw new Error("Relative humidity is outside range [0,1]");
        return e * this.ASHRAE_SatVapPres(t);
    }, pd.Psychrometrics.prototype.ASHRAE_RelHumFromVapPres = function (t, e) {
        if (e < 0) throw new Error("Partial pressure of water vapor in moist air is negative");
        return e / this.ASHRAE_SatVapPres(t);
    }, pd.Psychrometrics.prototype.ASHRAE_HumRatioFromVapPres = function (t) {
        if (t < 0) throw new Error("Partial pressure of water vapor in moist air is negative");
        return .621945 * t / (this.getAtmPressureInPascal() - t);
    }, pd.Psychrometrics.prototype.ASHRAE_VapPresFromHumRatio = function (t) {
        if (t < 0) throw new Error("Humidity ratio is negative");
        return this.getAtmPressureInPascal() * t / (.621945 + t);
    }, pd.Psychrometrics.prototype.ASHRAE_HumRatioFromRelHum = function (t, e) {
        if (e < 0 || e > 1) throw new Error("Relative humidity is outside range [0,1]");
        var i = this.ASHRAE_VapPresFromRelHum(t, e);
        return this.ASHRAE_HumRatioFromVapPres(i);
    }, pd.Psychrometrics.prototype.ASHRAE_RelHumFromHumRatio = function (t, e) {
        if (e < 0) throw new Error("Humidity ratio is negative");
        var i = this.ASHRAE_VapPresFromHumRatio(e);
        return this.ASHRAE_RelHumFromVapPres(t, i);
    }, pd.Psychrometrics.prototype.ASHRAE_HumRatioFromWetBulb = function (t, e) {
        var i;
        if (e > t) throw new Error("Wet bulb temperature is above dry bulb temperature");
        return i = this.ASHRAE_SatHumRatio(e), e >= 0 ? ((2501 - 2.326 * e) * i - 1.006 * (t - e)) / (2501 + 1.86 * t - 4.186 * e) : ((2830 - .24 * e) * i - 1.006 * (t - e)) / (2830 + 1.86 * t - 2.1 * e);
    }, pd.Psychrometrics.prototype.ASHRAE_WetBulbFromHumRatio = function (t, e) {
        var i, r, a;
        if (e < 0) throw new Error("Humidity ratio is negative");
        for (i = .5 * ((a = this.ASHRAE_DewPointFromHumRatio(t, e)) + (r = t)); r - a > .001;) this.ASHRAE_HumRatioFromWetBulb(t, i) > e ? r = i : a = i, i = .5 * (r + a);
        return i;
    }, pd.Psychrometrics.prototype.ASHRAE_WetBulbFromDewPoint = function (t, e) {
        if (e > t) throw new Error("Dew point temperature is above dry bulb temperature");
        var i = this.ASHRAE_SatVapPres(e), r = this.ASHRAE_HumRatioFromVapPres(i);
        return this.ASHRAE_WetBulbFromHumRatio(t, r);
    }, pd.Psychrometrics.prototype.calcSaturationPoint = function (t) {
        var e = this.ASHRAE_SatHumRatio(t);
        return this.convertHumRatioToAbsHumidity(e);
    }, pd.Psychrometrics.prototype.calcDewPointByIteration = function (t, e) {
        var i = this.convertAbsHumidityToHumRatio(e);
        return this.ASHRAE_DewPointFromHumRatio(t, i);
    }, pd.Psychrometrics.prototype.calcFrostPointTemperature = function (t) {
        var e = this.convertAbsHumidityToHumRatio(t), i = this.ASHRAE_VapPresFromHumRatio(e), r = Math.log(.001 * i);
        return 6.09 + 12.608 * r + .4959 * r * r;
    }, pd.Psychrometrics.prototype.calcDewPointTemperature = function (t) {
        var e = this.convertAbsHumidityToHumRatio(t), i = .001 * this.ASHRAE_VapPresFromHumRatio(e), r = Math.log(i),
            a = 6.54 + 14.526 * r + .7389 * r * r + .09486 * Math.pow(r, 3) + .4569 * Math.pow(i, .1984);
        return a < 0 && (a = Math.max(a, this.calcFrostPointTemperature(t))), a;
    }, pd.Psychrometrics.prototype.calcDewPointTemperature_OLD = function (e) {
        var i = pd.safeDivide(e / 621.945 * 7.5 * t, 1 + e / 621.945), r = i > 0 ? Math.log10(i) : 0;
        return pd.safeDivide(1750.286, 8.10765 - r) - 235;
    }, pd.Psychrometrics.prototype.calcVapourPressure = function (t) {
        var e = this.convertAbsHumidityToHumRatio(t);
        return this.ASHRAE_VapPresFromHumRatio(e) / 1e3;
    }, pd.Psychrometrics.prototype.calcSpecificVolume = function (t, e) {
        var i = this.convertAbsHumidityToHumRatio(e);
        return this.ASHRAE_MoistAirVolume(t, i);
    }, pd.Psychrometrics.prototype.calcEnthalpy = function (t, e) {
        var i = this.convertAbsHumidityToHumRatio(e);
        return this.ASHRAE_MoistAirEnthalpy(t, i) / 1e3;
    }, pd.Psychrometrics.prototype.calcWetBulbTemperature = function (t, e) {
        var i = this.convertAbsHumidityToHumRatio(e);
        return this.ASHRAE_WetBulbFromHumRatio(t, i);
    }, pd.Psychrometrics.prototype.calcWetBulbDewPoint = function (t, e) {
        return this.ASHRAE_DewPointFromWetBulb(t, e);
    }, pd.Psychrometrics.prototype.calcAbsHumidityFromDewPoint = function (t) {
        var e = this.ASHRAE_SatVapPres(t), i = this.ASHRAE_HumRatioFromVapPres(e);
        return this.convertHumRatioToAbsHumidity(i);
    }, pd.Psychrometrics.prototype.calcRelFromAbsHumidity = function (t, e) {
        var i = this.calcSaturationPoint(t);
        return e > i ? 100 : 100 * pd.safeDivide(e, i);
    }, pd.Psychrometrics.prototype.calcAbsFromRelHumidity = function (t, e) {
        var i = this.calcSaturationPoint(t), r = e / 100 * i;
        return r > i && (r = i), r;
    }, pd.Psychrometrics.prototype.calcAbsHumidityFromVapPressure = function (t) {
        var e = this.ASHRAE_HumRatioFromVapPres(1e3 * t);
        return this.convertHumRatioToAbsHumidity(e);
    }, pd.Psychrometrics.prototype.setDBTABS = function (t, e) {
        t = pd.constrainTo(t, -100, 200), e = pd.constrainTo(e, 0, 999);
        var i = this.ASHRAE_SatHumRatio(t), r = this.convertHumRatioToAbsHumidity(i);
        e > r && (e = r);
        var a = this.convertAbsHumidityToHumRatio(e), n = this.ASHRAE_VapPresFromHumRatio(a);
        return this.dryBulb = t, this.absoluteHumidity = e, this.relativeHumidity = 100 * pd.safeDivide(e, r), this.wetBulb = this.ASHRAE_WetBulbFromHumRatio(t, a), this.airVolume = this.ASHRAE_MoistAirVolume(t, a), this.dewPoint = this.ASHRAE_DewPointFromVapPres(t, n), this.satPoint = r, this.enthalpy = .001 * this.ASHRAE_MoistAirEnthalpy(t, a), this.vapPressure = .001 * n, this;
    }, pd.Psychrometrics.prototype.setDBTREL = function (t, e) {
        t = pd.constrainTo(t, -100, 200);
        var i = .01 * (e = pd.constrainTo(e, 0, 100)), r = this.ASHRAE_SatHumRatio(t),
            a = this.convertHumRatioToAbsHumidity(r), n = i * a;
        n > a && (n = a);
        var o = this.convertAbsHumidityToHumRatio(n), s = this.ASHRAE_VapPresFromHumRatio(o);
        return this.dryBulb = t, this.relativeHumidity = e, this.absoluteHumidity = n, this.wetBulb = this.ASHRAE_WetBulbFromHumRatio(t, o), this.airVolume = this.ASHRAE_MoistAirVolume(t, o), this.dewPoint = this.ASHRAE_DewPointFromVapPres(t, s), this.satPoint = a, this.enthalpy = .001 * this.ASHRAE_MoistAirEnthalpy(t, o), this.vapPressure = .001 * s, this;
    }, pd.Psychrometrics.prototype.getUnitsJSON = function (t) {
        var e = "";
        return e += t + '"PsychrometricUnits": {\n', e += t + '  "AtmosphericPressure(ATM)": "kPa",\n', e += t + '  "DryBulbTemperature(DBT)": "°C",\n', e += t + '  "RelativeHumidity(REL)": "%",\n', e += t + '  "AbsoluteHumidity(ABS)": "g/kg",\n', e += t + '  "WetBulbTemperature(WBT)": "°C",\n', e += t + '  "DewPointTemperature(DEW)": "°C",\n', e += t + '  "VapourPressure(VAP)": "kPa",\n', e += t + '  "AirVolume(VOL)": "m3",\n', e += t + '  "Enthalpy(ENT)": "kJ/kg",\n', e += t + '  "ATM": ' + this.atmPressure.toFixed(5) + "\n", e += t + "}";
    }, pd.Psychrometrics.prototype.toJSON = function (t) {
        var e = "";
        return e += (t = t || "") + '"DBT": ' + this.dryBulb.toFixed(2) + ",\n", e += t + '"REL": ' + this.relativeHumidity.toFixed(2) + ",\n", e += t + '"ABS": ' + this.absoluteHumidity.toFixed(5) + ",\n", e += t + '"WBT": ' + this.wetBulb.toFixed(2) + ",\n", e += t + '"DEW": ' + this.dewPoint.toFixed(2) + ",\n", e += t + '"VAP": ' + this.vapPressure.toFixed(5) + ",\n", e += t + '"VOL": ' + this.airVolume.toFixed(5) + ",\n", e += t + '"ENT": ' + this.enthalpy.toFixed(5);
    }, pd.Psychrometrics.prototype.getUnitsCSV = function () {
        var t = "";
        return t += "Dry-Bulb Temperature [°C], ", t += "Relative Humidity [%], ", t += "Absolute Humidity [g/kg], ", t += "Wet-Bulb Temperature [°C], ", t += "Dew-Point Temperature [°C], ", t += "Vapour Pressure [kPa], ", t += "Air Volume [m3], ", t += "Enthalpy [kJ/kg]";
    }, pd.Psychrometrics.prototype.toCSV = function () {
        var t = "";
        return t += this.dryBulb.toFixed(2) + ", ", t += this.relativeHumidity.toFixed(2) + ", ", t += this.absoluteHumidity.toFixed(5) + ", ", t += this.wetBulb.toFixed(2) + ", ", t += this.dewPoint.toFixed(2) + ", ", t += this.vapPressure.toFixed(5) + ", ", t += this.airVolume.toFixed(5) + ", ", t += this.enthalpy.toFixed(5);
    };

    function e(t) {
        return Math.exp(18.6686 - 4030.183 / (t + 235));
    }

    function i(t, e, i, r, a, n, o) {
        t = pd.constrainTo(t, -50, 100), e = pd.constrainTo(e, 0, 100), i = pd.constrainTo(i, -50, 100), r = pd.constrainTo(r, 0, 2), n = pd.constrainTo(n, 0, 4), a = pd.constrainTo(a, 0, 4);
        for (var s, l, d = 10 * e * Math.exp(16.6536 - 4030.183 / (t + 235)), p = .155 * n, u = 58.15 * a, c = u - 58.15 * o, h = p < .078 ? 1 + 1.29 * p : 1.05 + .645 * p, m = 12.1 * Math.sqrt(r), f = t + 273, x = i + 273, y = f + (35.5 - t) / (3.5 * (6.45 * p + .1)), g = p * h, b = 3.96 * g, v = 100 * g, M = g * f, T = 308.7 - .028 * c + b * Math.pow(x / 100, 4), A = y / 100, C = A, D = 0; D < 50 && (C = (C + A) / 2, A = (T + M * (l = m > (s = 2.38 * Math.pow(Math.abs(100 * C - f), .25)) ? m : s) - b * Math.pow(C, 4)) / (100 + v * l), !(Math.abs(A - C) < 15e-5)); D++);
        var S = 100 * A - 273, O = 3.05 * .001 * (5733 - 6.99 * c - d), k = c > 58.15 ? .42 * (c - 58.15) : 0,
            F = 17e-6 * u * (5867 - d), P = .0014 * u * (34 - t),
            E = 3.96 * h * (Math.pow(A, 4) - Math.pow(x / 100, 4)), R = h * l * (S - t),
            N = (.303 * Math.exp(-.036 * u) + .028) * (c - O - k - F - P - E - R),
            H = 100 - (95 * Math.exp(-.03353 * Math.pow(N, 4)) - .2179 * Math.pow(N, 2));
        return {
            pmv: N, ppd: pd.constrainTo(H, 0, 100)
        };
    }

    function r(i, r, a, n, o, s, l) {
        var d, p, u, c, h, m, f, x, y, g, b, v, M, T, A, C, D, S, O, k, F, P, E, R, N, H, w, I, L, V, G, _, B, U, W, Y,
            j, z, K, X, Q, J, q, Z, $, tt, et, it, rt, at, nt, ot, st, lt, dt, pt = r * e(i) / 100,
            ut = Math.max(n, .1);
        d = 33.7, p = 36.8, u = 6.3, c = .1, h = .1 * o, f = .155 * s, x = 1 + .15 * s, y = 2.2 / (m = .009869 * t), g = 58.2 * o, b = 58.2 * o, s <= 0 ? (v = .38 * Math.pow(ut, -.29), M = 1) : (v = .59 * Math.pow(ut, -.08), M = .45), T = 3 * Math.pow(m, .53), A = 8.600001 * Math.pow(ut * m, .53), T = Math.max(T, A), z = O = (S = ((C = 4.7) * a + T * i) / (D = C + T)) + (d - S) / (D * ((j = 1 / (x * D)) + f));
        var ct, ht = !0;
        for (q = 1; q <= 60; q++) {
            do {
                ht && (z = O, j = 1 / (x * (D = (C = 2.26788e-7 * Math.pow((O + a) / 2 + 273.15, 3) * .72) + T)), S = (C * a + T * i) / D), O = (j * d + f * S) / (j + f), ht = !0;
            } while (O - z > .01);
            ht = !1, N = ((R = (d += 1.8258 * ((F = (p - d) * (5.28 + 1.163 * u)) - (k = (d - S) / (j + f)) - h) / (60 * (.97 * c * 69.9))) - 33.7) > 0) * R, w = (-1 * (I = (p += 1.8258 * (b - F - (P = .0023 * b * (44 - pt)) - (E = .0014 * b * (34 - i)) - l) / (60 * (.97 * (1 - c) * 69.9))) - 36.8) > 0) * (-1 * I), (-1 * (V = c * d + (1 - c) * p - 36.49) > 0) * (-1 * V), (u = (6.3 + 120 * ((I > 0) * I)) / (1 + .5 * (H = (-1 * R > 0) * (-1 * R)))) > 90 && (u = 90), u < .5 && (u = .5), (L = 170 * ((V > 0) * V) * Math.exp(N / 10.7)) > 500 && (L = 500), G = 1 / (y * x * T), _ = f / (y * M), h = (K = .68 * L) + (Y = (W = .06 + .94 * (U = K / (B = (e(d) - pt) / (G + _)))) * B - K), W > v && (W = v, h = (K = (U = v / .94) * B) + (Y = .06 * (1 - U) * B)), B < 0 && (Y = 0, K = 0, W = v, U = v, h = B), h = K + Y, b = g + 19.4 * H * w, c = .0417737 + .7451833 / (u + .585417);
        }
        Z = k + h, $ = b - l, B *= v, tt = W, et = e(d), it = C, o < .85 ? J = 3 : (J = 5.66 * Math.pow(o - .85, .39)) < 3 && (J = 3), dt = 1 / (1 / (y * (ot = 1 + .25 * (at = 1.52 / (o - l / 58.2 + .6944) - .1835)) * J) + (nt = .155 * at) / (y * (.45 * J / (rt = J + it) * (1 - (st = 1 / (1 + .155 * ot * rt * at))) / (J / rt - .45 * st))));
        var mt = 100;
        for (Q = d - Z / (lt = 1 / (1 / (ot * rt) + nt)); Math.abs(mt) > .01;) mt = (X = Q - 1e-4 * (ct = Z - lt * (d - Q) - tt * dt * (et - .5 * e(Q))) / (Z - lt * (d - (Q + 1e-4)) - tt * dt * (et - .5 * e(Q + 1e-4)) - ct)) - Q, Q = X;
        return X;
    }

    pd.Comfort = function () {
        this.dryBulbTemperature = 21, this.relativeHumidity = 60, this.clothingLevel = 1, this.metabolicRate = 1, this.externalWork = 0, this.meanRadiantTemperature = 20, this.airVelocity = .5, this.meanOutdoorTemperature = 19, this.thermalMassEfficacy = .5, this.solarGainsEfficacy = .25, this.internalHeatGains = .25, this.PMV = 0, this.PPD = 0, this.solarExposure = 0;
    }, pd.Comfort.prototype._checkValues = function () {
        return this.dryBulbTemperature > 100 && (this.dryBulbTemperature = 100), this.dryBulbTemperature < -50 && (this.dryBulbTemperature = -50), this.relativeHumidity > 100 && (this.relativeHumidity = 100), this.relativeHumidity < 0 && (this.relativeHumidity = 0), this.meanRadiantTemperature > 100 && (this.meanRadiantTemperature = 100), this.meanRadiantTemperature < -50 && (this.meanRadiantTemperature = -50), this.airVelocity > 2 && (this.airVelocity = 2), this.airVelocity < 0 && (this.airVelocity = 0), this.clothingLevel > 4 && (this.clothingLevel = 4), this.clothingLevel < 0 && (this.clothingLevel = 0), this.metabolicRate > 4 && (this.metabolicRate = 4), this.metabolicRate < 0 && (this.metabolicRate = 0), this.externalWork > 4 && (this.externalWork = 4), this.externalWork < 0 && (this.externalWork = 0), this;
    }, pd.Comfort.prototype.set = function (t) {
        return t = t || {}, this.dryBulbTemperature = pd.toNumber(t.dryBulbTemperature, this.dryBulbTemperature), this.meanRadiantTemperature = pd.toNumber(t.meanRadiantTemperature, this.meanRadiantTemperature), this.airVelocity = pd.toNumber(t.airVelocity, this.airVelocity), this.relativeHumidity = pd.toNumber(t.relativeHumidity, this.relativeHumidity), this.metabolicRate = pd.toNumber(t.metabolicRate, this.metabolicRate), this.clothingLevel = pd.toNumber(t.clothingLevel, this.clothingLevel), this.externalWork = pd.toNumber(t.externalWork, this.externalWork), this.PMV = 0, this.PPD = 0, this._checkValues(), this;
    }, pd.Comfort.prototype.calcAdaptiveCLO = function (t) {
        return (e = pd.toNumber(t, 16)) < -5 ? 1 : e < 5 ? .818 - .0364 * e : e < 26 ? Math.pow(10, -.1635 - .0066 * e) : .46;
        var e;
    }, pd.Comfort.prototype.calcPMV = function () {
        this._checkValues();
        var t = i(this.dryBulbTemperature, this.relativeHumidity, this.meanRadiantTemperature, this.airVelocity, this.metabolicRate, this.clothingLevel, this.externalWork);
        return this.PMV = t.pmv, this.PPD = t.ppd, this;
    }, pd.Comfort.prototype.calcPMVandSET = function () {
        this._checkValues();
        var t = i(this.dryBulbTemperature, this.relativeHumidity, this.meanRadiantTemperature, this.airVelocity, this.metabolicRate, this.clothingLevel, this.externalWork);
        return pd.isNumeric(t.set) ? this.SET = t.set : this.SET = r(this.dryBulbTemperature, this.relativeHumidity, this.meanRadiantTemperature, this.airVelocity, this.metabolicRate, this.clothingLevel, this.externalWork), this.PMV = t.pmv, this.PPD = t.ppd, this;
    }, pd.Comfort.prototype.compliesASH55 = function (t) {
        return this._checkValues(), t = pd.toNumber(t, this.meanOutdoorTemperature), e = this.dryBulbTemperature, i = this.meanRadiantTemperature, r = t, a = this.airVelocity, n = {}, s = 0, a > .3 & (o = (e + i) / 2) >= 25 && (s = a >= .9 ? pd.mapTo(a, .9, 1.2, 1.8, 2.2) : 2 * a), n.tComf = .31 * r + 17.8, n.tComf80Lower = n.tComf - 3.5, n.tComf80Upper = n.tComf + 3.5 + s, n.tComf90Lower = n.tComf - 2.5, n.tComf90Upper = n.tComf + 2.5 + s, n.acceptability80 = !1, n.acceptability90 = !1, pd.isBetween(o, n.tComf90Lower, n.tComf90Upper) ? n.acceptability80 = n.acceptability90 = !0 : pd.isBetween(o, n.tComf80Lower, n.tComf80Upper) && (n.acceptability80 = !0), n;
        var e, i, r, a, n, o, s;
    }, pd.Comfort.prototype.compliesEN15251 = function (t) {
        return this._checkValues(), t = pd.toNumber(t, this.meanOutdoorTemperature), e = this.dryBulbTemperature, i = this.meanRadiantTemperature, r = t, a = this.airVelocity, n = {}, o = .5 * (e + i), s = 0, a >= .2 && o > 25 && (s = 1.7856 * Math.log(a) + 2.9835), n.acceptabilityI = !1, n.acceptabilityII = !1, n.acceptabilityIII = !1, n.tComf = .33 * r + 18.8, n.tComfLow = 23.75, r > 15 ? (n.tComfILower = n.tComf - 2, n.tComfIUpper = n.tComf + 2 + s, n.tComfIILower = n.tComf - 3, n.tComfIIUpper = n.tComf + 3 + s, n.tComfIIILower = n.tComf - 4, n.tComfIIIUpper = n.tComf + 4 + s) : 12.73 < r && r <= 15 ? (n.tComfILower = n.tComfLow - 2, n.tComfIUpper = n.tComf + 2 + s, n.tComfIILower = n.tComfLow - 3, n.tComfIIUpper = n.tComf + 3 + s, n.tComfIIILower = n.tComfLow - 4, n.tComfIIIUpper = n.tComf + 4 + s) : (n.tComfILower = n.tComfLow - 2, n.tComfIUpper = n.tComf + 2, n.tComfIILower = n.tComfLow - 3, n.tComfIIUpper = n.tComf + 3 + s, n.tComfIIILower = n.tComfLow - 4, n.tComfIIIUpper = n.tComf + 4 + s), pd.isBetween(o, n.tComfILower, n.tComfIUpper) ? n.acceptabilityI = n.acceptabilityII = n.acceptabilityIII = !0 : pd.isBetween(o, n.tComfIILower, n.tComfIIUpper) ? n.acceptabilityII = n.acceptabilityIII = !0 : pd.isBetween(o, n.tComfIIILower, n.tComfIIIUpper) && (n.acceptabilityIII = !0), n;
        var e, i, r, a, n, o, s;
    }, pd.Comfort.prototype.calcHeatIndex = function (t, e) {
        var i = 1.8 * t + 32, r = i;
        if (i > 40) {
            var a = .5 * (i + (61 + 1.2 * (i - 68) + .094 * e));
            if (a > 79) {
                if (r = 2.04901523 * i - 42.379 + 10.14333127 * e - .22475541 * i * e - 6.83783 * Math.pow(10, -3) * Math.pow(i, 2) - 5.481717 * Math.pow(10, -2) * Math.pow(e, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(i, 2) * e + 8.5282 * Math.pow(10, -4) * i * Math.pow(e, 2) - 1.99 * Math.pow(10, -6) * Math.pow(i, 2) * Math.pow(e, 2), e <= 13 && i >= 80 && i <= 112) r = r - (13 - e) / 4 * Math.sqrt((17 - Math.abs(i - 95)) / 17); else if (e > 85 && i >= 80 && i <= 87) {
                    r += (e - 85) / 10 * ((87 - i) / 5);
                }
            } else r = a;
        }
        return this.solarExposure > 0 && (r += 8 * pd.constrainTo(this.solarExposure, 0, 1)), pd.snapTo(.556 * (r - 32), .1);
    }, pd.Comfort.prototype.calcHumidex = function (t, e) {
        var i = "", r = "", a = "", n = t + 273,
            o = Math.pow(10, -2937.4 / n - 4.9283 * Math.log(n) / Math.LN10 + 23.5471) * e / 100,
            s = pd.snapTo(t + 5 * (o - 10) / 9, .1);
        return e < 0 || e > 100 ? (i = "INVALID", r = "Relative humidity must be a value between 0 and 100,", a = "#cc0000") : (r = "The Humidex is: " + s + "\n", s < t && (s = t, a = "#fff"), i = s < 30 ? "Little or no discomfort." : s < 35 ? "Noticeable discomfort." : s < 40 ? "Evident discomfort." : s < 45 ? "Intense discomfort, avoid exertion." : s < 54 ? "Dangerous discomfort." : "Heat stroke probable.", s > 0 && s < 25 && (r += "No discomfort.", a = "#99ff66"), s < 30 ? (r += "Provide water as required.", a = "#ffff99") : s < 34 ? (r += "Encourage workers to drink extra water, start recording hourly temperature and relative humidity.", a = "#ffff00") : s < 38 ? (r += "Notify workers that they need to drink extra water, ensure workers are trained to recognize symptoms.", a = "#ffdf00") : s < 40 ? (r += "Warning: Only work with 15 minutes relief per hour should continue - provide 240 mL of water every 20 minutes.", a = "#ffaf00") : s < 42 ? (r += "Warning: Only work with 30 minutes relief per hour should continue - provide 240 mL of water every 20 minutes.", a = "#ff8f00") : s < 45 ? (r += "Warning: Only work with 45 minutes relief per hour should continue - provide 240 mL of water every 20 minutes.", a = "#ff4f00") : (r += "Danger: Only medically supervised work can continue.", a = "#ff0000")), {
            value: s, comfort: i, comment: r, color: a
        };
    };
}(), (pdSVG = pdSVG || {}).RangeSelector = function (t) {
    var e = pdSVG.DATA_FORMAT_UNKNOWN || 0, i = pdSVG.DATA_FORMAT_DAY_HOUR || 1, r = pdSVG.DATA_FORMAT_HOURLY || 2,
        a = pdSVG.DATA_FORMAT_DAILY || 3, n = pdSVG.DATA_FORMAT_MONTHLY || 4, o = this;
    if (null == (t = t || {}).elementId) throw new Error("A valid 'elementId' is required and must be an existing SVG element in the DOM.");
    var s = !1, l = t.elementId, d = 0, p = !1, u = 20, c = 105, h = 15, m = e, f = [], x = 0, y = 35, g = 1, b = 10,
        v = 5, M = 0, T = pd.Align.LEFT, A = null, C = !1, D = 21, S = 6, O = 0, k = 364, F = 1, P = 30, E = 7, R = 365,
        N = 2001, H = 0, w = !0, I = 0, L = "", V = R, G = 0, _ = null, B = R - 1, U = null, W = kt, Y = null, j = null,
        z = "http://www.w3.org/2000/svg", K = $(l), X = K[0], Q = K, J = 640, q = 480, Z = {
            top: 25, right: 0, bottom: 0, left: 0
        }, tt = J - (Z.left + Z.right), et = q - (Z.top + Z.bottom), it = et / (y - x), rt = tt / (k - O), at = 1,
        nt = document.createElementNS(z, "g"), ot = document.createElementNS(z, "g"),
        st = document.createElementNS(z, "g"), lt = document.createElementNS(z, "g"),
        dt = document.createElementNS(z, "g"), pt = document.createElementNS(z, "g"), ut = null, ct = null, ht = null,
        mt = null, ft = null, xt = null, yt = [], gt = null, bt = null, vt = .5, Mt = "blue", Tt = "blue", At = "blue",
        Ct = !0;

    function Dt(t) {
        return Z.left + (t - O) * rt;
    }

    function St(t) {
        return q - Z.bottom - (t - x) * it;
    }

    function Ot() {
        var t, e = Math.max(1, +K.width()), i = Math.max(1, +K.height());
        J = Math.max(100, e), q = Math.max(50, i), q / i * pdDOM.pageScale, at = J / e * pdDOM.pageScale, X.setAttributeNS(null, "viewBox", "0 0 " + J + " " + q), Ct = !1, k <= O && (k = O + 1), t = Math.max(1e-6, k - O), F < 1e-4 * t && (F = .001 * t), E < .001 * t && (E = .01 * t), P < .01 * t && (P = .1 * t), y <= x && (y = x + 1), g < 1e-4 * (t = y - x) && (g = .001 * t), v < .001 * t && (v = .01 * t), b < .001 * t && (b = .1 * t), tt = J - (Z.left + Z.right), et = q - (Z.bottom + Z.top), it = et / (y - x), rt = tt / (k - O), Rt();
    }

    function kt(t) {
        return pd.toStringWithPrecisionRange(t, I, 9);
    }

    function Ft(t) {
        return pd.toStringWithLeadingZeros(t, 2);
    }

    function Pt(t) {
        return pd.DateTime.formatMonthName(t);
    }

    function Et() {
        s && (Ct && Ot(), K.find("[class*=background]").empty(), C && nt.appendChild(pdDOM.svgElem("rect", {
            x: Z.left, y: Z.top, width: tt, height: et, fill: "url(#heatGradient)", stroke: "none", opacity: .15
        })), function () {
            K.find("[class*=range]").empty(), dt.appendChild(ht = pdDOM.svgElem("rect", {
                stroke: "none", "fill-opacity": .75, fill: "white"
            })), dt.appendChild(mt = pdDOM.svgElem("rect", {
                stroke: "none", "fill-opacity": .75, fill: "white"
            })), V < .5 ? (mt.setAttributeNS(null, "display", "none"), ht.setAttributeNS(null, "display", "none")) : (mt.setAttributeNS(null, "display", "inline"), ht.setAttributeNS(null, "display", "inline"));
            dt.appendChild(xt = pdDOM.svgElem("polyline", {
                "class": "line-std"
            })), dt.appendChild(ft = pdDOM.svgElem("polyline", {
                "marker-start": "url(#markerHandle)",
                "marker-end": "url(#markerHandle)",
                "class": "stroke-none fill-none"
            })), Nt();
        }(), function () {
            var t, e = -2, i = Dt(O), r = Dt(k), a = i, n = -6, o = "end", s = "0.4em";
            L && y - .5 * v;
            Z.left < 15 && (n = 6, x, y, o = "start", e = 2, major_tick_size = 4);
            K.find("[class*=grid]").empty(), t = Math.round(St(x)), st.appendChild(pdDOM.svgElem("line", {
                "class": "line-grid", x1: i, y1: t, x2: r, y2: t
            })), t = Math.round(St(y)), st.appendChild(pdDOM.svgElem("line", {
                "class": "line-grid", x1: i, y1: t, x2: r, y2: t
            })), A.min = x, A.max = y, A.tickMinor = v, A.tickMajor = b, A.scale = it, A.units = L;
            var a = T == pd.Align.LEFT ? i : r, l = T;
            T == pd.Align.LEFT && Z.left < 20 ? (pd.isArray(A.gridLines) && (A.gridLines[0] = i + 30), l = pd.Align.RIGHT) : T == pd.Align.RIGHT && Z.right < 20 && (pd.isArray(A.gridLines) && (A.gridLines[0] = r - 30), l = pd.Align.LEFT);
            if (A.renderVertical(st, Z, a, l, !1), i = St(x), r = St(y), n = 0, o = "middle", s = Z.bottom < 10 ? "-0.55em" : "1.1em", w) {
                var d, p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 364];
                d = J < 299 ? ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Z.bottom < 10 && (n = 2);
                for (var u = 0; u < 12; ++u) {
                    t = Math.round(Dt(p[u])), st.appendChild(pdDOM.svgElem("line", {
                        "class": "line-grid", x1: t, y1: i, x2: t, y2: r
                    }));
                    for (var c = p[u + 1], h = p[u] + E; h < c; h += E) t = Math.round(Dt(h)), st.appendChild(pdDOM.svgElem("line", {
                        "class": "line-grid", x1: t, y1: i, x2: t, y2: i - e
                    }));
                    h = .5 * (p[u] + p[u + 1]), t = Math.round(Dt(h)), st.appendChild(pdDOM.svgText(d[u], {
                        "class": "text-grid", "text-anchor": o, x: t + n, y: i, dy: s
                    }));
                }
                t = Math.round(Dt(k)), st.appendChild(pdDOM.svgElem("line", {
                    "class": "line-grid", x1: t, y1: i, x2: t, y2: r
                }));
            } else {
                Z.bottom < 10 && H < .1 * P && (o = "start", n = 2);
                for (var h = O; h <= k; h += P) t = Math.round(Dt(h)), st.appendChild(pdDOM.svgElem("line", {
                    "class": "line-grid", x1: t, y1: i, x2: t, y2: r
                })), h <= k - H && (t = Math.round(Dt(h + H)), st.appendChild(pdDOM.svgElem("line", {
                    "class": "line-grid", x1: t, y1: i, x2: t, y2: i - e
                })), (J > 420 || h % 2 == 0) && st.appendChild(pdDOM.svgText(W(h), {
                    "class": "text-grid", "text-anchor": o, x: t + n, y: i, dy: s
                })));
                if (E > 0 && !pd.closeTo(H, E, .01 * E)) for (var h = O; h < k; h += E) t = Math.round(Dt(h)), st.appendChild(pdDOM.svgElem("line", {
                    "class": "line-grid", x1: t, y1: i, x2: t, y2: i - e
                }));
            }
        }(), K.find("[class*=data]").empty(), lt.appendChild(gt = pdDOM.svgElem("polyline", {
            opacity: vt, stroke: Mt, fill: Tt, "fill-opacity": .75
        })), lt.appendChild(bt = pdDOM.svgElem("polyline", {
            "class": "stroke-std", stroke: At, fill: "none"
        })), function () {
            if (f && f.length) {
                var t, o, s, l, d, p, u = [], c = [], h = [], g = "";
                if (m == e && (f.length >= 8760 && !pd.isArray(f[0]) ? m = r : f.length >= 365 ? m = pd.isArray(f[0]) && 24 == f[0].length ? i : a : 12 == f.length && (pd.isArray(f[0]) || (m = n))), m == i) {
                    for (var b = Math.round(O); b <= k; b += F) {
                        p = f[b], s = l = d = p[0];
                        for (var v = 1; v < 24; ++v) o = p[v], l > o && (l = o), s < o && (s = o), d += o;
                        d /= 24, t = Dt(b).toFixed(1), g += t + "," + St(d).toFixed(1) + " ", c.push(St(s).toFixed(1)), h.push(St(l).toFixed(1)), u.push(t);
                    }
                    bt.setAttributeNS(null, "points", g);
                } else if (m == r) {
                    for (var M = 0, b = Math.round(O); b <= k; b += F) {
                        s = l = d = f[M++];
                        for (var v = 1; v < 24; ++v) o = f[M++], l > o && (l = o), s < o && (s = o), d += o;
                        d /= 24, t = Dt(b).toFixed(1), g += t + "," + St(d).toFixed(1) + " ", c.push(St(s).toFixed(1)), h.push(St(l).toFixed(1)), u.push(t);
                    }
                    bt.setAttributeNS(null, "points", g);
                } else if (m == a) {
                    for (b = Math.round(O); b <= k; b += F) t = Dt(b).toFixed(1), d = f[b], g += t + "," + St(d).toFixed(1) + " ";
                    bt.setAttributeNS(null, "points", g), gt.setAttributeNS(null, "points", "");
                } else if (m == n) {
                    for (var T = 0, A = 0; A < 12 && ((b = A >= 11 ? 364 : pd.DateTime.getDOY(1, A + 1, N)) >= O && (d = f[A], t = T <= O ? Dt(O).toFixed(1) : Dt(T).toFixed(1), g += t + "," + St(d).toFixed(1) + " ", t = b >= k ? Dt(k).toFixed(1) : Dt(b).toFixed(1), g += t + "," + St(d).toFixed(1) + " "), !(b >= k)); ++A) T = b;
                    bt.setAttributeNS(null, "points", g), gt.setAttributeNS(null, "points", "");
                }
                if (m == r || m == i) {
                    g = "";
                    var C = u.length;
                    for (g += u[0] + "," + St(y).toFixed(1) + " ", b = 0; b < C; ++b) g += u[b] + "," + c[b] + " ";
                    for (b = C - 1; b > 0; --b) g += u[b] + "," + h[b] + " ";
                    g += u[0] + "," + St(x).toFixed(1) + " ", gt.setAttributeNS(null, "points", g);
                }
            }
        }(), K.find("[class*=chart-tooltip]").empty(), pt.setAttributeNS(null, "display", "none"), pt.appendChild(ct = pdDOM.svgElem("rect", {
            "class": "tooltip-rect", rx: 4, ry: 4, x: .5 * -c, y: 0, width: c, height: u
        })), pt.appendChild(ut = pdDOM.svgText("0.00", {
            "class": "tooltip", "text-anchor": "middle", x: 0, y: .5 * u, dy: "0.4em"
        })));
    }

    function Rt() {
        if (yt[0]) {
            var t = .5 * S, e = Math.max(.001, y - x), i = pd.constrainTo((D - t - x) / e * 100, 0, 100);
            yt[0].setAttributeNS(null, "offset", i.toFixed(1) + "%"), i = pd.constrainTo((D - x) / e * 100, 0, 100), yt[1].setAttributeNS(null, "offset", i.toFixed(1) + "%"), i = pd.constrainTo((D + t - x) / e * 100, 0, 100), yt[2].setAttributeNS(null, "offset", i.toFixed(1) + "%");
        }
    }

    function Nt() {
        var t, e, i = "";
        B > G + V && (B = G + V), t = Dt(O), e = St(y), M > .5 ? i += t.toFixed(0) + ",-" + M.toFixed(0) + " " : Z.top > 0 && (i += t.toFixed(0) + ",0 "), i += t.toFixed(0) + "," + e.toFixed(0) + " ", i += (t = Dt(G)).toFixed(0) + "," + e.toFixed(0) + " ", e = St(x), i += t.toFixed(0) + "," + e.toFixed(0) + " ", i += (t = Dt(B)).toFixed(0) + "," + e.toFixed(0) + " ", e = St(y), i += t.toFixed(0) + "," + e.toFixed(0) + " ", i += (t = Dt(k)).toFixed(0) + "," + e.toFixed(0) + " ", M > .5 ? i += t.toFixed(0) + ",-" + M.toFixed(0) + " " : Z.top > 0 && (i += t.toFixed(0) + ",0 "), xt.setAttributeNS(null, "points", i), t = Dt(O), e = St(y), ht.setAttributeNS(null, "x", t), ht.setAttributeNS(null, "y", e), ht.setAttributeNS(null, "width", Math.max(0, Dt(G) - t)), ht.setAttributeNS(null, "height", et), t = Dt(B), mt.setAttributeNS(null, "x", t), mt.setAttributeNS(null, "y", e), mt.setAttributeNS(null, "width", Math.max(0, Dt(k) - t)), mt.setAttributeNS(null, "height", et), i = "", t = Dt(G), e = .5 * (St(y) + St(x)), i += t.toFixed(0) + "," + e.toFixed(0) + " ", i += (t = Dt(B)).toFixed(0) + "," + e.toFixed(0) + " ", ft.setAttributeNS(null, "points", i), _ && _(G), U && U(B);
    }

    this.show = function (t) {
        return t ? K.show() : K.hide(), o;
    }, this.width = function (t) {
        return arguments.length ? (J = pd.toInteger(t, J), K.width(J), o.rescale(), o) : J;
    }, this.height = function (t) {
        return arguments.length ? (q = pd.toInteger(t, q), K.height(q), o.rescale(), o) : q;
    }, this.throttledRescale = function (t) {
        return arguments.length ? (d = pd.constrainTo(parseInt(t, 10), 0, 5e3), o) : d;
    }, this.paddingLeft = function (t) {
        return arguments.length ? (Z.left = Math.max(0, parseInt(t, 10)), o.rescale(), o) : Z.left;
    }, this.paddingRight = function (t) {
        return arguments.length ? (Z.right = Math.max(0, parseInt(t, 10)), o.rescale(), o) : Z.right;
    }, this.paddingTop = function (t) {
        return arguments.length ? (Z.top = Math.max(0, parseInt(t, 10)), o.rescale(), o) : Z.top;
    }, this.paddingBottom = function (t) {
        return arguments.length ? (Z.bottom = Math.max(0, parseInt(t, 10)), o.rescale(), o) : Z.bottom;
    }, this.detailMode = function (t) {
        return arguments.length ? (p = !!t, o) : p;
    }, this.setDataColors = function (t, e, i, r) {
        return Tt = t || "none", Mt = e || "none", At = i || "none", vt = pd.toNumber(r, vt), o;
    }, this.showComfortBand = function (t) {
        return arguments.length ? ((t = pd.toBoolean(t, C)) != C && (C = t, t && (Mt = "url(#heatGradient)", Tt = "url(#heatGradient)"), o.rescale()), o) : C;
    }, this.comfortTemperature = function (t) {
        return arguments.length ? (t = pd.toNumber(t, D), pd.closeTo(t, D) || (D = t, Rt()), o) : D;
    }, this.comfortBandWidth = function (t) {
        return arguments.length ? (t = Math.max(.1, pd.toNumber(t, S)), pd.closeTo(t, S) || (S = t, Rt()), o) : S;
    }, this.handleKeyDown = function (t) {
        if (!t.ctrlKey && !t.altKey && !t.metaKey) {
            var e = t.keyCode || t.which;
            if (27 == e) return !1;
            if (37 == e) return !0;
            if (38 == e) return !0;
            if (39 == e) return !0;
            if (40 == e) return !0;
        }
        return !1;
    }, this.set = function (t) {
        var e;
        if ("detailMode" in (t = t || {}) && (p = pd.toBoolean(t.detailMode, p)), "thumbRadius" in t && (h = Math.max(0, pd.toNumber(t.thumbRadius, h))), "leapYear" in t) {
            var i = pd.toBoolean(t.leapYear, p);
            R = i ? 366 : 365, N = i ? 2e3 : 2001;
        }
        if ("daysInYear" in t) {
            i = pd.toNumber(t.daysInYear, R) > 365;
            R = i ? 366 : 365, N = i ? 2e3 : 2001;
        }
        if ("tooltipWidth" in t && (e = pd.toInteger(t.tooltipWidth, c), pd.closeTo(e, c, 1) || (c = e, ct && (ct.setAttributeNS(null, "x", .5 * -c), ct.setAttributeNS(null, "width", c)))), "tooltipHeight" in t && (e = pd.toInteger(t.tooltipHeight, u), pd.closeTo(e, u, 1) || (u = e, ct && ct.setAttributeNS(null, "height", u))), "throttledRescale" in t && (d = pd.toInteger(t.throttledRescale, d)), "repeatTimerDelay" in t && (g_repeatTimerDelay = pd.toInteger(t.repeatTimerDelay, g_repeatTimerDelay)), "repeatTimerPeriod" in t && (g_repeatTimerPeriod = pd.toInteger(t.repeatTimerPeriod, g_repeatTimerPeriod)), "paddingTop" in t && (Z.top = Math.max(0, pd.toInteger(t.paddingTop, 0))), "paddingRight" in t && (Z.right = Math.max(0, pd.toInteger(t.paddingRight, 0))), "paddingBottom" in t && (Z.bottom = Math.max(0, pd.toInteger(t.paddingBottom, 0))), "paddingLeft" in t && (Z.left = Math.max(0, pd.toInteger(t.paddingLeft, 0))), pd.isArray(t.data)) {
            var r;
            if (f = t.data, k = f.length - 1, F = 1, O = 0, k > 0) {
                var a = f.length;
                x = y = f[0];
                for (var n = 1; n < a; ++n) r = f[0], x > r && (x = r), y < r && (y = r);
            }
            pd.isNumeric(t.snap) && (y = pd.snapTo(y + .5 * t.snap), x = pd.snapTo(x - .5 * t.snap));
            var s = y - x;
            (g = 1) > s / 1e3 && (g = .001 * s), v = .05 * s, b = .1 * s, kt;
        }
        if ("xMin" in t && (O = pd.toNumber(t.xMin, O)), "xMax" in t && (k = pd.toNumber(t.xMax, k)), "xNodeOffset" in t && (H = pd.toNumber(t.xNodeOffset, H)), "xTickMajor" in t && (P = pd.toNumber(t.xTickMajor, P)), "xTickMinor" in t && (E = pd.toNumber(t.xTickMinor, E)), "yMin" in t && (x = pd.toNumber(t.yMin, x)), "yMax" in t && (y = pd.toNumber(t.yMax, y)), "yTickMajor" in t && (b = pd.toNumber(t.yTickMajor, b)), "yTickMinor" in t && (v = pd.toNumber(t.yTickMinor, v)), "yStep" in t && (g = pd.toNumber(t.yStep, g)), "extendRange" in t && (M = pd.toInteger(t.extendRange, M), M = Math.max(0, M)), "axisAlign" in t && (T = pd.toInteger(t.axisAlign, T)), "rangeFill" in t && (Tt = t.rangeFill), "rangeStroke" in t && (Mt = t.rangeStroke), "avgStroke" in t && (At = t.avgStroke), "rangeOpacity" in t && (vt = pd.constrainTo(pd.toNumber(t.yStep, vt), 0, 1)), "showComfortBand" in t && this.showComfortBand(pd.toBoolean(t.showComfortBand, C)), "comfortTemperature" in t && (D = pd.toNumber(t.comfortTemperature, D)), "comfortBandWidth" in t && (S = pd.toNumber(t.comfortBandWidth, S)), "rangeMax" in t && (V = Math.round(pd.constrainTo(t.rangeMax, 0, R)), c = V > .5 ? 105 : 55), "rangeStart" in t && (G = Math.round(Math.max(+t.rangeStart, O))), "rangeEnd" in t && (B = Math.round(Math.max(+t.rangeEnd, k))), B > G + V && (B = G + V), "rangeStartObservable" in t && (_ = t.rangeStartObservable), "rangeEndObservable" in t && (U = t.rangeEndObservable), "xFormat" in t) if (pd.isString(t.xFormat)) switch (t.xFormat.toLowerCase()) {
            case "hours":
                W = Ft;
                break;

            case "months":
                W = Pt;
                break;

            default:
                W = kt;
        } else W = t.xFormat;
        return "yFormat" in t && t.yFormat, "decimals" in t && (I = pd.toInteger(t.decimals, 0)), "useUnitsAsTitle" in t && A && (A.useUnitsAsTitle = pd.toBoolean(t.useUnitsAsTitle, !1)), "focusId" in t && (Q = t.focusId ? $(t.focusId) : null), o.rescale(), o;
    }, this.setData = function (t, s) {
        if (pd.isArray(t)) {
            var l, d, p = e;
            if (t.length >= 8760 && !pd.isArray(t[0]) ? p = r : t.length >= 365 ? pd.isArray(t[0]) ? t[0].length >= 24 && (p = i) : p = a : 12 == t.length && (pd.isArray(t[0]) || (p = n)), p == e) return console.warn("ERROR: Invalid data, must be either array[8760] or array[365/6][24] format."), o;
            if (m = p, f = t, O = 0, k = 364, F = 1, I = pd.toInteger(s.decimals, 0), g = pd.toNumber(s.step, 1), m == i) {
                x = y = f[0][0];
                for (var u = Math.round(O); u <= k; u += F) {
                    d = f[u];
                    for (var c = 0; c < 24; ++c) l = d[c], x > l && (x = l), y < l && (y = l);
                }
            } else if (m == r) {
                var h = 0;
                x = y = f[0];
                for (u = Math.round(O); u <= k; u += F) for (c = 0; c < 24; ++c) l = f[h++], x > l && (x = l), y < l && (y = l);
            } else if (m == a) for (u = Math.round(O); u <= k; u += F) l = f[u], x > l && (x = l), y < l && (y = l); else if (m == n) for (u = 0; u < 12; ++u) l = f[u], x > l && (x = l), y < l && (y = l);
            var M = 5 * g;
            y = pd.snapTo(y + .5 * M, M), x = pd.snapTo(x - .5 * M, M);
            var T = Math.max(1e-6, y - x);
            g > T / 1e3 && (g = .001 * T), b = pd.getTickIncrement(T, 5), v = .25 * b, kt, I = 0, s ? o.set(s) : o.rescale();
        }
        return o;
    }, this.setWeatherData = function (t) {
        if (t && pd.isArray(t.data)) {
            var e, r;
            if (f = t.data, m = i, k = f.length - 1, F = 1, O = 0, I = pd.toInteger(t.decimals, 0), g = pd.toNumber(t.step, 1), x = 0, y = 35, k > 0) for (var a, n = f.length, s = 0; s < n; ++s) {
                e = f[s], a = f[0].length;
                for (var l = 0; l < a; ++l) r = e[l], x > r && (x = r), y < r && (y = r);
            }
            var d = 5 * g;
            y = pd.snapTo(y + .5 * d, d), x = pd.snapTo(x - .5 * d, d);
            var p = Math.max(1e-6, y - x);
            g > p / 1e3 && (g = .001 * p), v = 5, b = 15, kt, I = 0, o.rescale();
        }
        return o;
    }, this.setAnnualWeatherData = function (t, e) {
        if (t && pd.isArray(t.data)) {
            var r, a, n = !0;
            if (f = t.data, m = i, k = f.length - 1, F = 1, O = 0, L = t.units || "", I = pd.toInteger(t.decimals, 0), g = pd.toNumber(t.step, 1), x = 0, y = 1, e && ("yMin" in e && (x = pd.toNumber(e.yMin, x), n = !1), "yMax" in e && (y = pd.toNumber(e.yMax, y), n = !1), "decimals" in e && (I = pd.toInteger(e.decimals, I)), "step" in e && (g = pd.toNumber(e.step, g)), "units" in e && pd.isString(e.units) && (L = e.units)), k > 0) {
                var s, l = f.length;
                n && (x = y = f[0][0]);
                for (var d = 0; d < l; ++d) {
                    r = f[d], s = f[0].length;
                    for (var p = 0; p < s; ++p) a = r[p], x > a && (x = a), y < a && (y = a);
                }
            }
            var u = 5 * g;
            y = pd.snapTo(y + .5 * u, u), x = pd.snapTo(x - .5 * u, u);
            var c = Math.max(1e-6, y - x);
            g > c / 1e3 && (g = .001 * c), v = pd.getTickIncrement(c, 15), b = 5 * v, kt, e ? ("yMin" in e && (e.yMin = x), "yMax" in e && (e.yMax = y), o.set(e)) : o.rescale();
        }
        return Ot(), o;
    }, this.setRange = function (t, e) {
        G = Math.round(Math.max(+t, O)), B = Math.round(Math.min(+e, k)), Nt();
    };
    var Ht = null;

    function wt() {
        s || (s = !0), Ht = null, Ot(), Et();
    }

    this.rescale = function () {
        s ? d > 4 ? null == Ht && (Ht = setTimeout(wt, d)) : wt() : null == Ht && (Ht = setTimeout(wt, 250));
    }, this.refresh = function () {
        Et();
    };
    var It = 1, Lt = !1, Vt = !1;

    function Gt(t) {
        Lt || (pt.setAttributeNS(null, "display", "inline"), Lt = !0), Vt && !t && (pdDOM.getGlobalAnimationQueue().remove(_t), Vt = !1), It < .999 && (pt.setAttributeNS(null, "opacity", 1), It = 1), function () {
            if (Lt) {
                var t, e, i = .5 * c;
                if (V < .5) e = pd.DateTime.formatDate(G, N), t = Dt(G); else if (Ut > 0) {
                    var r = 1 == Ut ? G : B;
                    e = (1 == Ut ? "Start: " : "End: ") + pd.DateTime.formatDate(r, N), t = Dt(r);
                } else e = pd.DateTime.formatAsMMMDD(G, N) + " to " + pd.DateTime.formatAsMMMDD(B, N), t = Dt(.5 * (G + B));
                t < i + 5 && (t = i + 5), t > J - i - 5 && (t = J - i - 5), pt.setAttributeNS(null, "transform", "translate(" + t + ", 0)"), ut.firstChild.nodeValue = e;
            }
        }();
    }

    function _t() {
        return It -= .04, pt.setAttributeNS(null, "opacity", pd.constrainTo(It, 0, 1)), It < .01 && (Vt = !1, It = 0, pt.setAttributeNS(null, "display", "none"), Lt = !1, !0);
    }

    function Bt(t) {
        t && (It = pd.toNumber(t, 1)), Lt && It > 0 && (Vt = !0, pdDOM.getGlobalAnimationQueue().addOrReplace(_t).start());
    }

    var Ut = 0, Wt = 0, Yt = 0, jt = !1;
    return pdDOM.Interaction.makeInteractive(X, {
        onpress: function (t) {
            if (Q && Q.focus(), t.button >= 0 && t.button < 2) {
                var e = t.x * at;
                Ut = 0, Wt = G, Yt = B, jt = !1, V > .5 && (Math.abs(e - Dt(G)) < h && (Ut = 1), Math.abs(e - Dt(B)) < h && (Ut = 2)), Gt();
            }
        }, ondrag: function (t) {
            if (t.button >= 0) {
                var e = B - G, i = t.getDragDistanceX() * at / rt, r = G, a = B;
                if (1 == t.button) pd.closeTo(t.scale, 1) || (Ut = -1, i = t.scale < 1 ? -t.scale : t.scale, (a = Math.round(pd.constrainTo(a + i, 0, R))) < (r = Math.round(pd.constrainTo(r - i, 0, R))) && (r = a = Math.round(.5 * (r + a)))); else switch (Ut) {
                    case 0:
                        t.shiftKey ? (i > 0 ? (a = pd.DateTime.snapToNearestMonth(Yt + i, N), r = pd.DateTime.snapToNearestMonth(a - e, N)) : (r = pd.DateTime.snapToNearestMonth(Wt + i, N), a = pd.DateTime.snapToNearestMonth(r + e, N)), a > r + 15 && a < 360 && a--) : i > 0 ? r = (a = pd.constrainTo(Yt + i, O, k)) - e : a = (r = pd.constrainTo(Wt + i, O, k)) + e;
                        break;

                    case 1:
                        0 == t.button && a < (r = t.shiftKey ? pd.DateTime.snapToNearestMonth(Wt + i, N) : pd.constrainTo(Wt + i, O, k)) && (a = r);
                        break;

                    case 2:
                        0 == t.button && (t.shiftKey ? (a = pd.DateTime.snapToNearestMonth(Yt + i, N)) > r + 15 && a < 360 && a-- : a = pd.constrainTo(Yt + i, O, k), r > a && (r = a));
                }
                r == G && a == B || (!jt && Y && Y(this), G = Math.round(pd.constrainTo(r, O, k)), B = Math.round(pd.constrainTo(a, O, k)), Nt(), jt = !0, Gt());
            }
        }, onrelease: function (t) {
            jt && j && j(this, G, B), jt = !1, Bt(1);
        }, onscroll: function (t) {
            if (t.delta) {
                var e, i = B - G, r = G, a = B;
                t.shiftKey ? (t.delta > 0 ? (a = pd.DateTime.snapToNearestMonth(a + 30, N), r = pd.DateTime.snapToNearestMonth(a - i, N)) : (r = pd.DateTime.snapToNearestMonth(r - 30, N), a = pd.DateTime.snapToNearestMonth(r + i, N)), a > r + 15 && a < 360 && a--) : (e = pd.sign(t.delta) * F, r = (a = pd.constrainTo(a + e, O + i, k)) - i), Ut = 0, r == G && a == B || (G = Math.round(pd.constrainTo(r, O, k)), B = Math.round(pd.constrainTo(a, O, k)), Nt(), Gt(!0), Bt(2.5));
            }
        }
    }), K.attr("xmlns", z), K.attr("class", "svg-chart " + K.attr("class")), X.style.cursor = "pointer", function () {
        K.empty();
        var t, e = document.createElementNS(z, "defs");
        X.appendChild(e), nt.setAttributeNS(null, "class", "background"), X.appendChild(nt), ot.setAttributeNS(null, "class", "selection"), X.appendChild(ot), lt.setAttributeNS(null, "class", "data"), X.appendChild(lt), st.setAttributeNS(null, "class", "grid"), X.appendChild(st), dt.setAttributeNS(null, "class", "range"), X.appendChild(dt), pt.setAttributeNS(null, "class", "chart-tooltip"), X.appendChild(pt), e.appendChild(t = pdDOM.svgElem("marker", {
            id: "markerHandle", viewBox: "0 0 12 22", markerHeight: 22, markerWidth: 12, refX: 6, refY: 11
        })), t.appendChild(pdDOM.svgElem("path", {
            "class": "stroke-black stroke-thick",
            d: "M 1,6 L 1,16 a 5,5 0 1,0 10,0 L 11,6 a 5,5 0 1,0 -10,0",
            "fill-opacity": .75,
            fill: "#FFF"
        })), t.appendChild(pdDOM.svgElem("path", {
            "class": "stroke-grid stroke-thin", d: "M 4,8 L 4,14 M 6,6 L 6,16 M 8,8 L 8,14", fill: "none"
        }));
        var i = pdDOM.svgElem("linearGradient", {
            id: "heatGradient", x1: 0, x2: 0, y1: 1, y2: 0, spreadMethod: "pad"
        });
        yt[0] = i.appendChild(pdDOM.svgElem("stop", {
            "stop-color": "#0000FF", offset: "0%"
        })), yt[1] = i.appendChild(pdDOM.svgElem("stop", {
            "stop-color": "#00FF00", offset: "50%"
        })), yt[2] = i.appendChild(pdDOM.svgElem("stop", {
            "stop-color": "#FF0000", offset: "100%"
        })), e.appendChild(i), A = new pdSVG.Axis({
            title: "", units: L, decimals: 0, min: x, max: y
        });
    }(), this.set(t), this;
}, (pdSVG = pdSVG || {}).PsychChart = function (t) {
    var e = this;
    if (null == (t = t || {}).elementId) throw new Error("A valid 'elementId' is required and must be an existing SVG element in the DOM.");
    var i = !1, r = t.elementId, a = 0, n = !1, o = 25, s = 22, l = n ? 150 : 125, d = 5 + 5 * pdDOM.devicePixelRatio,
        p = "Psychrometric Chart", u = pd.Align.LEFT, c = "", h = "", m = -5, f = 50, x = .1, y = 5, g = 1, b = f,
        v = 35.001, M = 0, T = v, A = .1, C = 5, D = 1, S = 0, O = 1, k = S, F = -1, P = !1, E = k, R = 0, N = 0, H = 1,
        w = 1, I = 100, L = null, V = null, G = !0, _ = !0, B = !0, U = !1, W = !1, Y = !1, j = !1, z = !0, K = !0,
        X = !0, Q = 2.4528, J = 1, q = 2, Z = 3, tt = -1, et = -2, it = -3, rt = -4, at = -5, nt = 0, ot = 1, st = 2,
        lt = 3, dt = 4, pt = 5, ut = 0, ct = 1, ht = 2, mt = 3, ft = 4, xt = 0, yt = "", gt = null,
        bt = new pd.Grid2D(), vt = null, Mt = null, Tt = null, At = 1, Ct = 0, Dt = 1, St = k, Ot = !1, kt = 1, Ft = 1,
        Pt = pd.Align.RIGHT, Et = !0, Rt = 1, Nt = 2, Ht = 4, wt = 8, It = 16, Lt = 32, Vt = 64, Gt = 128, _t = null,
        Bt = 0, Ut = [], Wt = new pd.Psychrometrics({
            absoluteHumidity: 7.09, relativeHumidity: 40, dryBulb: 23
        }), Yt = new pd.Comfort(), jt = new pd.Grid2D(), zt = [], Kt = !0, Xt = "http://www.w3.org/2000/svg", Qt = $(r),
        Jt = Qt[0], qt = Qt, Zt = 640, $t = 480, te = {
            top: 25, right: 25, bottom: 25, left: 25
        }, ee = Zt - (te.left + te.right), ie = $t - (te.top + te.bottom), re = ie / (T - M), ae = ee / (f - m), ne = 1,
        oe = 1, se = document.createElementNS(Xt, "g"), le = document.createElementNS(Xt, "g"),
        de = document.createElementNS(Xt, "g"), pe = document.createElementNS(Xt, "g"),
        ue = document.createElementNS(Xt, "g"), ce = document.createElementNS(Xt, "g"),
        he = document.createElementNS(Xt, "g"), me = document.createElementNS(Xt, "g"),
        fe = document.createElementNS(Xt, "g"), xe = document.createElementNS(Xt, "g"), ye = null, ge = null, be = null,
        ve = null, Me = null, Te = null, Ae = null, Ce = null, De = null, Se = null, Oe = null, ke = null, Fe = null,
        Pe = null, Ee = [], Re = !0, Ne = null, He = null;

    function we(t) {
        return t.toFixed(0);
    }

    function Ie(t) {
        return t.toFixed(1);
    }

    function Le(t) {
        return t.toFixed(2);
    }

    function Ve(t) {
        return t.toFixed(3);
    }

    var Ge = new pdUnits.Temperature(pdUnits.CELSIUS);
    Ge.axisFormat = we, Ge.tickMinor = 1, Ge.tickMajor = 5, Ge.max = f, Ge.min = m, this.getTemperatureConverter = function () {
        return Ge;
    }, this.setTemperatureUnits = function (t) {
        if (t != Ge.units) {
            Ge.set(t);
            var i = Ge.fromCelsius(m);
            Ge.min = pd.snapTo(i, Ge.tickMajor), i = Ge.fromCelsius(f), Ge.max = pd.snapTo(i, Ge.tickMajor), m = Ge.toCelsius(Ge.min), f = Ge.toCelsius(Ge.max), f = Math.max(f, m + 1), b = f, null != zt[0] && (zt[0].title = "Dry Bulb Temperature (" + Ge.getAbbrev() + ")", zt[0].units = Ge.getAbbrev(), e.rescale());
        }
        return Ge;
    };
    var _e = new pdUnits.HumidityRatio(pdUnits.GRAMSPERKILOGRAM);

    function Be() {
        return "Absolute Humidity (" + _e.getAbbrev() + ")";
    }

    _e.axisFormat = we, _e.tickMinor = 1, _e.tickMajor = 5, _e.decimals = 1, _e.max = T, _e.min = M, this.getHumidityRatioConverter = function () {
        return _e;
    }, this.setHumidityRatioUnits = function (t) {
        var i;
        if (t != _e.units) {
            switch (_e.set(t), t) {
                default:
                    _e.tickMinor = 1, _e.tickMajor = 5;
                    break;

                case pdUnits.POUNDSPERPOUND:
                case pdUnits.KILOGRAMSPERKILOGRAM:
                    _e.tickMinor = .001, _e.tickMajor = .005;
                    break;

                case pdUnits.GRAINSPERPOUND:
                    _e.tickMinor = 5, _e.tickMajor = 20;
            }
            i = _e.fromGramsPerKilogram(M), _e.min = pd.snapTo(i, _e.tickMajor), i = _e.fromGramsPerKilogram(T), _e.max = pd.snapTo(i, _e.tickMajor), M = _e.toGramsPerKilogram(_e.min), T = _e.toGramsPerKilogram(_e.max), T = Math.max(T, M + 1), null != zt[1] && (k != O && (zt[1].units = _e.getAbbrev(), zt[1].title = Be()), e.rescale());
        }
    };
    var Ue = new pdUnits.SpecificVolume(pdUnits.CUBICMETERSPERKILOGRAM);
    Ue.axisFormat = Le, Ue.tickMinor = .005, Ue.tickMajor = 4, this.getSpecificVolumeConverter = function () {
        return Ue;
    }, this.setSpecificVolumeUnits = function (t) {
        if (t != Ue.units) {
            switch (Ue.set(t), t) {
                default:
                    Ue.tickMinor = .005, Ue.tickMajor = 4;
                    break;

                case pdUnits.CUBICFEETPERPOUND:
                    Ue.tickMinor = .05, Ue.tickMajor = 5;
            }
            null != zt[0] && e.redraw();
        }
    };
    var We = new pdUnits.Enthalpy(pdUnits.KILOJOULESPERKILOGRAM);
    We.axisFormat = we, We.tickMinor = 2, We.tickMajor = 5, this.getEnthalpyConverter = function () {
        return We;
    }, this.setEnthalpyUnits = function (t) {
        if (t != We.units) {
            switch (We.set(t), t) {
                default:
                    We.tickMinor = 2e3;
                    break;

                case pdUnits.KILOJOULESPERKILOGRAM:
                    We.tickMinor = 2;
                    break;

                case pdUnits.BTUPERPOUND:
                    We.tickMinor = 1;
            }
            We.tickMajor = 5, null != zt[0] && e.redraw();
        }
    };
    var Ye = new pdUnits.Pressure(pdUnits.KILOPASCAL);
    Ye.axisFormat = Ie, Ye.tickMajor = 1, Ye.tickMinor = .2, this.getPressureConverter = function () {
        return Ye;
    }, this.setPressureUnits = function (t) {
        if (t != Ye.units) {
            switch (Ye.set(t), t) {
                default:
                    Ye.axisFormat = we, Ye.tickMinor = 200, Ye.tickMajor = 1e3;
                    break;

                case pdUnits.KILOPASCAL:
                    Ye.axisFormat = Ie, Ye.tickMinor = .2, Ye.tickMajor = 1;
                    break;

                case pdUnits.MILLIMETERSMERCURY:
                    Ye.axisFormat = Ie, Ye.tickMinor = 1, Ye.tickMajor = 5;
                    break;

                case pdUnits.INCHESMERCURY:
                    Ye.axisFormat = Ie, Ye.tickMinor = .05, Ye.tickMajor = .2;
                    break;

                case pdUnits.POUNDSPERSQUAREINCH:
                    Ye.axisFormat = Ie, Ye.tickMinor = .02, Ye.tickMajor = .1;
                    break;

                case pdUnits.ATMOSPHERES:
                case pdUnits.BAR:
                    Ye.axisFormat = Ve, Ye.tickMinor = .002, Ye.tickMajor = .01;
            }
            null != zt[0] && e.redraw();
        }
    };
    var je = new pdUnits.Velocity(pdUnits.METERSPERSECOND);
    je.axisFormat = Le, je.tickMinor = .1, je.tickMajor = 1, this.getVelocityConverter = function () {
        return je;
    }, this.setVelocityUnits = function (t) {
        if (t != je.units) {
            switch (je.set(t), t) {
                default:
                case pdUnits.KILOMETERSPERHOUR:
                case pdUnits.FEETPERSECOND:
                case pdUnits.MILESPERHOUR:
                case pdUnits.KNOTS:
                    je.tickMinor = .1, je.tickMajor = 1;
                    break;

                case pdUnits.FEETPERMINUTE:
                    je.tickMinor = 1, je.tickMajor = 10;
            }
            null != zt[0] && e.redraw();
        }
    };
    var ze = {
        maxDewPt: 0, minX: 0, maxX: 0, minY: 0, maxY: 0
    };

    function Ke(t) {
        return te.left + (t - m) * ae;
    }

    function Xe(t) {
        return te.top + (T - t - M) * re;
    }

    function Qe(t, e) {
        var i;
        if (k == O) {
            var r = Wt.calcSaturationPoint(t);
            i = 100 * pd.safeDivide(e, r);
        } else if (P) {
            r = Wt.calcSaturationPoint(t);
            i = pd.interpolate(e, pd.safeDivide(e, r) * T, R);
        } else i = e;
        return Xe(i);
    }

    function Je(t, e) {
        var i;
        if (k != O) {
            var r = .01 * e, a = r * Wt.calcSaturationPoint(t);
            i = P ? pd.interpolate(a, r * T, R) : a;
        } else i = e;
        return Xe(i);
    }

    var qe = {
        x: 0, y: 0, w: Zt, h: $t, scale: 1
    };

    function Ze() {
        if (!or && qe.scale > 1) {
            var t = qe.scale > 1.001 ? .5 : 1;
            return qe.x = pd.interpolate(qe.x, 0, t), qe.y = pd.interpolate(qe.y, 0, t), qe.w = pd.interpolate(qe.w, Zt, t), qe.h = pd.interpolate(qe.h, $t, t), qe.scale = pd.interpolate(qe.scale, 1, t), Jt.setAttributeNS(null, "viewBox", qe.x.toFixed(0) + " " + qe.y.toFixed(0) + " " + qe.w.toFixed(1) + " " + qe.h.toFixed(1)), !1;
        }
        return !0;
    }

    function $e() {
        Jt.setAttributeNS(null, "viewBox", qe.x.toFixed(0) + " " + qe.y.toFixed(0) + " " + qe.w.toFixed(1) + " " + qe.h.toFixed(1)), !or && qe.scale > 1 && pdDOM.getGlobalAnimationQueue().addOrReplace(Ze).start();
    }

    function ti() {
        var t, e = Math.max(1, +Qt.width()), i = Math.max(1, +Qt.height());
        Zt = Math.max(100, e), $t = Math.max(75, i), oe = $t / i * pdDOM.pageScale, ne = Zt / e * pdDOM.pageScale, Re && (qe.x = 0, qe.y = 0, qe.w = Zt, qe.h = $t, qe.scale = 1), Re = !1, $e(), f <= m && (f = m + 1), t = Math.max(1e-6, f - m), x < 1e-4 * t && (x = .001 * t), g < .001 * t && (g = .01 * t), y < .01 * t && (y = .1 * t), T <= M && (T = M + 1), A < 1e-4 * (t = T - M) && (A = .001 * t), D < .001 * t && (D = .01 * t), C < .001 * t && (C = .1 * t), ee = Zt - (te.left + te.right), ie = $t - (te.bottom + te.top), re = ie / (T - M), ae = ee / (f - m), pd.safeDivide(ee, ie), ze.minX = Ke(m), ze.maxX = Ke(f), ze.minY = Xe(T), ze.maxY = Xe(M), pdDOM.svgAttr(Te, {
            width: ee, height: ie, x: ze.minX, y: ze.minY
        }), k == O ? (ze.maxDewPt = ze.maxX, b = f) : (b = Math.min(Wt.calcDewPointTemperature(T), f), ze.maxDewPt = Math.min(Ke(b), ze.maxX));
    }

    function ei(t, e) {
        return .01 * e * Wt.calcSaturationPoint(t);
    }

    function ii(t) {
        return !(t.x < ze.minX - .1 || t.x > ze.maxX + .1 || t.y < ze.minY - .5 || t.y > ze.maxY + .5);
    }

    function ri(t, e) {
        return !(t.x < ze.minX && e.x < ze.minX || t.x > ze.maxX && e.x > ze.maxX || t.y < ze.minY && e.y < ze.minY || t.y > ze.maxY && e.y > ze.maxY);
    }

    function ai(t, e) {
        (t.x < e.x && t.x < ze.minX && e.x > ze.minX || t.x > e.x && e.x < ze.minX && t.x > ze.minX) && (t.y = pd.mapTo(ze.minX, t.x, e.x, t.y, e.y), t.x = ze.minX), (t.x < e.x && e.x > ze.maxX && t.x < ze.maxX || t.x > e.x && t.x > ze.maxX && e.x < ze.maxX) && (e.y = pd.mapTo(ze.maxX, t.x, e.x, t.y, e.y), e.x = ze.maxX), (t.y < e.y && t.y < ze.minY && e.y > ze.minY || t.y > e.y && e.y < ze.minY && t.y > ze.minY) && (t.x = pd.mapTo(ze.minY, t.y, e.y, t.x, e.x), t.y = ze.minY), (t.y < e.y && e.y > ze.maxY && t.y < ze.maxY || t.y > e.y && t.y > ze.maxY && e.y < ze.maxY) && (e.x = pd.mapTo(ze.maxY, t.y, e.y, t.x, e.x), e.y = ze.maxY);
    }

    function ni(t) {
        var e = [], i = t.length;
        if (i > 1) {
            var r, a = !1, n = t[0];
            ii(n) && (e.push(n), a = !0);
            for (var o = 1; o < i; ++o) r = t[o], !a && ii(r) && (ai(n, r), e.push(n), a = !0), a && (ii(r) || (ai(n, r), a = !1), e.push(r)), n = r;
        }
        return e;
    }

    function oi(t, e, i, r) {
        return pdDOM.svgElem("line", {
            "class": i || "line-grid", opacity: pd.toNumber(r, 1), x1: t.x, y1: t.y, x2: e.x, y2: e.y
        });
    }

    function si(t, e) {
        var i = t.length;
        if (i > 1) {
            var r = "polyline";
            i > 2 && pd.closeTo(t[0].x, t[i - 1].x, .1) && pd.closeTo(t[0].y, t[i - 1].y, .1) && (r = "polygon", i--), e.points = "";
            for (var a = 0; a < i; ++a) e.points += t[a].x.toFixed(1) + "," + t[a].y.toFixed(1) + " ";
            return pdDOM.svgElem(r, e);
        }
        return null;
    }

    function li(t, e, i, r, a, n) {
        var o, s, l, d = i - t, p = (a = a || []).length - 1, u = ei(t, e);
        if (n = pd.toNumber(n, 9999),
            (p < 0 || !pd.closeTo(a[p].x, t, .1) || !pd.closeTo(a[p].y, u, .1)) &&
            a.push([t, Math.min(n, u)]),
            Math.abs(t - i) > .51 || k == S) {
            var c = r - e, h = 1 / Math.max(6, Math.round(Math.abs(d))), m = 1 + .5 * h;
            s = t, l = u;
            for (var f = h; f < m; f += h)
                (u = ei(o = t + f * d, e + f * c)) > n &&
                    (l < n - .001 && a.push([pd.mapAndConstrainTo(n, l, u, s, o), n]), u = n),
                    a.push([o, u]),
                    s = o,
                    l = u;
        } else {
            var x = ei(i, r);
            x > n && u < n && (o = pd.mapAndConstrainTo(n, u, x, t, i), a.push([i, n])), a.push([i, ei(i, r)]);
        }
        return a;
    }

    function di(t, e, i) {
        e = e || [];
        var r = t.length;
        if (r > 0) {
            var a, n, o, s, l, d, p, u, c, h;
            s = t[0][0], p = t[0][1], e.push({
                x: Ke(s), y: Qe(s, p)
            });
            for (var m = 1; m < r; ++m) {
                if (l = t[m][0], u = t[m][1], a = l - s, Math.abs(a) > .51 && (P || k == O)) {
                    n = u - p, h = 1 + .5 * (c = 1 / Math.max(6, Math.round(Math.abs(a)))), i && m >= r - 1 && (h -= c);
                    for (var f = c; f < h; f += c) o = s + f * a, d = p + f * n, e.push({
                        x: Ke(o), y: Qe(o, d)
                    });
                } else (m < r - 1 || !i) && (o = t[m][0], d = t[m][1], e.push({
                    x: Ke(o), y: Qe(o, d)
                }));
                s = l, p = u;
            }
        }
        return e;
    }

    function pi(t, e, i, r, a) {
        var n, o, s = i - t, l = r - e, d = 1 / Math.max(6, Math.round(Math.abs(s))), p = a && a.length ? d : 0,
            u = 1 + .5 * d;
        a = a || [];
        for (var c = p; c < u && (n = t + c * s, o = e + c * l, a.push({
            x: Ke(n), y: Qe(n, o)
        }), !(n > f && s > 0)); c += d);
        return a;
    }

    function ui(t, e, i, r, a, n) {
        if (Math.abs(t - i) > .01 && (P || k == O)) return si(ni(pi(t, e, i, r)), {
            opacity: pd.toNumber(n, 1), "class": a || "line-axis"
        });
        var o = {
            x: Ke(t), y: Qe(t, e)
        }, s = {
            x: Ke(i), y: Qe(i, r)
        };
        return ai(o, s), ri(o, s) ? oi(o, s, a, n) : null;
    }

    function ci(t, e, i, r, a) {
        var n, o, s = i - t, l = r - e, d = 1 / Math.max(6, Math.round(Math.abs(s))), p = a && a.length ? d : 0,
            u = 1 + .5 * d;
        a = a || [];
        for (var c = p; c < u && (n = t + c * s, o = e + c * l, a.push({
            x: Ke(n), y: Je(n, o)
        }), !(n > f && s > 0)); c += d);
        return a;
    }

    function hi() {
        var t = {
            value: "0.0", tickClass: "line-axis", tickOpacity: 1, textClass: "text-axis", textOpacity: 1, pos: {
                dbt: 0, abs: 0
            }, abs: {
                tickOffset: {
                    x: -4, y: -4
                }, textOffset: {
                    x: -2, y: -2
                }, textAnchor: "end", textAngle: 0, textDy: 0
            }, rel: {
                tickOffset: {
                    x: 0, y: 4
                }, textOffset: {
                    x: 0, y: 0
                }, textAnchor: "middle", textDy: 1.1
            }
        };
        return (P || k == O) && te.top > 10 && (t.rel.tickOffset.y = -Math.round(pd.mapAndConstrainTo(te.top, 20, 40, 2, 5)), t.rel.textDy = pd.mapAndConstrainTo(te.top, 20, 40, -.2, -.4)), t;
    }

    function mi(t, e) {
        var i, r, a = e.pos, n = e.abs, o = e.rel, s = !1, l = 0, d = {
            x: Ke(a.dbt), y: Qe(a.dbt, a.abs)
        }, p = {
            x: d.x, y: d.y
        };
        if (d.x > ze.minX - 2 && d.x < ze.maxX + 2 && d.y > ze.minY - 2 && d.y < ze.maxY + 2) {
            var u = {
                opacity: pd.toNumber(e.textOpacity, 1) * H, "class": e.textClass || "text-grid"
            };
            if (k == O) p.x += o.tickOffset.x, p.y += o.tickOffset.y, d.x < ze.maxX - 50 && (i = o.textAnchor, l = pd.toNumber(o.textAngle, 0), (r = p.x + o.textOffset.x) < 15 && ("end" == i || "middle" == i && r < 8) && (i = "start", r = 2), u.x = r, u.y = p.y + o.textOffset.y, u["text-anchor"] = i, u.dy = o.textDy + "em", s = !0); else if (P) {
                p.x += pd.interpolate(n.tickOffset.x, o.tickOffset.x, R), p.y += pd.interpolate(n.tickOffset.y, o.tickOffset.y, R);
                var c = pd.interpolate(20, -5, R);
                d.y > ze.minY + c && d.x < ze.maxX - 50 && (i = R > .5 ? o.textAnchor : n.textAnchor, l = pd.interpolate(pd.toNumber(n.textAngle, 0), pd.toNumber(o.textAngle, 0), R), (r = p.x + pd.interpolate(e.abs.textOffset.x, e.rel.textOffset.x, R)) < 15 && l < 40 && ("end" == i || "middle" == i && r < 8) && (i = "start", r = 2), u.x = r, u.y = p.y + pd.interpolate(e.abs.textOffset.y, e.rel.textOffset.y, R), u.dy = pd.interpolate(e.abs.textDy, e.rel.textDy, R) + "em", u["text-anchor"] = i, s = !0);
            } else p.x += n.tickOffset.x, p.y += n.tickOffset.y, d.y > ze.minY + 40 && (i = n.textAnchor, l = pd.toNumber(n.textAngle, 0), (r = p.x + n.textOffset.x) < 15 && l < 40 && ("end" == i || "middle" == i && r < 8) && (i = "start", r = 2), u.x = r, u.y = p.y + n.textOffset.y, u["text-anchor"] = i, u.dy = n.textDy + "em", s = !0);
            s && (t.appendChild(pdDOM.svgElem("line", {
                "class": e.tickClass || "line-grid",
                opacity: pd.toNumber(e.tickOpacity, 1) * H,
                x1: d.x,
                y1: d.y,
                x2: p.x,
                y2: p.y
            })), pd.closeTo(l, 0, .1) || (u.transform = "rotate(" + l.toFixed(1) + ", " + u.x.toFixed(1) + ", " + u.y.toFixed(1) + ")"), t.appendChild(pdDOM.svgText(e.text, u)));
        }
    }

    function fi(t, e, i, r, a) {
        var n = e.rel, o = pd.isString(r) && r.length > 0, s = 0, l = .6, d = {
            x: ze.maxDewPt - pd.interpolate(10, -6, R), y: ze.minY
        }, p = {
            x: .5 * (ze.maxDewPt - ze.minX), y: .5 * (ze.maxY - ze.minY)
        };
        if (k == O) d.x = ze.maxX - 2, d.y = ze.minY + n.tickOffset.y, p.x = .5 * (ze.minX + ze.maxX), p.y = ze.minY + n.tickOffset.y - pd.mapAndConstrainTo(te.top, 20, 40, 9, 15), s = pd.toNumber(n.textAngle, 0), l = n.textDy; else {
            var u = pd.constrainTo(Wt.calcDewPointTemperature(.5 * (M + T)), .75 * m + .25 * f, .25 * m + .75 * f),
                c = Ke(u - 3), h = Xe(Wt.calcSaturationPoint(u - 3)), x = Ke(u + 3),
                y = Xe(Wt.calcSaturationPoint(u + 3)), g = pd.safeDivide(x - c, h - y);
            if (s = pd.radiansToDegrees(Math.atan2(1, -g)) - 180, p.x = .5 * (c + x), p.y = .5 * (h + y), P) {
                d.x = Math.min(d.x, ze.maxX - 2), d.y = pd.interpolate(d.y, ze.minY + n.tickOffset.y, R);
                var b = .5 * (ze.minX + ze.maxX),
                    v = ze.minY + n.tickOffset.y - pd.mapAndConstrainTo(te.top, 20, 40, 9, 15);
                p.x = pd.interpolate(p.x, b, R), p.y = pd.interpolate(p.y, v, R), l = pd.interpolate(l, n.textDy, R), s = pd.interpolate(s, 0, R);
            }
        }
        var A = {
            "text-anchor": "end",
            "class": "text-axis" + a,
            opacity: pd.toNumber(e.textOpacity, 1),
            dy: l.toFixed(2) + "em",
            x: d.x,
            y: d.y
        };
        t.appendChild(pdDOM.svgText(i, A)), o && p.y > 8 && (A["text-anchor"] = "middle", A.class = "text-axis large" + a, A.dy = pd.interpolate(-4, l, R).toFixed(2) + "em", A.x = p.x, A.y = p.y, pd.closeTo(s, 0, .1) || (A.transform = "rotate(" + s.toFixed(1) + ", " + p.x.toFixed(1) + ", " + p.y.toFixed(1) + ")"), r += " (" + i + ")", t.appendChild(pdDOM.svgText(r, A)));
    }

    function xi(t, e) {
        return e[1] = Ke(f), P ? e[0] = e[1] : k == O ? e[0] = Ke(m) : (t = _e.toGramsPerKilogram(t), e[0] = Ke(pd.constrainTo(Wt.calcDewPointTemperature(t), m, f))), e;
    }

    function yi(t, e) {
        if (e[0] = Xe(M), t = Ge.toCelsius(t), P) {
            var i = pd.constrainTo(Wt.calcSaturationPoint(t), M, T), r = E == O ? N : 1 - N;
            e[1] = Xe(pd.interpolate(i, T, r));
        } else e[1] = Xe(k == O ? T : pd.constrainTo(Wt.calcSaturationPoint(t), M, T));
        return e;
    }

    function gi(t) {
        return Ke(Ge.toCelsius(t));
    }

    function bi(t) {
        return Xe(k == S ? _e.toGramsPerKilogram(t) : t);
    }

    function vi(t) {
        if (t) zt[1].min = M, zt[1].max = T, zt[1].scaleFunction = Xe, zt[1].tickMinor = D, zt[1].tickMajor = C, zt[1].format = we, zt[1].labelRotate = 0; else switch (zt[1].min = _e.min, zt[1].max = P ? _e.fromGramsPerKilogram(T) : _e.max, zt[1].tickMinor = _e.tickMinor, zt[1].tickMajor = _e.tickMajor, _e.units == pdUnits.GRAMSPERKILOGRAM ? (zt[1].scaleFunction = Xe, zt[1].labelRotate = 0) : (zt[1].scaleFunction = bi, zt[1].labelRotate = 90), _e.units) {
            case pdUnits.POUNDSPERPOUND:
            case pdUnits.KILOGRAMSPERKILOGRAM:
                zt[1].format = _e.axisFormat = Ve, _e.decimals = 4;
                break;

            default:
            case pdUnits.GRAINSPERPOUND:
            case pdUnits.GRAMSPERKILOGRAM:
                zt[1].format = _e.axisFormat = we, _e.decimals = 1;
        }
        zt[1].gridLines = xi, zt[1].hilite = P && R > .5 ? nt == Z : k == O ? nt == Z : nt == q;
    }

    function Mi() {
        if (i) {
            if (Re && ti(), zt[0].min = Ge.min, zt[0].max = Ge.max, zt[0].tickMinor = Ge.tickMinor, zt[0].tickMajor = Ge.tickMajor, zt[0].hilite = nt == J, zt[0].gridLines = yi, Ge.units == pdUnits.CELSIUS ? zt[0].scaleFunction = Ke : zt[0].scaleFunction = gi, vi(k == O), Qt.find("[class*=background]").empty(), se.appendChild(Ce), xt < 1) switch (ut) {
                case ot:
                    c = "Givoni Bioclimatic Chart";
                    break;

                case st:
                    c = "Outdoor Work Heat Index (" + Ge.getAbbrev() + ")";
                    break;

                case lt:
                    c = "Predicted Mean Vote (PMV)";
                    break;

                case dt:
                    c = "Comfort: ASHRAE 55-2017";
                    break;

                case pt:
                    c = "Comfort: EN 15251:2007";
                    break;

                default:
                    c = gt ? yt : "";
            }
            if (te.top >= 25) {
                var t, e, r = p && p.length, a = c && c.length, n = p;
                switch (u) {
                    case pd.Align.LEFT:
                    case pd.Align.TOP_LEFT:
                    case pd.Align.BOT_LEFT:
                        t = te.left, e = "start";
                        break;

                    case pd.Align.RIGHT:
                    case pd.Align.TOP_RIGHT:
                    case pd.Align.BOT_RIGHT:
                        t = Math.round(te.left + ee), e = "end";
                        break;

                    default:
                        t = Math.round(te.left + .5 * ee), e = a ? "end" : "middle", a && (n += " :");
                }
                var o = pd.mapAndConstrainTo(te.top, 25, 40, 0, 10),
                    s = pd.snapTo(pd.mapAndConstrainTo(te.top, 25, 40, .75, 1.1), .05) + "em",
                    l = pd.mapAndConstrainTo(te.top, 25, 40, 1, .4) + "em";
                if (r && se.appendChild(ye = pdDOM.svgText(n, {
                    "text-anchor": e, "font-size": s, dy: l, x: t, y: o
                })), a) {
                    switch (u) {
                        case pd.Align.LEFT:
                        case pd.Align.TOP_LEFT:
                        case pd.Align.BOT_LEFT:
                            t = Math.round(te.left + ee), e = "end";
                            break;

                        case pd.Align.RIGHT:
                        case pd.Align.TOP_RIGHT:
                        case pd.Align.BOT_RIGHT:
                            t = te.left, e = "start";
                            break;

                        default:
                            t = Math.round(te.left + .5 * ee), e = r ? "start" : "middle", r && (t += 3);
                    }
                    se.appendChild(ge = pdDOM.svgText(c, {
                        "text-anchor": e,
                        "font-size": s,
                        "font-weight": "lighter",
                        "font-style": "italic",
                        fill: "gray",
                        dy: l,
                        x: t,
                        y: o
                    }));
                }
            }
            Qt.find("[class*=info]").empty();
            for (var d = pd.mapAndConstrainTo(te.top, 0, 35, 1, -.5) + "em", h = 0; h < 10; ++h) ue.appendChild(Ee[h] = pdDOM.svgText("", {
                "class": "text-axis", "text-anchor": "start", x: te.left, y: te.top + 12 * h + (9 == h ? 6 : 0), dy: d
            }));
            P || k != O ? Ti() : function () {
                Qt.find("[class*=grid]").empty(), (G || nt == J) && zt[0].renderHorizontal(pe, te, Xe(M), te.bottom < 20 ? pd.Align.TOP : pd.Align.BOTTOM, !1);
                (B || nt == Z) && zt[1].renderVertical(pe, te, Ke(f), te.right < 20 ? pd.Align.LEFT : pd.Align.RIGHT, !1);
                var t = "M" + ze.minX.toFixed(1) + "," + ze.minY.toFixed(1) + " L" + ze.maxX.toFixed(1) + "," + ze.minY.toFixed(1);
                nt == at && (pdDOM.svgAttr(be, {
                    "class": "line-hilite", d: t
                }), pe.appendChild(be));
                var e = ze.maxX, i = ze.maxY;
                t += " L" + e.toFixed(1) + "," + i.toFixed(1), e = ze.minX, i = ze.maxY, t += " L" + e.toFixed(1) + "," + i.toFixed(1), t += " Z", Ce.setAttributeNS(null, "d", t), Ae.setAttributeNS(null, "d", t), (_ && !U && !j || nt == q) && Ai();
            }(), _i(), Wi();
        }
    }

    function Ti() {
        var t, e, i, r, a, n, o, s = 0, l = nt == Z ? " hilite" : "", d = "text-grid" + l, p = "line-axis" + l,
            u = "line-axis stroke-dashed" + l, c = nt >= 0 ? 1 : .6, h = f + .5 * g, x = "1.1em", y = 4;
        for (te.top > 10 && (y = -Math.round(pd.mapAndConstrainTo(te.top, 20, 40, 2, 5)), x = pd.mapAndConstrainTo(te.top, 20, 40, -.2, -.4) + "em"), Qt.find("[class*=grid]").empty(), (G || nt == J) && zt[0].renderHorizontal(pe, te, Xe(M), te.bottom < 20 ? pd.Align.TOP : pd.Align.BOTTOM, !1), (_ || nt == q) && zt[1].renderVertical(pe, te, Ke(f), te.right < 20 ? pd.Align.LEFT : pd.Align.RIGHT, !1), o = "", t = Math.min(Ke(m), ze.maxX), e = Qe(m, Wt.calcSaturationPoint(m)), o += "M" + t.toFixed(1) + "," + e.toFixed(1), i = m + g; i <= f; i += g) t = Math.min(Ke(i), ze.maxX), (e = Qe(i, Wt.calcSaturationPoint(i))) > ze.minY && (o += " L" + t.toFixed(1) + "," + e.toFixed(1));
        if (pd.closeTo(ze.maxDewPt, ze.maxX, .5) && (t = ze.maxX, e = Qe(f, Wt.calcSaturationPoint(f)), o += " L" + t.toFixed(1) + "," + e.toFixed(1)), t = ze.maxDewPt, e = ze.minY, o += " L" + t.toFixed(1) + "," + e.toFixed(1), nt == at && (pdDOM.svgAttr(be, {
            "class": "line-hilite", d: o
        }), pe.appendChild(be)), t = ze.maxX, e = ze.minY, o += " L" + t.toFixed(1) + "," + e.toFixed(1), t = ze.maxX, e = ze.maxY, o += " L" + t.toFixed(1) + "," + e.toFixed(1), t = ze.minX, e = ze.maxY, o += " L" + t.toFixed(1) + "," + e.toFixed(1), o += " Z", Ce.setAttributeNS(null, "d", o), Ae.setAttributeNS(null, "d", o), B || nt == Z) {
            P && (s = E == O ? N : 1 - N), nt == Z && pe.appendChild(pdDOM.svgElem("line", {
                "class": u, x1: ze.minX, y1: ze.maxY, x2: ze.maxX, y2: ze.maxY
            }));
            for (var b = 10; b <= 100; b += 10) {
                for (o = "", r = m - g, n = 0, i = m; i < h && (i > f && (i = f), a = Wt.calcAbsFromRelHumidity(i, b), P && (a = pd.interpolate(a, .01 * b * T, s)), a > T && (i = pd.mapTo(T, n, a, r, i), a = T), o += Ke(i).toFixed(1) + "," + Xe(a).toFixed(1) + " ", r = i, n = a, !(a >= T)); i += g);
                b > 99 && (u = "line-axis" + l), pe.appendChild(pdDOM.svgElem("polyline", {
                    "class": u, opacity: b > 99 ? .6 * c : c, points: o, fill: "none"
                })), Wt.calcAbsFromRelHumidity(f, b) > T ? (t = Ke(i)) <= ze.maxX && (e = Xe(T), pe.appendChild(pdDOM.svgElem("line", {
                    "class": p, x1: t, y1: e + y, x2: t, y2: e
                })), t < ze.maxX - 20 && pe.appendChild(pdDOM.svgText(b.toFixed(0) + "%", {
                    "class": d, "text-anchor": "middle", x: t, y: e + y, dy: x
                }))) : te.right >= 20 && (t = Ke(f), e = Xe(a), pe.appendChild(pdDOM.svgElem("line", {
                    "class": p, x1: t - 5 + 12 * s, y1: e, x2: t, y2: e
                })), e < ze.maxY + 10 && pe.appendChild(pdDOM.svgText(b.toFixed(0) + "%", {
                    "class": d, "text-anchor": "end", opacity: 1 - s * s, x: t - 7 + 32 * s, y: e, dy: "0.4em"
                })));
            }
        }
        P && (_ && !U && !j || nt == q) && Ai();
    }

    function Ai() {
        var t, e, i, r = nt == q ? 1 : .8, a = Wt.calcAbsFromRelHumidity(f, T) + 10, n = nt == q ? " hilite" : "",
            o = "line-axis stroke-dashed" + n, s = !0;
        (U || nt == tt || W || nt == et || Y || nt == it || j || nt == rt) && (s = !1);
        var l = hi();
        l.tickClass = "line-axis" + n, l.textClass = "text-grid" + n, l.textOpacity = R, l.tickOpacity = R, l.abs.tickOffset.x = -6, l.abs.tickOffset.y = 0, l.abs.textOffset.x = -2, l.abs.textDy = .5;
        for (var d = _e.axisFormat, p = _e.fromGramsPerKilogram(a), u = _e.tickMajor, c = !1, h = _e.min + u; h <= p; h += u) t = _e.toGramsPerKilogram(h), (e = Wt.calcDewPointTemperature(t)) < f && (i = ui(e, t, f, t, o, r)) && (pe.appendChild(i), s && ((h <= _e.max || c) && (l.pos.dbt = e, l.pos.abs = t, l.text = d(h), mi(pe, l)), c = !c));
        s && R > .5 && fi(pe, l, _e.getAbbrev(), "Absolute Humidity", n);
    }

    function Ci() {
        return pd.mapAndConstrainTo(Math.min(ie, ee), 300, 900, .5, 1);
    }

    var Di = [0, 0, 0, 1];

    function Si(t) {
        return pd.colorScaleRedWhiteBlue((t + 3) / 6, Di), pd.toHexColorString(Di);
    }

    var Oi = [27, 32, 40, 52, 1e3];

    function ki(t) {
        var e;
        return (t -= 1) < 25 ? "none" : (t < 27 ? (e = pd.constrainTo((t - 25) / 2, 0, 1), Di[0] = 1, Di[1] = 1, Di[2] = 1 - e, Di[3] = e) : (e = pd.constrainTo((t - Oi[0]) / Oi[0], 0, 1), Di[0] = 1, Di[1] = 1 - e, Di[2] = 0, Di[3] = 1), pd.toHexColorString(Di));
    }

    function Fi(t) {
        return t = pd.constrainTo(t, 0, 1), Di[0] = Di[1] = .9 - .9 * t, Di[2] = Di[3] = 1, pd.toHexColorString(Di);
    }

    function Pi(t) {
        return t = pd.constrainTo(t, 0, 1), Di[0] = pd.interpolate(1, .6, pd.Easing.inQuad(t)), Di[1] = pd.interpolate(1, 0, t), Di[2] = pd.interpolate(.6, 0, pd.Easing.outQuad(t)), Di[3] = 1, pd.toHexColorString(Di);
    }

    function Ei(t) {
        return t < Oi[0] ? "" : t < Oi[1] ? "CAUTION" : t < Oi[2] ? "EXTREME CAUTION" : t < Oi[3] ? "DANGER" : "EXTREME DANGER";
    }

    function Ri(t) {
        var e, i, r, a, n, o, s, l, d, p, u, c, h = jt.rows, m = jt.cols, f = ut == st ? ki : Si, x = jt.cells,
            y = pdDOM.svgElem("g");
        if (y.setAttributeNS(null, "opacity", pd.toNumber(t, 1)), de.appendChild(y), h > 0 && m > 0) for (var g = 1; g < h; ++g) {
            e = x[g - 1][0], i = x[g][0];
            for (var b = 1; b < m; ++b) n = e.extra ? e.extra : e.extra = pdDOM.svgElem("polygon"), r = x[g - 1][b], a = x[g][b], l = .25 * (e.value + r.value + i.value + a.value), e.avg = l, o = f(l), n.setAttributeNS(null, "fill", o), e.color = o, (e.y > 0 || r.y > 0) && (p = i, u = r, c = a, s = (d = e).x.toFixed(1) + "," + d.y.toFixed(1) + " " + u.x.toFixed(1) + "," + u.y.toFixed(1) + " " + c.x.toFixed(1) + "," + c.y.toFixed(1) + " " + p.x.toFixed(1) + "," + p.y.toFixed(1), n.setAttributeNS(null, "points", s), s && y.appendChild(n)), e = r, i = a;
        }
    }

    function Ni(t) {
        var e, i, r, a, n, o, s, l, d = jt.rows, p = jt.cols, u = jt.cells, c = 0, h = [];
        if (d > 0 && p > 0) for (r = 0; r < d; ++r) {
            if (a = 1, o = (l = u[r][c]).value, e = l.x, i = l.y, o < t) for (a = c + 1; a < p; ++a) {
                if ((n = (s = u[r][a]).value) > t && o <= t) {
                    e = pd.mapTo(t, o, n, l.x, s.x), i = pd.mapTo(t, o, n, l.y, s.y);
                    break;
                }
                o = n, e = (l = s).x, i = l.y;
            }
            h.push({
                x: e, y: i, col: a - 1
            }), c = Math.max(0, a - 5);
        }
        return h;
    }

    function Hi(t, e) {
        var i = "";
        if (jt.rows > 0 && jt.cols > 0) {
            var r, a, n, o = jt.cells, s = t.length;
            for (r = 0; r < s; ++r) i += (n = t[r]).x.toFixed(1) + "," + n.y.toFixed(1) + " ";
            if (pd.isArray(e)) {
                var l = e.length;
                if (s > (r = jt.rows - 1) && l > r) {
                    var d = t[r].col, p = e[r].col;
                    if (d < p) for (a = d + 1; a <= p; ++a) i += (n = o[r][a]).x.toFixed(1) + "," + n.y.toFixed(1) + " ";
                }
                for (r = l - 1; r >= 0; --r) i += (n = e[r]).x.toFixed(1) + "," + n.y.toFixed(1) + " ";
            }
        }
        return i;
    }

    function wi(t, e, i, r, a, n) {
        var o = 0;
        if (!pd.closeTo(e, r, .5)) {
            var s = pd.safeDivide(i - t, e - r);
            o = pd.radiansToDegrees(Math.atan2(1, -s)), t > i && e < r && (o = pd.wrapAt(o + 180, 0, 360));
        }
        switch ((a = a || {})["text-anchor"]) {
            default:
                a.x = .5 * (t + i), a.y = .5 * (e + r);
                break;

            case "start":
                n ? (a.x = t, a.y = e) : (a.x = i, a.y = r);
                break;

            case "end":
                n ? (a.x = i, a.y = r) : (a.x = t, a.y = e);
        }
        return pd.closeTo(o, 0, .1) ? delete a.transform : a.transform = "rotate(" + o.toFixed(1) + ", " + a.x.toFixed(1) + ", " + a.y.toFixed(1) + ")", a;
    }

    function Ii() {
        var t, e, i = Math.round(Math.max(1, f - m)) + 2, r = (f - m) / (i - 2);
        jt.setSize(i, 21), jt.map(function (i, a, n) {
            e = 5 * n, t = m + a * r, i.x = Ke(t), i.y = Je(t, e), Kt && (Yt.relativeHumidity = e, Yt.dryBulbTemperature = t, Yt.calcPMV(), i.value = Yt.PMV);
        }), Kt = !1;
    }

    function Li() {
        switch (Qt.find("[class*=data]").empty(), le.setAttributeNS(null, "clip-path", xt == ct ? "url(#psychroClipPath)" : "none"), xt) {
            case ct:
                !function () {
                    if (!gt) return;
                    var e, i, r, a, n, o, s = bt.rows, l = bt.cols, d = bt.cells, p = "FRQ" == gt.abbrev,
                        u = p ? Fi : Pi, c = St == S ? Qe : Je, h = St == S ? Math.max(1, v - M) : 100,
                        x = Math.max(1, f - m) / (l - 1), y = h / (s - 1), g = Math.max(1e-6, Dt - Ct), b = Ot && !p,
                        T = 1;
                    t = t || {};
                    var A = pdDOM.svgElem("g");
                    le.appendChild(A);
                    if (s > 0 && l > 0) {
                        var C, D = "";
                        bt.map(function (t, e, i) {
                            o = i * y, n = m + e * x, t.x = Ke(n), t.y = c(n, o), t.extra || (t.extra = pdDOM.svgElem("polygon"));
                            b && (T = .1 + pd.constrainTo(t.avg / Ft * .9, 0, .9));
                            t.color = u((t.value - Ct) / g), t.extra.setAttributeNS(null, "fill-opacity", T), t.extra.setAttributeNS(null, "fill", t.color);
                        });
                        for (var O = 1; O < s; ++O) {
                            e = d[O - 1][0], i = d[O][0];
                            for (var k = 1; k < l; ++k) r = d[O - 1][k], a = d[O][k], e.avg > .001 && (C = e.extra, P = i, E = r, R = a, (D = ((F = e).x + kt).toFixed(1) + "," + (F.y - kt).toFixed(1) + " " + (E.x - kt).toFixed(1) + "," + (E.y - kt).toFixed(1) + " " + (R.x - kt).toFixed(1) + "," + (R.y + kt).toFixed(1) + " " + (P.x + kt).toFixed(1) + "," + (P.y + kt).toFixed(1)) && (C.setAttributeNS(null, "points", D), A.appendChild(C))), e = r, i = a;
                        }
                    }
                    var F, P, E, R;
                }();
                break;

            case ht:
                !function () {
                    if (!Mt || !gt) return;
                    var t, e, i = 4 * Ci(), r = "FRQ" == gt.abbrev, a = 1 / Math.max(1e-6, Dt - Ct), n = .5 * i, o = {
                        width: i, height: i, x: 0, y: 0
                    }, s = pdDOM.svgElem("g");
                    if (s.setAttributeNS(null, "stroke", "none"), s.setAttributeNS(null, "fill", "#00F"), le.appendChild(s), r) for (var l = 0, d = Mt.length; l < d; ++l) t = Mt[l], o.x = Ke(t.dbt) - n, o.y = Je(t.dbt, t.rel) - n, e = (t.val - Ct) * a, s.appendChild(pdDOM.svgElem("rect", o)); else for (var l = 0, d = Mt.length; l < d; ++l) t = Mt[l], o.x = Ke(t.dbt) - n, o.y = Je(t.dbt, t.rel) - n, e = (t.val - Ct) * a, o.fill = Pi(e), s.appendChild(pdDOM.svgElem("rect", o));
                }();
                break;

            case mt:
                !function () {
                    if (!Mt || !gt) return;
                    var t = Mt.length;
                    if (t < 2) return;
                    var e, i, r, a = [], n = "FRQ" == gt.abbrev, o = Math.max(1e-6, Dt - Ct), s = Ci(), l = 1 / o, d = {
                        stroke: "#00F", x1: 0, y1: 0, x2: 0, y2: 0
                    }, p = {
                        fill: "#00F", r: (n ? 3 : 5) * s, cx: 0, cy: 0
                    }, u = {
                        "class": "font-overlay",
                        "text-anchor": "start",
                        "font-size": (.75 * s).toFixed(2) + "em",
                        dx: "0.75em",
                        dy: "0.35em",
                        fill: "#444"
                    }, c = pdDOM.svgElem("g");
                    c.setAttributeNS(null, "stroke", "#00F"), le.appendChild(c);
                    for (var h = 0; h < t; h += 2) e = Mt[h], d.x1 = Ke(e.dbt), d.y1 = Je(e.dbt, e.rel), i = Mt[h + 1], d.x2 = Ke(i.dbt), d.y2 = Je(i.dbt, i.rel), c.appendChild(pdDOM.svgElem("line", d)), n || (r = (e.val - Ct) * l, p.fill = Pi(r)), p.cx = d.x1, p.cy = d.y1, a.push(pdDOM.svgElem("circle", p)), n || (r = (i.val - Ct) * l, p.fill = Pi(r)), p.cx = d.x2, p.cy = d.y2, a.push(pdDOM.svgElem("circle", p)), e.name && (u["text-anchor"] = "end", u.dx = "-0.75em", wi(d.x2, d.y2, d.x1, d.y1, u, !0), he.appendChild(pdDOM.svgText(e.name, u))), i.name && (u["text-anchor"] = "start", u.dx = "0.75em", wi(d.x2, d.y2, d.x1, d.y1, u, !0), he.appendChild(pdDOM.svgText(i.name, u)));
                    for (var h = 0; h < a.length; ++h) c.appendChild(a[h]);
                }();
                break;

            case ft:
                !function () {
                    if (!Mt || !gt) return;
                    var t, e, i = Mt.length;
                    if (i < 2) return;
                    var r, a, n = "", o = "FRQ" == gt.abbrev, s = Math.max(1e-6, Dt - Ct), l = Ci(), d = 1 / s, p = {
                        fill: "#00F", r: (o ? 3 : 5) * l, cx: 0, cy: 0
                    }, u = {
                        "class": "font-overlay",
                        "text-anchor": "middle",
                        "font-size": (.75 * l).toFixed(2) + "em",
                        dy: ((o ? .5 : .8) * -l).toFixed(2) + "em",
                        fill: "#444"
                    }, c = pdDOM.svgElem("g");
                    c.setAttributeNS(null, "stroke", "#00F"), le.appendChild(c);
                    for (var h = 0; h < i; ++h) r = Mt[h], t = Ke(r.dbt), e = Je(r.dbt, r.rel), n += t.toFixed(1) + "," + e.toFixed(1) + " ";
                    n.length > 2 && c.appendChild(pdDOM.svgElem("polyline", {
                        points: n, "stroke-width": "1px", stroke: "#00C", fill: "none"
                    }));
                    for (var h = 0; h < i; ++h) r = Mt[h], t = Ke(r.dbt), e = Je(r.dbt, r.rel), o || (a = (r.val - Ct) * d, p.fill = Pi(a)), p.cx = t.toFixed(1), p.cy = e.toFixed(1), c.appendChild(pdDOM.svgElem("circle", p)), r.name && (u.x = p.cx, u.y = p.cy, he.appendChild(pdDOM.svgText(r.name, u)));
                }();
        }
        !function () {
            if (vt && vt.length > 0) {
                var t, e, i, r = pdDOM.svgElem("g");
                r.setAttributeNS(null, "class", "regions"), r.setAttributeNS(null, "stroke-width", "2px"), r.setAttributeNS(null, "fill", "none"), le.appendChild(r);
                for (var a = 0, n = vt.length; a < n; ++a) {
                    e = "";
                    for (var o = 0, s = (i = vt[a]).outline.length; o < s; ++o) t = i.outline[o], e += Ke(t.dbt).toFixed(1) + "," + Je(t.dbt, t.rel).toFixed(1) + " ";
                    e.length > 2 && r.appendChild(pdDOM.svgElem("polygon", {
                        stroke: i.color, points: e
                    }));
                }
            }
        }(), function () {
            Qt.find("[class*=legend]").empty();
            var t = !1;
            switch (xt) {
                case ct:
                    t = Et && gt;
                    break;

                case ht:
                case mt:
                case ft:
                    t = Et && gt && "FRQ" != gt.abbrev;
            }
            if (t) {
                var e, i, r, a, n = "FRQ" == gt.abbrev, o = n ? Fi : Pi, s = pdSVG.getUnitsPrefixScaleFactor(gt.prefix),
                    l = pdDOM.svgElem("g");
                if (l.setAttributeNS(null, "class", "data-scale"), me.appendChild(l), Pt == pd.Align.LEFT) {
                    var d = 15, p = 12, u = 10 * p;
                    l.appendChild(De = pdDOM.svgText(pdSVG.getUnitsPrefix(gt.prefix) + h, {
                        "class": "text-axis", "text-anchor": "start", dy: "-0.5em", x: 0, y: 10
                    })), r = s * Dt, a = Tt ? Tt(r) : r.toFixed(At), l.appendChild(Oe = pdDOM.svgText(a, {
                        "class": "text-axis", "text-anchor": "start", dy: "1.0em", x: d + 3, y: 10
                    })), r = s * Ct, a = Tt ? Tt(r) : r.toFixed(At), l.appendChild(Se = pdDOM.svgText(a, {
                        "class": "text-axis", "text-anchor": "start", dy: "-0.3em", x: d + 3, y: 10 + u
                    })), l.appendChild(pdDOM.svgElem("line", {
                        "class": "line-axis", x1: 0, y1: 10, x2: d + 8, y2: 10
                    })), l.appendChild(pdDOM.svgElem("line", {
                        "class": "line-axis", x1: 0, y1: 10 + u, x2: d + 8, y2: 10 + u
                    }));
                    for (var c = 0; c < 10; ++c) l.appendChild(pdDOM.svgElem("rect", {
                        fill: o(c / 10), "class": "stroke-axis", width: d, height: p, x: 0, y: 10 + (10 - c - 1) * p
                    }));
                    e = 0, i = te.top + 132, R > .01 && (e = pd.interpolate(e, 5, R), i = pd.interpolate(i, ze.maxY - 10 - u - 5, R)), pdDOM.svgAttr(l, {
                        transform: "translate(" + (te.left + e) + ", " + i + ")"
                    });
                } else {
                    var d = 15, p = 12, m = -p - 8, f = -p, x = 10 * d;
                    l.appendChild(De = pdDOM.svgText(pdSVG.getUnitsPrefix(gt.prefix) + h, {
                        "class": "text-axis", "text-anchor": "end", dy: "0.3em", x: -x - 4, y: -.5 * p
                    })), r = s * Dt, a = Tt ? Tt(r) : r.toFixed(At), l.appendChild(Oe = pdDOM.svgText(a, {
                        "class": "text-axis", "text-anchor": "end", dy: "-0.3em", x: -3, y: f
                    })), r = s * Ct, a = Tt ? Tt(r) : r.toFixed(At), l.appendChild(Se = pdDOM.svgText(a, {
                        "class": "text-axis", "text-anchor": "start", dy: "-0.3em", x: 3 - x, y: f
                    })), l.appendChild(pdDOM.svgElem("line", {
                        "class": "line-axis", x1: 0, y1: 0, x2: 0, y2: m
                    })), l.appendChild(pdDOM.svgElem("line", {
                        "class": "line-axis", x1: -x, y1: 0, x2: -x, y2: m
                    }));
                    for (var c = 0; c < 10; ++c) l.appendChild(pdDOM.svgElem("rect", {
                        fill: o(c / 10), "class": "stroke-axis", width: d, height: p, x: c * d - x, y: -p
                    }));
                    e = ze.maxX - 5, i = ze.maxY - 5, pdDOM.svgAttr(l, {
                        transform: "translate(" + e + ", " + i + ")"
                    });
                }
            }
            !function () {
                if (vt && vt.length > 0) {
                    var t, e, i, r = vt.length, a = 16 * r, n = pdDOM.svgElem("g");
                    if (n.setAttributeNS(null, "class", "region-scale"), me.appendChild(n), Pt != pd.Align.LEFT) {
                        for (var o = 0; o < r; ++o) i = vt[o], e = 16 * o, n.appendChild(pdDOM.svgElem("rect", {
                            fill: i.color, "class": "stroke-axis", width: 15, height: 16, x: 0, y: e
                        })), n.appendChild(pdDOM.svgText(i.name, {
                            "class": "text-axis", "text-anchor": "start", dy: "0.4em", x: 18, y: e + 8
                        }));
                        t = 0, e = te.top + (K ? 132 : 0), R > .01 && (t = pd.interpolate(t, 5, R), e = pd.interpolate(e, ze.maxY - a - 5, R)), pdDOM.svgAttr(n, {
                            transform: "translate(" + (te.left + t) + ", " + e + ")"
                        });
                    } else {
                        for (var o = 0; o < r; ++o) i = vt[o], e = 16 * o, n.appendChild(pdDOM.svgElem("rect", {
                            fill: i.color, "class": "stroke-axis", width: 15, height: 16, x: 0, y: e
                        })), n.appendChild(pdDOM.svgText(i.name, {
                            "class": "text-axis", "text-anchor": "end", dy: "0.4em", x: -3, y: e + 8
                        }));
                        t = ze.maxX - 5, e = ze.minY + 5, R > .01 && (e = pd.interpolate(e, ze.maxY - a - 5, R)), pdDOM.svgAttr(n, {
                            transform: "translate(" + (te.left + t) + ", " + e + ")"
                        });
                    }
                }
            }();
        }();
    }

    function Vi() {
        switch (Qt.find("[class*=comfort]").empty(), ut) {
            case ot:
                !function () {
                    var t, e, i, r, a, n = Ci(), o = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1),
                        s = [], l = {
                            stroke: "#444",
                            "stroke-width": (2 + .5 * pdDOM.devicePixelRatio).toFixed(1) + "px",
                            "stroke-linejoin": "round",
                            "fill-opacity": "0.2",
                            fill: "none"
                        }, d = {
                            "class": "font-overlay",
                            "text-anchor": "middle",
                            "font-size": n.toFixed(1) + "em",
                            "font-weight": "bold",
                            fill: "#444",
                            dy: "0.4em"
                        };
                    if (s.length = 0,
                        li(o, 80, o + 5, 80, s, 16),
                        a = Math.min(16, ei(o + 5, 80)),
                        s.push([o + 7, Math.min(a, ei(o + 7, 50))]),
                        s.push([o + 7, r = ei(o + 7, 20)]),
                        li(o + 7, 20, o, 20, s),
                        s.push([o, ei(o, 80)]),
                        l.fill = pd.toHexColorString(pd.colorScaleRainbow(.5)),
                        null != (t = si(di(s), l)) &&
                        (d.x = Ke(o + 3.5),
                            d.y = Qe(o + 3.5, .5 * (r + a)),
                            ce.appendChild(t),
                            ce.appendChild(pdDOM.svgTextMultiLine("COMFORT\nZONE", d))),
                        l.fill = "none",
                        s.length = 0,
                        li(o, 100, o + 7, 100, s),
                        s.push([o + 12, ei(o + 12, 50)]),
                        s.push([o + 12, ei(o + 12, 20)]),
                        li(o + 12, 20, o, 20, s),
                        s.push([o, ei(o, 100)]),
                        null != (t = si(di(s), l)) &&
                        ce.appendChild(t),
                        p = R > .15 ? ee < 800 ? "NAT. VENT." : "NAT. VENTILATION" : ee < 800 ? "NAT. VENTILATION" : "NATURAL VENTILATION",
                        s.length = 0, d.dy = "1.6em",
                        s.push({
                            x: Ke(o), y: Je(o, 100)
                        }), s.push({
                            x: Ke(o + 7), y: Je(o + 7, 100)
                        }), wi(s[1].x, s[1].y, s[0].x, s[0].y, d), ce.appendChild(pdDOM.svgText(p, d)), d.dy = "0.4em", s.length = 0, li(o - 2.5, 20, o - 7, 20, s), s.push([o - 7.5, i = ei(o - 7.5, 20)]), r = Math.min(ei(o - 7.5, 80), 16), s.push([o - 7.5, r]), li(o - 7.5, 80, o - 2.5, 80, s, 16), null != (t = si(di(s), l))) {
                        d.x = Ke(o - 7.5) + 12 * n, d.y = Qe(o - 7.5, .5 * (i + r));
                        var p = "INTERNAL GAINS";
                        R < .5 && (d.x += 16 * n, p = "INTERNAL\nGAINS"), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgTextMultiLine(p, d));
                    }
                    s.length = 0, s.push([o + 3.5, 0]), s.push([o - 12, 0]), s.push([o - 12, i = ei(o - 12, 100)]), li(o - 12, 100, o - 1, 100, s), null != (t = si(di(s), l)) && (d.x = Ke(o - 12) + 28 * n, d.y = Qe(o - 12, .5 * i), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgTextMultiLine("PASSIVE SOLAR\nHEATING", d))), s.length = 0, s.push([o - 13, 0]), s.push([o - 16, 0]), s.push([o - 16, i = ei(o - 16, 100)]), li(o - 16, 100, o - 13, 100, s), null != (t = si(di(s), l)) && (d.x = Ke(o - 16) + 28 * n, d.y = Qe(o - 16, .5 * i), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgTextMultiLine("ACTIVE\nSOLAR", d))), d.x = Ke(o - 16) - 25, d.y = pd.interpolate(d.y, ze.maxY, .1), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(pdDOM.svgText("HEATING", d)), delete d.transform, s.length = 0, s.push([o + 5, a]), s.push([o + 16, Math.min(a, ei(o + 16, 30))]), s.push([o + 19, Math.min(a, ei(o + 19, 20))]), s.push([o + 21, Math.min(a, ei(o + 21, 10))]), s.push([o + 21, 0]), i = ei(o, 20), e = o + Q * (i - M), s.push([e, 0]), s.push([o, i]), null != (t = si(di(s), l)) && (d.x = Ke(.5 * (e + o + 21)), d.y = ze.maxY - 15 * n, ce.appendChild(t), ce.appendChild(pdDOM.svgText("EVAPORATIVE COOLING", d))), s.length = 0, s.push([o + 5, a]), s.push([o + 13, a]), i = Math.min(a, ei(o + 17, 30)), s.push([o + 17, i]), s.push([o + 17, r = Math.min(a, ei(o, 20))]), s.push([o, r]), null != (t = si(di(s), l)) && (d.x = Ke(o + 17) - 12 * n, d.y = Qe(o + 17, .5 * (i + r)), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgText("MASS COOLING", d))), s.length = 0, s.push([o + 13, a]), s.push([o + 20, a]), r = Math.min(a, ei(o + 24, 20)), s.push([o + 24, r]), s.push([o + 24, i = Math.min(a, ei(o, 20))]), s.push([o, i]), null != (t = si(di(s), l)) && (d.x = Ke(o + 24) - 12 * n, d.y = Qe(o + 24, .5 * (i + r)), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", p = "MASS COOLING &\nNIGHT VENTILATION", R > .25 && (ie < 800 ? p = "MASS COOL &\nNIGHT VENT." : ie < 950 && (p = "MASS COOLING &\nNIGHT VENT.")), ce.appendChild(t), ce.appendChild(pdDOM.svgTextMultiLine(p, d)));
                    s.length = 0, l["stroke-dasharray"] = "4, 4", li(o - .5, 20, o - 2, 20, s), s.push([o - 2, i = ei(o - 2, 20)]), r = Math.min(ei(o - 2, 80), 16), s.push([o - 2, r]), li(o - 2, 80, o - .5, 80, s, 16), null != (t = si(di(s), l)) && (d.x = Ke(o - 2) + 12 * n, d.y = Qe(o - 2, .5 * (i + r)), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgTextMultiLine("WINTER", d))), s.length = 0, s.push([o + 20, a]), e = Math.max(f, o + 25.5), s.push([e, a]), s.push([e, 0]), s.push([o + 21, 0]), l["stroke-dasharray"] = "8, 4", null != (t = si(di(s), l)) && (d.x = Ke(e) - 12 * n, d.y = Qe(e, .5 * a), p = R < .5 ? "AIR-CONDITIONING" : "AIR-COND.", d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), ce.appendChild(pdDOM.svgText(p, d)));
                    delete d.transform, d.x = Ke(o + 19), i = .5 * (a + 30) + 8 * R, d.y = Math.max(Qe(o + 19, i), ze.minY + 15), ce.appendChild(pdDOM.svgTextMultiLine("AIR-CONDITIONING &\nDEHUMIDIFICATION", d)), d.x = Ke(o - 5), d.y = Qe(o - 5, 0) - 15 * n, ce.appendChild(pdDOM.svgText("HUMIDIFICATION", d)), s.length = 0, s.push({
                        x: Ke(Yt.meanOutdoorTemperature), y: Je(Yt.meanOutdoorTemperature, 0) + 15
                    }), s.push({
                        x: Ke(Yt.meanOutdoorTemperature), y: Math.max(ze.minY, Je(Yt.meanOutdoorTemperature, 100)) - 45
                    }), l["stroke-width"] = "1.5", l["stroke-dasharray"] = "2, 4", null != (t = si(s, l)) && (d.class = "text-axis font-overlay", d["text-anchor"] = "end", d.dy = "1.1em", d.x = Ke(Yt.meanOutdoorTemperature), d.y = Math.max(ze.minY - 2, Je(Yt.meanOutdoorTemperature, 100) - 4), d.transform = "rotate(90, " + d.x.toFixed(1) + ", " + d.y.toFixed(1) + ")", ce.appendChild(t), e = Ge.fromCelsius(Yt.meanOutdoorTemperature), ce.appendChild(pdDOM.svgText(e.toFixed(1) + " " + Ge.getAbbrev(), d)));
                }(), z && (Ii(), Ri(.5));
                break;

            case st:
                i = Math.round(Math.max(1, f - m)) + 2, r = (f - m) / (i - 2), jt.setSize(i, 21), jt.map(function (i, a, n) {
                    e = 5 * n, t = m + a * r, i.x = Ke(t), i.y = Je(t, e), Kt && (i.value = Yt.calcHeatIndex(t, e));
                }), Kt = !1, z ? (Ri(xt > 0 ? .5 : .75), function () {
                    var t, e, i, r = {
                        stroke: "#000", "stroke-width": "0.5", fill: "none"
                    }, a = {
                        "class": "text-axis font-overlay", "text-anchor": "end", dx: "-0.5em", dy: "-0.4em"
                    }, n = {
                        "class": "font-overlay",
                        "text-anchor": "middle",
                        "font-size": Ci().toFixed(1) + "em",
                        "font-weight": "bold",
                        fill: "#444",
                        dy: "-0.6em"
                    }, o = [];
                    switch (Ge.units) {
                        default:
                        case pdUnits.KELVIN:
                            o.push(Ge.fromCelsius(27)), o.push(Ge.fromCelsius(32)), o.push(Ge.fromCelsius(40)), o.push(Ge.fromCelsius(52)), o.push(Ge.fromCelsius(1e3));
                            break;

                        case pdUnits.RANKINE:
                        case pdUnits.FARENHEIT:
                            o.push(Ge.fromFarenheit(80)), o.push(Ge.fromFarenheit(90)), o.push(Ge.fromFarenheit(103)), o.push(Ge.fromFarenheit(125)), o.push(Ge.fromFarenheit(1832));
                    }
                    for (var s = [Oi[0] = Ge.toCelsius(o[0]), Oi[1] = Ge.toCelsius(o[1]), Oi[2] = Ge.toCelsius(o[2]), Oi[3] = Ge.toCelsius(o[3]), Oi[4] = Ge.toCelsius(o[4])], l = 0, d = s.length; l < d; ++l) t = s[l], e = Ni(s[l]), r.points = Hi(e), r.points.length > 0 && (de.appendChild(pdDOM.svgElem("polyline", r)), (i = e.length) > 2 && (e[0].x > ze.maxX - 5 ? (a["text-anchor"] = "start", a.dx = "0.5em", wi(e[i - 3].x, e[i - 3].y, e[i - 1].x, e[i - 1].y, a), de.appendChild(pdDOM.svgText(o[l].toFixed(0), a)), a["text-anchor"] = "end", a.dx = "-0.5em") : (wi(e[0].x, e[0].y, e[2].x, e[2].y, a), de.appendChild(pdDOM.svgText(o[l].toFixed(0), a))), e.length > 10 && (wi(e[6].x, e[6].y, e[10].x, e[10].y, n), de.appendChild(pdDOM.svgText(Ei(t), n)))));
                }()) : function () {
                    var t, e, i, r, a = {
                        stroke: "#000", "stroke-width": "0.5", "fill-opacity": "0.5", fill: "none"
                    }, n = {
                        "class": "text-axis font-overlay", "text-anchor": "end", dx: "-0.5em", dy: "-0.4em"
                    }, o = {
                        "class": "font-overlay",
                        "text-anchor": "middle",
                        "font-size": Ci().toFixed(1) + "em",
                        "font-weight": "bold",
                        fill: "#444",
                        dy: "-0.6em"
                    }, s = [];
                    switch (Ge.units) {
                        default:
                        case pdUnits.KELVIN:
                            s.push(Ge.fromCelsius(27)), s.push(Ge.fromCelsius(32)), s.push(Ge.fromCelsius(40)), s.push(Ge.fromCelsius(52)), s.push(Ge.fromCelsius(1e3));
                            break;

                        case pdUnits.RANKINE:
                        case pdUnits.FARENHEIT:
                            s.push(Ge.fromFarenheit(80)), s.push(Ge.fromFarenheit(90)), s.push(Ge.fromFarenheit(103)), s.push(Ge.fromFarenheit(125)), s.push(Ge.fromFarenheit(1832));
                    }
                    var l = [Oi[0] = Ge.toCelsius(s[0]), Oi[1] = Ge.toCelsius(s[1]), Oi[2] = Ge.toCelsius(s[2]), Oi[3] = Ge.toCelsius(s[3]), Oi[4] = Ge.toCelsius(s[4])];
                    i = Ni(l[0]);
                    for (var d = 1, p = l.length; d < p; ++d) t = l[d - 1], e = Ni(l[d]), a.points = Hi(i, e), a.points.length > 0 && (a.fill = ki(t), de.appendChild(pdDOM.svgElem("polygon", a)), (r = i.length) > 2 && (i[0].x > ze.maxX - 5 ? (n["text-anchor"] = "start", n.dx = "0.25em", wi(i[r - 3].x, i[r - 3].y, i[r - 1].x, i[r - 1].y, n), de.appendChild(pdDOM.svgText(s[d - 1].toFixed(0), n)), n["text-anchor"] = "end", n.dx = "-0.25em") : (wi(i[0].x, i[0].y, i[2].x, i[2].y, n), de.appendChild(pdDOM.svgText(s[d - 1].toFixed(0), n))), i.length > 10 && (wi(i[6].x, i[6].y, i[10].x, i[10].y, o), de.appendChild(pdDOM.svgText(Ei(t), o))))), i = e;
                }();
                break;

            case lt:
                Ii(), z && Ri(xt > 0 ? .5 : .75), function (t) {
                    var e, i, r, a, n, o, s = "", l = {
                        stroke: "#000",
                        "stroke-width": "0.5",
                        "stroke-opacity": "0.5",
                        "fill-opacity": "0.5",
                        fill: "none"
                    }, d = {
                        "class": "text-axis font-overlay", "text-anchor": "end", dx: "-0.5em", dy: "-0.4em"
                    }, p = {
                        "class": "font-overlay",
                        "text-anchor": "middle",
                        "font-size": Ci().toFixed(1) + "em",
                        "font-weight": "bold",
                        fill: "#444",
                        dy: "-0.4em"
                    }, u = [-1e3, -3, -2.5, -2, -1.5, -1, -.5, .5, 1, 1.5, 2, 2.5, 3, 1e3], c = u.length;
                    a = Ni(u[0]);
                    for (var h = 1; h < c; ++h) i = u[h - 1], r = Ni(u[h]), l.points = t ? Hi(a) : Hi(a, r), l.points.length > 0 && (t ? de.appendChild(pdDOM.svgElem("polyline", l)) : (e = .5 * (u[h - 1] + u[h]), l["fill-opacity"] = pd.mapAndConstrainTo(Math.abs(e - .35), 0, 3, .25, .75).toFixed(2), l.fill = Si(e), de.appendChild(pdDOM.svgElem("polygon", l))), Math.abs(i) < 3.01 && (n = a.length) > 2 && (i > 0 && (s = "+"), a[0].x > ze.maxX - 5 ? (d["text-anchor"] = "start", d.dx = "0.5em", wi(a[n - 3].x, a[n - 3].y, a[n - 1].x, a[n - 1].y, d), de.appendChild(pdDOM.svgText(s + u[h - 1].toFixed(1), d)), d["text-anchor"] = "end", d.dx = "-0.5em") : (wi(a[0].x, a[0].y, a[2].x, a[2].y, d), de.appendChild(pdDOM.svgText(s + u[h - 1].toFixed(1), d))), pd.closeTo(i, Math.round(i)) && n > 10 && (i >= 0 && (p.dy = "1.1em"), wi(a[6].x, a[6].y, a[10].x, a[10].y, p), de.appendChild(pdDOM.svgText((o = i) < -2.5 ? "COLD" : o < -1.5 ? "COOL" : o < -.5 ? "SLIGHTLY COOL" : o < .5 ? "NEUTRAL" : o < 1.5 ? "SLIGHTLY WARM" : o < 2.5 ? "WARM" : "HOT", p))))), a = r;
                    if ((a = Ni(0)).length > 2) {
                        l.points = "", l["stroke-width"] = "1.5px", l["stroke-dasharray"] = "4, 4", l.fill = "none";
                        var m, f, x = a[0].x, y = a[0].y;
                        if (y >= ze.minY && (l.points += x.toFixed(1) + "," + y.toFixed(1) + " "), (c = a.length) > 11) {
                            var g, b = !1, v = .5 * (a[6].x + a[10].x), M = .5 * (a[6].y + a[10].y),
                                T = Math.sqrt((v - x) * (v - x) + (M - y) * (M - y));
                            for (h = 1; h < 8; ++h) {
                                if (m = a[h].x, (f = a[h].y) < ze.minY && y >= ze.minY && (m = pd.mapTo(ze.minY, y, f, x, m), f = ze.minY, h = c), (g = Math.sqrt((v - m) * (v - m) + (M - f) * (M - f))) < 40) {
                                    m = pd.mapTo(40, T, g, x, m), f = pd.mapTo(40, T, g, y, f), l.points += m.toFixed(1) + "," + f.toFixed(1) + " ";
                                    break;
                                }
                                l.points += m.toFixed(1) + "," + f.toFixed(1) + " ", x = m, y = f, T = g;
                            }
                            for (l.points.length > 0 && de.appendChild(pdDOM.svgElem("polyline", l)), l.points = "", x = v, y = M, T = 0, h = 9; h < c; ++h) m = a[h].x, (f = a[h].y) < ze.minY && y >= ze.minY && (m = pd.mapTo(ze.minY, y, f, x, m), f = ze.minY, h = c), g = Math.sqrt((v - m) * (v - m) + (M - f) * (M - f)), (b || g > 40) && (b || (m = pd.mapTo(40, T, g, x, m), f = pd.mapTo(40, T, g, y, f)), l.points += m.toFixed(1) + "," + f.toFixed(1) + " ", b = !0), x = m, y = f, T = g;
                            l.points.length > 0 && de.appendChild(pdDOM.svgElem("polyline", l));
                        } else {
                            for (h = 1; h < c; ++h) m = a[h].x, (f = a[h].y) < ze.minY && y >= ze.minY && (m = pd.mapTo(ze.minY, y, f, x, m), f = ze.minY, h = c), l.points += m.toFixed(1) + "," + f.toFixed(1) + " ", x = m, y = f;
                            de.appendChild(pdDOM.svgElem("polyline", l));
                        }
                        wi(a[0].x, a[0].y, a[2].x, a[2].y, d), de.appendChild(pdDOM.svgText("0.0", d)), a.length > 10 && (p.dy = "0.35em", wi(a[6].x, a[6].y, a[10].x, a[10].y, p), de.appendChild(pdDOM.svgText("NEUTRAL", p)));
                    }
                }(z);
                break;

            case dt:
                Ii(), z && Ri(.5), function () {
                    var t = {
                        stroke: "#000",
                        "stroke-width": "0.5px",
                        "stroke-opacity": "0.5",
                        "fill-opacity": "0.5",
                        fill: "#0C0"
                    }, e = Ni(-.5), i = Ni(.5);
                    if (t.points = Hi(e, i), de.appendChild(pdDOM.svgElem("polygon", t)), e.length > 2 && i.length > 2) {
                        var r = {
                            "class": "text-axis font-overlay", "text-anchor": "end", dx: "-0.5em", dy: "1.1em"
                        };
                        if (wi(e[0].x, e[0].y, e[2].x, e[2].y, r), de.appendChild(pdDOM.svgText("PMV -0.5", r)), r.dy = "-0.4em", wi(i[0].x, i[0].y, i[2].x, i[2].y, r), de.appendChild(pdDOM.svgText("PMV +0.5", r)), e.length > 7 && i.length > 7) {
                            var a = Math.floor(e.length / 2) - 2, n = {
                                "class": "font-overlay",
                                "text-anchor": "middle",
                                "font-size": Ci().toFixed(1) + "em",
                                "font-weight": "bold",
                                fill: "#444",
                                dy: "0.4em"
                            }, o = .5 * (e[a - 2].x + i[a - 2].x), s = .5 * (e[a + 2].x + i[a + 2].x);
                            wi(o, .5 * (e[a - 2].y + i[a - 2].y), s, .5 * (e[a + 2].y + i[a + 2].y), n), de.appendChild(pdDOM.svgText("COMFORT", n));
                        }
                    }
                }();
                break;

            case pt:
                Ii(), z && Ri(.5), function () {
                    var t = {
                        stroke: "#000",
                        "stroke-width": "0.5px",
                        "stroke-opacity": "0.5",
                        "fill-opacity": "0.25",
                        fill: "#0C0"
                    }, e = {
                        "class": "text-axis font-overlay", "text-anchor": "end", dx: "-0.5em", dy: "1.1em"
                    }, i = Ni(-.7), r = Ni(.7);
                    if (t.points = Hi(i, r), de.appendChild(pdDOM.svgElem("polygon", t)), i.length > 2 && r.length > 2 && (e.dy = "1.1em", wi(i[0].x, i[0].y, i[2].x, i[2].y, e), de.appendChild(pdDOM.svgText("PMV -0.7", e)), e.dy = "-0.4em", wi(r[0].x, r[0].y, r[2].x, r[2].y, e), de.appendChild(pdDOM.svgText("PMV +0.7", e))), i = Ni(-.5), r = Ni(.5), t.points = Hi(i, r), de.appendChild(pdDOM.svgElem("polygon", t)), i = Ni(-.2), r = Ni(.2), t.points = Hi(i, r), de.appendChild(pdDOM.svgElem("polygon", t)), i.length > 2 && r.length > 2 && (e.dy = "1.1em", wi(i[0].x, i[0].y, i[2].x, i[2].y, e), de.appendChild(pdDOM.svgText("PMV -0.2", e)), e.dy = "-0.4em", wi(r[0].x, r[0].y, r[2].x, r[2].y, e), de.appendChild(pdDOM.svgText("PMV +0.2", e))), i.length > 7 && r.length > 7) {
                        var a = Math.floor(i.length / 2) - 2, n = {
                            "class": "font-overlay",
                            "text-anchor": "middle",
                            "font-size": Ci().toFixed(1) + "em",
                            "font-weight": "bold",
                            fill: "#444",
                            dy: "0.4em"
                        }, o = .5 * (i[a - 2].x + r[a - 2].x), s = .5 * (i[a + 2].x + r[a + 2].x);
                        wi(o, .5 * (i[a - 2].y + r[a - 2].y), s, .5 * (i[a + 2].y + r[a + 2].y), n), de.appendChild(pdDOM.svgText("COMFORT", n));
                    }
                }();
        }
        var t, e, i, r;
    }

    function Gi() {
        if (Qt.find("[class*=process]").empty(), function () {
            if (Ut && Ut.length > 0) {
                var t, e, i, r, a, n, o, s, l, d, p, u, c = {
                    "class": "line-blue",
                    "marker-start": "url(#markerProcessPt)",
                    "stroke-dasharray": "10, 5",
                    stroke: "#00F",
                    fill: "none"
                }, h = {
                    "class": "font-overlay",
                    "text-anchor": "middle",
                    "font-size": (.85 * Ci()).toFixed(1) + "em",
                    "font-weight": "bold",
                    fill: "#444",
                    dy: "-1.2em"
                }, m = Ut.length;
                if (1 == m) e = Ut[0], o = Ke(e.dbt), s = Je(e.dbt, e.rel), c.points = o.toFixed(1) + "," + s.toFixed(1) + " ", c.points += (o + 1).toFixed(1) + "," + s.toFixed(1) + " ", t = pdDOM.svgElem("polyline", c), he.appendChild(t), h.x = o.toFixed(1), h.y = s.toFixed(1), he.appendChild(pdDOM.svgText(e.name, h)); else if (m > 1) {
                    c["marker-end"] = "url(#markerProcessPt)", e = Ut[m - 1], a = Ke(e.dbt), n = Je(e.dbt, e.rel), e = Ut[0], o = Ke(e.dbt), s = Je(e.dbt, e.rel), p = ei(e.dbt, e.rel);
                    for (var f = 1; f < m; ++f) i = Ut[f], u = ei(i.dbt, i.rel), l = Ke(i.dbt), Math.abs(u - p) > 3 && Math.abs(i.rel - e.rel) < Math.abs(i.dbt - e.dbt) ? (d = Je(i.dbt, i.rel), r = ci(e.dbt, e.rel, i.dbt, i.rel)) : (d = Qe(i.dbt, u), r = pi(e.dbt, p, i.dbt, u)), r.length > 0 && null != (t = si(r, c)) && (he.appendChild(t), h.x = o.toFixed(1), h.y = s.toFixed(1), Ui(h, a, n, o, s, l, d), he.appendChild(pdDOM.svgText(e.name, h))), 1 == f && delete c["marker-start"], e = i, p = u, a = o, n = s, o = l, s = d;
                    e = Ut[0], l = Ke(e.dbt), d = Je(e.dbt, e.rel), h.x = o.toFixed(1), h.y = s.toFixed(1), Ui(h, a, n, o, s, l, d), he.appendChild(pdDOM.svgText(i.name, h));
                }
            }
        }(), Bt > 0) {
            var t, e, i, r, a, n, o, s, l, d, p, u = 10, c = Ci(), h = pd.mapAndConstrainTo(R, 0, 1, 1, -1),
                m = ee < 750 || ie < 500 ? "HUMIDIF." : "HUMIDIFICATION", f = !1, x = [], y = {
                    "class": "line-blue",
                    "marker-end": "url(#markerBlueArrow)",
                    "stroke-dasharray": "10, 5",
                    stroke: "#00F",
                    fill: "none"
                }, g = {
                    "class": "font-overlay",
                    "text-anchor": "middle",
                    "font-size": c.toFixed(1) + "em",
                    "font-weight": "bold",
                    fill: "#00F",
                    dy: "-0.2em"
                }, b = {
                    "class": "line-axis", "marker-end": "url(#markerBlackArrow)", fill: "none"
                }, v = {
                    "class": "font-overlay",
                    "text-anchor": "end",
                    "font-size": (.85 * c).toFixed(1) + "em",
                    fill: "#000",
                    dy: "0.4em"
                };
            if (Bt & Rt) {
                x.length = 0, i = Wt.abs, s = Wt.calcDewPointTemperature(i), d = 3, p = 5, u = 11, (Bt == Rt || Bt == Rt | Nt) && (u = 20);
                for (var T = 0; T <= u; ++T) {
                    if (r = Ke(e = Wt.dbt - T), e < s + .01) {
                        if (e + 1 > s && (f = !0, n = Math.round(Ke(s)), o = Math.round(Qe(s, i)), v.x = n - 50 * c, v.y = o - 30 * h * c, he.appendChild(pdDOM.svgText("DEW POINT", v)), he.appendChild(pdDOM.svgElem("circle", {
                            fill: "#00F", r: 3 * c, cx: n, cy: o
                        })), null != (t = si([{
                            x: n - 45 * c, y: o - 30 * h * c
                        }, {
                            x: n - 25 * c, y: o - 30 * h * c
                        }, {
                            x: n - 5 * c, y: o - 5 * h * c
                        }], b)) && he.appendChild(t), T < 7 && (d = 7, p = 9), T > 1 && (T <= d && ++d, T <= p && ++p, x.push({
                            x: n, y: o
                        }), T >= u && Math.abs(n - r) < 5))) break;
                        a = Je(e, 100);
                    } else a = Qe(e, i);
                    x.push({
                        x: r, y: a
                    });
                }
                null != (t = si(x, y)) && (wi(x[d].x, x[d].y, x[p].x, x[p].y, g), he.appendChild(t), he.appendChild(pdDOM.svgTextMultiLine("SENSIBLE\nCOOLING", g)));
            }
            if (Bt & Nt) {
                x.length = 0, i = Wt.abs, d = 3, p = 5, u = 11, (Bt == Nt || Bt == Rt | Nt) && (u = 15);
                for (T = 0; T <= u; ++T) e = Wt.dbt + T, x.push({
                    x: Ke(e), y: Qe(e, i)
                });
                null != (t = si(x, y)) && (wi(x[d].x, x[d].y, x[p].x, x[p].y, g), he.appendChild(t), he.appendChild(pdDOM.svgTextMultiLine("SENSIBLE\nHEATING", g)));
            }
            if (Wt.abs > .499 && Bt & Ht && (x.length = 0, a = Qe(Wt.dbt, Wt.abs), o = Qe(Wt.dbt, Math.max(0, Wt.abs - 11)), r = Ke(Wt.dbt), x.push({
                x: r, y: a
            }), x.push({
                x: r, y: o
            }), null != (t = si(x, y)) && (he.appendChild(t), Math.abs(o - a) > 130 * c && (g.x = r, g.y = Math.round(.5 * (o + a)), g.transform = "rotate(90, " + g.x.toFixed(1) + ", " + g.y.toFixed(1) + ")", he.appendChild(pdDOM.svgText("DE" + m, g))))), Bt & wt) {
                var A = 0, C = Wt.dbt;
                x.length = 0, e = Wt.dbt, l = Wt.calcSaturationPoint(e), d = h < 0 ? 3 : 5, p = h < 0 ? 2 : 3, r = Ke(e), u = 11;
                for (T = 0; T <= u; ++T) {
                    if (i = Wt.abs + T, a = Math.round(Qe(e, i)), i > l - .01) {
                        if (i - 1 < l && (n = Math.round(Ke(e)), o = Math.round(Qe(e, l)), A = T, (!f || h < 0 || Wt.abs < l - .4) && (v.x = n - 50 * h * c, v.y = o - 30 * h * c, h < 0 && (v["text-anchor"] = "start"), he.appendChild(pdDOM.svgText("SATURATION", v)), he.appendChild(pdDOM.svgElem("circle", {
                            fill: "#00F", r: 3 * c, cx: n, cy: o
                        })), h < 0 && (v["text-anchor"] = "end"), null != (t = si([{
                            x: n - 45 * h * c, y: o - 30 * h * c
                        }, {
                            x: n - 25 * h * c, y: o - 30 * h * c
                        }, {
                            x: n - 5 * h * c, y: o - 5 * h * c
                        }], b)) && he.appendChild(t)), T > 0 && (x.push({
                            x: n, y: o
                        }), T >= u && (s = Wt.calcDewPointTemperature(i), Math.abs(Ke(s) - r) < 5)))) break;
                        C < (s = Wt.calcDewPointTemperature(i)) && (C = s), r = Ke(s), a = Je(s, 100);
                    }
                    x.push({
                        x: r, y: a
                    });
                }
                null != (t = si(x, y)) && (A > 0 && A < (h < 0 ? 5 : 7) ? wi(Ke((e = .5 * (e + C)) + .5), Je(e + .5, 100), Ke(e - .5), Je(e - .5, 100), g) : wi(x[d].x, x[d].y, x[p].x, x[p].y, g), he.appendChild(t), he.appendChild(pdDOM.svgText("" + m, g)));
            }
            if (Bt & Lt) if (x.length = 0, d = 4, p = 6, u = 11, (S = (s = Wt.calcWetBulbTemperature(Wt.dbt, Wt.abs)) - Wt.dbt) < -.5) {
                var D = (l = Wt.calcSaturationPoint(s)) - Wt.abs;
                for (T = 0; T <= 1; T += .1) e = Wt.dbt + T * S, i = Wt.abs + T * D, x.push({
                    x: Ke(e), y: Qe(e, i)
                });
                null != (t = si(x, y)) && (he.appendChild(t), (h < 0 && D > 1 || h >= 0 && S < -5) && (wi(x[d].x, x[d].y, x[p].x, x[p].y, g), he.appendChild(pdDOM.svgTextMultiLine("COOLING +\n" + m, g))));
            }
            if (Wt.abs > .499 && Bt & It) {
                x.length = 0, d = 4, p = 6;
                var S;
                D = Math.min(6, Wt.abs);
                if ((S = (s = Wt.dbt + Q * (D - M)) - Wt.dbt) > .5) {
                    for (T = 0; T <= 1; T += .1) e = Wt.dbt + T * S, i = Wt.abs - T * D, x.push({
                        x: Ke(e), y: Qe(e, i)
                    });
                    null != (t = si(x, y)) && (he.appendChild(t), Math.abs(x[x.length - 1].x - x[0].x) > 140 * c && (wi(x[d].x, x[d].y, x[p].x, x[p].y, g), he.appendChild(pdDOM.svgTextMultiLine("HEATING +\nDE" + m, g))));
                }
            }
            Bt & Gt && (x.length = 0, r = Ke(Wt.dbt), a = Je(Wt.dbt, Wt.rel), u = Ke(Wt.dbt + 10) - r, R > .1 && a < ze.minY + u && (u = pd.mapAndConstrainTo(R, .1, 1, u, a - ze.minY)), x.push({
                x: r, y: a
            }), x.push({
                x: r + u, y: a - u
            }), null != (t = si(x, y)) && (he.appendChild(t), Math.abs(u) > 110 * c && (wi(x[1].x, x[1].y, x[0].x, x[0].y, g), he.appendChild(pdDOM.svgTextMultiLine("HEATING +\n" + m, g))))), Wt.abs > .499 && Bt & Vt && (x.length = 0, r = Ke(Wt.dbt), a = Je(Wt.dbt, Wt.rel), u = r - Ke(Wt.dbt - 10), a > ze.maxY - u && (u = ze.maxY - a), x.push({
                x: r, y: a
            }), x.push({
                x: r - u, y: a + u
            }), null != (t = si(x, y)) && (he.appendChild(t), Math.abs(u) > 100 && (wi(x[0].x, x[0].y, x[1].x, x[1].y, g), he.appendChild(pdDOM.svgTextMultiLine("COOLING +\nDE" + m, g)))));
        }
    }

    function _i() {
        Qt.find("[class*=overlay]").empty(), (U || nt == tt) && function () {
            var t, e, i, r, a = Ge.getAbbrev(), n = nt == tt ? " hilite" : "";
            e = .5 * (m + f), r = Wt.calcSaturationPoint(e), i = e + Q * (r - M);
            var o = hi(), s = pd.safeDivide(Ke(i) - Ke(e), Xe(r) - Xe(0));
            o.tickClass = "line-axis" + n, o.textClass = "text-grid" + n, o.abs.textAngle = pd.radiansToDegrees(Math.atan2(1, -s)), o.abs.tickOffset.x = 4 * s, o.abs.tickOffset.y = -4, o.abs.textDy = .3;
            var l = !0;
            (W || Y || j || nt == et || nt == it || nt == rt) && (l = nt == tt);
            var d, p, u, c = Ge.axisFormat, h = Math.max(0, Ge.tickMinor), x = Math.max(0, Ge.tickMajor),
                y = Ge.fromCelsius(m), g = Ge.fromCelsius(f), b = Math.max(1e-6, g - y);
            if (x < b / 200 && (x = -1), h < b / 500 && (h = -1), x > 0) {
                for (y -= x, g -= h, p = pd.snapTo(y - .5 * x, x) - 10; p < g; p += x) if (e = Ge.toCelsius(p), r = Wt.calcSaturationPoint(e), (i = e + Q * (r - M)) > m && (t = ui(e, r, i, 0, o.tickClass, 1)) && (ce.appendChild(t), l && (e > m || te.left > 24) && (o.pos.dbt = e, o.pos.abs = r, o.text = c(p), mi(ce, o))), u = p + x, h > 0) for (d = p + h; d < u; d += h) e = Ge.toCelsius(d), r = Wt.calcSaturationPoint(e), (i = e + Q * (r - M)) > m && (t = ui(e, r, i, 0, o.tickClass, .4)) && ce.appendChild(t);
            } else if (h > 0) for (d = pd.snapTo(y, h) + h; d < g; d += h) e = Ge.toCelsius(d), r = Wt.calcSaturationPoint(e), (i = e + Q * (r - M)) > m && (t = ui(e, r, i, 0, o.tickClass, .4)) && ce.appendChild(t);
            l && fi(ce, o, a, "Wet Bulb Temp.", n);
        }(), (W || nt == et) && function () {
            var t, e, i, r, a = M, n = T, o = nt == et ? " hilite" : "", s = hi();
            s.tickClass = "line-axis" + o, s.textClass = "text-grid" + o, s.abs.tickOffset.x = -5, s.abs.tickOffset.y = 0, s.abs.textDy = .5;
            var l = !0;
            (Y || j || nt == tt || nt == it || nt == rt) && (l = nt == et), k == O && (a = Wt.calcAbsFromRelHumidity(f, M), n = Wt.calcAbsFromRelHumidity(f, T));
            var d, p, u, c = Ye.axisFormat, h = Math.max(0, Ye.tickMinor), x = Math.max(0, Ye.tickMajor),
                y = Ye.fromKiloPascal(Wt.calcVapourPressure(a)), g = Ye.fromKiloPascal(Wt.calcVapourPressure(n)),
                b = Math.max(1e-6, g - y);
            if (x < b / 200 && (x = -1), h < b / 500 && (h = -1), x > 0) {
                for (p = pd.snapTo(y - .5 * x, x); p <= g; p += x) if (r = Ye.toKiloPascal(p), (e = Wt.calcAbsHumidityFromVapPressure(r)) >= M && (t = ui(i = e < 1e-6 ? m : Wt.calcDewPointTemperature(e), e, f, e, s.tickClass, 1)) && (ce.appendChild(t), l && e > 0 && (s.pos.dbt = i, s.pos.abs = e, s.text = c(p), s.abs.tickOffset.x = pd.mapAndConstrainTo(e, M, T, -12, -5), mi(ce, s))), u = p + x, h > 0) for (d = p + h; d < u; d += h) r = Ye.toKiloPascal(d), (e = Wt.calcAbsHumidityFromVapPressure(r)) > M && (t = ui(i = e < 1e-6 ? m : Wt.calcDewPointTemperature(e), e, f, e, s.tickClass, .4)) && ce.appendChild(t);
            } else if (h > 0) for (d = pd.snapTo(y, h) + h; d <= g; d += h) r = Ye.toKiloPascal(d), (e = Wt.calcAbsHumidityFromVapPressure(r)) > M && (t = ui(i = e < 1e-6 ? m : Wt.calcDewPointTemperature(e), e, f, e, s.tickClass, .4)) && ce.appendChild(t);
            l && fi(ce, s, Ye.getAbbrev(), "Vapour Pressure", o);
        }(), (Y || nt == it) && function () {
            var t, e, i, r, a, n, o, s, l, d, p, u = nt == it ? " hilite" : "", c = !1;
            e = .5 * (m + f), a = Wt.calcSaturationPoint(e), i = 350 * (s = Wt.calcSpecificVolume(e, a)) - 270.5;
            var h = hi(), x = pd.safeDivide(Ke(i) - Ke(e), Xe(a) - Xe(0));
            h.tickClass = "line-axis" + u, h.textClass = "text-grid" + u, h.abs.textAngle = pd.radiansToDegrees(Math.atan2(1, -x)), h.abs.tickOffset.x = 6 * x, h.abs.tickOffset.y = -6, h.abs.textDy = .3;
            var y = !0;
            (j || nt == tt || nt == et || nt == rt) && (y = nt == it);
            var b = Ue.axisFormat, v = Ue.tickMajor, M = Ue.toCubicMetersPerKilogram(Ue.tickMinor);
            i = m, n = Wt.calcSaturationPoint(i), l = Wt.calcSpecificVolume(i, n), (s = pd.snapTo(l, M)) < l && (s += M);
            var T = pd.snapTo(m, g);
            for (T < m && (T += g), r = T; r <= f; r += g) {
                for (o = Wt.calcSaturationPoint(r), d = Wt.calcSpecificVolume(r, o), p = 0; l < s && d >= s && (e = pd.mapTo(s, l, d, i, r), a = pd.mapTo(s, l, d, n, o), c = Math.round(s / M) % v, (t = ui(e, a, 350 * s - 270.5, 0, h.tickClass, c ? .4 : 1)) && (ce.appendChild(t), y && !c && (h.pos.dbt = e, h.pos.abs = a, h.text = b(Ue.fromCubicMetersPerKilogram(s)), mi(ce, h))), s += M, !(++p > 10)););
                i = r, n = o, l = d;
            }
            y && fi(ce, h, Ue.getAbbrev(), "Air Volume", u);
        }(), (j || nt == rt) && function () {
            var t, e, i, r, a, n, o, s, l, d, p, u = nt == rt ? " hilite" : "", c = !1, h = 5;
            e = .5 * (m + f), a = Wt.calcSaturationPoint(e), i = (s = Wt.calcEnthalpy(e, a)) / 1.006;
            var x = hi(), y = pd.safeDivide(Ke(i) - Ke(e), Xe(a) - Xe(0));
            x.tickClass = "line-axis" + u, x.textClass = "text-grid" + u, x.abs.textAngle = pd.radiansToDegrees(Math.atan2(1, -y)), x.abs.tickOffset.x = 3 * y, x.abs.tickOffset.y = -3, x.abs.textDy = .4;
            var b = !0;
            nt != tt && nt != et && nt != it || (b = nt == rt);
            var v = We.axisFormat, M = (h = We.tickMajor, We.toKiloJoulesPerKilogram(We.tickMinor));
            i = m, n = Wt.calcSaturationPoint(i), l = Wt.calcEnthalpy(i, n), (s = pd.snapTo(l, M)) < l && (s += M);
            var T = pd.snapTo(m, g);
            for (T < m && (T += g), r = T; r <= f; r += g) {
                for (o = Wt.calcSaturationPoint(r), d = Wt.calcEnthalpy(r, o), p = 0; l < s && d >= s && (e = pd.mapTo(s, l, d, i, r), a = pd.mapTo(s, l, d, n, o), s > 125 && R > .5 && (h = 4), c = Math.round(s / M) % h, (t = ui(e, a, s / 1.006, 0, x.tickClass, c ? .4 : 1)) && (ce.appendChild(t), b && !c && (x.pos.dbt = e, x.pos.abs = a, x.text = v(We.fromKiloJoulesPerKilogram(s)), mi(ce, x))), s += M, !(++p > 10)););
                i = r, n = o, l = d;
            }
            b && fi(ce, x, We.getAbbrev(), "Enthalpy", u);
        }(), Gi(), ke.setAttributeNS(null, "class", z || xt || ut == lt ? "line-marker" : "line-hilite"), Li(), Vi();
    }

    function Bi() {
        Pe || (xe.setAttributeNS(null, "display", "none"), xe.appendChild(Pe = pdDOM.svgElem("rect", {
            "class": "tooltip-rect", rx: "4px", ry: "4px", x: .5 * -l, y: -s - o, width: l, height: s
        })), xe.appendChild(Fe = pdDOM.svgText("0.00", {
            "class": "tooltip", "text-anchor": "middle", dy: "0.4em", x: 0, y: 0
        }))), Fe.setAttributeNS(null, "y", -Math.round(.5 * s) - o), Pe.setAttributeNS(null, "x", .5 * -l), Pe.setAttributeNS(null, "height", s), Pe.setAttributeNS(null, "width", l);
    }

    function Ui(t, e, i, r, a, n, o, s) {
        var l = e - r, d = i - a, p = n - r, u = o - a, c = 0, h = 0, m = 0;
        s = pd.toNumber(s, 1.25), (Math.abs(Math.round(l)) > .1 || Math.abs(Math.round(d)) > .1) && (c = Math.atan2(d, l), ++m), (Math.abs(Math.round(p)) > .1 || Math.abs(Math.round(u)) > .1) && (h = Math.atan2(u, p), ++m), m < 1 && (m = 1);
        var f = pd.wrapAt((c + h) / m, 0, pd.Const.TWO_PI);
        switch (Math.abs(h - c) < Math.PI && (f = pd.wrapAt(f + Math.PI, 0, pd.Const.TWO_PI)), t.dx = (s * Math.cos(f)).toFixed(1) + "em", t.dy = (.4 + s * Math.sin(f)).toFixed(1) + "em", Math.round(pd.radiansToDegrees(f) / 45)) {
            case 0:
            case 1:
            case 7:
            case 8:
                t["text-anchor"] = "start";
                break;

            case 2:
            case 6:
                t["text-anchor"] = "middle";
                break;

            case 3:
            case 4:
            case 5:
                t["text-anchor"] = "end";
        }
    }

    function Wi() {
        if (K) {
            var t = 0;
            Wt.setDBTABS(Wt.dbt, Wt.abs);
            var e = Ke(Wt.dbt), i = Qe(Wt.dbt, Wt.abs);
            if (fe.setAttributeNS(null, "transform", "translate(" + e.toFixed(1) + ", " + i.toFixed(1) + ")"), Ee.length < 8) return;
            if (k != O) {
                var r = Ge.getAbbrev();
                if (t = Ge.fromCelsius(Wt.dryBulb), pdDOM.svgSetText(Ee[1], "Dry Bulb: " + t.toFixed(2) + " " + r), pdDOM.svgSetText(Ee[2], "Rel Humidity: " + Wt.relativeHumidity.toFixed(2) + "%"), ut == st) {
                    pdDOM.svgSetText(Ee[0], "CONDITION:");
                    var a = Yt.calcHeatIndex(Wt.dryBulb, Wt.relativeHumidity);
                    t = Ge.fromCelsius(a), pdDOM.svgSetText(Ee[3], "Heat Index: " + pd.toStringWithPrecisionRange(t, 1, 5) + " " + r), pdDOM.svgSetText(Ee[4], "");
                    for (var n = (D = a) < Oi[0] ? ["Heat stress unlikely."] : D < Oi[1] ? ["Caution:", "Fatigue is possible with prolonged exposure and activity.", "Continuing activity may result in heat cramps."] : D < Oi[2] ? ["Extreme Caution:", "Heat cramps and heat exhaustion are possible.", "Continued activity may result in heat stroke."] : D < Oi[3] ? ["DANGER:", "Heat cramps and heat exhaustion are highly likely.", "Heat stroke is probable with continued activity."] : ["EXTREME DANGER:", "Heat stroke is highly likely."], o = 0; o < 4; ++o) pdDOM.svgSetText(Ee[5 + o], o < n.length ? n[o] : "");
                    pdDOM.svgAttr(Ee[5], {
                        "font-weight": a >= Oi[0] ? "bold" : "normal"
                    }), a >= Oi[2] ? Ee[5].style.fill = ki(a) : Ee[5].style.fill = "black";
                } else if (ut >= lt) {
                    Yt.dryBulbTemperature = Wt.dryBulb, Yt.relativeHumidity = Wt.relativeHumidity, Yt.calcPMVandSET();
                    var s = pd.constrainTo(Yt.PMV, -3, 3);
                    switch (pdDOM.svgSetText(Ee[3], "Sensation: " + ((C = Yt.PMV) < -3.5 ? "Very Cold" : C < -2.5 ? "Cold" : C < -1.5 ? "Cool" : C < -.5 ? "Slightly Cool" : C < .5 ? "Neutral" : C < 1.5 ? "Slightly Warm" : C < 2.5 ? "Warm" : C < 3.5 ? "Hot" : "Very Hot")), t = Ge.fromCelsius(Yt.SET), pdDOM.svgSetText(Ee[4], "SET: " + t.toFixed(2) + " " + r), pdDOM.svgSetText(Ee[5], "PMV: " + (s > 0 ? "+" : "") + s.toFixed(2)), pdDOM.svgSetText(Ee[6], "PPD: " + Yt.PPD.toFixed(1) + "%"), ut) {
                        default:
                        case lt:
                            pdDOM.svgSetText(Ee[0], "ISO 7730:2005"), pdDOM.svgSetText(Ee[7], ""), pdDOM.svgSetText(Ee[8], "");
                            break;

                        case dt:
                            pdDOM.svgSetText(Ee[0], "ASHRAE 55-2017"), pdDOM.svgSetText(Ee[8], (A = s, (A = Math.abs(A)) <= .2 ? "Class: A" : A <= .5 ? "Class: B" : A <= .7 ? "Class: C" : "")), Math.abs(s) <= .5 ? (pdDOM.svgSetText(Ee[7], "COMPLIES"), pdDOM.svgAttr(Ee[7], {
                                "font-weight": "bold"
                            }), Ee[7].style.fill = "green") : (pdDOM.svgSetText(Ee[7], "WARNING: NOT COMPLIANT"), pdDOM.svgAttr(Ee[7], {
                                "font-weight": "bold"
                            }), Ee[7].style.fill = "red");
                            break;

                        case pt:
                            s = Math.abs(s), pdDOM.svgSetText(Ee[0], "EN 15251:2007"), pdDOM.svgSetText(Ee[8], "Category: " + (T = s, (T = Math.abs(T)) <= .2 ? "I" : T <= .5 ? "II" : T <= .7 ? "III" : "IV")), s <= .7 ? (pdDOM.svgSetText(Ee[7], "COMPLIES"), pdDOM.svgAttr(Ee[7], {
                                "font-weight": "bold"
                            }), Ee[7].style.fill = "green") : (pdDOM.svgSetText(Ee[7], "WARNING: NOT COMPLIANT"), pdDOM.svgAttr(Ee[7], {
                                "font-weight": "bold"
                            }), Ee[7].style.fill = "red");
                    }
                } else pdDOM.svgSetText(Ee[0], "INDICATOR:"), t = _e.fromGramsPerKilogram(Wt.absoluteHumidity), pdDOM.svgSetText(Ee[3], "Abs Humidity: " + pd.toStringWithPrecisionRange(t, 1, 5) + " " + _e.getAbbrev()), t = Ye.fromKiloPascal(Wt.vapPressure), pdDOM.svgSetText(Ee[4], "Vap Pressure: " + pd.toStringWithPrecisionRange(t, 1, 5) + " " + Ye.getAbbrev()), t = Ue.fromCubicMetersPerKilogram(Wt.airVolume), pdDOM.svgSetText(Ee[5], "Air Volume: " + pd.toStringWithPrecisionRange(t, 1, 5) + " " + Ue.getAbbrev()), t = We.fromKiloJoulesPerKilogram(Wt.enthalpy), pdDOM.svgSetText(Ee[6], "Enthalpy: " + pd.toStringWithPrecisionRange(t, 1, 5) + " " + We.getAbbrev()), t = Ge.fromCelsius(Wt.dewPoint), pdDOM.svgSetText(Ee[7], "Dew Point: " + t.toFixed(2) + " " + r), t = Ge.fromCelsius(Wt.wetBulb), pdDOM.svgSetText(Ee[8], "Wet Bulb: " + t.toFixed(2) + " " + r), pdDOM.svgAttr(Ee[5], {
                    "font-weight": "normal"
                }), pdDOM.svgAttr(Ee[7], {
                    "font-weight": "normal"
                }), Ee[5].style.fill = "black", Ee[7].style.fill = "black";
                var l = "";
                if (gt && xt == ct && bt.rows > 1 && bt.cols > 1) {
                    var d = St == S, p = Math.max(1, f - m), u = Math.max(1, d ? v : 100), c = d ? Wt.abs : Wt.rel,
                        x = p / (bt.cols - 1), y = u / (bt.rows - 1), g = Math.floor((Wt.dbt - m) / x),
                        b = Math.floor(c / y), M = bt.getCell(g, b);
                    if (M) {
                        l = "Grid: ";
                        t = M.value * pdSVG.getUnitsPrefixScaleFactor(gt.prefix);
                        l += Tt ? Tt(t) : t.toFixed(At), l += " " + pdSVG.getUnitsPrefix(gt.prefix) + h;
                    }
                }
                pdDOM.svgSetText(Ee[9], l);
            }
        }
        var T, A, C, D;
        (Bt || _t) && (null != _t && (_t.dbt = Wt.dbt, _t.rel = Wt.rel), Gi());
    }

    function Yi(t, e, i) {
        var r = Yt.calcHeatIndex(t, e);
        r < Oi[0] ? ++i.band[0] : r < Oi[1] ? ++i.band[1] : r < Oi[2] ? ++i.band[2] : r < Oi[3] ? ++i.band[3] : ++i.band[4], ++i.pointTotal;
    }

    function ji(t, e, i) {
        Yt.relativeHumidity = e, Yt.dryBulbTemperature = t, Yt.calcPMV();
        var r = pd.constrainTo(Math.round(Yt.PMV) + 3, 0, 6);
        ++i.band[r], ++i.pointTotal;
    }

    function zi(t, e, i) {
        Yt.relativeHumidity = e, Yt.dryBulbTemperature = t, Yt.calcPMV();
        var r = Yt.PMV;
        r >= -.5 && r <= .5 && ++i.pointCount, ++i.pointTotal;
    }

    function Ki(t, e, i) {
        Yt.relativeHumidity = e, Yt.dryBulbTemperature = t, Yt.calcPMV();
        var r = Yt.PMV;
        r >= -.2 && r <= .2 ? ++i.categoryI : r >= -.5 && r <= .5 ? ++i.categoryII : r >= -.7 && r <= .7 ? ++i.categoryIII : ++i.categoryIV, ++i.pointTotal;
    }

    this.show = function (t) {
        return t ? Qt.show() : Qt.hide(), e;
    }, this.fit = function () {
        return qe.x = 0, qe.y = 0, qe.w = Zt, qe.h = $t, qe.scale = 1, $e(), e;
    }, this.focus = function () {
        return qt && qt.focus(), e;
    }, this.width = function (t) {
        return arguments.length ? (Zt = pd.toInteger(t, Zt), Qt.width(Zt), e.rescale(), e) : Zt;
    }, this.height = function (t) {
        return arguments.length ? ($t = pd.toInteger(t, $t), Qt.height($t), e.rescale(), e) : $t;
    }, this.title = function (t) {
        return arguments.length ? (e._setProp("title", t), e) : p;
    }, this.subTitle = function (t) {
        return arguments.length ? (e._setProp("subTitle", t), e) : c;
    }, this.units = function (t) {
        return arguments.length ? (e._setProp("units", t), e) : h;
    }, this.getMinTemperature = function () {
        return m;
    }, this.getMaxTemperature = function () {
        return f;
    }, this.getMinHumidityRatio = function () {
        return M;
    }, this.getMaxHumidityRatio = function () {
        return T;
    }, this.throttledRedraw = function (t) {
        return arguments.length ? (a = pd.constrainTo(parseInt(t, 10), 0, 5e3), e) : a;
    }, this.paddingLeft = function (t) {
        return arguments.length ? (te.left = Math.max(0, parseInt(t, 10)), e.rescale(), e) : te.left;
    }, this.paddingRight = function (t) {
        return arguments.length ? (te.right = Math.max(0, parseInt(t, 10)), e.rescale(), e) : te.right;
    }, this.paddingTop = function (t) {
        return arguments.length ? (te.top = Math.max(0, parseInt(t, 10)), e.rescale(), e) : te.top;
    }, this.paddingBottom = function (t) {
        return arguments.length ? (te.bottom = Math.max(0, parseInt(t, 10)), e.rescale(), e) : te.bottom;
    }, this.detailMode = function (t) {
        return arguments.length ? (n != (t = !!t) && (l = (n = t) ? 150 : 125, Bi(), tr()), e) : n;
    }, this.getPsychrometrics = function () {
        return Wt;
    }, this.getComfort = function () {
        return Yt;
    }, this.verticalAxis = function (t) {
        return arguments.length ? (function (t) {
            if (E = t, P || k == t) return;
            P = !0;
            var i = 0, r = !1, a = !0;
            k = S, I = 100, pdDOM.getGlobalAnimationQueue().addOrReplace(function t(n) {
                if ((i += w * n) >= 1) return pdDOM.getGlobalAnimationQueue().remove(t), R = E == O ? 1 : 0, N = 1, H = 1, P = !1, pe.setAttributeNS(null, "opacity", 1), e._setProp("verticalAxis", E), L && L(e), Ji(), !0;
                if (P) {
                    var o = pd.Easing.inOutSine(i);
                    return i > .5 && a && (E == O ? (e.title("Relative Humidity Chart"), ue.setAttributeNS(null, "opacity", 0), zt[1].title = "Relative Humidity (%)", zt[1].units = "%", C = 10, D = 2) : (e.title("Psychrometric Chart"), ue.setAttributeNS(null, "opacity", 1), zt[1].title = Be(), zt[1].units = _e.getAbbrev(), C = _e.major, D = _e.minor), a = !1), E == O ? (T = pd.interpolate(v, I, o), C = pd.interpolate(5, 10, o)) : (T = pd.interpolate(I, v, o), C = pd.interpolate(10, 5, o)), N = o, H = pd.Easing.inOutQuad(Math.abs(1 - 2 * N)), R = E == O ? o : 1 - o, V && !r && i > .5 && (V(e), r = !0), ti(), vi(k == O), zt[1].hilite = R > .5 ? nt == Z : nt == q, Ti(), _i(), tr(!0), Wi(), !1;
                }
                return !0;
            }).start();
        }(pd.toNumber(t, E)), e) : k;
    }, this.lineHilite = function (t) {
        return arguments.length ? (e.set("lineHilite", pd.toInteger(t, nt)), e) : nt;
    }, this.infoOverlay = function (t) {
        return arguments.length ? (e.set("infoOverlay", pd.toInteger(t, ut)), e) : ut;
    }, this.handleKeyDown = function (t) {
        if (!t.ctrlKey && !t.altKey && !t.metaKey) {
            var e = t.keyCode || t.which;
            if (27 == e) return !1;
            if (37 == e) return !0;
            if (38 == e) return !0;
            if (39 == e) return !0;
            if (40 == e) return !0;
            if (70 == e) return qe.x = 0, qe.y = 0, qe.w = Zt, qe.h = $t, qe.scale = 1, $e(), !0;
        }
        return !1;
    }, this._setProp = function (t, e) {
        switch (t) {
            default:
                return !1;

            case "throttledRedraw":
            case "throttledRescale":
                return a = pd.toInteger(e, a), !1;

            case "detailMode":
                return this.detailMode(pd.toBoolean(e, n)), !1;

            case "tooltipWidth":
                var i = pd.toInteger(e, l);
                return pd.closeTo(i, l, 1) || (l = i, Pe && (Bi(), tr())), !1;

            case "tooltipHeight":
                return i = pd.toInteger(e, s), pd.closeTo(i, s, 1) || (s = i, Pe && (Bi(), tr())), !1;

            case "thumbRadius":
                return d = pd.toNumber(e, d), !1;

            case "onDblClick":
                return Ne = pd.isFunction(e) ? e : null, !1;

            case "onTransitionComplete":
                return L = pd.isFunction(e) ? e : null, !1;

            case "onTransitionMidway":
                return V = pd.isFunction(e) ? e : null, !1;

            case "onIndicatorChange":
                return He = pd.isFunction(e) ? e : null, !1;

            case "title":
                if (e = null != e ? e.toString() : "", p == e) return !1;
                if (p = e, ye) return ye.firstChild.nodeValue = p, !1;
                break;

            case "titleAlign":
                if (e = pd.toInteger(e, u), u == e) return !1;
                u = e;
                break;

            case "subTitle":
                if (e = null != e ? e.toString() : "", c == e) return !1;
                c = e, ge && (ge.firstChild.nodeValue = c);
                break;

            case "units":
                if (e = null != e ? e.toString() : "", h == e) return !1;
                if (h = e, De) return De.firstChild.nodeValue = h, !1;
                break;

            case "displayUnits":
                "temperature" in e && this.setTemperatureUnits(pdUnits.Temperature.getUnitsFromAbbrev(e.temperature)), "humidity" in e && this.setHumidityRatioUnits(pdUnits.HumidityRatio.getUnitsFromAbbrev(e.humidity)), "pressure" in e && this.setPressureUnits(pdUnits.Pressure.getUnitsFromAbbrev(e.pressure)), "volume" in e && this.setSpecificVolumeUnits(pdUnits.SpecificVolume.getUnitsFromAbbrev(e.volume)), "enthalpy" in e && this.setEnthalpyUnits(pdUnits.Enthalpy.getUnitsFromAbbrev(e.enthalpy)), "velocity" in e && this.setVelocityUnits(pdUnits.Velocity.getUnitsFromAbbrev(e.velocity));
                break;

            case "legendAlign":
                if (e = pd.toInteger(e, Pt), Pt == e) return !1;
                Pt = e;
                break;

            case "padding":
                if (pd.isArray(e) && e.length > 0) switch (e.length) {
                    case 1:
                        te.top = te.right = te.bottom = te.left = Math.max(0, pd.toInteger(e[0], 0));
                        break;

                    case 2:
                        te.top = te.bottom = Math.max(0, pd.toInteger(e[0], 0)), te.right = te.left = Math.max(0, pd.toInteger(e[1], 0));
                        break;

                    default:
                        te.top = Math.max(0, pd.toInteger(e[0], 0)), te.right = Math.max(0, pd.toInteger(e[1], 0)), te.bottom = Math.max(0, pd.toInteger(e[2], 0)), te.left = Math.max(0, pd.toInteger(e[3], 0));
                } else pd.isNumeric(e) && (te.top = te.right = te.bottom = te.left = Math.max(0, pd.toInteger(e, 0)));
                break;

            case "paddingTop":
                te.top = Math.max(0, pd.toInteger(e, 0));
                break;

            case "paddingRight":
                te.right = Math.max(0, pd.toInteger(e, 0));
                break;

            case "paddingBottom":
                te.bottom = Math.max(0, pd.toInteger(e, 0));
                break;

            case "paddingLeft":
                te.left = Math.max(0, pd.toInteger(e, 0));
                break;

            case "xMin":
                m = pd.toNumber(e, m), Ge.min = Ge.fromCelsius(m);
                break;

            case "xMax":
                f = pd.toNumber(e, f), Ge.max = Ge.fromCelsius(f);
                break;

            case "xStep":
                x = pd.toNumber(e, x);
                break;

            case "xTickMajor":
                y = pd.toNumber(e, y);
                break;

            case "xTickMinor":
                g = pd.toNumber(e, g);
                break;

            case "yMin":
                M = pd.toNumber(e, M), _e.min = _e.fromGramsPerKilogram(M);
                break;

            case "yMax":
                T = pd.toNumber(e, T), _e.max = _e.fromGramsPerKilogram(T), v = T;
                break;

            case "yStep":
                A = pd.toNumber(e, A);
                break;

            case "yTickMajor":
                C = pd.toNumber(e, C);
                break;

            case "yTickMinor":
                D = pd.toNumber(e, D);
                break;

            case "verticalAxis":
                pd.toNumber(e, k) > 0 ? (k = O, zt[1].title = "Relative Humidity (%)", zt[1].units = "%", M = 0, T = 100, D = 2, C = 10, A = .1) : (k = S, zt[1].title = Be(), zt[1].units = _e.getAbbrev(), M = _e.toGramsPerKilogram(_e.min), T = _e.toGramsPerKilogram(_e.max), D = _e.minor, C = _e.major, A = .1);
                break;

            case "atmPressure":
                Wt.atmPressure = pd.toNumber(e, Wt.atmPressure), Wt.abs = ei(Wt.dbt, Wt.rel);
                break;

            case "showDryBulb":
                G = pd.toBoolean(e, G);
                break;

            case "showAbsHumidity":
                _ = pd.toBoolean(e, _);
                break;

            case "showRelHumidity":
                B = pd.toBoolean(e, B);
                break;

            case "showWetBulb":
                U = pd.toBoolean(e, U);
                break;

            case "showVapPressure":
                W = pd.toBoolean(e, W);
                break;

            case "showAirVolume":
                Y = pd.toBoolean(e, Y);
                break;

            case "showEnthalpy":
                j = pd.toBoolean(e, j);
                break;

            case "showData":
                X = pd.toBoolean(e, X);
                break;

            case "showComfortGrid":
                if (z = pd.toBoolean(e, z), ut < 1) return !1;
                break;

            case "showIndicator":
                K = pd.toBoolean(e, K), Wi(), fe.setAttributeNS(null, "display", K ? "inline" : "none");
                for (var r = 0; r < Ee.length; ++r) Ee[r].setAttributeNS(null, "display", K ? "inline" : "none");
                break;

            case "lineHilite":
                nt = pd.toInteger(e, nt);
                break;

            case "infoOverlay":
                ut = pd.toInteger(e, ut), Kt = !0;
                break;

            case "dataOverlay":
                xt = pd.toInteger(e, xt);
                break;

            case "processOverlay":
                Bt = pd.toInteger(e, Bt);
                break;

            case "processPoints":
                Ut = pd.isArray(e) ? e : [];
                break;

            case "dataMin":
                if (Ct = pd.toNumber(e, Ct), xt < 1) return !1;
                break;

            case "dataMax":
                if (Dt = pd.toNumber(e, Dt), xt < 1) return !1;
                break;

            case "dataDecimals":
                if (At = pd.constrainTo(pd.toInteger(e, At), 0, 9), xt < 1) return !1;
                break;

            case "dataFormat":
                if (Tt = pd.isFunction(e) ? e : null, xt < 1) return !1;
                break;

            case "dataRegions":
                vt = pd.isArray(e) ? e : null;
                break;

            case "gridFadeCells":
                if (Ot = pd.toBoolean(e, Ot), xt < 1) return !1;
                break;

            case "gridCellGap":
                if (kt = pd.snapTo(.5 * pd.toNumber(e, 2 * kt), .1), xt < 1) return !1;
                break;

            case "focusId":
                qt = e ? $(e) : null;
        }
        return !0;
    }, this.set = function (t, i) {
        var r = !1;
        if (pd.isString(t)) e._setProp(t, i) && (r = !0); else if (pd.isObject(t)) for (var a in t) t.hasOwnProperty(a) && e._setProp(a, t[a]) && (r = !0);
        return r && e.redraw(), e;
    }, this.setDataGrid = function (t, e) {
        if (!t || t.cols < 2 || t.rows < 2) return !1;
        var i, r;
        St = pd.toInteger(t.type, 0);
        var a, n = t.rows, o = t.cols, s = St == S ? Qe : Je, l = St == S ? Math.max(1, v - M) : 100,
            d = (f - m) / (o - 1), p = l / (n - 1), u = !1;
        return Ft = 0, bt.setSize(o, n), bt.map(function (e, n, o) {
            r = o * p, i = m + n * d, e.x = Ke(i), e.y = s(i, r), a = t.cells[o][n], e.value = a.value, e.avg = a.avg, Ft < e.avg && (Ft = e.avg);
        }), e && (yt = c, u = "FRQ" == e.abbrev, gt = e), Ft = u ? Math.max(1, Ft) : Math.max(1, .5 * Ft), !0;
    }, this.getDataGrid = function () {
        return bt;
    }, this.getDataMetric = function () {
        return gt;
    }, this.setDataScale = function (t, i) {
        if (Ct = pd.toNumber(t, Ct), Dt = Math.max(Ct, pd.toNumber(i, Dt)), Se) {
            var r = Tt ? Tt(Ct) : Ct.toFixed(At);
            Se.firstChild.nodeValue = r;
        }
        if (Oe) {
            r = Tt ? Tt(Dt) : Dt.toFixed(At);
            Oe.firstChild.nodeValue = r;
        }
        return function () {
            if (xt != ct) return !1;
            var t = bt.rows, e = bt.cols;
            if (t > 0 && e > 0) for (var i, r = bt.cells, a = "FRQ" == gt.abbrev, n = a ? Fi : Pi, o = Math.max(1e-6, Dt - Ct), s = Ot && !a, l = 1, d = 0; d < t; ++d) for (var p = 0; p < e; ++p) (i = r[d][p]).extra && (s && (l = .1 + pd.constrainTo(i.avg / Ft * .9, 0, .9)), i.color = n((i.value - Ct) / o), i.extra.setAttributeNS(null, "fill-opacity", l), i.extra.setAttributeNS(null, "fill", i.color));
        }() || Li(), e;
    }, this.getDataRange = function () {
        return {
            units: h, value: Dt - Ct, min: Ct, max: Dt
        };
    }, this.getProcessPoints = function () {
        return Ut;
    }, this.clearProcessPoints = function () {
        return pd.isArray(Ut) && (Ut.length = 0), this;
    }, this.setActiveProcessPoint = function (t) {
        return _t = t, t && (Wt.dbt = pd.toNumber(t.dbt, Wt.dbt), Wt.rel = pd.toNumber(t.rel, Wt.rel), Wt.abs = ei(Wt.dbt, Wt.rel), Wi(), He && He(Wt)), this;
    }, this.getActiveProcessPoint = function () {
        return _t;
    }, this.getDataPoints = function () {
        return Mt;
    }, this.setDataPoints = function (t, e) {
        if (!t || t.length < 1) return !1;
        xt = ht, Mt = t, e && (yt = c, gt = e);
    }, this.clearDataPoints = function () {
        return pd.isArray(Mt) && (Mt.length = 0), this;
    }, this.isInComfortZone = function (t, i) {
        var e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1);
        let pointInComfort = 0;
        //TODO - Check if the below constraint affects the outcome
        // ei(t, i) <= 16 &&
        i >= 20 &&
            i <= 80 &&
            t >= e &&
            t <= e + 7 &&
            (t <= e + 5 || i <= 50 ?
                pointInComfort++ :
                i <= Math.abs(e + 5 - t) / 2 * 30 && pointInComfort++);
        return pointInComfort !== 0;
    }, this.notNeededStrategyCategoryI = function (t, i) {
        var e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1);
        let pointInZone = 0;
        i >= 20 &&
            i <= 80 &&
            t >= e &&
            t <= e + 3.5 &&
            (t <= e + 5 || i <= 50 ?
                pointInZone++ :
                i <= Math.abs(e + 5 - t) / 2 * 30 && pointInZone++);
        if (t <= 20) pointInZone++;
        return pointInZone !== 0;
    }, this.effectiveStrategyCategoryI = function (t, i) {
        var e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1);
        let pointInZone = 0;
        i >= 20 &&
            i <= 80 &&
            t >= e + 3.5 &&
            t <= e + 7 &&
            (t <= e + 5 || i <= 50 ?
                pointInZone++ :
                i <= Math.abs(e + 5 - t) / 2 * 30 && pointInZone++);
        return pointInZone !== 0;
    }, this.notNeededStrategyCategoryII = function (t, i) {
        var e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1);
        let pointInZone = 0;
        i >= 20 &&
            i <= 80 &&
            t >= e &&
            t <= e + 7 &&
            (t <= e + 5 || i <= 50 ?
                pointInZone++ :
                i <= Math.abs(e + 5 - t) / 2 * 30 && pointInZone++);
        if (t <= 20) pointInZone++;
        return pointInZone !== 0;
    }, this.ineffectiveStrategyCategoryII = function (t, i) {
        var e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1);
        let pointInZone = 0;
        if (i <= 20) pointInZone++;
        i >= 20 &&
            t >= e + 12 &&
            (t >= e + 7 || i <= 50 ?
                pointInZone++ :
                i >= Math.abs(e + 7 - t) / 2 * 30 && pointInZone++);
        return pointInZone !== 0;
    }, this.getComfortReportCallback = function (t) {
        switch (t && (t.categoryI = 0, t.categoryII = 0, t.categoryIII = 0, t.categoryIV = 0, t.pointCount = 0, t.pointTotal = 0, t.listOfComfortPoints = [], t.band = t.band || [], t.band[0] = 0, t.band[1] = 0, t.band[2] = 0, t.band[3] = 0, t.band[4] = 0, t.band[5] = 0, t.band[6] = 0), ut) {
            case ot:
                return e = pd.snapTo(17.6 + .31 * Yt.meanOutdoorTemperature - 3.5, .1), function (t, i, r) {
                    ei(t, i) <= 16 &&
                        i >= 20 &&// i humidity, t temp
                        i <= 80 &&
                        t >= e &&
                        t <= e + 7 &&
                        (t <= e + 5 || i <= 50 ? ++r.pointCount && r.listOfComfortPoints.push("[" + t + " , " + i + "]") :
                            i <= Math.abs(e + 5 - t) / 2 * 30 && ++r.pointCount && r.listOfComfortPoints.push("[" + t + " , " + i + "]")), ++r.pointTotal;
                };

            case st:
                return Yi;

            case lt:
                return ji;

            case dt:
                return zi;

            case pt:
                return Ki;
        }
        var e;
        return null;
    };
    var Xi = 0;
    this.getDataRegions = function () {
        return vt;
    }, this.addDataRegion = function (t, e, i, r) {
        if (pd.isArray(t) && t.length > 1) {
            vt || (vt = []), r = pd.toNumber(r, 10);
            var a = hull(t, r, [".dbt", ".rel"]);
            !e && Xi < 12 && (e = pdSVG.getStandardColor(Xi).hex);
            var n = {
                name: i ? i.toString() : "Region #" + (++Xi).toFixed(0),
                color: e || pd.toHexColorString(pd.randomColorArray()),
                concavity: r,
                points: t.slice(),
                outline: a
            };
            return vt.push(n), n;
        }
        return null;
    }, this.addDataRegionFromPoints = function (t, e, i) {
        return this.addDataRegion(Mt, t, e, i);
    }, this.clearDataRegions = function () {
        return pd.isArray(vt) && (vt.length = 0), Xi = 0, this;
    }, this.getTemperatureRange = function () {
        return {
            units: zt[0].units, value: f - m, min: m, max: f
        };
    }, this.getExportableText = function (t) {
        var e = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n', i = Jt.cloneNode(!0);
        return i.setAttributeNS(null, "preserveAspectRatio", "xMinYMin"), i.setAttributeNS(null, "style", ""), t && i.setAttribute("xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape"), e += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n', e += i.outerHTML.replace("<style></style>", '<style type="text/css">/* <![CDATA[ */ .svg-chart { font-family: sans-serif; font-size: 14px; } .svg-chart .fill-white { fill: #FFF; } .svg-chart .stroke-std { stroke-width: 1px; } .svg-chart .stroke-none { stroke: none !important; } .svg-chart .stroke-grid { stroke: #888 !important; stroke-width: 0.5px; stroke-opacity: 0.5; } .svg-chart .stroke-axis { stroke: #666 !important; } .svg-chart .stroke-dashed { stroke-dasharray: 2, 3; } .svg-chart .line-std  { stroke-width: 1px; stroke: #000; fill: none; } .svg-chart .line-grid { stroke-width: 0.5px; stroke-opacity: 0.5; stroke: #888; fill: none; } .svg-chart .line-axis { stroke-width: 1px; stroke: #666; fill: none; } .svg-chart .line-blue { stroke-width: 1px; stroke-linejoin: round; stroke-linecap: round; stroke: #00F; fill: none; } .svg-chart .line-marker { stroke-width: 1.5px; stroke: #000; fill: none; } .svg-chart .line-hilite { stroke-width: 1.5px; stroke: #F00; fill: none; } .svg-chart .text-empty { font-size: 1.25em; font-weight: 600; stroke: none; fill: #ccc; } .svg-chart .text-hilite { font-size: 0.75em; font-weight: 500; stroke: none; } .svg-chart .text-grid { font-size: 0.6em; stroke: none; fill: #888; } .svg-chart .text-axis { font-size: 0.7em; stroke: none; fill: #000; } .svg-chart .text-overlay { text-shadow: 0px 0px 5px #fff; font-size: 9pt; stroke: none; } .svg-chart .text-overlay { text-shadow: 0px 0px 5px #fff; font-size: 9pt; stroke: none; } .svg-chart .hilite text, .svg-chart .text-grid.hilite, .svg-chart .text-axis.hilite, .svg-chart .text-hilite { fill: #F00 !important } .svg-chart .font-overlay { text-shadow: 0px 0px 5px #fff; stroke: none; } .svg-chart .font-xs { font-size: 0.6em !important; } .svg-chart .font-sm { font-size: 0.76em !important; } .svg-chart .font-md { font-size: 0.85em !important; } .svg-chart .font-lg { font-size: 1.0em !important; } .svg-chart .font-xl { font-size: 1.1em !important; } .svg-chart .tooltip { display: none; } /* ]]> */</style>'), t && (e = e.replace(/<g id=/g, '<g inkscape:groupmode="layer" inkscape:label=')), e;
    };
    var Qi = null;

    function Ji() {
        i || (i = !0), Qi = null, ti(), Mi();
    }

    this.redraw = function () {
        return i ? a > 4 ? null == Qi && (Qi = setTimeout(Ji, a)) : Ji() : null == Qi && (Qi = setTimeout(Ji, 250)), e;
    }, this.rescale = function () {
        return Re = !0, e.redraw(), e;
    }, this.refresh = function () {
        ti(), Mi();
    }, Object.defineProperty(this, "dryBulbTemperature", {
        get: function () {
            return Yt.dryBulbTemperature;
        }, set: function (t) {
            if (t = pd.constrainTo(pd.toNumber(t, Yt.dryBulbTemperature, -70, 70)), pd.closeTo(Yt.dryBulbTemperature, t, .001) || (Yt.dryBulbTemperature = t, Kt = !0), !pd.closeTo(Wt.dbt, t, .001)) {
                Wt.dbt = t;
                var e = Wt.calcSaturationPoint(Wt.dbt);
                Wt.abs > e && (Wt.abs = e), Wi(), tr(), He && He(Wt);
            }
        }
    }), Object.defineProperty(this, "relativeHumidity", {
        get: function () {
            return Yt.relativeHumidity;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.relativeHumidity, 0, 100)), pd.closeTo(Yt.relativeHumidity, t, .001) || (Yt.relativeHumidity = t, Kt = !0), pd.closeTo(Wt.rel, t, .001) || (Wt.rel = t, Wt.abs = Wt.calcAbsFromRelHumidity(Wt.dbt, t), Wi(), tr(), He && He(Wt));
        }
    }), Object.defineProperty(this, "clothingLevel", {
        get: function () {
            return Yt.clothingLevel;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.clothingLevel, 0, 4)), pd.closeTo(Yt.clothingLevel, t, .001) || (Yt.clothingLevel = t, Kt = !0);
        }
    }), Object.defineProperty(this, "metabolicRate", {
        get: function () {
            return Yt.metabolicRate;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.metabolicRate, 0, 100)), pd.closeTo(Yt.metabolicRate, t, .001) || (Yt.metabolicRate = t, Kt = !0);
        }
    }), Object.defineProperty(this, "externalWork", {
        get: function () {
            return Yt.externalWork;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.externalWork, 0, 4)), pd.closeTo(Yt.externalWork, t, .001) || (Yt.externalWork = t, Kt = !0);
        }
    }), Object.defineProperty(this, "meanRadiantTemperature", {
        get: function () {
            return Yt.meanRadiantTemperature;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.meanRadiantTemperature, -50, 100)), pd.closeTo(Yt.meanRadiantTemperature, t, .001) || (Yt.meanRadiantTemperature = t, Kt = !0);
        }
    }), Object.defineProperty(this, "airVelocity", {
        get: function () {
            return Yt.airVelocity;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.airVelocity, 0, 100)), pd.closeTo(Yt.airVelocity, t, .001) || (Yt.airVelocity = t, Kt = !0);
        }
    }), Object.defineProperty(this, "meanOutdoorTemperature", {
        get: function () {
            return Yt.meanOutdoorTemperature;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.meanOutdoorTemperature, -50, 100)), pd.closeTo(Yt.meanOutdoorTemperature, t, .001) || (Yt.meanOutdoorTemperature = t, Kt = !0);
        }
    }), Object.defineProperty(this, "thermalMassEfficacy", {
        get: function () {
            return Yt.thermalMassEfficacy;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.thermalMassEfficacy, 0, 1)), pd.closeTo(Yt.thermalMassEfficacy, t, 1e-4) || (Yt.thermalMassEfficacy = t, Kt = !0);
        }
    }), Object.defineProperty(this, "solarGainsEfficacy", {
        get: function () {
            return Yt.solarGainsEfficacy;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.solarGainsEfficacy, 0, 1)), pd.closeTo(Yt.solarGainsEfficacy, t, 1e-4) || (Yt.solarGainsEfficacy = t, Kt = !0);
        }
    }), Object.defineProperty(this, "internalHeatGains", {
        get: function () {
            return Yt.internalHeatGains;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.internalHeatGains, 0, 100)), pd.closeTo(Yt.internalHeatGains, t, 1e-4) || (Yt.internalHeatGains = t, Kt = !0);
        }
    }), Object.defineProperty(this, "PMV", {
        get: function () {
            return Yt.PMV;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.PMV, -3, 3)), pd.closeTo(Yt.PMV, t, 1e-4) || (Yt.PMV = t, Kt = !0);
        }
    }), Object.defineProperty(this, "PPD", {
        get: function () {
            return Yt.PPD;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.PPD, 5, 100)), pd.closeTo(Yt.PPD, t, .001) || (Yt.PPD = t, Kt = !0);
        }
    }), Object.defineProperty(this, "solarExposure", {
        get: function () {
            return Yt.solarExposure;
        }, set: function (t) {
            t = pd.constrainTo(pd.toNumber(t, Yt.solarExposure, 0, 1)), pd.closeTo(Yt.solarExposure, t, .001) || (Yt.solarExposure = t, ut == st && (Kt = !0));
        }
    }), this.updateComfort = function (t) {
        return t ? Kt = !0 : ut > 0 && Kt && (ut == ot && Qt.find("[class*=overlay]").empty(), Vi(), Wi()), this;
    };
    var qi = 1, Zi = !1, $i = !1;

    function tr(t) {
        if (Zi) {
            var e = Ke(Wt.dbt), i = Qe(Wt.dbt, Wt.abs), r = _e.decimals + (n ? 1 : 0), a = n ? 2 : 1, d = .5 * l;
            if (e < d + 2 && (e = d + 2), e > Zt - d - 2 && (e = Zt - d - 2), i < s + o && (i = s + o), xe.setAttributeNS(null, "transform", "translate(" + e + ", " + i + ")"), !t) {
                var p, u = Ge.getAbbrev(), c = _e.getAbbrev(), h = Ge.fromCelsius(Wt.dbt);
                if ((F < 0 ? k : F) == O) p = h.toFixed(a) + u + ", " + Wt.rel.toFixed(a) + "%"; else {
                    var m = _e.fromGramsPerKilogram(Wt.abs);
                    p = h.toFixed(a) + u + ", " + m.toFixed(r) + c;
                }
                Fe.firstChild.nodeValue = p;
            }
        }
    }

    function er() {
        return qi -= .04, xe.setAttributeNS(null, "opacity", pd.constrainTo(qi, 0, 1)), qi < .01 && ($i = !1, qi = 0, xe.setAttributeNS(null, "display", "none"), Zi = !1, !0);
    }

    function ir(t, e, i) {
        if (!((r = t) >= 0 && r < Ut.length)) return Number.MAX_VALUE;
        var r, a = Ut[t], n = e - Ke(a.dbt), o = i - Je(a.dbt, a.rel);
        return Math.sqrt(n * n + o * o);
    }

    var rr = 0, ar = 0, nr = {
        dbt: 0, abs: 0, rel: 0
    }, or = !1, sr = 1;

    function lr(t, e) {
        var i = t.shiftKey || 1 == t.button, r = i ? g : x * qe.scale, a = i ? D : A * qe.scale,
            n = t.x * ne * qe.scale + qe.x, o = t.y * oe * qe.scale + qe.y, s = m + (n - te.left) / ae,
            l = pd.snapTo(Ge.fromCelsius(s), r);
        if (e.dbt = Ge.toCelsius(l), k == O) i && (a = 1), F < 0 || F == O ? (e.rel = pd.snapTo(T - (o - te.top) / re, a), e.abs = Wt.calcAbsFromRelHumidity(e.dbt, e.rel)) : (i && (a = e.dbt < 10 ? 1 : e.dbt < 20 ? 2.5 : 5), e.rel = pd.snapTo(T - (o - te.top) / re, a), e.abs = Wt.calcAbsFromRelHumidity(e.dbt, e.rel)); else if (F == O) e.abs = T - (o - te.top) / re, e.rel = Wt.calcRelFromAbsHumidity(e.dbt, e.abs), i && (a = e.dbt < 10 ? 5 : e.dbt < 20 ? 2.5 : 1), e.rel = pd.snapTo(e.rel, a), e.abs = Wt.calcAbsFromRelHumidity(e.dbt, e.rel); else {
            e.abs = T - (o - te.top) / re, a = _e.tickMinor * (i ? 1 : .1);
            l = pd.snapTo(_e.fromGramsPerKilogram(e.abs), a);
            e.abs = _e.toGramsPerKilogram(l), e.rel = Wt.calcRelFromAbsHumidity(e.dbt, e.abs);
        }
    }

    function dr(t) {
        if (t.dbt = pd.constrainTo(t.dbt, m, f), k == O) {
            var e = pd.constrainTo(t.rel, M, T);
            if (!pd.closeTo(t.rel, e)) return t.abs = Wt.calcAbsFromRelHumidity(t.dbt, e), t.rel = e, !0;
        } else {
            var i = Math.min(T, Wt.calcSaturationPoint(t.dbt)), r = pd.constrainTo(t.abs, M, i);
            if (!pd.closeTo(t.abs, r)) return t.rel = Wt.calcRelFromAbsHumidity(t.dbt, r), t.abs = r, !0;
        }
        return !1;
    }

    return pdDOM.Interaction.makeInteractive(Jt, {
        onpress: function (t) {
            var i;
            if (qt && qt.focus(), !pdSVG.ignoreSelection && (ar = Math.max(t.button, ar), sr = qe.scale, 0 == t.button && K)) {
                var r = function (t, e, i) {
                    var r = -1;
                    if (pd.isArray(Ut)) {
                        var a = Ut.length;
                        if (a > 0) for (var n, o = d, s = (e = t.x * ne * qe.scale + qe.x, i = t.y * oe * qe.scale + qe.y, 0); s < a; ++s) (n = ir(s, e, i)) < o && (o = n, r = s);
                    }
                    return r >= 0 ? Ut[r] : null;
                }(t);
                if (n || t.isTouchEvent) null != r && _t != r ? (e.setActiveProcessPoint(r), nr.abs = Wt.abs, nr.rel = Wt.rel, nr.dbt = Wt.dbt, rr = 2) : (nr.dbt = Wt.dbt, nr.abs = Wt.abs, nr.rel = Wt.rel, rr = 1); else if (null == r && (_t = null), null != r && _t != r) e.setActiveProcessPoint(r), nr.abs = Wt.abs, nr.rel = Wt.rel, nr.dbt = Wt.dbt, rr = 2; else {
                    if (lr(t, nr), dr(nr)) return;
                    rr = 1, Wt.abs = nr.abs, Wt.rel = nr.rel, Wt.dbt = nr.dbt, Wi(), He && He(Wt);
                }
                or = !1, Zi || (xe.setAttributeNS(null, "display", "inline"), Zi = !0), $i && !i && (pdDOM.getGlobalAnimationQueue().remove(er), $i = !1), qi < .999 && (xe.setAttributeNS(null, "opacity", 1), qi = 1), tr();
            }
        }, ondrag: function (t) {
            if (!pdSVG.ignoreSelection) if (or = !0, ar = Math.max(t.button, ar), t.button >= 1) {
                if (1 == t.button) {
                    sr /= t.scale;
                    var e = pd.constrainTo(qe.scale / t.scale, .1, 1.5);
                    if (pd.closeTo(sr, 1, .1) && (e = 1), sr > 1) {
                        var i = pd.mapAndConstrainTo(sr, 1, 2, 0, 1);
                        e = pd.interpolate(e, 1 + .5 * pd.Easing.outCirc(i), i);
                    }
                    var r = t.x * ne * qe.scale + qe.x, a = t.y * oe * qe.scale + qe.y;
                    qe.x = r - (t.x + t.dragX) * ne * e - t.dragX * e, qe.y = a - (t.y + t.dragY) * oe * e - t.dragY * e, qe.w = Math.round(Zt * e), qe.h = Math.round($t * e), qe.scale = e, pd.closeTo(qe.x, 0, 10) && pd.closeTo(qe.y, 0, 10) && (qe.x = 0, qe.y = 0);
                } else qe.x -= t.dragX * qe.scale, qe.y -= t.dragY * qe.scale;
                $e();
            } else if (rr > 0 && K && 0 == t.button && 0 == ar && t.hasMoved()) {
                if (n || t.isTouchEvent) {
                    var o = t.shiftKey || 1 == t.button, s = o ? g : x * qe.scale,
                        l = _e.tickMinor * (o ? 1 : .1 * qe.scale), d = t.getDragDistanceX() * ne * qe.scale / ae,
                        p = t.getDragDistanceY() * oe * qe.scale / re, u = Wt.dbt, c = Wt.abs, h = Wt.rel;
                    n && (s *= .1, l *= .1, d *= .1, p *= .1);
                    var m = pd.snapTo(Ge.fromCelsius(nr.dbt + d), s);
                    u = Ge.toCelsius(m), k == O ? (o && (l = n ? .1 : 1), F < 0 || F == O ? (h = pd.snapTo(nr.rel - p, l), c = Wt.calcAbsFromRelHumidity(u, h)) : (o && (l = u < 10 ? 1 : u < 20 ? 2.5 : 5, n && (l *= .1)), c = pd.snapTo(nr.abs - p, l), h = Wt.calcRelFromAbsHumidity(u, c))) : F == O ? (c = nr.abs - p, h = Wt.calcRelFromAbsHumidity(u, c), o && (l = u < 10 ? 5 : u < 20 ? 2.5 : 1), h = pd.snapTo(h, l), c = Wt.calcAbsFromRelHumidity(u, h)) : (m = pd.snapTo(_e.fromGramsPerKilogram(nr.abs - p), l), c = _e.toGramsPerKilogram(m), h = Wt.calcRelFromAbsHumidity(u, c)), Wt.abs = c, Wt.rel = h, Wt.dbt = u;
                } else lr(t, Wt);
                dr(Wt), Wi(), tr(), He && He(Wt);
            }
        }, onrelease: function (t) {
            var e;
            sr = qe.scale, ar = 0, pdSVG.ignoreSelection ? pdSVG.ignoreSelection = !1 : (1 == rr && K && 0 == t.button && 0 == ar && !t.hasMoved() && (_t = null), rr = 0, or = !1, (e = 3) && (qi = pd.toNumber(e, 1)), Zi && qi > 0 && ($i = !0, pdDOM.getGlobalAnimationQueue().addOrReplace(er).start()), $e());
        }, ondoubletap: function (t) {
            Ne ? Ne(t) : e.rescale();
        }, onscroll: function (t) {
            if (t.delta) {
                var e = t.shiftKey ? 5 : t.ctrlKey || t.altKey ? .2 : 1, i = 1 + .035 * t.delta * e,
                    r = pd.constrainTo(qe.scale * i, .1, 1.5), a = t.x * ne * qe.scale + qe.x,
                    n = t.y * oe * qe.scale + qe.y;
                qe.x = a - t.x * ne * r, qe.y = n - t.y * oe * r, qe.w = Math.round(Zt * r), qe.h = Math.round($t * r), qe.scale = r, $e();
            }
        }
    }), Qt.attr("xmlns", Xt), Qt.attr("class", "svg-chart " + Qt.attr("class")), pd.addSimpleEventHandling(this), function () {
        Qt.empty();
        var t = document.createElementNS(Xt, "defs");
        Jt.appendChild(t);
        var e = document.createElementNS(Xt, "style");
        Jt.appendChild(e);
        var i, r = pdDOM.svgElem("filter", {
            id: "shadow"
        });
        r.innerHTML = '    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />\n    <feOffset dx="3" dy="3" result="offsetblur" />\n    <feFlood flood-color="#000" flood-opacity="0.15" />\n    <feComposite in2="offsetblur" operator="in" />\n    <feMerge>\n        <feMergeNode />\n        <feMergeNode in="SourceGraphic" />\n    </feMerge>\n', t.appendChild(r), ve || (ve = pdDOM.svgElem("clipPath", {
            id: "rectClipPath"
        })), Te || (Te = pdDOM.svgElem("rect", {
            fill: "black"
        })), ve.appendChild(Te), t.appendChild(ve), Me || (Me = pdDOM.svgElem("clipPath", {
            id: "psychroClipPath"
        })), Ae || (Ae = pdDOM.svgElem("path", {
            fill: "black"
        })), Me.appendChild(Ae), t.appendChild(Me), t.appendChild(i = pdDOM.svgElem("marker", {
            id: "markerBlueArrow",
            viewBox: "0 0 25 20",
            "stroke-dasharray": "10 0",
            markerWidth: 25,
            markerHeight: 20,
            orient: "auto",
            refX: 20,
            refY: 10
        })), i.appendChild(pdDOM.svgElem("path", {
            d: "M 5,15 L 20,10 L 5,5", "class": "line-blue"
        })), t.appendChild(i = pdDOM.svgElem("marker", {
            id: "markerBlackArrow",
            viewBox: "0 0 25 20",
            "stroke-dasharray": "10 0",
            markerWidth: 25,
            markerHeight: 20,
            orient: "auto",
            refX: 20,
            refY: 10
        })), i.appendChild(pdDOM.svgElem("path", {
            d: "M 5,15 L 20,10 L 5,5", "class": "line-marker"
        })), t.appendChild(i = pdDOM.svgElem("marker", {
            id: "markerSelectedProcessPt", viewBox: "0 0 20 20", markerHeight: 20, markerWidth: 20, refX: 10, refY: 10
        })), i.appendChild(pdDOM.svgElem("circle", {
            stroke: "#00F", "stroke-opacity": .15, "stroke-width": 2.5, fill: "none", cx: 10, cy: 10, r: 5.5
        })), i.appendChild(pdDOM.svgElem("circle", {
            stroke: "#00F", "stroke-width": 1, fill: "none", cx: 10, cy: 10, r: 4
        })), t.appendChild(i = pdDOM.svgElem("marker", {
            id: "markerProcessPt", viewBox: "0 0 6 6", markerHeight: 6, markerWidth: 6, refX: 3, refY: 3
        })), i.appendChild(pdDOM.svgElem("circle", {
            stroke: "none", fill: "#00F", cx: 3, cy: 3, r: 2
        })), se.setAttributeNS(null, "class", "background"), Jt.appendChild(se), le.setAttributeNS(null, "class", "data"), le.setAttributeNS(null, "clip-path", "url(#psychroClipPath)"), le.setAttributeNS(null, "stroke", "none"), Jt.appendChild(le), de.setAttributeNS(null, "class", "comfort"), de.setAttributeNS(null, "clip-path", "url(#rectClipPath)"), Jt.appendChild(de), pe.setAttributeNS(null, "class", "grid"), Jt.appendChild(pe), ue.setAttributeNS(null, "class", "info opacity-transition"), Jt.appendChild(ue), ce.setAttributeNS(null, "class", "overlay opacity-transition"), Jt.appendChild(ce), he.setAttributeNS(null, "class", "process"), Jt.appendChild(he), me.setAttributeNS(null, "class", "legend"), Jt.appendChild(me), fe.setAttributeNS(null, "class", "indicator"), Jt.appendChild(fe), xe.setAttributeNS(null, "class", "chart-tooltip"), Jt.appendChild(xe), ke || fe.appendChild(ke = pdDOM.svgElem("path", {
            "class": "line-hilite",
            d: "M-20,0 L-5,0 M20,0 L5,0 M0,-20 L0,-5 M0,20 L0,5 M-10,-5 L-10,-10 -5,-10 M10,-5 L10,-10 5,-10 M-10,5 L-10,10 -5,10 M10,5 L10,10 5,10 "
        })), zt[0] = new pdSVG.Axis({
            title: "Dry Bulb Temperature (" + Ge.getAbbrev() + ")",
            units: Ge.getAbbrev(),
            tickMinor: Ge.tickMinor,
            tickMajor: Ge.tickMajor,
            min: Ge.min,
            max: Ge.max,
            format: we
        }), zt[1] = new pdSVG.Axis({
            title: Be(),
            units: _e.getAbbrev(),
            tickMinor: _e.tickMinor,
            tickMajor: _e.tickMajor,
            format: _e.axisFormat,
            min: _e.min,
            max: _e.max,
            labelRotate: 0
        }), be || (be = pdDOM.svgElem("path", {
            id: "dewPointPath"
        })), Ce || (Ce = pdDOM.svgElem("path", {
            "class": "stroke-grid fill-white", style: "filter:url(#shadow)"
        })), Bi();
    }(), this.set(t), this;
};