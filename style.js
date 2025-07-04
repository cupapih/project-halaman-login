if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    var n = []
      , i = t.document
      , o = n.slice
      , r = n.concat
      , a = n.push
      , s = n.indexOf
      , l = {}
      , c = l.toString
      , u = l.hasOwnProperty
      , p = {}
      , d = "2.2.4"
      , h = function(t, e) {
        return new h.fn.init(t,e)
    }
      , f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , g = /^-ms-/
      , v = /-([\da-z])/gi
      , m = function(t, e) {
        return e.toUpperCase()
    };
    function y(t) {
        var e = !!t && "length"in t && t.length
          , n = h.type(t);
        return "function" !== n && !h.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    h.fn = h.prototype = {
        jquery: d,
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this)
        },
        pushStack: function(t) {
            var e = h.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return h.each(this, t)
        },
        map: function(t) {
            return this.pushStack(h.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    h.extend = h.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = a[e],
                    a !== (i = t[e]) && (c && i && (h.isPlainObject(i) || (o = h.isArray(i))) ? (o ? (o = !1,
                    r = n && h.isArray(n) ? n : []) : r = n && h.isPlainObject(n) ? n : {},
                    a[e] = h.extend(c, r, i)) : void 0 !== i && (a[e] = i));
        return a
    }
    ,
    h.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === h.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !h.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== h.type(t) || t.nodeType || h.isWindow(t))
                return !1;
            if (t.constructor && !u.call(t, "constructor") && !u.call(t.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (e in t)
                ;
            return void 0 === e || u.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = h.trim(t)) && (1 === t.indexOf("use strict") ? ((e = i.createElement("script")).text = t,
            i.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(g, "ms-").replace(v, m)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, i = 0;
            if (y(t))
                for (n = t.length; n > i && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(f, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (y(Object(t)) ? h.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : s.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; i++)
                t[o++] = e[i];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, a = !n; r > o; o++)
                !e(t[o], o) !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, o, a = 0, s = [];
            if (y(t))
                for (i = t.length; i > a; a++)
                    null != (o = e(t[a], a, n)) && s.push(o);
            else
                for (a in t)
                    null != (o = e(t[a], a, n)) && s.push(o);
            return r.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e],
            e = t,
            t = n),
            h.isFunction(t) ? (i = o.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, i.concat(o.call(arguments)))
            }
            ).guid = t.guid = t.guid || h.guid++,
            r) : void 0
        },
        now: Date.now,
        support: p
    }),
    "function" == typeof Symbol && (h.fn[Symbol.iterator] = n[Symbol.iterator]),
    h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function(t) {
        var e, n, i, o, r, a, s, l, c, u, p, d, h, f, g, v, m, y, b, x = "sizzle" + 1 * new Date, w = t.document, C = 0, T = 0, k = rt(), $ = rt(), S = rt(), E = function(t, e) {
            return t === e && (p = !0),
            0
        }, _ = 1 << 31, A = {}.hasOwnProperty, D = [], N = D.pop, j = D.push, L = D.push, O = D.slice, I = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = "\\[" + R + "*(" + P + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + R + "*\\]", q = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", M = new RegExp(R + "+","g"), W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), B = new RegExp("^" + R + "*," + R + "*"), z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]","g"), V = new RegExp(q), Q = new RegExp("^" + P + "$"), X = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + F + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, tt = /'|\\/g, et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), nt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, it = function() {
            d()
        };
        try {
            L.apply(D = O.call(w.childNodes), w.childNodes),
            D[w.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: D.length ? function(t, e) {
                    j.apply(t, O.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function ot(t, e, i, o) {
            var r, s, c, u, p, f, m, y, C = e && e.ownerDocument, T = e ? e.nodeType : 9;
            if (i = i || [],
            "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T)
                return i;
            if (!o && ((e ? e.ownerDocument || e : w) !== h && d(e),
            e = e || h,
            g)) {
                if (11 !== T && (f = K.exec(t)))
                    if (r = f[1]) {
                        if (9 === T) {
                            if (!(c = e.getElementById(r)))
                                return i;
                            if (c.id === r)
                                return i.push(c),
                                i
                        } else if (C && (c = C.getElementById(r)) && b(e, c) && c.id === r)
                            return i.push(c),
                            i
                    } else {
                        if (f[2])
                            return L.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName)
                            return L.apply(i, e.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !S[t + " "] && (!v || !v.test(t))) {
                    if (1 !== T)
                        C = e,
                        y = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(tt, "\\$&") : e.setAttribute("id", u = x),
                        s = (m = a(t)).length,
                        p = Q.test(u) ? "#" + u : "[id='" + u + "']"; s--; )
                            m[s] = p + " " + gt(m[s]);
                        y = m.join(","),
                        C = Z.test(t) && ht(e.parentNode) || e
                    }
                    if (y)
                        try {
                            return L.apply(i, C.querySelectorAll(y)),
                            i
                        } catch (t) {} finally {
                            u === x && e.removeAttribute("id")
                        }
                }
            }
            return l(t.replace(W, "$1"), e, i, o)
        }
        function rt() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                e[n + " "] = o
            }
        }
        function at(t) {
            return t[x] = !0,
            t
        }
        function st(t) {
            var e = h.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function lt(t, e) {
            for (var n = t.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = e
        }
        function ct(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || _) - (~t.sourceIndex || _);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function ut(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function pt(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function dt(t) {
            return at(function(e) {
                return e = +e,
                at(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function ht(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = ot.support = {},
        r = ot.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        d = ot.setDocument = function(t) {
            var e, o, a = t ? t.ownerDocument || t : w;
            return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement,
            g = !r(h),
            (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)),
            n.attributes = st(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            n.getElementsByTagName = st(function(t) {
                return t.appendChild(h.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = J.test(h.getElementsByClassName),
            n.getById = st(function(t) {
                return f.appendChild(t).id = x,
                !h.getElementsByName || !h.getElementsByName(x).length
            }),
            n.getById ? (i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete i.find.ID,
            i.filter.ID = function(t) {
                var e = t.replace(et, nt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
            }
            ,
            m = [],
            v = [],
            (n.qsa = J.test(h.querySelectorAll)) && (st(function(t) {
                f.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + F + ")"),
                t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                t.querySelectorAll(":checked").length || v.push(":checked"),
                t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
            }),
            st(function(t) {
                var e = h.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && st(function(t) {
                n.disconnectedMatch = y.call(t, "div"),
                y.call(t, "[s!='']:x"),
                m.push("!=", q)
            }),
            v = v.length && new RegExp(v.join("|")),
            m = m.length && new RegExp(m.join("|")),
            e = J.test(f.compareDocumentPosition),
            b = e || J.test(f.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            E = e ? function(t, e) {
                if (t === e)
                    return p = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === h || t.ownerDocument === w && b(w, t) ? -1 : e === h || e.ownerDocument === w && b(w, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return p = !0,
                    0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, a = [t], s = [e];
                if (!o || !r)
                    return t === h ? -1 : e === h ? 1 : o ? -1 : r ? 1 : u ? I(u, t) - I(u, e) : 0;
                if (o === r)
                    return ct(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? ct(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
            }
            ,
            h) : h
        }
        ,
        ot.matches = function(t, e) {
            return ot(t, null, null, e)
        }
        ,
        ot.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== h && d(t),
            e = e.replace(U, "='$1']"),
            n.matchesSelector && g && !S[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e)))
                try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return ot(e, h, null, [t]).length > 0
        }
        ,
        ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== h && d(t),
            b(t, e)
        }
        ,
        ot.attr = function(t, e) {
            (t.ownerDocument || t) !== h && d(t);
            var o = i.attrHandle[e.toLowerCase()]
              , r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }
        ,
        ot.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        ot.uniqueSort = function(t) {
            var e, i = [], o = 0, r = 0;
            if (p = !n.detectDuplicates,
            u = !n.sortStable && t.slice(0),
            t.sort(E),
            p) {
                for (; e = t[r++]; )
                    e === t[r] && (o = i.push(r));
                for (; o--; )
                    t.splice(i[o], 1)
            }
            return u = null,
            t
        }
        ,
        o = ot.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += o(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += o(e);
            return n
        }
        ,
        (i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(et, nt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = k[t + " "];
                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && k(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var o = ot.attr(i, t);
                        return null == o ? "!=" === e : !e || (o += "",
                        "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , a = "last" !== t.slice(-4)
                      , s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var c, u, p, d, h, f, g = r !== a ? "nextSibling" : "previousSibling", v = e.parentNode, m = s && e.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (v) {
                            if (r) {
                                for (; g; ) {
                                    for (d = e; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                            return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (b = (h = (c = (u = (p = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2],
                                d = h && v.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || f.pop(); )
                                    if (1 === d.nodeType && ++b && d === e) {
                                        u[t] = [C, h, b];
                                        break
                                    }
                            } else if (y && (b = h = (c = (u = (p = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] || [])[0] === C && c[1]),
                            !1 === b)
                                for (; (d = ++h && d && d[g] || (b = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((u = (p = d[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] = [C, b]),
                                d !== e)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e],
                    i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                        for (var i, r = o(t, e), a = r.length; a--; )
                            t[i = I(t, r[a])] = !(n[i] = r[a])
                    }) : function(t) {
                        return o(t, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: at(function(t) {
                    var e = []
                      , n = []
                      , i = s(t.replace(W, "$1"));
                    return i[x] ? at(function(t, e, n, o) {
                        for (var r, a = i(t, null, o, []), s = t.length; s--; )
                            (r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, o, r) {
                        return e[0] = t,
                        i(e, null, r, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: at(function(t) {
                    return function(e) {
                        return ot(t, e).length > 0
                    }
                }),
                contains: at(function(t) {
                    return t = t.replace(et, nt),
                    function(e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    }
                }),
                lang: at(function(t) {
                    return Q.test(t || "") || ot.error("unsupported lang: " + t),
                    t = t.replace(et, nt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === f
                },
                focus: function(t) {
                    return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !i.pseudos.empty(t)
                },
                header: function(t) {
                    return Y.test(t.nodeName)
                },
                input: function(t) {
                    return G.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(t, e) {
                    return [e - 1]
                }),
                eq: dt(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: dt(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: dt(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: dt(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: dt(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[e] = ut(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            i.pseudos[e] = pt(e);
        function ft() {}
        function gt(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function vt(t, e, n) {
            var i = e.dir
              , o = n && "parentNode" === i
              , r = T++;
            return e.first ? function(e, n, r) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || o)
                        return t(e, n, r)
            }
            : function(e, n, a) {
                var s, l, c, u = [C, r];
                if (a) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || o) && t(e, n, a))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || o) {
                            if ((s = (l = (c = e[x] || (e[x] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[i]) && s[0] === C && s[1] === r)
                                return u[2] = s[2];
                            if (l[i] = u,
                            u[2] = t(e, n, a))
                                return !0
                        }
            }
        }
        function mt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; )
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function yt(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, c = null != e; l > s; s++)
                (r = t[s]) && (n && !n(r, i, o) || (a.push(r),
                c && e.push(s)));
            return a
        }
        function bt(t, e, n, i, o, r) {
            return i && !i[x] && (i = bt(i)),
            o && !o[x] && (o = bt(o, r)),
            at(function(r, a, s, l) {
                var c, u, p, d = [], h = [], f = a.length, g = r || function(t, e, n) {
                    for (var i = 0, o = e.length; o > i; i++)
                        ot(t, e[i], n);
                    return n
                }(e || "*", s.nodeType ? [s] : s, []), v = !t || !r && e ? g : yt(g, d, t, s, l), m = n ? o || (r ? t : f || i) ? [] : a : v;
                if (n && n(v, m, s, l),
                i)
                    for (c = yt(m, h),
                    i(c, [], s, l),
                    u = c.length; u--; )
                        (p = c[u]) && (m[h[u]] = !(v[h[u]] = p));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (c = [],
                            u = m.length; u--; )
                                (p = m[u]) && c.push(v[u] = p);
                            o(null, m = [], c, l)
                        }
                        for (u = m.length; u--; )
                            (p = m[u]) && (c = o ? I(r, p) : d[u]) > -1 && (r[c] = !(a[c] = p))
                    }
                } else
                    m = yt(m === a ? m.splice(f, m.length) : m),
                    o ? o(null, a, m, l) : L.apply(a, m)
            })
        }
        function xt(t) {
            for (var e, n, o, r = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = vt(function(t) {
                return t === e
            }, s, !0), p = vt(function(t) {
                return I(e, t) > -1
            }, s, !0), d = [function(t, n, i) {
                var o = !a && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : p(t, n, i));
                return e = null,
                o
            }
            ]; r > l; l++)
                if (n = i.relative[t[l].type])
                    d = [vt(mt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                        for (o = ++l; r > o && !i.relative[t[o].type]; o++)
                            ;
                        return bt(l > 1 && mt(d), l > 1 && gt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, o > l && xt(t.slice(l, o)), r > o && xt(t = t.slice(o)), r > o && gt(t))
                    }
                    d.push(n)
                }
            return mt(d)
        }
        return ft.prototype = i.filters = i.pseudos,
        i.setFilters = new ft,
        a = ot.tokenize = function(t, e) {
            var n, o, r, a, s, l, c, u = $[t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (s = t,
            l = [],
            c = i.preFilter; s; ) {
                for (a in n && !(o = B.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                l.push(r = [])),
                n = !1,
                (o = z.exec(s)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(W, " ")
                }),
                s = s.slice(n.length)),
                i.filter)
                    !(o = X[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return e ? s.length : s ? ot.error(t) : $(t, l).slice(0)
        }
        ,
        s = ot.compile = function(t, e) {
            var n, o, r, s, l, u, p = [], f = [], v = S[t + " "];
            if (!v) {
                for (e || (e = a(t)),
                n = e.length; n--; )
                    (v = xt(e[n]))[x] ? p.push(v) : f.push(v);
                (v = S(t, (o = f,
                s = (r = p).length > 0,
                l = o.length > 0,
                u = function(t, e, n, a, u) {
                    var p, f, v, m = 0, y = "0", b = t && [], x = [], w = c, T = t || l && i.find.TAG("*", u), k = C += null == w ? 1 : Math.random() || .1, $ = T.length;
                    for (u && (c = e === h || e || u); y !== $ && null != (p = T[y]); y++) {
                        if (l && p) {
                            for (f = 0,
                            e || p.ownerDocument === h || (d(p),
                            n = !g); v = o[f++]; )
                                if (v(p, e || h, n)) {
                                    a.push(p);
                                    break
                                }
                            u && (C = k)
                        }
                        s && ((p = !v && p) && m--,
                        t && b.push(p))
                    }
                    if (m += y,
                    s && y !== m) {
                        for (f = 0; v = r[f++]; )
                            v(b, x, e, n);
                        if (t) {
                            if (m > 0)
                                for (; y--; )
                                    b[y] || x[y] || (x[y] = N.call(a));
                            x = yt(x)
                        }
                        L.apply(a, x),
                        u && !t && x.length > 0 && m + r.length > 1 && ot.uniqueSort(a)
                    }
                    return u && (C = k,
                    c = w),
                    b
                }
                ,
                s ? at(u) : u))).selector = t
            }
            return v
        }
        ,
        l = ot.select = function(t, e, o, r) {
            var l, c, u, p, d, h = "function" == typeof t && t, f = !r && a(t = h.selector || t);
            if (o = o || [],
            1 === f.length) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === e.nodeType && g && i.relative[c[1].type]) {
                    if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0]))
                        return o;
                    h && (e = e.parentNode),
                    t = t.slice(c.shift().value.length)
                }
                for (l = X.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l],
                !i.relative[p = u.type]); )
                    if ((d = i.find[p]) && (r = d(u.matches[0].replace(et, nt), Z.test(c[0].type) && ht(e.parentNode) || e))) {
                        if (c.splice(l, 1),
                        !(t = r.length && gt(c)))
                            return L.apply(o, r),
                            o;
                        break
                    }
            }
            return (h || s(t, f))(r, e, !g, o, !e || Z.test(t) && ht(e.parentNode) || e),
            o
        }
        ,
        n.sortStable = x.split("").sort(E).join("") === x,
        n.detectDuplicates = !!p,
        d(),
        n.sortDetached = st(function(t) {
            return 1 & t.compareDocumentPosition(h.createElement("div"))
        }),
        st(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        n.attributes && st(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || lt("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        st(function(t) {
            return null == t.getAttribute("disabled")
        }) || lt(F, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        ot
    }(t);
    h.find = b,
    h.expr = b.selectors,
    h.expr[":"] = h.expr.pseudos,
    h.uniqueSort = h.unique = b.uniqueSort,
    h.text = b.getText,
    h.isXMLDoc = b.isXML,
    h.contains = b.contains;
    var x = function(t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (o && h(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , w = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , C = h.expr.match.needsContext
      , T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , k = /^.[^:#\[\.,]*$/;
    function $(t, e, n) {
        if (h.isFunction(e))
            return h.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return h.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (k.test(e))
                return h.filter(e, t, n);
            e = h.filter(e, t)
        }
        return h.grep(t, function(t) {
            return s.call(e, t) > -1 !== n
        })
    }
    h.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? h.find.matchesSelector(i, t) ? [i] : [] : h.find.matches(t, h.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    h.fn.extend({
        find: function(t) {
            var e, n = this.length, i = [], o = this;
            if ("string" != typeof t)
                return this.pushStack(h(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (h.contains(o[e], this))
                            return !0
                }));
            for (e = 0; n > e; e++)
                h.find(t, o[e], i);
            return (i = this.pushStack(n > 1 ? h.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t,
            i
        },
        filter: function(t) {
            return this.pushStack($(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack($(this, t || [], !0))
        },
        is: function(t) {
            return !!$(this, "string" == typeof t && C.test(t) ? h(t) : t || [], !1).length
        }
    });
    var S, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(t, e, n) {
        var o, r;
        if (!t)
            return this;
        if (n = n || S,
        "string" == typeof t) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || !o[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof h ? e[0] : e,
                h.merge(this, h.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)),
                T.test(o[1]) && h.isPlainObject(e))
                    for (o in e)
                        h.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = i,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : h.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(h) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        h.makeArray(t, this))
    }
    ).prototype = h.fn,
    S = h(i);
    var _ = /^(?:parents|prev(?:Until|All))/
      , A = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function D(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    h.fn.extend({
        has: function(t) {
            var e = h(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (h.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = C.test(t) || "string" != typeof t ? h(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? h.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? s.call(h(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(h.uniqueSort(h.merge(this.get(), h(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    h.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return x(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return x(t, "parentNode", n)
        },
        next: function(t) {
            return D(t, "nextSibling")
        },
        prev: function(t) {
            return D(t, "previousSibling")
        },
        nextAll: function(t) {
            return x(t, "nextSibling")
        },
        prevAll: function(t) {
            return x(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return x(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return x(t, "previousSibling", n)
        },
        siblings: function(t) {
            return w((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return w(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || h.merge([], t.childNodes)
        }
    }, function(t, e) {
        h.fn[t] = function(n, i) {
            var o = h.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = h.filter(i, o)),
            this.length > 1 && (A[t] || h.uniqueSort(o),
            _.test(t) && o.reverse()),
            this.pushStack(o)
        }
    });
    var N, j = /\S+/g;
    function L() {
        i.removeEventListener("DOMContentLoaded", L),
        t.removeEventListener("load", L),
        h.ready()
    }
    h.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t,
        n = {},
        h.each(e.match(j) || [], function(t, e) {
            n[e] = !0
        }),
        n) : h.extend({}, t);
        var i, o, r, a, s = [], l = [], c = -1, u = function() {
            for (a = t.once,
            r = i = !0; l.length; c = -1)
                for (o = l.shift(); ++c < s.length; )
                    !1 === s[c].apply(o[0], o[1]) && t.stopOnFalse && (c = s.length,
                    o = !1);
            t.memory || (o = !1),
            i = !1,
            a && (s = o ? [] : "")
        }, p = {
            add: function() {
                return s && (o && !i && (c = s.length - 1,
                l.push(o)),
                function e(n) {
                    h.each(n, function(n, i) {
                        h.isFunction(i) ? t.unique && p.has(i) || s.push(i) : i && i.length && "string" !== h.type(i) && e(i)
                    })
                }(arguments),
                o && !i && u()),
                this
            },
            remove: function() {
                return h.each(arguments, function(t, e) {
                    for (var n; (n = h.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        c >= n && c--
                }),
                this
            },
            has: function(t) {
                return t ? h.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = l = [],
                s = o = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = l = [],
                o || (s = o = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(t, e) {
                return a || (e = [t, (e = e || []).slice ? e.slice() : e],
                l.push(e),
                i || u()),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return p
    }
    ,
    h.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", h.Callbacks("once memory"), "resolved"], ["reject", "fail", h.Callbacks("once memory"), "rejected"], ["notify", "progress", h.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return h.Deferred(function(n) {
                        h.each(e, function(e, r) {
                            var a = h.isFunction(t[e]) && t[e];
                            o[r[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && h.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? h.extend(t, i) : i
                }
            }
              , o = {};
            return i.pipe = i.then,
            h.each(e, function(t, r) {
                var a = r[2]
                  , s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(t) {
            var e, n, i, r = 0, a = o.call(arguments), s = a.length, l = 1 !== s || t && h.isFunction(t.promise) ? s : 0, c = 1 === l ? t : h.Deferred(), u = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? o.call(arguments) : r,
                    i === e ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                n = new Array(s),
                i = new Array(s); s > r; r++)
                    a[r] && h.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, e)).done(u(r, i, a)).fail(c.reject) : --l;
            return l || c.resolveWith(i, a),
            c.promise()
        }
    }),
    h.fn.ready = function(t) {
        return h.ready.promise().done(t),
        this
    }
    ,
    h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? h.readyWait++ : h.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --h.readyWait : h.isReady) || (h.isReady = !0,
            !0 !== t && --h.readyWait > 0 || (N.resolveWith(i, [h]),
            h.fn.triggerHandler && (h(i).triggerHandler("ready"),
            h(i).off("ready"))))
        }
    }),
    h.ready.promise = function(e) {
        return N || (N = h.Deferred(),
        "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(h.ready) : (i.addEventListener("DOMContentLoaded", L),
        t.addEventListener("load", L))),
        N.promise(e)
    }
    ,
    h.ready.promise();
    var O = function(t, e, n, i, o, r, a) {
        var s = 0
          , l = t.length
          , c = null == n;
        if ("object" === h.type(n))
            for (s in o = !0,
            n)
                O(t, e, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0,
        h.isFunction(i) || (a = !0),
        c && (a ? (e.call(t, i),
        e = null) : (c = e,
        e = function(t, e, n) {
            return c.call(h(t), n)
        }
        )),
        e))
            for (; l > s; s++)
                e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    }
      , I = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    function F() {
        this.expando = h.expando + F.uid++
    }
    F.uid = 1,
    F.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            t[this.expando]
        },
        cache: function(t) {
            if (!I(t))
                return {};
            var e = t[this.expando];
            return e || (e = {},
            I(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e)
                o[e] = n;
            else
                for (i in e)
                    o[i] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, h.camelCase(e)) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, o, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 === e)
                    this.register(t);
                else {
                    h.isArray(e) ? i = e.concat(e.map(h.camelCase)) : (o = h.camelCase(e),
                    e in r ? i = [e, o] : i = (i = o)in r ? [i] : i.match(j) || []),
                    n = i.length;
                    for (; n--; )
                        delete r[i[n]]
                }
                (void 0 === e || h.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !h.isEmptyObject(e)
        }
    };
    var R = new F
      , P = new F
      , H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , q = /[A-Z]/g;
    function M(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(q, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : H.test(n) ? h.parseJSON(n) : n)
                } catch (t) {}
                P.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    h.extend({
        hasData: function(t) {
            return P.hasData(t) || R.hasData(t)
        },
        data: function(t, e, n) {
            return P.access(t, e, n)
        },
        removeData: function(t, e) {
            P.remove(t, e)
        },
        _data: function(t, e, n) {
            return R.access(t, e, n)
        },
        _removeData: function(t, e) {
            R.remove(t, e)
        }
    }),
    h.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = P.get(r),
                1 === r.nodeType && !R.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (0 === (i = a[n].name).indexOf("data-") && (i = h.camelCase(i.slice(5)),
                        M(r, i, o[i])));
                    R.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                P.set(this, t)
            }) : O(this, function(e) {
                var n, i;
                if (r && void 0 === e) {
                    if (void 0 !== (n = P.get(r, t) || P.get(r, t.replace(q, "-$&").toLowerCase())))
                        return n;
                    if (i = h.camelCase(t),
                    void 0 !== (n = P.get(r, i)))
                        return n;
                    if (void 0 !== (n = M(r, i, void 0)))
                        return n
                } else
                    i = h.camelCase(t),
                    this.each(function() {
                        var n = P.get(this, i);
                        P.set(this, i, e),
                        t.indexOf("-") > -1 && void 0 !== n && P.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                P.remove(this, t)
            })
        }
    }),
    h.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue",
            i = R.get(t, e),
            n && (!i || h.isArray(n) ? i = R.access(t, e, h.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = h.queue(t, e)
              , i = n.length
              , o = n.shift()
              , r = h._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, function() {
                h.dequeue(t, e)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return R.get(t, n) || R.access(t, n, {
                empty: h.Callbacks("once memory").add(function() {
                    R.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    h.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? h.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = h.queue(this, t, e);
                h._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && h.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                h.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, o = h.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                (n = R.get(r[a], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(e)
        }
    });
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , B = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$","i")
      , z = ["Top", "Right", "Bottom", "Left"]
      , U = function(t, e) {
        return t = e || t,
        "none" === h.css(t, "display") || !h.contains(t.ownerDocument, t)
    };
    function V(t, e, n, i) {
        var o, r = 1, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return h.css(t, e, "")
        }
        , l = s(), c = n && n[3] || (h.cssNumber[e] ? "" : "px"), u = (h.cssNumber[e] || "px" !== c && +l) && B.exec(h.css(t, e));
        if (u && u[3] !== c)
            for (c = c || u[3],
            n = n || [],
            u = +l || 1; u /= r = r || ".5",
            h.style(t, e, u + c),
            r !== (r = s() / l) && 1 !== r && --a; )
                ;
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = o)),
        o
    }
    var Q = /^(?:checkbox|radio)$/i
      , X = /<([\w:-]+)/
      , G = /^$|\/(?:java|ecma)script/i
      , Y = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function J(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && h.nodeName(t, e) ? h.merge([t], n) : n
    }
    function K(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            R.set(t[n], "globalEval", !e || R.get(e[n], "globalEval"))
    }
    Y.optgroup = Y.option,
    Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead,
    Y.th = Y.td;
    var Z, tt, et = /<|&#?\w+;/;
    function nt(t, e, n, i, o) {
        for (var r, a, s, l, c, u, p = e.createDocumentFragment(), d = [], f = 0, g = t.length; g > f; f++)
            if ((r = t[f]) || 0 === r)
                if ("object" === h.type(r))
                    h.merge(d, r.nodeType ? [r] : r);
                else if (et.test(r)) {
                    for (a = a || p.appendChild(e.createElement("div")),
                    s = (X.exec(r) || ["", ""])[1].toLowerCase(),
                    l = Y[s] || Y._default,
                    a.innerHTML = l[1] + h.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        a = a.lastChild;
                    h.merge(d, a.childNodes),
                    (a = p.firstChild).textContent = ""
                } else
                    d.push(e.createTextNode(r));
        for (p.textContent = "",
        f = 0; r = d[f++]; )
            if (i && h.inArray(r, i) > -1)
                o && o.push(r);
            else if (c = h.contains(r.ownerDocument, r),
            a = J(p.appendChild(r), "script"),
            c && K(a),
            n)
                for (u = 0; r = a[u++]; )
                    G.test(r.type || "") && n.push(r);
        return p
    }
    Z = i.createDocumentFragment().appendChild(i.createElement("div")),
    (tt = i.createElement("input")).setAttribute("type", "radio"),
    tt.setAttribute("checked", "checked"),
    tt.setAttribute("name", "t"),
    Z.appendChild(tt),
    p.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Z.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var it = /^key/
      , ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , rt = /^([^.]*)(?:\.(.+)|)/;
    function at() {
        return !0
    }
    function st() {
        return !1
    }
    function lt() {
        try {
            return i.activeElement
        } catch (t) {}
    }
    function ct(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            e)
                ct(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = st;
        else if (!o)
            return t;
        return 1 === r && (a = o,
        (o = function(t) {
            return h().off(t),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = h.guid++)),
        t.each(function() {
            h.event.add(this, e, o, i, n)
        })
    }
    h.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, c, u, p, d, f, g, v, m = R.get(t);
            if (m)
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                n.guid || (n.guid = h.guid++),
                (l = m.events) || (l = m.events = {}),
                (a = m.handle) || (a = m.handle = function(e) {
                    return void 0 !== h && h.event.triggered !== e.type ? h.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(j) || [""]).length; c--; )
                    f = v = (s = rt.exec(e[c]) || [])[1],
                    g = (s[2] || "").split(".").sort(),
                    f && (p = h.event.special[f] || {},
                    f = (o ? p.delegateType : p.bindType) || f,
                    p = h.event.special[f] || {},
                    u = h.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && h.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, r),
                    (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                    p.setup && !1 !== p.setup.call(t, i, g, a) || t.addEventListener && t.addEventListener(f, a)),
                    p.add && (p.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    h.event.global[f] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, c, u, p, d, f, g, v, m = R.hasData(t) && R.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(j) || [""]).length; c--; )
                    if (f = v = (s = rt.exec(e[c]) || [])[1],
                    g = (s[2] || "").split(".").sort(),
                    f) {
                        for (p = h.event.special[f] || {},
                        d = l[f = (i ? p.delegateType : p.bindType) || f] || [],
                        s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = r = d.length; r--; )
                            u = d[r],
                            !o && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1),
                            u.selector && d.delegateCount--,
                            p.remove && p.remove.call(t, u));
                        a && !d.length && (p.teardown && !1 !== p.teardown.call(t, g, m.handle) || h.removeEvent(t, f, m.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            h.event.remove(t, f + e[c], n, i, !0);
                h.isEmptyObject(l) && R.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = h.event.fix(t);
            var e, n, i, r, a, s = [], l = o.call(arguments), c = (R.get(this, "events") || {})[t.type] || [], u = h.event.special[t.type] || {};
            if (l[0] = t,
            t.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (s = h.event.handlers.call(this, t, c),
                e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem,
                    n = 0; (a = r.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((h.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a = [], s = e.delegateCount, l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [],
                        n = 0; s > n; n++)
                            void 0 === i[o = (r = e[n]).selector + " "] && (i[o] = r.needsContext ? h(o, this).index(l) > -1 : h.find(o, this, null, [l]).length),
                            i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, o, r, a = e.button;
                return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || i).documentElement,
                r = n.body,
                t.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                t.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[h.expando])
                return t;
            var e, n, o, r = t.type, a = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = ot.test(r) ? this.mouseHooks : it.test(r) ? this.keyHooks : {}),
            o = s.props ? this.props.concat(s.props) : this.props,
            t = new h.Event(a),
            e = o.length; e--; )
                t[n = o[e]] = a[n];
            return t.target || (t.target = i),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            s.filter ? s.filter(t, a) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== lt() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === lt() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && h.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return h.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    h.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    h.Event = function(t, e) {
        return this instanceof h.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? at : st) : this.type = t,
        e && h.extend(this, e),
        this.timeStamp = t && t.timeStamp || h.now(),
        void (this[h.expando] = !0)) : new h.Event(t,e)
    }
    ,
    h.Event.prototype = {
        constructor: h.Event,
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = at,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = at,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = at,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        h.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget, o = t.handleObj;
                return i && (i === this || h.contains(this, i)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    h.fn.extend({
        on: function(t, e, n, i) {
            return ct(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return ct(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                h(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = void 0),
            !1 === n && (n = st),
            this.each(function() {
                h.event.remove(this, t, n, e)
            })
        }
    });
    var ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , pt = /<script|<style|<link/i
      , dt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ht = /^true\/(.*)/
      , ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function gt(t, e) {
        return h.nodeName(t, "table") && h.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function vt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function mt(t) {
        var e = ht.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function yt(t, e) {
        var n, i, o, r, a, s, l, c;
        if (1 === e.nodeType) {
            if (R.hasData(t) && (r = R.access(t),
            a = R.set(e, r),
            c = r.events))
                for (o in delete a.handle,
                a.events = {},
                c)
                    for (n = 0,
                    i = c[o].length; i > n; n++)
                        h.event.add(e, o, c[o][n]);
            P.hasData(t) && (s = P.access(t),
            l = h.extend({}, s),
            P.set(e, l))
        }
    }
    function bt(t, e, n, i) {
        e = r.apply([], e);
        var o, a, s, l, c, u, d = 0, f = t.length, g = f - 1, v = e[0], m = h.isFunction(v);
        if (m || f > 1 && "string" == typeof v && !p.checkClone && dt.test(v))
            return t.each(function(o) {
                var r = t.eq(o);
                m && (e[0] = v.call(this, o, r.html())),
                bt(r, e, n, i)
            });
        if (f && (a = (o = nt(e, t[0].ownerDocument, !1, t, i)).firstChild,
        1 === o.childNodes.length && (o = a),
        a || i)) {
            for (l = (s = h.map(J(o, "script"), vt)).length; f > d; d++)
                c = o,
                d !== g && (c = h.clone(c, !0, !0),
                l && h.merge(s, J(c, "script"))),
                n.call(t[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument,
                h.map(s, mt),
                d = 0; l > d; d++)
                    c = s[d],
                    G.test(c.type || "") && !R.access(c, "globalEval") && h.contains(u, c) && (c.src ? h._evalUrl && h._evalUrl(c.src) : h.globalEval(c.textContent.replace(ft, "")))
        }
        return t
    }
    function xt(t, e, n) {
        for (var i, o = e ? h.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || h.cleanData(J(i)),
            i.parentNode && (n && h.contains(i.ownerDocument, i) && K(J(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    h.extend({
        htmlPrefilter: function(t) {
            return t.replace(ut, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, a, s, l, c, u = t.cloneNode(!0), d = h.contains(t.ownerDocument, t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || h.isXMLDoc(t)))
                for (a = J(u),
                i = 0,
                o = (r = J(t)).length; o > i; i++)
                    s = r[i],
                    l = a[i],
                    void 0,
                    "input" === (c = l.nodeName.toLowerCase()) && Q.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (e)
                if (n)
                    for (r = r || J(t),
                    a = a || J(u),
                    i = 0,
                    o = r.length; o > i; i++)
                        yt(r[i], a[i]);
                else
                    yt(t, u);
            return (a = J(u, "script")).length > 0 && K(a, !d && J(t, "script")),
            u
        },
        cleanData: function(t) {
            for (var e, n, i, o = h.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (I(n)) {
                    if (e = n[R.expando]) {
                        if (e.events)
                            for (i in e.events)
                                o[i] ? h.event.remove(n, i) : h.removeEvent(n, i, e.handle);
                        n[R.expando] = void 0
                    }
                    n[P.expando] && (n[P.expando] = void 0)
                }
        }
    }),
    h.fn.extend({
        domManip: bt,
        detach: function(t) {
            return xt(this, t, !0)
        },
        remove: function(t) {
            return xt(this, t)
        },
        text: function(t) {
            return O(this, function(t) {
                return void 0 === t ? h.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return bt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return bt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = gt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return bt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return bt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (h.cleanData(J(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return h.clone(this, t, e)
            })
        },
        html: function(t) {
            return O(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !pt.test(t) && !Y[(X.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = h.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)
                            1 === (e = this[n] || {}).nodeType && (h.cleanData(J(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return bt(this, arguments, function(e) {
                var n = this.parentNode;
                h.inArray(this, t) < 0 && (h.cleanData(J(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        h.fn[t] = function(t) {
            for (var n, i = [], o = h(t), r = o.length - 1, s = 0; r >= s; s++)
                n = s === r ? this : this.clone(!0),
                h(o[s])[e](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var wt, Ct = {
        HTML: "block",
        BODY: "block"
    };
    function Tt(t, e) {
        var n = h(e.createElement(t)).appendTo(e.body)
          , i = h.css(n[0], "display");
        return n.detach(),
        i
    }
    function kt(t) {
        var e = i
          , n = Ct[t];
        return n || ("none" !== (n = Tt(t, e)) && n || ((e = (wt = (wt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(),
        e.close(),
        n = Tt(t, e),
        wt.detach()),
        Ct[t] = n),
        n
    }
    var $t = /^margin/
      , St = new RegExp("^(" + W + ")(?!px)[a-z%]+$","i")
      , Et = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }
      , _t = function(t, e, n, i) {
        var o, r, a = {};
        for (r in e)
            a[r] = t.style[r],
            t.style[r] = e[r];
        for (r in o = n.apply(t, i || []),
        e)
            t.style[r] = a[r];
        return o
    }
      , At = i.documentElement;
    function Dt(t, e, n) {
        var i, o, r, a, s = t.style;
        return "" !== (a = (n = n || Et(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== a || h.contains(t.ownerDocument, t) || (a = h.style(t, e)),
        n && !p.pixelMarginRight() && St.test(a) && $t.test(e) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r),
        void 0 !== a ? a + "" : a
    }
    function Nt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    !function() {
        var e, n, o, r, a = i.createElement("div"), s = i.createElement("div");
        if (s.style) {
            function l() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                At.appendChild(a);
                var i = t.getComputedStyle(s);
                e = "1%" !== i.top,
                r = "2px" === i.marginLeft,
                n = "4px" === i.width,
                s.style.marginRight = "50%",
                o = "4px" === i.marginRight,
                At.removeChild(a)
            }
            s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            p.clearCloneStyle = "content-box" === s.style.backgroundClip,
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            a.appendChild(s),
            h.extend(p, {
                pixelPosition: function() {
                    return l(),
                    e
                },
                boxSizingReliable: function() {
                    return null == n && l(),
                    n
                },
                pixelMarginRight: function() {
                    return null == n && l(),
                    o
                },
                reliableMarginLeft: function() {
                    return null == n && l(),
                    r
                },
                reliableMarginRight: function() {
                    var e, n = s.appendChild(i.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    n.style.marginRight = n.style.width = "0",
                    s.style.width = "1px",
                    At.appendChild(a),
                    e = !parseFloat(t.getComputedStyle(n).marginRight),
                    At.removeChild(a),
                    s.removeChild(n),
                    e
                }
            })
        }
    }();
    var jt = /^(none|table(?!-c[ea]).+)/
      , Lt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ot = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , It = ["Webkit", "O", "Moz", "ms"]
      , Ft = i.createElement("div").style;
    function Rt(t) {
        if (t in Ft)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = It.length; n--; )
            if ((t = It[n] + e)in Ft)
                return t
    }
    function Pt(t, e, n) {
        var i = B.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function Ht(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2)
            "margin" === n && (a += h.css(t, n + z[r], !0, o)),
            i ? ("content" === n && (a -= h.css(t, "padding" + z[r], !0, o)),
            "margin" !== n && (a -= h.css(t, "border" + z[r] + "Width", !0, o))) : (a += h.css(t, "padding" + z[r], !0, o),
            "padding" !== n && (a += h.css(t, "border" + z[r] + "Width", !0, o)));
        return a
    }
    function qt(t, e, n) {
        var i = !0
          , o = "width" === e ? t.offsetWidth : t.offsetHeight
          , r = Et(t)
          , a = "border-box" === h.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if ((0 > (o = Dt(t, e, r)) || null == o) && (o = t.style[e]),
            St.test(o))
                return o;
            i = a && (p.boxSizingReliable() || o === t.style[e]),
            o = parseFloat(o) || 0
        }
        return o + Ht(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }
    function Mt(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++)
            (i = t[a]).style && (r[a] = R.get(i, "olddisplay"),
            n = i.style.display,
            e ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && U(i) && (r[a] = R.access(i, "olddisplay", kt(i.nodeName)))) : (o = U(i),
            "none" === n && o || R.set(i, "olddisplay", o ? n : h.css(i, "display"))));
        for (a = 0; s > a; a++)
            (i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }
    function Wt(t, e, n, i, o) {
        return new Wt.prototype.init(t,e,n,i,o)
    }
    h.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Dt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = h.camelCase(e), l = t.style;
                return e = h.cssProps[s] || (h.cssProps[s] = Rt(s) || s),
                a = h.cssHooks[e] || h.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e] : ("string" === (r = typeof n) && (o = B.exec(n)) && o[1] && (n = V(t, e, o),
                r = "number"),
                void (null != n && n == n && ("number" === r && (n += o && o[3] || (h.cssNumber[s] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = h.camelCase(e);
            return e = h.cssProps[s] || (h.cssProps[s] = Rt(s) || s),
            (a = h.cssHooks[e] || h.cssHooks[s]) && "get"in a && (o = a.get(t, !0, n)),
            void 0 === o && (o = Dt(t, e, i)),
            "normal" === o && e in Ot && (o = Ot[e]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    h.each(["height", "width"], function(t, e) {
        h.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? jt.test(h.css(t, "display")) && 0 === t.offsetWidth ? _t(t, Lt, function() {
                    return qt(t, e, i)
                }) : qt(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o, r = i && Et(t), a = i && Ht(t, e, i, "border-box" === h.css(t, "boxSizing", !1, r), r);
                return a && (o = B.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                n = h.css(t, e)),
                Pt(0, n, a)
            }
        }
    }),
    h.cssHooks.marginLeft = Nt(p.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Dt(t, "marginLeft")) || t.getBoundingClientRect().left - _t(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    h.cssHooks.marginRight = Nt(p.reliableMarginRight, function(t, e) {
        return e ? _t(t, {
            display: "inline-block"
        }, Dt, [t, "marginRight"]) : void 0
    }),
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        h.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[t + z[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        $t.test(t) || (h.cssHooks[t + e].set = Pt)
    }),
    h.fn.extend({
        css: function(t, e) {
            return O(this, function(t, e, n) {
                var i, o, r = {}, a = 0;
                if (h.isArray(e)) {
                    for (i = Et(t),
                    o = e.length; o > a; a++)
                        r[e[a]] = h.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? h.style(t, e, n) : h.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return Mt(this, !0)
        },
        hide: function() {
            return Mt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                U(this) ? h(this).show() : h(this).hide()
            })
        }
    }),
    h.Tween = Wt,
    (Wt.prototype = {
        constructor: Wt,
        init: function(t, e, n, i, o, r) {
            this.elem = t,
            this.prop = n,
            this.easing = o || h.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (h.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Wt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Wt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Wt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = h.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Wt.propHooks._default.set(this),
            this
        }
    }).init.prototype = Wt.prototype,
    (Wt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = h.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                h.fx.step[t.prop] ? h.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[h.cssProps[t.prop]] && !h.cssHooks[t.prop] ? t.elem[t.prop] = t.now : h.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Wt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    h.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    h.fx = Wt.prototype.init,
    h.fx.step = {};
    var Bt, zt, Ut, Vt, Qt, Xt = /^(?:toggle|show|hide)$/, Gt = /queueHooks$/;
    function Yt() {
        return t.setTimeout(function() {
            Bt = void 0
        }),
        Bt = h.now()
    }
    function Jt(t, e) {
        var n, i = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)
            o["margin" + (n = z[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t),
        o
    }
    function Kt(t, e, n) {
        for (var i, o = (Zt.tweeners[e] || []).concat(Zt.tweeners["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function Zt(t, e, n) {
        var i, o, r = 0, a = Zt.prefilters.length, s = h.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = Bt || Yt(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; a > r; r++)
                c.tweens[r].run(i);
            return s.notifyWith(t, [c, i, n]),
            1 > i && a ? n : (s.resolveWith(t, [c]),
            !1)
        }, c = s.promise({
            elem: t,
            props: h.extend({}, e),
            opts: h.extend(!0, {
                specialEasing: {},
                easing: h.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Bt || Yt(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = h.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i > n; n++)
                    c.tweens[n].run(1);
                return e ? (s.notifyWith(t, [c, 1, 0]),
                s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]),
                this
            }
        }), u = c.props;
        for (function(t, e) {
            var n, i, o, r, a;
            for (n in t)
                if (o = e[i = h.camelCase(n)],
                r = t[n],
                h.isArray(r) && (o = r[1],
                r = t[n] = r[0]),
                n !== i && (t[i] = r,
                delete t[n]),
                (a = h.cssHooks[i]) && "expand"in a)
                    for (n in r = a.expand(r),
                    delete t[i],
                    r)
                        n in t || (t[n] = r[n],
                        e[n] = o);
                else
                    e[i] = o
        }(u, c.opts.specialEasing); a > r; r++)
            if (i = Zt.prefilters[r].call(c, t, u, c.opts))
                return h.isFunction(i.stop) && (h._queueHooks(c.elem, c.opts.queue).stop = h.proxy(i.stop, i)),
                i;
        return h.map(u, Kt, c),
        h.isFunction(c.opts.start) && c.opts.start.call(t, c),
        h.fx.timer(h.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    h.Animation = h.extend(Zt, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return V(n.elem, t, B.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            h.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(j);
            for (var n, i = 0, o = t.length; o > i; i++)
                n = t[i],
                Zt.tweeners[n] = Zt.tweeners[n] || [],
                Zt.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, o, r, a, s, l, c, u = this, p = {}, d = t.style, f = t.nodeType && U(t), g = R.get(t, "fxshow");
            for (i in n.queue || (null == (s = h._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
            l = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || l()
            }
            ),
            s.unqueued++,
            u.always(function() {
                u.always(function() {
                    s.unqueued--,
                    h.queue(t, "fx").length || s.empty.fire()
                })
            })),
            1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            "inline" === ("none" === (c = h.css(t, "display")) ? R.get(t, "olddisplay") || kt(t.nodeName) : c) && "none" === h.css(t, "float") && (d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
            u.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            })),
            e)
                if (o = e[i],
                Xt.exec(o)) {
                    if (delete e[i],
                    r = r || "toggle" === o,
                    o === (f ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i])
                            continue;
                        f = !0
                    }
                    p[i] = g && g[i] || h.style(t, i)
                } else
                    c = void 0;
            if (h.isEmptyObject(p))
                "inline" === ("none" === c ? kt(t.nodeName) : c) && (d.display = c);
            else
                for (i in g ? "hidden"in g && (f = g.hidden) : g = R.access(t, "fxshow", {}),
                r && (g.hidden = !f),
                f ? h(t).show() : u.done(function() {
                    h(t).hide()
                }),
                u.done(function() {
                    var e;
                    for (e in R.remove(t, "fxshow"),
                    p)
                        h.style(t, e, p[e])
                }),
                p)
                    a = Kt(f ? g[i] : 0, i, u),
                    i in g || (g[i] = a.start,
                    f && (a.end = a.start,
                    a.start = "width" === i || "height" === i ? 1 : 0))
        }
        ],
        prefilter: function(t, e) {
            e ? Zt.prefilters.unshift(t) : Zt.prefilters.push(t)
        }
    }),
    h.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? h.extend({}, t) : {
            complete: n || !n && e || h.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !h.isFunction(e) && e
        };
        return i.duration = h.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in h.fx.speeds ? h.fx.speeds[i.duration] : h.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            h.isFunction(i.old) && i.old.call(this),
            i.queue && h.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    h.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = h.isEmptyObject(t)
              , r = h.speed(e, n, i)
              , a = function() {
                var e = Zt(this, h.extend({}, t), r);
                (o || R.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = h.timers
                  , a = R.get(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && Gt.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                    e = !1,
                    r.splice(o, 1));
                !e && n || h.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = R.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = h.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                h.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; a > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    h.each(["toggle", "show", "hide"], function(t, e) {
        var n = h.fn[e];
        h.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Jt(e, !0), t, i, o)
        }
    }),
    h.each({
        slideDown: Jt("show"),
        slideUp: Jt("hide"),
        slideToggle: Jt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        h.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    h.timers = [],
    h.fx.tick = function() {
        var t, e = 0, n = h.timers;
        for (Bt = h.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || h.fx.stop(),
        Bt = void 0
    }
    ,
    h.fx.timer = function(t) {
        h.timers.push(t),
        t() ? h.fx.start() : h.timers.pop()
    }
    ,
    h.fx.interval = 13,
    h.fx.start = function() {
        zt || (zt = t.setInterval(h.fx.tick, h.fx.interval))
    }
    ,
    h.fx.stop = function() {
        t.clearInterval(zt),
        zt = null
    }
    ,
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    h.fn.delay = function(e, n) {
        return e = h.fx && h.fx.speeds[e] || e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }
    ,
    Ut = i.createElement("input"),
    Vt = i.createElement("select"),
    Qt = Vt.appendChild(i.createElement("option")),
    Ut.type = "checkbox",
    p.checkOn = "" !== Ut.value,
    p.optSelected = Qt.selected,
    Vt.disabled = !0,
    p.optDisabled = !Qt.disabled,
    (Ut = i.createElement("input")).value = "t",
    Ut.type = "radio",
    p.radioValue = "t" === Ut.value;
    var te, ee = h.expr.attrHandle;
    h.fn.extend({
        attr: function(t, e) {
            return O(this, h.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                h.removeAttr(this, t)
            })
        }
    }),
    h.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute ? h.prop(t, e, n) : (1 === r && h.isXMLDoc(t) || (e = e.toLowerCase(),
                o = h.attrHooks[e] || (h.expr.match.bool.test(e) ? te : void 0)),
                void 0 !== n ? null === n ? void h.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : null == (i = h.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!p.radioValue && "radio" === e && h.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, o = 0, r = e && e.match(j);
            if (r && 1 === t.nodeType)
                for (; n = r[o++]; )
                    i = h.propFix[n] || n,
                    h.expr.match.bool.test(n) && (t[i] = !1),
                    t.removeAttribute(n)
        }
    }),
    te = {
        set: function(t, e, n) {
            return !1 === e ? h.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    h.each(h.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ee[e] || h.find.attr;
        ee[e] = function(t, e, i) {
            var o, r;
            return i || (r = ee[e],
            ee[e] = o,
            o = null != n(t, e, i) ? e.toLowerCase() : null,
            ee[e] = r),
            o
        }
    });
    var ne = /^(?:input|select|textarea|button)$/i
      , ie = /^(?:a|area)$/i;
    h.fn.extend({
        prop: function(t, e) {
            return O(this, h.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[h.propFix[t] || t]
            })
        }
    }),
    h.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && h.isXMLDoc(t) || (e = h.propFix[e] || e,
                o = h.propHooks[e]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = h.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ne.test(t.nodeName) || ie.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (h.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        h.propFix[this.toLowerCase()] = this
    });
    var oe = /[\t\r\n\f]/g;
    function re(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    h.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (h.isFunction(t))
                return this.each(function(e) {
                    h(this).addClass(t.call(this, e, re(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++]; )
                    if (o = re(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(oe, " ")) {
                        for (a = 0; r = e[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = h.trim(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (h.isFunction(t))
                return this.each(function(e) {
                    h(this).removeClass(t.call(this, e, re(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; n = this[l++]; )
                    if (o = re(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(oe, " ")) {
                        for (a = 0; r = e[a++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        o !== (s = h.trim(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : h.isFunction(t) ? this.each(function(n) {
                h(this).toggleClass(t.call(this, n, re(this), e), e)
            }) : this.each(function() {
                var e, i, o, r;
                if ("string" === n)
                    for (i = 0,
                    o = h(this),
                    r = t.match(j) || []; e = r[i++]; )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || ((e = re(this)) && R.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + re(n) + " ").replace(oe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    });
    var ae = /\r/g
      , se = /[\x20\t\r\n\f]+/g;
    h.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = h.isFunction(t),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, h(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : h.isArray(o) && (o = h.map(o, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = h.valHooks[o.type] || h.valHooks[o.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(ae, "") : null == n ? "" : n : void 0
        }
    }),
    h.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = h.find.attr(t, "value");
                    return null != e ? e : h.trim(h.text(t)).replace(se, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (((n = i[l]).selected || l === o) && (p.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !h.nodeName(n.parentNode, "optgroup"))) {
                            if (e = h(n).val(),
                            r)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = h.makeArray(e), a = o.length; a--; )
                        ((i = o[a]).selected = h.inArray(h.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(t, e) {
                return h.isArray(e) ? t.checked = h.inArray(h(t).val(), e) > -1 : void 0
            }
        },
        p.checkOn || (h.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    h.extend(h.event, {
        trigger: function(e, n, o, r) {
            var a, s, l, c, p, d, f, g = [o || i], v = u.call(e, "type") ? e.type : e, m = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = l = o = o || i,
            3 !== o.nodeType && 8 !== o.nodeType && !le.test(v + h.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(),
            m.sort()),
            p = v.indexOf(":") < 0 && "on" + v,
            (e = e[h.expando] ? e : new h.Event(v,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = m.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = o),
            n = null == n ? [e] : h.makeArray(n, [e]),
            f = h.event.special[v] || {},
            r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !h.isWindow(o)) {
                    for (c = f.delegateType || v,
                    le.test(c + v) || (s = s.parentNode); s; s = s.parentNode)
                        g.push(s),
                        l = s;
                    l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || t)
                }
                for (a = 0; (s = g[a++]) && !e.isPropagationStopped(); )
                    e.type = a > 1 ? c : f.bindType || v,
                    (d = (R.get(s, "events") || {})[e.type] && R.get(s, "handle")) && d.apply(s, n),
                    (d = p && s[p]) && d.apply && I(s) && (e.result = d.apply(s, n),
                    !1 === e.result && e.preventDefault());
                return e.type = v,
                r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !I(o) || p && h.isFunction(o[v]) && !h.isWindow(o) && ((l = o[p]) && (o[p] = null),
                h.event.triggered = v,
                o[v](),
                h.event.triggered = void 0,
                l && (o[p] = l)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var i = h.extend(new h.Event, n, {
                type: t,
                isSimulated: !0
            });
            h.event.trigger(i, null, e)
        }
    }),
    h.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                h.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? h.event.trigger(t, e, n, !0) : void 0
        }
    }),
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        h.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    h.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    p.focusin = "onfocusin"in t,
    p.focusin || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            h.event.simulate(e, t.target, h.event.fix(t))
        };
        h.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = R.access(i, e);
                o || i.addEventListener(t, n, !0),
                R.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = R.access(i, e) - 1;
                o ? R.access(i, e, o) : (i.removeEventListener(t, n, !0),
                R.remove(i, e))
            }
        }
    });
    var ce = t.location
      , ue = h.now()
      , pe = /\?/;
    h.parseJSON = function(t) {
        return JSON.parse(t + "")
    }
    ,
    h.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + e),
        n
    }
    ;
    var de = /#.*$/
      , he = /([?&])_=[^&]*/
      , fe = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ge = /^(?:GET|HEAD)$/
      , ve = /^\/\//
      , me = {}
      , ye = {}
      , be = "*/".concat("*")
      , xe = i.createElement("a");
    function we(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, o = 0, r = e.toLowerCase().match(j) || [];
            if (h.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function Ce(t, e, n, i) {
        var o = {}
          , r = t === ye;
        function a(s) {
            var l;
            return o[s] = !0,
            h.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                a(c),
                !1)
            }),
            l
        }
        return a(e.dataTypes[0]) || !o["*"] && a("*")
    }
    function Te(t, e) {
        var n, i, o = h.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && h.extend(!0, t, i),
        t
    }
    xe.href = ce.href,
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ce.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Te(Te(t, h.ajaxSettings), e) : Te(h.ajaxSettings, t)
        },
        ajaxPrefilter: we(me),
        ajaxTransport: we(ye),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var o, r, a, s, l, c, u, p, d = h.ajaxSetup({}, n), f = d.context || d, g = d.context && (f.nodeType || f.jquery) ? h(f) : h.event, v = h.Deferred(), m = h.Callbacks("once memory"), y = d.statusCode || {}, b = {}, x = {}, w = 0, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!s)
                            for (s = {}; e = fe.exec(a); )
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? a : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return w || (t = x[n] = x[n] || t,
                    b[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return w || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > w)
                            for (e in t)
                                y[e] = [y[e], t[e]];
                        else
                            T.always(t[T.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || C;
                    return o && o.abort(e),
                    k(0, e),
                    this
                }
            };
            if (v.promise(T).complete = m.add,
            T.success = T.done,
            T.error = T.fail,
            d.url = ((e || d.url || ce.href) + "").replace(de, "").replace(ve, ce.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = h.trim(d.dataType || "*").toLowerCase().match(j) || [""],
            null == d.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = d.url,
                    c.href = c.href,
                    d.crossDomain = xe.protocol + "//" + xe.host != c.protocol + "//" + c.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = h.param(d.data, d.traditional)),
            Ce(me, d, n, T),
            2 === w)
                return T;
            for (p in (u = h.event && d.global) && 0 == h.active++ && h.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !ge.test(d.type),
            r = d.url,
            d.hasContent || (d.data && (r = d.url += (pe.test(r) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (d.url = he.test(r) ? r.replace(he, "$1_=" + ue++) : r + (pe.test(r) ? "&" : "?") + "_=" + ue++)),
            d.ifModified && (h.lastModified[r] && T.setRequestHeader("If-Modified-Since", h.lastModified[r]),
            h.etag[r] && T.setRequestHeader("If-None-Match", h.etag[r])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType),
            T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + be + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                T.setRequestHeader(p, d.headers[p]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, T, d) || 2 === w))
                return T.abort();
            for (p in C = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                T[p](d[p]);
            if (o = Ce(ye, d, n, T)) {
                if (T.readyState = 1,
                u && g.trigger("ajaxSend", [T, d]),
                2 === w)
                    return T;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    w = 1,
                    o.send(b, k)
                } catch (t) {
                    if (!(2 > w))
                        throw t;
                    k(-1, t)
                }
            } else
                k(-1, "No Transport");
            function k(e, n, i, s) {
                var c, p, b, x, C, k = n;
                2 !== w && (w = 2,
                l && t.clearTimeout(l),
                o = void 0,
                a = s || "",
                T.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                i && (x = function(t, e, n) {
                    for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    return r ? (r !== l[0] && l.unshift(r),
                    n[r]) : void 0
                }(d, T, i)),
                x = function(t, e, n, i) {
                    var o, r, a, s, l, c = {}, u = t.dataTypes.slice();
                    if (u[1])
                        for (a in t.converters)
                            c[a.toLowerCase()] = t.converters[a];
                    for (r = u.shift(); r; )
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e),
                        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(a = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0],
                                            u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && t.throws)
                                        e = a(e);
                                    else
                                        try {
                                            e = a(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: a ? t : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(d, x, T, c),
                c ? (d.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (h.lastModified[r] = C),
                (C = T.getResponseHeader("etag")) && (h.etag[r] = C)),
                204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state,
                p = x.data,
                c = !(b = x.error))) : (b = k,
                !e && k || (k = "error",
                0 > e && (e = 0))),
                T.status = e,
                T.statusText = (n || k) + "",
                c ? v.resolveWith(f, [p, k, T]) : v.rejectWith(f, [T, k, b]),
                T.statusCode(y),
                y = void 0,
                u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? p : b]),
                m.fireWith(f, [T, k]),
                u && (g.trigger("ajaxComplete", [T, d]),
                --h.active || h.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(t, e, n) {
            return h.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return h.get(t, void 0, e, "script")
        }
    }),
    h.each(["get", "post"], function(t, e) {
        h[e] = function(t, n, i, o) {
            return h.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            h.ajax(h.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, h.isPlainObject(t) && t))
        }
    }),
    h._evalUrl = function(t) {
        return h.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    h.fn.extend({
        wrapAll: function(t) {
            var e;
            return h.isFunction(t) ? this.each(function(e) {
                h(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = h(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this)
        },
        wrapInner: function(t) {
            return h.isFunction(t) ? this.each(function(e) {
                h(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = h(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = h.isFunction(t);
            return this.each(function(n) {
                h(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    h.expr.filters.hidden = function(t) {
        return !h.expr.filters.visible(t)
    }
    ,
    h.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    }
    ;
    var ke = /%20/g
      , $e = /\[\]$/
      , Se = /\r?\n/g
      , Ee = /^(?:submit|button|image|reset|file)$/i
      , _e = /^(?:input|select|textarea|keygen)/i;
    function Ae(t, e, n, i) {
        var o;
        if (h.isArray(e))
            h.each(e, function(e, o) {
                n || $e.test(t) ? i(t, o) : Ae(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== h.type(e))
            i(t, e);
        else
            for (o in e)
                Ae(t + "[" + o + "]", e[o], n, i)
    }
    h.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            e = h.isFunction(e) ? e() : null == e ? "" : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = h.ajaxSettings && h.ajaxSettings.traditional),
        h.isArray(t) || t.jquery && !h.isPlainObject(t))
            h.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                Ae(n, t[n], e, o);
        return i.join("&").replace(ke, "+")
    }
    ,
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = h.prop(this, "elements");
                return t ? h.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !h(this).is(":disabled") && _e.test(this.nodeName) && !Ee.test(t) && (this.checked || !Q.test(t))
            }).map(function(t, e) {
                var n = h(this).val();
                return null == n ? null : h.isArray(n) ? h.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Se, "\r\n")
                }
            }).get()
        }
    }),
    h.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var De = {
        0: 200,
        1223: 204
    }
      , Ne = h.ajaxSettings.xhr();
    p.cors = !!Ne && "withCredentials"in Ne,
    p.ajax = Ne = !!Ne,
    h.ajaxTransport(function(e) {
        var n, i;
        return p.cors || Ne && !e.crossDomain ? {
            send: function(o, r) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
                    for (a in e.xhrFields)
                        s[a] = e.xhrFields[a];
                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                o)
                    s.setRequestHeader(a, o[a]);
                n = function(t) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                        "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(De[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }
                ,
                s.onload = n(),
                i = s.onerror = n("error"),
                void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }
                ,
                n = n("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n)
                        throw t
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return h.globalEval(t),
                t
            }
        }
    }),
    h.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    h.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain)
            return {
                send: function(o, r) {
                    e = h("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && r("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    i.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var je = []
      , Le = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = je.pop() || h.expando + "_" + ue++;
            return this[t] = !0,
            t
        }
    }),
    h.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = !1 !== e.jsonp && (Le.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = h.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        s ? e[s] = e[s].replace(Le, "$1" + o) : !1 !== e.jsonp && (e.url += (pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
        e.converters["script json"] = function() {
            return a || h.error(o + " was not called"),
            a[0]
        }
        ,
        e.dataTypes[0] = "json",
        r = t[o],
        t[o] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            void 0 === r ? h(t).removeProp(o) : t[o] = r,
            e[o] && (e.jsonpCallback = n.jsonpCallback,
            je.push(o)),
            a && h.isFunction(r) && r(a[0]),
            a = r = void 0
        }),
        "script") : void 0
    }),
    h.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || i;
        var o = T.exec(t)
          , r = !n && [];
        return o ? [e.createElement(o[1])] : (o = nt([t], e, r),
        r && r.length && h(r).remove(),
        h.merge([], o.childNodes))
    }
    ;
    var Oe = h.fn.load;
    function Ie(t) {
        return h.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    h.fn.load = function(t, e, n) {
        if ("string" != typeof t && Oe)
            return Oe.apply(this, arguments);
        var i, o, r, a = this, s = t.indexOf(" ");
        return s > -1 && (i = h.trim(t.slice(s)),
        t = t.slice(0, s)),
        h.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (o = "POST"),
        a.length > 0 && h.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            a.html(i ? h("<div>").append(h.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        h.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    h.expr.filters.animated = function(t) {
        return h.grep(h.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    h.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, l, c = h.css(t, "position"), u = h(t), p = {};
            "static" === c && (t.style.position = "relative"),
            s = u.offset(),
            r = h.css(t, "top"),
            l = h.css(t, "left"),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = u.position()).top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            h.isFunction(e) && (e = e.call(t, n, h.extend({}, s))),
            null != e.top && (p.top = e.top - s.top + a),
            null != e.left && (p.left = e.left - s.left + o),
            "using"in e ? e.using.call(t, p) : u.css(p)
        }
    },
    h.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    h.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0], o = {
                top: 0,
                left: 0
            }, r = i && i.ownerDocument;
            return r ? (e = r.documentElement,
            h.contains(e, i) ? (o = i.getBoundingClientRect(),
            n = Ie(r),
            {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === h.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                h.nodeName(t[0], "html") || (i = t.offset()),
                i.top += h.css(t[0], "borderTopWidth", !0),
                i.left += h.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - h.css(n, "marginTop", !0),
                    left: e.left - i.left - h.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === h.css(t, "position"); )
                    t = t.offsetParent;
                return t || At
            })
        }
    }),
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        h.fn[t] = function(i) {
            return O(this, function(t, i, o) {
                var r = Ie(t);
                return void 0 === o ? r ? r[e] : t[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }),
    h.each(["top", "left"], function(t, e) {
        h.cssHooks[e] = Nt(p.pixelPosition, function(t, n) {
            return n ? (n = Dt(t, e),
            St.test(n) ? h(t).position()[e] + "px" : n) : void 0
        })
    }),
    h.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        h.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            h.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === o ? "margin" : "border");
                return O(this, function(e, n, i) {
                    var o;
                    return h.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? h.css(e, n, a) : h.style(e, n, i, a)
                }, e, r ? i : void 0, r, null)
            }
        })
    }),
    h.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    h.fn.andSelf = h.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return h
    });
    var Fe = t.jQuery
      , Re = t.$;
    return h.noConflict = function(e) {
        return t.$ === h && (t.$ = Re),
        e && t.jQuery === h && (t.jQuery = Fe),
        h
    }
    ,
    e || (t.jQuery = t.$ = h),
    h
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
var captchaShort, captchaContact, captchaSignin, captchaSignup, captchaForgotpassword, captchaShortlink, invisibleCaptchaShort, invisibleCaptchaContact, invisibleCaptchaSignin, invisibleCaptchaSignup, invisibleCaptchaForgotpassword, invisibleCaptchaShortlink;
!function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , i = this;
        return t(this).one("bsTransitionEnd", function() {
            n = !0
        }),
        setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e),
        this
    }
    ,
    t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap")
              , e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in e)
                if (void 0 !== t.style[n])
                    return {
                        end: e[n]
                    };
            return !1
        }(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]'
      , n = function(n) {
        t(n).on("click", e, this.close)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.close = function(e) {
        var i = t(this)
          , o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
        o = "#" === o ? [] : o;
        var r = t(document).find(o);
        function a() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(),
        r.length || (r = i.closest(".alert")),
        r.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (r.removeClass("in"),
        t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a())
    }
    ;
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)),
            "string" == typeof e && o[e].call(i)
        })
    }
    ,
    t.fn.alert.Constructor = n,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = i,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.isLoading = !1
    };
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.button")
              , r = "object" == typeof n && n;
            o || i.data("bs.button", o = new e(this,r)),
            "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }
    e.VERSION = "3.4.1",
    e.DEFAULTS = {
        loadingText: "loading..."
    },
    e.prototype.setState = function(e) {
        var n = "disabled"
          , i = this.$element
          , o = i.is("input") ? "val" : "html"
          , r = i.data();
        e += "Text",
        null == r.resetText && i.data("resetText", i[o]()),
        setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]),
            "loadingText" == e ? (this.isLoading = !0,
            i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    e.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var i = t.fn.button;
    t.fn.button = n,
    t.fn.button.Constructor = e,
    t.fn.button.noConflict = function() {
        return t.fn.button = i,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = t(e.target).closest(".btn");
        n.call(i, "toggle"),
        t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(),
        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.carousel")
              , r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n)
              , a = "string" == typeof n ? n : r.slide;
            o || i.data("bs.carousel", o = new e(this,r)),
            "number" == typeof n ? o.to(n) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    e.VERSION = "3.4.1",
    e.TRANSITION_DURATION = 600,
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    e.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    e.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
            return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }
    ,
    e.prototype.to = function(t) {
        var e = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
    }
    ,
    e.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    e.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    e.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    e.prototype.slide = function(n, i) {
        var o = this.$element.find(".item.active")
          , r = i || this.getItemForDirection(n, o)
          , a = this.interval
          , s = "next" == n ? "left" : "right"
          , l = this;
        if (r.hasClass("active"))
            return this.sliding = !1;
        var c = r[0]
          , u = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: s
        });
        if (this.$element.trigger(u),
        !u.isDefaultPrevented()) {
            if (this.sliding = !0,
            a && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(r)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n),
            "object" == typeof r && r.length && r[0].offsetWidth,
            o.addClass(s),
            r.addClass(s),
            o.one("bsTransitionEnd", function() {
                r.removeClass([n, s].join(" ")).addClass("active"),
                o.removeClass(["active", s].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"),
            r.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(d)),
            a && this.cycle(),
            this
        }
    }
    ;
    var i = t.fn.carousel;
    t.fn.carousel = n,
    t.fn.carousel.Constructor = e,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i,
        this
    }
    ;
    var o = function(e) {
        var i = t(this)
          , o = i.attr("href");
        o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
        var r = i.attr("data-target") || o
          , a = t(document).find(r);
        if (a.hasClass("carousel")) {
            var s = t.extend({}, a.data(), i.data())
              , l = i.attr("data-slide-to");
            l && (s.interval = !1),
            n.call(a, s),
            l && a.data("bs.carousel").to(l),
            e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    function n(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(i)
    }
    function i(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.collapse")
              , r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !o && r.toggle && /show|hide/.test(n) && (r.toggle = !1),
            o || i.data("bs.collapse", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.TRANSITION_DURATION = 350,
    e.DEFAULTS = {
        toggle: !0
    },
    e.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (n = o.data("bs.collapse")) && n.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r),
                !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"),
                    n || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }
    ,
    e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide.bs.collapse");
            if (this.$element.trigger(n),
            !n.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition)
                    return o.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }
    ,
    e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    e.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(n(o), o)
        }, this)).end()
    }
    ,
    e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var o = t.fn.collapse;
    t.fn.collapse = i,
    t.fn.collapse.Constructor = e,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var o = t(this);
        o.attr("data-target") || e.preventDefault();
        var r = n(o)
          , a = r.data("bs.collapse") ? "toggle" : o.data();
        i.call(r, a)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]'
      , n = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    function i(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent()
    }
    function o(n) {
        n && 3 === n.which || (t(".dropdown-backdrop").remove(),
        t(e).each(function() {
            var e = t(this)
              , o = i(e)
              , r = {
                relatedTarget: this
            };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)),
            n.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
            o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    n.VERSION = "3.4.1",
    n.prototype.toggle = function(e) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var r = i(n)
              , a = r.hasClass("open");
            if (o(),
            !a) {
                "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(e = t.Event("show.bs.dropdown", s)),
                e.isDefaultPrevented())
                    return;
                n.trigger("focus").attr("aria-expanded", "true"),
                r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }
    ,
    n.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var o = t(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !o.is(".disabled, :disabled")) {
                var r = i(o)
                  , a = r.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which)
                    return 27 == n.which && r.find(e).trigger("focus"),
                    o.trigger("click");
                var s = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (s.length) {
                    var l = s.index(n.target);
                    38 == n.which && 0 < l && l--,
                    40 == n.which && l < s.length - 1 && l++,
                    ~l || (l = 0),
                    s.eq(l).trigger("focus")
                }
            }
        }
    }
    ;
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new n(this)),
            "string" == typeof e && o[e].call(i)
        })
    }
    ,
    t.fn.dropdown.Constructor = n,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    function n(n, i) {
        return this.each(function() {
            var o = t(this)
              , r = o.data("bs.modal")
              , a = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
            r || o.data("bs.modal", r = new e(this,a)),
            "string" == typeof n ? r[n](i) : a.show && r.show(i)
        })
    }
    e.VERSION = "3.4.1",
    e.TRANSITION_DURATION = 300,
    e.BACKDROP_TRANSITION_DURATION = 150,
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    e.prototype.show = function(n) {
        var i = this
          , o = t.Event("show.bs.modal", {
            relatedTarget: n
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: n
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }
    ,
    e.prototype.hide = function(n) {
        n && n.preventDefault(),
        n = t.Event("hide.bs.modal"),
        this.$element.trigger(n),
        this.isShown && !n.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    e.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    e.prototype.backdrop = function(n) {
        var i = this
          , o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !n)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(),
                n && n()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a()
        } else
            n && n()
    }
    ,
    e.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    e.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n),
        t(this.fixedContent).each(function(e, i) {
            var o = i.style.paddingRight
              , r = t(i).css("padding-right");
            t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
        }))
    }
    ,
    e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
        t(this.fixedContent).each(function(e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"),
            n.style.paddingRight = i || ""
        })
    }
    ,
    e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var i = t.fn.modal;
    t.fn.modal = n,
    t.fn.modal.Constructor = e,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = i,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this)
          , o = i.attr("href")
          , r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")
          , a = t(document).find(r)
          , s = a.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, a.data(), i.data());
        i.is("a") && e.preventDefault(),
        a.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }),
        n.call(a, s, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"]
      , n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function r(e, r) {
        var a = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(a, r))
            return -1 === t.inArray(a, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(o));
        for (var s = t(r).filter(function(t, e) {
            return e instanceof RegExp
        }), l = 0, c = s.length; l < c; l++)
            if (a.match(s[l]))
                return !0;
        return !1
    }
    function a(e, n, i) {
        if (0 === e.length)
            return e;
        if (i && "function" == typeof i)
            return i(e);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return e;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = e;
        for (var a = t.map(n, function(t, e) {
            return e
        }), s = t(o.body).find("*"), l = 0, c = s.length; l < c; l++) {
            var u = s[l]
              , p = u.nodeName.toLowerCase();
            if (-1 !== t.inArray(p, a))
                for (var d = t.map(u.attributes, function(t) {
                    return t
                }), h = [].concat(n["*"] || [], n[p] || []), f = 0, g = d.length; f < g; f++)
                    r(d[f], h) || u.removeAttribute(d[f].nodeName);
            else
                u.parentNode.removeChild(u)
        }
        return o.body.innerHTML
    }
    var s = function(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    s.VERSION = "3.4.1",
    s.TRANSITION_DURATION = 150,
    s.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    },
    s.prototype.init = function(e, n, i) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
            var a = o[r];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin"
                  , l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    s.prototype.getDefaults = function() {
        return s.DEFAULTS
    }
    ,
    s.prototype.getOptions = function(n) {
        var i = this.$element.data();
        for (var o in i)
            i.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete i[o];
        return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = {
            show: n.delay,
            hide: n.delay
        }),
        n.sanitize && (n.template = a(n.template, n.whiteList, n.sanitizeFn)),
        n
    }
    ,
    s.prototype.getDelegateOptions = function() {
        var e = {}
          , n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }),
        e
    }
    ,
    s.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState)
            n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout),
            n.hoverState = "in",
            !n.options.delay || !n.options.delay.show)
                return n.show();
            n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)
        }
    }
    ,
    s.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    s.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }
    ,
    s.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)
                return;
            var i = this
              , o = this.tip()
              , r = this.getUID(this.type);
            this.setContent(),
            o.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , c = l.test(a);
            c && (a = a.replace(l, "") || "top"),
            o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition()
              , p = o[0].offsetWidth
              , d = o[0].offsetHeight;
            if (c) {
                var h = a
                  , f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > f.bottom ? "top" : "top" == a && u.top - d < f.top ? "bottom" : "right" == a && u.right + p > f.width ? "left" : "left" == a && u.left - p < f.left ? "right" : a,
                o.removeClass(h).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, p, d);
            this.applyPlacement(g, a);
            var v = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type),
                i.hoverState = null,
                "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(s.TRANSITION_DURATION) : v()
        }
    }
    ,
    s.prototype.applyPlacement = function(e, n) {
        var i = this.tip()
          , o = i[0].offsetWidth
          , r = i[0].offsetHeight
          , a = parseInt(i.css("margin-top"), 10)
          , s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0),
        isNaN(s) && (s = 0),
        e.top += a,
        e.left += s,
        t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = /top|bottom/.test(n)
          , d = p ? 2 * u.left - o + l : 2 * u.top - r + c
          , h = p ? "offsetWidth" : "offsetHeight";
        i.offset(e),
        this.replaceArrow(d, i[0][h], p)
    }
    ,
    s.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }
    ,
    s.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = a(e, this.options.whiteList, this.options.sanitizeFn)),
        t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    s.prototype.hide = function(e) {
        var n = this
          , i = t(this.$tip)
          , o = t.Event("hide.bs." + this.type);
        function r() {
            "in" != n.hoverState && i.detach(),
            n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type),
            e && e()
        }
        if (this.$element.trigger(o),
        !o.isDefaultPrevented())
            return i.removeClass("in"),
            t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(s.TRANSITION_DURATION) : r(),
            this.hoverState = null,
            this
    }
    ,
    s.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    s.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    s.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0]
          , i = "BODY" == n.tagName
          , o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement
          , a = i ? {
            top: 0,
            left: 0
        } : r ? null : e.offset()
          , s = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , l = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, s, l, a)
    }
    ,
    s.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }
    ,
    s.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var r = this.options.viewport && this.options.viewport.padding || 0
          , a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - a.scroll
              , l = e.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var c = e.left - r
              , u = e.left + r + n;
            c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u)
        }
        return o
    }
    ,
    s.prototype.getTitle = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }
    ,
    s.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()),
        document.getElementById(t); )
            ;
        return t
    }
    ,
    s.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    s.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    s.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    s.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    s.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    s.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    }
    ,
    s.prototype.sanitizeHtml = function(t) {
        return a(t, this.options.whiteList, this.options.sanitizeFn)
    }
    ;
    var l = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.tooltip")
              , o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new s(this,o)),
            "string" == typeof e && i[e]())
        })
    }
    ,
    t.fn.tooltip.Constructor = s,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = l,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1",
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() {
        return e.DEFAULTS
    }
    ,
    e.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e),
            "string" === i && (n = this.sanitizeHtml(n))),
            t.find(".popover-title").html(e),
            t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else
            t.find(".popover-title").text(e),
            t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    e.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.popover")
              , r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this,r)),
            "string" == typeof n && o[n]())
        })
    }
    ,
    t.fn.popover.Constructor = e,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = n,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body),
        this.$scrollElement = t(n).is(document.body) ? t(window) : t(n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.scrollspy")
              , r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    e.prototype.refresh = function() {
        var e = this
          , n = "offset"
          , i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position",
        i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = t(this)
              , o = e.data("target") || e.attr("href")
              , r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        i <= e)
            return a != (t = r[r.length - 1]) && this.activate(t);
        if (a && e < o[0])
            return this.activeTarget = null,
            this.clear();
        for (t = o.length; t--; )
            a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ,
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.tab");
            o || i.data("bs.tab", o = new e(this)),
            "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.TRANSITION_DURATION = 150,
    e.prototype.show = function() {
        var e = this.element
          , n = e.closest("ul:not(.dropdown-menu)")
          , i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")
              , r = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , a = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
            if (o.trigger(r),
            e.trigger(a),
            !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = t(document).find(i);
                this.activate(e.closest("li"), n),
                this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }
    ,
    e.prototype.activate = function(n, i, o) {
        var r = i.find("> .active")
          , a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (n[0].offsetWidth,
            n.addClass("in")) : n.removeClass("fade"),
            n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o && o()
        }
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(),
        r.removeClass("in")
    }
    ;
    var i = t.fn.tab;
    t.fn.tab = n,
    t.fn.tab.Constructor = e,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = i,
        this
    }
    ;
    var o = function(e) {
        e.preventDefault(),
        n.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.options = t.extend({}, e.DEFAULTS, i);
        var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(n),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.affix")
              , r = "object" == typeof n && n;
            o || i.data("bs.affix", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.RESET = "affix affix-top affix-bottom",
    e.DEFAULTS = {
        offset: 0,
        target: window
    },
    e.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop()
          , r = this.$element.offset()
          , a = this.$target.height();
        if (null != n && "top" == this.affixed)
            return o < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
        var s = null == this.affixed
          , l = s ? o : r.top;
        return null != n && o <= n ? "top" : null != i && t - i <= l + (s ? a : e) && "bottom"
    }
    ,
    e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }
    ,
    e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = this.$element.height()
              , i = this.options.offset
              , o = i.top
              , r = i.bottom
              , a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, n, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : "")
                  , c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c),
                c.isDefaultPrevented())
                    return;
                this.affixed = s,
                this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
                this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - n - r
            })
        }
    }
    ;
    var i = t.fn.affix;
    t.fn.affix = n,
    t.fn.affix.Constructor = e,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = i,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this)
              , i = e.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            n.call(e, i)
        })
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var o in t)
                    n.d(i, o, function(e) {
                        return t[e]
                    }
                    .bind(null, o));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 0)
    }([function(t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }()
          , r = l(n(1))
          , a = l(n(3))
          , s = l(n(4));
        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = function(t) {
            function e(t, n) {
                !function(t, n) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this);
                var i = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i.resolveOptions(n),
                i.listenClick(t),
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, a.default),
            o(e, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                    this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                    this.text = "function" == typeof t.text ? t.text : this.defaultText,
                    this.container = "object" === i(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(t) {
                    var e = this;
                    this.listener = (0,
                    s.default)(t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new r.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(t) {
                    return u("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function(t) {
                    var e = u("target", t);
                    if (e)
                        return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(t) {
                    return u("text", t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , e = "string" == typeof t ? [t] : t
                      , n = !!document.queryCommandSupported;
                    return e.forEach(function(t) {
                        n = n && !!document.queryCommandSupported(t)
                    }),
                    n
                }
            }]),
            e
        }();
        function u(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n))
                return e.getAttribute(n)
        }
        t.exports = c
    }
    , function(t, e, n) {
        "use strict";
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }(), a = (i = n(2)) && i.__esModule ? i : {
            default: i
        }, s = function() {
            function t(e) {
                !function(e, n) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this),
                this.resolveOptions(e),
                this.initSelection()
            }
            return r(t, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = t.action,
                    this.container = t.container,
                    this.emitter = t.emitter,
                    this.target = t.target,
                    this.text = t.text,
                    this.trigger = t.trigger,
                    this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var t = this
                      , e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return t.removeFake()
                    }
                    ,
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0,
                    a.default)(this.fakeElem),
                    this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                    this.fakeHandler = null,
                    this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0,
                    a.default)(this.target),
                    this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
            }, {
                key: "handleResult",
                value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = t,
                    "copy" !== this._action && "cut" !== this._action)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            t
        }();
        t.exports = s
    }
    , function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var i = window.getSelection()
                  , o = document.createRange();
                o.selectNodeContents(t),
                i.removeAllRanges(),
                i.addRange(o),
                e = i.toString()
            }
            return e
        }
    }
    , function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                var i = this;
                function o() {
                    i.off(t, o),
                    e.apply(n, arguments)
                }
                return o._ = e,
                this.on(t, o, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = n.length; i < o; i++)
                    n[i].fn.apply(n[i].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , i = n[t]
                  , o = [];
                if (i && e)
                    for (var r = 0, a = i.length; r < a; r++)
                        i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
                return o.length ? n[t] = o : delete n[t],
                this
            }
        },
        t.exports = n
    }
    , function(t, e, n) {
        var i = n(5)
          , o = n(6);
        t.exports = function(t, e, n) {
            if (!t && !e && !n)
                throw new Error("Missing required arguments");
            if (!i.string(e))
                throw new TypeError("Second argument must be a String");
            if (!i.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (i.node(t))
                return d = e,
                h = n,
                (p = t).addEventListener(d, h),
                {
                    destroy: function() {
                        p.removeEventListener(d, h)
                    }
                };
            if (i.nodeList(t))
                return l = t,
                c = e,
                u = n,
                Array.prototype.forEach.call(l, function(t) {
                    t.addEventListener(c, u)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(l, function(t) {
                            t.removeEventListener(c, u)
                        })
                    }
                };
            if (i.string(t))
                return r = t,
                a = e,
                s = n,
                o(document.body, r, a, s);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var r, a, s, l, c, u, p, d, h
        }
    }
    , function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in t && (0 === t.length || e.node(t[0]))
        }
        ,
        e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , function(t, e, n) {
        var i = n(7);
        function o(t, e, n, o, r) {
            var a = function(t, e, n, o) {
                return function(n) {
                    n.delegateTarget = i(n.target, e),
                    n.delegateTarget && o.call(t, n)
                }
            }
            .apply(this, arguments);
            return t.addEventListener(n, a, r),
            {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }
        t.exports = function(t, e, n, i, r) {
            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return o(t, e, n, i, r)
            }))
        }
    }
    , function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
    }
    ])
}),
function(t) {
    t.fn.conditionize = function(e) {
        var n = t.extend({
            hideJS: !0
        }, e);
        return t.fn.eval = function(t, e, n) {
            switch (n) {
            case "==":
                return t == e;
            case "!=":
                return t != e;
            case "<=":
                return t <= e;
            case "<":
                return t < e;
            case ">=":
                return t >= e;
            case ">":
                return t > e;
            case "in":
                return e.includes(t)
            }
        }
        ,
        t.fn.showOrHide = function(e, n, i, o) {
            t(e).is("select, input[type=text]") && t.fn.eval(t(e).val(), n, i) ? o.slideDown() : t(e + ":checked").filter(function(e, o) {
                return t.fn.eval(o.value, n, i)
            }).length > 0 ? o.slideDown() : o.slideUp()
        }
        ,
        this.each(function() {
            var e = t(this).data("cond-option").toString().replace(/(:|\.|\[|\]|,)/g, "\\$1")
              , i = "#" == e.substring(0, 1) ? e : "[name=" + e + "]"
              , o = t(this).data("cond-value")
              , r = t(this).data("cond-operator") ? t(this).data("cond-operator") : "=="
              , a = t(this);
            t(i).on("change", function() {
                t.fn.showOrHide(i, o, r, a)
            }),
            n.hideJS && t(this).hide(),
            t.fn.showOrHide(i, o, r, a)
        })
    }
}(jQuery),
window.onload = function() {
    if ("yes" !== app_vars.enable_captcha)
        return !0;
    "securimage" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaShort",
        success: function(t, e) {
            $("#captchaShort").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    }),
    "yes" === app_vars.captcha_contact && $("#captchaContact").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaContact",
        success: function(t, e) {
            $("#captchaContact").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    }),
    "yes" === app_vars.captcha_signin && $("#captchaSignin").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaSignin",
        success: function(t, e) {
            $("#captchaSignin").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    }),
    "yes" === app_vars.captcha_signup && $("#captchaSignup").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaSignup",
        success: function(t, e) {
            $("#captchaSignup").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    }),
    "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaForgotpassword",
        success: function(t, e) {
            $("#captchaForgotpassword").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    }),
    "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && $.ajax({
        type: "GET",
        url: app_vars.current_url + "securimage/render/captchaShortlink",
        success: function(t, e) {
            $("#captchaShortlink").html(t)
        },
        error: function() {
            console.log("Securimage can not be loaded")
        }
    })),
    "solvemedia" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && (captchaShort = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaShort", {
        multi: !0,
        id: "captchaShort"
    })),
    "yes" === app_vars.captcha_contact && $("#captchaContact").length && (captchaContact = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaContact", {
        multi: !0,
        id: "captchaContact"
    })),
    "yes" === app_vars.captcha_signin && $("#captchaSignin").length && (captchaSignin = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaSignin", {
        multi: !0,
        id: "captchaSignin"
    })),
    "yes" === app_vars.captcha_signup && $("#captchaSignup").length && (captchaSignup = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaSignup", {
        multi: !0,
        id: "captchaSignup"
    })),
    "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && (captchaForgotpassword = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaForgotpassword", {
        multi: !0,
        id: "captchaForgotpassword"
    })),
    "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && (captchaShortlink = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaShortlink", {
        multi: !0,
        id: "captchaShortlink"
    })))
}
;
var onloadRecaptchaCallback = function() {
    if ("yes" !== app_vars.enable_captcha)
        return !0;
    "recaptcha" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && ($("#shorten .btn-captcha").attr("disabled", "disabled"),
    captchaShort = grecaptcha.render("captchaShort", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#shorten .btn-captcha").removeAttr("disabled")
        }
    })),
    "yes" === app_vars.captcha_contact && $("#captchaContact").length && ($("#contact-form .btn-captcha").attr("disabled", "disabled"),
    captchaContact = grecaptcha.render("captchaContact", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#contact-form .btn-captcha").removeAttr("disabled")
        }
    })),
    "yes" === app_vars.captcha_signin && $("#captchaSignin").length && ($("#signin-form .btn-captcha").attr("disabled", "disabled"),
    captchaSignin = grecaptcha.render("captchaSignin", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#signin-form .btn-captcha").removeAttr("disabled")
        }
    })),
    "yes" === app_vars.captcha_signup && $("#captchaSignup").length && ($("#signup-form .btn-captcha").attr("disabled", "disabled"),
    captchaSignup = grecaptcha.render("captchaSignup", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#signup-form .btn-captcha").removeAttr("disabled")
        }
    })),
    "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && ($("#forgotpassword-form .btn-captcha").attr("disabled", "disabled"),
    captchaForgotpassword = grecaptcha.render("captchaForgotpassword", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#forgotpassword-form .btn-captcha").removeAttr("disabled")
        }
    })),
    "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && ($("#link-view .btn-captcha").attr("disabled", "disabled"),
    captchaShortlink = grecaptcha.render("captchaShortlink", {
        sitekey: app_vars.reCAPTCHA_site_key,
        callback: function(t) {
            $("#link-view .btn-captcha").removeAttr("disabled")
        }
    }))),
    "invisible-recaptcha" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && (invisibleCaptchaShort = grecaptcha.render("captchaShort", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            grecaptcha.getResponse(invisibleCaptchaShort) && $("#shorten").addClass("captcha-done").submit()
        }
    }),
    $("#shorten").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaShort) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaShort))
    })),
    "yes" === app_vars.captcha_contact && $("#captchaContact").length && (invisibleCaptchaContact = grecaptcha.render("captchaContact", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            grecaptcha.getResponse(invisibleCaptchaContact) && $("#contact-form").addClass("captcha-done").submit()
        }
    }),
    $("#contact-form").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaContact) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaContact))
    })),
    "yes" === app_vars.captcha_signin && $("#captchaSignin").length && (invisibleCaptchaSignin = grecaptcha.render("captchaSignin", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            $("#signin-form").submit()
        }
    }),
    $("#signin-form").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaSignin) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaSignin))
    })),
    "yes" === app_vars.captcha_signup && $("#captchaSignup").length && (invisibleCaptchaSignup = grecaptcha.render("captchaSignup", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            $("#signup-form").submit()
        }
    }),
    $("#signup-form").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaSignup) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaSignup))
    })),
    "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && (invisibleCaptchaForgotpassword = grecaptcha.render("captchaForgotpassword", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            $("#forgotpassword-form").submit()
        }
    }),
    $("#forgotpassword-form").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaForgotpassword) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaForgotpassword))
    })),
    "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && (invisibleCaptchaShortlink = grecaptcha.render("captchaShortlink", {
        sitekey: app_vars.invisible_reCAPTCHA_site_key,
        size: "invisible",
        callback: function(t) {
            $("#link-view").submit()
        }
    }),
    $("#link-view").submit(function(t) {
        grecaptcha.getResponse(invisibleCaptchaShortlink) || (t.preventDefault(),
        grecaptcha.execute(invisibleCaptchaShortlink))
    })))
};
function setCookie(t, e, n) {
    var i = new Date;
    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
    var o = "expires=" + i.toUTCString();
    document.cookie = t + "=" + e + ";" + o + ";path=/"
}
function getCookie(t) {
    for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
        for (var o = n[i]; " " === o.charAt(0); )
            o = o.substring(1);
        if (0 === o.indexOf(e))
            return o.substring(e.length, o.length)
    }
    return ""
}
var go_popup = $("#go-popup");
function checkAdblockUser() {
    if ("1" !== getCookie("ab")) {
        document.cookie = "ab=2; path=/";
        var t = $("#ad-banner");
        if ((0 === t.filter(":visible").length || t.filter(":hidden").length > 0 || 0 === t.height()) && (document.cookie = "ab=1; path=/",
        "1" === app_vars.force_disable_adblock)) {
            var e = '<div class="alert alert-danger" style="display: inline-block;">' + app_vars.please_disable_adblock + "</div>";
            $("#link-view").replaceWith(e),
            $(".banner-page a.get-link").replaceWith(e),
            $(".interstitial-page div.skip-ad").replaceWith(e)
        }
    }
}
function checkAdsbypasserUser() {
    if ("1" !== getCookie("ab")) {
        var t = document.title.split(" ").splice(-1)[0];
        document.cookie = "ab=2; path=/",
        ["AdsBypasser", "SafeBrowse"].indexOf(t) >= 0 && (document.cookie = "ab=1; path=/")
    }
}
function checkPrivateMode() {
    "function" == typeof Promise && new Promise(function(t) {
        var e, n = function() {
            t(!0)
        }, i = function() {
            t(!1)
        };
        window.webkitRequestFileSystem ? webkitRequestFileSystem(0, 0, i, n) : "MozAppearance"in document.documentElement.style ? ((e = indexedDB.open("test")).onerror = n,
        e.onsuccess = i) : /constructor/i.test(window.HTMLElement) ? function() {
            try {
                localStorage.length ? i() : (localStorage.x = 1,
                localStorage.removeItem("x"),
                i())
            } catch (t) {
                navigator.cookieEnabled ? n() : i()
            }
        }() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? i() : n()
    }
    ).then(function(t) {
        "1" !== getCookie("ab") && (document.cookie = "ab=2; path=/",
        t && (document.cookie = "ab=1; path=/"))
    })
}
go_popup.length && ($(document).one("click.adLinkFly.goPopupClick", function(t) {
    go_popup.submit()
}),
go_popup.one("submit.adLinkFly.goPopupSubmit", function(t) {
    var e = screen.height - 150
      , n = screen.width - 150
      , i = Number(screen.width / 2 - n / 2)
      , o = Number(screen.height / 2 - e / 2);
    window.open("about:blank", "Popup_Window", "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=" + n + ",height=" + e + ",left = " + i + ",top = " + o);
    this.target = "Popup_Window"
})),
document.cookie = "ab=0; path=/";
var body = $("body")
  , ad_type = "";
