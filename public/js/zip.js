const e = 0,
  t = 1,
  n = 2,
  i = -2,
  r = -3,
  a = -4,
  s = -5,
  o = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535,
  ],
  l = 1440,
  c = 0,
  u = 4,
  d = [
    96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48,
    0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0,
    8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8,
    120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8,
    8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227,
    83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36,
    0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0,
    8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0,
    8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80,
    7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9,
    196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66,
    0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0,
    8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256,
    0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193,
    80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0,
    9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8,
    56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8,
    136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7,
    43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9,
    169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28,
    0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108,
    0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0,
    8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81,
    7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9,
    229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8,
    58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
  ],
  f = [
    80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5,
    65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9,
    90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91,
    5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5,
    769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5,
    24577,
  ],
  _ = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
    83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
  ],
  h = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 112, 112,
  ],
  w = [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
    769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
  ],
  b = [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13,
  ],
  p = 15;
function m() {
  let t, n, i, o, c, u;
  function d(t, n, a, d, f, _, h, w, b, m, g) {
    let y, x, k, v, S, z, A, U, D, E, F, T, O, C, W;
    (E = 0), (S = a);
    do {
      i[t[n + E]]++, E++, S--;
    } while (0 !== S);
    if (i[0] == a) return (h[0] = -1), (w[0] = 0), e;
    for (U = w[0], z = 1; z <= p && 0 === i[z]; z++);
    for (A = z, U < z && (U = z), S = p; 0 !== S && 0 === i[S]; S--);
    for (k = S, U > S && (U = S), w[0] = U, C = 1 << z; z < S; z++, C <<= 1)
      if ((C -= i[z]) < 0) return r;
    if ((C -= i[S]) < 0) return r;
    for (i[S] += C, u[1] = z = 0, E = 1, O = 2; 0 != --S; )
      (u[O] = z += i[E]), O++, E++;
    (S = 0), (E = 0);
    do {
      0 !== (z = t[n + E]) && (g[u[z]++] = S), E++;
    } while (++S < a);
    for (
      a = u[k], u[0] = S = 0, E = 0, v = -1, T = -U, c[0] = 0, F = 0, W = 0;
      A <= k;
      A++
    )
      for (y = i[A]; 0 != y--; ) {
        for (; A > T + U; ) {
          if (
            (v++,
            (T += U),
            (W = k - T),
            (W = W > U ? U : W),
            (x = 1 << (z = A - T)) > y + 1 && ((x -= y + 1), (O = A), z < W))
          )
            for (; ++z < W && !((x <<= 1) <= i[++O]); ) x -= i[O];
          if (((W = 1 << z), m[0] + W > l)) return r;
          (c[v] = F = m[0]),
            (m[0] += W),
            0 !== v
              ? ((u[v] = S),
                (o[0] = z),
                (o[1] = U),
                (z = S >>> (T - U)),
                (o[2] = F - c[v - 1] - z),
                b.set(o, 3 * (c[v - 1] + z)))
              : (h[0] = F);
        }
        for (
          o[1] = A - T,
            E >= a
              ? (o[0] = 192)
              : g[E] < d
              ? ((o[0] = g[E] < 256 ? 0 : 96), (o[2] = g[E++]))
              : ((o[0] = _[g[E] - d] + 16 + 64), (o[2] = f[g[E++] - d])),
            x = 1 << (A - T),
            z = S >>> T;
          z < W;
          z += x
        )
          b.set(o, 3 * (F + z));
        for (z = 1 << (A - 1); 0 != (S & z); z >>>= 1) S ^= z;
        for (S ^= z, D = (1 << T) - 1; (S & D) != u[v]; )
          v--, (T -= U), (D = (1 << T) - 1);
      }
    return 0 !== C && 1 != k ? s : e;
  }
  function f(e) {
    let r;
    for (
      t ||
        ((t = []),
        (n = []),
        (i = new Int32Array(p + 1)),
        (o = []),
        (c = new Int32Array(p)),
        (u = new Int32Array(p + 1))),
        n.length < e && (n = []),
        r = 0;
      r < e;
      r++
    )
      n[r] = 0;
    for (r = 0; r < p + 1; r++) i[r] = 0;
    for (r = 0; r < 3; r++) o[r] = 0;
    c.set(i.subarray(0, p), 0), u.set(i.subarray(0, p + 1), 0);
  }
  (this.inflate_trees_bits = function (e, i, a, o, l) {
    let c;
    return (
      f(19),
      (t[0] = 0),
      (c = d(e, 0, 19, 19, null, null, a, i, o, t, n)),
      c == r
        ? (l.msg = "oversubscribed dynamic bit lengths tree")
        : (c != s && 0 !== i[0]) ||
          ((l.msg = "incomplete dynamic bit lengths tree"), (c = r)),
      c
    );
  }),
    (this.inflate_trees_dynamic = function (i, o, l, c, u, p, m, g, y) {
      let x;
      return (
        f(288),
        (t[0] = 0),
        (x = d(l, 0, i, 257, _, h, p, c, g, t, n)),
        x != e || 0 === c[0]
          ? (x == r
              ? (y.msg = "oversubscribed literal/length tree")
              : x != a && ((y.msg = "incomplete literal/length tree"), (x = r)),
            x)
          : (f(288),
            (x = d(l, i, o, 0, w, b, m, u, g, t, n)),
            x != e || (0 === u[0] && i > 257)
              ? (x == r
                  ? (y.msg = "oversubscribed distance tree")
                  : x == s
                  ? ((y.msg = "incomplete distance tree"), (x = r))
                  : x != a &&
                    ((y.msg = "empty distance tree with lengths"), (x = r)),
                x)
              : e)
      );
    });
}
m.inflate_trees_fixed = function (t, n, i, r) {
  return (t[0] = 9), (n[0] = 5), (i[0] = d), (r[0] = f), e;
};
const g = 0,
  y = 1,
  x = 2,
  k = 3,
  v = 4,
  S = 5,
  z = 6,
  A = 7,
  U = 8,
  D = 9;
