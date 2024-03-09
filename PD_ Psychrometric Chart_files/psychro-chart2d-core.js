var pd = pd || {};

!function() {
    pd.version = "0.1.2", pd.isBrowser = "undefined" != typeof window, pd.Const = {
        EPSILON: 1e-6,
        HALF_PI: .5 * Math.PI,
        TWO_PI: 2 * Math.PI,
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI
    }, pd.Align = {
        NONE: 0,
        LEFT: 1,
        CENTER: 2,
        RIGHT: 4,
        BOTTOM: 8,
        MIDDLE: 16,
        TOP: 32,
        BASELINE: 64,
        BOT_LEFT: 9,
        BOT_CENTER: 10,
        BOT_RIGHT: 12,
        MID_LEFT: 17,
        MID_CENTER: 18,
        MID_RIGHT: 20,
        TOP_LEFT: 33,
        TOP_CENTER: 34,
        TOP_RIGHT: 36,
        OUTSIDE: 1,
        INSIDE: 2
    }, pd.Align.isLeft = function(e) {
        return e & pd.Align.LEFT;
    }, pd.Align.isCenter = function(e) {
        return e & pd.Align.CENTER;
    }, pd.Align.isRight = function(e) {
        return e & pd.Align.RIGHT;
    }, pd.Align.isTop = function(e) {
        return e & pd.Align.TOP;
    }, pd.Align.isMiddle = function(e) {
        return e & pd.Align.MIDDLE;
    }, pd.Align.isBottom = function(e) {
        return e & pd.Align.BOTTOM;
    }, pd.sign = function(e) {
        return e < 0 ? -1 : 1;
    }, pd.isNumeric = function(e) {
        return null != e && !isNaN(parseFloat(e)) && isFinite(e);
    }, pd.isInteger = function(e) {
        return null != e && Math.round(e) === e;
    }, pd.toNumber = function(e, t) {
        return e = parseFloat(e), !isNaN(e) && isFinite(e) ? e : t;
    }, pd.toNumberInRange = function(e, t, n, r) {
        return pd.constrainTo(pd.toNumber(e, t), n, r);
    }, pd.toInteger = function(e, t) {
        return e = parseFloat(e), !isNaN(e) && isFinite(e) ? Math.round(e) : Math.round(+t);
    }, pd.toBoolean = function(e, t) {
        return null != e ? !!e : !!t;
    }, pd.isBetween = function(e, t, n, r) {
        return n >= t && (r = +r || 0, !(isNaN(e) || e > n + r) && !(e < t - r));
    }, pd.isBetweenRange = function(e, t, n, r) {
        return r = +r || 0, !(isNaN(e) || e > Math.max(t, n) + r) && !(e < Math.min(t, n) - r);
    }, pd.isPowerOfTwo = function(e) {
        return 0 == (e & e - 1);
    }, pd.nextPowerOfTwo = function(e) {
        return --e, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e;
    }, pd.closeTo = function(e, t, n) {
        return n = n || pd.Const.EPSILON, !(isNaN(e) || e > t + n || e < t - n);
    }, pd.constrainTo = function(e, t, n) {
        if (isNaN(e)) return t;
        if (n < t) {
            if (e > t) return t;
            if (e < n) return n;
        } else {
            if (e < t) return t;
            if (e > n) return n;
        }
        return e;
    }, pd.wrapAt = function(e, t, n, r) {
        var i = Math.min(n, t), o = Math.max(n, t);
        if (r && e > o - pd.Const.EPSILON && e < o + pd.Const.EPSILON) return i;
        if (e < i || e > o) {
            var a = o - i;
            return a > 0 ? e = e < i ? o - (i - e) % a : i + (e - i) % a : i;
        }
        return e;
    }, pd._fastWrap = function(e, t, n) {
        if (e < t || e > n) {
            var r = n - t;
            return r > 0 ? e < t ? n - (t - e) % r : t + (e - t) % r : t;
        }
        return e;
    }, pd.snapTo = function(e, t) {
        return (t = t || 1) * Math.round(e / t);
    }, pd.roundTo = function(e, t) {
        return (+e).toFixed(t);
    }, pd.incrementBy = function(e, t) {
        var n = (t = t || 1) * Math.floor(e / t) + t, r = Math.abs(.1 * t);
        return e > n - r && e < n + r ? n + t : n;
    }, pd.mapAndConstrainTo = function(e, t, n, r, i) {
        var o = n - t;
        return Math.abs(o) < pd.Const.EPSILON ? .5 * (r + i) : pd.constrainTo(r + (e - t) / o * (i - r), r, i);
    }, pd.mapTo = function(e, t, n, r, i) {
        var o = n - t;
        return Math.abs(o) < pd.Const.EPSILON ? .5 * (r + i) : r + (e - t) / o * (i - r);
    }, pd.interpolate = function(e, t, n) {
        return e + n * (t - e);
    }, pd.getTickIncrement = function(e, t) {
        var n = Math.pow(10, Math.floor(Math.log10(e)));
        n < pd.Const.EPSILON && (n = 1);
        var r = e / n;
        return r <= .1 * (t = t || 20) ? .1 * n : r <= .2 * t ? .2 * n : r <= .5 * t ? .5 * n : r <= t ? n : pd.snapTo(e / t, .1 * n);
    }, pd.randomRange = function(e, t) {
        return Math.random() * (t - e) + e;
    }, pd.safeDivide = function(e, t) {
        return Math.abs(t) > pd.Const.EPSILON ? e / t : 0;
    }, pd.degreesToRadians = function(e) {
        return e * pd.Const.DEG2RAD;
    }, pd.radiansToDegrees = function(e) {
        return e * pd.Const.RAD2DEG;
    }, pd.sinDegrees = function(e) {
        return Math.sin(e * pd.Const.DEG2RAD);
    }, pd.cosDegrees = function(e) {
        return Math.cos(e * pd.Const.DEG2RAD);
    }, pd.tanDegrees = function(e) {
        return Math.tan(e * pd.Const.DEG2RAD);
    };
    var e = 987655555, t = 123455555, n = 4294967295;
    pd.randomNumber = function(r) {
        return r && (e = 987654321 + r, t = 123456789 - r), (((t = 36969 * (65535 & t) + (t >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n) / 4294967296 + .5;
    }, pd.randomNumberInRange = function(e, t) {
        return pd.randomNumber() * (t - e) + e;
    }, pd.toHexColorString = function(e) {
        var t, n = "#";
        return pd.isArray(e) ? ((t = Math.round(255 * e[0])) < 16 && (n += "0"), n += t.toString(16).toUpperCase(), 
        (t = Math.round(255 * e[1])) < 16 && (n += "0"), n += t.toString(16).toUpperCase(), 
        (t = Math.round(255 * e[2])) < 16 && (n += "0"), n += t.toString(16).toUpperCase()) : "none";
    }, pd.visibleTextColor = function(e, t) {
        return e ? pd.isArray(e) || (e = pd.parseHexColorString(e.toString())) : e = [ 0, 0, 0 ], 
        .265 * e[0] + .67 * e[1] + .065 * e[2] > .65 ? t ? "#888" : "#000" : t ? "#CCC" : "#FFF";
    }, pd.parseHexColorString = function(e, t) {
        if (t || (t = [ 1, 1, 1, 1 ]), e && e.length > 1) if (e.indexOf("[") >= 0 && e.indexOf("]") >= 0) {
            if ((n = JSON.parse(e)) && pd.isArray(n)) return t[0] = pd.constrainTo(pd.toNumber(n[0], 0), 0, 1), 
            t[1] = pd.constrainTo(pd.toNumber(n[1], 0), 0, 1), t[2] = pd.constrainTo(pd.toNumber(n[2], 0), 0, 1), 
            t[3] = pd.constrainTo(pd.toNumber(n[3], 1), 0, 1), t;
        } else {
            var n;
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
            }), (n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) && (t[0] = parseInt(n[1], 16) / 255, 
            t[1] = parseInt(n[2], 16) / 255, t[2] = parseInt(n[3], 16) / 255, t[3] = 1);
        }
        return t;
    }, pd.randomColorArray = function(e, t) {
        var n = [];
        if (e = pd.constrainTo(pd.toNumber(e, 0), -.9, .9), t && pd.randomNumber(t), e > 1e-4) {
            var r = 1 - e;
            n[0] = e + pd.randomNumber() * r, n[1] = e + pd.randomNumber() * r, n[2] = e + pd.randomNumber() * r;
        } else if (e < -1e-4) {
            r = 1 + e;
            n[0] = pd.randomNumber() * r, n[1] = pd.randomNumber() * r, n[2] = pd.randomNumber() * r;
        } else n[0] = pd.randomNumber(), n[1] = pd.randomNumber(), n[2] = pd.randomNumber();
        return n[3] = 1, n;
    }, pd.darkenColorArray = function(e, t, n) {
        return (e = e || [])[0] = pd.constrainTo(+t[0] * n, 0, 1), e[1] = pd.constrainTo(+t[1] * n, 0, 1), 
        e[2] = pd.constrainTo(+t[2] * n, 0, 1), e[3] = pd.toNumber(t[3], 1), e;
    }, pd.setColorArray = function(e, t, n, r, i) {
        if (e = e || [], 2 == arguments.length && pd.isArray(t)) {
            var o = t;
            e[0] = +o[0] || 0, e[1] = +o[1] || 0, e[2] = +o[2] || 0, e[3] = pd.toNumber(o[3], 1);
        } else e[0] = +t || 0, e[1] = +n || 0, e[2] = +r || 0, e[3] = pd.toNumber(i, 1);
        return e;
    }, pd.setVectorArray = function(e, t, n, r) {
        if (e = e || [], 2 == arguments.length && pd.isArray(t)) {
            var i = t;
            e[0] = +i[0] || 0, e[1] = +i[1] || 0, e[2] = +i[2] || 0;
        } else e[0] = +t || 0, e[1] = +n || 0, e[2] = +r || 0;
        return e;
    }, pd.notZeroLength = function(e) {
        return e[0] > 1e-9 || e[0] < -1e-9 || e[1] > 1e-9 || e[1] < -1e-9 || e[2] > 1e-9 || e[2] < -1e-9;
    }, pd.cloneSimpleObject = function(e) {
        return JSON.parse(JSON.stringify(e));
    }, pd.hashMapFactory = function() {
        return Object.create(null);
    }, pd.hashMapHasEntry = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, pd.hashMapValues = function(e) {
        var t = [];
        for (var n in e) null != n && t.push(e[n]);
        return t;
    }, pd.hashMapIsEmpty = function(e) {
        for (var t in e) if (void 0 != t) return !1;
        return !0;
    }, pd.hashMapClear = function(e) {
        for (var t in e) delete e[t];
    }, Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(e) {
            if (null == this) throw new TypeError("this is null or not defined");
            for (var t = Object(this), n = t.length >>> 0, r = arguments[1] >> 0, i = r < 0 ? Math.max(n + r, 0) : Math.min(r, n), o = arguments[2], a = void 0 === o ? n : o >> 0, s = a < 0 ? Math.max(n + a, 0) : Math.min(a, n); i < s; ) t[i] = e, 
            i++;
            return t;
        }
    });
    var r = 1.6 * Math.PI, i = Math.PI / 1.5;
    pd.colorScaleRainbow = function(e, t) {
        t = t || [];
        var n = pd.constrainTo(e, 0, 1) * r;
        return t[0] = .5 - .5 * Math.sin(n), t[1] = .5 - .5 * Math.sin(n += i), t[2] = .5 - .5 * Math.sin(n += i), 
        t[3] = 1, t;
    }, pd.colorScaleRed = function(e, t) {
        t = t || [];
        var n = .75 * (e = pd.constrainTo(e, 0, 1));
        return t[0] = .25 + n, t[1] = t[2] = e * n, t[3] = 1, t;
    }, pd.colorScaleGreen = function(e, t) {
        return t = t || [], e = pd.constrainTo(e, 0, 1), t[0] = e > .5 ? 1.6 * (e - .5) : 0, 
        t[1] = .4 + .6 * e, t[2] = 0, t[3] = 1, t;
    }, pd.colorScaleBlue = function(e, t) {
        t = t || [];
        var n = .75 * (e = pd.constrainTo(e, 0, 1));
        return t[0] = t[1] = e * n, t[2] = .25 + n, t[3] = 1, t;
    }, pd.colorScaleRedWhiteBlue = function(e, t) {
        t = t || [];
        var n = pd.constrainTo(e, 0, 1);
        return n <= .5 ? (t[0] = t[1] = 2 * n, t[2] = 1) : (t[0] = 1, t[1] = t[2] = pd.mapAndConstrainTo(n, .5, .95, 1, 0)), 
        t[3] = 1, t;
    }, pd.colorScaleSepia = function(e, t) {
        t = t || [];
        var n = .1 + .9 * pd.constrainTo(e, 0, 1);
        return t[0] = n, t[1] = n, t[2] = .25 * n, t[3] = 1, t;
    }, pd.colorScaleEcotect = function(e, t) {
        t = t || [];
        var n, r = 2.1 * pd.constrainTo(e, 0, 1), i = 0;
        return r > 1 && (i = r - 1, r = 1), i > 1 && (i = 1), i < 0 && (i = 0), r < 0 && (r = 0), 
        n = 1 - r, t[0] = r, t[1] = i, t[2] = n, t[3] = 1, t;
    }, pd.startsWith = function(e, t) {
        return 0 === e.indexOf(t);
    }, pd.endsWith = function(e, t) {
        var n = e.length - t.length, r = e.indexOf(t, n);
        return -1 !== r && r === n;
    }, pd.indexOfLowerCase = function(e, t) {
        return pd.isString(t) && pd.isString(e) ? e.toLowerCase().indexOf(t.toLowerCase()) : -1;
    }, pd.countOccurrences = function(e, t, n) {
        if (!pd.isString(t) || !pd.isString(e) || t.length <= 0) return 0;
        for (var r = 0, i = 0, o = n ? 1 : t.length; (r = e.indexOf(t, r)) >= 0; ) r += o, 
        ++i;
        return i;
    }, pd.toStringWithLeadingZeros = function(e, t) {
        var n = String(e);
        for (t = pd.toInteger(t, 2); n.length < t; ) n = "0" + n;
        return n;
    }, pd.toStringWithPrecisionRange = function(e, t, n) {
        if (t < 0 || n < 0) throw new Error("ERROR: Minimum and maximum decimal places must be zero or positive.");
        if (e = parseFloat(e), n <= t) return e.toFixed(t);
        var r = e.toFixed(n).split(".");
        if (r.length < 2) return e.toFixed(t);
        var i = r[1].length;
        if (i <= t) return e.toFixed(t);
        for (var o = i - 1; o >= t && "0" == r[1].charAt(o); o--) i--;
        return i > 0 ? r[0] + "." + r[1].slice(0, i) : r[0];
    }, pd.toCamelCase = function(e) {
        return e.replace(/([-_][a-z])/g, function(e) {
            return e.toUpperCase().replace(/[-_]/, "");
        });
    }, pd.fromCamelCase = function(e, t) {
        return t = t || "-", e.replace(/([A-Z])/g, function(e) {
            return t + e.toLowerCase();
        });
    }, pd.UnitType = {
        NONE: 0,
        FRACTION: 1,
        PERCENTAGE: 2,
        LENGTH: 3,
        AREA: 4,
        VOLUME: 5,
        TIME_HRS: 6,
        TIME_MINS: 7,
        DATE: 8
    }, pd.DimensionType = {
        DEFAULT: 0,
        METRIC_MM: 1,
        METRIC_SI: 2,
        IMPERIAL: 3
    }, pd.Dimension = {}, pd.Dimension.type = pd.DimensionType.METRIC_MM, pd.Dimension.formatFeetAndInches = function(e) {
        var t, n, r, i = "", o = pd.sign(e);
        return r = 16 * ((n = 12 * ((t = Math.abs(e) / 25.4 / 12 + .001) - Math.floor(t)) + .001) - Math.floor(n)) + .001, 
        r = Math.floor(r), n = Math.floor(n), ((t = Math.floor(t)) > 0 || n < .001 && r < .999) && (i += t.toString() + "'"), 
        (n > 0 || r >= 1) && (t > 0 && (i += " "), i += n.toString() + '"'), r >= 1 && (i.length > 0 && (i += " "), 
        i += r % 8 == 0 ? Math.round(r / 8).toString() + "/2" : r % 4 == 0 ? Math.round(r / 4).toString() + "/4" : r % 2 == 0 ? Math.round(r / 2).toString() + "/8" : r.toString() + "/16"), 
        o < 0 ? "-" + i : i;
    }, pd.Dimension.formatDimension = function(e, t, n, r) {
        switch (t = t || pd.Dimension.type) {
          default:
          case pd.DimensionType.METRIC_MM:
            return (!pd.isNumeric(n) || n < 0) && (n = 0), r ? e.toFixed(n) + " mm" : e.toFixed(n);

          case pd.DimensionType.METRIC_SI:
            return (!pd.isNumeric(n) || n < 0) && (n = 3), r ? (e / 1e3).toFixed(n) + " m" : (e / 1e3).toFixed(n);

          case pd.DimensionType.IMPERIAL:
            return pd.Dimension.formatFeetAndInches(e);
        }
    }, pd.Dimension.formatDistance = function(e, t, n, r) {
        switch (t = t || pd.Dimension.type) {
          default:
          case pd.DimensionType.METRIC_MM:
          case pd.DimensionType.METRIC_SI:
            return (!pd.isNumeric(n) || n < 0) && (n = 3), r ? (e / 1e3).toFixed(n) + " m" : (e / 1e3).toFixed(n);

          case pd.DimensionType.IMPERIAL:
            return pd.Dimension.formatFeetAndInches(e);
        }
    }, pd.Dimension.getDefaultStep = function(e) {
        switch (e = e || pd.Dimension.type) {
          default:
          case pd.DimensionType.METRIC_MM:
          case pd.DimensionType.METRIC_SI:
            return 25;

          case pd.DimensionType.IMPERIAL:
            return 25.4;
        }
    }, pd.Dimension.getSmallStep = function(e) {
        switch (e = e || pd.Dimension.type) {
          default:
          case pd.DimensionType.METRIC_MM:
          case pd.DimensionType.METRIC_SI:
            return 5;

          case pd.DimensionType.IMPERIAL:
            return 6.35;
        }
    }, pd.Dimension.incrementDimension = function(e, t, n, r) {
        var i, o;
        if (n = pd.toNumber(n, 0), t = pd.toNumber(t, 0), r = pd.toNumber(r, pd.Dimension.getDefaultStep()), 
        t) return pd.Dimension.type == pd.DimensionType.IMPERIAL ? (o = 1.5875, r > 900 ? (i = 4572, 
        r = 25.4) : r > 300 ? (i = 914.4, r = 25.4) : r > 15 ? (i = 304.8, r = 25.4) : r > .99 ? (i = 304.8, 
        r = 1) : (r = 1.5875, i = 25.4), r < o && (r = o), t = e && e.shiftKey ? Math.abs(t) < 10 ? i * pd.sign(t) : 5 * i * pd.sign(t) : e && (e.ctrlKey || e.metaKey) ? Math.abs(t) < 10 ? o * pd.sign(t) : 4 * o * pd.sign(t) : Math.abs(t) < 10 ? r * pd.sign(t) : i * pd.sign(t)) : (i = 5 * r, 
        r < (o = 1) && (r = o), t = e && e.shiftKey ? Math.abs(t) < 5 ? i * pd.sign(t) : Math.abs(t) < 10 ? 5 * i * pd.sign(t) : 10 * i * pd.sign(t) : e && (e.ctrlKey || e.metaKey) ? Math.abs(t) < 10 ? o * pd.sign(t) : 5 * o * pd.sign(t) : Math.abs(t) < 10 ? r * pd.sign(t) : i * pd.sign(t)), 
        pd.incrementBy(n, t);
    }, pd.Dimension.formatArea = function(e, t, n) {
        switch (t = t || pd.Dimension.type) {
          default:
          case pd.DimensionType.METRIC_MM:
          case pd.DimensionType.METRIC_SI:
            return (!pd.isNumeric(n) || n < 0) && (n = 2), e.toFixed(n) + " m2";

          case pd.DimensionType.IMPERIAL:
            return (!pd.isNumeric(n) || n < 0) && (n = 1), (10.76391041671 * e).toFixed(n) + " ft2";
        }
    }, pd.Dimension.parseDimension = function(e, t) {
        var n = 0 === (e = e.toString()).indexOf("=");
        switch (t = t || pd.Dimension.type, /\'|\"/.test(e) ? (t = pd.DimensionType.IMPERIAL, 
        n = !1) : e.indexOf("ft") >= 0 || e.indexOf("in") > 0 ? (e = (e = e.replace("ft", "'")).replace("in", '"'), 
        t = pd.DimensionType.IMPERIAL, n = !1) : e.indexOf("mm") > 0 ? t = pd.DimensionType.METRIC_MM : e.indexOf("m") > 0 && (t = pd.DimensionType.METRIC_SI), 
        t) {
          default:
          case pd.DimensionType.METRIC_MM:
            return pd.parseEqn(e);

          case pd.DimensionType.METRIC_SI:
            return 1e3 * pd.parseEqn(e);

          case pd.DimensionType.IMPERIAL:
            var r = 0, i = 0, o = 0;
            if (e.indexOf("'") >= 0 || e.indexOf('"') >= 0) for (var a = e.split(/([\s\'\"]+)/), s = 0; s < a.length; s += 2) {
                if (a[s].indexOf("/") >= 0) {
                    if ((l = a[s].split("/")).length > 1) {
                        var u = parseFloat(l[0]);
                        (c = parseFloat(l[1])) > .1 && (o = u / c);
                    }
                } else s < a.length - 1 && a[s + 1].length > 0 ? a[s + 1].indexOf('"') >= 0 || a[s + 1].indexOf("''") >= 0 || a[s + 1].indexOf(" ") >= 0 && s > 0 ? i = parseFloat(a[s]) : (a[s + 1].indexOf("'") >= 0 || a[s + 1].indexOf(" ") >= 0 && 0 == s) && (r = parseFloat(a[s])) : a[s].length > 0 && (s > 0 || r > 0 ? i = parseFloat(a[s]) : r = parseFloat(a[s]));
            } else {
                if (n) return 304.8 * pd.parseEqn(e);
                for (a = e.split(" "), s = 0; s < a.length; ++s) {
                    var l;
                    if (a[s].length > 0) if (a[s].indexOf("/") >= 0) {
                        if ((l = a[s].split("/")).length > 1) {
                            var c;
                            u = parseFloat(l[0]);
                            (c = parseFloat(l[1])) > .1 && (o = u / c);
                        }
                    } else s > 0 ? i = parseFloat(a[s]) : r = parseFloat(a[s]);
                }
            }
            return 304.8 * r + 25.4 * i + 25.4 * o;
        }
    }, pd.Indexer = function(e, t) {
        this.unique = pd.isArray(e) ? e : [], this.map = {}, this.decimals = pd.toInteger(t, 3), 
        this.indexId = 0;
    }, pd.Indexer.prototype.addObject = function(e) {
        var t, n = JSON.stringify(e);
        return n in this.map ? t = this.map[n] : (t = this.map[n] = this.unique.length, 
        this.unique.push(e)), t;
    }, pd.Indexer.prototype.addById = function(e) {
        var t, n;
        return e._indexId || (e._indexId = ++this.indexId), (n = e._indexId) in this.map ? t = this.map[n] : (t = this.map[n] = this.unique.length, 
        this.unique.push(e)), t;
    }, pd.Indexer.prototype.addVectorArray = function(e) {
        var t, n = this.decimals, r = "[" + e[0].toFixed(n) + "," + e[1].toFixed(n) + "," + e[2].toFixed(n) + "]";
        return r in this.map ? t = this.map[r] : (t = this.map[r] = this.unique.length, 
        this.unique.push(e)), t;
    }, pd.IndexCounter = function(e) {
        this.unique = pd.isArray(e) ? e : [], this.counter = [], this.map = {};
    }, pd.IndexCounter.prototype.count = function(e) {
        var t = JSON.stringify(e);
        t in this.map || (this.map[t] = this.unique.length, this.unique.push(e), this.counter.push(0));
        var n = this.map[t];
        return this.counter[n]++, this.map[t];
    };
    var o = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 ], a = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366 ], s = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    function u(e) {
        return null != e && 0 == (3 & e) && (e % 100 != 0 || e % 400 == 0);
    }
    pd.DateTime = {}, pd.DateTime.isLeapYear = function(e) {
        return u(e);
    }, pd.DateTime.getMonthName = function(e) {
        return e >= 0 && e <= 11 ? s[e] : "";
    }, pd.DateTime.generateDateSuffix = function(e) {
        return e || (e = new Date()), e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + ("0" + e.getDate()).slice(-2) + "-" + ("0" + e.getHours()).slice(-2) + ("0" + e.getMinutes()).slice(-2) + "-" + ("0" + e.getSeconds()).slice(-2);
    }, pd.DateTime.getDOY = function(e, t, n) {
        return t = pd.constrainTo(t, 0, 11), u(n) ? a[t] + e - 1 : o[t] + e - 1;
    }, pd.DateTime.getDayAndMonth = function(e, t) {
        var n = u(t);
        e = pd.constrainTo(e, 0, n ? 365 : 364);
        for (var r = pd.constrainTo(Math.ceil(e / 30) + 1, 0, 11), i = n ? a : o, s = r; s >= 0; s--) {
            if (e >= i[s]) return {
                month: Math.floor(pd.constrainTo(s, 0, 11)),
                day: Math.floor(pd.constrainTo(e - i[s] + 1, 1, 31))
            };
        }
        return {
            month: 0,
            day: 1
        };
    }, pd.DateTime.snapToNearestMonth = function(e, t) {
        var n = u(t), r = n ? a : o, i = n ? 365 : 364;
        e = pd.constrainTo(e, 0, i);
        for (var s = 0; s <= 12; ++s) if (e < r[s] + 15) return r[s];
        return i;
    }, pd.DateTime.getMonthStartDay = function(e, t) {
        return e = pd.constrainTo(e, 0, 11), u(t) ? a[e] : o[e];
    }, pd.DateTime.getMonthEndDay = function(e, t) {
        var n = (e = pd.constrainTo(e, 0, 11) + 1) < 11 ? 1 : 0;
        return u(t) ? a[e] - n : o[e] - n;
    }, pd.DateTime.getDayCountArray = function(e) {
        return u(e) ? a : o;
    }, pd.DateTime.formatDate = function(e, t, n) {
        var r = u(t);
        e = pd.constrainTo(e, 0, r ? 365 : 364);
        for (var i = pd.constrainTo(Math.ceil(e / 30) + 1, 0, 11), l = r ? a : o, c = i; c >= 0; c--) if (e >= l[c]) {
            var d = Math.floor(pd.constrainTo(c, 0, 11)), p = Math.floor(pd.constrainTo(e - l[c] + 1, 1, 31));
            return p < 10 && (p = "0" + p), n && t > 0 ? p + " " + s[d] + " " + t : p + " " + s[d];
        }
        return "";
    }, pd.DateTime.formatAsMMMDD = function(e, t) {
        var n = u(t);
        e = pd.wrapAt(e, 0, n ? 366 : 365, !0);
        for (var r = pd.constrainTo(Math.ceil(e / 30) + 1, 0, 11), i = n ? a : o, l = r; l >= 0; l--) if (e >= i[l]) {
            var c = Math.floor(pd.constrainTo(l, 0, 11)), d = Math.floor(pd.constrainTo(e - i[l] + 1, 1, 31));
            return d < 10 && (d = "0" + d), s[c] + d;
        }
        return "";
    }, pd.DateTime.formatMonthName = function(e) {
        return e = Math.floor(pd.constrainTo(e, 0, 11)), s[e];
    }, pd.DateTime.formatTime = function(e, t) {
        if ((e = pd.wrapAt(e, 0, 24)) > 23.9999 && (e = 0), t) {
            var n = 3600 * Math.abs(e), r = pd.constrainTo(Math.floor(e), 0, 24), i = pd.constrainTo(Math.floor(60 * (e - r)), 0, 60), o = pd.constrainTo(Math.round(n - (3600 * r + 60 * i)), 0, 60);
            return o > 59.5 && (i = i < 59 ? i + 1 : 0, o = 0), i > 59.5 && (r = r < 23 ? r + 1 : 0, 
            i = 0), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), 
            r + ":" + i + ":" + o;
        }
        r = Math.floor(e);
        return (i = pd.constrainTo(Math.round(60 * (e - r)), 0, 60)) > 59.5 && (r = r < 23 ? r + 1 : 0, 
        i = 0), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), r + ":" + i;
    }, pd.DateTime.formatDuration = function(e, t) {
        var n = pd.sign(e);
        if (e = Math.abs(e), t) {
            var r = Math.floor(e), i = 3600 * Math.abs(e), o = pd.constrainTo(Math.floor(60 * (e - r)), 0, 60), a = pd.constrainTo(Math.round(i - (3600 * r + 60 * o)), 0, 60);
            return a > 59.5 && (o = o < 59 ? o + 1 : 0, a = 0), o > 59.5 && (r = r < 23 ? r + 1 : 0, 
            o = 0), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), 
            n < 0 ? "-" + r + ":" + o + ":" + a : r + ":" + o + ":" + a;
        }
        r = Math.floor(e);
        return (o = pd.constrainTo(Math.round(60 * (e - r)), 0, 60)) > 59.5 && (r = r < 23 ? r + 1 : 0, 
        o = 0), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), n < 0 ? "-" + r + ":" + o : r + ":" + o;
    }, pd.DateTime.parseTime = function(e) {
        if ("" == e) return null;
        var t = 0, n = 0;
        if (e.indexOf(".") >= 0 && e.indexOf(":") < 0) {
            var r = parseFloat(e);
            n = 60 * (r - (t = Math.floor(r)));
        } else {
            var i = e.match(/(\d+)(:(\d\d))?\s*(p|a?)/i);
            if (null == i) return null;
            if ((t = parseInt(i[1], 10)) > 24) {
                n = t;
                (t = Math.floor(n / 100)) > 0 && (n -= 100 * t), i[3] = n.toString();
            }
            i[4].length > 0 && ("a" == i[4] ? 12 == t && (t = 0) : t < 12 && (t += 12)), n = parseInt(i[3], 10) || 0;
        }
        t = pd._fastWrap(t, 0, 24);
        var o = new Date();
        return o.setHours(t), o.setMinutes(n), o.setSeconds(0, 0), o;
    }, pd.DateTime.parseTimeToDecimalHours = function(e) {
        var t = pd.DateTime.parseTime(e);
        return t ? pd.constrainTo(t.getHours() + t.getMinutes() / 60, 0, 24) : 0;
    }, pd.copyArray = function(e, t, n) {
        n = n || Math.round(Math.min(e.length, t.length));
        for (var r = 0; r < n; ++r) t[r] = e[r];
    }, pd.isArray = Array.isArray || function(e) {
        return !!e && "[object Array]" === Object.prototype.toString.call(e);
    }, pd.isTypedArray = function(e) {
        return !!e && (e.BYTES_PER_ELEMENT && void 0 !== e.byteLength);
    }, pd.isObject = function(e) {
        return null !== e && ("object" == typeof e || "function" == typeof e);
    }, pd.isString = function(e) {
        return "string" == typeof e || e instanceof String;
    }, pd.isFunction = function(e) {
        return "function" == typeof e;
    }, pd.isAlpha = function(e) {
        return /^[A-Za-z]$/.test(e);
    }, pd.sleepFor = function(e) {
        for (var t = new Date().getTime(); new Date().getTime() < t + e; ) ;
        return pd;
    }, pd.parseEqn = parseFloat, pd.parseCSV = function(e) {
        for (var t, n = [ "" ], r = !1, i = 0, o = 0; o < e.length; ++o) if ('"' == (t = e[o]) && r && '"' == e[o + 1]) n[i] += t, 
        ++o; else if ('"' != t) if ("," != t || r) {
            if ("\n" == t && !r) break;
            n[i] += t;
        } else n[++i] = ""; else r = !r;
        return n;
    }, pd.GUID = function() {
        for (var e = {}, t = [], n = 0; n < 256; ++n) t[n] = (n < 16 ? "0" : "") + n.toString(16);
        return e.generate = function() {
            var e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
            return t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255];
        }, e;
    }(), pd.addSimpleEventHandling = function(e) {
        e._pd_events = e._pd_events || {}, e.on = function(t, n) {
            "string" == typeof t && (t = t.trim(), e._pd_events[t] && pd.isArray(e._pd_events[t]) || (e._pd_events[t] = []), 
            n && e._pd_events[t].indexOf(n) < 0 && e._pd_events[t].push(n));
            return e;
        }, e.off = function(t, n) {
            if ("string" == typeof t && (t = t.trim(), e._pd_events[t] && pd.isArray(e._pd_events[t]))) {
                var r = e._pd_events[t].indexOf(n);
                r > -1 && e._pd_events[t].splice(r, 1);
            }
            return e;
        }, e.emit = function(t) {
            if (e._pd_events[t] && pd.isArray(e._pd_events[t])) for (var n = [].slice.call(arguments, 1), r = e._pd_events[t], i = 0, o = r.length; i < o; ++i) r[i].apply(e, n);
            return e;
        }, e.once = function(t, n) {
            return e.on(t, function r() {
                e.removeListener(t, r), n.apply(e, arguments);
            }), e;
        };
    }, pd.Easing = {
        linear: function(e) {
            return e;
        },
        inSine: function(e) {
            return 1 - Math.sin(pd.Const.HALF_PI + e * pd.Const.HALF_PI);
        },
        outSine: function(e) {
            return Math.sin(e * pd.Const.HALF_PI);
        },
        inOutSine: function(e) {
            return .5 * (1 + Math.sin(-pd.Const.HALF_PI + e * Math.PI));
        },
        inOutSinePow: function(e, t) {
            return t = +t || 2, Math.pow(.5 * (1 + Math.cos(-Math.PI + e * Math.PI)), t);
        },
        inQuad: function(e) {
            return e * e;
        },
        outQuad: function(e) {
            return e * (2 - e);
        },
        inOutQuad: function(e) {
            return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
        },
        inCubic: function(e) {
            return e * e * e;
        },
        outCubic: function(e) {
            return --e * e * e + 1;
        },
        inOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        },
        inQuart: function(e) {
            return e * e * e * e;
        },
        outQuart: function(e) {
            return 1 - --e * e * e * e;
        },
        inOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
        },
        inQuint: function(e) {
            return e * e * e * e * e;
        },
        outQuint: function(e) {
            return 1 + --e * e * e * e * e;
        },
        inOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
        },
        inExpo: function(e) {
            return (Math.pow(2, 8 * e) - 1) / 255;
        },
        outExpo: function(e) {
            return 1 - Math.pow(2, -8 * e);
        },
        inOutExpo: function(e) {
            return e < .5 ? (Math.pow(2, 16 * e) - 1) / 510 : 1 - .5 * Math.pow(2, -16 * (e - .5));
        },
        inCirc: function(e) {
            return 1 - Math.sqrt(1 - e);
        },
        outCirc: function(e) {
            return Math.sqrt(e);
        },
        inOutCirc: function(e) {
            return e < .5 ? .5 * (1 - Math.sqrt(1 - 2 * e)) : .5 * (1 + Math.sqrt(2 * e - 1));
        },
        inBack: function(e) {
            return e * e * (2.70158 * e - 1.70158);
        },
        outBack: function(e) {
            return 1 + --e * e * (2.70158 * e + 1.70158);
        },
        inOutBack: function(e) {
            return e < .5 ? e * e * (7 * e - 2.5) * 2 : 1 + --e * e * 2 * (7 * e + 2.5);
        },
        inBounce: function(e) {
            var t = e * e;
            return t * t * Math.sin(e * Math.PI * 4.5);
        },
        outBounce: function(e) {
            var t = (e - 1) * (e - 1);
            return 1 - t * t * Math.cos(e * Math.PI * 4.5);
        },
        inOutBounce: function(e) {
            var t;
            return e < .45 ? 8 * (t = e * e) * t * Math.sin(e * Math.PI * 9) : e < .55 ? .5 + .75 * Math.sin(e * Math.PI * 4) : 1 - 8 * (t = (e - 1) * (e - 1)) * t * Math.sin(e * Math.PI * 9);
        },
        inWobble: function(e) {
            return (.04 + .02 / e) * Math.sin(25 * e);
        },
        outWobble: function(e) {
            return (.04 - .04 / e) * Math.sin(25 * e) + 1;
        },
        inOutWobble: function(e) {
            return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1;
        },
        outElastic: function(e, t) {
            return t = t || .35, Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1;
        }
    };
}(), function() {
    var e = "num", t = "var";
    function n(e) {
        return pd.isString(e) && null !== e.match(/^[A-Za-z]+$/);
    }
    var r = /\s*([A-Za-z]+|(\d*\.?\d+\.?)+|\S)\s*/g;
    function i(i) {
        var o = 0, a = function(e) {
            for (var t, n = []; null !== (t = r.exec(e)); ) n.push(t[1]);
            return n;
        }(i);
        function s() {
            return a[o];
        }
        function u(e) {
            o++;
        }
        function l() {
            var r, i = s();
            if (r = i, pd.isString(r) && null !== r.match(/^\d*\.?\d+\.?/)) return u(), {
                type: e,
                value: i
            };
            if (n(i)) return u(), {
                type: t,
                name: i
            };
            if ("(" === i) {
                u();
                var o = d();
                if (")" !== s()) throw new SyntaxError("Unmatched closing bracket found.");
                return u(), o;
            }
            if ("-" === i) return u(), (o = l()).value = "-" + o.value, o;
            throw new SyntaxError("Expected a number, variable or bracket, but found: " + i);
        }
        function c() {
            for (var e = l(), t = s(); "*" === t || "/" === t || "^" === t; ) {
                u(), e = {
                    type: t,
                    left: e,
                    right: l()
                }, t = s();
            }
            return e;
        }
        function d() {
            for (var e = c(), t = s(); "+" === t || "-" === t; ) {
                u(), e = {
                    type: t,
                    left: e,
                    right: c()
                }, t = s();
            }
            return e;
        }
        return d();
    }
    var o = {}, a = {
        PI: Math.PI,
        E: Math.E
    };
    function s(n) {
        switch (n.type) {
          case e:
            return parseFloat(n.value);

          case t:
            return a[n.name] || o[n.name] || 0;

          case "^":
            return Math.pow(s(n.left), s(n.right));

          case "+":
            return s(n.left) + s(n.right);

          case "-":
            return s(n.left) - s(n.right);

          case "*":
            return s(n.left) * s(n.right);

          case "/":
            return s(n.left) / s(n.right);
        }
        throw new SyntaxError("Unrecognised symbol: " + n.toString());
    }
    var u = null;
    pd.parseEqn = u = function(e, t) {
        var r;
        pd.parseEqn.error && (pd.parseEqn.error = "");
        try {
            if (pd.isString(e) && e.indexOf("=") >= 0) {
                var a = e.split("=", 2);
                if (a.length > 1) {
                    r = s(i(a[1]));
                    var l = a[0].trim();
                    n(l) && (o[l] = r, u.emit("assign", l, r));
                } else r = s(i(a[0]));
            } else r = parseFloat(e);
            if (NaN == r) throw new SyntaxError("Invalid numeric input: " + e.toString());
        } catch (e) {
            pd.parseEqn.error = e.message, u.emit("error", pd.parseEqn.error), r = NaN;
        }
        return r;
    }, pd.addSimpleEventHandling(u), pd.parseEqn.error = "";
}();