body.hasClass("banner-page") ? ad_type = "banner" : body.hasClass("interstitial-page") && (ad_type = "interstitial");
var counter_start_object = document;
"load" === app_vars.counter_start && (counter_start_object = window),
$(counter_start_object).on(app_vars.counter_start + ".adLinkFly.checkAdblockers", function(t) {
    checkAdsbypasserUser(),
    window.setTimeout(function() {
        checkAdblockUser()
    }, 1e3)
}),
$(counter_start_object).on(app_vars.counter_start + ".adLinkFly.counter", function(t) {
    if ("banner" === ad_type) {
        var e = $("#timer");
        window.setTimeout(function() {
            var t, n = 1e3 * app_vars.counter_value;
            t = setInterval(function() {
                window.blurred || (n -= 1e3,
                e.text(n / 1e3),
                n <= 0 && (clearInterval(t),
                $("#go-link").addClass("go-link"),
                $("#go-link.go-link").submit()))
            }, 1e3)
        }, 500),
        window.onblur = function() {
            window.blurred = !0
        }
        ,
        window.onfocus = function() {
            window.blurred = !1
        }
    }
    if ("interstitial" === ad_type) {
        var n = $(".skip-ad")
          , i = $(".skip-ad .counter");
        window.setTimeout(function() {
            var t, e = 1e3 * app_vars.counter_value;
            t = setInterval(function() {
                e -= 1e3,
                i.text(e / 1e3 + " s"),
                e <= 0 && (n.html('<a href="" class="btn" onclick="javascript: return false;">' + app_vars.skip_ad + "</a>"),
                clearInterval(t),
                $("#go-link").addClass("go-link"),
                $("#go-link.go-link").submit())
            }, 1e3)
        }, 500)
    }
}),
checkPrivateMode(),
$("#go-link").one("submit.adLinkFly.counterSubmit", function(t) {
    t.preventDefault();
    var e = $(this);
    if (e.hasClass("go-link")) {
        var n = e.find("button");
        $.ajax({
            dataType: "json",
            type: "POST",
            url: e.attr("action"),
            data: e.serialize(),
            beforeSend: function(t) {
                "banner" === ad_type && (n.attr("disabled", "disabled"),
                $("a.get-link").text(app_vars.getting_link)),
                "interstitial" === ad_type && n.attr("disabled", "disabled")
            },
            success: function(t, e, n) {
                t.url ? ("banner" === ad_type && $("a.get-link").attr("href", t.url).removeClass("disabled").text(app_vars.get_link),
                "interstitial" === ad_type && $(".skip-ad a").attr("href", t.url).removeAttr("onclick")) : alert(t.message)
            },
            error: function(t, e, n) {
                console.log("An error occured: " + t.status + " " + t.statusText)
            },
            complete: function(t, e) {}
        })
    }
}),
$("body").one("focus.adLinkFly.displayShortenCaptcha", "#shorten input#url", function(t) {
    $("#shorten .form-group.captcha").slideDown("slow")
}),
$(document).ready(function() {
    var t = window.location.href;
    "#" === t.substr(-1) && history.pushState("", document.title, t.substr(0, t.length - 1));
    var e = window.location.href;
    function n() {
        var t = 0;
        $("input[id^=campaign-items-][id$=-purchase]").each(function(e, n) {
            var i = $(n).val();
            t += 1e3 * i
        }),
        $("#total-visitors").text(t);
        var e = 0;
        $("input[id^=campaign-items-][id$=-purchase]").each(function(t, n) {
            var i = $(n).data("advertiser_price");
            e += i * $(n).val()
        }),
        $("#total-price").text(e.toFixed(2).toLocaleString(app_vars.language))
    }
    $(".sidebar-menu a").filter(function() {
        return this.href === e
    }).parents(".sidebar-menu li").addClass("active"),
    $(window).resize(function() {
        var t;
        t = $("header.main-header").outerHeight(),
        $("#frame").attr("height", $(window).height() - 0 - t + "px")
    }).resize(),
    n(),
    $("#campaign-create").change(function() {
        n()
    }),
    $(window).resize(function() {
        var t, e;
        t = $(".box-short"),
        e = $("button.shorten-button"),
        jQuery(window).width() <= 767 ? (t.css("display", "block"),
        e.css("display", "none")) : (t.css("display", "none"),
        e.css("display", "block"))
    }).resize(),
    $("button.shorten-button").click(function(t) {
        t.preventDefault(),
        $(".box-short").toggle("fast")
    })
}),
$('#form-settings a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
    var e = $(t.target).attr("href").substr(1);
    localStorage.setItem("settings_selectedTab", e)
});
var selectedTab = localStorage.getItem("settings_selectedTab");
$("#form-settings").length && null !== selectedTab ? $('#form-settings a[data-toggle="tab"][href="#' + selectedTab + '"]').tab("show") : $('#form-settings a[data-toggle="tab"]:first').tab("show"),
$(".shorten-member #shorten").on("submit.adLinkFly.memberShortLinkForm", function(t) {
    t.preventDefault();
    var e = $(this)
      , n = e.closest(".box-short")
      , i = e.find("button.btn-submit")
      , o = i.html();
    $.ajax({
        dataType: "json",
        type: "POST",
        url: e.attr("action"),
        data: e.serialize(),
        beforeSend: function(t) {
            i.attr("disabled", "disabled").html('<i class="fa fa-spinner fa-spin"></i>'),
            $('<div class="overlay"><i class="fa fa-refresh fa-spin"></i></div>').insertAfter(n.find(".box-body"))
        },
        success: function(t, e, n) {
            if (t.url) {
                var i = '<div class="form-group"><div class="input-group"><input class="form-control input-lg" value="' + t.url + '" readonly onfocus="javascript:this.select()" ><div class="input-group-addon copy-it" data-clipboard-text="' + t.url + '" data-toggle="tooltip" data-placement="left" title="' + app_vars.copy + '"><i class="fa fa-clone"></i></div></div></div>';
                $(".shorten.add-link-result").html(i).slideDown(),
                $('[data-toggle="tooltip"]').tooltip()
            } else {
                var o = '<div class="form-group"><p></p><div class="alert alert-danger" role="alert">' + t.message + "</div></div>";
                $(".shorten.add-link-result").html(o).slideDown()
            }
        },
        error: function(t, e, n) {
            alert("An error occured: " + t.status + " " + t.statusText)
        },
        complete: function(t, e) {
            n.find(".overlay").remove(),
            i.removeAttr("disabled").html(o)
        }
    })
}),
$(".shorten #shorten").on("submit.adLinkFly.homeShortLinkForm", function(t) {
    if (t.preventDefault(),
    null !== app_vars.user_id || "yes" !== app_vars.home_shortening_register) {
        if ("invisible-recaptcha" === app_vars.captcha_type && "yes" === app_vars.enable_captcha && "1" === app_vars.captcha_short_anonymous && $("#captchaContact").length && !$(this).hasClass("captcha-done"))
            return !1;
        var e = $(this)
          , n = e.find("button");
        n.html();
        $.ajax({
            dataType: "json",
            type: "POST",
            url: e.attr("action"),
            data: e.serialize(),
            beforeSend: function(t) {
                n.attr("disabled", "disabled"),
                $('<div class="shorten loader"></div>').insertAfter(e)
            },
            success: function(t, n, i) {
                if (t.url) {
                    e.slideUp();
                    var o = '<div class="form-group"><div class="input-group"><input class="form-control input-lg" value="' + t.url + '" readonly onfocus="javascript:this.select()" ><div class="input-group-addon copy-it" data-clipboard-text="' + t.url + '" data-toggle="tooltip" data-placement="bottom" title="' + app_vars.copy + '"><i class="fa fa-clone"></i></div><div class="input-group-addon reshort" data-toggle="tooltip" data-placement="bottom" title="Reshort"><i class="fa fa-refresh"></i></div></div></div>';
                    $(".shorten.add-link-result").html(o).slideDown()
                } else {
                    e.slideUp();
                    var r = '<div class="form-group"><div class="input-group"><input class="form-control input-lg" value="' + t.message + '" readonly ><div class="input-group-addon reshort" data-toggle="tooltip" data-placement="bottom" title="Reshort"><i class="fa fa-refresh"></i></div></div></div>';
                    $(".shorten.add-link-result").html(r).slideDown(),
                    void 0 !== window.captchaShort_captcha_img_audioObj && captchaShort_captcha_img_audioObj.refresh(),
                    document.getElementById("captchaShort_captcha_img").src = app_vars.current_url + "securimage/show?namespace=captchaShort&" + Math.random()
                }
            },
            error: function(t, e, n) {
                alert("An error occured: " + t.status + " " + t.statusText)
            },
            complete: function(t, i) {
                $('[data-toggle="tooltip"]').tooltip(),
                n.removeAttr("disabled"),
                $(".shorten.loader").remove(),
                e[0].reset();
                try {
                    grecaptcha.reset(captchaShort)
                } catch (t) {}
                try {
                    ACPuzzle.reload("captchaShort")
                } catch (t) {}
            }
        })
    } else
        window.location.href = app_vars.base_url + "auth/signup"
}),
$("header.shorten").on("click", ".reshort", function(t) {
    $(".shorten.add-link-result").html("").slideUp(),
    $(".shorten #shorten").slideDown()
}),
$('[data-toggle="tooltip"]').tooltip();
var clipboard = new ClipboardJS(".copy-it");
function setTooltip(t, e) {
    $(t).attr("data-original-title", e).tooltip("show")
}
function cookie_accept() {
    var t = '<div id="cookie-pop"><div class="container-fluid"><div class="col-xs-9"><div class="cookie-message">' + app_vars.cookie_message + '</div></div><div class="col-xs-3"><div class="cookie-confirm"><button id="got-cookie" class="btn btn-default" type="submit">' + app_vars.cookie_button + "</button></div></div></div></div>";
    $("body").append(t)
}
function _init() {
    "use strict";
    $.AdminLTE.layout = {
        activate: function() {
            var t = this;
            t.fix(),
            t.fixSidebar(),
            $("body, html, .wrapper").css("height", "auto"),
            $(window, ".wrapper").resize(function() {
                t.fix(),
                t.fixSidebar()
            })
        },
        fix: function() {
            $(".layout-boxed > .wrapper").css("overflow", "hidden");
            var t = $(".main-footer").outerHeight() || 0
              , e = $(".main-header").outerHeight() + t
              , n = $(window).height()
              , i = $(".sidebar").height() || 0;
            if ($("body").hasClass("fixed"))
                $(".content-wrapper, .right-side").css("min-height", n - t);
            else {
                var o;
                n >= i ? ($(".content-wrapper, .right-side").css("min-height", n - e),
                o = n - e) : ($(".content-wrapper, .right-side").css("min-height", i),
                o = i);
                var r = $($.AdminLTE.options.controlSidebarOptions.selector);
                void 0 !== r && r.height() > o && $(".content-wrapper, .right-side").css("min-height", r.height())
            }
        },
        fixSidebar: function() {
            return $("body").hasClass("fixed") ? (void 0 === $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"),
            void ($.AdminLTE.options.sidebarSlimScroll && void 0 !== $.fn.slimScroll && ($(".sidebar").slimScroll({
                destroy: !0
            }).height("auto"),
            $(".sidebar").slimScroll({
                height: $(window).height() - $(".main-header").height() + "px",
                color: "rgba(0,0,0,0.2)",
                size: "3px"
            })))) : void (void 0 !== $.fn.slimScroll && $(".sidebar").slimScroll({
                destroy: !0
            }).height("auto"))
        }
    },
    $.AdminLTE.pushMenu = {
        activate: function(t) {
            var e = $.AdminLTE.options.screenSizes;
            $(document).on("click", t, function(t) {
                t.preventDefault(),
                $(window).width() > e.sm - 1 ? $("body").hasClass("sidebar-collapse") ? $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu") : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu")
            }),
            $(".content-wrapper").click(function() {
                $(window).width() <= e.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open")
            }),
            ($.AdminLTE.options.sidebarExpandOnHover || $("body").hasClass("fixed") && $("body").hasClass("sidebar-mini")) && this.expandOnHover()
        },
        expandOnHover: function() {
            var t = this
              , e = $.AdminLTE.options.screenSizes.sm - 1;
            $(".main-sidebar").hover(function() {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > e && t.expand()
            }, function() {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > e && t.collapse()
            })
        },
        expand: function() {
            $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")
        },
        collapse: function() {
            $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")
        }
    },
    $.AdminLTE.tree = function(t) {
        var e = this
          , n = $.AdminLTE.options.animationSpeed;
        $(document).off("click", t + " li a").on("click", t + " li a", function(t) {
            var i = $(this)
              , o = i.next();
            if (o.is(".treeview-menu") && o.is(":visible") && !$("body").hasClass("sidebar-collapse"))
                o.slideUp(n, function() {
                    o.removeClass("menu-open")
                }),
                o.parent("li").removeClass("active");
            else if (o.is(".treeview-menu") && !o.is(":visible")) {
                var r = i.parents("ul").first();
                r.find("ul:visible").slideUp(n).removeClass("menu-open");
                var a = i.parent("li");
                o.slideDown(n, function() {
                    o.addClass("menu-open"),
                    r.find("li.active").removeClass("active"),
                    a.addClass("active"),
                    e.layout.fix()
                })
            }
            o.is(".treeview-menu") && t.preventDefault()
        })
    }
    ,
    $.AdminLTE.controlSidebar = {
        activate: function() {
            var t = this
              , e = $.AdminLTE.options.controlSidebarOptions
              , n = $(e.selector);
            $(e.toggleBtnSelector).on("click", function(i) {
                i.preventDefault(),
                n.hasClass("control-sidebar-open") || $("body").hasClass("control-sidebar-open") ? t.close(n, e.slide) : t.open(n, e.slide)
            });
            var i = $(".control-sidebar-bg");
            t._fix(i),
            $("body").hasClass("fixed") ? t._fixForFixed(n) : $(".content-wrapper, .right-side").height() < n.height() && t._fixForContent(n)
        },
        open: function(t, e) {
            e ? t.addClass("control-sidebar-open") : $("body").addClass("control-sidebar-open")
        },
        close: function(t, e) {
            e ? t.removeClass("control-sidebar-open") : $("body").removeClass("control-sidebar-open")
        },
        _fix: function(t) {
            var e = this;
            if ($("body").hasClass("layout-boxed")) {
                if (t.css("position", "absolute"),
                t.height($(".wrapper").height()),
                e.hasBindedResize)
                    return;
                $(window).resize(function() {
                    e._fix(t)
                }),
                e.hasBindedResize = !0
            } else
                t.css({
                    position: "fixed",
                    height: "auto"
                })
        },
        _fixForFixed: function(t) {
            t.css({
                position: "fixed",
                "max-height": "100%",
                overflow: "auto",
                "padding-bottom": "50px"
            })
        },
        _fixForContent: function(t) {
            $(".content-wrapper, .right-side").css("min-height", t.height())
        }
    },
    $.AdminLTE.boxWidget = {
        selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
        icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
        animationSpeed: $.AdminLTE.options.animationSpeed,
        activate: function(t) {
            var e = this;
            t || (t = document),
            $(t).on("click", e.selectors.collapse, function(t) {
                t.preventDefault(),
                e.collapse($(this))
            }),
            $(t).on("click", e.selectors.remove, function(t) {
                t.preventDefault(),
                e.remove($(this))
            })
        },
        collapse: function(t) {
            var e = this
              , n = t.parents(".box").first()
              , i = n.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
            n.hasClass("collapsed-box") ? (t.children(":first").removeClass(e.icons.open).addClass(e.icons.collapse),
            i.slideDown(e.animationSpeed, function() {
                n.removeClass("collapsed-box")
            })) : (t.children(":first").removeClass(e.icons.collapse).addClass(e.icons.open),
            i.slideUp(e.animationSpeed, function() {
                n.addClass("collapsed-box")
            }))
        },
        remove: function(t) {
            t.parents(".box").first().slideUp(this.animationSpeed)
        }
    }
}
if (clipboard.on("success", function(t) {
    setTooltip(t.trigger, app_vars.copied)
}),
app_vars.cookie_notification_bar && "" === getCookie("cookieLaw") && (cookie_accept(),
$("#cookie-pop").show(),
$("#got-cookie").click(function() {
    setCookie("cookieLaw", "got_it", 365),
    $("#cookie-pop").remove()
})),
"undefined" == typeof jQuery)
    throw new Error("AdminLTE requires jQuery");
