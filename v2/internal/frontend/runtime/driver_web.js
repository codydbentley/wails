export const UseWebDriver = (bindings) => {
  return new Promise(function (resolve) {
    (() => {
      function E(t) {
        console.log("%c wails dev %c " + t + " ", "background: #aa0000; color: #fff; border-radius: 3px 0px 0px 3px; padding: 1px; font-size: 0.7rem", "background: #009900; color: #fff; border-radius: 0px 3px 3px 0px; padding: 1px; font-size: 0.7rem")
      }

      function p() {}
      var j = t => t;

      function G(t) {
        return t()
      }

      function tt() {
        return Object.create(null)
      }

      function b(t) {
        t.forEach(G)
      }

      function S(t) {
        return typeof t == "function"
      }

      function O(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
      }

      function et(t) {
        return Object.keys(t).length === 0
      }

      function nt(t, ...e) {
        if (t == null) return p;
        let n = t.subscribe(...e);
        return n.unsubscribe ? () => n.unsubscribe() : n
      }

      function it(t, e, n) {
        t.$$.on_destroy.push(nt(e, n))
      }
      var rt = typeof window != "undefined",
        Et = rt ? () => window.performance.now() : () => Date.now(),
        q = rt ? t => requestAnimationFrame(t) : p;
      var v = new Set;

      function ot(t) {
        v.forEach(e => {
          e.c(t) || (v.delete(e), e.f())
        }), v.size !== 0 && q(ot)
      }

      function jt(t) {
        let e;
        return v.size === 0 && q(ot), {
          promise: new Promise(n => {
            v.add(e = {
              c: t,
              f: n
            })
          }),
          abort() {
            v.delete(e)
          }
        }
      }
      var st = !1;

      function Ot() {
        st = !0
      }

      function Dt() {
        st = !1
      }

      function At(t, e) {
        t.appendChild(e)
      }

      function ct(t, e, n) {
        let i = K(t);
        if (!i.getElementById(e)) {
          let r = A("style");
          r.id = e, r.textContent = n, lt(i, r)
        }
      }

      function K(t) {
        if (!t) return document;
        let e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
        return e && e.host ? e : t.ownerDocument
      }

      function Bt(t) {
        let e = A("style");
        return lt(K(t), e), e
      }

      function lt(t, e) {
        At(t.head || t, e)
      }

      function P(t, e, n) {
        t.insertBefore(e, n || null)
      }

      function D(t) {
        t.parentNode.removeChild(t)
      }

      function A(t) {
        return document.createElement(t)
      }

      function Lt(t) {
        return document.createTextNode(t)
      }

      function ut() {
        return Lt("")
      }

      function at(t, e, n) {
        n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
      }

      function Jt(t) {
        return Array.from(t.childNodes)
      }

      function zt(t, e, n = !1) {
        let i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, n, !1, e), i
      }
      var R = new Set,
        B = 0;

      function Tt(t) {
        let e = 5381,
          n = t.length;
        for (; n--;) e = (e << 5) - e ^ t.charCodeAt(n);
        return e >>> 0
      }

      function ft(t, e, n, i, r, c, s, l = 0) {
        let a = 16.666 / i,
          o = `{
`;
        for (let g = 0; g <= 1; g += a) {
          let F = e + (n - e) * c(g);
          o += g * 100 + `%{${s(F,1-F)}}
`
        }
        let y = o + `100% {${s(n,1-n)}}
}`,
          f = `__svelte_${Tt(y)}_${l}`,
          u = K(t);
        R.add(u);
        let h = u.__svelte_stylesheet || (u.__svelte_stylesheet = Bt(t).sheet),
          _ = u.__svelte_rules || (u.__svelte_rules = {});
        _[f] || (_[f] = !0, h.insertRule(`@keyframes ${f} ${y}`, h.cssRules.length));
        let w = t.style.animation || "";
        return t.style.animation = `${w?`${w}, `:""}${f} ${i}ms linear ${r}ms 1 both`, B += 1, f
      }

      function Ht(t, e) {
        let n = (t.style.animation || "").split(", "),
          i = n.filter(e ? c => c.indexOf(e) < 0 : c => c.indexOf("__svelte") === -1),
          r = n.length - i.length;
        r && (t.style.animation = i.join(", "), B -= r, B || Gt())
      }

      function Gt() {
        q(() => {
          B || (R.forEach(t => {
            let e = t.__svelte_stylesheet,
              n = e.cssRules.length;
            for (; n--;) e.deleteRule(n);
            t.__svelte_rules = {}
          }), R.clear())
        })
      }
      var dt;

      function L(t) {
        dt = t
      }
      var $ = [];
      var ht = [],
        J = [],
        _t = [],
        qt = Promise.resolve(),
        N = !1;

      function Kt() {
        N || (N = !0, qt.then(pt))
      }

      function x(t) {
        J.push(t)
      }
      var W = !1,
        V = new Set;

      function pt() {
        if (!W) {
          W = !0;
          do {
            for (let t = 0; t < $.length; t += 1) {
              let e = $[t];
              L(e), Pt(e.$$)
            }
            for (L(null), $.length = 0; ht.length;) ht.pop()();
            for (let t = 0; t < J.length; t += 1) {
              let e = J[t];
              V.has(e) || (V.add(e), e())
            }
            J.length = 0
          } while ($.length);
          for (; _t.length;) _t.pop()();
          N = !1, W = !1, V.clear()
        }
      }

      function Pt(t) {
        if (t.fragment !== null) {
          t.update(), b(t.before_update);
          let e = t.dirty;
          t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x)
        }
      }
      var k;

      function Rt() {
        return k || (k = Promise.resolve(), k.then(() => {
          k = null
        })), k
      }

      function U(t, e, n) {
        t.dispatchEvent(zt(`${e?"intro":"outro"}${n}`))
      }
      var z = new Set,
        m;

      function mt() {
        m = {
          r: 0,
          c: [],
          p: m
        }
      }

      function yt() {
        m.r || b(m.c), m = m.p
      }

      function C(t, e) {
        t && t.i && (z.delete(t), t.i(e))
      }

      function X(t, e, n, i) {
        if (t && t.o) {
          if (z.has(t)) return;
          z.add(t), m.c.push(() => {
            z.delete(t), i && (n && t.d(1), i())
          }), t.o(e)
        }
      }
      var Nt = {
        duration: 0
      };

      function Z(t, e, n, i) {
        let r = e(t, n),
          c = i ? 0 : 1,
          s = null,
          l = null,
          a = null;

        function o() {
          a && Ht(t, a)
        }

        function y(u, h) {
          let _ = u.b - c;
          return h *= Math.abs(_), {
            a: c,
            b: u.b,
            d: _,
            duration: h,
            start: u.start,
            end: u.start + h,
            group: u.group
          }
        }

        function f(u) {
          let {
            delay: h = 0,
            duration: _ = 300,
            easing: w = j,
            tick: g = p,
            css: F
          } = r || Nt, H = {
            start: Et() + h,
            b: u
          };
          u || (H.group = m, m.r += 1), s || l ? l = H : (F && (o(), a = ft(t, c, u, _, h, w, F)), u && g(0, 1), s = y(H, _), x(() => U(t, u, "start")), jt(I => {
            if (l && I > l.start && (s = y(l, _), l = null, U(t, s.b, "start"), F && (o(), a = ft(t, c, s.b, s.duration, 0, w, r.css))), s) {
              if (I >= s.end) g(c = s.b, 1 - c), U(t, s.b, "end"), l || (s.b ? o() : --s.group.r || b(s.group.c)), s = null;
              else if (I >= s.start) {
                let It = I - s.start;
                c = s.a + s.d * w(It / s.duration), g(c, 1 - c)
              }
            }
            return !!(s || l)
          }))
        }
        return {
          run(u) {
            S(r) ? Rt().then(() => {
              r = r(), f(u)
            }) : f(u)
          },
          end() {
            o(), s = l = null
          }
        }
      }
      var oe = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
      var se = new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]);

      function Wt(t, e, n, i) {
        let {
          fragment: r,
          on_mount: c,
          on_destroy: s,
          after_update: l
        } = t.$$;
        r && r.m(e, n), i || x(() => {
          let a = c.map(G).filter(S);
          s ? s.push(...a) : b(a), t.$$.on_mount = []
        }), l.forEach(x)
      }

      function gt(t, e) {
        let n = t.$$;
        n.fragment !== null && (b(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
      }

      function Vt(t, e) {
        t.$$.dirty[0] === -1 && ($.push(t), Kt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
      }

      function bt(t, e, n, i, r, c, s, l = [-1]) {
        let a = dt;
        L(t);
        let o = t.$$ = {
          fragment: null,
          ctx: null,
          props: c,
          update: p,
          not_equal: r,
          bound: tt(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(a ? a.$$.context : e.context || []),
          callbacks: tt(),
          dirty: l,
          skip_bound: !1,
          root: e.target || a.$$.root
        };
        s && s(o.root);
        let y = !1;
        if (o.ctx = n ? n(t, e.props || {}, (f, u, ...h) => {
          let _ = h.length ? h[0] : u;
          return o.ctx && r(o.ctx[f], o.ctx[f] = _) && (!o.skip_bound && o.bound[f] && o.bound[f](_), y && Vt(t, f)), u
        }) : [], o.update(), y = !0, b(o.before_update), o.fragment = i ? i(o.ctx) : !1, e.target) {
          if (e.hydrate) {
            Ot();
            let f = Jt(e.target);
            o.fragment && o.fragment.l(f), f.forEach(D)
          } else o.fragment && o.fragment.c();
          e.intro && C(t.$$.fragment), Wt(t, e.target, e.anchor, e.customElement), Dt(), pt()
        }
        L(a)
      }
      var Ut;
      typeof HTMLElement == "function" && (Ut = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({
            mode: "open"
          })
        }
        connectedCallback() {
          let {
            on_mount: t
          } = this.$$;
          this.$$.on_disconnect = t.map(G).filter(S);
          for (let e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
        }
        attributeChangedCallback(t, e, n) {
          this[t] = n
        }
        disconnectedCallback() {
          b(this.$$.on_disconnect)
        }
        $destroy() {
          gt(this, 1), this.$destroy = p
        }
        $on(t, e) {
          let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
          return n.push(e), () => {
            let i = n.indexOf(e);
            i !== -1 && n.splice(i, 1)
          }
        }
        $set(t) {
          this.$$set && !et(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
      });
      var Q = class {
        $destroy() {
          gt(this, 1), this.$destroy = p
        }
        $on(e, n) {
          let i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return i.push(n), () => {
            let r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
          }
        }
        $set(e) {
          this.$$set && !et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
      };
      var M = [];

      function wt(t, e = p) {
        let n, i = new Set;

        function r(l) {
          if (O(t, l) && (t = l, n)) {
            let a = !M.length;
            for (let o of i) o[1](), M.push(o, t);
            if (a) {
              for (let o = 0; o < M.length; o += 2) M[o][0](M[o + 1]);
              M.length = 0
            }
          }
        }

        function c(l) {
          r(l(t))
        }

        function s(l, a = p) {
          let o = [l, a];
          return i.add(o), i.size === 1 && (n = e(r) || p), l(t), () => {
            i.delete(o), i.size === 0 && (n(), n = null)
          }
        }
        return {
          set: r,
          update: c,
          subscribe: s
        }
      }
      var T = wt(!1);

      function Ft() {
        T.set(!0)
      }

      function vt() {
        T.set(!1)
      }

      function Y(t, {
        delay: e = 0,
        duration: n = 400,
        easing: i = j
      } = {}) {
        let r = +getComputedStyle(t).opacity;
        return {
          delay: e,
          duration: n,
          easing: i,
          css: c => `opacity: ${c*r}`
        }
      }

      function Xt(t) {
        ct(t, "svelte-181h7z", `.wails-reconnect-overlay.svelte-181h7z{position:fixed;top:0;left:0;width:100%;height:100%;backdrop-filter:blur(2px) saturate(0%) contrast(50%) brightness(25%);z-index:999999\r
    }.wails-reconnect-overlay-content.svelte-181h7z{position:relative;top:50%;transform:translateY(-50%);margin:0;background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center\r
    }.wails-reconnect-overlay-loadingspinner.svelte-181h7z{pointer-events:none;width:2.5em;height:2.5em;border:.4em solid transparent;border-color:#f00 #eee0 #f00 #eee0;border-radius:50%;animation:svelte-181h7z-loadingspin 1s linear infinite;margin:auto;padding:2.5em\r
    }@keyframes svelte-181h7z-loadingspin{100%{transform:rotate(360deg)}}`)
      }

      function xt(t) {
        let e, n, i;
        return {
          c() {
            e = A("div"), e.innerHTML = '<div class="wails-reconnect-overlay-content svelte-181h7z"><div class="wails-reconnect-overlay-loadingspinner svelte-181h7z"></div></div>', at(e, "class", "wails-reconnect-overlay svelte-181h7z")
          },
          m(r, c) {
            P(r, e, c), i = !0
          },
          i(r) {
            i || (x(() => {
              n || (n = Z(e, Y, {
                duration: 300
              }, !0)), n.run(1)
            }), i = !0)
          },
          o(r) {
            n || (n = Z(e, Y, {
              duration: 300
            }, !1)), n.run(0), i = !1
          },
          d(r) {
            r && D(e), r && n && n.end()
          }
        }
      }

      function Zt(t) {
        let e, n, i = t[0] && xt(t);
        return {
          c() {
            i && i.c(), e = ut()
          },
          m(r, c) {
            i && i.m(r, c), P(r, e, c), n = !0
          },
          p(r, [c]) {
            r[0] ? i ? c & 1 && C(i, 1) : (i = xt(r), i.c(), C(i, 1), i.m(e.parentNode, e)) : i && (mt(), X(i, 1, 1, () => {
              i = null
            }), yt())
          },
          i(r) {
            n || (C(i), n = !0)
          },
          o(r) {
            X(i), n = !1
          },
          d(r) {
            i && i.d(r), r && D(e)
          }
        }
      }

      function Qt(t, e, n) {
        let i;
        return it(t, T, r => n(0, i = r)), [i]
      }
      var Mt = class extends Q {
          constructor(e) {
            super();
            bt(this, e, Qt, Zt, O, {}, Xt)
          }
        },
        St = Mt;
      var Yt = {};
      Yt.overlay = new St({
        target: document.body,
        anchor: document.querySelector("#wails-spinner")
      });
      var d = null,
        $t;
      window.onbeforeunload = function() {
        d && (d.onclose = function() {}, d.close(), d = null)
      };
      Ct();

      function te() {
        window.WailsInvoke = t => {
          d.send(t)
        }
      }

      var firstTime = true

      function ee() {
        if (firstTime) {
          resolve()
        }
        E("Connected to backend"), vt(), te(), clearInterval($t), d.onclose = ne, d.onmessage = ie
      }

      function ne() {
        E("Disconnected from backend"), d = null, Ft(), Ct()
      }

      function kt() {
        d == null && (d = new WebSocket("ws://" + window.location.hostname + ":34115/wails/ipc"), d.onopen = ee, d.onerror = function(t) {
          return t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), d = null, !1
        })
      }

      function Ct() {
        kt(), $t = setInterval(kt, 500)
      }

      function ie(t) {
        if (t.data === "reload") {
          window.runtime.WindowReload();
          return
        }
        switch (t.data[0]) {
          case "n":
            window.wails.EventsNotify(t.data.slice(1));
            break;
          case "c":
            let e = t.data.slice(1);
            window.wails.Callback(e);
            break;
          default:
            E("Unknown message: " + t.data)
        }
      }
    })();

    // RUNTIME
    (() => {
      var __defProp = Object.defineProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };

      // desktop/log.js
      var log_exports = {};
      __export(log_exports, {
        LogDebug: () => LogDebug,
        LogError: () => LogError,
        LogFatal: () => LogFatal,
        LogInfo: () => LogInfo,
        LogLevel: () => LogLevel,
        LogPrint: () => LogPrint,
        LogTrace: () => LogTrace,
        LogWarning: () => LogWarning,
        SetLogLevel: () => SetLogLevel
      });
      function sendLogMessage(level, message) {
        window.WailsInvoke("L" + level + message);
      }
      function LogTrace(message) {
        sendLogMessage("T", message);
      }
      function LogPrint(message) {
        sendLogMessage("P", message);
      }
      function LogDebug(message) {
        sendLogMessage("D", message);
      }
      function LogInfo(message) {
        sendLogMessage("I", message);
      }
      function LogWarning(message) {
        sendLogMessage("W", message);
      }
      function LogError(message) {
        sendLogMessage("E", message);
      }
      function LogFatal(message) {
        sendLogMessage("F", message);
      }
      function SetLogLevel(loglevel) {
        sendLogMessage("S", loglevel);
      }
      var LogLevel = {
        TRACE: 1,
        DEBUG: 2,
        INFO: 3,
        WARNING: 4,
        ERROR: 5
      };

      // desktop/events.js
      var Listener = class {
        constructor(callback, maxCallbacks) {
          maxCallbacks = maxCallbacks || -1;
          this.Callback = (data) => {
            callback.apply(null, data);
            if (maxCallbacks === -1) {
              return false;
            }
            maxCallbacks -= 1;
            return maxCallbacks === 0;
          };
        }
      };
      var eventListeners = {};
      function EventsOnMultiple(eventName, callback, maxCallbacks) {
        eventListeners[eventName] = eventListeners[eventName] || [];
        const thisListener = new Listener(callback, maxCallbacks);
        eventListeners[eventName].push(thisListener);
      }
      function EventsOn(eventName, callback) {
        EventsOnMultiple(eventName, callback, -1);
      }
      function EventsOnce(eventName, callback) {
        EventsOnMultiple(eventName, callback, 1);
      }
      function notifyListeners(eventData) {
        let eventName = eventData.name;
        if (eventListeners[eventName]) {
          const newEventListenerList = eventListeners[eventName].slice();
          for (let count = 0; count < eventListeners[eventName].length; count += 1) {
            const listener = eventListeners[eventName][count];
            let data = eventData.data;
            const destroy = listener.Callback(data);
            if (destroy) {
              newEventListenerList.splice(count, 1);
            }
          }
          eventListeners[eventName] = newEventListenerList;
        }
      }
      function EventsNotify(notifyMessage) {
        let message;
        try {
          message = JSON.parse(notifyMessage);
        } catch (e) {
          const error = "Invalid JSON passed to Notify: " + notifyMessage;
          throw new Error(error);
        }
        notifyListeners(message);
      }
      function EventsEmit(eventName) {
        const payload = {
          name: eventName,
          data: [].slice.apply(arguments).slice(1)
        };
        notifyListeners(payload);
        window.WailsInvoke("EE" + JSON.stringify(payload));
      }
      function EventsOff(eventName) {
        eventListeners.delete(eventName);
        window.WailsInvoke("EX" + eventName);
      }

      // desktop/calls.js
      var callbacks = {};
      function cryptoRandom() {
        var array = new Uint32Array(1);
        return window.crypto.getRandomValues(array)[0];
      }
      function basicRandom() {
        return Math.random() * 9007199254740991;
      }
      var randomFunc;
      if (window.crypto) {
        randomFunc = cryptoRandom;
      } else {
        randomFunc = basicRandom;
      }
      function Call(name, args, timeout) {
        if (timeout == null) {
          timeout = 0;
        }
        return new Promise(function(resolve, reject) {
          var callbackID;
          do {
            callbackID = name + "-" + randomFunc();
          } while (callbacks[callbackID]);
          var timeoutHandle;
          if (timeout > 0) {
            timeoutHandle = setTimeout(function() {
              reject(Error("Call to " + name + " timed out. Request ID: " + callbackID));
            }, timeout);
          }
          callbacks[callbackID] = {
            timeoutHandle,
            reject,
            resolve
          };
          try {
            const payload = {
              name,
              args,
              callbackID
            };
            window.WailsInvoke("C" + JSON.stringify(payload));
          } catch (e) {
            console.error(e);
          }
        });
      }
      function Callback(incomingMessage) {
        var message;
        try {
          message = JSON.parse(incomingMessage);
        } catch (e) {
          const error = `Invalid JSON passed to callback: ${e.message}. Message: ${incomingMessage}`;
          wails.LogDebug(error);
          throw new Error(error);
        }
        var callbackID = message.callbackid;
        var callbackData = callbacks[callbackID];
        if (!callbackData) {
          const error = `Callback '${callbackID}' not registered!!!`;
          console.error(error);
          throw new Error(error);
        }
        clearTimeout(callbackData.timeoutHandle);
        delete callbacks[callbackID];
        if (message.error) {
          callbackData.reject(message.error);
        } else {
          callbackData.resolve(message.result);
        }
      }

      // desktop/bindings.js
      window.go = {};
      function SetBindings(bindingsMap) {
        try {
          bindingsMap = JSON.parse(bindingsMap);
        } catch (e) {
          console.error(e);
        }
        window.go = window.go || {};
        Object.keys(bindingsMap).forEach((packageName) => {
          window.go[packageName] = window.go[packageName] || {};
          Object.keys(bindingsMap[packageName]).forEach((structName) => {
            window.go[packageName][structName] = window.go[packageName][structName] || {};
            Object.keys(bindingsMap[packageName][structName]).forEach((methodName) => {
              window.go[packageName][structName][methodName] = function() {
                let timeout = 0;
                function dynamic() {
                  const args = [].slice.call(arguments);
                  return Call([packageName, structName, methodName].join("."), args, timeout);
                }
                dynamic.setTimeout = function(newTimeout) {
                  timeout = newTimeout;
                };
                dynamic.getTimeout = function() {
                  return timeout;
                };
                return dynamic;
              }();
            });
          });
        });
      }

      // desktop/window.js
      var window_exports = {};
      __export(window_exports, {
        WindowCenter: () => WindowCenter,
        WindowFullscreen: () => WindowFullscreen,
        WindowGetPosition: () => WindowGetPosition,
        WindowGetSize: () => WindowGetSize,
        WindowHide: () => WindowHide,
        WindowMaximise: () => WindowMaximise,
        WindowMinimise: () => WindowMinimise,
        WindowReload: () => WindowReload,
        WindowSetMaxSize: () => WindowSetMaxSize,
        WindowSetMinSize: () => WindowSetMinSize,
        WindowSetPosition: () => WindowSetPosition,
        WindowSetRGBA: () => WindowSetRGBA,
        WindowSetSize: () => WindowSetSize,
        WindowSetTitle: () => WindowSetTitle,
        WindowShow: () => WindowShow,
        WindowUnFullscreen: () => WindowUnFullscreen,
        WindowUnmaximise: () => WindowUnmaximise,
        WindowUnminimise: () => WindowUnminimise
      });
      function WindowReload() {
        window.location.reload();
      }
      function WindowCenter() {
        window.WailsInvoke("Wc");
      }
      function WindowSetTitle(title) {
        window.WailsInvoke("WT" + title);
      }
      function WindowFullscreen() {
        window.WailsInvoke("WF");
      }
      function WindowUnFullscreen() {
        window.WailsInvoke("Wf");
      }
      function WindowSetSize(width, height) {
        window.WailsInvoke("Ws:" + width + ":" + height);
      }
      function WindowGetSize() {
        return Call(":wails:WindowGetSize");
      }
      function WindowSetMaxSize(width, height) {
        window.WailsInvoke("WZ:" + width + ":" + height);
      }
      function WindowSetMinSize(width, height) {
        window.WailsInvoke("Wz:" + width + ":" + height);
      }
      function WindowSetPosition(x, y) {
        window.WailsInvoke("Wp:" + x + ":" + y);
      }
      function WindowGetPosition() {
        return Call(":wails:WindowGetPos");
      }
      function WindowHide() {
        window.WailsInvoke("WH");
      }
      function WindowShow() {
        window.WailsInvoke("WS");
      }
      function WindowMaximise() {
        window.WailsInvoke("WM");
      }
      function WindowUnmaximise() {
        window.WailsInvoke("WU");
      }
      function WindowMinimise() {
        window.WailsInvoke("Wm");
      }
      function WindowUnminimise() {
        window.WailsInvoke("Wu");
      }
      function WindowSetRGBA(RGBA) {
        let rgba = JSON.stringify(RGBA);
        window.WailsInvoke("Wr:" + rgba);
      }

      // desktop/browser.js
      var browser_exports = {};
      __export(browser_exports, {
        BrowserOpenURL: () => BrowserOpenURL
      });
      function BrowserOpenURL(url) {
        window.WailsInvoke("BO:" + url);
      }

      // desktop/main.js
      function Quit() {
        window.WailsInvoke("Q");
      }
      window.runtime = {
        ...log_exports,
        ...window_exports,
        ...browser_exports,
        EventsOn,
        EventsOnce,
        EventsOnMultiple,
        EventsEmit,
        EventsOff,
        Quit
      };
      window.wails = {
        Callback,
        EventsNotify,
        SetBindings,
        eventListeners,
        callbacks
      };
      window.wails.SetBindings(bindings);
      delete window.wails.SetBindings;
      window.addEventListener("mousedown", (e) => {
        let currentElement = e.target;
        while (currentElement != null) {
          if (currentElement.hasAttribute("data-wails-no-drag")) {
            break;
          } else if (currentElement.hasAttribute("data-wails-drag")) {
            window.WailsInvoke("drag");
            break;
          }
          currentElement = currentElement.parentElement;
        }
      });
    })();
  });
};