function E() {
  const n = this;
  let a,
    s,
    l,
    c,
    u = 0,
    d = 0,
    f = 0,
    _ = 0,
    h = 0,
    w = 0,
    b = 0,
    p = 0,
    m = 0,
    E = 0;
  function F(n, i, a, s, l, c, u, d) {
    let f, _, h, w, b, p, m, g, y, x, k, v, S, z, A, U;
    (m = d.next_in_index),
      (g = d.avail_in),
      (b = u.bitb),
      (p = u.bitk),
      (y = u.write),
      (x = y < u.read ? u.read - y - 1 : u.end - y),
      (k = o[n]),
      (v = o[i]);
    do {
      for (; p < 20; ) g--, (b |= (255 & d.read_byte(m++)) << p), (p += 8);
      if (((f = b & k), (_ = a), (h = s), (U = 3 * (h + f)), 0 !== (w = _[U])))
        for (;;) {
          if (((b >>= _[U + 1]), (p -= _[U + 1]), 0 != (16 & w))) {
            for (w &= 15, S = _[U + 2] + (b & o[w]), b >>= w, p -= w; p < 15; )
              g--, (b |= (255 & d.read_byte(m++)) << p), (p += 8);
            for (f = b & v, _ = l, h = c, U = 3 * (h + f), w = _[U]; ; ) {
              if (((b >>= _[U + 1]), (p -= _[U + 1]), 0 != (16 & w))) {
                for (w &= 15; p < w; )
                  g--, (b |= (255 & d.read_byte(m++)) << p), (p += 8);
                if (
                  ((z = _[U + 2] + (b & o[w])),
                  (b >>= w),
                  (p -= w),
                  (x -= S),
                  y >= z)
                )
                  (A = y - z),
                    y - A > 0 && 2 > y - A
                      ? ((u.win[y++] = u.win[A++]),
                        (u.win[y++] = u.win[A++]),
                        (S -= 2))
                      : (u.win.set(u.win.subarray(A, A + 2), y),
                        (y += 2),
                        (A += 2),
                        (S -= 2));
                else {
                  A = y - z;
                  do {
                    A += u.end;
                  } while (A < 0);
                  if (((w = u.end - A), S > w)) {
                    if (((S -= w), y - A > 0 && w > y - A))
                      do {
                        u.win[y++] = u.win[A++];
                      } while (0 != --w);
                    else
                      u.win.set(u.win.subarray(A, A + w), y),
                        (y += w),
                        (A += w),
                        (w = 0);
                    A = 0;
                  }
                }
                if (y - A > 0 && S > y - A)
                  do {
                    u.win[y++] = u.win[A++];
                  } while (0 != --S);
                else
                  u.win.set(u.win.subarray(A, A + S), y),
                    (y += S),
                    (A += S),
                    (S = 0);
                break;
              }
              if (0 != (64 & w))
                return (
                  (d.msg = "invalid distance code"),
                  (S = d.avail_in - g),
                  (S = p >> 3 < S ? p >> 3 : S),
                  (g += S),
                  (m -= S),
                  (p -= S << 3),
                  (u.bitb = b),
                  (u.bitk = p),
                  (d.avail_in = g),
                  (d.total_in += m - d.next_in_index),
                  (d.next_in_index = m),
                  (u.write = y),
                  r
                );
              (f += _[U + 2]), (f += b & o[w]), (U = 3 * (h + f)), (w = _[U]);
            }
            break;
          }
          if (0 != (64 & w))
            return 0 != (32 & w)
              ? ((S = d.avail_in - g),
                (S = p >> 3 < S ? p >> 3 : S),
                (g += S),
                (m -= S),
                (p -= S << 3),
                (u.bitb = b),
                (u.bitk = p),
                (d.avail_in = g),
                (d.total_in += m - d.next_in_index),
                (d.next_in_index = m),
                (u.write = y),
                t)
              : ((d.msg = "invalid literal/length code"),
                (S = d.avail_in - g),
                (S = p >> 3 < S ? p >> 3 : S),
                (g += S),
                (m -= S),
                (p -= S << 3),
                (u.bitb = b),
                (u.bitk = p),
                (d.avail_in = g),
                (d.total_in += m - d.next_in_index),
                (d.next_in_index = m),
                (u.write = y),
                r);
          if (
            ((f += _[U + 2]),
            (f += b & o[w]),
            (U = 3 * (h + f)),
            0 === (w = _[U]))
          ) {
            (b >>= _[U + 1]), (p -= _[U + 1]), (u.win[y++] = _[U + 2]), x--;
            break;
          }
        }
      else (b >>= _[U + 1]), (p -= _[U + 1]), (u.win[y++] = _[U + 2]), x--;
    } while (x >= 258 && g >= 10);
    return (
      (S = d.avail_in - g),
      (S = p >> 3 < S ? p >> 3 : S),
      (g += S),
      (m -= S),
      (p -= S << 3),
      (u.bitb = b),
      (u.bitk = p),
      (d.avail_in = g),
      (d.total_in += m - d.next_in_index),
      (d.next_in_index = m),
      (u.write = y),
      e
    );
  }
  (n.init = function (e, t, n, i, r, o) {
    (a = g), (b = e), (p = t), (l = n), (m = i), (c = r), (E = o), (s = null);
  }),
    (n.proc = function (n, T, O) {
      let C,
        W,
        j,
        M,
        L,
        R,
        B,
        I = 0,
        N = 0,
        P = 0;
      for (
        P = T.next_in_index,
          M = T.avail_in,
          I = n.bitb,
          N = n.bitk,
          L = n.write,
          R = L < n.read ? n.read - L - 1 : n.end - L;
        ;

      )
        switch (a) {
          case g:
            if (
              R >= 258 &&
              M >= 10 &&
              ((n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              (O = F(b, p, l, m, c, E, n, T)),
              (P = T.next_in_index),
              (M = T.avail_in),
              (I = n.bitb),
              (N = n.bitk),
              (L = n.write),
              (R = L < n.read ? n.read - L - 1 : n.end - L),
              O != e)
            ) {
              a = O == t ? A : D;
              break;
            }
            (f = b), (s = l), (d = m), (a = y);
          case y:
            for (C = f; N < C; ) {
              if (0 === M)
                return (
                  (n.bitb = I),
                  (n.bitk = N),
                  (T.avail_in = M),
                  (T.total_in += P - T.next_in_index),
                  (T.next_in_index = P),
                  (n.write = L),
                  n.inflate_flush(T, O)
                );
              (O = e), M--, (I |= (255 & T.read_byte(P++)) << N), (N += 8);
            }
            if (
              ((W = 3 * (d + (I & o[C]))),
              (I >>>= s[W + 1]),
              (N -= s[W + 1]),
              (j = s[W]),
              0 === j)
            ) {
              (_ = s[W + 2]), (a = z);
              break;
            }
            if (0 != (16 & j)) {
              (h = 15 & j), (u = s[W + 2]), (a = x);
              break;
            }
            if (0 == (64 & j)) {
              (f = j), (d = W / 3 + s[W + 2]);
              break;
            }
            if (0 != (32 & j)) {
              a = A;
              break;
            }
            return (
              (a = D),
              (T.msg = "invalid literal/length code"),
              (O = r),
              (n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              n.inflate_flush(T, O)
            );
          case x:
            for (C = h; N < C; ) {
              if (0 === M)
                return (
                  (n.bitb = I),
                  (n.bitk = N),
                  (T.avail_in = M),
                  (T.total_in += P - T.next_in_index),
                  (T.next_in_index = P),
                  (n.write = L),
                  n.inflate_flush(T, O)
                );
              (O = e), M--, (I |= (255 & T.read_byte(P++)) << N), (N += 8);
            }
            (u += I & o[C]),
              (I >>= C),
              (N -= C),
              (f = p),
              (s = c),
              (d = E),
              (a = k);
          case k:
            for (C = f; N < C; ) {
              if (0 === M)
                return (
                  (n.bitb = I),
                  (n.bitk = N),
                  (T.avail_in = M),
                  (T.total_in += P - T.next_in_index),
                  (T.next_in_index = P),
                  (n.write = L),
                  n.inflate_flush(T, O)
                );
              (O = e), M--, (I |= (255 & T.read_byte(P++)) << N), (N += 8);
            }
            if (
              ((W = 3 * (d + (I & o[C]))),
              (I >>= s[W + 1]),
              (N -= s[W + 1]),
              (j = s[W]),
              0 != (16 & j))
            ) {
              (h = 15 & j), (w = s[W + 2]), (a = v);
              break;
            }
            if (0 == (64 & j)) {
              (f = j), (d = W / 3 + s[W + 2]);
              break;
            }
            return (
              (a = D),
              (T.msg = "invalid distance code"),
              (O = r),
              (n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              n.inflate_flush(T, O)
            );
          case v:
            for (C = h; N < C; ) {
              if (0 === M)
                return (
                  (n.bitb = I),
                  (n.bitk = N),
                  (T.avail_in = M),
                  (T.total_in += P - T.next_in_index),
                  (T.next_in_index = P),
                  (n.write = L),
                  n.inflate_flush(T, O)
                );
              (O = e), M--, (I |= (255 & T.read_byte(P++)) << N), (N += 8);
            }
            (w += I & o[C]), (I >>= C), (N -= C), (a = S);
          case S:
            for (B = L - w; B < 0; ) B += n.end;
            for (; 0 !== u; ) {
              if (
                0 === R &&
                (L == n.end &&
                  0 !== n.read &&
                  ((L = 0), (R = L < n.read ? n.read - L - 1 : n.end - L)),
                0 === R &&
                  ((n.write = L),
                  (O = n.inflate_flush(T, O)),
                  (L = n.write),
                  (R = L < n.read ? n.read - L - 1 : n.end - L),
                  L == n.end &&
                    0 !== n.read &&
                    ((L = 0), (R = L < n.read ? n.read - L - 1 : n.end - L)),
                  0 === R))
              )
                return (
                  (n.bitb = I),
                  (n.bitk = N),
                  (T.avail_in = M),
                  (T.total_in += P - T.next_in_index),
                  (T.next_in_index = P),
                  (n.write = L),
                  n.inflate_flush(T, O)
                );
              (n.win[L++] = n.win[B++]), R--, B == n.end && (B = 0), u--;
            }
            a = g;
            break;
          case z:
            if (
              0 === R &&
              (L == n.end &&
                0 !== n.read &&
                ((L = 0), (R = L < n.read ? n.read - L - 1 : n.end - L)),
              0 === R &&
                ((n.write = L),
                (O = n.inflate_flush(T, O)),
                (L = n.write),
                (R = L < n.read ? n.read - L - 1 : n.end - L),
                L == n.end &&
                  0 !== n.read &&
                  ((L = 0), (R = L < n.read ? n.read - L - 1 : n.end - L)),
                0 === R))
            )
              return (
                (n.bitb = I),
                (n.bitk = N),
                (T.avail_in = M),
                (T.total_in += P - T.next_in_index),
                (T.next_in_index = P),
                (n.write = L),
                n.inflate_flush(T, O)
              );
            (O = e), (n.win[L++] = _), R--, (a = g);
            break;
          case A:
            if (
              (N > 7 && ((N -= 8), M++, P--),
              (n.write = L),
              (O = n.inflate_flush(T, O)),
              (L = n.write),
              (R = L < n.read ? n.read - L - 1 : n.end - L),
              n.read != n.write)
            )
              return (
                (n.bitb = I),
                (n.bitk = N),
                (T.avail_in = M),
                (T.total_in += P - T.next_in_index),
                (T.next_in_index = P),
                (n.write = L),
                n.inflate_flush(T, O)
              );
            a = U;
          case U:
            return (
              (O = t),
              (n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              n.inflate_flush(T, O)
            );
          case D:
            return (
              (O = r),
              (n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              n.inflate_flush(T, O)
            );
          default:
            return (
              (O = i),
              (n.bitb = I),
              (n.bitk = N),
              (T.avail_in = M),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (n.write = L),
              n.inflate_flush(T, O)
            );
        }
    }),
    (n.free = function () {});
}
const F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  T = 0,
  O = 1,
  C = 2,
  W = 3,
  j = 4,
  M = 5,
  L = 6,
  R = 7,
  B = 8,
  I = 9;
function N(n, a) {
  const c = this;
  let u,
    d = T,
    f = 0,
    _ = 0,
    h = 0;
  const w = [0],
    b = [0],
    p = new E();
  let g = 0,
    y = new Int32Array(3 * l);
  const x = new m();
  (c.bitk = 0),
    (c.bitb = 0),
    (c.win = new Uint8Array(a)),
    (c.end = a),
    (c.read = 0),
    (c.write = 0),
    (c.reset = function (e, t) {
      t && (t[0] = 0),
        d == L && p.free(e),
        (d = T),
        (c.bitk = 0),
        (c.bitb = 0),
        (c.read = c.write = 0);
    }),
    c.reset(n, null),
    (c.inflate_flush = function (t, n) {
      let i, r, a;
      return (
        (r = t.next_out_index),
        (a = c.read),
        (i = (a <= c.write ? c.write : c.end) - a),
        i > t.avail_out && (i = t.avail_out),
        0 !== i && n == s && (n = e),
        (t.avail_out -= i),
        (t.total_out += i),
        t.next_out.set(c.win.subarray(a, a + i), r),
        (r += i),
        (a += i),
        a == c.end &&
          ((a = 0),
          c.write == c.end && (c.write = 0),
          (i = c.write - a),
          i > t.avail_out && (i = t.avail_out),
          0 !== i && n == s && (n = e),
          (t.avail_out -= i),
          (t.total_out += i),
          t.next_out.set(c.win.subarray(a, a + i), r),
          (r += i),
          (a += i)),
        (t.next_out_index = r),
        (c.read = a),
        n
      );
    }),
    (c.proc = function (n, a) {
      let s, l, k, v, S, z, A, U;
      for (
        v = n.next_in_index,
          S = n.avail_in,
          l = c.bitb,
          k = c.bitk,
          z = c.write,
          A = z < c.read ? c.read - z - 1 : c.end - z;
        ;

      ) {
        let D, E, N, P, V, q, H, K;
        switch (d) {
          case T:
            for (; k < 3; ) {
              if (0 === S)
                return (
                  (c.bitb = l),
                  (c.bitk = k),
                  (n.avail_in = S),
                  (n.total_in += v - n.next_in_index),
                  (n.next_in_index = v),
                  (c.write = z),
                  c.inflate_flush(n, a)
                );
              (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
            }
            switch (((s = 7 & l), (g = 1 & s), s >>> 1)) {
              case 0:
                (l >>>= 3),
                  (k -= 3),
                  (s = 7 & k),
                  (l >>>= s),
                  (k -= s),
                  (d = O);
                break;
              case 1:
                (D = []),
                  (E = []),
                  (N = [[]]),
                  (P = [[]]),
                  m.inflate_trees_fixed(D, E, N, P),
                  p.init(D[0], E[0], N[0], 0, P[0], 0),
                  (l >>>= 3),
                  (k -= 3),
                  (d = L);
                break;
              case 2:
                (l >>>= 3), (k -= 3), (d = W);
                break;
              case 3:
                return (
                  (l >>>= 3),
                  (k -= 3),
                  (d = I),
                  (n.msg = "invalid block type"),
                  (a = r),
                  (c.bitb = l),
                  (c.bitk = k),
                  (n.avail_in = S),
                  (n.total_in += v - n.next_in_index),
                  (n.next_in_index = v),
                  (c.write = z),
                  c.inflate_flush(n, a)
                );
            }
            break;
          case O:
            for (; k < 32; ) {
              if (0 === S)
                return (
                  (c.bitb = l),
                  (c.bitk = k),
                  (n.avail_in = S),
                  (n.total_in += v - n.next_in_index),
                  (n.next_in_index = v),
                  (c.write = z),
                  c.inflate_flush(n, a)
                );
              (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
            }
            if (((~l >>> 16) & 65535) != (65535 & l))
              return (
                (d = I),
                (n.msg = "invalid stored block lengths"),
                (a = r),
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            (f = 65535 & l), (l = k = 0), (d = 0 !== f ? C : 0 !== g ? R : T);
            break;
          case C:
            if (0 === S)
              return (
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            if (
              0 === A &&
              (z == c.end &&
                0 !== c.read &&
                ((z = 0), (A = z < c.read ? c.read - z - 1 : c.end - z)),
              0 === A &&
                ((c.write = z),
                (a = c.inflate_flush(n, a)),
                (z = c.write),
                (A = z < c.read ? c.read - z - 1 : c.end - z),
                z == c.end &&
                  0 !== c.read &&
                  ((z = 0), (A = z < c.read ? c.read - z - 1 : c.end - z)),
                0 === A))
            )
              return (
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            if (
              ((a = e),
              (s = f),
              s > S && (s = S),
              s > A && (s = A),
              c.win.set(n.read_buf(v, s), z),
              (v += s),
              (S -= s),
              (z += s),
              (A -= s),
              0 != (f -= s))
            )
              break;
            d = 0 !== g ? R : T;
            break;
          case W:
            for (; k < 14; ) {
              if (0 === S)
                return (
                  (c.bitb = l),
                  (c.bitk = k),
                  (n.avail_in = S),
                  (n.total_in += v - n.next_in_index),
                  (n.next_in_index = v),
                  (c.write = z),
                  c.inflate_flush(n, a)
                );
              (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
            }
            if (((_ = s = 16383 & l), (31 & s) > 29 || ((s >> 5) & 31) > 29))
              return (
                (d = I),
                (n.msg = "too many length or distance symbols"),
                (a = r),
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            if (((s = 258 + (31 & s) + ((s >> 5) & 31)), !u || u.length < s))
              u = [];
            else for (U = 0; U < s; U++) u[U] = 0;
            (l >>>= 14), (k -= 14), (h = 0), (d = j);
          case j:
            for (; h < 4 + (_ >>> 10); ) {
              for (; k < 3; ) {
                if (0 === S)
                  return (
                    (c.bitb = l),
                    (c.bitk = k),
                    (n.avail_in = S),
                    (n.total_in += v - n.next_in_index),
                    (n.next_in_index = v),
                    (c.write = z),
                    c.inflate_flush(n, a)
                  );
                (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
              }
              (u[F[h++]] = 7 & l), (l >>>= 3), (k -= 3);
            }
            for (; h < 19; ) u[F[h++]] = 0;
            if (((w[0] = 7), (s = x.inflate_trees_bits(u, w, b, y, n)), s != e))
              return (
                (a = s) == r && ((u = null), (d = I)),
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            (h = 0), (d = M);
          case M:
            for (; (s = _), !(h >= 258 + (31 & s) + ((s >> 5) & 31)); ) {
              let t, i;
              for (s = w[0]; k < s; ) {
                if (0 === S)
                  return (
                    (c.bitb = l),
                    (c.bitk = k),
                    (n.avail_in = S),
                    (n.total_in += v - n.next_in_index),
                    (n.next_in_index = v),
                    (c.write = z),
                    c.inflate_flush(n, a)
                  );
                (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
              }
              if (
                ((s = y[3 * (b[0] + (l & o[s])) + 1]),
                (i = y[3 * (b[0] + (l & o[s])) + 2]),
                i < 16)
              )
                (l >>>= s), (k -= s), (u[h++] = i);
              else {
                for (
                  U = 18 == i ? 7 : i - 14, t = 18 == i ? 11 : 3;
                  k < s + U;

                ) {
                  if (0 === S)
                    return (
                      (c.bitb = l),
                      (c.bitk = k),
                      (n.avail_in = S),
                      (n.total_in += v - n.next_in_index),
                      (n.next_in_index = v),
                      (c.write = z),
                      c.inflate_flush(n, a)
                    );
                  (a = e), S--, (l |= (255 & n.read_byte(v++)) << k), (k += 8);
                }
                if (
                  ((l >>>= s),
                  (k -= s),
                  (t += l & o[U]),
                  (l >>>= U),
                  (k -= U),
                  (U = h),
                  (s = _),
                  U + t > 258 + (31 & s) + ((s >> 5) & 31) ||
                    (16 == i && U < 1))
                )
                  return (
                    (u = null),
                    (d = I),
                    (n.msg = "invalid bit length repeat"),
                    (a = r),
                    (c.bitb = l),
                    (c.bitk = k),
                    (n.avail_in = S),
                    (n.total_in += v - n.next_in_index),
                    (n.next_in_index = v),
                    (c.write = z),
                    c.inflate_flush(n, a)
                  );
                i = 16 == i ? u[U - 1] : 0;
                do {
                  u[U++] = i;
                } while (0 != --t);
                h = U;
              }
            }
            if (
              ((b[0] = -1),
              (V = []),
              (q = []),
              (H = []),
              (K = []),
              (V[0] = 9),
              (q[0] = 6),
              (s = _),
              (s = x.inflate_trees_dynamic(
                257 + (31 & s),
                1 + ((s >> 5) & 31),
                u,
                V,
                q,
                H,
                K,
                y,
                n
              )),
              s != e)
            )
              return (
                s == r && ((u = null), (d = I)),
                (a = s),
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            p.init(V[0], q[0], y, H[0], y, K[0]), (d = L);
          case L:
            if (
              ((c.bitb = l),
              (c.bitk = k),
              (n.avail_in = S),
              (n.total_in += v - n.next_in_index),
              (n.next_in_index = v),
              (c.write = z),
              (a = p.proc(c, n, a)) != t)
            )
              return c.inflate_flush(n, a);
            if (
              ((a = e),
              p.free(n),
              (v = n.next_in_index),
              (S = n.avail_in),
              (l = c.bitb),
              (k = c.bitk),
              (z = c.write),
              (A = z < c.read ? c.read - z - 1 : c.end - z),
              0 === g)
            ) {
              d = T;
              break;
            }
            d = R;
          case R:
            if (
              ((c.write = z),
              (a = c.inflate_flush(n, a)),
              (z = c.write),
              (A = z < c.read ? c.read - z - 1 : c.end - z),
              c.read != c.write)
            )
              return (
                (c.bitb = l),
                (c.bitk = k),
                (n.avail_in = S),
                (n.total_in += v - n.next_in_index),
                (n.next_in_index = v),
                (c.write = z),
                c.inflate_flush(n, a)
              );
            d = B;
          case B:
            return (
              (a = t),
              (c.bitb = l),
              (c.bitk = k),
              (n.avail_in = S),
              (n.total_in += v - n.next_in_index),
              (n.next_in_index = v),
              (c.write = z),
              c.inflate_flush(n, a)
            );
          case I:
            return (
              (a = r),
              (c.bitb = l),
              (c.bitk = k),
              (n.avail_in = S),
              (n.total_in += v - n.next_in_index),
              (n.next_in_index = v),
              (c.write = z),
              c.inflate_flush(n, a)
            );
          default:
            return (
              (a = i),
              (c.bitb = l),
              (c.bitk = k),
              (n.avail_in = S),
              (n.total_in += v - n.next_in_index),
              (n.next_in_index = v),
              (c.write = z),
              c.inflate_flush(n, a)
            );
        }
      }
    }),
    (c.free = function (e) {
      c.reset(e, null), (c.win = null), (y = null);
    }),
    (c.set_dictionary = function (e, t, n) {
      c.win.set(e.subarray(t, t + n), 0), (c.read = c.write = n);
    }),
    (c.sync_point = function () {
      return d == O ? 1 : 0;
    });
}
const P = 32,
  V = 8,
  q = 0,
  H = 1,
  K = 2,
  Z = 3,
  G = 4,
  J = 5,
  Q = 6,
  X = 7,
  Y = 12,
  $ = 13,
  ee = [0, 0, 255, 255];
function te() {
  const a = this;
  function o(t) {
    return t && t.istate
      ? ((t.total_in = t.total_out = 0),
        (t.msg = null),
        (t.istate.mode = X),
        t.istate.blocks.reset(t, null),
        e)
      : i;
  }
  (a.mode = 0),
    (a.method = 0),
    (a.was = [0]),
    (a.need = 0),
    (a.marker = 0),
    (a.wbits = 0),
    (a.inflateEnd = function (t) {
      return a.blocks && a.blocks.free(t), (a.blocks = null), e;
    }),
    (a.inflateInit = function (t, n) {
      return (
        (t.msg = null),
        (a.blocks = null),
        n < 8 || n > 15
          ? (a.inflateEnd(t), i)
          : ((a.wbits = n), (t.istate.blocks = new N(t, 1 << n)), o(t), e)
      );
    }),
    (a.inflate = function (a, o) {
      let l, c;
      if (!a || !a.istate || !a.next_in) return i;
      const d = a.istate;
      for (o = o == u ? s : e, l = s; ; )
        switch (d.mode) {
          case q:
            if (0 === a.avail_in) return l;
            if (
              ((l = o),
              a.avail_in--,
              a.total_in++,
              (15 & (d.method = a.read_byte(a.next_in_index++))) != V)
            ) {
              (d.mode = $),
                (a.msg = "unknown compression method"),
                (d.marker = 5);
              break;
            }
            if (8 + (d.method >> 4) > d.wbits) {
              (d.mode = $), (a.msg = "invalid win size"), (d.marker = 5);
              break;
            }
            d.mode = H;
          case H:
            if (0 === a.avail_in) return l;
            if (
              ((l = o),
              a.avail_in--,
              a.total_in++,
              (c = 255 & a.read_byte(a.next_in_index++)),
              ((d.method << 8) + c) % 31 != 0)
            ) {
              (d.mode = $), (a.msg = "incorrect header check"), (d.marker = 5);
              break;
            }
            if (0 == (c & P)) {
              d.mode = X;
              break;
            }
            d.mode = K;
          case K:
            if (0 === a.avail_in) return l;
            (l = o),
              a.avail_in--,
              a.total_in++,
              (d.need =
                ((255 & a.read_byte(a.next_in_index++)) << 24) & 4278190080),
              (d.mode = Z);
          case Z:
            if (0 === a.avail_in) return l;
            (l = o),
              a.avail_in--,
              a.total_in++,
              (d.need +=
                ((255 & a.read_byte(a.next_in_index++)) << 16) & 16711680),
              (d.mode = G);
          case G:
            if (0 === a.avail_in) return l;
            (l = o),
              a.avail_in--,
              a.total_in++,
              (d.need += ((255 & a.read_byte(a.next_in_index++)) << 8) & 65280),
              (d.mode = J);
          case J:
            return 0 === a.avail_in
              ? l
              : ((l = o),
                a.avail_in--,
                a.total_in++,
                (d.need += 255 & a.read_byte(a.next_in_index++)),
                (d.mode = Q),
                n);
          case Q:
            return (d.mode = $), (a.msg = "need dictionary"), (d.marker = 0), i;
          case X:
            if (((l = d.blocks.proc(a, l)), l == r)) {
              (d.mode = $), (d.marker = 0);
              break;
            }
            if ((l == e && (l = o), l != t)) return l;
            (l = o), d.blocks.reset(a, d.was), (d.mode = Y);
          case Y:
            return (a.avail_in = 0), t;
          case $:
            return r;
          default:
            return i;
        }
    }),
    (a.inflateSetDictionary = function (t, n, r) {
      let a = 0,
        s = r;
      if (!t || !t.istate || t.istate.mode != Q) return i;
      const o = t.istate;
      return (
        s >= 1 << o.wbits && ((s = (1 << o.wbits) - 1), (a = r - s)),
        o.blocks.set_dictionary(n, a, s),
        (o.mode = X),
        e
      );
    }),
    (a.inflateSync = function (t) {
      let n, a, l, c, u;
      if (!t || !t.istate) return i;
      const d = t.istate;
      if (
        (d.mode != $ && ((d.mode = $), (d.marker = 0)), 0 === (n = t.avail_in))
      )
        return s;
      for (a = t.next_in_index, l = d.marker; 0 !== n && l < 4; )
        t.read_byte(a) == ee[l] ? l++ : (l = 0 !== t.read_byte(a) ? 0 : 4 - l),
          a++,
          n--;
      return (
        (t.total_in += a - t.next_in_index),
        (t.next_in_index = a),
        (t.avail_in = n),
        (d.marker = l),
        4 != l
          ? r
          : ((c = t.total_in),
            (u = t.total_out),
            o(t),
            (t.total_in = c),
            (t.total_out = u),
            (d.mode = X),
            e)
      );
    }),
    (a.inflateSyncPoint = function (e) {
      return e && e.istate && e.istate.blocks
        ? e.istate.blocks.sync_point()
        : i;
    });
}
function ne() {}
ne.prototype = {
  inflateInit(e) {
    const t = this;
    return (t.istate = new te()), e || (e = 15), t.istate.inflateInit(t, e);
  },
  inflate(e) {
    const t = this;
    return t.istate ? t.istate.inflate(t, e) : i;
  },
  inflateEnd() {
    const e = this;
    if (!e.istate) return i;
    const t = e.istate.inflateEnd(e);
    return (e.istate = null), t;
  },
  inflateSync() {
    const e = this;
    return e.istate ? e.istate.inflateSync(e) : i;
  },
  inflateSetDictionary(e, t) {
    const n = this;
    return n.istate ? n.istate.inflateSetDictionary(n, e, t) : i;
  },
  read_byte(e) {
    return this.next_in[e];
  },
  read_buf(e, t) {
    return this.next_in.subarray(e, e + t);
  },
};
const ie = 4294967295,
  re = 65535,
  ae = 33639248,
  se = 101075792,
  oe = 1,
  le = 39169,
  ce = 10,
  ue = 1,
  de = 21589,
  fe = 28789,
  _e = 25461,
  he = 1,
  we = 6,
  be = 8,
  pe = 2048,
  me = void 0,
  ge = "undefined",
  ye = "function";
class xe {
  constructor(e) {
    return class extends TransformStream {
      constructor(t, n) {
        const i = new e(n);
        super({
          transform(e, t) {
            t.enqueue(i.append(e));
          },
          flush(e) {
            const t = i.flush();
            t && e.enqueue(t);
          },
        });
      }
    };
  }
}
const ke = 64;
let ve = 2;
try {
  typeof navigator != ge &&
    navigator.hardwareConcurrency &&
    (ve = navigator.hardwareConcurrency);
} catch (e) {}
const Se = {
    chunkSize: 524288,
    maxWorkers: ve,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    workerScripts: me,
    CompressionStreamNative:
      typeof CompressionStream != ge && CompressionStream,
    DecompressionStreamNative:
      typeof DecompressionStream != ge && DecompressionStream,
  },
  ze = Object.assign({}, Se);
function Ae(e) {
  const {
    baseURL: t,
    chunkSize: n,
    maxWorkers: i,
    terminateWorkerTimeout: r,
    useCompressionStream: a,
    useWebWorkers: s,
    Deflate: o,
    Inflate: l,
    CompressionStream: c,
    DecompressionStream: u,
    workerScripts: d,
  } = e;
  if (
    (Ue("baseURL", t),
    Ue("chunkSize", n),
    Ue("maxWorkers", i),
    Ue("terminateWorkerTimeout", r),
    Ue("useCompressionStream", a),
    Ue("useWebWorkers", s),
    o && (ze.CompressionStream = new xe(o)),
    l && (ze.DecompressionStream = new xe(l)),
    Ue("CompressionStream", c),
    Ue("DecompressionStream", u),
    d !== me)
  ) {
    const { deflate: e, inflate: t } = d;
    if (((e || t) && (ze.workerScripts || (ze.workerScripts = {})), e)) {
      if (!Array.isArray(e))
        throw new Error("workerScripts.deflate must be an array");
      ze.workerScripts.deflate = e;
    }
    if (t) {
      if (!Array.isArray(t))
        throw new Error("workerScripts.inflate must be an array");
      ze.workerScripts.inflate = t;
    }
  }
}
function Ue(e, t) {
  t !== me && (ze[e] = t);
}
const De = [];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let e = 0; e < 8; e++) 1 & t ? (t = (t >>> 1) ^ 3988292384) : (t >>>= 1);
  De[e] = t;
}
class Ee {
  constructor(e) {
    this.crc = e || -1;
  }
  append(e) {
    let t = 0 | this.crc;
    for (let n = 0, i = 0 | e.length; n < i; n++)
      t = (t >>> 8) ^ De[255 & (t ^ e[n])];
    this.crc = t;
  }
  get() {
    return ~this.crc;
  }
}
class Fe extends TransformStream {
  constructor() {
    const e = new Ee();
    super({
      transform(t) {
        e.append(t);
      },
      flush(t) {
        const n = new Uint8Array(4);
        new DataView(n.buffer).setUint32(0, e.get()), t.enqueue(n);
      },
    });
  }
}
const Te = {
    concat(e, t) {
      if (0 === e.length || 0 === t.length) return e.concat(t);
      const n = e[e.length - 1],
        i = Te.getPartial(n);
      return 32 === i
        ? e.concat(t)
        : Te._shiftRight(t, i, 0 | n, e.slice(0, e.length - 1));
    },
    bitLength(e) {
      const t = e.length;
      if (0 === t) return 0;
      const n = e[t - 1];
      return 32 * (t - 1) + Te.getPartial(n);
    },
    clamp(e, t) {
      if (32 * e.length < t) return e;
      const n = (e = e.slice(0, Math.ceil(t / 32))).length;
      return (
        (t &= 31),
        n > 0 &&
          t &&
          (e[n - 1] = Te.partial(t, e[n - 1] & (2147483648 >> (t - 1)), 1)),
        e
      );
    },
    partial: (e, t, n) =>
      32 === e ? t : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e,
    getPartial: (e) => Math.round(e / 1099511627776) || 32,
    _shiftRight(e, t, n, i) {
      for (void 0 === i && (i = []); t >= 32; t -= 32) i.push(n), (n = 0);
      if (0 === t) return i.concat(e);
      for (let r = 0; r < e.length; r++)
        i.push(n | (e[r] >>> t)), (n = e[r] << (32 - t));
      const r = e.length ? e[e.length - 1] : 0,
        a = Te.getPartial(r);
      return i.push(Te.partial((t + a) & 31, t + a > 32 ? n : i.pop(), 1)), i;
    },
  },
  Oe = {
    bytes: {
      fromBits(e) {
        const t = Te.bitLength(e) / 8,
          n = new Uint8Array(t);
        let i;
        for (let r = 0; r < t; r++)
          0 == (3 & r) && (i = e[r / 4]), (n[r] = i >>> 24), (i <<= 8);
        return n;
      },
      toBits(e) {
        const t = [];
        let n,
          i = 0;
        for (n = 0; n < e.length; n++)
          (i = (i << 8) | e[n]), 3 == (3 & n) && (t.push(i), (i = 0));
        return 3 & n && t.push(Te.partial(8 * (3 & n), i)), t;
      },
    },
  },
  Ce = {
    sha1: class {
      constructor(e) {
        const t = this;
        (t.blockSize = 512),
          (t._init = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (t._key = [1518500249, 1859775393, 2400959708, 3395469782]),
          e
            ? ((t._h = e._h.slice(0)),
              (t._buffer = e._buffer.slice(0)),
              (t._length = e._length))
            : t.reset();
      }
      reset() {
        const e = this;
        return (e._h = e._init.slice(0)), (e._buffer = []), (e._length = 0), e;
      }
      update(e) {
        const t = this;
        "string" == typeof e && (e = Oe.utf8String.toBits(e));
        const n = (t._buffer = Te.concat(t._buffer, e)),
          i = t._length,
          r = (t._length = i + Te.bitLength(e));
        if (r > 9007199254740991)
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        const a = new Uint32Array(n);
        let s = 0;
        for (
          let e = t.blockSize + i - ((t.blockSize + i) & (t.blockSize - 1));
          e <= r;
          e += t.blockSize
        )
          t._block(a.subarray(16 * s, 16 * (s + 1))), (s += 1);
        return n.splice(0, 16 * s), t;
      }
      finalize() {
        const e = this;
        let t = e._buffer;
        const n = e._h;
        t = Te.concat(t, [Te.partial(1, 1)]);
        for (let e = t.length + 2; 15 & e; e++) t.push(0);
        for (
          t.push(Math.floor(e._length / 4294967296)), t.push(0 | e._length);
          t.length;

        )
          e._block(t.splice(0, 16));
        return e.reset(), n;
      }
      _f(e, t, n, i) {
        return e <= 19
          ? (t & n) | (~t & i)
          : e <= 39
          ? t ^ n ^ i
          : e <= 59
          ? (t & n) | (t & i) | (n & i)
          : e <= 79
          ? t ^ n ^ i
          : void 0;
      }
      _S(e, t) {
        return (t << e) | (t >>> (32 - e));
      }
      _block(e) {
        const t = this,
          n = t._h,
          i = Array(80);
        for (let t = 0; t < 16; t++) i[t] = e[t];
        let r = n[0],
          a = n[1],
          s = n[2],
          o = n[3],
          l = n[4];
        for (let e = 0; e <= 79; e++) {
          e >= 16 &&
            (i[e] = t._S(1, i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16]));
          const n =
            (t._S(5, r) +
              t._f(e, a, s, o) +
              l +
              i[e] +
              t._key[Math.floor(e / 20)]) |
            0;
          (l = o), (o = s), (s = t._S(30, a)), (a = r), (r = n);
        }
        (n[0] = (n[0] + r) | 0),
          (n[1] = (n[1] + a) | 0),
          (n[2] = (n[2] + s) | 0),
          (n[3] = (n[3] + o) | 0),
          (n[4] = (n[4] + l) | 0);
      }
    },
  },
  We = {
    aes: class {
      constructor(e) {
        const t = this;
        (t._tables = [
          [[], [], [], [], []],
          [[], [], [], [], []],
        ]),
          t._tables[0][0][0] || t._precompute();
        const n = t._tables[0][4],
          i = t._tables[1],
          r = e.length;
        let a,
          s,
          o,
          l = 1;
        if (4 !== r && 6 !== r && 8 !== r)
          throw new Error("invalid aes key size");
        for (
          t._key = [(s = e.slice(0)), (o = [])], a = r;
          a < 4 * r + 28;
          a++
        ) {
          let e = s[a - 1];
          (a % r == 0 || (8 === r && a % r == 4)) &&
            ((e =
              (n[e >>> 24] << 24) ^
              (n[(e >> 16) & 255] << 16) ^
              (n[(e >> 8) & 255] << 8) ^
              n[255 & e]),
            a % r == 0 &&
              ((e = (e << 8) ^ (e >>> 24) ^ (l << 24)),
              (l = (l << 1) ^ (283 * (l >> 7))))),
            (s[a] = s[a - r] ^ e);
        }
        for (let e = 0; a; e++, a--) {
          const t = s[3 & e ? a : a - 4];
          o[e] =
            a <= 4 || e < 4
              ? t
              : i[0][n[t >>> 24]] ^
                i[1][n[(t >> 16) & 255]] ^
                i[2][n[(t >> 8) & 255]] ^
                i[3][n[255 & t]];
        }
      }
      encrypt(e) {
        return this._crypt(e, 0);
      }
      decrypt(e) {
        return this._crypt(e, 1);
      }
      _precompute() {
        const e = this._tables[0],
          t = this._tables[1],
          n = e[4],
          i = t[4],
          r = [],
          a = [];
        let s, o, l, c;
        for (let e = 0; e < 256; e++)
          a[(r[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
        for (let u = (s = 0); !n[u]; u ^= o || 1, s = a[s] || 1) {
          let a = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
          (a = (a >> 8) ^ (255 & a) ^ 99),
            (n[u] = a),
            (i[a] = u),
            (c = r[(l = r[(o = r[u])])]);
          let d = (16843009 * c) ^ (65537 * l) ^ (257 * o) ^ (16843008 * u),
            f = (257 * r[a]) ^ (16843008 * a);
          for (let n = 0; n < 4; n++)
            (e[n][u] = f = (f << 24) ^ (f >>> 8)),
              (t[n][a] = d = (d << 24) ^ (d >>> 8));
        }
        for (let n = 0; n < 5; n++)
          (e[n] = e[n].slice(0)), (t[n] = t[n].slice(0));
      }
      _crypt(e, t) {
        if (4 !== e.length) throw new Error("invalid aes block size");
        const n = this._key[t],
          i = n.length / 4 - 2,
          r = [0, 0, 0, 0],
          a = this._tables[t],
          s = a[0],
          o = a[1],
          l = a[2],
          c = a[3],
          u = a[4];
        let d,
          f,
          _,
          h = e[0] ^ n[0],
          w = e[t ? 3 : 1] ^ n[1],
          b = e[2] ^ n[2],
          p = e[t ? 1 : 3] ^ n[3],
          m = 4;
        for (let e = 0; e < i; e++)
          (d =
            s[h >>> 24] ^
            o[(w >> 16) & 255] ^
            l[(b >> 8) & 255] ^
            c[255 & p] ^
            n[m]),
            (f =
              s[w >>> 24] ^
              o[(b >> 16) & 255] ^
              l[(p >> 8) & 255] ^
              c[255 & h] ^
              n[m + 1]),
            (_ =
              s[b >>> 24] ^
              o[(p >> 16) & 255] ^
              l[(h >> 8) & 255] ^
              c[255 & w] ^
              n[m + 2]),
            (p =
              s[p >>> 24] ^
              o[(h >> 16) & 255] ^
              l[(w >> 8) & 255] ^
              c[255 & b] ^
              n[m + 3]),
            (m += 4),
            (h = d),
            (w = f),
            (b = _);
        for (let e = 0; e < 4; e++)
          (r[t ? 3 & -e : e] =
            (u[h >>> 24] << 24) ^
            (u[(w >> 16) & 255] << 16) ^
            (u[(b >> 8) & 255] << 8) ^
            u[255 & p] ^
            n[m++]),
            (d = h),
            (h = w),
            (w = b),
            (b = p),
            (p = d);
        return r;
      }
    },
  },
  je = {
    getRandomValues(e) {
      const t = new Uint32Array(e.buffer),
        n = (e) => {
          let t = 987654321;
          const n = 4294967295;
          return function () {
            t = (36969 * (65535 & t) + (t >> 16)) & n;
            return (
              ((((t << 16) + (e = (18e3 * (65535 & e) + (e >> 16)) & n)) & n) /
                4294967296 +
                0.5) *
              (Math.random() > 0.5 ? 1 : -1)
            );
          };
        };
      for (let i, r = 0; r < e.length; r += 4) {
        const e = n(4294967296 * (i || Math.random()));
        (i = 987654071 * e()), (t[r / 4] = (4294967296 * e()) | 0);
      }
      return e;
    },
  },
  Me = {
    ctrGladman: class {
      constructor(e, t) {
        (this._prf = e), (this._initIv = t), (this._iv = t);
      }
      reset() {
        this._iv = this._initIv;
      }
      update(e) {
        return this.calculate(this._prf, e, this._iv);
      }
      incWord(e) {
        if (255 == ((e >> 24) & 255)) {
          let t = (e >> 16) & 255,
            n = (e >> 8) & 255,
            i = 255 & e;
          255 === t
            ? ((t = 0), 255 === n ? ((n = 0), 255 === i ? (i = 0) : ++i) : ++n)
            : ++t,
            (e = 0),
            (e += t << 16),
            (e += n << 8),
            (e += i);
        } else e += 1 << 24;
        return e;
      }
      incCounter(e) {
        0 === (e[0] = this.incWord(e[0])) && (e[1] = this.incWord(e[1]));
      }
      calculate(e, t, n) {
        let i;
        if (!(i = t.length)) return [];
        const r = Te.bitLength(t);
        for (let r = 0; r < i; r += 4) {
          this.incCounter(n);
          const i = e.encrypt(n);
          (t[r] ^= i[0]),
            (t[r + 1] ^= i[1]),
            (t[r + 2] ^= i[2]),
            (t[r + 3] ^= i[3]);
        }
        return Te.clamp(t, r);
      }
    },
  },
  Le = {
    importKey: (e) => new Le.hmacSha1(Oe.bytes.toBits(e)),
    pbkdf2(e, t, n, i) {
      if (((n = n || 1e4), i < 0 || n < 0))
        throw new Error("invalid params to pbkdf2");
      const r = (1 + (i >> 5)) << 2;
      let a, s, o, l, c;
      const u = new ArrayBuffer(r),
        d = new DataView(u);
      let f = 0;
      const _ = Te;
      for (t = Oe.bytes.toBits(t), c = 1; f < (r || 1); c++) {
        for (a = s = e.encrypt(_.concat(t, [c])), o = 1; o < n; o++)
          for (s = e.encrypt(s), l = 0; l < s.length; l++) a[l] ^= s[l];
        for (o = 0; f < (r || 1) && o < a.length; o++)
          d.setInt32(f, a[o]), (f += 4);
      }
      return u.slice(0, i / 8);
    },
    hmacSha1: class {
      constructor(e) {
        const t = this,
          n = (t._hash = Ce.sha1),
          i = [[], []];
        t._baseHash = [new n(), new n()];
        const r = t._baseHash[0].blockSize / 32;
        e.length > r && (e = new n().update(e).finalize());
        for (let t = 0; t < r; t++)
          (i[0][t] = 909522486 ^ e[t]), (i[1][t] = 1549556828 ^ e[t]);
        t._baseHash[0].update(i[0]),
          t._baseHash[1].update(i[1]),
          (t._resultHash = new n(t._baseHash[0]));
      }
      reset() {
        const e = this;
        (e._resultHash = new e._hash(e._baseHash[0])), (e._updated = !1);
      }
      update(e) {
        (this._updated = !0), this._resultHash.update(e);
      }
      digest() {
        const e = this,
          t = e._resultHash.finalize(),
          n = new e._hash(e._baseHash[1]).update(t).finalize();
        return e.reset(), n;
      }
      encrypt(e) {
        if (this._updated)
          throw new Error("encrypt on already updated hmac called!");
        return this.update(e), this.digest(e);
      }
    },
  },
  Re =
    "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
  Be = "Invalid password",
  Ie = "Invalid signature";
function Ne(e) {
  return Re ? crypto.getRandomValues(e) : je.getRandomValues(e);
}
const Pe = 16,
  Ve = "raw",
  qe = { name: "PBKDF2" },
  He = Object.assign({ hash: { name: "HMAC" } }, qe),
  Ke = Object.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, qe),
  Ze = ["deriveBits"],
  Ge = [8, 12, 16],
  Je = [16, 24, 32],
  Qe = 10,
  Xe = [0, 0, 0, 0],
  Ye = "undefined",
  $e = "function",
  et = typeof crypto != Ye,
  tt = et && crypto.subtle,
  nt = et && typeof tt != Ye,
  it = Oe.bytes,
  rt = We.aes,
  at = Me.ctrGladman,
  st = Le.hmacSha1;
let ot = et && nt && typeof tt.importKey == $e,
  lt = et && nt && typeof tt.deriveBits == $e;
class ct extends TransformStream {
  constructor({ password: e, signed: t, encryptionStrength: n }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((e) => (this.resolveReady = e)),
          password: e,
          signed: t,
          strength: n - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(e, t) {
        const n = this,
          { password: i, strength: r, resolveReady: a, ready: s } = n;
        i
          ? (await (async function (e, t, n, i) {
              const r = await ft(e, t, n, ht(i, 0, Ge[t])),
                a = ht(i, Ge[t]);
              if (r[0] != a[0] || r[1] != a[1]) throw new Error(Be);
            })(n, r, i, ht(e, 0, Ge[r] + 2)),
            (e = ht(e, Ge[r] + 2)),
            a())
          : await s;
        const o = new Uint8Array(e.length - Qe - ((e.length - Qe) % Pe));
        t.enqueue(dt(n, e, o, 0, Qe, !0));
      },
      async flush(e) {
        const { signed: t, ctr: n, hmac: i, pending: r, ready: a } = this;
        await a;
        const s = ht(r, 0, r.length - Qe),
          o = ht(r, r.length - Qe);
        let l = new Uint8Array();
        if (s.length) {
          const e = bt(it, s);
          i.update(e);
          const t = n.update(e);
          l = wt(it, t);
        }
        if (t) {
          const e = ht(wt(it, i.digest()), 0, Qe);
          for (let t = 0; t < Qe; t++) if (e[t] != o[t]) throw new Error(Ie);
        }
        e.enqueue(l);
      },
    });
  }
}
class ut extends TransformStream {
  constructor({ password: e, encryptionStrength: t }) {
    let n;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((e) => (this.resolveReady = e)),
          password: e,
          strength: t - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(e, t) {
        const n = this,
          { password: i, strength: r, resolveReady: a, ready: s } = n;
        let o = new Uint8Array();
        i
          ? ((o = await (async function (e, t, n) {
              const i = Ne(new Uint8Array(Ge[t])),
                r = await ft(e, t, n, i);
              return _t(i, r);
            })(n, r, i)),
            a())
          : await s;
        const l = new Uint8Array(o.length + e.length - (e.length % Pe));
        l.set(o, 0), t.enqueue(dt(n, e, l, o.length, 0));
      },
      async flush(e) {
        const { ctr: t, hmac: i, pending: r, ready: a } = this;
        await a;
        let s = new Uint8Array();
        if (r.length) {
          const e = t.update(bt(it, r));
          i.update(e), (s = wt(it, e));
        }
        (n.signature = wt(it, i.digest()).slice(0, Qe)),
          e.enqueue(_t(s, n.signature));
      },
    }),
      (n = this);
  }
}
function dt(e, t, n, i, r, a) {
  const { ctr: s, hmac: o, pending: l } = e,
    c = t.length - r;
  let u;
  for (
    l.length &&
      ((t = _t(l, t)),
      (n = (function (e, t) {
        if (t && t > e.length) {
          const n = e;
          (e = new Uint8Array(t)).set(n, 0);
        }
        return e;
      })(n, c - (c % Pe)))),
      u = 0;
    u <= c - Pe;
    u += Pe
  ) {
    const e = bt(it, ht(t, u, u + Pe));
    a && o.update(e);
    const r = s.update(e);
    a || o.update(r), n.set(wt(it, r), u + i);
  }
  return (e.pending = ht(t, u)), n;
}
async function ft(e, t, n, i) {
  e.password = null;
  const r = (function (e) {
      if ("undefined" == typeof TextEncoder) {
        e = unescape(encodeURIComponent(e));
        const t = new Uint8Array(e.length);
        for (let n = 0; n < t.length; n++) t[n] = e.charCodeAt(n);
        return t;
      }
      return new TextEncoder().encode(e);
    })(n),
    a = await (async function (e, t, n, i, r) {
      if (!ot) return Le.importKey(t);
      try {
        return await tt.importKey(e, t, n, i, r);
      } catch (e) {
        return (ot = !1), Le.importKey(t);
      }
    })(Ve, r, He, !1, Ze),
    s = await (async function (e, t, n) {
      if (!lt) return Le.pbkdf2(t, e.salt, Ke.iterations, n);
      try {
        return await tt.deriveBits(e, t, n);
      } catch (i) {
        return (lt = !1), Le.pbkdf2(t, e.salt, Ke.iterations, n);
      }
    })(Object.assign({ salt: i }, Ke), a, 8 * (2 * Je[t] + 2)),
    o = new Uint8Array(s),
    l = bt(it, ht(o, 0, Je[t])),
    c = bt(it, ht(o, Je[t], 2 * Je[t])),
    u = ht(o, 2 * Je[t]);
  return (
    Object.assign(e, {
      keys: { key: l, authentication: c, passwordVerification: u },
      ctr: new at(new rt(l), Array.from(Xe)),
      hmac: new st(c),
    }),
    u
  );
}
function _t(e, t) {
  let n = e;
  return (
    e.length + t.length &&
      ((n = new Uint8Array(e.length + t.length)),
      n.set(e, 0),
      n.set(t, e.length)),
    n
  );
}
function ht(e, t, n) {
  return e.subarray(t, n);
}
function wt(e, t) {
  return e.fromBits(t);
}
function bt(e, t) {
  return e.toBits(t);
}
const pt = 12;
class mt extends TransformStream {
  constructor({ password: e, passwordVerification: t }) {
    super({
      start() {
        Object.assign(this, { password: e, passwordVerification: t }),
          kt(this, e);
      },
      transform(e, t) {
        const n = this;
        if (n.password) {
          const t = yt(n, e.subarray(0, pt));
          if (((n.password = null), t[11] != n.passwordVerification))
            throw new Error(Be);
          e = e.subarray(pt);
        }
        t.enqueue(yt(n, e));
      },
    });
  }
}
class gt extends TransformStream {
  constructor({ password: e, passwordVerification: t }) {
    super({
      start() {
        Object.assign(this, { password: e, passwordVerification: t }),
          kt(this, e);
      },
      transform(e, t) {
        const n = this;
        let i, r;
        if (n.password) {
          n.password = null;
          const t = Ne(new Uint8Array(pt));
          (t[11] = n.passwordVerification),
            (i = new Uint8Array(e.length + t.length)),
            i.set(xt(n, t), 0),
            (r = pt);
        } else (i = new Uint8Array(e.length)), (r = 0);
        i.set(xt(n, e), r), t.enqueue(i);
      },
    });
  }
}
function yt(e, t) {
  const n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) (n[i] = St(e) ^ t[i]), vt(e, n[i]);
  return n;
}
function xt(e, t) {
  const n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) (n[i] = St(e) ^ t[i]), vt(e, t[i]);
  return n;
}
function kt(e, t) {
  const n = [305419896, 591751049, 878082192];
  Object.assign(e, { keys: n, crcKey0: new Ee(n[0]), crcKey2: new Ee(n[2]) });
  for (let n = 0; n < t.length; n++) vt(e, t.charCodeAt(n));
}
function vt(e, t) {
  let [n, i, r] = e.keys;
  e.crcKey0.append([t]),
    (n = ~e.crcKey0.get()),
    (i = At(Math.imul(At(i + zt(n)), 134775813) + 1)),
    e.crcKey2.append([i >>> 24]),
    (r = ~e.crcKey2.get()),
    (e.keys = [n, i, r]);
}
function St(e) {
  const t = 2 | e.keys[2];
  return zt(Math.imul(t, 1 ^ t) >>> 8);
}
function zt(e) {
  return 255 & e;
}
function At(e) {
  return 4294967295 & e;
}
const Ut = "deflate-raw";
class Dt extends TransformStream {
  constructor(
    e,
    { chunkSize: t, CompressionStream: n, CompressionStreamNative: i }
  ) {
    super({});
    const {
        compressed: r,
        encrypted: a,
        useCompressionStream: s,
        zipCrypto: o,
        signed: l,
        level: c,
      } = e,
      u = this;
    let d,
      f,
      _ = Ft(super.readable);
    (a && !o) || !l || (([_, d] = _.tee()), (d = Ct(d, new Fe()))),
      r && (_ = Ot(_, s, { level: c, chunkSize: t }, i, n)),
      a && (o ? (_ = Ct(_, new gt(e))) : ((f = new ut(e)), (_ = Ct(_, f)))),
      Tt(u, _, async () => {
        let e;
        a && !o && (e = f.signature),
          (a && !o) ||
            !l ||
            ((e = await d.getReader().read()),
            (e = new DataView(e.value.buffer).getUint32(0))),
          (u.signature = e);
      });
  }
}
class Et extends TransformStream {
  constructor(
    e,
    { chunkSize: t, DecompressionStream: n, DecompressionStreamNative: i }
  ) {
    super({});
    const {
      zipCrypto: r,
      encrypted: a,
      signed: s,
      signature: o,
      compressed: l,
      useCompressionStream: c,
    } = e;
    let u,
      d,
      f = Ft(super.readable);
    a && (r ? (f = Ct(f, new mt(e))) : ((d = new ct(e)), (f = Ct(f, d)))),
      l && (f = Ot(f, c, { chunkSize: t }, i, n)),
      (a && !r) || !s || (([f, u] = f.tee()), (u = Ct(u, new Fe()))),
      Tt(this, f, async () => {
        if ((!a || r) && s) {
          const e = await u.getReader().read(),
            t = new DataView(e.value.buffer);
          if (o != t.getUint32(0, !1)) throw new Error(Ie);
        }
      });
  }
}
function Ft(e) {
  return Ct(
    e,
    new TransformStream({
      transform(e, t) {
        e && e.length && t.enqueue(e);
      },
    })
  );
}
function Tt(e, t, n) {
  (t = Ct(t, new TransformStream({ flush: n }))),
    Object.defineProperty(e, "readable", { get: () => t });
}
function Ot(e, t, n, i, r) {
  try {
    e = Ct(e, new (t && i ? i : r)(Ut, n));
  } catch (i) {
    if (!t) throw i;
    e = Ct(e, new r(Ut, n));
  }
  return e;
}
function Ct(e, t) {
  return e.pipeThrough(t);
}
const Wt = "message",
  jt = "start",
  Mt = "pull",
  Lt = "data",
  Rt = "ack",
  Bt = "close",
  It = "inflate";
class Nt extends TransformStream {
  constructor(e, t) {
    super({});
    const n = this,
      { codecType: i } = e;
    let r;
    i.startsWith("deflate") ? (r = Dt) : i.startsWith(It) && (r = Et);
    let a = 0;
    const s = new r(e, t),
      o = super.readable,
      l = new TransformStream({
        transform(e, t) {
          e && e.length && ((a += e.length), t.enqueue(e));
        },
        flush() {
          const { signature: e } = s;
          Object.assign(n, { signature: e, size: a });
        },
      });
    Object.defineProperty(n, "readable", {
      get: () => o.pipeThrough(s).pipeThrough(l),
    });
  }
}
const Pt = typeof Worker != ge;
class Vt {
  constructor(
    e,
    { readable: t, writable: n },
    {
      options: i,
      config: r,
      streamOptions: a,
      useWebWorkers: s,
      transferStreams: o,
      scripts: l,
    },
    c
  ) {
    const { signal: u } = a;
    return (
      Object.assign(e, {
        busy: !0,
        readable: t.pipeThrough(new qt(t, a, r), { signal: u }),
        writable: n,
        options: Object.assign({}, i),
        scripts: l,
        transferStreams: o,
        terminate() {
          const { worker: t, busy: n } = e;
          t && !n && (t.terminate(), (e.interface = null));
        },
        onTaskFinished() {
          (e.busy = !1), c(e);
        },
      }),
      (s && Pt ? Zt : Kt)(e, r)
    );
  }
}
class qt extends TransformStream {
  constructor(
    e,
    { onstart: t, onprogress: n, size: i, onend: r },
    { chunkSize: a }
  ) {
    let s = 0;
    super(
      {
        start() {
          t && Ht(t, i);
        },
        async transform(e, t) {
          (s += e.length), n && (await Ht(n, s, i)), t.enqueue(e);
        },
        flush() {
          (e.size = s), r && Ht(r, s);
        },
      },
      { highWaterMark: 1, size: () => a }
    );
  }
}
async function Ht(e, ...t) {
  try {
    await e(...t);
  } catch (e) {}
}
function Kt(e, t) {
  return {
    run: () =>
      (async function (
        { options: e, readable: t, writable: n, onTaskFinished: i },
        r
      ) {
        const a = new Nt(e, r);
        try {
          await t
            .pipeThrough(a)
            .pipeTo(n, { preventClose: !0, preventAbort: !0 });
          const { signature: e, size: i } = a;
          return { signature: e, size: i };
        } finally {
          i();
        }
      })(e, t),
  };
}
function Zt(e, { baseURL: t, chunkSize: n }) {
  return (
    e.interface ||
      Object.assign(e, {
        worker: Qt(e.scripts[0], t, e),
        interface: {
          run: () =>
            (async function (e, t) {
              let n, i;
              const r = new Promise((e, t) => {
                (n = e), (i = t);
              });
              Object.assign(e, {
                reader: null,
                writer: null,
                resolveResult: n,
                rejectResult: i,
                result: r,
              });
              const { readable: a, options: s, scripts: o } = e,
                { writable: l, closed: c } = (function (e) {
                  const t = e.getWriter();
                  let n;
                  const i = new Promise((e) => (n = e)),
                    r = new WritableStream({
                      async write(e) {
                        await t.ready, await t.write(e);
                      },
                      close() {
                        t.releaseLock(), n();
                      },
                      abort: (e) => t.abort(e),
                    });
                  return { writable: r, closed: i };
                })(e.writable),
                u = Xt(
                  {
                    type: jt,
                    scripts: o.slice(1),
                    options: s,
                    config: t,
                    readable: a,
                    writable: l,
                  },
                  e
                );
              u ||
                Object.assign(e, {
                  reader: a.getReader(),
                  writer: l.getWriter(),
                });
              const d = await r;
              try {
                await l.close();
              } catch (e) {}
              return await c, d;
            })(e, { chunkSize: n }),
        },
      }),
    e.interface
  );
}
let Gt = !0,
  Jt = !0;
function Qt(e, t, n) {
  const i = { type: "module" };
  let r, a;
  typeof e == ye && (e = e());
  try {
    r = new URL(e, t);
  } catch (t) {
    r = e;
  }
  if (Gt)
    try {
      a = new Worker(r);
    } catch (e) {
      (Gt = !1), (a = new Worker(r, i));
    }
  else a = new Worker(r, i);
  return (
    a.addEventListener(Wt, (e) =>
      (async function ({ data: e }, t) {
        const { type: n, value: i, messageId: r, result: a, error: s } = e,
          {
            reader: o,
            writer: l,
            resolveResult: c,
            rejectResult: u,
            onTaskFinished: d,
          } = t;
        try {
          if (s) {
            const { message: e, stack: t, code: n, name: i } = s,
              r = new Error(e);
            Object.assign(r, { stack: t, code: n, name: i }), f(r);
          } else {
            if (n == Mt) {
              const { value: e, done: n } = await o.read();
              Xt({ type: Lt, value: e, done: n, messageId: r }, t);
            }
            n == Lt &&
              (await l.ready,
              await l.write(new Uint8Array(i)),
              Xt({ type: Rt, messageId: r }, t)),
              n == Bt && f(null, a);
          }
        } catch (s) {
          f(s);
        }
        function f(e, t) {
          e ? u(e) : c(t), l && l.releaseLock(), d();
        }
      })(e, n)
    ),
    a
  );
}
function Xt(
  e,
  { worker: t, writer: n, onTaskFinished: i, transferStreams: r }
) {
  try {
    let { value: n, readable: i, writable: a } = e;
    const s = [];
    if (n) {
      const { buffer: t, length: i } = n;
      i != t.byteLength && (n = new Uint8Array(n)),
        (e.value = n.buffer),
        s.push(e.value);
    }
    if (
      (r && Jt
        ? (i && s.push(i), a && s.push(a))
        : (e.readable = e.writable = null),
      s.length)
    )
      try {
        return t.postMessage(e, s), !0;
      } catch (n) {
        (Jt = !1), (e.readable = e.writable = null), t.postMessage(e);
      }
    else t.postMessage(e);
  } catch (e) {
    throw (n && n.releaseLock(), i(), e);
  }
}
let Yt = [];
const $t = [];
let en = 0;
function tn(e) {
  const { terminateTimeout: t } = e;
  t && (clearTimeout(t), (e.terminateTimeout = null));
}
const nn = 65536,
  rn = "writable";
class an {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class sn extends an {
  get readable() {
    const e = this,
      { chunkSize: t = nn } = e,
      n = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(i) {
          const { offset: r = 0, size: a, diskNumberStart: s } = n,
            { chunkOffset: o } = this;
          i.enqueue(await hn(e, r + o, Math.min(t, a - o), s)),
            o + t > a ? i.close() : (this.chunkOffset += t);
        },
      });
    return n;
  }
}
class on extends sn {
  constructor(e) {
    super(), Object.assign(this, { blob: e, size: e.size });
  }
  async readUint8Array(e, t) {
    const n = this,
      i = e + t,
      r = e || i < n.size ? n.blob.slice(e, i) : n.blob;
    return new Uint8Array(await r.arrayBuffer());
  }
}
class ln extends an {
  constructor(e) {
    super();
    const t = new TransformStream(),
      n = [];
    e && n.push(["Content-Type", e]),
      Object.defineProperty(this, rn, { get: () => t.writable }),
      (this.blob = new Response(t.readable, { headers: n }).blob());
  }
  getData() {
    return this.blob;
  }
}
class cn extends ln {
  constructor(e) {
    super(e),
      Object.assign(this, {
        encoding: e,
        utf8: !e || "utf-8" == e.toLowerCase(),
      });
  }
  async getData() {
    const { encoding: e, utf8: t } = this,
      n = await super.getData();
    if (n.text && t) return n.text();
    {
      const t = new FileReader();
      return new Promise((i, r) => {
        Object.assign(t, {
          onload: ({ target: e }) => i(e.result),
          onerror: () => r(t.error),
        }),
          t.readAsText(n, e);
      });
    }
  }
}
class un extends sn {
  constructor(e) {
    super(), (this.readers = e);
  }
  async init() {
    const e = this,
      { readers: t } = e;
    (e.lastDiskNumber = 0),
      await Promise.all(
        t.map(async (t) => {
          await t.init(), (e.size += t.size);
        })
      ),
      super.init();
  }
  async readUint8Array(e, t, n = 0) {
    const i = this,
      { readers: r } = this;
    let a,
      s = n;
    -1 == s && (s = r.length - 1);
    let o = e;
    for (; o >= r[s].size; ) (o -= r[s].size), s++;
    const l = r[s],
      c = l.size;
    if (o + t <= c) a = await hn(l, o, t);
    else {
      const r = c - o;
      (a = new Uint8Array(t)),
        a.set(await hn(l, o, r)),
        a.set(await i.readUint8Array(e + r, t - r, n), r);
    }
    return (i.lastDiskNumber = Math.max(s, i.lastDiskNumber)), a;
  }
}
class dn extends an {
  constructor(e, t = 4294967295) {
    super();
    const n = this;
    let i, r, a;
    Object.assign(n, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: t,
      availableSize: t,
    });
    const s = new WritableStream({
      async write(t) {
        const { availableSize: s } = n;
        if (a)
          t.length >= s
            ? (await o(t.slice(0, s)),
              await l(),
              (n.diskOffset += i.size),
              n.diskNumber++,
              (a = null),
              await this.write(t.slice(s)))
            : await o(t);
        else {
          const { value: s, done: o } = await e.next();
          if (o && !s) throw new Error("Writer iterator completed too soon");
          (i = s),
            (i.size = 0),
            i.maxSize && (n.maxSize = i.maxSize),
            (n.availableSize = n.maxSize),
            await fn(i),
            (r = s.writable),
            (a = r.getWriter()),
            await this.write(t);
        }
      },
      async close() {
        await a.ready, await l();
      },
    });
    async function o(e) {
      const t = e.length;
      t &&
        (await a.ready,
        await a.write(e),
        (i.size += t),
        (n.size += t),
        (n.availableSize -= t));
    }
    async function l() {
      (r.size = i.size), await a.close();
    }
    Object.defineProperty(n, rn, { get: () => s });
  }
}
async function fn(e, t) {
  e.init && !e.initialized && (await e.init(t));
}
function _n(e) {
  return (
    Array.isArray(e) && (e = new un(e)),
    e instanceof ReadableStream && (e = { readable: e }),
    e
  );
}
function hn(e, t, n, i) {
  return e.readUint8Array(t, n, i);
}
const wn =
    "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(
      ""
    ),
  bn = 256 == wn.length;
function pn(e, t) {
  return t && "cp437" == t.trim().toLowerCase()
    ? (function (e) {
        if (bn) {
          let t = "";
          for (let n = 0; n < e.length; n++) t += wn[e[n]];
          return t;
        }
        return new TextDecoder().decode(e);
      })(e)
    : new TextDecoder(t).decode(e);
}
const mn = "filename",
  gn = "rawFilename",
  yn = "comment",
  xn = "rawComment",
  kn = "uncompressedSize",
  vn = "compressedSize",
  Sn = "offset",
  zn = "diskNumberStart",
  An = "lastModDate",
  Un = "rawLastModDate",
  Dn = "lastAccessDate",
  En = "rawLastAccessDate",
  Fn = "creationDate",
  Tn = "rawCreationDate",
  On = [
    mn,
    gn,
    vn,
    kn,
    An,
    Un,
    yn,
    xn,
    Dn,
    Fn,
    Sn,
    zn,
    zn,
    "internalFileAttribute",
    "externalFileAttribute",
    "msDosCompatible",
    "zip64",
    "directory",
    "bitFlag",
    "encrypted",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "version",
    "versionMadeBy",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp",
  ];
class Cn {
  constructor(e) {
    On.forEach((t) => (this[t] = e[t]));
  }
}
const Wn = "File format is not recognized",
  jn = "Zip64 extra field not found",
  Mn = "Compression method not supported",
  Ln = "Split zip file",
  Rn = "utf-8",
  Bn = "cp437",
  In = [
    [kn, ie],
    [vn, ie],
    [Sn, ie],
    [zn, re],
  ],
  Nn = { [re]: { getValue: Yn, bytes: 4 }, [ie]: { getValue: $n, bytes: 8 } };
class Pn {
  constructor(e, t = {}) {
    Object.assign(this, { reader: _n(e), options: t, config: ze });
  }
  async *getEntriesGenerator(e = {}) {
    const t = this;
    let { reader: n } = t;
    const { config: i } = t;
    if (
      (await fn(n),
      (n.size !== me && n.readUint8Array) ||
        ((n = new on(await new Response(n.readable).blob())), await fn(n)),
      n.size < 22)
    )
      throw new Error(Wn);
    n.chunkSize = (function (e) {
      return Math.max(e.chunkSize, ke);
    })(i);
    const r = await (async function (e, t, n, i, r) {
      const a = new Uint8Array(4);
      !(function (e, t, n) {
        e.setUint32(t, n, !0);
      })(ei(a), 0, t);
      const s = i + r;
      return (await o(i)) || (await o(Math.min(s, n)));
      async function o(t) {
        const r = n - t,
          s = await hn(e, r, t);
        for (let e = s.length - i; e >= 0; e--)
          if (
            s[e] == a[0] &&
            s[e + 1] == a[1] &&
            s[e + 2] == a[2] &&
            s[e + 3] == a[3]
          )
            return { offset: r + e, buffer: s.slice(e, e + i).buffer };
      }
    })(n, 101010256, n.size, 22, 1048560);
    if (!r) {
      throw 134695760 == Yn(ei(await hn(n, 0, 4)))
        ? new Error(Ln)
        : new Error("End of central directory not found");
    }
    const a = ei(r);
    let s = Yn(a, 12),
      o = Yn(a, 16);
    const l = r.offset,
      c = Xn(a, 20),
      u = l + 22 + c;
    let d = Xn(a, 4);
    const f = n.lastDiskNumber || 0;
    let _ = Xn(a, 6),
      h = Xn(a, 8),
      w = 0,
      b = 0;
    if (o == ie || s == ie || h == re || _ == re) {
      const e = ei(await hn(n, r.offset - 20, 20));
      if (117853008 != Yn(e, 0))
        throw new Error("End of Zip64 central directory not found");
      o = $n(e, 8);
      let t = await hn(n, o, 56, -1),
        i = ei(t);
      const a = r.offset - 20 - 56;
      if (Yn(i, 0) != se && o != a) {
        const e = o;
        (o = a), (w = o - e), (t = await hn(n, o, 56, -1)), (i = ei(t));
      }
      if (Yn(i, 0) != se)
        throw new Error("End of Zip64 central directory locator not found");
      d == re && (d = Yn(i, 16)),
        _ == re && (_ = Yn(i, 20)),
        h == re && (h = $n(i, 32)),
        s == ie && (s = $n(i, 40)),
        (o -= s);
    }
    if (f != d) throw new Error(Ln);
    if (o < 0 || o >= n.size) throw new Error(Wn);
    let p = 0,
      m = await hn(n, o, s, _),
      g = ei(m);
    if (s) {
      const e = r.offset - s;
      if (Yn(g, p) != ae && o != e) {
        const t = o;
        (o = e), (w = o - t), (m = await hn(n, o, s, _)), (g = ei(m));
      }
    }
    if (o < 0 || o >= n.size) throw new Error(Wn);
    const y = Zn(t, e, "filenameEncoding"),
      x = Zn(t, e, "commentEncoding");
    for (let r = 0; r < h; r++) {
      const a = new Vn(n, i, t.options);
      if (Yn(g, p) != ae) throw new Error("Central directory header not found");
      qn(a, g, p + 6);
      const s = Boolean(a.bitFlag.languageEncodingFlag),
        o = p + 46,
        l = o + a.filenameLength,
        c = l + a.extraFieldLength,
        u = Xn(g, p + 4),
        d = 0 == (0 & u),
        f = m.subarray(o, l),
        _ = Xn(g, p + 32),
        k = c + _,
        v = m.subarray(c, k),
        S = s,
        z = s,
        A = d && 16 == (16 & Qn(g, p + 38)),
        U = Yn(g, p + 42) + w;
      Object.assign(a, {
        versionMadeBy: u,
        msDosCompatible: d,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: _,
        directory: A,
        offset: U,
        diskNumberStart: Xn(g, p + 34),
        internalFileAttribute: Xn(g, p + 36),
        externalFileAttribute: Yn(g, p + 38),
        rawFilename: f,
        filenameUTF8: S,
        commentUTF8: z,
        rawExtraField: m.subarray(l, c),
      });
      const [D, E] = await Promise.all([
        pn(f, S ? Rn : y || Bn),
        pn(v, z ? Rn : x || Bn),
      ]);
      Object.assign(a, {
        rawComment: v,
        filename: D,
        comment: E,
        directory: A || D.endsWith("/"),
      }),
        (b = Math.max(U, b)),
        await Hn(a, a, g, p + 6);
      const F = new Cn(a);
      (F.getData = (e, t) => a.getData(e, F, t)), (p = k);
      const { onprogress: T } = e;
      if (T)
        try {
          await T(r + 1, h, new Cn(a));
        } catch (e) {}
      yield F;
    }
    const k = Zn(t, e, "extractPrependedData"),
      v = Zn(t, e, "extractAppendedData");
    return (
      k && (t.prependedData = b > 0 ? await hn(n, 0, b) : new Uint8Array()),
      (t.comment = c ? await hn(n, l + 22, c) : new Uint8Array()),
      v &&
        (t.appendedData =
          u < n.size ? await hn(n, u, n.size - u) : new Uint8Array()),
      !0
    );
  }
  async getEntries(e = {}) {
    const t = [];
    for await (const n of this.getEntriesGenerator(e)) t.push(n);
    return t;
  }
  async close() {}
}
class Vn {
  constructor(e, t, n) {
    Object.assign(this, { reader: e, config: t, options: n });
  }
  async getData(e, t, n = {}) {
    const i = this,
      {
        reader: r,
        offset: a,
        diskNumberStart: s,
        extraFieldAES: o,
        compressionMethod: l,
        config: c,
        bitFlag: u,
        signature: d,
        rawLastModDate: f,
        uncompressedSize: _,
        compressedSize: h,
      } = i,
      w = (i.localDirectory = {}),
      b = ei(await hn(r, a, 30, s));
    let p = Zn(i, n, "password");
    if (((p = p && p.length && p), o && 99 != o.originalCompressionMethod))
      throw new Error(Mn);
    if (0 != l && 8 != l) throw new Error(Mn);
    if (67324752 != Yn(b, 0)) throw new Error("Local file header not found");
    qn(w, b, 4),
      (w.rawExtraField = w.extraFieldLength
        ? await hn(r, a + 30 + w.filenameLength, w.extraFieldLength, s)
        : new Uint8Array()),
      await Hn(i, w, b, 4),
      Object.assign(t, {
        lastAccessDate: w.lastAccessDate,
        creationDate: w.creationDate,
      });
    const m = i.encrypted && w.encrypted,
      g = m && !o;
    if (m) {
      if (!g && o.strength === me)
        throw new Error("Encryption method not supported");
      if (!p) throw new Error("File contains encrypted entry");
    }
    const y = a + 30 + w.filenameLength + w.extraFieldLength,
      x = r.readable;
    (x.diskNumberStart = s), (x.offset = y);
    const k = (x.size = h),
      v = Zn(i, n, "signal");
    (e = (function (e) {
      e.writable === me && typeof e.next == ye && (e = new dn(e)),
        e instanceof WritableStream && (e = { writable: e });
      const { writable: t } = e;
      return (
        t.size === me && (t.size = 0),
        e instanceof dn ||
          Object.assign(e, {
            diskNumber: 0,
            diskOffset: 0,
            availableSize: 1 / 0,
            maxSize: 1 / 0,
          }),
        e
      );
    })(e)),
      await fn(e, _);
    const { writable: S } = e,
      { onstart: z, onprogress: A, onend: U } = n,
      D = {
        options: {
          codecType: It,
          password: p,
          zipCrypto: g,
          encryptionStrength: o && o.strength,
          signed: Zn(i, n, "checkSignature"),
          passwordVerification:
            g && (u.dataDescriptor ? (f >>> 8) & 255 : (d >>> 24) & 255),
          signature: d,
          compressed: 0 != l,
          encrypted: m,
          useWebWorkers: Zn(i, n, "useWebWorkers"),
          useCompressionStream: Zn(i, n, "useCompressionStream"),
          transferStreams: Zn(i, n, "transferStreams"),
        },
        config: c,
        streamOptions: {
          signal: v,
          size: k,
          onstart: z,
          onprogress: A,
          onend: U,
        },
      };
    S.size += (
      await (async function (e, t) {
        const { options: n, config: i } = t,
          {
            transferStreams: r,
            useWebWorkers: a,
            useCompressionStream: s,
            codecType: o,
            compressed: l,
            signed: c,
            encrypted: u,
          } = n,
          { workerScripts: d, maxWorkers: f, terminateWorkerTimeout: _ } = i;
        t.transferStreams = r || r === me;
        const h = !(l || c || u || t.transferStreams);
        let w;
        (t.useWebWorkers = !h && (a || (a === me && i.useWebWorkers))),
          (t.scripts = t.useWebWorkers && d ? d[o] : []),
          (n.useCompressionStream = s || (s === me && i.useCompressionStream));
        const b = Yt.find((e) => !e.busy);
        if (b) tn(b), (w = new Vt(b, e, t, p));
        else if (Yt.length < f) {
          const n = { indexWorker: en };
          en++, Yt.push(n), (w = new Vt(n, e, t, p));
        } else
          w = await new Promise((n) =>
            $t.push({ resolve: n, stream: e, workerOptions: t })
          );
        return w.run();
        function p(e) {
          if ($t.length) {
            const [{ resolve: t, stream: n, workerOptions: i }] = $t.splice(
              0,
              1
            );
            t(new Vt(e, n, i, p));
          } else
            e.worker
              ? (tn(e),
                Number.isFinite(_) &&
                  _ >= 0 &&
                  (e.terminateTimeout = setTimeout(() => {
                    (Yt = Yt.filter((t) => t != e)), e.terminate();
                  }, _)))
              : (Yt = Yt.filter((t) => t != e));
        }
      })({ readable: x, writable: S }, D)
    ).size;
    return (
      Zn(i, n, "preventClose") || (await S.close()), e.getData ? e.getData() : S
    );
  }
}
function qn(e, t, n) {
  const i = (e.rawBitFlag = Xn(t, n + 2)),
    r = (i & he) == he,
    a = Yn(t, n + 6);
  Object.assign(e, {
    encrypted: r,
    version: Xn(t, n),
    bitFlag: {
      level: (i & we) >> 1,
      dataDescriptor: (i & be) == be,
      languageEncodingFlag: (i & pe) == pe,
    },
    rawLastModDate: a,
    lastModDate: Gn(a),
    filenameLength: Xn(t, n + 22),
    extraFieldLength: Xn(t, n + 24),
  });
}
async function Hn(e, t, n, i) {
  const { rawExtraField: r } = t,
    a = (t.extraField = new Map()),
    s = ei(new Uint8Array(r));
  let o = 0;
  try {
    for (; o < r.length; ) {
      const e = Xn(s, o),
        t = Xn(s, o + 2);
      a.set(e, { type: e, data: r.slice(o + 4, o + 4 + t) }), (o += 4 + t);
    }
  } catch (e) {}
  const l = Xn(n, i + 4);
  Object.assign(t, {
    signature: Yn(n, i + 10),
    uncompressedSize: Yn(n, i + 18),
    compressedSize: Yn(n, i + 14),
  });
  const c = a.get(oe);
  c &&
    (!(function (e, t) {
      t.zip64 = !0;
      const n = ei(e.data),
        i = In.filter(([e, n]) => t[e] == n);
      for (let r = 0, a = 0; r < i.length; r++) {
        const [s, o] = i[r];
        if (t[s] == o) {
          const i = Nn[o];
          (t[s] = e[s] = i.getValue(n, a)), (a += i.bytes);
        } else if (e[s]) throw new Error(jn);
      }
    })(c, t),
    (t.extraFieldZip64 = c));
  const u = a.get(fe);
  u && (await Kn(u, mn, gn, t, e), (t.extraFieldUnicodePath = u));
  const d = a.get(_e);
  d && (await Kn(d, yn, xn, t, e), (t.extraFieldUnicodeComment = d));
  const f = a.get(le);
  f
    ? (!(function (e, t, n) {
        const i = ei(e.data),
          r = Qn(i, 4);
        Object.assign(e, {
          vendorVersion: Qn(i, 0),
          vendorId: Qn(i, 2),
          strength: r,
          originalCompressionMethod: n,
          compressionMethod: Xn(i, 5),
        }),
          (t.compressionMethod = e.compressionMethod);
      })(f, t, l),
      (t.extraFieldAES = f))
    : (t.compressionMethod = l);
  const _ = a.get(ce);
  _ &&
    (!(function (e, t) {
      const n = ei(e.data);
      let i,
        r = 4;
      try {
        for (; r < e.data.length && !i; ) {
          const t = Xn(n, r),
            a = Xn(n, r + 2);
          t == ue && (i = e.data.slice(r + 4, r + 4 + a)), (r += 4 + a);
        }
      } catch (e) {}
      try {
        if (i && 24 == i.length) {
          const n = ei(i),
            r = n.getBigUint64(0, !0),
            a = n.getBigUint64(8, !0),
            s = n.getBigUint64(16, !0);
          Object.assign(e, {
            rawLastModDate: r,
            rawLastAccessDate: a,
            rawCreationDate: s,
          });
          const o = Jn(r),
            l = Jn(a),
            c = { lastModDate: o, lastAccessDate: l, creationDate: Jn(s) };
          Object.assign(e, c), Object.assign(t, c);
        }
      } catch (e) {}
    })(_, t),
    (t.extraFieldNTFS = _));
  const h = a.get(de);
  h &&
    (!(function (e, t) {
      const n = ei(e.data),
        i = Qn(n, 0),
        r = [],
        a = [];
      1 == (1 & i) && (r.push(An), a.push(Un));
      2 == (2 & i) && (r.push(Dn), a.push(En));
      4 == (4 & i) && (r.push(Fn), a.push(Tn));
      let s = 1;
      r.forEach((i, r) => {
        if (e.data.length >= s + 4) {
          const o = Yn(n, s);
          t[i] = e[i] = new Date(1e3 * o);
          const l = a[r];
          e[l] = o;
        }
        s += 4;
      });
    })(h, t),
    (t.extraFieldExtendedTimestamp = h));
}
async function Kn(e, t, n, i, r) {
  const a = ei(e.data),
    s = new Ee();
  s.append(r[n]);
  const o = ei(new Uint8Array(4));
  o.setUint32(0, s.get(), !0),
    Object.assign(e, {
      version: Qn(a, 0),
      signature: Yn(a, 1),
      [t]: await pn(e.data.subarray(5)),
      valid: !r.bitFlag.languageEncodingFlag && e.signature == Yn(o, 0),
    }),
    e.valid && ((i[t] = e[t]), (i[t + "UTF8"] = !0));
}
function Zn(e, t, n) {
  return t[n] === me ? e.options[n] : t[n];
}
function Gn(e) {
  const t = (4294901760 & e) >> 16,
    n = 65535 & e;
  try {
    return new Date(
      1980 + ((65024 & t) >> 9),
      ((480 & t) >> 5) - 1,
      31 & t,
      (63488 & n) >> 11,
      (2016 & n) >> 5,
      2 * (31 & n),
      0
    );
  } catch (e) {}
}
function Jn(e) {
  return new Date(Number(e / BigInt(1e4) - BigInt(116444736e5)));
}
function Qn(e, t) {
  return e.getUint8(t);
}
function Xn(e, t) {
  return e.getUint16(t, !0);
}
function Yn(e, t) {
  return e.getUint32(t, !0);
}
function $n(e, t) {
  return Number(e.getBigUint64(t, !0));
}
function ei(e) {
  return new DataView(e.buffer);
}
Ae({
  Inflate: function (n) {
    const i = new ne(),
      r = n && n.chunkSize ? Math.floor(2 * n.chunkSize) : 131072,
      a = c,
      o = new Uint8Array(r);
    let l = !1;
    i.inflateInit(),
      (i.next_out = o),
      (this.append = function (n, c) {
        const u = [];
        let d,
          f,
          _ = 0,
          h = 0,
          w = 0;
        if (0 !== n.length) {
          (i.next_in_index = 0), (i.next_in = n), (i.avail_in = n.length);
          do {
            if (
              ((i.next_out_index = 0),
              (i.avail_out = r),
              0 !== i.avail_in || l || ((i.next_in_index = 0), (l = !0)),
              (d = i.inflate(a)),
              l && d === s)
            ) {
              if (0 !== i.avail_in) throw new Error("inflating: bad input");
            } else if (d !== e && d !== t)
              throw new Error("inflating: " + i.msg);
            if ((l || d === t) && i.avail_in === n.length)
              throw new Error("inflating: bad input");
            i.next_out_index &&
              (i.next_out_index === r
                ? u.push(new Uint8Array(o))
                : u.push(o.slice(0, i.next_out_index))),
              (w += i.next_out_index),
              c &&
                i.next_in_index > 0 &&
                i.next_in_index != _ &&
                (c(i.next_in_index), (_ = i.next_in_index));
          } while (i.avail_in > 0 || 0 === i.avail_out);
          return (
            u.length > 1
              ? ((f = new Uint8Array(w)),
                u.forEach(function (e) {
                  f.set(e, h), (h += e.length);
                }))
              : (f = u[0] || new Uint8Array()),
            f
          );
        }
      }),
      (this.flush = function () {
        i.inflateEnd();
      });
  },
});
export {
  on as BlobReader,
  ln as BlobWriter,
  cn as TextWriter,
  Pn as ZipReader,
  Ae as configure,
};
