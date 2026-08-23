/* ==========================================================================
   NovaTrack · runtime del mockup de la app del técnico
   Depende de novatrack.js (NT.icon / NT.money / NT.num).
   ========================================================================== */
(function (global) {
  "use strict";
  var A = {};

  /* Pantallas del mockup, en el orden del recorrido del técnico */
  A.SCREENS = [
    ["login.html",         "Login"],
    ["consentimiento.html","Consentimiento"],
    ["servicios.html",     "Mis servicios"],
    ["detalle.html",       "Detalle"],
    ["estados.html",       "Estados de campo"],
    ["camara.html",        "Fotos"],
    ["reporte.html",       "Reporte"],
    ["firmas.html",        "Firmas"],
    ["gastos.html",        "Gastos"],
    ["offline.html",       "Offline y cola"],
    ["privacidad.html",    "Mi privacidad"]
  ];

  /* Barra de estado del sistema */
  A.sysbar = function (opts) {
    opts = opts || {};
    return '<div class="sysbar"><span>' + (opts.time || "11:42") + "</span>" +
      '<span class="sysbar__r">' +
        (opts.offline
          ? NT.icon("wifi_off", 12) + "<span>Sin señal</span>"
          : "<span>4G</span>" + NT.icon("gps", 12)) +
        NT.icon("battery", 13) + "<span>" + (opts.bat || "47") + "%</span>" +
      "</span></div>";
  };

  /* App bar */
  A.appbar = function (o) {
    o = o || {};
    return '<div class="appbar">' +
      (o.back ? '<button class="appbar__back" onclick="location.href=\'' + o.back + '\'">' + NT.icon("chevleft", 21) + "</button>" : "") +
      '<div><div class="appbar__t">' + (o.title || "NovaTrack") + "</div>" +
      (o.sub ? '<div class="appbar__s">' + o.sub + "</div>" : "") + "</div>" +
      '<div class="appbar__r">' + (o.right || "") + "</div></div>";
  };

  /* Barra de conexión */
  var NET = {
    off:  ["netbar--off",  "wifi_off", "Sin conexión · trabajando offline"],
    sync: ["netbar--sync", "refresh",  "Sincronizando…"],
    ok:   ["netbar--ok",   "check",    "Sincronizado"],
    idle: ["",             "info",     ""]
  };
  A.netbar = function (kind, count, text) {
    var n = NET[kind] || NET.idle;
    return '<div class="netbar ' + n[0] + '">' + NT.icon(n[1], 14) +
      "<span>" + (text || n[2]) + "</span>" +
      (count != null ? '<span class="netbar__c">' + count + "</span>" : "") + "</div>";
  };

  /* Tab bar inferior */
  A.tabbar = function (active) {
    var T = [
      ["servicios.html", "calendar", "Servicios"],
      ["gastos.html",    "money",    "Gastos"],
      ["offline.html",   "refresh",  "Sincro"],
      ["privacidad.html","shield",   "Privacidad"]
    ];
    return '<nav class="tabbar">' + T.map(function (t) {
      return '<a href="' + t[0] + '" class="' + (t[0] === active ? "is-active" : "") + '">' +
        NT.icon(t[1], 19) + "<span>" + t[2] + "</span></a>";
    }).join("") + "</nav>";
  };

  /* Toast dentro del teléfono — nunca falla en silencio */
  A.toast = function (o) {
    o = o || {};
    var host = document.querySelector(".atoast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "atoast-host";
      (document.querySelector(".phone__screen") || document.body).appendChild(host);
    }
    var ICO = { err: "xcircle", warn: "alert", ok: "okcircle", info: "info" };
    var el = document.createElement("div");
    el.className = "atoast atoast--" + (o.kind || "info");
    el.innerHTML = '<span style="flex:0 0 17px;margin-top:1px">' + NT.icon(ICO[o.kind] || "info", 17) + "</span>" +
      '<div style="flex:1;min-width:0"><div class="atoast__t">' + (o.title || "") + "</div>" +
      (o.msg ? '<div class="atoast__m">' + o.msg + "</div>" : "") +
      (o.reason ? '<code class="atoast__r">' + o.reason + "</code>" : "") + "</div>";
    el.addEventListener("click", function () { el.remove(); });
    host.appendChild(el);
    if (!o.sticky) setTimeout(function () { el.remove(); }, o.ms || 5200);
    return el;
  };

  /* Sello de geoestampa reutilizable */
  A.geoseal = function (o) {
    o = o || {};
    var rows = [
      ["latitud",   o.lat || "−25,281880"],
      ["longitud",  o.lon || "−57,633440"],
      ["precisión", o.prec || "±8 m"],
      ["disp.",     o.dev || "22/08 09:58:41 −03"],
      ["servidor",  o.srv || "22/08 09:58:44 −03"]
    ];
    if (o.extra) rows.push(o.extra);
    return '<div class="geoseal' + (o.warn ? " geoseal--warn" : "") + '">' +
      '<div class="geoseal__t">' + NT.icon(o.warn ? "alert" : "pin", 13) +
        (o.title || "Esto es lo que va a quedar registrado") + "</div>" +
      '<div class="geoseal__g">' + rows.map(function (r) {
        return '<span class="geoseal__k">' + r[0] + '</span><span class="geoseal__v">' + r[1] + "</span>";
      }).join("") + "</div>" +
      (o.note ? '<div style="font-size:10.5px;margin-top:6px;line-height:1.45;color:var(--n-600)">' + o.note + "</div>" : "") +
      "</div>";
  };

  /* Monta el marco del teléfono alrededor de [data-screen] */
  A.boot = function (o) {
    o = o || {};
    var payload = document.querySelector("[data-screen]");
    var wrap = document.createElement("div");
    wrap.className = "phone";
    wrap.innerHTML = '<div class="phone__notch"></div><div class="phone__screen"></div>';
    document.body.insertBefore(wrap, payload);
    var scr = wrap.querySelector(".phone__screen");
    scr.insertAdjacentHTML("beforeend", A.sysbar(o));
    while (payload.firstChild) scr.appendChild(payload.firstChild);
    payload.remove();

    var lbl = document.createElement("div");
    lbl.className = "phone__label";
    lbl.innerHTML = "<b>" + (o.label || "") + "</b>" + (o.note || "Mockup F0 · sin backend, sin GPS real");
    document.body.appendChild(lbl);

    /* Navegación entre pantallas del mockup */
    var nav = document.createElement("div");
    nav.className = "gallery-nav";
    var here = location.pathname.split("/").pop();
    nav.innerHTML = A.SCREENS.map(function (s) {
      return '<a href="' + s[0] + '" class="' + (s[0] === here ? "is-active" : "") + '">' + s[1] + "</a>";
    }).join("") + '<a href="../index.html" style="background:rgba(255,255,255,.28)">← Índice</a>';
    document.body.appendChild(nav);
  };

  global.A = A;
})(window);