$.AdminLTE = {},
$.AdminLTE.options = {
    navbarMenuSlimscroll: !0,
    navbarMenuSlimscrollWidth: "3px",
    navbarMenuHeight: "200px",
    animationSpeed: 500,
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: !0,
    sidebarSlimScroll: !0,
    sidebarExpandOnHover: !1,
    enableBoxRefresh: !0,
    enableBSToppltip: !0,
    BSTooltipSelector: "[data-toggle='tooltip']",
    enableFastclick: !1,
    enableControlTreeView: !0,
    enableControlSidebar: !0,
    controlSidebarOptions: {
        toggleBtnSelector: "[data-toggle='control-sidebar']",
        selector: ".control-sidebar",
        slide: !0
    },
    enableBoxWidget: !0,
    boxWidgetOptions: {
        boxWidgetIcons: {
            collapse: "fa-minus",
            open: "fa-plus",
            remove: "fa-times"
        },
        boxWidgetSelectors: {
            remove: '[data-widget="remove"]',
            collapse: '[data-widget="collapse"]'
        }
    },
    directChat: {
        enable: !0,
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    colors: {
        lightBlue: "#3c8dbc",
        red: "#f56954",
        green: "#00a65a",
        aqua: "#00c0ef",
        yellow: "#f39c12",
        blue: "#0073b7",
        navy: "#001F3F",
        teal: "#39CCCC",
        olive: "#3D9970",
        lime: "#01FF70",
        orange: "#FF851B",
        fuchsia: "#F012BE",
        purple: "#8E24AA",
        maroon: "#D81B60",
        black: "#222222",
        gray: "#d2d6de"
    },
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
},
$(function() {
    "use strict";
    $("body").removeClass("hold-transition"),
    "undefined" != typeof AdminLTEOptions && $.extend(!0, $.AdminLTE.options, AdminLTEOptions);
    var t = $.AdminLTE.options;
    _init(),
    $.AdminLTE.layout.activate(),
    t.enableControlTreeView && $.AdminLTE.tree(".sidebar"),
    t.enableControlSidebar && $.AdminLTE.controlSidebar.activate(),
    t.navbarMenuSlimscroll && void 0 !== $.fn.slimscroll && $(".navbar .menu").slimscroll({
        height: t.navbarMenuHeight,
        alwaysVisible: !1,
        size: t.navbarMenuSlimscrollWidth
    }).css("width", "100%"),
    t.sidebarPushMenu && $.AdminLTE.pushMenu.activate(t.sidebarToggleSelector),
    t.enableBSToppltip && $("body").tooltip({
        selector: t.BSTooltipSelector,
        container: "body"
    }),
    t.enableBoxWidget && $.AdminLTE.boxWidget.activate(),
    t.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body),
    t.directChat.enable && $(document).on("click", t.directChat.contactToggleSelector, function() {
        $(this).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open")
    }),
    $('.btn-group[data-toggle="btn-toggle"]').each(function() {
        var t = $(this);
        $(this).find(".btn").on("click", function(e) {
            t.find(".btn.active").removeClass("active"),
            $(this).addClass("active"),
            e.preventDefault()
        })
    })
}),
function(t) {
    "use strict";
    t.fn.boxRefresh = function(e) {
        var n = t.extend({
            trigger: ".refresh-btn",
            source: "",
            onLoadStart: function(t) {
                return t
            },
            onLoadDone: function(t) {
                return t
            }
        }, e)
          , i = t('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
        return this.each(function() {
            if ("" !== n.source) {
                var e = t(this);
                e.find(n.trigger).first().on("click", function(t) {
                    var o;
                    t.preventDefault(),
                    (o = e).append(i),
                    n.onLoadStart.call(o),
                    e.find(".box-body").load(n.source, function() {
                        var t;
                        (t = e).find(i).remove(),
                        n.onLoadDone.call(t)
                    })
                })
            } else
                window.console && window.console.log("Please specify a source first - boxRefresh()")
        })
    }
}(jQuery),
function(t) {
    "use strict";
    t.fn.activateBox = function() {
        t.AdminLTE.boxWidget.activate(this)
    }
    ,
    t.fn.toggleBox = function() {
        var e = t(t.AdminLTE.boxWidget.selectors.collapse, this);
        t.AdminLTE.boxWidget.collapse(e)
    }
    ,
    t.fn.removeBox = function() {
        var e = t(t.AdminLTE.boxWidget.selectors.remove, this);
        t.AdminLTE.boxWidget.remove(e)
    }
}(jQuery),
function(t) {
    "use strict";
    t.fn.todolist = function(e) {
        var n = t.extend({
            onCheck: function(t) {
                return t
            },
            onUncheck: function(t) {
                return t
            }
        }, e);
        return this.each(function() {
            void 0 !== t.fn.iCheck ? (t("input", this).on("ifChecked", function() {
                var e = t(this).parents("li").first();
                e.toggleClass("done"),
                n.onCheck.call(e)
            }),
            t("input", this).on("ifUnchecked", function() {
                var e = t(this).parents("li").first();
                e.toggleClass("done"),
                n.onUncheck.call(e)
            })) : t("input", this).on("change", function() {
                var e = t(this).parents("li").first();
                e.toggleClass("done"),
                t("input", e).is(":checked") ? n.onCheck.call(e) : n.onUncheck.call(e)
            })
        })
    }
}(jQuery);