var pdUnits = pdUnits || {};

!function() {
    function e(e) {
        return e;
    }
    var t = pdUnits.CELSIUS = 10, n = pdUnits.FARENHEIT = 11, r = pdUnits.RANKINE = 12, i = pdUnits.KELVIN = 13;
    pdUnits.Temperature = function(e) {
        this.units = pd.toInteger(e, t), this.toCelsius = null, this.toFarenheit = null, 
        this.toRankine = null, this.toKelvin = null, this.fromCelsius = null, this.fromFarenheit = null, 
        this.fromRankine = null, this.fromKelvin = null, this.set(this.units);
    }, pdUnits.Temperature.getName = function(e) {
        switch (e) {
          default:
            return "Celsius";

          case n:
            return "Farenheit";

          case r:
            return "Rankine";

          case i:
            return "Kelvin";
        }
    }, pdUnits.Temperature.getAbbrev = function(e, t) {
        switch (e) {
          default:
            return t ? "degC" : "°C";

          case n:
            return t ? "degF" : "°F";

          case r:
            return t ? "degR" : "°R";

          case i:
            return "K";
        }
    }, pdUnits.Temperature.getUnitsFromAbbrev = function(e) {
        return (e = e.toUpperCase()).indexOf("F") >= 0 ? n : e.indexOf("R") >= 0 ? r : e.indexOf("K") >= 0 ? i : t;
    }, pdUnits.Temperature.convertFarenheitToCelsius = function(e) {
        return 5 / 9 * (e - 32);
    }, pdUnits.Temperature.convertRankineToCelsius = function(e) {
        return 5 / 9 * (e - 459.67 - 32);
    }, pdUnits.Temperature.convertKelvinToCelsius = function(e) {
        return e - 273.15;
    }, pdUnits.Temperature.convertCelsiusToFarenheit = function(e) {
        return 1.8 * e + 32;
    }, pdUnits.Temperature.convertRankineToFarenheit = function(e) {
        return e - 459.67;
    }, pdUnits.Temperature.convertKelvinToFarenheit = function(e) {
        return 1.8 * (e - 273.15) + 32;
    }, pdUnits.Temperature.convertCelsiusToRankine = function(e) {
        return 1.8 * e + 491.67;
    }, pdUnits.Temperature.convertFarenheitToRankine = function(e) {
        return e + 459.67;
    }, pdUnits.Temperature.convertKelvinToRankine = function(e) {
        return 1.8 * e;
    }, pdUnits.Temperature.convertCelsiusToKelvin = function(e) {
        return e + 273.15;
    }, pdUnits.Temperature.convertFarenheitToKelvin = function(e) {
        return 5 / 9 * (e - 32) + 273.15;
    }, pdUnits.Temperature.convertRankineToKelvin = function(e) {
        return e * (5 / 9);
    }, pdUnits.Temperature.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.Temperature.prototype.getName = function() {
        return pdUnits.Temperature.getName(this.units);
    }, pdUnits.Temperature.prototype.getAbbrev = function(e) {
        return pdUnits.Temperature.getAbbrev(this.units, e);
    }, pdUnits.Temperature.prototype.set = function(o) {
        switch (o) {
          default:
            this.units = t, this.toCelsius = e, this.toFarenheit = pdUnits.Temperature.convertCelsiusToFarenheit, 
            this.toRankine = pdUnits.Temperature.convertCelsiusToRankine, this.toKelvin = pdUnits.Temperature.convertCelsiusToKelvin, 
            this.fromCelsius = e, this.fromFarenheit = pdUnits.Temperature.convertFarenheitToCelsius, 
            this.fromRankine = pdUnits.Temperature.convertRankineToCelsius, this.fromKelvin = pdUnits.Temperature.convertKelvinToCelsius;
            break;

          case n:
            this.units = n, this.toCelsius = pdUnits.Temperature.convertFarenheitToCelsius, 
            this.toFarenheit = e, this.toRankine = pdUnits.Temperature.convertFarenheitToRankine, 
            this.toKelvin = pdUnits.Temperature.convertFarenheitToKelvin, this.fromCelsius = pdUnits.Temperature.convertCelsiusToFarenheit, 
            this.fromFarenheit = e, this.fromRankine = pdUnits.Temperature.convertRankineToFarenheit, 
            this.fromKelvin = pdUnits.Temperature.convertKelvinToFarenheit;
            break;

          case r:
            this.units = r, this.toCelsius = pdUnits.Temperature.convertRankineToCelsius, this.toFarenheit = pdUnits.Temperature.convertRankineToFarenheit, 
            this.toRankine = e, this.toKelvin = pdUnits.Temperature.convertRankineToKelvin, 
            this.fromCelsius = pdUnits.Temperature.convertCelsiusToRankine, this.fromFarenheit = pdUnits.Temperature.convertFarenheitToRankine, 
            this.fromRankine = e, this.fromKelvin = pdUnits.Temperature.convertKelvinToRankine;
            break;

          case i:
            this.units = i, this.toCelsius = pdUnits.Temperature.convertKelvinToCelsius, this.toFarenheit = pdUnits.Temperature.convertKelvinToFarenheit, 
            this.toRankine = pdUnits.Temperature.convertKelvinToRankine, this.toKelvin = e, 
            this.fromCelsius = pdUnits.Temperature.convertCelsiusToKelvin, this.fromFarenheit = pdUnits.Temperature.convertFarenheitToKelvin, 
            this.fromRankine = pdUnits.Temperature.convertRankineToKelvin, this.fromKelvin = e;
        }
        return this;
    };
    var o = pdUnits.KILOGRAMSPERKILOGRAM = 20, a = pdUnits.GRAMSPERKILOGRAM = 21, s = pdUnits.POUNDSPERPOUND = 22, u = pdUnits.GRAINSPERPOUND = 23;
    pdUnits.HumidityRatio = function(e) {
        this.units = pd.toInteger(e, o), this.toKilogramsPerKilogram = null, this.toGramsPerKilogram = null, 
        this.toPoundsPerPound = null, this.toGrainsPerPound = null, this.fromKilogramsPerKilogram = null, 
        this.fromGramsPerKilogram = null, this.fromPoundsPerPound = null, this.fromGrainsPerPound = null, 
        this.set(this.units);
    }, pdUnits.HumidityRatio.getName = function(e) {
        switch (e) {
          default:
            return "Kilograms per Kilogram";

          case a:
            return "Grams per Kilogram";

          case s:
            return "Pounds per Pound";

          case u:
            return "Grains per Pound";
        }
    }, pdUnits.HumidityRatio.getAbbrev = function(e) {
        switch (e) {
          default:
            return "kg/kg";

          case a:
            return "g/kg";

          case s:
            return "lb/lb";

          case u:
            return "gr/lb";
        }
    }, pdUnits.HumidityRatio.getUnitsFromAbbrev = function(e) {
        switch (e.toLowerCase()) {
          default:
            return o;

          case "g/kg":
            return a;

          case "lb/lb":
            return s;

          case "gr/lb":
            return u;
        }
    }, pdUnits.HumidityRatio.convertGramsPerKilogramToKilogramsPerKilogram = function(e) {
        return .001 * e;
    }, pdUnits.HumidityRatio.convertPoundsPerPoundToKilogramsPerKilogram = function(e) {
        return e;
    }, pdUnits.HumidityRatio.convertGrainsPerPoundToKilogramsPerKilogram = function(e) {
        return .0001428571427 * e;
    }, pdUnits.HumidityRatio.convertKilogramsPerKilogramToGramsPerKilogram = function(e) {
        return 1e3 * e;
    }, pdUnits.HumidityRatio.convertPoundsPerPoundToGramsPerKilogram = function(e) {
        return 1e3 * e;
    }, pdUnits.HumidityRatio.convertGrainsPerPoundToGramsPerKilogram = function(e) {
        return .1428571427 * e;
    }, pdUnits.HumidityRatio.convertKilogramsPerKilogramToPoundsPerPound = function(e) {
        return e;
    }, pdUnits.HumidityRatio.convertGramsPerKilogramToPoundsPerPound = function(e) {
        return .001 * e;
    }, pdUnits.HumidityRatio.convertGrainsPerPoundToPoundsPerPound = function(e) {
        return .0001428571427 * e;
    }, pdUnits.HumidityRatio.convertKilogramsPerKilogramToGrainsPerPound = function(e) {
        return 7e3 * e;
    }, pdUnits.HumidityRatio.convertGramsPerKilogramToGrainsPerPound = function(e) {
        return 7 * e;
    }, pdUnits.HumidityRatio.convertPoundsPerPoundToGrainsPerPound = function(e) {
        return 7e3 * e;
    }, pdUnits.HumidityRatio.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.HumidityRatio.prototype.getName = function() {
        return pdUnits.HumidityRatio.getName(this.units);
    }, pdUnits.HumidityRatio.prototype.getAbbrev = function() {
        return pdUnits.HumidityRatio.getAbbrev(this.units);
    }, pdUnits.HumidityRatio.prototype.set = function(t) {
        switch (t) {
          default:
            this.units = o, this.toKilogramsPerKilogram = e, this.toGramsPerKilogram = pdUnits.HumidityRatio.convertKilogramsPerKilogramToGramsPerKilogram, 
            this.toPoundsPerPound = pdUnits.HumidityRatio.convertKilogramsPerKilogramToPoundsPerPound, 
            this.toGrainsPerPound = pdUnits.HumidityRatio.convertKilogramsPerKilogramToGrainsPerPound, 
            this.fromKilogramsPerKilogram = e, this.fromGramsPerKilogram = pdUnits.HumidityRatio.convertGramsPerKilogramToKilogramsPerKilogram, 
            this.fromPoundsPerPound = pdUnits.HumidityRatio.convertPoundsPerPoundToKilogramsPerKilogram, 
            this.fromGrainsPerPound = pdUnits.HumidityRatio.convertGrainsPerPoundToKilogramsPerKilogram;
            break;

          case a:
            this.units = a, this.toKilogramsPerKilogram = pdUnits.HumidityRatio.convertGramsPerKilogramToKilogramsPerKilogram, 
            this.toGramsPerKilogram = e, this.toPoundsPerPound = pdUnits.HumidityRatio.convertGramsPerKilogramToPoundsPerPound, 
            this.toGrainsPerPound = pdUnits.HumidityRatio.convertGramsPerKilogramToGrainsPerPound, 
            this.fromKilogramsPerKilogram = pdUnits.HumidityRatio.convertKilogramsPerKilogramToGramsPerKilogram, 
            this.fromGramsPerKilogram = e, this.fromPoundsPerPound = pdUnits.HumidityRatio.convertPoundsPerPoundToGramsPerKilogram, 
            this.fromGrainsPerPound = pdUnits.HumidityRatio.convertGrainsPerPoundToGramsPerKilogram;
            break;

          case s:
            this.units = s, this.toKilogramsPerKilogram = pdUnits.HumidityRatio.convertPoundsPerPoundToKilogramsPerKilogram, 
            this.toGramsPerKilogram = pdUnits.HumidityRatio.convertPoundsPerPoundToGramsPerKilogram, 
            this.toPoundsPerPound = e, this.toGrainsPerPound = pdUnits.HumidityRatio.convertPoundsPerPoundToGrainsPerPound, 
            this.fromKilogramsPerKilogram = pdUnits.HumidityRatio.convertKilogramsPerKilogramToPoundsPerPound, 
            this.fromGramsPerKilogram = pdUnits.HumidityRatio.convertGramsPerKilogramToPoundsPerPound, 
            this.fromPoundsPerPound = e, this.fromGrainsPerPound = pdUnits.HumidityRatio.convertGrainsPerPoundToPoundsPerPound;
            break;

          case u:
            this.units = u, this.toKilogramsPerKilogram = pdUnits.HumidityRatio.convertGrainsPerPoundToKilogramsPerKilogram, 
            this.toGramsPerKilogram = pdUnits.HumidityRatio.convertGrainsPerPoundToGramsPerKilogram, 
            this.toPoundsPerPound = pdUnits.HumidityRatio.convertGrainsPerPoundToPoundsPerPound, 
            this.toGrainsPerPound = e, this.fromKilogramsPerKilogram = pdUnits.HumidityRatio.convertKilogramsPerKilogramToGrainsPerPound, 
            this.fromGramsPerKilogram = pdUnits.HumidityRatio.convertGramsPerKilogramToGrainsPerPound, 
            this.fromPoundsPerPound = pdUnits.HumidityRatio.convertPoundsPerPoundToGrainsPerPound, 
            this.fromGrainsPerPound = e;
        }
        return this;
    };
    var l = pdUnits.PASCAL = 30, c = pdUnits.KILOPASCAL = 31, d = pdUnits.MILLIMETERSMERCURY = 32, p = pdUnits.INCHESMERCURY = 33, h = pdUnits.POUNDSPERSQUAREINCH = 34, m = pdUnits.ATMOSPHERES = 35, f = pdUnits.BAR = 36;
    pdUnits.Pressure = function(e) {
        this.units = pd.toInteger(e, l), this.toPascal = null, this.toKiloPascal = null, 
        this.toMillimetersMercury = null, this.toInchesMercury = null, this.toPoundsPerSquareInch = null, 
        this.toAtmospheres = null, this.toBar = null, this.fromPascal = null, this.fromKiloPascal = null, 
        this.fromMillimetersMercury = null, this.fromInchesMercury = null, this.fromPoundsPerSquareInch = null, 
        this.fromAtmospheres = null, this.fromBar = null, this.set(this.units);
    }, pdUnits.Pressure.getName = function(e) {
        switch (e) {
          default:
            return "Pascal";

          case c:
            return "kilo-Pascal";

          case d:
            return "Millimeters Mercury";

          case p:
            return "Inches Mercury";

          case h:
            return "Pounds Force Per Square Inch";

          case m:
            return "Atmospheres";

          case f:
            return "Bar";
        }
    }, pdUnits.Pressure.getAbbrev = function(e) {
        switch (e) {
          default:
            return "Pa";

          case c:
            return "kPa";

          case d:
            return "mmHg";

          case p:
            return "inHg";

          case h:
            return "Psi";

          case m:
            return "atm";

          case f:
            return "bar";
        }
    }, pdUnits.Pressure.getUnitsFromAbbrev = function(e) {
        switch (e.toLowerCase()) {
          default:
            return l;

          case "kpa":
            return c;

          case "mmhg":
            return d;

          case "inhg":
            return p;

          case "psi":
            return h;

          case "atm":
            return m;

          case "bar":
            return f;
        }
    }, pdUnits.Pressure.convertKiloPascalToPascal = function(e) {
        return 1e3 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToPascal = function(e) {
        return 133.322368 * e;
    }, pdUnits.Pressure.convertInchesMercuryToPascal = function(e) {
        return 3386.38866 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToPascal = function(e) {
        return 6894.7572 * e;
    }, pdUnits.Pressure.convertAtmospheresToPascal = function(e) {
        return 101325 * e;
    }, pdUnits.Pressure.convertBarToPascal = function(e) {
        return 1e5 * e;
    }, pdUnits.Pressure.convertPascalToKiloPascal = function(e) {
        return .001 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToKiloPascal = function(e) {
        return .133322368 * e;
    }, pdUnits.Pressure.convertInchesMercuryToKiloPascal = function(e) {
        return 3.38638866 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToKiloPascal = function(e) {
        return 6.8947572 * e;
    }, pdUnits.Pressure.convertAtmospheresToKiloPascal = function(e) {
        return 101.325 * e;
    }, pdUnits.Pressure.convertBarToKiloPascal = function(e) {
        return 100 * e;
    }, pdUnits.Pressure.convertPascalToMillimetersMercury = function(e) {
        return .00750062 * e;
    }, pdUnits.Pressure.convertKiloPascalToMillimetersMercury = function(e) {
        return 7.50062 * e;
    }, pdUnits.Pressure.convertInchesMercuryToMillimetersMercury = function(e) {
        return 25.4 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToMillimetersMercury = function(e) {
        return 51.714932 * e;
    }, pdUnits.Pressure.convertAtmospheresToMillimetersMercury = function(e) {
        return 760 * e;
    }, pdUnits.Pressure.convertBarToMillimetersMercury = function(e) {
        return 750.062 * e;
    }, pdUnits.Pressure.convertPascalToInchesMercury = function(e) {
        return .00029529983 * e;
    }, pdUnits.Pressure.convertKiloPascalToInchesMercury = function(e) {
        return .29529983 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToInchesMercury = function(e) {
        return .039370072 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToInchesMercury = function(e) {
        return 2.03602 * e;
    }, pdUnits.Pressure.convertAtmospheresToInchesMercury = function(e) {
        return 29.921255 * e;
    }, pdUnits.Pressure.convertBarToInchesMercury = function(e) {
        return 29.52998 * e;
    }, pdUnits.Pressure.convertPascalToPoundsPerSquareInch = function(e) {
        return .000145037737 * e;
    }, pdUnits.Pressure.convertKiloPascalToPoundsPerSquareInch = function(e) {
        return .145037737 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToPoundsPerSquareInch = function(e) {
        return .019336774 * e;
    }, pdUnits.Pressure.convertInchesMercuryToPoundsPerSquareInch = function(e) {
        return .491154 * e;
    }, pdUnits.Pressure.convertAtmospheresToPoundsPerSquareInch = function(e) {
        return 14.6959487 * e;
    }, pdUnits.Pressure.convertBarToPoundsPerSquareInch = function(e) {
        return 14.5037737 * e;
    }, pdUnits.Pressure.convertPascalToAtmospheres = function(e) {
        return 9869232e-12 * e;
    }, pdUnits.Pressure.convertKiloPascalToAtmospheres = function(e) {
        return .009869232 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToAtmospheres = function(e) {
        return .00131579 * e;
    }, pdUnits.Pressure.convertInchesMercuryToAtmospheres = function(e) {
        return .0334211 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToAtmospheres = function(e) {
        return .068046 * e;
    }, pdUnits.Pressure.convertBarToAtmospheres = function(e) {
        return .9869232 * e;
    }, pdUnits.Pressure.convertPascalToBar = function(e) {
        return 1e-5 * e;
    }, pdUnits.Pressure.convertKiloPascalToBar = function(e) {
        return .01 * e;
    }, pdUnits.Pressure.convertMillimetersMercuryToBar = function(e) {
        return .00133322368 * e;
    }, pdUnits.Pressure.convertInchesMercuryToBar = function(e) {
        return .033863886 * e;
    }, pdUnits.Pressure.convertPoundsPerSquareInchToBar = function(e) {
        return .06894757 * e;
    }, pdUnits.Pressure.convertAtmospheresToBar = function(e) {
        return 1.01325 * e;
    }, pdUnits.Pressure.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.Pressure.prototype.getName = function() {
        return pdUnits.Pressure.getName(this.units);
    }, pdUnits.Pressure.prototype.getAbbrev = function() {
        return pdUnits.Pressure.getAbbrev(this.units);
    }, pdUnits.Pressure.prototype.set = function(t) {
        switch (t) {
          default:
            this.units = l, this.toPascal = e, this.toKiloPascal = pdUnits.Pressure.convertPascalToKiloPascal, 
            this.toMillimetersMercury = pdUnits.Pressure.convertPascalToMillimetersMercury, 
            this.toInchesMercury = pdUnits.Pressure.convertPascalToInchesMercury, this.toPoundsPerSquareInch = pdUnits.Pressure.convertPascalToPoundsPerSquareInch, 
            this.toAtmospheres = pdUnits.Pressure.convertPascalToAtmospheres, this.toBar = pdUnits.Pressure.convertPascalToBar, 
            this.fromPascal = e, this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToPascal, 
            this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToPascal, 
            this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToPascal, this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToPascal, 
            this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToPascal, this.fromBar = pdUnits.Pressure.convertBarToPascal;
            break;

          case c:
            this.units = c, this.toPascal = pdUnits.Pressure.convertKiloPascalToPascal, this.toKiloPascal = e, 
            this.toMillimetersMercury = pdUnits.Pressure.convertKiloPascalToMillimetersMercury, 
            this.toInchesMercury = pdUnits.Pressure.convertKiloPascalToInchesMercury, this.toPoundsPerSquareInch = pdUnits.Pressure.convertKiloPascalToPoundsPerSquareInch, 
            this.toAtmospheres = pdUnits.Pressure.convertKiloPascalToAtmospheres, this.toBar = pdUnits.Pressure.convertKiloPascalToBar, 
            this.fromPascal = pdUnits.Pressure.convertPascalToKiloPascal, this.fromKiloPascal = e, 
            this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToKiloPascal, 
            this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToKiloPascal, this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToKiloPascal, 
            this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToKiloPascal, this.fromBar = pdUnits.Pressure.convertBarToKiloPascal;
            break;

          case d:
            this.units = d, this.toPascal = pdUnits.Pressure.convertMillimetersMercuryToPascal, 
            this.toKiloPascal = pdUnits.Pressure.convertMillimetersMercuryToKiloPascal, this.toMillimetersMercury = e, 
            this.toInchesMercury = pdUnits.Pressure.convertMillimetersMercuryToInchesMercury, 
            this.toPoundsPerSquareInch = pdUnits.Pressure.convertMillimetersMercuryToPoundsPerSquareInch, 
            this.toAtmospheres = pdUnits.Pressure.convertMillimetersMercuryToAtmospheres, this.toBar = pdUnits.Pressure.convertMillimetersMercuryToBar, 
            this.fromPascal = pdUnits.Pressure.convertPascalToMillimetersMercury, this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToMillimetersMercury, 
            this.fromMillimetersMercury = e, this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToMillimetersMercury, 
            this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToMillimetersMercury, 
            this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToMillimetersMercury, 
            this.fromBar = pdUnits.Pressure.convertBarToMillimetersMercury;
            break;

          case p:
            this.units = p, this.toPascal = pdUnits.Pressure.convertInchesMercuryToPascal, this.toKiloPascal = pdUnits.Pressure.convertInchesMercuryToKiloPascal, 
            this.toMillimetersMercury = pdUnits.Pressure.convertInchesMercuryToMillimetersMercury, 
            this.toInchesMercury = e, this.toPoundsPerSquareInch = pdUnits.Pressure.convertInchesMercuryToPoundsPerSquareInch, 
            this.toAtmospheres = pdUnits.Pressure.convertInchesMercuryToAtmospheres, this.toBar = pdUnits.Pressure.convertInchesMercuryToBar, 
            this.fromPascal = pdUnits.Pressure.convertPascalToInchesMercury, this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToInchesMercury, 
            this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToInchesMercury, 
            this.fromInchesMercury = e, this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToInchesMercury, 
            this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToInchesMercury, this.fromBar = pdUnits.Pressure.convertBarToInchesMercury;
            break;

          case h:
            this.units = h, this.toPascal = pdUnits.Pressure.convertPoundsPerSquareInchToPascal, 
            this.toKiloPascal = pdUnits.Pressure.convertPoundsPerSquareInchToKiloPascal, this.toMillimetersMercury = pdUnits.Pressure.convertPoundsPerSquareInchToMillimetersMercury, 
            this.toInchesMercury = pdUnits.Pressure.convertPoundsPerSquareInchToInchesMercury, 
            this.toPoundsPerSquareInch = e, this.toAtmospheres = pdUnits.Pressure.convertPoundsPerSquareInchToAtmospheres, 
            this.toBar = pdUnits.Pressure.convertPoundsPerSquareInchToBar, this.fromPascal = pdUnits.Pressure.convertPascalToPoundsPerSquareInch, 
            this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToPoundsPerSquareInch, this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToPoundsPerSquareInch, 
            this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToPoundsPerSquareInch, 
            this.fromPoundsPerSquareInch = e, this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToPoundsPerSquareInch, 
            this.fromBar = pdUnits.Pressure.convertBarToPoundsPerSquareInch;
            break;

          case m:
            this.units = m, this.toPascal = pdUnits.Pressure.convertAtmospheresToPascal, this.toKiloPascal = pdUnits.Pressure.convertAtmospheresToKiloPascal, 
            this.toMillimetersMercury = pdUnits.Pressure.convertAtmospheresToMillimetersMercury, 
            this.toInchesMercury = pdUnits.Pressure.convertAtmospheresToInchesMercury, this.toPoundsPerSquareInch = pdUnits.Pressure.convertAtmospheresToPoundsPerSquareInch, 
            this.toAtmospheres = e, this.toBar = pdUnits.Pressure.convertAtmospheresToBar, this.fromPascal = pdUnits.Pressure.convertPascalToAtmospheres, 
            this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToAtmospheres, this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToAtmospheres, 
            this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToAtmospheres, this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToAtmospheres, 
            this.fromAtmospheres = e, this.fromBar = pdUnits.Pressure.convertBarToAtmospheres;
            break;

          case f:
            this.units = f, this.toPascal = pdUnits.Pressure.convertBarToPascal, this.toKiloPascal = pdUnits.Pressure.convertBarToKiloPascal, 
            this.toMillimetersMercury = pdUnits.Pressure.convertBarToMillimetersMercury, this.toInchesMercury = pdUnits.Pressure.convertBarToInchesMercury, 
            this.toPoundsPerSquareInch = pdUnits.Pressure.convertBarToPoundsPerSquareInch, this.toAtmospheres = pdUnits.Pressure.convertBarToAtmospheres, 
            this.toBar = e, this.fromPascal = pdUnits.Pressure.convertPascalToBar, this.fromKiloPascal = pdUnits.Pressure.convertKiloPascalToBar, 
            this.fromMillimetersMercury = pdUnits.Pressure.convertMillimetersMercuryToBar, this.fromInchesMercury = pdUnits.Pressure.convertInchesMercuryToBar, 
            this.fromPoundsPerSquareInch = pdUnits.Pressure.convertPoundsPerSquareInchToBar, 
            this.fromAtmospheres = pdUnits.Pressure.convertAtmospheresToBar, this.fromBar = e;
        }
        return this;
    };
    var v = pdUnits.CUBICMETERSPERKILOGRAM = 40, g = pdUnits.CUBICFEETPERPOUND = 41;
    pdUnits.SpecificVolume = function(e) {
        this.units = pd.toInteger(e, v), this.toCubicMetersPerKilogram = null, this.toCubicFeetPerPound = null, 
        this.fromCubicMetersPerKilogram = null, this.fromCubicFeetPerPound = null, this.set(this.units);
    }, pdUnits.SpecificVolume.getName = function(e) {
        switch (e) {
          default:
            return "Cubic Meters per Kilogram";

          case g:
            return "Cubic Feet per Pound";
        }
    }, pdUnits.SpecificVolume.getAbbrev = function(e) {
        switch (e) {
          default:
            return "m3/kg";

          case g:
            return "ft3/lb";
        }
    }, pdUnits.SpecificVolume.getUnitsFromAbbrev = function(e) {
        return e.toLowerCase().indexOf("ft") >= 0 ? g : v;
    }, pdUnits.SpecificVolume.convertCubicFeetPerPoundToCubicMetersPerKilogram = function(e) {
        return .06242796 * e;
    }, pdUnits.SpecificVolume.convertCubicMetersPerKilogramToCubicFeetPerPound = function(e) {
        return 16.01846337 * e;
    }, pdUnits.SpecificVolume.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.SpecificVolume.prototype.getName = function() {
        return pdUnits.SpecificVolume.getName(this.units);
    }, pdUnits.SpecificVolume.prototype.getAbbrev = function() {
        return pdUnits.SpecificVolume.getAbbrev(this.units);
    }, pdUnits.SpecificVolume.prototype.set = function(t) {
        switch (t) {
          default:
            this.units = v, this.toCubicMetersPerKilogram = e, this.toCubicFeetPerPound = pdUnits.SpecificVolume.convertCubicMetersPerKilogramToCubicFeetPerPound, 
            this.fromCubicMetersPerKilogram = e, this.fromCubicFeetPerPound = pdUnits.SpecificVolume.convertCubicFeetPerPoundToCubicMetersPerKilogram;
            break;

          case g:
            this.units = g, this.toCubicMetersPerKilogram = pdUnits.SpecificVolume.convertCubicFeetPerPoundToCubicMetersPerKilogram, 
            this.toCubicFeetPerPound = e, this.fromCubicMetersPerKilogram = pdUnits.SpecificVolume.convertCubicMetersPerKilogramToCubicFeetPerPound, 
            this.fromCubicFeetPerPound = e;
        }
        return this;
    };
    var b = pdUnits.JOULESPERKILOGRAM = 50, P = pdUnits.KILOJOULESPERKILOGRAM = 51, M = pdUnits.BTUPERPOUND = 52;
    pdUnits.Enthalpy = function(e) {
        this.units = pd.toInteger(e, b), this.toJoulesPerKilogram = null, this.toKiloJoulesPerKilogram = null, 
        this.toBtuPerPound = null, this.fromJoulesPerKilogram = null, this.fromKiloJoulesPerKilogram = null, 
        this.fromBtuPerPound = null, this.set(this.units);
    }, pdUnits.Enthalpy.getName = function(e) {
        switch (e) {
          default:
            return "Joules per Kilogram";

          case P:
            return "kilo-Joules per Kilogram";

          case M:
            return "Btu per Pound";
        }
    }, pdUnits.Enthalpy.getAbbrev = function(e) {
        switch (e) {
          default:
            return "J/kg";

          case P:
            return "kJ/kg";

          case M:
            return "Btu/lb";
        }
    }, pdUnits.Enthalpy.getUnitsFromAbbrev = function(e) {
        switch (e.toLowerCase()) {
          default:
            return b;

          case "kj/kg":
            return P;

          case "btu/lb":
            return M;
        }
    }, pdUnits.Enthalpy.convertKiloJoulesPerKilogramToJoulesPerKilogram = function(e) {
        return 1e3 * e;
    }, pdUnits.Enthalpy.convertBtuPerPoundToJoulesPerKilogram = function(e) {
        return 2326 * e;
    }, pdUnits.Enthalpy.convertJoulesPerKilogramToKiloJoulesPerKilogram = function(e) {
        return .001 * e;
    }, pdUnits.Enthalpy.convertBtuPerPoundToKiloJoulesPerKilogram = function(e) {
        return 2.326 * e;
    }, pdUnits.Enthalpy.convertJoulesPerKilogramToBtuPerPound = function(e) {
        return .000429922613 * e;
    }, pdUnits.Enthalpy.convertKiloJoulesPerKilogramToBtuPerPound = function(e) {
        return .429922613 * e;
    }, pdUnits.Enthalpy.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.Enthalpy.prototype.getName = function() {
        return pdUnits.Enthalpy.getName(this.units);
    }, pdUnits.Enthalpy.prototype.getAbbrev = function() {
        return pdUnits.Enthalpy.getAbbrev(this.units);
    }, pdUnits.Enthalpy.prototype.set = function(t) {
        switch (t) {
          default:
            this.units = b, this.toJoulesPerKilogram = e, this.toKiloJoulesPerKilogram = pdUnits.Enthalpy.convertJoulesPerKilogramToKiloJoulesPerKilogram, 
            this.toBtuPerPound = pdUnits.Enthalpy.convertJoulesPerKilogramToBtuPerPound, this.fromJoulesPerKilogram = e, 
            this.fromKiloJoulesPerKilogram = pdUnits.Enthalpy.convertKiloJoulesPerKilogramToJoulesPerKilogram, 
            this.fromBtuPerPound = pdUnits.Enthalpy.convertBtuPerPoundToJoulesPerKilogram;
            break;

          case P:
            this.units = P, this.toJoulesPerKilogram = pdUnits.Enthalpy.convertKiloJoulesPerKilogramToJoulesPerKilogram, 
            this.toKiloJoulesPerKilogram = e, this.toBtuPerPound = pdUnits.Enthalpy.convertKiloJoulesPerKilogramToBtuPerPound, 
            this.fromJoulesPerKilogram = pdUnits.Enthalpy.convertJoulesPerKilogramToKiloJoulesPerKilogram, 
            this.fromKiloJoulesPerKilogram = e, this.fromBtuPerPound = pdUnits.Enthalpy.convertBtuPerPoundToKiloJoulesPerKilogram;
            break;

          case M:
            this.units = M, this.toJoulesPerKilogram = pdUnits.Enthalpy.convertBtuPerPoundToJoulesPerKilogram, 
            this.toKiloJoulesPerKilogram = pdUnits.Enthalpy.convertBtuPerPoundToKiloJoulesPerKilogram, 
            this.toBtuPerPound = e, this.fromJoulesPerKilogram = pdUnits.Enthalpy.convertJoulesPerKilogramToBtuPerPound, 
            this.fromKiloJoulesPerKilogram = pdUnits.Enthalpy.convertKiloJoulesPerKilogramToBtuPerPound, 
            this.fromBtuPerPound = e;
        }
        return this;
    };
    var y = pdUnits.METERSPERSECOND = 60, T = pdUnits.KILOMETERSPERHOUR = 61, O = pdUnits.FEETPERSECOND = 62, D = pdUnits.FEETPERMINUTE = 63, w = pdUnits.MILESPERHOUR = 64, S = pdUnits.KNOTS = 65;
    pdUnits.Velocity = function(e) {
        this.units = pd.toInteger(e, y), this.toMetersPerSecond = null, this.toKilometersPerHour = null, 
        this.toFeetPerSecond = null, this.toFeetPerMinute = null, this.toMilesPerHour = null, 
        this.toKnots = null, this.fromMetersPerSecond = null, this.fromKilometersPerHour = null, 
        this.fromFeetPerSecond = null, this.fromFeetPerMinute = null, this.fromMilesPerHour = null, 
        this.fromKnots = null, this.set(this.units);
    }, pdUnits.Velocity.getName = function(e) {
        switch (e) {
          default:
            return "Meters per Second";

          case T:
            return "Kilometers per Hour";

          case O:
            return "Feet per Second";

          case D:
            return "Feet per Minute";

          case w:
            return "Miles per Hour";

          case S:
            return "Knots";
        }
    }, pdUnits.Velocity.getAbbrev = function(e) {
        switch (e) {
          default:
            return "m/s";

          case T:
            return "km/h";

          case O:
            return "ft/s";

          case D:
            return "fpm";

          case w:
            return "mph";

          case S:
            return "kn";
        }
    }, pdUnits.Velocity.getUnitsFromAbbrev = function(e) {
        switch (e.toLowerCase()) {
          default:
            return y;

          case "km/h":
            return T;

          case "ft/s":
            return O;

          case "fpm":
            return D;

          case "mph":
            return w;

          case "kn":
            return S;
        }
    }, pdUnits.Velocity.convertKilometersPerHourToMetersPerSecond = function(e) {
        return .277778 * e;
    }, pdUnits.Velocity.convertFeetPerSecondToMetersPerSecond = function(e) {
        return .3048 * e;
    }, pdUnits.Velocity.convertFeetPerMinuteToMetersPerSecond = function(e) {
        return .00508 * e;
    }, pdUnits.Velocity.convertMilesPerHourToMetersPerSecond = function(e) {
        return .44704 * e;
    }, pdUnits.Velocity.convertKnotsToMetersPerSecond = function(e) {
        return .514444 * e;
    }, pdUnits.Velocity.convertMetersPerSecondToKilometersPerHour = function(e) {
        return 3.6 * e;
    }, pdUnits.Velocity.convertFeetPerSecondToKilometersPerHour = function(e) {
        return 1.09728 * e;
    }, pdUnits.Velocity.convertFeetPerMinuteToKilometersPerHour = function(e) {
        return .018288 * e;
    }, pdUnits.Velocity.convertMilesPerHourToKilometersPerHour = function(e) {
        return 1.60934 * e;
    }, pdUnits.Velocity.convertKnotsToKilometersPerHour = function(e) {
        return 1.852 * e;
    }, pdUnits.Velocity.convertMetersPerSecondToFeetPerMinute = function(e) {
        return 196.85 * e;
    }, pdUnits.Velocity.convertKilometersPerHourToFeetPerMinute = function(e) {
        return 54.6807 * e;
    }, pdUnits.Velocity.convertFeetPerSecondToFeetPerMinute = function(e) {
        return 60 * e;
    }, pdUnits.Velocity.convertMilesPerHourToFeetPerMinute = function(e) {
        return 88 * e;
    }, pdUnits.Velocity.convertKnotsToFeetPerMinute = function(e) {
        return 101.26859 * e;
    }, pdUnits.Velocity.convertMetersPerSecondToFeetPerSecond = function(e) {
        return 3.28084 * e;
    }, pdUnits.Velocity.convertKilometersPerHourToFeetPerSecond = function(e) {
        return .911344 * e;
    }, pdUnits.Velocity.convertFeetPerMinuteToFeetPerSecond = function(e) {
        return .0166667 * e;
    }, pdUnits.Velocity.convertMilesPerHourToFeetPerSecond = function(e) {
        return 1.46667 * e;
    }, pdUnits.Velocity.convertKnotsToFeetPerSecond = function(e) {
        return 1.68781 * e;
    }, pdUnits.Velocity.convertMetersPerSecondToMilesPerHour = function(e) {
        return 2.23694 * e;
    }, pdUnits.Velocity.convertKilometersPerHourToMilesPerHour = function(e) {
        return .621371 * e;
    }, pdUnits.Velocity.convertFeetPerSecondToMilesPerHour = function(e) {
        return .681818 * e;
    }, pdUnits.Velocity.convertFeetPerMinuteToMilesPerHour = function(e) {
        return .011363636 * e;
    }, pdUnits.Velocity.convertKnotsToMilesPerHour = function(e) {
        return 1.15078 * e;
    }, pdUnits.Velocity.convertMetersPerSecondToKnots = function(e) {
        return 1.94384 * e;
    }, pdUnits.Velocity.convertKilometersPerHourToKnots = function(e) {
        return .539957 * e;
    }, pdUnits.Velocity.convertFeetPerSecondToKnots = function(e) {
        return .592484 * e;
    }, pdUnits.Velocity.convertFeetPerMinuteToKnots = function(e) {
        return .00987473 * e;
    }, pdUnits.Velocity.convertMilesPerHourToKnots = function(e) {
        return .868976 * e;
    }, pdUnits.Velocity.prototype.getUnitsId = function() {
        return this.units;
    }, pdUnits.Velocity.prototype.getName = function() {
        return pdUnits.Velocity.getName(this.units);
    }, pdUnits.Velocity.prototype.getAbbrev = function() {
        return pdUnits.Velocity.getAbbrev(this.units);
    }, pdUnits.Velocity.prototype.set = function(t) {
        switch (t) {
          default:
            this.units = y, this.toMetersPerSecond = e, this.toKilometersPerHour = pdUnits.Velocity.convertMetersPerSecondToKilometersPerHour, 
            this.toFeetPerSecond = pdUnits.Velocity.convertMetersPerSecondToFeetPerSecond, this.toFeetPerMinute = pdUnits.Velocity.convertMetersPerSecondToFeetPerMinute, 
            this.toMilesPerHour = pdUnits.Velocity.convertMetersPerSecondToMilesPerHour, this.toKnots = pdUnits.Velocity.convertMetersPerSecondToKnots, 
            this.fromMetersPerSecond = e, this.fromKilometersPerHour = pdUnits.Velocity.convertKilometersPerHourToMetersPerSecond, 
            this.fromFeetPerSecond = pdUnits.Velocity.convertFeetPerSecondToMetersPerSecond, 
            this.fromFeetPerMinute = pdUnits.Velocity.convertFeetPerMinuteToMetersPerSecond, 
            this.fromMilesPerHour = pdUnits.Velocity.convertMilesPerHourToMetersPerSecond, this.fromKnots = pdUnits.Velocity.convertKnotsToMetersPerSecond;
            break;

          case T:
            this.units = T, this.toMetersPerSecond = pdUnits.Velocity.convertKilometersPerHourToMetersPerSecond, 
            this.toKilometersPerHour = e, this.toFeetPerSecond = pdUnits.Velocity.convertKilometersPerHourToFeetPerSecond, 
            this.toFeetPerMinute = pdUnits.Velocity.convertKilometersPerHourToFeetPerMinute, 
            this.toMilesPerHour = pdUnits.Velocity.convertKilometersPerHourToMilesPerHour, this.toKnots = pdUnits.Velocity.convertKilometersPerHourToKnots, 
            this.fromMetersPerSecond = pdUnits.Velocity.convertMetersPerSecondToKilometersPerHour, 
            this.fromKilometersPerHour = e, this.fromFeetPerSecond = pdUnits.Velocity.convertFeetPerSecondToKilometersPerHour, 
            this.fromMilesPerHour = pdUnits.Velocity.convertMilesPerHourToKilometersPerHour, 
            this.fromKnots = pdUnits.Velocity.convertKnotsToKilometersPerHour;
            break;

          case O:
            this.units = O, this.toMetersPerSecond = pdUnits.Velocity.convertFeetPerSecondToMetersPerSecond, 
            this.toKilometersPerHour = pdUnits.Velocity.convertFeetPerSecondToKilometersPerHour, 
            this.toFeetPerSecond = e, this.toFeetPerMinute = pdUnits.Velocity.convertFeetPerSecondToFeetPerMinute, 
            this.toMilesPerHour = pdUnits.Velocity.convertFeetPerSecondToMilesPerHour, this.toKnots = pdUnits.Velocity.convertFeetPerSecondToKnots, 
            this.fromMetersPerSecond = pdUnits.Velocity.convertMetersPerSecondToFeetPerSecond, 
            this.fromKilometersPerHour = pdUnits.Velocity.convertKilometersPerHourToFeetPerSecond, 
            this.fromFeetPerSecond = e, this.fromFeetPerMinute = pdUnits.Velocity.convertFeetPerMinuteToFeetPerSecond, 
            this.fromMilesPerHour = pdUnits.Velocity.convertMilesPerHourToFeetPerSecond, this.fromKnots = pdUnits.Velocity.convertKnotsToFeetPerSecond;
            break;

          case D:
            this.units = D, this.toMetersPerSecond = pdUnits.Velocity.convertFeetPerMinuteToMetersPerSecond, 
            this.toKilometersPerHour = pdUnits.Velocity.convertFeetPerMinuteToKilometersPerHour, 
            this.toFeetPerSecond = pdUnits.Velocity.convertFeetPerMinuteToFeetPerSecond, this.toFeetPerMinute = e, 
            this.toMilesPerHour = pdUnits.Velocity.convertFeetPerMinuteToMilesPerHour, this.toKnots = pdUnits.Velocity.convertFeetPerMinuteToKnots, 
            this.fromMetersPerSecond = pdUnits.Velocity.convertMetersPerSecondToFeetPerMinute, 
            this.fromKilometersPerHour = pdUnits.Velocity.convertKilometersPerHourToFeetPerMinute, 
            this.fromFeetPerSecond = pdUnits.Velocity.convertFeetPerSecondToFeetPerMinute, this.fromFeetPerMinute = e, 
            this.fromMilesPerHour = pdUnits.Velocity.convertMilesPerHourToFeetPerMinute, this.fromKnots = pdUnits.Velocity.convertKnotsToFeetPerMinute;
            break;

          case w:
            this.units = w, this.toMetersPerSecond = pdUnits.Velocity.convertMilesPerHourToMetersPerSecond, 
            this.toKilometersPerHour = pdUnits.Velocity.convertMilesPerHourToKilometersPerHour, 
            this.toFeetPerSecond = pdUnits.Velocity.convertMilesPerHourToFeetPerSecond, this.toFeetPerMinute = pdUnits.Velocity.convertMilesPerHourToFeetPerMinute, 
            this.toMilesPerHour = e, this.toKnots = pdUnits.Velocity.convertMilesPerHourToKnots, 
            this.fromMetersPerSecond = pdUnits.Velocity.convertMetersPerSecondToMilesPerHour, 
            this.fromKilometersPerHour = pdUnits.Velocity.convertKilometersPerHourToMilesPerHour, 
            this.fromFeetPerSecond = pdUnits.Velocity.convertFeetPerSecondToMilesPerHour, this.fromFeetPerMinute = pdUnits.Velocity.convertFeetPerMinuteToMilesPerHour, 
            this.fromMilesPerHour = e, this.fromKnots = pdUnits.Velocity.convertKnotsToMilesPerHour;
            break;

          case S:
            this.units = S, this.toMetersPerSecond = pdUnits.Velocity.convertKnotsToMetersPerSecond, 
            this.toKilometersPerHour = pdUnits.Velocity.convertKnotsToKilometersPerHour, this.toFeetPerSecond = pdUnits.Velocity.convertKnotsToFeetPerSecond, 
            this.toFeetPerMinute = pdUnits.Velocity.convertKnotsToFeetPerMinute, this.toMilesPerHour = pdUnits.Velocity.convertKnotsToMilesPerHour, 
            this.toKnots = e, this.fromMetersPerSecond = pdUnits.Velocity.convertMetersPerSecondToKnots, 
            this.fromKilometersPerHour = pdUnits.Velocity.convertKilometersPerHourToKnots, this.fromFeetPerSecond = pdUnits.Velocity.convertFeetPerSecondToKnots, 
            this.fromFeetPerMinute = pdUnits.Velocity.convertFeetPerMinuteToKnots, this.fromMilesPerHour = pdUnits.Velocity.convertMilesPerHourToKnots, 
            this.fromKnots = e;
        }
        return this;
    };
}();

var pdDOM = pdDOM || {};

!function() {
    pdDOM.mobileOS = "", pdDOM.isMobile = !1, pdDOM.devicePixelRatio = window.devicePixelRatio || 1, 
    pdDOM.pageScale = 1, function() {
        var e, t, n, r = navigator.userAgent || navigator.vendor || window.opera;
        if (pdDOM.mobileOS = r.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) || [], pdDOM.isMobile = pdDOM.mobileOS.length > 0, 
        pdDOM.isMobile) {
            if (/windows phone/i.test(r)) return void (pdDOM.isWindowsPhone = !0);
            if (/android/i.test(r)) return void (pdDOM.isAndroid = !0);
            if (/iPad|iPhone|iPod/.test(r) && !window.MSStream) pdDOM.isiOS = !0, /iPhone/.test(r) && (pdDOM.isiPhone = !0);
        } else {
            var i = r.toLowerCase();
            if (i.indexOf("macintosh") >= 0 && (pdDOM.isMacintosh = !0), navigator.vendor && navigator.vendor.indexOf("Apple") >= 0 && navigator.userAgent && !navigator.userAgent.match("CriOS")) {
                var o = (n = (e = i).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], 
                /trident/i.test(n[1]) ? {
                    name: "IE",
                    version: (t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || ""
                } : "Chrome" === n[1] && null != (t = e.match(/\b(OPR|Edge)\/(\d+)/)) ? {
                    name: t[1].replace("OPR", "Opera"),
                    version: t[2]
                } : (n = n[2] ? [ n[1], n[2] ] : [ navigator.appName, navigator.appVersion, "-?" ], 
                null != (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]), {
                    name: n[0],
                    version: n[1]
                })), a = parseFloat(o.version);
                return pdDOM.isSafariOldVersion = a < 11, void (pdDOM.isSafari = !0);
            }
            if (i.indexOf("firefox") >= 0) return void (pdDOM.isFirefox = !0);
            if (i.indexOf("windows") >= 0) pdDOM.isWindows10 = i.indexOf("10.") >= 0, pdDOM.isWindows = !0;
        }
    }();
    var e = !0, t = null;
    pdDOM.checkForSafariCanvasFix = function(n, r, i) {
        return pdDOM.isSafariOldVersion && window.devicePixelRatio > 1.5 && (n > 1441 || r > 901 ? (e && i && (null == t ? t = i({
            content: "<strong>WARNING</strong>: WebGL canvas resolution reduced as Safari really struggles<br />on a scaled Retina display when sized greater than 1440x900 pixels.",
            style: "primary",
            timeout: 12e3
        }) : t.hasClass("snackbar-opened") || t.snackbar("show")), pdDOM.devicePixelRatio = 1, 
        e = !1) : (i && t && t.hasClass("snackbar-opened") && t.snackbar("hide"), pdDOM.devicePixelRatio = window.devicePixelRatio, 
        e = !0)), pdDOM;
    }, pdDOM.getClientWidth = function() {
        var e = window.innerWidth, t = document.documentElement.clientWidth;
        return t < e ? e : t;
    }, pdDOM.getClientHeight = function() {
        var e = window.innerHeight, t = document.documentElement.clientHeight;
        return t < e ? e : t;
    }, pdDOM.setFullSizeCanvasByDevice = function(e, t, n, r) {
        return pdDOM.checkForSafariCanvasFix(t, n, r), e && e.canvas && (e.canvas.width = t * pdDOM.devicePixelRatio, 
        e.canvas.height = n * pdDOM.devicePixelRatio, e.canvas.style.height = n, e.canvas.style.width = t, 
        e.viewport(0, 0, e.canvas.width, e.canvas.height)), pdDOM;
    }, pdDOM.applyFirefoxPageScaleFix = function(e, t, n, r) {
        return e && pdDOM.isFirefox && (e.css({
            "-moz-transform": "scale(" + r + ")",
            "-moz-transform-origin": "0 0"
        }), r < 1 ? e.css({
            width: t * pdDOM.pageScale + "px",
            height: n * pdDOM.pageScale + "px"
        }) : e.css({
            width: "100%",
            height: "100%"
        })), pdDOM;
    }, pdDOM.getParamString = function(e, t, n) {
        var r = [];
        for (var i in e) r.push(encodeURIComponent(n ? i.toUpperCase() : i) + "=" + encodeURIComponent(e[i]));
        return (t && -1 !== t.indexOf("?") ? "&" : "?") + r.join("&");
    }, pdDOM.getUrlParams = function(e) {
        var t = {};
        return (e = e || window.location.search).replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, n, r) {
            t[n] = r;
        }), t;
    }, pdDOM.hasClass = function(e, t) {
        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
        if (e instanceof SVGElement) {
            var r = e.getAttribute("class");
            return !!r && !!r.match(n);
        }
        return !!e.className.match(n);
    }, pdDOM.addClass = function(e, t, n) {
        n = pd.toBoolean(n, !1), pd.isArray(t) && t.forEach(function(t) {
            pdDOM.addClass(e, t, n);
        });
        var r = e.getAttribute("class"), i = new RegExp("(\\s|^)" + t + "(\\s|$)");
        return r && r.match(i) || (e instanceof SVGElement ? (r = n ? r.length > 0 ? t + " " + r : t : r.length > 0 ? r + " " + t : t, 
        e.setAttribute("class", r)) : e.className = n ? e.className.length > 0 ? t + " " + e.className : t : e.className.length > 0 ? e.className + " " + t : t), 
        pdDOM;
    }, pdDOM.removeClass = function(e, t) {
        pd.isArray(t) && t.forEach(function(t) {
            pdDOM.removeClass(e, t);
        });
        var n = e.getAttribute("class"), r = new RegExp("(\\s|^)" + t + "(\\s|$)");
        return n && n.match(r) && (e instanceof SVGElement ? (n = n.replace(r, " ").trim(), 
        e.setAttribute("class", n)) : e.className = e.className.replace(r, " ").trim()), 
        pdDOM;
    }, pdDOM.toggleClass = function(e, t, n) {
        pd.isArray(t) && t.forEach(function(t) {
            pdDOM.toggleClass(e, t, n);
        });
        var r = pdDOM.hasClass(e, t);
        return (n = pd.toBoolean(n, !r)) && !r ? pdDOM.addClass(e, t) : !n && r && pdDOM.removeClass(e, t), 
        pdDOM;
    }, pdDOM.getComputedElementStyle = function(e, t) {
        var n = "";
        if (window.getComputedStyle) n = getComputedStyle(e).getPropertyValue(t); else if (e.currentStyle) try {
            n = e.currentStyle[t];
        } catch (e) {}
        return n;
    }, pdDOM.getElementFontSizeInPixels = function(e) {
        return parseFloat(pdDOM.getComputedElementStyle(e || document.documentElement, "font-size"));
    }, pdDOM.convertEmToPixels = function(e, t) {
        return parseFloat(e) * pdDOM.getElementFontSizeInPixels(t);
    }, pdDOM.convertToInlineStyles = function(e, t) {
        if (t = t || {}, e) {
            t.recursive && Array.prototype.forEach.call(e.children, function(e) {
                pdDOM.convertToInlineStyles(e, t);
            });
            for (var n = getComputedStyle(e), r = 0; r < n.length; ++r) {
                var i = n.item(r);
                if (!t.properties || t.properties.indexOf(i) >= 0) {
                    var o = n.getPropertyValue(i);
                    e.style[i] = o;
                }
            }
        }
    };
    var n = "http://www.w3.org/2000/svg";
    function r(e, t, n) {
        for (;e.hasChildNodes(); ) e.removeChild(e.lastChild);
        if (t && pd.isString(t)) {
            var r, i = pd.toNumber(n.x, 0), o = pd.toNumber(n.lineHeight, 1.1), a = pd.toNumber(n.dy, 0), s = t.match(/[^\r\n]+/g);
            if (pd.isArray(s) && s.length > 1) for (var u = 0, l = s.length; u < l; ++u) (r = pdDOM.svgElem("tspan", {
                x: i,
                dy: (u > 0 ? o : a) + "em"
            })).appendChild(document.createTextNode(s[u].trim())), e.appendChild(r); else e.appendChild(document.createTextNode(t.trim()));
        } else e.appendChild(document.createTextNode(""));
        return e;
    }
    pdDOM.svgElem = function(e, t) {
        t = t || {};
        var r = document.createElementNS(n, e);
        for (var i in t) r.setAttributeNS(null, i, t[i]);
        return r;
    }, pdDOM.svgText = function(e, t) {
        var n = pdDOM.svgElem("text", t);
        return n.appendChild(document.createTextNode(e)), n;
    }, pdDOM.svgTextMultiLine = function(e, t) {
        var n = pdDOM.svgElem("text", t);
        return r(n, e, t), n;
    }, pdDOM.svgAttr = function(e, t) {
        if (e && pd.isObject(t)) for (var r in t) null == t[r] ? e.removeAttributeNS(n, r) : e.setAttributeNS(null, r, t[r]);
        return pdDOM;
    }, pdDOM.svgSetText = function(e, t, n) {
        if (e) {
            if (pd.isObject(n)) for (var r in n) e.setAttributeNS(null, r, n[r]);
            e.firstChild && (e.firstChild.nodeValue = t);
        }
        return pdDOM;
    }, pdDOM.svgSetTextMultiLine = function(e, t, n) {
        if (e && pd.isObject(n)) for (var i in n) e.setAttributeNS(null, i, n[i]);
        return r(e, t, n), pdDOM;
    }, pdDOM.svgHide = function(e) {
        return e.setAttributeNS(null, "display", "none"), pdDOM;
    }, pdDOM.svgShow = function(e) {
        return e.setAttributeNS(null, "display", "inline"), pdDOM;
    }, pdDOM.copyToClipboard = function(e) {
        var t = !1;
        if (e) {
            var n = document.createElement("textarea"), r = window.pageYOffset || document.documentElement.scrollTop;
            n.style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", n.style.margin = "0", 
            n.style.position = "absolute", n.style.left = "-9999px", n.style.top = r + "px", 
            n.setAttribute("readonly", ""), n.value = e.toString(), document.body.appendChild(n), 
            n.focus(), n.select();
            try {
                t = document.execCommand("copy");
            } catch (e) {
                t = !1;
            }
            setTimeout(function() {
                document.body.removeChild(n), n = null;
            }, 500);
        }
        return t;
    }, pdDOM.enableDragDrop = function(e, t) {
        function n(e) {
            (e = e || window.event).dataTransfer.dropEffect = "copy", e.stopPropagation(), e.preventDefault();
        }
        return !(!window.FileReader || !e || "function" != typeof t) && (e.addEventListener("dragenter", n), 
        e.addEventListener("dragleave", n), e.addEventListener("dragover", n), e.addEventListener("drop", function(e) {
            return (e = e || window.event).stopPropagation(), e.preventDefault(), t(e.dataTransfer.files, e), 
            !1;
        }), !0);
    }, pdDOM.getKbdIncrement = function(e, t) {
        switch (e.which) {
          case 37:
            return t ? 1 : 0;

          case 38:
            return 1;

          case 39:
            return t ? -1 : 0;

          case 40:
            return -1;

          case 33:
            return 10;

          case 34:
            return -10;
        }
        return 0;
    }, pdDOM.getScrollIncrement = function(e) {
        var t = e.originalEvent || e;
        if (t) {
            if (t.deltaY) return t.deltaY < 0 ? 1 : -1;
            if (t.deltaX) return t.deltaX < 0 ? 1 : -1;
            if (void 0 !== t.wheelDeltaY) return t.wheelDeltaY < 0 ? 1 : -1;
            if (void 0 !== t.wheelDeltaX) return t.wheelDeltaX < 0 ? 1 : -1;
            if (t.wheelDelta) return t.wheelDelta < 0 ? 1 : -1;
            if (t.detail) return t.detail < 0 ? 1 : -1;
        }
        return 0;
    }, pdDOM.hiResTimeStamp = function() {
        if (window.performance) {
            var e = window.performance;
            if (e.now) return function() {
                return e.now();
            };
            if (e.webkitNow) return function() {
                return e.webkitNow();
            };
            if (e.mozNow) return function() {
                return e.mozNow();
            };
            if (e.oNow) return function() {
                return e.oNow();
            };
        }
        return function() {
            return Date.now();
        };
    }(), pdDOM.ThrottledUpdate = function(e, t, n) {
        var r = this, i = null;
        if ("function" != typeof e) throw new TypeError("ERROR: Callback must be a function.");
        function o() {
            r.cancel(), e(n);
        }
        return t = pd.isNumeric(t) ? parseFloat(t) : 50, this.trigger = function() {
            return i || (i = setTimeout(o, t)), r;
        }, this.restart = function(e) {
            return i && clearTimeout(i), t = pd.toNumber(e, t), i = setTimeout(o, t), r;
        }, this.timeout = function(t) {
            return r.cancel(), e(t = t || n), r;
        }, this.cancel = function() {
            return i && clearTimeout(i), i = null, r;
        }, this;
    }, pdDOM.throttledCalculation = function(e) {
        if ("object" != typeof (e = e || {}).iterator || "function" != typeof e.iterator.next) throw new Error("ERROR: Calculation requires a valid iterator object.");
        if ("function" != typeof e.callbackCalculate) throw new Error("ERROR: Calculation callback must be a function.");
        var t = e.iterator, n = e.callbackCalculate;
        return e.iterations = e.iterations || 1e6, e.timeout = e.timeout || 100, pdDOM.getGlobalAnimationQueue().addOrReplace(function() {
            var r = 0, i = pdDOM.hiResTimeStamp() + e.timeout;
            if (t) for (;null != (t = t.next()) && (n(t), !(++r >= e.iterations || pdDOM.hiResTimeStamp() > i)); ) ;
            return !t || t.cancelled ? (e.callbackOnComplete && e.callbackOnComplete(e), !0) : (e.callbackOnTimeout && e.callbackOnTimeout(t, e), 
            !1);
        }).start(), !0;
    };
    var i = [ "webkit", "moz", "MS", "o", "" ];
    pdDOM.cssAnimation = function(e, t, n, r) {
        pdDOM.addClass(e, t), function(e, t, n) {
            for (var r = 0; r < i.length; ++r) i[r] || (t = t.toLowerCase()), e.addEventListener(i[r] + t, n, !1);
        }(e, "AnimationEnd", function o(a) {
            !function(e, t, n) {
                for (var r = 0; r < i.length; ++r) i[r] || (t = t.toLowerCase()), e.removeEventListener(i[r] + t, n);
            }(e, "AnimationEnd", o), pdDOM.removeClass(e, t), "function" == typeof n && n(a, r);
        });
    };
    var o = null;
    function a(e) {
        return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037;
    }
    function s(e) {
        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29;
    }
    function u(e) {
        return Math.round(255 * (e <= .00304 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055));
    }
    function l(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
    }
    function c(e) {
        var t = l(255 * e[0]), n = l(255 * e[1]), r = l(255 * e[2]), i = s((.4124564 * t + .3575761 * n + .1804375 * r) / .95047), o = s(.2126729 * t + .7151522 * n + .072175 * r);
        return [ 116 * o - 16, 500 * (i - o), 200 * (o - s((.0193339 * t + .119192 * n + .9503041 * r) / 1.08883)) ];
    }
    function d(e, t, n, r) {
        var i, o, s, l, d = 1 - n, p = c(e), h = c(t), m = (i = [ d * p[0] + n * h[0], d * p[1] + n * h[1], d * p[2] + n * h[2] ], 
        o = (i[0] + 16) / 116, s = o + i[1] / 500, l = o - i[2] / 200, [ u(3.2404542 * (s = .95047 * a(s)) - 1.5371385 * (o = a(o)) - .4985314 * (l = 1.08883 * a(l))) / 255, u(-.969266 * s + 1.8760108 * o + .041556 * l) / 255, u(.0556434 * s - .2040259 * o + 1.0572252 * l) / 255 ]);
        return (r = r || [])[0] = pd.constrainTo(m[0], 0, 1), r[1] = pd.constrainTo(m[1], 0, 1), 
        r[2] = pd.constrainTo(m[2], 0, 1), r[3] = d * e[3] + n * t[3], r;
    }
    pdDOM.getGlobalAnimationQueue = function() {
        return o || (o = new pdDOM.AnimationQueue()), o;
    }, pdDOM.AnimationQueue = function() {
        var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60);
        }, t = [], n = [], r = [], i = !1, a = 0, s = 0, u = 0;
        function l(e) {
            t.indexOf(e) < 0 && t.push(e);
        }
        function c(e, t) {
            e((u - s) / 1e3, a, e._payload) && n.push(t);
        }
        function d() {
            if (i) {
                if (r.length > 0 && (r.forEach(l), r.length = 0), u = new Date().getTime(), t.forEach(c), 
                a++, n.length > 0) {
                    n.sort(function(e, t) {
                        return t - e;
                    });
                    for (var o = n.length - 1; o >= 0; o--) t.splice(n[o], 1);
                    n.length = 0;
                }
                e(d), s = u;
            }
        }
        return this.frameCount = function() {
            return a;
        }, this.add = function(e, t) {
            return e && "function" == typeof e && (t && (e._payload = t), i ? r.push(e) : l(e)), 
            this;
        }, this.addOrReplace = function(e, n) {
            if (e && "function" == typeof e) {
                var o = t.indexOf(e);
                n && (e._payload = n), o >= 0 ? t[o] = e : i ? r.push(e) : l(e);
            }
            return this;
        }, this.contains = function(e) {
            return t.indexOf(e) >= 0;
        }, this.remove = function(e) {
            if (e && "function" == typeof e) {
                var r = t.indexOf(e);
                r >= 0 && (i ? n.push(r) : t.splice(r, 1));
            }
            return this;
        }, this.start = function() {
            return i || (i = !0, s = new Date().getTime(), d()), this;
        }, this.stop = function() {
            return i = !1, this;
        }, o || (o = this), this;
    }, pdDOM.Animation = function(e, t) {
        var n = this;
        return this._queue = [], t && this._queue.push(t), t = t || {}, this.active = !1, 
        this.delay = pd.constrainTo(pd.toNumber(t.delay, 0), 0, 3600), this.duration = pd.constrainTo(pd.toNumber(t.duration, 1), .001, 3600), 
        this.easing = t.easing || pd.Easing.inOutSine, this.fromValue = pd.toNumber(t.fromValue, 0), 
        this.toValue = pd.toNumber(t.toValue, 1), this.getter = t.getter || null, this.callback = e || null, 
        this.onStart = t.onStart || null, this.onComplete = t.onComplete || null, this.progress = 0, 
        this.speed = 1 / this.duration, this.update = function(e) {
            return n._handleUpdate(e);
        }, this._delayValue = 0, e = t = null, this;
    }, pdDOM.Animation.prototype._handleUpdate = function(e) {
        if (this.progress > .999) return this.active = !1, this.progress = 1, this.callback && this.callback(this.toValue, this), 
        (!this.onComplete || !1 !== this.onComplete(this)) && (!(this._queue.length > 0) || (this.start(this._queue.shift()), 
        !1));
        if (this._delayValue > 1e-6) {
            if (this._delayValue -= e, !(this._delayValue < 0)) return !1;
            this._delayValue = 0;
        }
        if (this.callback) {
            var t = this.easing ? this.easing(this.progress) : this.progress;
            this.callback((1 - t) * this.fromValue + t * this.toValue, this);
        }
        return (this.progress += this.speed * e) >= 1 && (this.progress = 1), !1;
    }, pdDOM.Animation.prototype._handleStart = function(e) {
        e || (e = this._queue.length > 0 ? this._queue.shift() : {}), void 0 !== e.delay && (this.delay = pd.toNumber(e.delay, 0)), 
        void 0 !== e.duration && (this.duration = pd.toNumber(e.duration, 1)), void 0 !== e.easing && (this.easing = e.easing), 
        void 0 !== e.getter && (this.getter = e.getter), void 0 !== e.onStart && (this.onStart = e.onStart), 
        void 0 !== e.onComplete && (this.onComplete = e.onComplete), e.callback && "function" == typeof e.callback && (this.callback = e.callback);
        var t = pd.toNumber(e.toValue, this.toValue), n = pd.toNumber(e.fromValue, this.fromValue);
        return this.getter && (n = pd.toNumber(this.getter(), n)), this.duration = pd.constrainTo(pd.toNumber(this.duration, 1), .001, 3600), 
        this.speed = 1 / this.duration, this.delay = pd.constrainTo(this.delay, 0, 3600), 
        this._delayValue = this.delay, pd.closeTo(n, t) && pd.closeTo(t, this.toValue) || (this.active ? (this.progress = Math.min(.5, this.progress), 
        this.fromValue = n - this.progress * (t - n), this.toValue = t) : (this.progress = 0, 
        this.fromValue = n, this.toValue = t, pdDOM.getGlobalAnimationQueue().addOrReplace(this.update).start(), 
        this.active = !0, this.onStart && this.onStart(this))), this;
    }, pdDOM.Animation.prototype.then = function(e) {
        return e && this._queue.push(e), this;
    }, pdDOM.Animation.prototype.start = function(e) {
        return this._handleStart(e), this;
    }, pdDOM.Animation.prototype.cancel = function() {
        return this.active = !1, pdDOM.getGlobalAnimationQueue().remove(this.update), this.onComplete && this.onComplete(this), 
        this;
    }, pdDOM.Transition = function(e) {
        return e = e || {}, this.target = e.target, this.property = e.property || "", this.type = pd.toInteger(e.type, -1), 
        this.easing = e.easing && "function" == typeof e.easing ? e.easing : null, this.mapping = pd.isArray(e.mapping) ? e.mapping : null, 
        this.interpolator = e.interpolator || null, this.isMethod = this.target && "function" == typeof this.target[this.property], 
        this._cachedTransform = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ], this._cachedTransform.active = !1, 
        this.interpolator || this.determineType(this.type, e.from, e.to), e = null, this;
    };
    var p = pdDOM.Transition;
    pdDOM.Transition.VALUE = 0, pdDOM.Transition.VECTOR = 1, pdDOM.Transition.COLOR = 2, 
    pdDOM.Transition.prototype.determineType = function(e, t, n) {
        if (e < 0 && pd.isArray(n)) {
            if (!pd.isArray(t)) throw new Error("From and to values must be of the same type and length.");
            n.length > 3 && t.length > 3 ? e = p.COLOR : n.length > 2 && t.length > 2 && (e = p.VECTOR);
        }
        switch (e) {
          default:
          case p.VALUE:
            this.interpolator = new function(e, t) {
                t = pd.toNumber(t, 1), e = pd.toNumber(e, 0), this.interpolate = function(n) {
                    return (1 - n) * e + n * t;
                };
            }(t, n), this.type = p.VALUE;
            break;

          case p.VECTOR:
            this.interpolator = new function(e, t) {
                var n = [];
                e = e || [], pd.isArray(e) && (e[0] = +e[0] || 0, e[1] = +e[1] || 0, e[2] = +e[2] || 0), 
                t = t || [], pd.isArray(e) && (t[0] = +t[0] || 0, t[1] = +t[1] || 0, t[2] = +t[2] || 0), 
                this.interpolate = function(r) {
                    return 1 === r ? t : (o = t, s = n, u = 1 - (a = r), l = [ +(i = e)[0] || 0, +i[1] || 0, +i[2] || 0 ], 
                    c = [ +o[0] || 0, +o[1] || 0, +o[2] || 0 ], (s = s || [])[0] = u * l[0] + a * c[0], 
                    s[1] = u * l[1] + a * c[1], s[2] = u * l[2] + a * c[2], s);
                    var i, o, a, s, u, l, c;
                };
            }(t, n), this.type = e;
            break;

          case p.COLOR:
            this.interpolator = new function(e, t) {
                var n = [];
                e = e || [], pd.isArray(e) && (e[0] = +e[0] || 0, e[1] = +e[1] || 0, e[2] = +e[2] || 0, 
                e[3] = pd.toNumber(e[3], 1)), t = t || [], pd.isArray(e) && (t[0] = +t[0] || 0, 
                t[1] = +t[1] || 0, t[2] = +t[2] || 0, t[3] = pd.toNumber(t[3], 1)), this.interpolate = function(r) {
                    return 1 === r ? t : d(e, t, r, n);
                };
            }(t, n), this.type = e;
        }
        return this;
    }, pdDOM.Transition.prototype.update = function(e) {
        var t = this.interpolator;
        return !!t && (this.easing && (e = this.easing(e)), this.mapping && (e = pd.mapTo(e, 0, 1, this.mapping[0], this.mapping[1])), 
        this.isMethod ? this.target[this.property](t.interpolate(e)) : this.target[this.property] = t.interpolate(e), 
        !0);
    }, pdDOM.AnimationSequence = function(e) {
        (e = e || {}).easing = e.easing || pd.Easing.linear, pdDOM.Animation.call(this, null, e), 
        this.host = e.host || null, this.processOnDraw = pd.toBoolean(e.processOnDraw, !1), 
        this.transitionSequence = e.transitions || [], this.activeStep = null, this._onFullyComplete = this.onComplete, 
        this.onComplete = null;
    }, pdDOM.AnimationSequence.prototype = Object.create(pdDOM.Animation.prototype), 
    pdDOM.AnimationSequence.prototype.constructor = pdDOM.AnimationSequence, pdDOM.AnimationSequence.prototype._nextStep = function() {
        var e = null;
        return this.transitionSequence.length > 0 && (e = this.transitionSequence.shift()).duration < 0 && (e.callback && e.callback(this, this.host), 
        e = this._nextStep()), e;
    }, pdDOM.AnimationSequence.prototype._processPropertyChanges = function(e, t) {
        var n = !1;
        if (e && e instanceof Object && t && t instanceof Object) for (var r in t) e.hasOwnProperty(r) && t.hasOwnProperty(r) && (e[r] = t[r], 
        n = !0);
        return n;
    }, pdDOM.AnimationSequence.prototype._handleProgress = function(e, t) {
        t.activeStep && !t.activeStep.paused && (t.processOnDraw || t.process(), gl.update());
    }, pdDOM.AnimationSequence.prototype._handleComplete = function(e) {
        if (e.checkNextStep = !0, !e.processOnDraw || e.activeStep && e.activeStep.paused) {
            if (e.activeStep = e._nextStep(), e.active = e.checkNextStep = !1, !e.activeStep) return e._onFullyComplete && e._onFullyComplete(e), 
            !0;
            e._handleStart({
                duration: e.activeStep.duration,
                fromValue: 0,
                toValue: 1
            });
        } else e.active = e.transitionSequence.length > 0;
        return !e.active;
    }, pdDOM.AnimationSequence.prototype.addTransition = function(e, t) {
        var n = [];
        if (e = Math.max(.017, pd.toNumber(e, 1)), arguments.length > 1) for (var r = 1; r < arguments.length; ++r) if (t = arguments[r], 
        pd.isArray(t)) for (var i = 0; i < t.length; ++i) t[i].update && (t[i].target || (t[i].target = this.host), 
        n.push(t[i])); else t.update && (t.target || (t.target = this.host), n.push(t));
        return this.transitionSequence.push({
            transitions: n,
            duration: e
        }), this;
    }, pdDOM.AnimationSequence.prototype.addCallback = function(e) {
        return e && this.transitionSequence.push({
            callback: e,
            duration: -1
        }), this;
    }, pdDOM.AnimationSequence.prototype.addPause = function(e) {
        return (e = pd.toNumber(e, 1)) > 0 && this.transitionSequence.push({
            transitions: [],
            duration: e,
            paused: !0
        }), this;
    }, pdDOM.AnimationSequence.prototype.addChanges = function(e, t) {
        var n = this;
        return 1 == arguments.length && (t = e, e = this.host), e && e instanceof Object && t && t instanceof Object && this.addCallback(function() {
            n._processPropertyChanges(e, t) && gl.update();
        }), this;
    }, pdDOM.AnimationSequence.prototype.process = function() {
        if (this.activeStep && !this.activeStep.paused && this.activeStep.duration > 0) {
            var e = this.progress;
            this.easing && (e = this.easing(e));
            for (var t = this.activeStep.transitions, n = 0, r = t.length; n < r; ++n) t[n].update(e);
        }
        return this.checkNextStep && (this.activeStep = this._nextStep(), this.active = this.checkNextStep = !1, 
        this.activeStep ? this._handleStart({
            duration: this.activeStep.duration,
            fromValue: 0,
            toValue: 1
        }) : this.cancel()), this;
    }, pdDOM.AnimationSequence.prototype.start = function() {
        return this.transitionSequence.length > 0 && (!this.activeStep || this.progress >= .999) && (this.activeStep = this._nextStep()), 
        this.activeStep && this.activeStep.duration > 0 && (this.checkNextStep = !1, this._handleStart({
            callback: this._handleProgress,
            onComplete: this._handleComplete,
            duration: this.activeStep.duration,
            easing: pd.Easing.linear,
            fromValue: 0,
            toValue: 1
        })), this;
    }, pdDOM.AnimateNode = function(e) {
        if (!(e instanceof pd3D.Node)) throw new TypeError("Can only animate a pd3D.Node object.");
        this.node = e, this.transform = e.transformMatrix = new pd3D.Transform(), this.animation = new pdDOM.AnimationSequence({
            host: this
        });
        var t = [ 0, 0, 0 ], n = [ 0, 0, 0 ], r = [ 1, 1, 1 ];
        Object.defineProperty(this, "translation", {
            get: function() {
                return t;
            },
            set: function(e) {
                if (pd.isArray(e)) {
                    var n = gl.animationQueue.frameCount();
                    t.frameIndex != n && (t.frameIndex = n, t[0] = 0, t[1] = 0, t[2] = 0), t[0] += +e[0] || 0, 
                    t[1] += +e[1] || 0, t[2] += +e[2] || 0;
                }
            }
        }), Object.defineProperty(this, "rotation", {
            get: function() {
                return n;
            },
            set: function(e) {
                if (pd.isArray(e)) {
                    var t = gl.animationQueue.frameCount();
                    n.frameIndex != t && (n.frameIndex = t, n[0] = 0, n[1] = 0, n[2] = 0), n[0] += +e[0] || 0, 
                    n[1] += +e[1] || 0, n[2] += +e[2] || 0;
                }
            }
        }), Object.defineProperty(this, "scale", {
            get: function() {
                return r;
            },
            set: function(e) {
                if (pd.isArray(e)) {
                    var t = gl.animationQueue.frameCount();
                    r.frameIndex != t && (r.frameIndex = t, r[0] = 1, r[1] = 1, r[2] = 1), r[0] *= +e[0] || 0, 
                    r[1] *= +e[1] || 0, r[2] *= +e[2] || 0;
                }
            }
        }), this.clearDynamicTransform = function() {
            return t[0] = t[1] = t[2] = 0, n[0] = n[1] = n[2] = 0, r[0] = r[1] = r[2] = 1, this;
        }, e.callbackOnDraw = function() {
            this.animation && this.animation.active && this.animation.process(), this.transform.addTranslation(this.translation), 
            this.transform.addRotation(this.rotation), this.transform.addScale(this.scale);
        }, this.remove = function() {
            this.node.transformMatrix = null, this.node.callbackOnDraw = null;
        };
    }, pdDOM.localStorage = null;
    try {
        pdDOM.localStorage = window.localStorage;
    } catch (e) {}
    pdDOM.localStorage || (pdDOM.localStorage = {
        getItem: function(e) {
            return e && this.hasOwnProperty(e) ? unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")) : null;
        },
        key: function(e) {
            return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[e]);
        },
        setItem: function(e, t) {
            e && (document.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/", 
            this.length = document.cookie.match(/\=/g).length);
        },
        length: 0,
        removeItem: function(e) {
            e && this.hasOwnProperty(e) && (document.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/", 
            this.length--);
        },
        hasOwnProperty: function(e) {
            return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
        }
    }, pdDOM.localStorage.length = (document.cookie.match(/\=/g) || pdDOM.localStorage).length);
    var h = !0;
    pdDOM.setLocalStorageItem = function(e, t) {
        var n = pdDOM.localStorage;
        if (n && e && e.length) try {
            n.setItem(e, t);
        } catch (e) {
            h && (alert("ERROR - Unable to store value:\n" + e), h = !1);
        }
    }, pdDOM.getLocalStorageItem = function(e) {
        return e && e.length ? pdDOM.localStorage.getItem(e) : null;
    }, pdDOM.removeLocalStorageItems = function(e) {
        if (pd.isArray(e)) {
            for (var t = pdDOM.localStorage, n = 0, r = e.length; n < r; ++n) t.removeItem(e[n]);
            return !0;
        }
        return !1;
    }, pdDOM.fromXML = function(e) {
        var t, n, r, i, o = {};
        if (1 == e.nodeType) {
            if (e.attributes.length > 0) {
                o["@attributes"] = {};
                for (var a = 0; a < e.attributes.length; ++a) {
                    var s = e.attributes.item(a);
                    o["@attributes"][s.nodeName] = s.nodeValue;
                }
            }
        } else 3 == e.nodeType && (o = e.nodeValue.trim());
        if (e.hasChildNodes()) if (1 === e.childNodes.length && 3 === e.childNodes[0].nodeType) o = e.childNodes[0].nodeValue.trim(); else for (var u = 0; u < e.childNodes.length; ++u) void 0 === o[i = (r = e.childNodes.item(u)).nodeName] ? "" !== (t = pdDOM.fromXML(r)) && (o[i] = t) : (void 0 === o[i].push && (n = o[i], 
        o[i] = [], o[i].push(n)), "" !== (t = pdDOM.fromXML(r)) && o[i].push(t));
        if (!pd.isArray(o) && "object" == typeof o) {
            var l = Object.keys(o);
            if (1 == l.length && "#text" == l[0]) return o["#text"];
            if (0 === l.length) return null;
        }
        return o;
    }, pdDOM.toXML = function(e, t) {
        var n = document.implementation.createDocument("", "", null);
        n || (n = new DOMParser().parseFromString("<dummy />", "text/xml")).removeChild(n.documentElement), 
        t = t || "jsonXML";
        var r = n.createElement(t);
        return function e(t, r) {
            var i, o;
            if (r.constructor === String || r.constructor === Number || r.constructor === Boolean) {
                if (t.appendChild(n.createTextNode(r.toString())), r === r.valueOf()) return;
            } else r.constructor === Date && t.appendChild(n.createTextNode(r.toGMTString()));
            for (var a in r) if (!isFinite(a)) if (i = r[a], "keyValue" === a) null !== i && !0 !== i && t.appendChild(n.createTextNode(i.constructor === Date ? i.toGMTString() : String(i))); else if ("@attributes" === a) for (var s in i) t.setAttribute(s, i[s]); else if ("@" === a.charAt(0)) t.setAttribute(a.slice(1), i); else if (i.constructor === Array) for (var u = 0; u < i.length; ++u) e(o = n.createElement(a), i[u]), 
            t.appendChild(o); else o = n.createElement(a), i instanceof Object ? e(o, i) : null !== i && !0 !== i && o.appendChild(n.createTextNode(i.toString())), 
            t.appendChild(o);
        }(r, e), n.appendChild(r), n;
    };
}(), function() {
    pdDOM.jsonToURI = function e(t) {
        function n(e) {
            return /[^\w-.]/.test(e) ? e.replace(/[^\w-.]/g, function(e) {
                return "$" === e ? "!" : (e = e.charCodeAt(0)) < 256 ? "*" + ("00" + e.toString(16)).slice(-2) : "**" + ("0000" + e.toString(16)).slice(-4);
            }) : e;
        }
        var r;
        switch (typeof t) {
          case "number":
            return isFinite(t) ? "~" + pd.toStringWithPrecisionRange(t, 0, 6) : "~null";

          case "boolean":
            return "~" + t;

          case "string":
            return "~'" + n(t);

          case "object":
            if (!t) return "~null";
            if (r = [], pd.isArray(t)) {
                for (var i = 0; i < t.length; ++i) r[i] = e(t[i]) || "~null";
                return "~(" + (r.join("") || "~") + ")";
            }
            for (var o in t) if (t.hasOwnProperty(o)) {
                var a = e(t[o]);
                a && r.push(n(o) + a);
            }
            return "~(" + r.join("~") + ")";

          default:
            return;
        }
    };
    var e = {
        "true": !0,
        "false": !1,
        "null": null
    };
    pdDOM.uriToJSON = function(t) {
        if (!t) return t;
        var n = 0, r = (t = t.replace(/%27/g, "'")).length;
        function i(e) {
            if (t.charAt(n) !== e) throw new Error("bad JSURL syntax: expected " + e + ", got " + (t && t.charAt(n)));
            n++;
        }
        function o() {
            for (var e, i = n, o = ""; n < r && "~" !== (e = t.charAt(n)) && ")" !== e; ) switch (e) {
              case "*":
                i < n && (o += t.substring(i, n)), "*" === t.charAt(n + 1) ? (o += String.fromCharCode(parseInt(t.substring(n + 2, n + 6), 16)), 
                i = n += 6) : (o += String.fromCharCode(parseInt(t.substring(n + 1, n + 3), 16)), 
                i = n += 3);
                break;

              case "!":
                i < n && (o += t.substring(i, n)), o += "$", i = ++n;
                break;

              default:
                n++;
            }
            return o + t.substring(i, n);
        }
        return function a() {
            var s, u, l;
            switch (i("~"), u = t.charAt(n)) {
              case "(":
                if (n++, "~" === t.charAt(n)) if (s = [], ")" === t.charAt(n + 1)) n++; else do {
                    s.push(a());
                } while ("~" === t.charAt(n)); else if (s = {}, ")" !== t.charAt(n)) do {
                    s[o()] = a();
                } while ("~" === t.charAt(n) && ++n);
                i(")");
                break;

              case "'":
                n++, s = o();
                break;

              default:
                for (l = n++; n < r && /[^)~]/.test(t.charAt(n)); ) n++;
                var c = t.substring(l, n);
                if (/[\d\-]/.test(u)) s = parseFloat(c); else if (void 0 === (s = e[c])) throw new Error("bad value keyword: " + c);
            }
            return s;
        }();
    };
}(), pdDOM.Interaction = pdDOM.Interaction || {}, function() {
    var e = !1, t = !1, n = null, r = null, i = 0, o = 0, a = 3e3, s = {
        x: 0,
        y: 0
    }, u = 0, l = 0, c = 0, d = {}, p = -1, h = -1, m = {
        x: 0,
        y: 0
    }, f = {
        x: 0,
        y: 0
    }, v = {
        x: 0,
        y: 0
    }, g = 400, b = 1250;
    function P(e) {
        var t = null;
        return e.target ? t = e.target : e.srcElement && (t = e.srcElement), t && 3 == t.nodeType && (t = t.parentNode), 
        t;
    }
    function M(e) {
        var t = pd.toNumber(e.pageX, 0), n = pd.toNumber(e.pageY, 0), r = P(e);
        if (r && r.getBoundingClientRect) {
            var i = 1 / pdDOM.pageScale, o = r.getBoundingClientRect();
            t -= o.left * i, n -= o.top * i;
        }
        return {
            target: r,
            button: pd.toInteger(e.button, 0),
            identifier: pd.toNumber(e.identifier, e.pointerId),
            pageX: e.pageX,
            pageY: e.pageY,
            x: t,
            y: n
        };
    }
    function y() {
        for (var e in i = 0, o = 0, r = null, p = -1, h = -1, d) d.hasOwnProperty(e) && delete d[e];
    }
    function T(e) {
        "touch" == e.pointerType.toLowerCase() && (i = Math.max(0, i - 1), o = e.timeStamp, 
        i <= 0 && y());
    }
    function O(e) {
        return (e = pd.toNumber(e, 0)) < .001 ? e = 3 + 3 * pdDOM.devicePixelRatio : e <= .999 && (e *= 3 + 3 * pdDOM.devicePixelRatio), 
        v.x > e || v.y > e;
    }
    window.PointerEvent && (e = !0, document.addEventListener("pointerdown", function(e) {
        "touch" == e.pointerType.toLowerCase() && (e.isPrimary && e.timeStamp - o > a && y(), 
        i = Math.min(10, i + 1), o = e.timeStamp);
    }), document.addEventListener("pointercancel", T), document.addEventListener("pointerup", T)), 
    ("ontouchstart" in window || "ontouchstart" in document.documentElement || window.DocumentTouch && document instanceof DocumentTouch) && (t = !0), 
    pdDOM.Interaction.hasMoved = O, pdDOM.Interaction.activeTouchList = d, Object.defineProperty(pdDOM.Interaction, "hasPointerEvents", {
        get: function() {
            return e;
        }
    }), Object.defineProperty(pdDOM.Interaction, "hasTouchEvents", {
        get: function() {
            return t;
        }
    }), Object.defineProperty(pdDOM.Interaction, "activeTouchCount", {
        get: function() {
            return i;
        }
    }), Object.defineProperty(pdDOM.Interaction, "activeTouchTimeStamp", {
        get: function() {
            return o;
        },
        set: function(e) {
            o = +e;
        }
    }), Object.defineProperty(pdDOM.Interaction, "activeTouchTimeOutInMS", {
        get: function() {
            return a;
        },
        set: function(e) {
            a = Math.max(500, +e);
        }
    }), Object.defineProperty(pdDOM.Interaction, "activeTouchElement", {
        get: function() {
            return r;
        }
    }), pdDOM.InteractionEvent = function(e) {
        this.event = e, this.isTouchEvent = !1, this.touchCount = i, this.timeStamp = e.timeStamp, 
        this.button = e.button, this.ctrlKey = e.ctrlKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, 
        this.altKey = e.altKey, this.scale = 1, this.rotation = 0, this.dragX = 0, this.dragY = 0, 
        this.x = pd.toNumber(e.pageX, 0), this.y = pd.toNumber(e.pageY, 0), this.primaryX = this.x, 
        this.primaryY = this.y;
    }, pdDOM.InteractionEvent.prototype.hasMoved = O, pdDOM.InteractionEvent.prototype.getDragStartPosX = function() {
        return m.x;
    }, pdDOM.InteractionEvent.prototype.getDragStartPosY = function() {
        return m.x;
    }, pdDOM.InteractionEvent.prototype.getDragDistanceX = function() {
        return f.x;
    }, pdDOM.InteractionEvent.prototype.getDragDistanceY = function() {
        return f.y;
    }, pdDOM.InteractionEvent.prototype.preventDefault = function() {
        this.event && this.event.preventDefault && this.event.preventDefault();
    }, pdDOM.InteractionEvent.prototype.stopPropagation = function() {
        this.event && this.event.stopPropagation && this.event.stopPropagation();
    }, pdDOM.InteractionEvent.prototype.stopImmediatePropagation = function() {
        this.event && this.event.stopImmediatePropagation && this.event.stopImmediatePropagation();
    }, pdDOM.Interaction.createEvent = function(r, a) {
        var g = !1, b = !1, P = !1, M = n, y = 0, T = 0, O = new pdDOM.InteractionEvent(r);
        if (r.type && r.type.length > 0) if (e && "p" == r.type.charAt(0)) {
            if (g = r.pointerType && "touch" == r.pointerType) {
                var D = 0;
                for (var w in O.isTouchEvent = !0, d[r.pointerId] && (M = d[r.pointerId]), d) {
                    if (d.hasOwnProperty(w)) (U = d[w]) && (y += U.pageX, T += U.pageY, D++);
                }
                if (D > 0) if (P = !0, y /= D, T /= D, p >= 0) if (I = d[p]) if (O.primaryX = I.pageX, 
                O.primaryY = I.pageY, D > 1 && h > 0) if (E = d[h]) {
                    var S = E.pageX - I.pageX, A = E.pageY - I.pageY;
                    u = Math.sqrt(S * S + A * A), O.rotation = -Math.atan2(A, S) * pd.Const.RAD2DEG, 
                    b = !0;
                }
            }
        } else if (t && "t" == r.type.charAt(0)) {
            O.isTouchEvent = !0, g = !0;
            var k = r.touches || r.targetTouches;
            if ((!k || k.length < 1) && (k = r.changedTouches || r.originalEvent.changedTouches, 
            i < 1 && (i = k.length)), i = k ? k.length : 0, O.touchCount = i, O.button = i - 1, 
            k && k.length > 0) {
                for (var U, I, E, K = -1, C = -1, x = (D = 0, 0), N = k.length; x < N; ++x) U = k[x], 
                p === U.identifier && (K = x), h === U.identifier && (C = x), y += U.pageX, T += U.pageY, 
                D++;
                if (D > 0) if (P = !0, y /= D, T /= D, O.button < 0 && (O.button = k.length - 1), 
                K >= 0) if (I = k[K]) if (O.primaryX = I.pageX, O.primaryY = I.pageY, C >= 0) if (E = k[C]) {
                    S = E.pageX - I.pageX, A = E.pageY - I.pageY;
                    u = Math.sqrt(S * S + A * A), O.rotation = -Math.atan2(A, S) * pd.Const.RAD2DEG, 
                    b = !0;
                }
                U = k[Math.max(0, K)], O.x = U.pageX, O.y = U.pageY;
            }
        }
        if (a && a.getBoundingClientRect) {
            var F = 1 / pdDOM.pageScale, R = a.getBoundingClientRect();
            R.left && (y -= R.left * F, O.primaryX -= R.left * F, O.x -= R.left * F), R.top && (T -= R.top * F, 
            O.primaryY -= R.top * F, O.y -= R.top * F);
        }
        switch (r.type.toLowerCase()) {
          case "pointerdown":
            if (!g) {
                m.x = O.x, m.y = O.y, f.x = 0, f.y = 0, v.x = 0, v.y = 0;
                break;
            }
            O.button = i;

          case "mousedown":
          case "touchstart":
            v.x = 0, v.y = 0, f.x = 0, f.y = 0, m.x = O.x, m.y = O.y, b && (l = u, c = O.rotation, 
            O.rotation = 0);
            break;

          case "pointermove":
            g ? O.button = i - 1 : O.button < 0 && r.button < 0 && (r.buttons > 0 ? 1 & r.buttons ? O.button = 0 : 4 & r.buttons ? O.button = 1 : 2 & r.buttons ? O.button = 2 : 8 & r.buttons ? O.button = 3 : 16 & r.buttons ? O.button = 4 : 32 & r.buttons && (O.button = 5) : M && (O.button = M.button));

          case "touchmove":
          case "mousemove":
            if (g) {
                if (o = r.timeStamp, O.button >= 0 && P ? (O.dragX = y - s.x, O.dragY = T - s.y) : M && (O.dragX = O.x - M.x, 
                O.dragY = O.y - M.y), O.button > 0 && b) {
                    var V = O.rotation;
                    O.scale = l > 0 ? u / l : 1, l = u, O.rotation -= c, c = V;
                }
                r.preventDefault();
            } else M && (O.dragX = O.x - M.x, O.dragY = O.y - M.y);
            (!g || Math.abs(O.dragX) < 50 && Math.abs(O.dragY) < 50) && (v.x += Math.abs(O.dragX), 
            v.y += Math.abs(O.dragY), f.x += O.dragX, f.y += O.dragY);
            break;

          case "touchend":
          case "touchcancel":
          case "pointerup":
          case "pointercancel":
            g && O.button < 0 && (O.button = Math.max(0, i - 1));
            break;

          case "mouseup":
            O.button >= 0 && (i = 0);
            break;

          case "wheel":
          case "mousewheel":
          case "dommousescroll":
            O.delta = pd.sign(pdDOM.getScrollIncrement(r));
            break;

          case "keydown":
            O.delta = pdDOM.getKbdIncrement(r), 0 != O.delta && (O.delta = pd.sign(O.delta));
        }
        return g && P && (s.x = y, s.y = T), M && (M.x = O.x, M.y = O.y), O;
    }, pdDOM.Interaction.makeInteractive = function(a, s) {
        s = s || {}, a.style.touchAction = "none", a.classList.add("no-select", "no-touch");
        var u = 0, l = 0, c = 0, m = 0, f = 0, v = 0, P = s.dragElement || document, T = null, D = null;
        function w() {
            D = null, s.onlongpress && s.onlongpress(T);
        }
        function S(e) {
            D && (clearTimeout(D), D = null), D = setTimeout(w, b), T = e;
        }
        function A() {
            D && (clearTimeout(D), D = null);
        }
        function k(e, t) {
            setTimeout(function() {
                e(t);
            }, 25);
        }
        function U(e) {
            if (!n && s.onmove) {
                e.preventDefault();
                var t = pdDOM.Interaction.createEvent(e, a);
                s.onmove(t);
            }
        }
        function I(e) {
            var t, i = !1;
            (e.preventDefault(), e.timeStamp || (e.timeStamp = Date.now()), u = Date.now(), 
            null == r && (r = a, o = e.timeStamp, s.onmove && a.removeEventListener("pointermove", U), 
            a.addEventListener("pointermove", C), a.addEventListener("pointercancel", R), a.addEventListener("pointerup", R), 
            i = !0), e.pointerType && "touch" == e.pointerType ? (d[e.pointerId] = M(e), p < 0 && (p = +e.pointerId), 
            p != e.pointerId && (h < 0 || h == p) && (h = +e.pointerId)) : n = M(e), i) && (s.onpress && (t = pdDOM.Interaction.createEvent(e, a), 
            s.onpress(t)), s.onlongpress && S(t = t || pdDOM.Interaction.createEvent(e, a)), 
            a.setPointerCapture && a.setPointerCapture(e.pointerId));
        }
        function E(e) {
            var t;
            e.preventDefault(), e.timeStamp || (e.timeStamp = Date.now()), c = Date.now(), s.onmove && a.removeEventListener("mousemove", U), 
            P.addEventListener("mousemove", x), P.addEventListener("mouseup", V), n = M(e), 
            s.onpress && (t = pdDOM.Interaction.createEvent(e, a), s.onpress(t)), s.onlongpress && S(t = t || pdDOM.Interaction.createEvent(e, a));
        }
        function K(e) {
            var t = !1;
            s.allowDefaultOnTouch || "boolean" == typeof e.cancelable && !e.cancelable || e.preventDefault(), 
            e.timeStamp || (e.timeStamp = Date.now()), f = Date.now(), null == r && (r = a, 
            P.addEventListener("touchmove", N), P.addEventListener("touchcancel", H), P.addEventListener("touchend", H), 
            t = !0);
            var n = e.touches || e.targetTouches;
            i = n ? n.length : Math.min(10, i + 1), o = e.timeStamp;
            var u, l = e.changedTouches;
            if (l && l.length > 0) for (var c = 0, m = l.length; c < m; ++c) d[l[c].identifier] = M(l[c]);
            if (p < 0 || h < 0) {
                var v = function(e, t, n) {
                    t = pd.toNumber(t, -1), n = pd.toNumber(n, -1);
                    var r = e.touches || e.targetTouches;
                    return r && r.length > 0 && (r.length > 1 && t == (n = r[1].identifier) && (t = -1), 
                    t < 0 && (t = r[0].identifier)), [ t, n ];
                }(e, p, h);
                p = v[0], h = v[1];
            }
            t && (s.onpress && (u = pdDOM.Interaction.createEvent(e, a), s.onpress(u)), s.onlongpress && S(u = u || pdDOM.Interaction.createEvent(e, a)));
        }
        function C(e) {
            e.preventDefault();
            var t = d[e.pointerId];
            if (t && (t.pageX = e.pageX, t.pageY = e.pageY), O() && (c = 0, u = 0, D && A()), 
            s.ondrag) {
                var n = pdDOM.Interaction.createEvent(e, a);
                Math.abs(n.dragX) < 50 && Math.abs(n.dragY) < 50 && s.ondrag(n);
            }
        }
        function x(e) {
            if (e.preventDefault(), s.ondrag) {
                var t = pdDOM.Interaction.createEvent(e, a);
                s.ondrag(t);
            }
            O() && (c = 0, D && A());
        }
        function N(e) {
            if (s.allowDefaultOnTouch || "boolean" == typeof e.cancelable && !e.cancelable || e.preventDefault(), 
            O() && (f = 0, D && A()), s.ondrag) {
                var t = pdDOM.Interaction.createEvent(e, a);
                Math.abs(t.dragX) < 50 && Math.abs(t.dragY) < 50 && s.ondrag(t);
            }
        }
        function F() {
            a.removeEventListener("pointermove", C), a.removeEventListener("pointercancel", R), 
            a.removeEventListener("pointerup", R), s.onmove && a.addEventListener("pointermove", U);
        }
        function R(e) {
            var t, r = !1, i = Date.now();
            if (e.preventDefault(), e.timeStamp || (e.timeStamp = i), a.releasePointerCapture && a.releasePointerCapture(e.pointerId), 
            D && A(), t = pdDOM.Interaction.createEvent(e, a), u > 0 && i - u > b && (t.longPress = !0), 
            e.pointerType && "touch" == e.pointerType) {
                delete d[e.pointerId], p == e.pointerId ? p = h = -1 : h == e.pointerId && (h = -1);
                var o = 0;
                for (var m in d) d.hasOwnProperty(m) && o++;
                o <= 0 && (F(), r = !0);
            } else n = null, F(), y(), r = !0;
            r && (s.onrelease && s.onrelease(t), s.onlongclick && t.longPress ? k(s.onlongclick, t) : s.ondoubletap && u > 0 && u - l < g && (t.isTouchEvent || t.button > 0) && k(s.ondoubletap, t), 
            l = u, c > 0 && (c = 0), u = 0);
        }
        function V(e) {
            var t, r = Date.now();
            e.preventDefault(), e.timeStamp || (e.timeStamp = r), D && A(), t = pdDOM.Interaction.createEvent(e, a), 
            c > 0 && r - c > b && (t.longPress = !0), P.removeEventListener("mousemove", x), 
            P.removeEventListener("mouseup", V), s.onmove && a.addEventListener("mousemove", U), 
            s.onrelease && s.onrelease(t), s.onlongclick && t.longPress ? k(s.onlongclick, t) : s.ondoubletap && c > 0 && c - m < g && t.button > 0 && k(s.ondoubletap, t), 
            m = c, c = 0, n = null;
        }
        function H(e) {
            var t, n = !1, r = Date.now();
            s.allowDefaultOnTouch || "boolean" == typeof e.cancelable && !e.cancelable || e.preventDefault(), 
            e.timeStamp || (e.timeStamp = r), D && A(), t = pdDOM.Interaction.createEvent(e, a), 
            f > 0 && r - f > b && (t.longPress = !0);
            var u = e.touches || e.targetTouches;
            i = u ? u.length : 0, o = e.timeStamp;
            var l = e.changedTouches;
            if (l && l.length > 0) for (var c = 0, m = l.length; c < m; ++c) {
                var M = l[c].identifier;
                delete d[M], p == M ? p = h = -1 : h == M && (h = -1);
            }
            i <= 0 && (P.removeEventListener("touchmove", N), P.removeEventListener("touchcancel", H), 
            P.removeEventListener("touchend", H), n = !0, y()), n && (f > 0 && r - f > b && (t.longPress = !0), 
            s.onrelease && s.onrelease(t), t.longPress && s.onlongclick ? k(s.onlongclick, t) : s.ondoubletap && f > 0 && f - v < g && k(s.ondoubletap, t), 
            v = f, f = 0);
        }
        function L(e) {
            if (s.ondoubletap) {
                e.preventDefault();
                var t = pdDOM.Interaction.createEvent(e, a);
                s.ondoubletap(t);
            }
        }
        function Y(e) {
            if (s.onscroll) {
                var t = pdDOM.Interaction.createEvent(e, a);
                t.delta && (s.onscroll(t), e.preventDefault());
            }
        }
        function _(e) {
            s.onkeydown ? s.onkeydown(e) : Y(e);
        }
        function B(e) {
            s.onkeyup && s.onkeyup(e);
        }
        return e && !s.simple ? (a.addEventListener("pointerdown", I), s.onmove && a.addEventListener("pointermove", U)) : (a.addEventListener("mousedown", E), 
        s.onmove && a.addEventListener("mousemove", U), t && a.addEventListener("touchstart", K)), 
        s.ondoubletap && a.addEventListener("dblclick", L), s.onscroll && (a.addEventListener("DOMMouseScroll", Y), 
        a.addEventListener("mousewheel", Y), a.addEventListener("wheel", Y)), (s.onkeydown || s.onscroll) && a.addEventListener("keydown", _), 
        s.onkeyup && a.addEventListener("keyup", B), this.setCallback = function(e, t) {
            if (!s[e]) switch (e) {
              case "onmove":
                a.addEventListener("pointermove", U), a.addEventListener("mousemove", U);
                break;

              case "ondoubletap":
                a.addEventListener("dblclick", L);
                break;

              case "onscroll":
                a.addEventListener("DOMMouseScroll", Y), a.addEventListener("mousewheel", Y), a.addEventListener("wheel", Y), 
                s.onkeydown || a.addEventListener("keydown", _);
                break;

              case "keydown":
                s.onscroll || a.addEventListener("keydown", _);
                break;

              case "keyup":
                a.addEventListener("keyup", B);
            }
            s[e] = t;
        }, this.dispose = function() {
            e && !s.simple ? (a.removeEventListener("pointerdown", I), s.onmove && a.removeEventListener("pointermove", U)) : (a.removeEventListener("mousedown", E), 
            s.onmove && a.addEventListener("mousemove", U)), t && a.removeEventListener("touchstart", K), 
            s.ondoubletap && a.addEventListener("dblclick", L), s.onscroll && (a.removeEventListener("DOMMouseScroll", Y), 
            a.removeEventListener("mousewheel", Y), a.removeEventListener("wheel", Y)), (s.onkeydown || s.onscroll) && a.removeEventListener("keydown", _), 
            s.onkeyup && a.removeEventListener("keyup", B);
        }, this;
    };
}(), function() {
    function e(e) {
        return ko.isObservable(e) ? +e() : +e;
    }
    function t(e, t) {
        var n = ko.isObservable(e) ? e() : e;
        return pd.isNumeric(n) ? +n : t;
    }
    function n(e) {
        return ko.isObservable(e) ? e() : e;
    }
    function r(e, t, n, r, i, o, a, s, u) {
        if (t && e && o > i) {
            e.shiftKey ? a = pd.toNumber(u, 50 * a) : e.ctrlKey || e.metaKey || (a = pd.toNumber(s, 5 * a));
            var l = pd.constrainTo(parseFloat(r()) + t * a, i, o);
            r(pd.snapTo(l, t * a));
        }
    }
    ko.loadExternalTemplates = function(e) {
        var t = 'script[src][type="text/html"]:not([loaded])', n = $(t);
        ko.utils.arrayForEach(n, function(n) {
            var r = $(n);
            r.load(r.attr("src"), function() {
                this.attr("loaded", !0), $(t).length || e();
            }.bind(r));
        });
    }, ko.observableArray.fn.refresh = function(e) {
        var t = this.indexOf(e);
        t >= 0 && (this.splice(t, 1), this.splice(t, 0, e));
    }, ko.extenders.paged = function(e, t) {
        var n = ko.observable(1), r = ko.observable(pd.toInteger(t, 5)), i = ko.observable(!1), o = ko.observable(!1), a = ko.observable(1), s = ko.computed(function() {
            var t = n(), s = e().length, u = Math.max(1, r()), l = Math.max(1, Math.ceil(s / u)), c = pd.constrainTo((t - 1) * u, 0, s - u), d = pd.constrainTo(c + u, 0, s);
            return a(l), i(c < s - u), o(c > 0), t > l && n(l), e().slice(c, d);
        });
        return s.totalPages = a, s.currentPage = n, s.itemsPerPage = r, s.nextEnabled = i, 
        s.prevEnabled = o, s.next = function() {
            i() && (i(!1), n(n() + 1));
        }, s.prev = function() {
            o() && (o(!1), n(n() - 1));
        }, s;
    }, ko.extenders.fixedPrecision = function(e, t) {
        var n = ko.pureComputed({
            read: e,
            write: function(n) {
                var r = e(), i = isNaN(n) ? 0 : parseFloat(n), o = pd.roundTo(i, t);
                o !== r ? e(o) : n !== r && e.notifySubscribers(o);
            }
        }).extend({
            notify: "always"
        });
        return n(e()), n;
    }, ko.bindingHandlers.href = {
        update: function(e, t) {
            ko.bindingHandlers.attr.update(e, function() {
                return {
                    href: t()
                };
            });
        }
    }, ko.bindingHandlers.src = {
        update: function(e, t) {
            ko.bindingHandlers.attr.update(e, function() {
                return {
                    src: t()
                };
            });
        }
    }, ko.bindingHandlers.booleanValue = {
        init: function(e, t) {
            var n = t(), r = ko.computed({
                read: function() {
                    return n().toString();
                },
                write: function(e) {
                    n("true" === e);
                }
            });
            ko.applyBindingsToNode(e, {
                value: r
            });
        }
    }, ko.bindingHandlers.hidden = {
        update: function(e, t) {
            var n = ko.utils.unwrapObservable(t());
            ko.bindingHandlers.visible.update(e, function() {
                return !n;
            });
        }
    }, ko.bindingHandlers.numeric = {
        init: function(t, n, r, i, o) {
            var a = n();
            if (!ko.isWriteableObservable(a)) throw "You must pass a Knockout observable or writeable computed";
            var s = r.get("precisionMax") || 0, u = r.get("precision") || 0, l = ko.computed({
                disposeWhenNodeIsRemoved: t,
                read: function() {
                    var t = +a(), n = e(s), r = e(u);
                    return n > r ? pd.toStringWithPrecisionRange(t, r, n) : r >= 0 ? t.toFixed(r) : t.toString();
                },
                write: function(e) {
                    a(parseFloat(e));
                }
            });
            "SELECT" == t.nodeName || "INPUT" == t.nodeName ? ko.applyBindingsToNode(t, {
                value: l
            }, o) : ko.applyBindingsToNode(t, {
                text: l
            }, o);
        }
    }, ko.bindingHandlers.currencyValue = {
        init: function(e, t) {
            var n = t() || {}, r = ko.isObservable(n.value) ? n.value : ko.observable(0), i = ko.unwrap(n.symbol) || "£", o = ko.pureComputed({
                read: function() {
                    return i + parseFloat(r()).toFixed(2);
                },
                write: function(e) {
                    var t = r(), n = parseFloat(e.replace(i, ""));
                    n !== t ? r(n) : e !== t.toString() && r.valueHasMutated();
                }
            });
            ko.applyBindingsToNode(e, {
                value: o
            });
        }
    }, ko.bindingHandlers.angleValue = {
        init: function(e, t) {
            var n = t(), r = ko.pureComputed({
                read: function() {
                    return pd.toStringWithPrecisionRange(n(), 2, 9) + "°";
                },
                write: function(e) {
                    var t = n(), r = parseFloat(e);
                    r !== t ? n(r) : e !== t.toString() && n.valueHasMutated();
                }
            });
            ko.applyBindingsToNode(e, {
                value: r
            });
        }
    }, ko.bindingHandlers.angleText = {
        init: function(e, t) {
            var n = t(), r = ko.pureComputed(function() {
                var e = n();
                return isNaN(e) ? "-" : pd.toStringWithPrecisionRange(e, 2, 9) + "°";
            });
            ko.applyBindingsToNode(e, {
                text: r
            });
        }
    }, ko.bindingHandlers.timeText = {
        init: function(e, t) {
            var n = t(), r = ko.pureComputed(function() {
                return pd.DateTime.formatTime(n());
            });
            ko.applyBindingsToNode(e, {
                text: r
            });
        }
    }, ko.bindingHandlers.toFixed = {
        init: function(t, n, r) {
            var i = n(), o = r.get("precision");
            if (!ko.isObservable(i)) {
                var a = n() || {};
                i = ko.isObservable(a.value) ? a.value : ko.observable(0), o = a.precision;
            }
            null == o && (o = 2);
            var s = ko.pureComputed(function() {
                var t = Math.round(e(o));
                return (+i() || 0).toFixed(t);
            });
            ko.applyBindingsToNode(t, {
                text: s
            });
        }
    }, ko.bindingHandlers.fixedPrecision = {
        init: function(t, n, r) {
            var i = n(), o = r.get("precision");
            if (!ko.isObservable(i)) {
                var a = n() || {};
                i = ko.isObservable(a.value) ? a.value : ko.observable(0), o = a.precision;
            }
            null == o && (o = 2);
            var s = ko.pureComputed(function() {
                var t = Math.round(e(o));
                return parseFloat(+i() || 0).toFixed(t);
            });
            ko.applyBindingsToNode(t, {
                text: s
            });
        }
    }, ko.bindingHandlers.contentEditable = {
        init: function(e, t) {
            var n = t();
            ko.applyBindingsToNode(e, {
                text: n
            }), e.addEventListener("blur", function() {
                ko.isWriteableObservable(n) && n(this.textContent.trim());
            }), e.contentEditable = !0;
        }
    }, ko.bindingHandlers.clickWithoutFocus = {
        init: function(e, t, n, r, i) {
            var o = $(e);
            ko.utils.registerEventHandler(o, window.PointerEvent ? "pointerdown" : "mousedown touchstart", function(e) {
                (void 0 !== e.button && e.button <= 0 || 0 == e.which) && e.type && "touchstart" == e.type && o.click(), 
                e.preventDefault();
            }), ko.bindingHandlers.click.init(e, t, n, r, i);
        }
    }, ko.bindingHandlers.repeatButton = {
        init: function(t, n, r, i, o) {
            var a = $(t), s = r.get("interval") || 100, u = r.get("delay") || 400, l = null, c = null;
            ko.utils.registerEventHandler(t, window.PointerEvent ? "pointerdown" : "mousedown touchstart", function(t) {
                (void 0 !== t.button && t.button <= 0 || 0 == t.which) && (t.type && "touchstart" == t.type && a.click(), 
                c = setTimeout(function() {
                    l = setInterval(function() {
                        a.click();
                    }, e(s));
                }, e(u))), t.preventDefault();
            }), ko.utils.registerEventHandler(t, "mouseup mouseout touchend touchcancel touchleave pointerup pointerleave", function() {
                l && (clearInterval(l), l = null), c && (clearTimeout(c), c = null);
            }), ko.bindingHandlers.click.init(t, n, r, i, o);
        }
    }, ko.bindingHandlers.radioButton = {
        init: function(e, t, n) {
            var r, i, o = t();
            if (!ko.isWriteableObservable(o)) throw "You must pass a Knockout observable or writeable computed";
            r = (i = $(e)).hasClass("btn") ? i : $(".btn", i), o.shiftKey = !1;
            var a = n();
            r.each(function() {
                var e = $(this), t = void 0 !== a.radioValue ? a.radioValue : void 0 !== e.attr("data-value") ? e.attr("data-value") : void 0 !== e.attr("value") ? e.attr("value") : e.text();
                return e.on("click", function(n) {
                    o.shiftKey = n.shiftKey, o(ko.utils.unwrapObservable(t)), e.blur();
                }), e.blur(), ko.computed({
                    disposeWhenNodeIsRemoved: this,
                    read: function() {
                        var n = o() === ko.utils.unwrapObservable(t);
                        e.toggleClass("btn-info", n).toggleClass("active", n);
                    }
                });
            });
        }
    }, ko.bindingHandlers.checkButton = {
        init: function(e, t) {
            var n = t();
            if (!ko.isWriteableObservable(n)) throw "You must pass a Knockout observable or writeable computed";
            var r = $(e);
            function i() {
                var e = !!n();
                r.toggleClass("active", e), r.hasClass("btn") && r.toggleClass("btn-info", e);
            }
            i(), n.subscribe(i), r.on("click", function() {
                n(!r.hasClass("active")), r.blur();
            });
        }
    }, ko.bindingHandlers.radioMenuItem = {
        init: function(e, t, n) {
            var r, i, o = t();
            if (!ko.isWriteableObservable(o)) throw "You must pass a Knockout observable or writeable computed";
            r = "menuitem" == (i = $(e)).attr("role") ? i : $("a[role=menuitem]", i);
            var a = n();
            r.each(function() {
                var e = $(this), t = void 0 !== a.radioValue ? a.radioValue : void 0 !== e.attr("data-value") ? e.attr("data-value") : void 0 !== e.attr("value") ? e.attr("value") : e.text();
                return e.on("click", function() {
                    o(ko.utils.unwrapObservable(t)), e.blur();
                }), e.blur(), ko.computed({
                    disposeWhenNodeIsRemoved: this,
                    read: function() {
                        var n = o() === ko.utils.unwrapObservable(t);
                        e.toggleClass("active", n), e.find(".icon").toggleClass("icon-radio-unchecked", !n).toggleClass("icon-radio-checked", n);
                    }
                });
            });
        }
    }, ko.bindingHandlers.checkMenuItem = {
        init: function(e, t) {
            var n = t();
            if (!ko.isWriteableObservable(n)) throw "You must pass a Knockout observable or writeable computed";
            var r = $(e);
            function i() {
                var e = !!n();
                r.toggleClass("active", e), r.find(".icon").toggleClass("icon-unchecked", !e).toggleClass("icon-checked", e);
            }
            i(), n.subscribe(i), r.on("click", function() {
                n(!r.hasClass("active")), r.blur();
            });
        }
    }, ko.bindingHandlers.table = {
        init: function() {
            return {
                controlsDescendantBindings: !0
            };
        },
        update: function(e, t) {
            var n = ko.utils.unwrapObservable(t()) || [], r = pd.isArray(n) ? {
                data: n
            } : n, i = ko.utils.unwrapObservable(r.data), o = ko.utils.unwrapObservable(r.dataClass), a = ko.utils.unwrapObservable(r.header), s = ko.utils.unwrapObservable(r.headerClass), u = [], l = 0, c = 0, d = "", p = "<table>";
            if (a && a.length) {
                p += "<thead>";
                for (var h = 0; h < a.length; ++h) {
                    var m = a[h];
                    if (m && m.length) {
                        p += '<tr class="top' + h + '">';
                        for (var f = 0; f < m.length; ++f) {
                            var v = m[f];
                            p += "<th", u = [], l = 0, c = 0, pd.isObject(v) ? (v.itemClass && u.push(v.itemClass.toString()), 
                            v.colspan && (l = pd.toNumber(v.colspan)), v.rowspan && (c = pd.toNumber(v.rowspan)), 
                            d = v.value ? v.value.toString() : "") : d = v ? v.toString() : "", s && u.push(s), 
                            u.length && (p += ' class="' + u.join(" ") + '"'), l > 0 && (p += ' colspan="' + Math.round(l) + '"'), 
                            c > 0 && (p += ' rowspan="' + Math.round(c) + '"'), p += ">" + d + "</th>";
                        }
                        p += "</tr>";
                    }
                }
                p += "</thead>";
            }
            if (i && i.length) {
                p += "<tbody>", o && (o = ' class="' + o.toString() + '"'), l = 0, c = 0, u = [];
                for (h = 0; h < i.length; ++h) {
                    var g = i[h];
                    if (g && g.length) {
                        p += "<tr>";
                        for (f = 0; f < g.length; ++f) {
                            p += "<td";
                            var b = g[f];
                            d = b ? b.toString() : "", o && (p += o), p += ">" + d + "</td>";
                        }
                        p += "</tr>";
                    }
                }
                p += "</tbody>";
            }
            for (p += "</table>"; e.firstChild; ) ko.removeNode(e.firstChild);
            var P = e.ownerDocument.createElement("div");
            P.innerHTML = p;
            for (var M = P.firstChild; M.firstChild; ) e.appendChild(M.firstChild);
        }
    }, ko.bindingHandlers.editableDimension = {
        init: function(t, n, r, i, o) {
            var a = n(), s = r().numericOptions || {}, u = r.get("step") || 0, l = s.formatter || a.formatter;
            l && ko.isObservable(l) || (l = ko.pureComputed({
                read: function() {
                    return pd.Dimension.formatDimension(+a(), pd.Dimension.type, -1, !0);
                },
                write: function(e) {
                    a(pd.Dimension.parseDimension(e));
                },
                owner: this
            }));
            var c = s.incrementor || a.incrementor;
            c && "function" == typeof c || (c = function(t, n) {
                if (t && n) {
                    var r = e(u);
                    r < 1e-6 && (r = pd.Dimension.getDefaultStep());
                    var i = pd.Dimension.incrementDimension(t, n, a(), r);
                    a(i);
                }
            }), ko.utils.registerEventHandler(t, "wheel mousewheel DOMMouseScroll", function(e) {
                var t = pdDOM.getScrollIncrement(e);
                t && (c(e, t, a), e.preventDefault());
            }), ko.utils.registerEventHandler(t, "keydown", function(e) {
                if (13 == e.which) return l($(t).val()), void $(t).focus().select();
                if (c) {
                    var n = pdDOM.getKbdIncrement(e);
                    n && c(e, n, a);
                }
            }), ko.utils.registerEventHandler(t, "blur", function() {
                l($(t).val());
            });
            var d = r.get("dblclick") || null;
            d && ko.utils.registerEventHandler(t, "dblclick", function(e) {
                d(e, $(t), a);
            }), "SELECT" == t.nodeName || "INPUT" == t.nodeName ? ko.applyBindingsToNode(t, {
                value: l
            }, o) : ko.applyBindingsToNode(t, {
                text: l
            }, o);
        }
    }, ko.setValueWithoutUndo = function(e, t) {
        e && (e.undoIgnore = !0, e(t), e.undoIgnore = !1);
    }, ko.UndoRedoQueue = function() {
        var e = ko.observableArray([]), t = ko.observableArray([]), n = !1, r = !1;
        function i(e) {
            return {
                value: ko.utils.unwrapObservable(e()),
                item: e
            };
        }
        this.isWorking = function() {
            return n;
        }, this.canUndo = ko.pureComputed(function() {
            return e().length > 256 && e().shift(), e().length > 0;
        }), this.canRedo = ko.pureComputed(function() {
            return t().length > 0;
        }), this.undo = function() {
            if (e().length > 0) {
                var r, i, o = [], a = e.pop();
                n = !0;
                for (var s = 0, u = a.length; s < u; s++) i = a[s].item, r = "state" in a[s] ? a[s].state : ko.utils.unwrapObservable(i()), 
                i(a[s].value), i.onUndo && "function" == typeof i.onUndo && i.onUndo(a[s].value), 
                "state" in a[s] && (a[s].state = a[s].value), a[s].value = r, o.push(a[s]);
                o.length > 0 && t.push(o), n = !1;
            }
            return this;
        }, this.redo = function() {
            if (t().length > 0) {
                var r, i, o = [], a = t.pop();
                n = !0;
                for (var s = 0, u = a.length; s < u; s++) i = a[s].item, r = "state" in a[s] ? a[s].state : ko.utils.unwrapObservable(i()), 
                i(a[s].value), i.onUndo && "function" == typeof i.onUndo && i.onUndo(a[s].value), 
                "state" in a[s] && (a[s].state = a[s].value), a[s].value = r, o.push(a[s]);
                o.length > 0 && e.push(o), n = !1;
            }
            return this;
        }, this.reset = function() {
            return e([]), t([]), this;
        };
        var o = [];
        this.storeValues = function() {
            o.length = 0;
            for (var e = 0, t = arguments.length; e < t; e++) ko.isObservable(arguments[e]) && o.push(i(arguments[e]));
            return this;
        }, this.checkForChanges = function() {
            if (o.length > 0) {
                for (var n = [], r = o.length, i = 0; i < r; i++) o[i].value != ko.utils.unwrapObservable(o[i].item()) && n.push(o[i]);
                n.length > 0 && (e.push(n), t([])), o.length = 0;
            }
            return this;
        };
        var a = [], s = [], u = 20, l = 2500, c = -1, d = 0;
        function p() {
            if (!n && !r && !this.undoIgnore && this.undoIndex >= 0) {
                var o = new Date().getTime(), a = +this.undoIdleThreshold || l;
                this.undoIndex != c ? o - d < u && e().length > 0 ? e()[e().length - 1].push(i(this)) : (e.push([ i(this) ]), 
                t([])) : (this.undoNoCollation || o - this.undoTime > a) && (e.push([ i(this) ]), 
                t([])), c = this.undoIndex, this.undoTime = o, d = o;
            }
        }
        this.addUndoEntry = function(i, o, a) {
            if (!n && !r && ko.isObservable(i) && !i.undoIgnore) {
                var s = new Date().getTime(), l = {
                    state: a,
                    value: o,
                    item: i
                };
                s - d < u && e().length > 0 ? e()[e().length - 1].push(l) : (e.push([ l ]), t([])), 
                c = -1, this.undoTime = s, d = s;
            }
            return this;
        }, this.add = function() {
            for (var e = 0, t = arguments.length; e < t; e++) ko.isObservable(arguments[e]) && (a.push({
                item: arguments[e],
                value: ko.utils.unwrapObservable(arguments[e]())
            }), s.push(arguments[e].subscribe(p, arguments[e], "beforeChange")), arguments[e].undoIndex = a.length - 1, 
            arguments[e].undoIgnore = !1, arguments[e].undoTime = 0);
            return this;
        }, this.addPostMonitor = function() {
            for (var e = 0, t = arguments.length; e < t; e++) ko.isObservable(arguments[e]) && (a.push({
                item: arguments[e],
                value: ko.utils.unwrapObservable(arguments[e]())
            }), s.push(arguments[e].subscribe(p, arguments[e])), arguments[e].undoIndex = a.length - 1, 
            arguments[e].undoIgnore = !1, arguments[e].undoTime = 0);
            return this;
        }, this.clear = function() {
            for (var e = 0, t = s.length; e < t; e++) s.dispose();
            return s.length = 0, a.length = 0, r = !1, this;
        };
        var h = [];
        return this.pause = function() {
            if (!n && !r) {
                h.length = 0, r = !0;
                for (var e = 0, t = a.length; e < t; e++) h.push(i(a[e].item));
            }
            return this;
        }, this.resume = function() {
            if (!n) {
                if (r && h.length > 0) {
                    for (var i = [], o = 0, a = h.length; o < a; o++) h[o].value != ko.utils.unwrapObservable(h[o].item()) && i.push(h[o]);
                    i.length > 0 && (e.push(i), t([])), h.length = 0;
                }
                r = !1;
            }
            return this;
        }, this.stop = function() {
            return n = !0, this;
        }, this.start = function() {
            return n = !1, r && this.resume(), this;
        }, this;
    }, ko.undoableObservable = function(e) {
        var t = ko.observable(e), n = ko.observableArray([]), r = ko.observableArray([]), i = ko.computed({
            read: function() {
                return t();
            },
            write: function(e) {
                var i = t();
                void 0 !== i && n.push(i), t(e), r([]);
            }
        });
        return i.undoable = ko.pureComputed(function() {
            return n().length > 0;
        }), i.redoable = ko.pureComputed(function() {
            return r().length > 0;
        }), i.undo = function() {
            if (n().length > 0) {
                var e = n.pop();
                r.push(t()), t(e), i.onUndo && "function" == typeof i.onUndo && i.onUndo(e);
            }
        }, i.redo = function() {
            if (r().length > 0) {
                var e = r.pop();
                n.push(t()), t(e), i.onUndo && "function" == typeof i.onUndo && i.onUndo(e);
            }
        }, i.reset = function() {
            n([]), r([]);
        }, i.getUndoStack = function() {
            return n();
        }, i.getRedoStack = function() {
            return r();
        }, i;
    }, ko.bindingHandlers.valueSlider = {
        init: function(i, o, a) {
            var s = o();
            if (!ko.isWriteableObservable(s)) throw "You must pass a Knockout observable or writeable computed";
            var u = $(i), l = a.get("min") || 0, c = a.get("max") || 100, d = a.get("step") || .1, p = a.get("minor") || null, h = a.get("major") || null, m = a.get("enable") || !0, f = a.get("dblclick") || null, v = a.get("tapclick") || null, g = a.get("height") || "4px", b = a.get("wrap") || !1, P = e(m);
            function M() {
                var t = e(l), r = e(c), i = pd.safeDivide(parseFloat(s()) - t, r - t), o = n(g).toString();
                u.css("background-size", 1 + 99 * i + "% " + o);
            }
            var y = pd.toInteger(a.get("width"), 1);
            function T(e) {
                u.css("opacity", e ? "1.0" : "0.35"), P = !!e;
            }
            u.toggleClass("value-slider", !0), s.subscribe(M), M(), ko.isObservable(m) && (m.subscribe(T), 
            P || T(!1));
            var O = 0, D = a.get("incrementor") || s.incrementor;
            function w(n, r) {
                if (P && r) {
                    var i = e(l), o = e(c), a = e(d), m = t(p, 5 * a), f = t(h, 50 * a);
                    r(n, u, s, i, o, a, m, f), n.preventDefault();
                }
            }
            function S(e) {
                P && f && w(e, f);
            }
            D || "function" == typeof D || (D = r), pdDOM.Interaction.makeInteractive(i, {
                onpress: function(e) {
                    P && e.button >= 0 && e.button < 2 && (y = Math.max(u.width(), 1), O = parseFloat(s()));
                },
                ondrag: function(r) {
                    if (P && r.button >= 0 && r.button < 2) {
                        var i, o = r.dragX * pdDOM.pageScale, a = e(l), u = e(c), m = e(d), f = t(p, 5 * m), v = t(h, 50 * m), g = n(b), M = 0;
                        0 == r.button ? M = o / y * (u - a) : 1 == r.button && (M = .25 * pd.sign(o) * pd.interpolate(m, v, Math.min(1, (Math.abs(o) - 1) / 20)), 
                        r.metaKey = !0), O = g ? pd.wrapAt(O + M, a, u) : pd.constrainTo(O + M, a, u), i = r.shiftKey ? v : 1 == r.button || r.ctrlKey || r.metaKey ? m : f, 
                        s(pd.snapTo(O, i));
                    }
                },
                onrelease: function(e) {
                    v && P && e.button >= 0 && e.button < 2 && !e.hasMoved() && w(e, v);
                },
                onscroll: function(n) {
                    if (P && n.delta) {
                        var r = e(l), i = e(c), o = e(d), a = t(p, 5 * o), m = t(h, 50 * o);
                        D(n, n.delta, u, s, r, i, o, a, m), n.preventDefault();
                    }
                },
                ondoubletap: S,
                onlongclick: S,
                simple: !0
            });
        }
    }, ko.bindingHandlers.numericSlider = {
        init: function(e, t, n, i, o) {
            var a = $(e), s = t(), u = n().numericOptions || {};
            ko.isObservable(s) && ko.utils.registerEventHandler(e, "input change", function() {
                s(parseFloat(a.val()));
            });
            var l = u.incrementor || s.incrementor;
            return l && "function" == typeof l ? (ko.utils.registerEventHandler(e, "wheel mousewheel DOMMouseScroll", function(e) {
                var t = pdDOM.getScrollIncrement(e);
                t && (l(e, t), e.preventDefault());
            }), ko.utils.registerEventHandler(e, "keydown", function(e) {
                var t = pdDOM.getKbdIncrement(e);
                t && l(e, t);
            })) : (ko.utils.registerEventHandler(e, "wheel mousewheel DOMMouseScroll", function(e) {
                var t = pd.toNumber(a.attr("step"), .1);
                r(e, pdDOM.getScrollIncrement(e), 0, s, pd.toNumber(a.attr("min"), 0), pd.toNumber(a.attr("max"), 100), t, pd.toNumber(a.attr("minor"), 5 * t), pd.toNumber(a.attr("major"), 50 * t)), 
                e.preventDefault();
            }), ko.utils.registerEventHandler(e, "keydown", function(e) {
                var t = pd.toNumber(a.attr("step"), .1);
                r(e, pdDOM.getKbdIncrement(e), 0, s, pd.toNumber(a.attr("min"), 0), pd.toNumber(a.attr("max"), 100), t, pd.toNumber(a.attr("minor"), 5 * t), pd.toNumber(a.attr("major"), 50 * t));
            })), ko.bindingHandlers.value.init(e, t, n, i, o);
        },
        update: function(e, t, n, r, i) {
            ko.bindingHandlers.value.update(e, t, n, r, i);
        }
    }, ko.bindingHandlers.numericInput = {
        init: function(e, t, n, r, i) {
            var o = t(), a = n().numericOptions || {}, s = a.formatter || o.formatter;
            s && ko.isObservable(s) || (s = o);
            var u = a.incrementor || o.incrementor;
            return u && "function" == typeof u && ko.utils.registerEventHandler(e, "wheel mousewheel DOMMouseScroll", function(e) {
                var t = pdDOM.getScrollIncrement(e);
                t && (u(e, t, o), e.preventDefault());
            }), ko.utils.registerEventHandler(e, "keydown", function(t) {
                if (13 == t.which) return s($(e).val()), void $(e).focus().select();
                if (u) {
                    var n = pdDOM.getKbdIncrement(t);
                    n && u(t, n, o);
                }
            }), ko.utils.registerEventHandler(e, "blur", function() {
                s($(e).val());
            }), ko.bindingHandlers.value.init(e, s, n, r, i);
        }
    };
    ko.components.register("numeric-slider", {
        viewModel: function(t) {
            var r = this;
            this.min = t.min || 0, this.max = t.max || 100, this.step = t.step || 1, this.value = t.value || ko.observable(parseFloat(ko.unwrap(t.min))), 
            this.title = t.title || "No Title", this.units = t.units || "", this.suffix = t.suffix || null, 
            this.noLimits = t.noLimits || !1, t.formatter && ko.isObservable(t.formatter) ? this.formatter = t.formatter : this.value.formatter && ko.isObservable(this.value.formatter) ? this.formatter = this.value.formatter : (this.decimals = pd.isNumeric(t.decimals) ? parseInt(t.decimals, 10) : t.decimals || 2, 
            this.formatter = ko.pureComputed({
                read: function() {
                    var t, i = n(r.suffix), o = pd.toInteger(e(r.decimals), 2);
                    return t = o <= 0 ? parseInt(r.value(), 10).toString() : pd.toStringWithPrecisionRange(+r.value(), o, 9), 
                    i && (t += i), t;
                },
                write: function(t) {
                    var n = pd.parseEqn(t);
                    if (pd.toInteger(e(r.decimals), 2) <= 0 && (n = Math.round(n)), !e(r.noLimits)) {
                        var i = e(r.min), o = e(r.max);
                        n = pd.constrainTo(n, i, o);
                    }
                    r.value(n);
                },
                owner: this
            })), t.incrementor && "function" == typeof t.incrementor ? this.incrementor = t.incrementor : this.value.incrementor && "function" == typeof this.value.incrementor ? this.incrementor = this.value.incrementor : (this.largeIncrement = t.largeIncrement || 100, 
            this.smallIncrement = t.smallIncrement || 10, this.incrementor = function(t, n) {
                if (n = parseFloat(n)) {
                    var i = e(r.largeIncrement), o = e(r.smallIncrement), a = e(r.step);
                    n = t.shiftKey ? Math.abs(n) > 5 ? 10 * pd.sign(n) * i : pd.sign(n) * i : t.ctrlKey || t.metaKey ? Math.abs(n) > 5 ? pd.sign(n) * o : pd.sign(n) : Math.abs(n) > 5 ? i * pd.sign(n) : o * pd.sign(n), 
                    n *= a;
                    var s = pd.incrementBy(+r.value(), n);
                    if (!e(r.noLimits)) {
                        var u = e(r.min), l = e(r.max);
                        s = pd.constrainTo(s, u, l);
                    }
                    r.formatter(s);
                }
            }), this.incrementValue = function(e, t, n) {
                this.incrementor(n, e);
            };
        },
        template: '        <table class="numeric-slider">            <tr>                <td colspan="3">                    <h4>                        <span data-bind="html: title"></span>                        <small class=\'pull-right\' data-bind="html: units"></small>                    </h4>                </td>            </tr>            <tr>                <td>                    <div class="btn-group" role="group">                        <button type="button" class="btn btn-default btn-increment no-touch" data-bind="repeatButton: $data.incrementValue.bind($data, -10)"><span class="glyphicon glyphicon-chevron-left"></span></button>                        <button type="button" class="btn btn-default btn-increment no-touch" data-bind="repeatButton: $data.incrementValue.bind($data, -1)"><small><span class="glyphicon glyphicon-chevron-left"></span></small></button>                    </div>                </td>                <td class="pad-sides-4px">                    <input type="text" data-bind="numericInput: $data.value, numericOptions: { formatter: $data.formatter, incrementor: $data.incrementor }" class="form-control text-center text-dark" />                </td>                <td>                    <div class="btn-group" role="group">                        <button type="button" class="btn btn-default btn-increment no-touch" data-bind="repeatButton: $data.incrementValue.bind($data, 1)"><small><span class="glyphicon glyphicon-chevron-right"></span></small></button>                        <button type="button" class="btn btn-default btn-increment no-touch" data-bind="repeatButton: $data.incrementValue.bind($data, 10)"><span class="glyphicon glyphicon-chevron-right"></span></button>                    </div>                </td>            </tr>            <tr>                <td colspan="3">                    <input type="range" class="numeric" data-bind="attr: { min: $data.min, max: $data.max, step: $data.step }, numericSlider: $data.value, numericOptions: { incrementor: $data.incrementor }"/>                </td>            </tr>        </table>'
    });
}();

var pdKO = pdKO || {};

!function() {
    function e(e, t) {
        e && (e.undoIgnore = !0, e(t), e.undoIgnore = !1);
    }
    function t(e, t, n) {
        return function() {
            e.callback(t, n);
        };
    }
    function n(e, t) {
        var n = this, r = !1, i = (t = t || {}).sliderid || "#slider-edit", o = t.id || "#popover-edit", a = !0, s = null;
        function u(e, t) {
            var r = n.getTextInput()[0];
            if (r) {
                e = pd.toInteger(e, 0), t = pd.toInteger(t, e);
                var i = s.val().length;
                t > i && (t = i), e > t && (e = t), e < 0 && (e = 0), r.setSelectionRange ? r.setSelectionRange(e, t) : r.selectionStart && (r.selectionStart = e, 
                r.selectionEnd = t);
            }
        }
        this.title = ko.observable(t.title || "Edit Numeric Value"), this.min = ko.observable(pd.toNumber(t.min, 0)), 
        this.max = ko.observable(pd.toNumber(t.max, 100)), this.step = ko.observable(pd.toNumber(t.step, .1)), 
        this.major = ko.observable(pd.toNumber(t.major, 10)), this.minor = ko.observable(pd.toNumber(t.minor, 1)), 
        this.decimals = ko.observable(pd.toInteger(t.decimals, 2)), this.value = ko.observable(pd.toNumber(t.value, 0)), 
        this.value.subscribe(function() {
            a = !0;
        }), this.units = pd.UnitType.NONE, this.constrainToMin = ko.observable(pd.toBoolean(t.constrainToMin, !0)), 
        this.constrainToMax = ko.observable(pd.toBoolean(t.constrainToMax, !0)), this.action = ko.observable(t.action || null), 
        this.payload = ko.observable(t.payload || null), this.getTextInput = function() {
            return s || (s = $(i).find("input[type=text]")) && s.on("click", function() {
                s.prop("readonly", !1);
            }), s;
        }, this.selectAndFocus = function() {
            return this.getTextInput().focus().select(), n.emit("editor:focus", n.payload()), 
            n;
        }, this.openAt = function(e, t, r) {
            return pdKO.showPopoverAtPoint($(o), e, t, {
                placement: r
            }), n;
        }, this.open = function(e, t) {
            return null == e ? $(o).popoverX("show") : pdKO.showPopoverOnElement($(o), e, {
                placement: t
            }), n;
        }, this.close = function() {
            return $(o).popoverX("hide"), n;
        }, this.isPopupVisible = function() {
            return r;
        }, this.symbols = ko.observable(!1), this.calcButton = function(e) {
            var t;
            s || (s = n.getTextInput());
            var r, i = s.val(), o = s.prop("selectionStart"), l = s.prop("selectionEnd");
            switch (pd.isNumeric(e) && (e = String.fromCharCode(e)), e) {
              case "<":
                o < l ? (r = i.substring(0, o) + i.substring(l, i.length), s.val(r), u(o)) : o == l && o > 0 && o < i.length - 1 ? (r = i.substring(0, o - 1) + i.substring(l, i.length), 
                s.val(r), u(o - 1)) : a ? s.val("") : (s.val(i.substring(0, i.length - 1)), u(9999));
                break;

              case "$":
                return void n.symbols(!n.symbols());

              case "@":
                switch ((pdDOM.isMobile || pdDOM.isWindows10) && s.prop("readonly", !0), n.units) {
                  case pd.UnitType.LENGTH:
                    t = pd.Dimension.parseDimension(s.val());
                    break;

                  case pd.UnitType.TIME_HRS:
                    t = pd.DateTime.parseTime(s.val());
                    break;

                  default:
                    t = parseFloat(s.val());
                }
                isNaN(t) || (n.value(t), pdDOM.isMobile || pdDOM.isWindows10 ? u(9999) : (s.focus().select(), 
                s.focus().select()), a = !0);
                break;

              default:
                o < l ? (r = i.substring(0, o) + e + i.substring(l, i.length), s.val(r), u(o + 1)) : o == l && o > 0 && o < i.length - 1 ? (r = i.substring(0, o) + e + i.substring(l, i.length), 
                s.val(r), u(o + 1)) : a ? (s.val(e), u(9999)) : (s.val(i + e), u(9999)), a = !1;
            }
            n.symbols() && n.symbols(!1);
        }, this.handlePopoverShow = function() {
            r = !0, a = !0;
            var e = n.getTextInput();
            n.emit("editor:show", n.payload()), pdDOM.isMobile || pdDOM.isWindows10 ? (e.prop("readonly", !0), 
            u(9999)) : (setTimeout(function() {
                n.selectAndFocus();
            }, 250), e.prop("readonly", !1));
        }, this.handlePopoverHide = function() {
            r = !1, n.emit("editor:hide", n.payload()), n.action(null);
        }, pd.addSimpleEventHandling(n), this.set = function(e) {
            return pdKO.setWritableObservables(e, n), this;
        };
    }
    pdKO.setWritableObservables = function(e, t) {
        var n = 0;
        if (e && t) for (var r in e) e.hasOwnProperty(r) && ko.isWritableObservable(t[r]) && (t[r](e[r]), 
        ++n);
        return n;
    }, pdKO.SaveAsViewModel = function(e, t) {
        var n = this, r = (t = t || {}).id || "#modal-save";
        this.title = ko.observable(t.title || "Save File"), this.filename = ko.observable(t.filename || "[No Name]"), 
        this.extension = ko.observable(t.extension || ".json"), this.message = ko.observable(t.message || "Enter the filename to save your data as:"), 
        this.action = ko.observable(t.action || null), this.selectAndFocus = function() {
            return $(r).find("input[type=text]").focus().select(), this;
        }, this.open = function() {
            return $(r).modal("show"), this;
        }, this.close = function() {
            return $(r).modal("hide"), this;
        }, this.handlePopoverShow = function() {
            pdDOM.isMobile || pdDOM.isWindows10 || setTimeout(function() {
                n.selectAndFocus();
            }, 250);
        }, this.submitFile = function() {
            var e = n.filename().toString();
            if (e && e.length > 0) {
                var t = n.extension();
                if (!pd.endsWith(e, t)) return n.filename(e + t), void n.selectAndFocus();
                var r = n.action() || null;
                if (r && r(e)) return void n.close();
            }
            return n.selectAndFocus(), this;
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, n), this;
        }, t = null;
    }, pdKO.confirmExecuteScript = function() {
        var e = localStorage.getItem("allowScripts"), t = new Date(e).getTime(), n = new Date(), r = n.getTime();
        if (t < r || t > r + 864e5) {
            if (!confirm("This will execute the JavaScript commands in this file.\n\nEverything is fully sandboxed so it can't go too wrong, worst case you may need to reload the page. However you should always check scripts for any malicious content before you run them.\n\nAllow drag/drop scripts for the rest of today?")) return !1;
            n.setHours(24, 0, 0, 0), localStorage.setItem("allowScripts", n.toString());
        }
        return !0;
    }, pdKO.executeScript = function(e) {
        return !!(e && (e instanceof window.FileReader && (e = e.result), "string" == typeof e || e instanceof String || (e = e.toString()), 
        e.length && pdKO.confirmExecuteScript())) && (window.eval("(function() {\n\n" + e + "\n})();\n"), 
        !0);
    }, pdKO.importFiles = function(e, n) {
        if (n = n || {}, window.FileReader && null != e && e.length > 0 && (!n.model || !function(e, t) {
            var n = !1, r = -1, i = [], o = null, a = {}, s = new FileReader(), u = 0, l = 0, c = {
                materials: a,
                node: null
            };
            if (!t) return !1;
            function d() {
                if (l == u) r >= 0 ? (s.onload = p, o = e[r], s.readAsText(o)) : t(c.node); else if (l < u) {
                    var n = i[l];
                    switch (o = e[n.index], n.type) {
                      case "mtl":
                        s.onload = h, s.readAsText(o);
                        break;

                      case "stl":
                        s.onload = m, s.readAsText(o);
                        break;

                      case "ply":
                        s.onload = f, s.readAsText(o);
                        break;

                      case "mod":
                        s.onload = v, s.readAsText(o);
                    }
                }
                l++;
            }
            function p() {
                c.node = pd3D.parseOBJ(s, c), t(c.node);
            }
            function h() {
                var e = o.name.split("/").pop();
                a[e] = pd3D.parseMTL(s), d();
            }
            function m() {
                c.node = pd3D.parseSTL(s, c), d();
            }
            function f() {
                c.node = pd3D.parsePLY(s, c), d();
            }
            function v() {
                c.node = pd3D.parseMOD(s, c), d();
            }
            for (var g = 0, b = e.length; g < b; ++g) pd.endsWith(e[g].name, ".obj") ? (r < 0 && (r = g), 
            n = !0) : pd.endsWith(e[g].name, ".mtl") ? (i.push({
                index: g,
                type: "mtl"
            }), n = !0) : pd.endsWith(e[g].name, ".stl") ? (i.push({
                index: g,
                type: "stl"
            }), n = !0) : pd.endsWith(e[g].name, ".ply") ? (i.push({
                index: g,
                type: "ply"
            }), n = !0) : pd.endsWith(e[g].name, ".mod") && (i.push({
                index: g,
                type: "mod"
            }), n = !0);
            return !!n && (u = i.length, setTimeout(d, 50), !0);
        }(e, n.model))) {
            var r = !1, i = new FileReader(), o = e[0];
            if (pd.isArray(n.extra)) for (var a = 0, s = n.extra.length; a < s; ++a) {
                var u = n.extra[a];
                "function" != typeof u.callback || u.match && !pd.endsWith(o.name.toLowerCase(), u.match.toLowerCase()) && o.type !== u.match || (i.onload = t(u, i, o), 
                i.readAsText(o), r = !0);
            }
            r || "function" != typeof n.json || o.type && !/text|json/i.test(o.type) || !pd.endsWith(o.name, ".json") || (i.onload = function() {
                n.json(i, o);
            }, i.readAsText(o), r = !0), r || o.type && !/text|javascript/i.test(o.type) || !pd.endsWith(o.name, ".js") || pdKO.confirmExecuteScript() && (i.onload = function() {
                pdKO.executeScript(i), "function" == typeof n.script && n.script();
            }, i.readAsText(o), r = !0), r || ("function" == typeof n.error ? n.error(o) : window.alert("ERROR: File does not contain a recognisable data format."));
        }
    }, pdKO.ModelViewModel = function(e, t, n) {
        var r = this;
        this.units = ko.observable(pd.toInteger(t.units, 0)), this.units.subscribe(function(e) {
            var i = pd.Dimension.type, o = parseInt(e, 10);
            if (o == pd.DimensionType.IMPERIAL && i != pd.DimensionType.IMPERIAL || o != pd.DimensionType.IMPERIAL && i == pd.DimensionType.IMPERIAL) {
                var a = o == pd.DimensionType.IMPERIAL ? 6.35 : 5;
                r.snapGrid(pd.snapTo(r.snapGrid(), a)), r.snapStep(a);
            }
            pd.Dimension.type = t.units = o, n && (n.setModelSnap(n.preferredModelSnap), n.environment._groundMesh && n.environment.updateGroundPlane(n)), 
            r.snapGrid.valueHasMutated();
        }), this.shadowsShow = ko.observable(t.shadowsShow || !1), this.shadowsShow.subscribe(function(e) {
            t.shadowsShow = !!e, n && window.gl && (t.shadowsShow ? (n.updateBoundingBox(!0), 
            n.environment.hasOwnShadowMap || n.createShadowMap(2048, window.gl.RGB)) : n.environment.hasOwnShadowMap && n.clearShadowMap(), 
            window.gl.update());
        }), this.onShowDimensionsChange = null, this.onDimensionSizeChange = null;
        var i = new pdDOM.ThrottledUpdate(function() {
            r.onDimensionSizeChange && r.onDimensionSizeChange(r), window.gl && window.gl.update();
        }, 50);
        this.dimensionsShow = ko.observable(t.dimensionsShow || !1), this.dimensionsShow.subscribe(function(e) {
            t.dimensionsShow = !!e, r.onShowDimensionsChange && r.onShowDimensionsChange(r), 
            window.gl && window.gl.update();
        }), this.dimensionSize = ko.observable(pd.toNumber(t.dimensionSize, .65)), this.dimensionSize.subscribe(function(e) {
            t.dimensionSize = pd.constrainTo(parseFloat(e), .05, 2), t.dimensionsShow && i.trigger();
        }), this.modelSize = ko.observable(1e4), this.snapStep = ko.observable(pd.Dimension.type == pd.DimensionType.IMPERIAL ? 6.35 : 5), 
        this.snapMax = ko.computed(function() {
            return pd.snapTo(.1 * r.modelSize(), r.snapStep());
        }, this), this.snapActive = ko.observable(t.snapActive || !1), this.snapActive.subscribe(function(e) {
            t.snapActive = !!e, gl.orbitalView.snapGrid = t.snapActive ? t.snapGrid : 0;
        }), this.snapAlignBounds = ko.observable(t.snapAlignBounds || !1), this.snapAlignBounds.subscribe(function(e) {
            t.snapAlignBounds = !!e;
        }), this.snapAlignCenter = ko.observable(t.snapAlignCenter || !1), this.snapAlignCenter.subscribe(function(e) {
            t.snapAlignCenter = !!e;
        }), this.snapAlignGrid = ko.observable(t.snapAlignGrid || !1), this.snapAlignGrid.subscribe(function(e) {
            t.snapAlignGrid = !!e, r.snapActive() && t.snapAlignGrid ? (n && n.setModelSnap(t.snapGrid), 
            gl.orbitalView.snapGrid = t.snapGrid) : gl.orbitalView.snapGrid = 1;
        }), this.snapToAdjacent = ko.observable(t.snapToAdjacent || !1), this.snapToAdjacent.subscribe(function(e) {
            t.snapToAdjacent = !!e;
        }), this.snapToSelected = ko.observable(t.snapToSelected || !1), this.snapToSelected.subscribe(function(e) {
            t.snapToSelected = !!e;
        }), this.snapToAll = ko.observable(t.snapToAll || !1), this.snapToAll.subscribe(function(e) {
            t.snapToAll = !!e;
        }), this.snapGrid = ko.observable(pd.toNumber(t.snapGrid, 25)), this.snapGrid.subscribe(function(e) {
            t.snapGrid = parseFloat(e), r.snapActive() && r.snapAlignGrid() && (n && n.setModelSnap(t.snapGrid), 
            gl.orbitalView.snapGrid = t.snapGrid);
        }), this.snapGrid.incrementor = function(e, t) {
            if (e && t) {
                var n = pd.Dimension.incrementDimension(e, t, r.snapGrid(), r.snapStep());
                r.snapGrid(Math.max(0, n));
            }
        }, this.snapGrid.formatter = ko.pureComputed({
            read: function() {
                return pd.Dimension.formatDimension(+r.snapGrid(), pd.Dimension.type, -1, !0);
            },
            write: function(e) {
                r.snapGrid(pd.Dimension.parseDimension(e));
            },
            owner: this
        }), this.extentsMax = ko.computed(function() {
            return pd.snapTo(r.modelSize(), r.snapGrid());
        }, this), this.extentsMin = ko.computed(function() {
            return -r.extentsMax();
        }, this), this.set = function(e) {
            return pdKO.setWritableObservables(e, r), this;
        };
    }, pdKO.showPopoverOn = function(e) {
        var t = pd.isString(e) ? $(e) : e, n = t.attr("data-placement") || "top", r = $(t.attr("data-target"));
        r && (r.popoverX({
            $target: t,
            placement: n
        }), r.popoverX("show"));
    }, pdKO.showPopoverAtPoint = function(e, t, n, r) {
        var i = (r = r || {}).$target || $("#overlay-popover-pos");
        if (e && i.length > 0) {
            var o = r.placement || "bottom", a = t - 4, s = n - 4, u = .5 * e.width() + 5, l = e.height() + 5;
            return a < u ? o = o = "right" : a > window.innerWidth - u ? o = "left" : s > window.innerHeight - l ? o = "top" : s < l && (o = "bottom"), 
            a += pd.toNumber(r.offsetX, 0), s += pd.toNumber(r.offsetY, 0), a *= pdDOM.pageScale, 
            s *= pdDOM.pageScale, i.show().css({
                left: a + "px",
                top: s + "px"
            }), e.popoverX({
                $target: i,
                placement: o
            }), e.popoverX("show"), i != r.$target && i.hide(), !0;
        }
        return !1;
    }, pdKO.showPopoverOnElement = function(e, t, n) {
        if (e && e.length > 0 && t && t.length > 0) {
            var r = (n = n || {}).placement || "bottom", i = n.$target || $("#overlay-popover-pos");
            if (i.length > 0 && i[0] != t[0]) {
                var o = t.offset(), a = t.outerWidth(), s = t.outerHeight(), u = pd.toNumber(n.offsetX, 0), l = pd.toNumber(n.offsetY, 0);
                r.indexOf("left") >= 0 ? u += 0 : r.indexOf("right") >= 0 ? u += Math.round(a) - 8 : u += Math.round(.5 * a) - 4, 
                r.indexOf("top") >= 0 ? l += 0 : r.indexOf("bot") >= 0 ? l += Math.round(s) - 8 : l += Math.round(.5 * s) - 4;
                var c = 5, d = e.width() + c, p = e.height() + c, h = o.left + u, m = o.top + l;
                switch (pdDOM.isFirefox && (h *= pdDOM.pageScale, m *= pdDOM.pageScale), r) {
                  case "left":
                    h <= d && (u = pd.toNumber(n.offsetX, 0), u += Math.round(a) - 8, h = o.left + u, 
                    r = "right");
                    break;

                  case "right":
                    h > window.innerWidth - d && (u = pd.toNumber(n.offsetX, 0), h = o.left + u, r = "left");
                    break;

                  case "top":
                    m <= p && (l = pd.toNumber(n.offsetY, 0), l += Math.round(s) - 8, m = o.top + l, 
                    r = "bottom");
                    break;

                  case "bottom":
                    m >= window.innerHeight - p && (l = pd.toNumber(n.offsetY, 0), m = o.top + l, r = "top");
                }
                switch (r) {
                  case "left":
                  case "right":
                    m < .5 * p ? (r += " " + r + "-top", m -= Math.round(.1 * p) - 4) : m > window.innerHeight - .5 * p && (r += " " + r + "-bottom", 
                    m += Math.round(.1 * p) - 4);
                    break;

                  case "top":
                  case "bottom":
                    h < .5 * d ? (r += " " + r + "-left", h -= Math.round(.1 * d) - 4) : h > window.innerWidth - .5 * d && (r += " " + r + "-right", 
                    h += Math.round(.1 * d) - 4);
                }
                i.show().css({
                    left: h + "px",
                    top: m + "px"
                }), e.popoverX({
                    $target: i,
                    placement: r
                }), e.popoverX("show"), i != n.$target && i.hide();
            } else {
                o = t.offset(), a = t.outerWidth(), s = t.outerHeight();
                o.right = o.left + a, o.bottom = o.top + a;
                c = 5, p = e.height() + c, d = e.width() + c;
                switch (r) {
                  case "left":
                    o.left <= d && (r = "right");
                    break;

                  case "right":
                    o.right > window.innerWidth - d && (r = "left");
                    break;

                  case "top":
                    o.top <= p && (r = "bottom");
                    break;

                  case "bottom":
                    o.bottom >= window.innerHeight - p && (r = "top");
                }
                switch (r) {
                  case "left":
                  case "right":
                    o.top < .5 * p ? r += " " + r + "-top" : o.bottom > window.innerHeight - .5 * p && (r += " " + r + "-bottom");
                    break;

                  case "top":
                  case "bottom":
                    o.left < .5 * d ? r += " " + r + "-left" : o.right > window.innerWidth - .5 * d && (r += " " + r + "-right");
                }
                e.popoverX({
                    $target: t,
                    placement: r
                }), e.popoverX("show");
            }
            return !0;
        }
        return !1;
    }, pdKO.NumericEditViewModel = function(e, t) {
        var r = this;
        (t = t || {}).id = t.id || "#popover-editnum", t.sliderid = t.sliderid || "#slider-editnum", 
        t.title = t.title || "Edit Numeric Value", n.call(this, e, t), this.value.subscribe(function(e) {
            if ((e = pd.toNumber(e, 0)) < r.min()) r.value(r.min()); else if (e > r.max()) r.value(r.max()); else if (!r.value.undoIgnore) {
                var t = r.action() || null;
                t && t(e, r.payload());
            }
        }), this.value.incrementor = function(e, t) {
            if (e && t) {
                var n = r.min(), i = r.max(), o = r.step();
                if (i > n) {
                    e.shiftKey ? o = r.major() : e.ctrlKey || e.metaKey || (o = r.minor());
                    var a = pd.constrainTo(parseFloat(r.value()) + t * o, n, i);
                    r.value(pd.snapTo(a, t * o));
                }
            }
        }, this.value.formatter = ko.pureComputed({
            read: function() {
                var e = r.value(), t = pd.toInteger(r.decimals(), 2);
                return t > 0 ? pd.toStringWithPrecisionRange(e, t, 9) : parseInt(e, 10).toString();
            },
            write: function(e) {
                var t = pd.parseEqn(e);
                pd.toInteger(r.decimals(), 2) <= 0 && (t = Math.round(t));
                var n = r.min(), i = r.max();
                t = pd.constrainTo(t, n, i), r.value(t);
            },
            owner: this
        });
    }, pdKO.NumericEditViewModel.prototype = Object.create(n.prototype), pdKO.NumericEditViewModel.prototype.constructor = pdKO.NumericEditViewModel, 
    pdKO.DimensionEditViewModel = function(e, t) {
        var r = this;
        (t = t || {}).id = t.id || "#popover-editdim", t.sliderid = t.sliderid || "#slider-editdim", 
        t.title = t.title || "Edit Dimension", n.call(this, e, t), this.showAbout = ko.observable(pd.toBoolean(t.showAbout, !0)), 
        this.about = ko.observable(pd.toInteger(t.about, 1)), this.units = pd.UnitType.LENGTH, 
        this.value.subscribe(function(e) {
            if (e = pd.toNumber(e, 0), r.constrainToMin() && e < r.min()) return r.value(r.min()), 
            void r.value.valueHasMutated();
            if (r.constrainToMax() && e > r.max()) return r.value(r.max()), void r.value.valueHasMutated();
            if (!r.value.undoIgnore) {
                var t = r.action() || null;
                t && t(e, r.payload());
            }
        }), this.value.incrementor = function(e, t) {
            if (e && t) {
                var n = pd.Dimension.incrementDimension(e, t, r.value(), r.step());
                r.constrainToMin() && (n = Math.max(r.min(), n)), r.constrainToMax() && (n = Math.min(r.max(), n)), 
                r.value(n);
            }
        }, this.value.formatter = ko.pureComputed({
            read: function() {
                return pd.Dimension.formatDimension(+r.value(), pd.Dimension.type, -1, !0);
            },
            write: function(e) {
                r.value(pd.Dimension.parseDimension(e));
            },
            owner: this
        });
    }, pdKO.DimensionEditViewModel.prototype = Object.create(n.prototype), pdKO.DimensionEditViewModel.prototype.constructor = pdKO.DimensionEditViewModel, 
    pdKO.CameraViewModel = function(t, n) {
        var r = this, i = !1;
        this.viewAzimuth = ko.observable(60).extend({
            fixedPrecision: 2
        }), this.viewAzimuth.subscribe(function(e) {
            r.viewAzimuth.undoIgnore || (gl.orbitalView.cameraAzi = pd.wrapAt(e, -180, 180), 
            r.updateViewTypeFromCamera(), gl.update());
        }), this.viewAltitude = ko.observable(30).extend({
            fixedPrecision: 2
        }), this.viewAltitude.subscribe(function(e) {
            r.viewAltitude.undoIgnore || (gl.orbitalView.cameraAlt = pd.wrapAt(e, -180, 180), 
            r.updateViewTypeFromCamera(), gl.update());
        }), this.viewAngle = ko.observable(45).extend({
            fixedPrecision: 2
        }), this.viewAngle.subscribe(function(e) {
            r.viewAngle.undoIgnore || (gl.orbitalView.cameraFOV = pd.constrainTo(e, 0, 160), 
            gl.orbitalView.hasChanged = gl.PROJECTION, r.updateViewTypeFromCamera(), gl.update());
        }), this.incrementZoom = function(t, n, i) {
            (t = parseFloat(t)) && (i && (i.ctrlKey || i.metaKey ? t /= 10 : i.shiftKey && (t *= 10)), 
            gl.orbitalView.hasChanged = gl.PROJECTION, gl.orbitalView.zoom(.025 * t), e(r.viewZoom, gl.orbitalView.zoomFactor));
        }, this._setZoom = function(t) {
            t = pd.constrainTo(pd.toNumber(t, 0), -1, 1), Math.abs(t) > 1e-4 ? gl.orbitalView.zoom(t) : (gl.orbitalView.hasChanged = gl.PROJECTION, 
            gl.orbitalView.center()), e(r.viewZoom, gl.orbitalView.zoomFactor);
        }, this.setZoom = this._setZoom, this.viewZoom = ko.observable(1).extend({
            fixedPrecision: 3
        }), this.viewZoom.subscribe(function(e) {
            r.viewZoom.undoIgnore || (e = pd.constrainTo(pd.toNumber(e, 0), gl.orbitalView._zoomFactorMin, 3), 
            gl.orbitalView.setZoomFactor(e));
        }), this.handlePopoverShow = function() {
            i = !0, r.updateViewTypeFromCamera(), pd.closeTo(r.viewAzimuth(), gl.orbitalView.cameraAzi, .001) && pd.closeTo(r.viewAltitude(), gl.orbitalView.cameraAlt, .001) && pd.closeTo(r.viewAngle(), gl.orbitalView.cameraFOV, .001) || r.updateCameraOnViewChange(), 
            t.UndoManager && t.UndoManager.storeValues(r.viewAzimuth, r.viewAltitude, r.viewAngle);
        }, this.handlePopoverHide = function() {
            t.UndoManager && t.UndoManager.checkForChanges(), i = !1;
        }, this.isPopupVisible = function() {
            return i;
        }, this.updateCameraOnViewChange = function(i, o) {
            e(r.viewAzimuth, gl.orbitalView.cameraAzi), e(r.viewAltitude, gl.orbitalView.cameraAlt), 
            e(r.viewAngle, gl.orbitalView.cameraFOV), o > .99 && null != n && 5 == r.viewType() && t.Animation && t.Animation.pause(!1);
        }, this.updateViewTypeFromCamera = function() {
            if (gl.orbitalView.cameraFOV > .5) 0 != r.viewType() && r.setViewType(0, !0); else {
                var e = !1;
                null != n && (n.getSunAnglesArray(pdKO.sunPos), pd.closeTo(gl.orbitalView.cameraAlt, pdKO.sunPos[1], .1) && pd.closeTo(gl.orbitalView.cameraAzi, pd.wrapAt(90 - (pdKO.sunPos[0] + n.northOffset()), -180, 180), .1) && (e = !0)), 
                e ? r.setViewType(5, !0) : pd.closeTo(gl.orbitalView.cameraAlt, 90, .5) ? r.setViewType(2, !0) : pd.closeTo(gl.orbitalView.cameraAlt, 0, .5) ? pd.closeTo(gl.orbitalView.cameraAzi, 90, .5) || pd.closeTo(gl.orbitalView.cameraAzi, -90, .5) ? r.setViewType(3, !0) : pd.closeTo(gl.orbitalView.cameraAzi, 0, .5) || pd.closeTo(gl.orbitalView.cameraAzi, 180, .5) ? r.setViewType(4, !0) : r.setViewType(1, !0) : r.setViewType(1, !0);
            }
        }, this.setViewType = function(t, n) {
            n ? e(r.viewType, t) : r.viewType(t);
        }, this.viewType = ko.observable(0).extend({
            notify: "always"
        }), this.viewType.subscribe(function(e) {
            if (!r.viewType.undoIgnore) {
                var i = {}, o = r.viewType.shiftKey ? -90 : 130;
                switch (gl.orbitalView.orbitMode || (i.target = gl.orbitalView.defaultTarget, i.cameraDistance = gl.orbitalView.defaultDistance, 
                i.zoomFactor = 1), gl.orbitalView.orthoMode = 0, e) {
                  case -1:
                    var a = gl.orbitalView.cameraAlt > 2.5 && gl.orbitalView.cameraAlt < 87.5;
                    i.cameraAzi = a ? gl.orbitalView.cameraAzi : -45, i.cameraAlt = a ? gl.orbitalView.cameraAlt : 45, 
                    i.cameraFOV = 0;
                    break;

                  default:
                  case 0:
                    i.cameraAzi = gl.orbitalView.cameraAzi, (pd.closeTo(gl.orbitalView.cameraAlt, 45, .1) || gl.orbitalView.cameraAlt < 2.5 || gl.orbitalView.cameraAlt > 87.5) && (i.cameraAzi -= o), 
                    i.cameraAzi = pd.snapTo(i.cameraAzi + o, 90) - 45, i.cameraAlt = 30, i.cameraFOV = 45;
                    break;

                  case 1:
                    i.cameraAzi = gl.orbitalView.cameraAzi, (gl.orbitalView.cameraFOV > .5 || !pd.closeTo(gl.orbitalView.cameraAlt, 45, .1)) && (i.cameraAzi -= o), 
                    i.cameraAzi = pd.snapTo(i.cameraAzi + o, 90) - 45, i.cameraAlt = 45, i.cameraFOV = 0;
                    break;

                  case 2:
                    i.cameraAzi = gl.orbitalView.cameraAzi, (gl.orbitalView.cameraFOV > .5 || !pd.closeTo(gl.orbitalView.cameraAlt, 90, .1)) && (i.cameraAzi = -180), 
                    gl.orbitalView.orthoMode = 1, i.cameraAzi = pd.snapTo(i.cameraAzi + o, 90), i.cameraAlt = 90, 
                    i.cameraFOV = 0;
                    break;

                  case 3:
                    pd.closeTo(gl.orbitalView.cameraAlt, 0, .1) && pd.closeTo(gl.orbitalView.cameraAzi, -90, .1) ? i.cameraAzi = 90 : i.cameraAzi = -90, 
                    gl.orbitalView.orthoMode = 2, i.cameraAlt = 0, i.cameraFOV = 0;
                    break;

                  case 4:
                    pd.closeTo(gl.orbitalView.cameraAlt, 0, .1) && pd.closeTo(gl.orbitalView.cameraAzi, 0, .1) ? i.cameraAzi = 180 : i.cameraAzi = 0, 
                    gl.orbitalView.orthoMode = 2, i.cameraAlt = 0, i.cameraFOV = 0;
                    break;

                  case 5:
                    null != n && (n.getSunAnglesArray(pdKO.sunPos), i.cameraAzi = pd.wrapAt(90 - (pdKO.sunPos[0] + n.northOffset()), -180, 180), 
                    i.cameraAlt = pdKO.sunPos[1], i.cameraFOV = 0, t.Animation && t.Animation.pause(!0));
                }
                gl.orbitalView.animateTo(i, r.updateCameraOnViewChange);
            }
        }), this.set = function(e) {
            return pdKO.setWritableObservables(e, r), this;
        };
    }, pdKO.DisplayViewModel = function(e, t, n) {
        var r = this;
        this.surfaceOpacity = ko.observable(pd.toNumber(t.surfaceOpacity, .8)), this.surfaceOpacity.subscribe(function(e) {
            t.surfaceOpacity = parseFloat(e), n && (n.environment.surfaceOpacity = t.surfaceOpacity), 
            gl.update();
        }), this.outlineOpacity = ko.observable(pd.toNumber(t.outlineOpacity, .9)), this.outlineOpacity.subscribe(function(e) {
            t.outlineOpacity = parseFloat(e), n && (n.environment.outlineOpacity = t.outlineOpacity), 
            gl.update();
        }), this.surfaceShininess = ko.observable(pd.toNumber(t.surfaceShininess, 75)), 
        this.surfaceShininess.subscribe(function(e) {
            t.surfaceShininess = parseFloat(e), n && (n.environment.surfaceShininess = t.surfaceShininess), 
            gl.update();
        }), this.ambientFactor = ko.observable(pd.toNumber(t.ambientFactor, .6)), this.ambientFactor.subscribe(function(e) {
            t.ambientFactor = parseFloat(e), n && (n.environment.ambientFactor = t.ambientFactor), 
            gl.update();
        }), this.handlePopoverShow = function() {
            e.UndoManager && e.UndoManager.storeValues(r.surfaceOpacity, r.outlineOpacity, r.surfaceShininess, r.ambientFactor);
        }, this.handlePopoverHide = function() {
            e.UndoManager && e.UndoManager.checkForChanges();
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, r), this;
        };
    }, pdKO.sunPos = [ 0, 0 ], pdKO.DateTimeViewModel = function(e, t, n) {
        var r = this;
        function i(e) {
            return e.toFixed(2) + "°";
        }
        n.getSunAnglesArray(pdKO.sunPos), this.onDateTimeChange = null;
        var o = !1, a = new pdDOM.ThrottledUpdate(function() {
            r.timeOfDay.azimuthAngle && (r.timeOfDay.azimuthAngle(i(n.azimuthAngle())), r.timeOfDay.altitudeAngle(i(n.altitudeAngle()))), 
            r.onDateTimeChange && r.onDateTimeChange(r, o), o = !1;
        }, 50);
        function s(e) {
            var i = pdKO.sunPos[0], s = pdKO.sunPos[1], u = n.getSunAnglesArray(pdKO.sunPos);
            e && (t && (t.dayOfMonth = n.dayOfMonth(), t.monthOfYear = n.monthOfYear(), t.year = n.year()), 
            r.updateDawnDuskValues(), o = !0), u[0] == i && u[1] == s || a.trigger();
        }
        function u(t) {
            var n = 0, i = r.dayOfYear();
            i > t && (t += 365), pd.closeTo(i, t) || (pdDOM.getGlobalAnimationQueue().addOrReplace(function(o) {
                if ((n += 2 * o) >= 1) return r.setDayOfYear(t), e && e.Animation && e.Animation.pause(!1), 
                !0;
                var a = pd.Easing.inOutSine(n);
                return r.setDayOfYear((1 - a) * i + a * t), !1;
            }).start(), e && e.Animation && e.Animation.pause(!0));
        }
        function l(t) {
            var n = 0, i = r.timeOfDay();
            pd.closeTo(i, t) || (pdDOM.getGlobalAnimationQueue().addOrReplace(function(o) {
                if ((n += 2 * o) >= 1) return r.setTimeOfDay(t), e && e.Animation && e.Animation.pause(!1), 
                !0;
                var a = pd.Easing.inOutSine(n);
                return r.setTimeOfDay((1 - a) * i + a * t), !1;
            }).start(), e && e.Animation && e.Animation.pause(!0));
        }
        this.dayOfYear = ko.observable(n.dayOfYear()), this.dayOfYear.subscribe(function(e) {
            n.setDayOfYear(e), s(!0);
        }), this.dayOfYear.formatter = ko.pureComputed({
            read: function() {
                return n.formatAsDate(r.dayOfYear(), n.year());
            },
            write: function(e) {
                var t = Date.parse(e.toString());
                if (pd.isNumeric(t)) {
                    var i = new Date();
                    i.setTime(t);
                    var o = n.calcDayOfYearIndex(i.getDate(), i.getMonth(), i.getFullYear()), a = n.year() != i.getFullYear();
                    n.year(i.getFullYear()), r.dayOfYear(o), a && s(!0);
                } else r.dayOfYear.valueHasMutated();
            },
            owner: this
        }), this.dayOfYear.incrementor = function(e, t) {
            if (t = parseFloat(t)) {
                var i = parseInt(r.dayOfYear(), 10);
                if (Math.abs(t) > 5 || e && e.shiftKey) {
                    var o = n.getDateObject(), a = o.getMonth() + (t > 0 ? 1 : -1);
                    o.setMonth(pd.wrapAt(a, 0, 12, !0)), i = n.calcDayOfYearIndex(o.getDate(), o.getMonth(), o.getFullYear());
                } else i += t > 0 ? 1 : -1;
                r.dayOfYear(pd.wrapAt(i, 0, n.isLeapYear() ? 366 : 365, !0));
            }
        }, this.setDayOfYear = function(e) {
            this.dayOfYear(Math.round(pd.wrapAt(e, 0, 365)));
        }, this.createSolarPositionObservables = function() {
            r.timeOfDay.altitudeAngle = ko.observable(i(n.altitudeAngle())), r.timeOfDay.azimuthAngle = ko.observable(i(n.azimuthAngle()));
        }, this.createTwilightObservables = function() {
            var e = n.getDuskDawnData();
            return r.dayOfYear.civilTwilight = ko.observable(n.formatAsTime(e.civilDawn) + " / " + n.formatAsTime(e.civilDusk)), 
            r.dayOfYear.nauticalTwilight = ko.observable(n.formatAsTime(e.nauticalDawn) + " / " + n.formatAsTime(e.nauticalDusk)), 
            r.dayOfYear.astronomicalTwilight = ko.observable(n.formatAsTime(e.astronomicalDawn) + " / " + n.formatAsTime(e.astronomicalDusk)), 
            r;
        }, this.createSolarNoonAndDayLengthObservables = function() {
            return r.dayOfYear.dayLength = ko.observable(n.formatAsTime(n.sunsetTime() - n.sunriseTime())), 
            r.dayOfYear.solarNoon = ko.observable(n.formatAsTime(n.solarNoon())), r;
        }, this.dayOfYear.sunriseTime = ko.observable(n.formatAsTime(n.sunriseTime())), 
        this.dayOfYear.sunsetTime = ko.observable(n.formatAsTime(n.sunsetTime())), this.updateDawnDuskValues = function() {
            var e = n.getDuskDawnData();
            return r.dayOfYear.sunriseTime(n.formatAsTime(e.sunrise)), r.dayOfYear.sunsetTime(n.formatAsTime(e.sunset)), 
            r.timeOfDay.azimuthAngle && (r.timeOfDay.azimuthAngle(i(n.azimuthAngle())), r.timeOfDay.altitudeAngle(i(n.altitudeAngle()))), 
            r.dayOfYear.solarNoon && (r.dayOfYear.solarNoon(n.formatAsTime(e.solarNoon)), r.dayOfYear.dayLength(n.formatAsTime(e.sunset - e.sunrise))), 
            r.dayOfYear.civilTwilight && (r.dayOfYear.civilTwilight(n.formatAsTime(e.civilDawn) + " / " + n.formatAsTime(e.civilDusk)), 
            r.dayOfYear.nauticalTwilight(n.formatAsTime(e.nauticalDawn) + " / " + n.formatAsTime(e.nauticalDusk)), 
            r.dayOfYear.astronomicalTwilight(n.formatAsTime(e.astronomicalDawn) + " / " + n.formatAsTime(e.astronomicalDusk))), 
            r;
        }, this.setUsefulDate = function(e) {
            switch (e) {
              case 0:
                u(n.latitude() < 0 ? n.getSolsticeDec().dayOfYear : n.getSolsticeJun().dayOfYear);
                break;

              case 1:
                u(n.latitude() < 0 ? n.getEquinoxMar().dayOfYear : n.getEquinoxSep().dayOfYear);
                break;

              case 2:
                u(n.latitude() < 0 ? n.getSolsticeJun().dayOfYear : n.getSolsticeDec().dayOfYear);
                break;

              case 3:
                u(n.latitude() < 0 ? n.getEquinoxSep().dayOfYear : n.getEquinoxMar().dayOfYear);
            }
        }, this.setNextUsefulDate = function() {
            var e = n.dayOfYear(), t = n.getEquinoxMar().dayOfYear, i = n.getSolsticeJun().dayOfYear, o = n.getEquinoxSep().dayOfYear, a = n.getSolsticeDec().dayOfYear;
            n.latitude() < 0 ? e < t ? r.setUsefulDate(1) : e < i ? r.setUsefulDate(2) : e < o ? r.setUsefulDate(3) : e < a ? r.setUsefulDate(0) : r.setUsefulDate(1) : e < t ? r.setUsefulDate(3) : e < i ? r.setUsefulDate(0) : e < o ? r.setUsefulDate(1) : e < a ? r.setUsefulDate(2) : r.setUsefulDate(3);
        }, this.timeOfDay = ko.observable(60 * n.clockTime()), this.timeOfDay.subscribe(function(e) {
            n.setTimeOfDay(e / 60), t.clockTime = n.clockTime(), s(!1);
        }), this.timeOfDay.formatter = ko.pureComputed({
            read: function() {
                return n.formatAsTime(r.timeOfDay() / 60);
            },
            write: function(e) {
                var t = pd.DateTime.parseTimeToDecimalHours(e);
                t = pd.constrainTo(pd.isNumeric(t) ? t : 0, 0, 24), r.timeOfDay(60 * t);
            },
            owner: this
        }), this.timeOfDay.incrementor = function(e, t) {
            if (t = parseFloat(t)) {
                t = e.shiftKey ? Math.abs(t) < 5 ? 30 * pd.sign(t) : Math.abs(t) < 10 ? 15 * pd.sign(t) : 180 * pd.sign(t) : e.ctrlKey || e.metaKey ? Math.abs(t) < 10 ? pd.sign(t) : 5 * pd.sign(t) : Math.abs(t) < 10 ? 5 * pd.sign(t) : 30 * pd.sign(t);
                var n = pd.incrementBy(r.timeOfDay(), t);
                r.timeOfDay(pd.wrapAt(n, 0, 1440, !0));
            }
        }, this.clockTime = ko.computed({
            read: function() {
                return r.timeOfDay() / 60;
            },
            write: function(e) {
                e = pd.toNumber(e, n.clockTime()), r.timeOfDay(60 * e);
            },
            owner: r
        }), this.setTimeOfDay = function(e) {
            this.timeOfDay(Math.round(pd.wrapAt(e, 0, 1440)));
        }, this.setUsefulTime = function(e) {
            switch (e) {
              case 0:
                l(60 * n.getDawnTime(n.twilight.ASTRONOMICAL));
                break;

              case 1:
                l(60 * n.getDawnTime(n.twilight.NAUTICAL));
                break;

              case 2:
                l(60 * n.getDawnTime(n.twilight.CIVIL));
                break;

              case 3:
                l(60 * n.getDawnTime(n.twilight.SOLAR_DISK_TOP_WITH_ATM_REFRACTION));
                break;

              case 4:
                l(720);
                break;

              case 5:
                l(60 * n.solarNoon());
                break;

              case 6:
                l(60 * n.getDuskTime(n.twilight.SOLAR_DISK_TOP_WITH_ATM_REFRACTION));
                break;

              case 7:
                l(60 * n.getDuskTime(n.twilight.CIVIL));
                break;

              case 8:
                l(60 * n.getDuskTime(n.twilight.NAUTICAL));
                break;

              case 9:
                l(60 * n.getDuskTime(n.twilight.ASTRONOMICAL));
            }
        }, this.setNextUsefulTime = function() {
            var e = n.clockTime() + 1 / 120, t = n.getDuskDawnData(), i = 12, o = 4, a = t.solarNoon, s = 5;
            t.solarNoon < 12 && (i = t.solarNoon, o = 5, a = 12, s = 4), e < t.astronomicalDawn ? r.setUsefulTime(0) : e < t.nauticalDawn ? r.setUsefulTime(1) : e < t.civilDawn ? r.setUsefulTime(2) : e < t.sunrise ? r.setUsefulTime(3) : e < i ? r.setUsefulTime(o) : e < a ? r.setUsefulTime(s) : e < t.sunset ? r.setUsefulTime(6) : e < t.civilDusk ? r.setUsefulTime(7) : e < t.nauticalDusk ? r.setUsefulTime(8) : e < t.astronomicalDusk ? r.setUsefulTime(9) : r.setUsefulTime(0);
        }, this.datetime = ko.computed({
            read: function() {
                return [ r.dayOfYear(), r.timeOfDay() ];
            },
            write: function(e) {
                2 == e.length && (r.dayOfYear(parseInt(e[0], 10)), r.timeOfDay(parseFloat(e[1])));
            },
            owner: r
        }), this.handlePopoverShow = function() {
            e.UndoManager && (r.datetime.undoIgnore = !0, e.UndoManager.storeValues(r.dayOfYear, r.timeOfDay));
        }, this.handlePopoverHide = function() {
            e.UndoManager && (r.datetime.undoIgnore = !1, e.UndoManager.checkForChanges());
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, r), this;
        };
    }, pdKO.LocationViewModel = function(e, t, n, r) {
        var i = this;
        r = pd.toNumber(r, 50), this.onLocationChange = null, this.onNorthOffsetChange = null;
        var o = new pdDOM.ThrottledUpdate(function() {
            n.getSunAnglesArray(pdKO.sunPos), t && (t.latitude = n.latitude(), t.longitude = n.longitude(), 
            t.timezone = n.timezone()), i.onLocationChange && i.onLocationChange(i);
        }, 50), a = null;
        function s(e) {
            if ($ && $.snackbar) {
                if (null == a) return void (e && (a = $.snackbar({
                    id: "snackbar-time-zone",
                    content: "<p><strong>WARNING: Invalid Timezone</strong><br />The selected timezone must be within ±4hrs of the current longitude,<br />where each hour equates to 15 degrees <var>(ref = longitude / 15)</var>.</p>",
                    htmlAllowed: !0,
                    style: "warning",
                    timeout: 8e3
                })));
                e && !a.hasClass("snackbar-opened") ? a.snackbar("show") : !e && a.hasClass("snackbar-opened") && a.snackbar("hide");
            }
        }
        this.latitude = ko.observable(n.latitude()), this.latitude.subscribe(function(e) {
            n.latitude(e), o.trigger();
        }), this.longitude = ko.observable(n.longitude()), this.longitude.subscribe(function(e) {
            n.longitude(e).calculate(), i.timezone(n.timezone()), o.trigger();
        }), this.timezone = ko.observable(n.timezone()), this.timezone.subscribe(function(e) {
            var t = Math.round(n.longitude() / 15);
            Math.abs(e - t) < 4.01 ? (n.timezone(e), o.trigger(), a && !i.timezone.ignore && s(!1)) : (i.timezone.ignore = !0, 
            i.timezone(n.timezone()), i.timezone.ignore = !1, s(!0));
        }), this.timezone.formatter = ko.pureComputed(function() {
            return "GMT" + (i.timezone() >= 0 ? "+" : "-") + n.formatAsTime(Math.abs(i.timezone()));
        }), this.timezone.incrementor = function(e, t) {
            if (t = parseFloat(t)) {
                t = pd.sign(t);
                for (var n, r = document.getElementById("input-timezone"), o = parseFloat(r.options[r.selectedIndex].value), a = r.selectedIndex + t; a >= 0 && a < r.length; ) {
                    if (n = parseFloat(r.options[a].value), !pd.closeTo(o, n, .1)) {
                        o = n;
                        break;
                    }
                    a += t;
                }
                i.timezone(o);
            }
        }, this.northOffset = ko.observable(n.northOffset()), r < 1e-6 ? this.northOffset.extend({
            deferred: !0
        }) : this.northOffset.extend({
            rateLimit: r
        }), this.northOffset.subscribe(function(e) {
            n.northOffset(pd.constrainTo(parseFloat(e), -180, 180)), t && (t.northOffset = n.northOffset()), 
            i.onNorthOffsetChange && i.onNorthOffsetChange(i);
        }), this.elevation = ko.observable(pd.toNumber(t ? t.elevation : null, 150)), this.elevation.subscribe(function(e) {
            t && (t.elevation = pd.constrainTo(parseFloat(e), -400, 1e4));
        }), this.elevation.formatter = ko.pureComputed({
            read: function() {
                var e = pd.Dimension.type != pd.DimensionType.METRIC_IMPERIAL ? pd.DimensionType.METRIC_SI : pd.DimensionType.METRIC_IMPERIAL;
                return pd.Dimension.formatDimension(1e3 * i.elevation(), e, 1, !0);
            },
            write: function(e) {
                var t = pd.Dimension.type != pd.DimensionType.METRIC_IMPERIAL ? pd.DimensionType.METRIC_SI : pd.DimensionType.METRIC_IMPERIAL;
                i.elevation(pd.Dimension.parseDimension(e, t) / 1e3);
            },
            owner: this
        }), this.location = ko.computed({
            read: function() {
                return [ i.latitude(), i.longitude(), parseFloat(i.timezone()) ];
            },
            write: function(e) {
                3 == e.length && (i.latitude(parseFloat(e[0])), i.longitude(parseFloat(e[1])), i.timezone(parseFloat(e[2])));
            },
            owner: i
        }), this.handlePopoverShow = function() {
            e.UndoManager && (i.location.undoIgnore = !0, e.UndoManager.storeValues(i.latitude, i.longitude, i.timezone, i.northOffset, i.elevation));
        }, this.handlePopoverHide = function() {
            e.UndoManager && (i.location.undoIgnore = !1, e.UndoManager.checkForChanges());
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, i), this;
        };
    }, pdKO.AnimationViewModel = function(e, t, n) {
        var r = this;
        this.pause = ko.observable(!1), this.playing = ko.observable(!1), this.animateTime = ko.observable(t.animateTime || !1), 
        this.animateDate = ko.observable(t.animateDate || !1), this.animateLatitude = ko.observable(t.animateLatitude || !1), 
        this.animateLongitude = ko.observable(t.animateLongitude || !1), this.daylightOnly = ko.observable(t.daylightOnly || !1), 
        this.speed = ko.observable(pd.toNumber(t.speed, 10));
        var i = 1, o = 0, a = 0;
        function s() {
            if (r.pause()) return !1;
            var t, s = !1, u = Math.max(1, parseFloat(r.speed())), c = !1;
            if (u > 10 && (u = pd.mapAndConstrainTo(u - 10, 0, 10, 10, 200)), r.animateTime()) {
                var d = +e.DateTime.timeOfDay();
                if (Math.abs(d - a) > 1.01 && (a = d), t = a += .1 * u, r.daylightOnly()) {
                    var p = 60 * n.getDawnTime(n.twilight.CIVIL);
                    t > 60 * n.getDuskTime(n.twilight.CIVIL) ? t = 1441 : t < p && (t = p);
                }
                t >= 1440 && r.animateDate() && (e.DateTime.setDayOfYear(+e.DateTime.dayOfYear() + 1), 
                o = +e.DateTime.dayOfYear(), t = a = r.daylightOnly() ? 60 * n.getDawnTime(n.twilight.CIVIL) : 0, 
                c = !0), e.DateTime.timeOfDay(pd.wrapAt(t, 0, 1440)), e.DateTime.onDateTimeChange(e.DateTime, c), 
                s = !0;
            } else if (r.animateDate()) {
                var h = +e.DateTime.dayOfYear();
                Math.abs(h - o) > 1.01 && (o = h);
                var m = Math.floor(o += .05 * u);
                m != h && (e.DateTime.setDayOfYear(m), e.DateTime.onDateTimeChange(e.DateTime, !0), 
                s = !0);
            }
            return r.animateLatitude() && ((t = pd.snapTo(n.latitude() + .01 * u * i, .01)) < -89.8 && (i = 1, 
            t = -90), t > 89.8 && (i = -1, t = 90), e.Location.latitude(t), e.Location.onLocationChange(), 
            s = !0), r.animateLongitude() && (e.Location.longitude(pd.snapTo(pd.wrapAt(n.longitude() + .01 * u, -180, 180), .01)), 
            e.Location.onLocationChange(), s = !0), s && window.gl && window.gl.update(), !r.playing() && (l(), 
            !0);
        }
        function u() {
            r.playing(!0), e.Location.location.undoIgnore = !0, e.DateTime.datetime.undoIgnore = !0, 
            e.UndoManager.storeValues(e.Location.location, e.DateTime.datetime), $("#btn-play-icon").attr("class", "icon icon-stop"), 
            $("#btn-play").toggleClass("btn-default", !1).toggleClass("btn-info", !0).toggleClass("active", !0), 
            o = +e.DateTime.dayOfYear(), a = +e.DateTime.timeOfDay(), pdDOM.getGlobalAnimationQueue().addOrReplace(s).start(), 
            r.pause(!1);
        }
        function l() {
            e.UndoManager.checkForChanges(), $("#btn-play-icon").attr("class", "icon icon-play"), 
            $("#btn-play").toggleClass("btn-default", !0).toggleClass("btn-info", !1).toggleClass("active", !1), 
            e.Location.location.undoIgnore = !1, e.DateTime.datetime.undoIgnore = !1, r.playing(!1), 
            r.pause(!1);
        }
        this.canAnimate = ko.computed(function() {
            return r.animateTime() || r.animateDate() || r.animateLatitude() || r.animateLongitude();
        }, this), this.rewind = function() {
            r.animateDate() && (e.DateTime.dayOfYear(0), n.setDayOfYear(0)), r.animateTime() && e.DateTime.timeOfDay(r.daylightOnly() ? 60 * n.getDawnTime(n.twilight.CIVIL) : 0), 
            r.animateLatitude() && e.Location.latitude(-90), r.animateLongitude() && e.Location.longitude(-180);
        }, this.play = function() {
            r.playing(!r.playing()), r.playing() ? u() : l();
        }, this.faster = function() {
            r.speed(r.speed() + 2), r.canAnimate() && !r.playing() && u();
        }, this.stop = function() {
            r.playing(!1);
        }, this.handlePopoverShow = function() {
            e.UndoManager && e.UndoManager.storeValues(r.animateTime, r.animateDate, r.animateLatitude, r.animateLongitude, r.daylightOnly, r.speed);
        }, this.handlePopoverHide = function() {
            t.animateTime = r.animateTime(), t.animateDate = r.animateDate(), t.animateLatitude = r.animateLatitude(), 
            t.animateLongitude = r.animateLongitude(), t.daylightOnly = r.daylightOnly(), t.speed = +r.speed(), 
            e.UndoManager && e.UndoManager.checkForChanges();
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, r), this;
        };
    }, pdKO.SliderViewModel = function(t, n, r, i) {
        var o = this;
        function a(e) {
            return (+e).toFixed(3);
        }
        function s(e) {
            return (+e).toFixed(1) + "°";
        }
        function u(e) {
            return r.formatAsTime(e / 60);
        }
        function l(e) {
            return r.formatAsDate(e);
        }
        function c() {
            e(t.Camera.viewZoom, gl.orbitalView.zoomFactor);
        }
        function d(e) {
            switch (e = pd.toInteger(e, 0), gl.orbitalView && (4 == e ? gl.orbitalView.on("change", c) : gl.orbitalView.off("change", c)), 
            e) {
              case 0:
                n.index = e, i.set({
                    type: i.TYPE_NUMERIC,
                    observable: t.Location.latitude,
                    format: s,
                    title: "Site\nLatitude",
                    tickMajor: 15,
                    tickMinor: 5,
                    stepMajor: 15,
                    stepMinor: 1,
                    wrap: !1,
                    min: -90,
                    max: 90,
                    step: .1
                });
                break;

              case 1:
                n.index = e, i.set({
                    type: i.TYPE_NUMERIC,
                    observable: t.Location.longitude,
                    format: s,
                    title: "Site\nLongitude",
                    tickMajor: 15,
                    tickMinor: 5,
                    stepMajor: 15,
                    stepMinor: 1,
                    wrap: n.wrap,
                    min: -180,
                    max: 180,
                    step: .1
                });
                break;

              case 2:
                n.index = e, i.set({
                    type: i.TYPE_DATE,
                    observable: t.DateTime.dayOfYear,
                    format: l,
                    title: "Day of\nthe Year",
                    year: r.year(),
                    tickMajor: 28,
                    tickMinor: 7,
                    stepMajor: 10,
                    stepMinor: 1,
                    wrap: n.wrap,
                    min: 0,
                    max: 364,
                    step: 1
                });
                break;

              case 3:
                n.index = e, i.set({
                    type: i.TYPE_TIME,
                    observable: t.DateTime.timeOfDay,
                    format: u,
                    title: "Time of\nthe Day",
                    tickMajor: 60,
                    tickMinor: 15,
                    stepMajor: 60,
                    stepMinor: 5,
                    wrap: n.wrap,
                    min: 0,
                    max: 1440,
                    step: 1
                });
                break;

              case 4:
                n.index = e, i.set({
                    type: i.TYPE_NUMERIC,
                    observable: t.Camera.viewZoom,
                    format: a,
                    title: "View\nZoom",
                    tickMajor: .25,
                    tickMinor: .05,
                    stepMajor: .05,
                    stepMinor: .01,
                    wrap: n.wrap,
                    min: 0,
                    max: 3,
                    step: .001
                });
            }
        }
        this.show = ko.observable(pd.toBoolean(n.show, !1)), this.show.subscribe(function(e) {
            n.show = !!e, i.show(n.show);
        }), this.toggle = function() {
            o.show(!o.show()), $("#btn-slider-toggle").blur();
        }, this.wrap = ko.observable(n.wrap || !1), this.wrap.subscribe(function(e) {
            n.wrap = !!e, i.wrap(n.wrap);
        }), this.detail = ko.observable(n.detail || !1), this.detail.subscribe(function(e) {
            n.detail = !!e, i.detailMode(n.detail);
        }), this.index = ko.observable(n.index || 0), this.index.subscribe(function(e) {
            d(e);
        }), this.setIndex = function(e) {
            o.index(e);
        }, this.set = function(e) {
            return pdKO.setWritableObservables(e, o), this;
        }, d(n.index);
    };
}(), Date.prototype.addDecimalHours = function(e) {
    var t = new Date();
    return t.setTime(this.getTime() + 60 * e * 60 * 1e3), t;
}, Date.prototype.isLeapYear = function() {
    var e = this.getFullYear();
    return 0 == (3 & e) && (e % 100 != 0 || e % 400 == 0);
}, Date.prototype.getDOY = function() {
    var e = this.getMonth(), t = this.getDate() - 1, n = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ][e] + t;
    return e > 1 && this.isLeapYear() && n++, n;
}, Date.prototype.setDOY = function(e) {
    var t = this.isLeapYear(this.getFullYear());
    e = pd.constrainTo(e, 0, t ? 365 : 364);
    for (var n = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], r = pd.constrainTo(Math.ceil(e / 30) + 1, 0, 11); r >= 0; r--) if (e >= n[r]) return this.setMonth(Math.floor(pd.constrainTo(r, 0, 11))), 
    void this.setDate(Math.floor(pd.constrainTo(e - n[r] + 1, 1, 31)));
    this.setMonth(0), this.setDate(1);
}, Date.prototype.getDecimalHours = function() {
    return this.getHours() + this.getMinutes() / 60;
}, (pd = pd || {}).SolarPosition = function(e) {
    var t = Math.PI / 180, n = 180 / Math.PI, r = 2 * Math.PI, i = 1e-6, o = 1 / 3600, a = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ], s = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], u = .26179938779915, l = [ 0, -.014543897651582, -.104528463267654, -.207911690817759, -.309016994374947 ], c = this, d = !0, p = !0;
    e = e || {};
    var h = isNaN(e.latitude) ? 54.15197 : e.latitude, m = isNaN(e.longitude) ? -4.48524 : e.longitude, f = isNaN(e.timezone) ? 0 : e.timezone, v = isNaN(e.northOffset) ? 0 : e.northOffset, g = 15 * f, b = g / 15, P = (m - g) / 15, M = m * t, y = h * t, T = Math.cos(y), O = Math.sin(y), D = 0, w = 1, S = 3, A = new Date().getFullYear(), k = 10, U = 90, I = 0, E = 0, K = 0, C = 0, x = 0, N = 0, F = [ 0, 0, 0, 0, 0 ], R = [ 24, 24, 24, 24, 24 ], V = !!e.interpolateDeclination || !1, H = 0, L = 0, Y = 0, _ = 0, B = 0, G = 0, q = 0, z = 0, $ = 0, W = 0, j = 0, J = 0, X = null, Q = null, Z = null, ee = null;
    function te(e, t, n) {
        return !(e > t + (n = n || i) || e < t - n);
    }
    function ne(e, t) {
        return t > 0 ? t * Math.round(e / t) : e;
    }
    function re(e, t, n) {
        return isNaN(e) ? t : e < t ? t : e > n ? n : e;
    }
    function ie(e, t, n) {
        return e < t ? e + (n - t) : e > n ? e - (n - t) : e;
    }
    function oe(e) {
        return "ERROR: '" + e + "' property is read-only.";
    }
    function ae() {
        V ? (H = c.calcJulianCenturiesByMonth(w, S, A), Y = c.calcSolarDeclination(H), $ = c.calcEquationOfTime(H), 
        B = Math.cos(Y), G = Math.sin(Y), L = c.calcJulianCenturiesByMonth(w + 1, S, A), 
        _ = c.calcSolarDeclination(L), W = c.calcEquationOfTime(L), q = Math.cos(_), z = Math.sin(_), 
        I = .5 * (H + L), E = .5 * (Y + _), K = .5 * (B + q), C = .5 * (G + z), x = .5 * ($ + W)) : (I = c.calcJulianCenturiesByMonth(w, S, A), 
        E = c.calcSolarDeclination(I), x = c.calcEquationOfTime(I), K = Math.cos(E), C = Math.sin(E)), 
        N = 12 - x - P + D;
        for (var e, t, n = O * C, r = T * K, i = 0; i < 5; ++i) (e = (t = (l[i] - n) / r) <= -1 ? 12 : t >= 1 ? 0 : Math.acos(t) / u) < 11.999 ? (F[i] = re(N - e, 0, 24), 
        R[i] = re(N + e, 0, 24)) : (F[i] = 0, R[i] = 24);
        d = !1;
    }
    function se() {
        !function(e) {
            if (V) {
                var t = e / 24, n = 1 - t;
                I = n * H + t * L, E = n * Y + t * _, K = n * B + t * q, C = n * G + t * z, x = n * $ + t * W;
            }
        }(k);
        var e = ((k - b + x) / 24 * r + M) % r - Math.PI, i = Math.acos(Math.max(-1, Math.min(1, O * C + T * K * Math.cos(e)))), o = T * Math.sin(i);
        e < -Math.PI && (e += r), Math.abs(o) > 1e-6 && (e = (e > 0 ? -1 : 1) * (Math.PI - Math.acos(Math.max(-1, Math.min(1, (O * Math.cos(i) - C) / o))))), 
        e < 0 && (e += r);
        var a = 90 - i * n;
        if (a <= 85) {
            var s = Math.tan(a * t);
            i -= (a > 5 ? 58.1 / s - .07 / (s * s * s) + 86e-6 / (s * s * s * s * s) : a > -.575 ? 1735 + a * (a * (103.4 + a * (.711 * a - 12.79)) - 518.2) : -20.774 / s) / 3600 * t;
        }
        j = ie(90 - i * n, -180, 180), J = ie(e * n, -180, 180), p = !1;
    }
    function ue() {
        d ? (ae(), se()) : p && se();
    }
    function le(e, n, r, i) {
        r *= t, i *= t;
        var o = n * Math.cos(i);
        return [ e[0] + o * Math.sin(r), e[1] + o * Math.cos(r), e[2] + n * Math.sin(i) ];
    }
    function ce(e) {
        return 0 == (3 & e) && (e % 100 != 0 || e % 400 == 0);
    }
    function de(e, t, n) {
        return t = re(t, 0, 11), (ce(n) ? a : s)[t] + e - 1;
    }
    function pe(e) {
        return (357.52911 + e * (35999.05029 - 1537e-7 * e)) * t;
    }
    function he(e) {
        var n = (280.46646 + e * (36000.76983 + 3032e-7 * e)) % 360;
        return (n < 0 ? n + 360 : n) * t;
    }
    function me(e) {
        return he(e) + (r = pe(n = e), (Math.sin(r) * (1.914602 - n * (.004817 + 14e-6 * n)) + Math.sin(r + r) * (.019993 - 101e-6 * n) + 289e-6 * Math.sin(r + r + r)) * t);
        var n, r;
    }
    function fe(e) {
        return (23 + (26 + (21.448 - (n = e) * (46.815 + n * (59e-5 - .001813 * n))) / 60) / 60) * t + .00256 * Math.cos((125.04 - 1934.136 * e) * t) * t;
        var n;
    }
    function ve(e) {
        var t, n, r, i, o, a = Math.floor(e + .5), s = e + .5 - a, u = (a < 2299161 ? a : a + 1 + (t = Math.floor((a - 1867216.25) / 36524.25)) - Math.floor(t / 4)) + 1524, l = Math.floor((u - 122.1) / 365.25), c = Math.floor(365.25 * l), d = Math.floor((u - c) / 30.6001), p = u - c - Math.floor(30.6001 * d) + s, h = d - (d < 13.5 ? 1 : 13), m = l - (h > 2.5 ? 4716 : 4715), f = Math.floor(p), v = 24 * (p - f), g = Math.floor(v), b = 60 * (v - g), P = Math.floor(b), M = Math.floor(60 * (b - P)), y = pd.DateTime.getDOY(f, h - 1, m), T = g + P / 60 + (M - (n = [ 121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.5, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 63.8, 64.3 ], 
        r = 0, o = ((i = A) - 2e3) / 100, i >= 1620 && i <= 2002 ? r = i % 2 ? (n[(i - 1620 - 1) / 2] + n[(i - 1620 + 1) / 2]) / 2 : n[(i - 1620) / 2] : i < 948 ? r = 2177 + 497 * o + 44.1 * Math.pow(o, 2) : i >= 948 && (r = 102 + 102 * o + 25.3 * Math.pow(o, 2), 
        i >= 2e3 && i <= 2100 && (r += .37 * (i - 2100))), r)) / 3600;
        return T > 24 && (T -= 24, y++, f++), T < 0 && (T += 24, y--, f--), {
            dayOfYear: y,
            timeOfDay: T,
            month: h - 1,
            day: f
        };
    }
    function ge(e, t) {
        var n = 0, r = (t - 2e3) / 1e3;
        switch (e) {
          case 0:
            n = 2451623.80984 + 365242.37404 * r + .05169 * Math.pow(r, 2) - .00411 * Math.pow(r, 3) - 57e-5 * Math.pow(r, 4);
            break;

          case 1:
            n = 2451716.56767 + 365241.62603 * r + .00325 * Math.pow(r, 2) + .00888 * Math.pow(r, 3) - 3e-4 * Math.pow(r, 4);
            break;

          case 2:
            n = 2451810.21715 + 365242.01767 * r - .11575 * Math.pow(r, 2) + .00337 * Math.pow(r, 3) + 78e-5 * Math.pow(r, 4);
            break;

          case 3:
            n = 2451900.05952 + 365242.74049 * r - .06223 * Math.pow(r, 2) - .00823 * Math.pow(r, 3) + 32e-5 * Math.pow(r, 4);
        }
        var i = (n - 2451545) / 36525, o = 35999.373 * i - 2.47, a = 1 + .0334 * pd.cosDegrees(o) + 7e-4 * pd.cosDegrees(2 * o);
        return ve(n + 1e-5 * function(e) {
            for (var t = [ 485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8 ], n = [ 324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45 ], r = [ 1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074 ], i = 0, o = 0; o < 24; ++o) i += t[o] * pd.cosDegrees(n[o] + r[o] * e);
            return i;
        }(i) / a);
    }
    return this.calculate = function() {
        return ue(), c;
    }, this.getSunAnglesArray = function(e) {
        return ue(), e ? (e[0] = J, e[1] = j) : e = [ J, j ], e;
    }, this.getSunAnglesObject = function() {
        return ue(), {
            azi: J,
            alt: j
        };
    }, this.getSunDirection = function(e) {
        ue();
        var n = J * t, r = j * t, i = Math.cos(r);
        return Array.isArray(e) || (e = []), e[0] = i * Math.sin(n), e[1] = i * Math.cos(n), 
        e[2] = Math.sin(r), e;
    }, this.getSunDirectionWithNorthOffset = function() {
        ue();
        var e = (J + v) * t, n = j * t, r = Math.cos(n);
        return [ r * Math.sin(e), r * Math.cos(e), Math.sin(n) ];
    }, this.getDateObject = function() {
        var e = A, t = re(S, 0, 11), n = w, r = k - f;
        if (r < 0) r = ie(r, 0, 24), --n < 0 && (--t < 0 && (t = 11, --e), n = (ce(e) ? a : s)[t] - 1); else if (r >= 24) {
            r = ie(r, 0, 24), ++n >= (ce(e) ? a : s)[t] && (++t > 11 && (t = 0, ++e), n = 0);
        }
        var i = re(Math.floor(r), 0, 24), o = re(Math.round(60 * (r - i)), 0, 60);
        return o > 59.5 && (i = i < 23 ? i + 1 : 0, o = 0), new Date(Date.UTC(e, t, n, i, o, 0));
    }, this.copyLocation = function(e) {
        return e instanceof pd.SolarPosition && (this.setLocation(e.latitude(), e.longitude(), e.timezone()), 
        this.northOffset(e.northOffset()), this.setDayMonthYear(e.dayOfMonth(), e.monthOfYear(), e.year())), 
        c;
    }, this.setLocation = function(e, n, r) {
        if (arguments.length < 2) throw new Error("This method requires at least latitude and longitude as arguments.");
        return e = re(parseFloat(e), -89.9, 89.9), n = ie(parseFloat(n), -180, 180), r = pd.toNumber(r, this.calcDefaultTimezone(n)), 
        te(h, e, i) && te(m, n, i) && te(f, r, o) || (d = !0), b = (g = 15 * (f = r)) / 15, 
        P = ((m = n) - g) / 15, M = m * t, y = (h = e) * t, T = Math.cos(y), O = Math.sin(y), 
        D = 0, c;
    }, this.setDateTime = function(e) {
        return e && !isNaN(e.getTime()) && (c.setDayMonthYear(e.getDate(), e.getMonth(), e.getFullYear()), 
        c.setTime(e)), c;
    }, this.setDate = function(e) {
        return e && !isNaN(e.getTime()) && c.setDayMonthYear(e.getDate(), e.getMonth(), e.getFullYear()), 
        c;
    }, this.setTime = function(e) {
        return e && !isNaN(e.getTime()) && c.setTimeOfDay(e.getHours() + e.getMinutes() / 60 + e.getSeconds() / 3600), 
        c;
    }, this.setDayOfYear = function(e, t) {
        e = re(e, 0, ce(t = t ? parseFloat(t) : A) ? 365 : 364);
        for (var n = re(Math.ceil(e / 30) + 1, 0, 11), r = ce(t) ? a : s, i = n; i >= 0; i--) if (e >= r[i]) {
            c.setDayMonthYear(e - r[i] + 1, i, t);
            break;
        }
        return c;
    }, this.setDayMonthYear = function(e, t, n) {
        return n = Math.floor(pd.constrainTo(n, -4712, 3500)), t = Math.floor(t), e = Math.floor(e), 
        w == e && S == t && A == n || (U = -1, d = !0), w = e, S = t, A = n, c;
    }, this.setTimeOfDay = function(e) {
        return e = re(e, 0, 24), te(k, e, o) || (p = !0), k = e, c;
    }, this.setDateTimeAndGetArray = function(e) {
        return e && !isNaN(e.getTime()) && (c.setDayMonthYear(e.getDate(), e.getMonth(), e.getFullYear()), 
        c.setTime(e)), c.getSunAnglesArray();
    }, this.setTimeAndGetArray = function(e) {
        return c.setTime(e).getSunAnglesArray();
    }, this.setTimeOfDayAndGetArray = function(e) {
        return c.setTimeOfDay(e).getSunAnglesArray();
    }, this.getSunPosition = function(e, t) {
        return le(e, t, J + v, j);
    }, this.getDailySunPathSegmentsAsArray = function(e, t, n) {
        var r = [ [] ], i = r[0];
        e = re(parseFloat(e), 1 / 60, 6), t = isNaN(t) ? 0 : t, n = isNaN(n) ? 24 : n, ue();
        for (var o = t; o < n; o += e) c.setTimeOfDay(o), se(), i.push([ J, j ]);
        return c.setTimeOfDay(n), se(), i.push([ J, j ]), r;
    }, this.getAnalemmaSunPathsAsArray = function(e, t, n, r) {
        var i = [];
        e = re(e, 1, 90), t = re(parseFloat(t), 0, 24), isNaN(t) && (t = 0), n = re(parseFloat(n), 0, 24), 
        (isNaN(n) || n <= t) && (n = 24), r = re(parseFloat(r), 1 / 60, 6), isNaN(r) && (n = 1);
        for (var o, a = t; a < n; a += r) i.push([]), 0;
        for (var s = 0; s <= 364; s += e) {
            this.setDayOfYear(s, A), ue(), o = 0;
            for (a = t; a < n; a += r) c.setTimeOfDay(ie(a, 0, 24)), se(), i[o].push([ J, j ]), 
            o++;
        }
        this.setDayOfYear(0, A), ue(), o = 0;
        for (a = t; a < n; a += r) c.setTimeOfDay(ie(a, 0, 24)), se(), i[o].push([ J, j ]), 
        o++;
        return i;
    }, this.getHourlySunPathAsArray = function(e, t, n) {
        var r = [], i = re(parseFloat(t), 0, 24);
        isNaN(i) && (i = 0);
        var o = re(parseFloat(n), 0, 24);
        (isNaN(o) || o <= i) && (o = 24), e = re(parseFloat(e), 1 / 60, 6), this.setTimeOfDay(i), 
        ue(), r.push([ J, j ]);
        for (var a = i = ne(i + e, e); a < o; a += e) this.setTimeOfDay(a), se(), r.push([ J, j ]);
        return this.setTimeOfDay(o), se(), r.push([ J, j ]), r;
    }, this.getHourlySunPathAsPositions3D = function(e, t, n, r, i) {
        i = i || {
            vertices: [],
            lines: []
        }, e = re(e, 1 / 60, 6);
        var o = i.vertices.length;
        this.setTimeOfDay(0), ue(), i.vertices.push(le(t, n, J, j));
        for (var a = e; a < 24; a += e) this.setTimeOfDay(a), se(), i.vertices.push(le(t, n, J, j)), 
        (r || o % 2) && i.lines.push([ o, o + 1 ]), o++;
        return this.setTimeOfDay(24), se(), i.vertices.push(le(t, n, J, j)), i.lines.push([ o, ++o ]), 
        i;
    }, this.reuseHourlySunPathAsPositions3D = function(e, t, n, r, i) {
        var o, a;
        if (!i || !i.vertices) return this.getHourlySunPathAsPositions3D(e, t, n, r, null);
        e = re(e, 1 / 60, 6), this.setTimeOfDay(0), ue(), o = i.addVertex(le(t, n, J, j));
        for (var s = e; s < 24; s += e) this.setTimeOfDay(s), se(), a = i.addVertex(le(t, n, J, j)), 
        (r || o % 2) && i.addLine(o, a), o = a;
        return (r || o % 2) && (this.setTimeOfDay(24), se(), a = i.addVertex(le(t, n, J, j)), 
        i.addLine(o, a)), i;
    }, this.getAnalemmaSunPathAsArray = function(e) {
        var t = [];
        e = re(e, 1, 90), this.setDayOfYear(0, A), ue(), t.push([ J, j ]);
        for (var n = e; n <= 364; n += e) this.setDayOfYear(n, A), ae(), se(), t.push([ J, j ]);
        return this.setDayOfYear(0, A), ae(), se(), t.push([ J, j ]), t;
    }, this.getAnalemmaSunPathAsPositions3D = function(e, t, n, r, i) {
        e = re(e, 1, 90);
        var o = (i = i || {
            vertices: [],
            lines: []
        }).vertices.length;
        this.setDayOfYear(0, A), ae(), se();
        var a = le(t, n, J, j);
        i.vertices.push(a);
        for (var s = 0; s <= 364; s += e) this.setDayOfYear(s, A), ae(), se(), i.vertices.push(le(t, n, J, j)), 
        (r || o % 2) && i.lines.push([ o, o + 1 ]), o++;
        return i.vertices.push(a), i.lines.push([ o, ++o ]), i;
    }, this.getSunriseSunsetAsObjectArray = function(e, t) {
        e = re(e, 1, 90);
        var n = ce(A) ? 365 : 364;
        t = t || [];
        for (var r = 0; r < n; r += e) this.setDayOfYear(r, A), ae(), t.push({
            dayOfYear: r,
            solarNoon: N,
            sunrise: F[1],
            sunset: R[1],
            civilDawn: F[2],
            civilDusk: R[2],
            nauticalDawn: F[3],
            nauticalDusk: R[3],
            astronomicalDawn: F[4],
            astronomicalDusk: R[4]
        });
        return this.setDayOfYear(n, A), ae(), t.push({
            dayOfYear: r,
            solarNoon: N,
            sunrise: F[1],
            sunset: R[1],
            civilDawn: F[2],
            civilDusk: R[2],
            nauticalDawn: F[3],
            nauticalDusk: R[3],
            astronomicalDawn: F[4],
            astronomicalDusk: R[4]
        }), t;
    }, this.twilight = {
        SOLAR_DISK_CENTER: 0,
        SOLAR_DISK_TOP_WITH_ATM_REFRACTION: 1,
        CIVIL: 2,
        NAUTICAL: 3,
        ASTRONOMICAL: 4
    }, this.getDuskDawnData = function() {
        return ue(), {
            solarNoon: N,
            sunrise: F[1],
            sunset: R[1],
            civilDawn: F[2],
            civilDusk: R[2],
            nauticalDawn: F[3],
            nauticalDusk: R[3],
            astronomicalDawn: F[4],
            astronomicalDusk: R[4]
        };
    }, this.getDawnTime = function(e) {
        if (e < this.twilight.SOLAR_DISK_CENTER || e > this.twilight.ASTRONOMICAL) throw "ERROR: 'stage' parameter must be between twilight.SOLAR_DISK_CENTER and twilight.ASTRONOMICAL, inclusive.";
        return ue(), F[e];
    }, this.getDuskTime = function(e) {
        if (e < this.twilight.SOLAR_DISK_CENTER || e > this.twilight.ASTRONOMICAL) throw "ERROR: 'stage' parameter must be between twilight.SOLAR_DISK_CENTER and twilight.ASTRONOMICAL, inclusive.";
        return ue(), R[e];
    }, this.latitude = function(e) {
        if (!arguments.length) return h;
        var n = re(parseFloat(e), -89.9, 89.9);
        return te(h, n, i) || (d = !0), y = (h = n) * t, T = Math.cos(y), O = Math.sin(y), 
        c;
    }, this.longitude = function(e) {
        if (!arguments.length) return m;
        var n = ie(parseFloat(e), -180, 180);
        return te(m, n, i) || (d = !0), m = n, f = this.calcDefaultTimezone(m), b = (g = 15 * f) / 15, 
        P = (m - g) / 15, M = m * t, c;
    }, this.timezone = function(e) {
        if (!arguments.length) return f;
        var t = re(parseFloat(e), -14, 14);
        return te(f, t, o) || (d = !0), b = (g = 15 * (f = t)) / 15, P = (m - g) / 15, c;
    }, this.northOffset = function(e) {
        return arguments.length ? (v = ie(parseFloat(e), -180, 180), c) : v;
    }, this.dayOfMonth = function(e) {
        if (!arguments.length) return w;
        var t = re(parseInt(e, 10), 1, 31);
        return w != t && (U = -1, d = !0), w = t, c;
    }, this.monthOfYear = function(e) {
        if (!arguments.length) return S;
        var t = re(parseInt(e, 10), 0, 11);
        return S != t && (U = -1, d = !0), S = t, c;
    }, this.year = function(e) {
        if (!arguments.length) return A;
        var t = parseInt(e, 10);
        return t = Math.floor(pd.constrainTo(t, -4712, 3500)), A != t && (Z && (Z = ge(0, t)), 
        Q && (Q = ge(1, t)), ee && (ee = ge(2, t)), X && (X = ge(3, t)), U = -1, d = !0), 
        A = t, c;
    }, this.dayOfYear = function(e) {
        return arguments.length ? (c.setDayOfYear(parseInt(e, 10), A), c) : (U < 0 && (U = de(w, S, A)), 
        U);
    }, this.clockTime = function(e) {
        return arguments.length ? (c.setTimeOfDay(ie(parseFloat(e), 0, 24)), c) : k;
    }, this.clockTimeUTC = function(e) {
        return arguments.length ? (c.setTimeOfDay(re(parseFloat(e) + f, 0, 24)), c) : k - f;
    }, this.solarTime = function(e) {
        if (ue(), !arguments.length) return k + x + P - D;
        var t = parseFloat(e) - x - P + D;
        return c.setTimeOfDay(ie(t, 0, 24)), c;
    }, this.solarTimeUTC = function(e) {
        return arguments.length ? c.solarTime(parseFloat(e) + f) : c.solarTime() - f;
    }, this.isLeapYear = function() {
        if (arguments.length) throw oe("isLeapYear");
        return ce(A);
    }, this.dateAsString = function() {
        if (arguments.length) throw oe("dateAsString");
        return this.formatAsDate(this.dayOfYear(), A);
    }, this.timeAsString = function() {
        if (arguments.length) throw oe("timeAsString");
        return this.formatAsTime(this.clockTime());
    }, this.timezoneAsString = function() {
        if (arguments.length) throw oe("timeAsString");
        var e = this.timezone();
        return e >= 0 ? "+" + this.formatAsDuration(e) : this.formatAsDuration(e);
    }, this.solarNoon = function() {
        if (arguments.length) throw oe("solarNoon");
        return ue(), N;
    }, this.timezoneCorrection = function() {
        if (arguments.length) throw oe("timezoneCorrection");
        return P - D;
    }, this.sunriseTime = function() {
        if (arguments.length) throw oe("sunriseTime");
        return ue(), F[this.twilight.SOLAR_DISK_TOP_WITH_ATM_REFRACTION];
    }, this.sunsetTime = function() {
        if (arguments.length) throw oe("sunsetTime");
        return ue(), R[this.twilight.SOLAR_DISK_TOP_WITH_ATM_REFRACTION];
    }, this.azimuthAngle = function() {
        if (arguments.length) throw oe("azimuthAngle");
        return ue(), J;
    }, this.altitudeAngle = function() {
        if (arguments.length) throw oe("altitudeAngle");
        return ue(), j;
    }, this.declinationAngle = function() {
        if (arguments.length) throw oe("declinationAngle");
        return ue(), E * n;
    }, this.hourAngle = function() {
        if (arguments.length) throw oe("hourAngle");
        return (12 - c.solarTime()) / 24 * 360;
    }, this.hourAngleSolarUTC = function() {
        if (arguments.length) throw oe("hourAngleWithTimeZoneOffset");
        return (12 - (k + x - f)) / 24 * 360;
    }, this.eqnOfTime = function() {
        if (arguments.length) throw oe("eqnOfTime");
        return x;
    }, this.calcDefaultTimezone = function(e) {
        return ne(e, 15) / 15;
    }, this.calcDayOfYearIndex = function(e, t, n) {
        return de(e, t, n);
    }, this.formatAsTime = function(e, t) {
        var n = pd.sign(e);
        if (e = ie(e, 0, 24), t) {
            var r = 3600 * Math.abs(e), i = re(Math.floor(e), 0, 24), o = re(Math.floor(60 * (e - i)), 0, 60), a = re(Math.round(r - (3600 * i + 60 * o)), 0, 60);
            return a > 59.5 && (o = o < 59 ? o + 1 : 0, a = 0), o > 59.5 && (i = i < 23 ? i + 1 : 0, 
            o = 0), i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), 
            n < 0 ? "-" + i + ":" + o + ":" + a : i + ":" + o + ":" + a;
        }
        i = Math.floor(e);
        return (o = re(Math.round(60 * (e - i)), 0, 60)) > 59.5 && (i = i < 23 ? i + 1 : 0, 
        o = 0), i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), n < 0 ? "-" + i + ":" + o : i + ":" + o;
    }, this.formatAsDuration = function(e, t) {
        var n = pd.sign(e);
        if (e = Math.abs(e), t) {
            var r = Math.floor(e), i = 3600 * Math.abs(e), o = re(Math.floor(60 * (e - r)), 0, 60), a = re(Math.round(i - (3600 * r + 60 * o)), 0, 60);
            return a > 59.5 && (o = o < 59 ? o + 1 : 0, a = 0), o > 59.5 && (r = r < 23 ? r + 1 : 0, 
            o = 0), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), 
            (n < 0 ? "-" : "") + r + ":" + o + ":" + a;
        }
        r = Math.floor(e);
        return (o = re(Math.round(60 * (e - r)), 0, 60)) > 59.5 && (r = r < 23 ? r + 1 : 0, 
        o = 0), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), n < 0 ? "-" + r + ":" + o : r + ":" + o;
    }, this.formatAsTimezone = function(e) {
        return (e = pd.toNumber(e, this.timezone())) >= 0 ? "+" + this.formatAsDuration(e) : this.formatAsDuration(e);
    }, this.formatAsDate = function(e, t) {
        var n = t || A;
        e = re(e, 0, ce(n) ? 366 : 365);
        for (var r = re(Math.ceil(e / 30) + 1, 0, 11), i = ce(n) ? a : s, o = r; o >= 0; o--) if (e >= i[o]) {
            var u = Math.floor(re(o, 0, 11)), l = Math.floor(re(e - i[o] + 1, 1, 31));
            return l < 10 && (l = "0" + l), l + " " + [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ][u] + (t ? " " + t : "");
        }
        return "";
    }, this.calcJulianCenturies = function(e, t) {
        var n = Math.floor(--t / 100), r = 2 - n + Math.floor(n / 4);
        return (Math.floor(365.25 * (t + 4716)) + e + r - 1524.5 - 2451545) / 36525;
    }, this.calcJulianCenturiesByMonth = function(e, t, n) {
        ++t <= 2 && (t += 12, n -= 1);
        var r = Math.floor(--n / 100), i = 2 - r + Math.floor(r / 4);
        return (Math.floor(365.25 * (n + 4716)) + Math.floor(30.6001 * (t + 1)) + e + i - 1524.5 - 2451545) / 36525;
    }, this.calcSolarDeclination = function(e) {
        return Math.asin(Math.sin(fe(e)) * Math.sin(me(n = e) - (.00569 + .00478 * Math.sin((125.04 - 1934.136 * n) * t)) * t));
        var n;
    }, this.calcEquationOfTime = function(e) {
        var t, n = .016708634 - (t = e) * (42037e-9 + 1.267e-7 * t), r = pe(e), i = he(e), o = Math.tan(fe(e) / 2);
        o *= o;
        var a = Math.sin(r);
        return 4 * (o * Math.sin(2 * i) - 2 * n * a + 4 * n * o * a * Math.cos(2 * i) - .5 * o * o * Math.sin(4 * i) - 1.25 * n * n * Math.sin(2 * r));
    }, this.getEquinoxMar = function() {
        return null == Z && (Z = ge(0, A)), Z;
    }, this.getSolsticeJun = function() {
        return null == Q && (Q = ge(1, A)), Q;
    }, this.getEquinoxSep = function() {
        return null == ee && (ee = ge(2, A)), ee;
    }, this.getSolsticeDec = function() {
        return null == X && (X = ge(3, A)), X;
    }, this;
};