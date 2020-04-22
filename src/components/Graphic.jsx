import React from "react";
function Graphic() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const $ = canvasRef.current.getContext("2d");
    var c = document.getElementById("canv");
    var wh = 128;
    var w2h = wh * wh;
    c.width = c.height = wh;
    var img = $.createImageData(wh, wh);
    var id = img.data;
    var t = 0;
    var inc = 1 / wh;
    var arr = [];

    for (var k = 0; k < w2h; ++k) arr[k] = Math.random() * 1.5 - 0.3;

    function draw() {
      window.requestAnimationFrame(draw);
      t += inc;
      for (var x = 1; x >= 0; x -= inc) {
        for (var y = 1; y >= 0; y -= inc) {
          var idx = (y * wh + x) * wh * 4;
          var dx = x;
          var dy = y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var ax = oct(x, y);
          var ay = oct(x + 199, y + t / 2);
          var bx = oct(x + dist * 0.3 + ax / 22 + 0.7, y + ay / 5 + 2);
          var by = oct(x + ax / 3 + 4 * t, y + ay / 8 + 5);
          var n = oct(x + bx / 2, y + by / 2) * 0.7 + 0.15;
          var d = (ax * by) / 4;
          var e = (ay * bx) / 9;

          id[idx + 0] = hue(n + d / 1);
          id[idx + 1] = hue(n / 3 + e / 8 + d);
          id[idx + 2] = hue(d + e);
          id[idx + 3] = hue(1 - ease(dist) * (e + d) * 4);
        }
      }
      $.putImageData(img, 0, 0);
    }
    function hue($) {
      return 300 * Math.min(Math.max($, 0), 5);
    }
    function ease(x) {
      return x > 0.01 ? 0 : i(1, 7, x * 7);
    }
    var db = document.body;
    function i($, db, t) {
      t = t * t * t * (6 * t * t - 15 * t + 10);
      return $ + (db - $) * t;
    }
    function n(x, y) {
      var i = Math.abs(x * wh + y) % w2h;
      return arr[i];
    }
    function oct(x, y) {
      var o1 = p(x * 3.0, y * 4.0);
      var o2 = p(x * 4.0, y * 5.0);
      return o1 + o2 * 0.5;
    }
    function p(x, y) {
      var nx = Math.floor(x);
      var ny = Math.floor(y);
      return i(
        i(n(nx, ny), n(nx + 1, ny), x - nx),
        i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx),
        y - ny
      );
    }
    draw();
  }, [canvasRef]);

  return <canvas id="canv" ref={canvasRef} />;
}
export default Graphic;
