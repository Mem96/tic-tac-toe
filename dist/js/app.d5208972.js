(function () {
  'use strict';
  var n = {
      995: function (n, t, i) {
        var o = i(9242),
          e = i(3396),
          r = i(7139);
        const s = { id: 'app' },
          l = (0, e._)('h1', null, 'TIC TAC TOE', -1),
          h = { class: 'grid-container' },
          a = { class: 'showWinner' };
        function u(n, t, i, u, c, d) {
          const f = (0, e.up)('grid-component');
          return (
            (0, e.wg)(),
            (0, e.iD)('div', s, [
              l,
              (0, e._)('div', h, [
                (0, e.Wm)(
                  f,
                  { onWinnerChosen: d.showWinnerMethod, ref: 'gridComponent' },
                  null,
                  8,
                  ['onWinnerChosen']
                ),
              ]),
              (0, e.wy)(
                (0, e._)(
                  'div',
                  a,
                  [
                    (0, e._)('h2', null, (0, r.zw)(c.winnerMessage), 1),
                    (0, e._)(
                      'button',
                      {
                        id: 'button',
                        onClick:
                          t[0] ||
                          (t[0] = (...n) => d.resetGame && d.resetGame(...n)),
                      },
                      'Restart'
                    ),
                  ],
                  512
                ),
                [[o.F8, c.showWinner]]
              ),
            ])
          );
        }
        var c = i.p + 'img/up-to-x.f04f012b.png',
          d = i.p + 'img/up-to-o.d055d576.png';
        const f = { class: 'grid' },
          w = { class: 'XTurn', src: c, alt: 'Up to X' },
          p = { class: 'OTurn', src: d, alt: 'Up to O' };
        function g(n, t, i, r, s, l) {
          const h = (0, e.up)('cell-component');
          return (
            (0, e.wg)(),
            (0, e.iD)('div', f, [
              ((0, e.wg)(),
              (0, e.iD)(
                e.HY,
                null,
                (0, e.Ko)(3, (n, t) =>
                  (0, e._)('div', { key: n.id }, [
                    ((0, e.wg)(),
                    (0, e.iD)(
                      e.HY,
                      null,
                      (0, e.Ko)(3, (n, i) =>
                        (0, e._)('div', { key: n.id }, [
                          (0, e.Wm)(
                            h,
                            {
                              onClickOnCell: (n) => l.putSymbol(t, i),
                              value: s.board[t][i],
                              fontColor: s.fontColor[t][i],
                            },
                            null,
                            8,
                            ['onClickOnCell', 'value', 'fontColor']
                          ),
                        ])
                      ),
                      64
                    )),
                  ])
                ),
                64
              )),
              (0, e._)('div', null, [
                (0, e.wy)((0, e._)('img', w, null, 512), [
                  [o.F8, 'X' == this.whoseTurn],
                ]),
                (0, e.wy)((0, e._)('img', p, null, 512), [
                  [o.F8, 'O' == this.whoseTurn],
                ]),
              ]),
            ])
          );
        }
        i(6699);
        function b(n, t, i, o, s, l) {
          return (
            (0, e.wg)(),
            (0, e.iD)(
              'div',
              {
                onClick: t[0] || (t[0] = (t) => n.$emit('clickOnCell')),
                class: 'cell',
                style: (0, r.j5)({ color: i.fontColor }),
              },
              [(0, e._)('span', null, (0, r.zw)(i.value), 1)],
              4
            )
          );
        }
        var m = { props: { value: String, fontColor: String } },
          v = i(89);
        const C = (0, v.Z)(m, [['render', b]]);
        var y = C,
          T = {
            components: { CellComponent: y },
            data() {
              return {
                board: [
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', ''],
                ],
                fontColor: [
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', ''],
                ],
                stillPlaying: !0,
                whoseTurn: '',
                winner: '',
              };
            },
            methods: {
              putSymbol(n, t) {
                if (!this.stillPlaying) return !1;
                '' == this.board[n][t]
                  ? ((this.fontColor[n][t] = 'blue'),
                    (this.board[n][t] = 'X'),
                    (this.whoseTurn = 'O'))
                  : 'X' == this.board[n][t]
                  ? ((this.fontColor[n][t] = 'red'),
                    (this.board[n][t] = 'O'),
                    (this.whoseTurn = 'X'))
                  : ((this.board[n][t] = ''), (this.whoseTurn = 'X')),
                  console.log(this.board),
                  setTimeout(this.checkGameSituation, 3e3),
                  this.$forceUpdate();
              },
              checkForWin(n) {
                for (let t = 0; t < 3; t++)
                  this.board[t][0] == n &&
                    this.board[t][1] == n &&
                    this.board[t][2] == n &&
                    ((this.winner = n),
                    this.$emit('winnerChosen', n),
                    (this.stillPlaying = !1),
                    (this.whoseTurn = ''));
                for (let t = 0; t < 3; t++)
                  this.board[0][t] == n &&
                    this.board[1][t] == n &&
                    this.board[2][t] == n &&
                    ((this.winner = n),
                    this.$emit('winnerChosen', n),
                    (this.stillPlaying = !1),
                    (this.whoseTurn = ''));
                this.board[0][0] == n &&
                  this.board[1][1] == n &&
                  this.board[2][2] == n &&
                  ((this.winner = n),
                  this.$emit('winnerChosen', n),
                  (this.stillPlaying = !1),
                  (this.whoseTurn = '')),
                  this.board[0][2] == n &&
                    this.board[1][1] == n &&
                    this.board[2][0] == n &&
                    ((this.winner = n),
                    this.$emit('winnerChosen', n),
                    (this.stillPlaying = !1),
                    (this.whoseTurn = ''));
              },
              emptyBoard() {
                for (let n = 0; n < 3; n++)
                  for (let t = 0; t < 3; t++)
                    (this.board[n][t] = ''),
                      (this.fontColor[n][t] = ''),
                      this.$forceUpdate(),
                      (this.winner = ''),
                      (this.stillPlaying = !0);
              },
              checkGameSituation() {
                (this.stillPlaying = !1),
                  setTimeout(this.checkForWin, 4e3, 'X'),
                  setTimeout(this.checkForWin, 4e3, 'O');
                for (let n = 0; n < 3; n++)
                  this.board[n].includes('') && (this.stillPlaying = !0);
                0 == this.stillPlaying &&
                  '' == this.winner &&
                  (this.$emit('winnerChosen', 'none'), (this.whoseTurn = ''));
              },
            },
          };
        const O = (0, v.Z)(T, [['render', g]]);
        var _ = O,
          k = {
            name: 'app',
            components: { GridComponent: _ },
            data() {
              return { winner: '', winnerMessage: '', showWinner: !1 };
            },
            methods: {
              showWinnerMethod(n) {
                (this.winner = n),
                  (this.showWinner = !0),
                  'none' !== this.winner
                    ? (this.winnerMessage = `The winner is ${this.winner}`)
                    : (this.winnerMessage = 'No one wins. Try again.');
              },
              resetGame() {
                this.$refs.gridComponent.emptyBoard(),
                  (this.winner = ''),
                  (this.showWinner = !1);
              },
            },
          };
        const W = (0, v.Z)(k, [['render', u]]);
        var P = W;
        (0, o.ri)(P).mount('#app');
      },
    },
    t = {};
  function i(o) {
    var e = t[o];
    if (void 0 !== e) return e.exports;
    var r = (t[o] = { exports: {} });
    return n[o](r, r.exports, i), r.exports;
  }
  (i.m = n),
    (function () {
      var n = [];
      i.O = function (t, o, e, r) {
        if (!o) {
          var s = 1 / 0;
          for (u = 0; u < n.length; u++) {
            (o = n[u][0]), (e = n[u][1]), (r = n[u][2]);
            for (var l = !0, h = 0; h < o.length; h++)
              (!1 & r || s >= r) &&
              Object.keys(i.O).every(function (n) {
                return i.O[n](o[h]);
              })
                ? o.splice(h--, 1)
                : ((l = !1), r < s && (s = r));
            if (l) {
              n.splice(u--, 1);
              var a = e();
              void 0 !== a && (t = a);
            }
          }
          return t;
        }
        r = r || 0;
        for (var u = n.length; u > 0 && n[u - 1][2] > r; u--) n[u] = n[u - 1];
        n[u] = [o, e, r];
      };
    })(),
    (function () {
      i.n = function (n) {
        var t =
          n && n.__esModule
            ? function () {
                return n['default'];
              }
            : function () {
                return n;
              };
        return i.d(t, { a: t }), t;
      };
    })(),
    (function () {
      i.d = function (n, t) {
        for (var o in t)
          i.o(t, o) &&
            !i.o(n, o) &&
            Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (function () {
      i.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (n) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      };
    })(),
    (function () {
      i.p = '/tic-tac-toe/';
    })(),
    (function () {
      var n = { 143: 0 };
      i.O.j = function (t) {
        return 0 === n[t];
      };
      var t = function (t, o) {
          var e,
            r,
            s = o[0],
            l = o[1],
            h = o[2],
            a = 0;
          if (
            s.some(function (t) {
              return 0 !== n[t];
            })
          ) {
            for (e in l) i.o(l, e) && (i.m[e] = l[e]);
            if (h) var u = h(i);
          }
          for (t && t(o); a < s.length; a++)
            (r = s[a]), i.o(n, r) && n[r] && n[r][0](), (n[r] = 0);
          return i.O(u);
        },
        o = (self['webpackChunktic_tac_toe_r'] =
          self['webpackChunktic_tac_toe_r'] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = i.O(void 0, [998], function () {
    return i(995);
  });
  o = i.O(o);
})();
//# sourceMappingURL=app.d5208972.js.map
