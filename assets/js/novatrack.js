/* ==========================================================================
   NovaTrack · runtime del mockup F0
   Sin backend. Datos hardcodeados. Solo comportamiento de navegación,
   moneda dual, toasts y estados visuales.
   ========================================================================== */
(function (global) {
  "use strict";

  var NT = {};

  /* --- Iconos (Lucide-style, 24x24 stroke) ------------------------------ */
  var P = {
    calendar:  '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    plus:      '<path d="M12 5v14M5 12h14"/>',
    users:     '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
    building:  '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 7h1M9 11h1M9 15h1M14 7h1M14 11h1M14 15h1"/>',
    map:       '<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3z"/><path d="M9 3v15M15 6v15"/>',
    chart:     '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
    file:      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
    settings:  '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.5.6.87 1.14.91H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    search:    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    bell:      '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    help:      '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    filter:    '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
    download:  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    printer:   '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    edit:      '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
    trash:     '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
    eye:       '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7"/><circle cx="12" cy="12" r="3"/>',
    check:     '<path d="M20 6 9 17l-5-5"/>',
    x:         '<path d="M18 6 6 18M6 6l12 12"/>',
    alert:     '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0"/><path d="M12 9v4M12 17h.01"/>',
    info:      '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    okcircle:  '<circle cx="12" cy="12" r="10"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
    xcircle:   '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
    pin:       '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    clock:     '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    truck:     '<path d="M10 17h4V5H2v12h3M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    wrench:    '<path d="M14.7 6.3a4 4 0 0 0 5 5l-9.6 9.6a2.1 2.1 0 0 1-3-3z"/>',
    camera:    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    wifi_off:  '<path d="M1 1l22 22M16.7 12.6a6 6 0 0 0-4.5-2.1M5 12.6a10 10 0 0 1 4-2.4M2 8.8a15 15 0 0 1 5-3M20.5 8.8a15 15 0 0 0-8-3.6M12 20h.01"/>',
    upload:    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
    shield:    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
    lock:      '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    logout:    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
    chevright: '<path d="m9 18 6-6-6-6"/>',
    chevleft:  '<path d="m15 18-6-6 6-6"/>',
    chevdown:  '<path d="m6 9 6 6 6-6"/>',
    menu:      '<path d="M3 12h18M3 6h18M3 18h18"/>',
    refresh:   '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    signature: '<path d="M3 17c3 0 3-9 6-9s3 9 6 9 3-5 6-5"/><path d="M3 21h18"/>',
    money:     '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
    layers:    '<path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    play:      '<path d="m6 3 14 9-14 9z"/>',
    stop:      '<rect x="5" y="5" width="14" height="14" rx="2"/>',
    battery:   '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/>',
    gps:       '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="8"/>',
    inbox:     '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.4 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.4-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.8 1.1"/>'
  };

  NT.icon = function (name, size, cls) {
    var d = P[name];
    if (!d) return "";
    return '<svg class="' + (cls || "") + '" width="' + (size || 16) + '" height="' + (size || 16) +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  };

  /* --- Moneda dual USD / Gs ---------------------------------------------- */
  var FX_KEY = "nt.fx";
  NT.fx = function () { return Number(global.localStorage && localStorage.getItem(FX_KEY)) || 7350; };
  NT.setFx = function (v) {
    v = Number(v);
    if (!v || v <= 0) { NT.toast({ kind: "err", title: "Tipo de cambio inválido", msg: "El valor debe ser un número mayor que cero.", reason: "FX_RATE_INVALID · valor recibido: " + v }); return false; }
    try { localStorage.setItem(FX_KEY, String(v)); } catch (e) {}
    NT.toast({ kind: "ok", title: "Tipo de cambio actualizado", msg: "1 USD = " + NT.num(v) + " Gs. Se recalcularon los montos de la vista." });
    NT.paintFx();
    return true;
  };
  NT.num = function (n, dec) {
    dec = dec == null ? 0 : dec;
    return Number(n).toLocaleString("es-PY", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  };
  NT.usd = function (n) { return "USD " + NT.num(n, 2); };
  NT.gs  = function (n) { return "Gs " + NT.num(Math.round(n / 1000) * 1000); };
  /** Monto en doble moneda. Recibe USD, deriva Guaraníes con el TC vigente. */
  NT.money = function (usdAmount, inline) {
    var g = usdAmount * NT.fx();
    return '<span class="money ' + (inline ? "money--inline" : "") + '" data-usd="' + usdAmount + '">' +
      '<span class="money__pri">' + NT.usd(usdAmount) + "</span>" +
      '<span class="money__sec">' + NT.gs(g) + "</span></span>";
  };
  NT.paintFx = function () {
    var fx = NT.fx();
    [].forEach.call(document.querySelectorAll(".money[data-usd]"), function (el) {
      var sec = el.querySelector(".money__sec");
      if (sec) sec.textContent = NT.gs(Number(el.dataset.usd) * fx);
    });
    [].forEach.call(document.querySelectorAll("[data-fx-label]"), function (el) {
      el.textContent = NT.num(fx);
    });
  };

  /* --- Toasts — prohibido el silent failure ------------------------------ */
  var ICON_BY_KIND = { err: "xcircle", warn: "alert", ok: "okcircle", info: "info" };
  NT.toast = function (o) {
    o = o || {};
    var kind = o.kind || "info";
    var host = document.querySelector(".toast-host");
    if (!host) { host = document.createElement("div"); host.className = "toast-host"; document.body.appendChild(host); }

    var el = document.createElement("div");
    el.className = "toast toast--" + kind;
    el.setAttribute("role", kind === "err" ? "alert" : "status");
    el.innerHTML =
      '<span class="toast__icon">' + NT.icon(ICON_BY_KIND[kind] || "info", 18) + "</span>" +
      '<div class="toast__body">' +
        '<div class="toast__title">' + (o.title || "") + "</div>" +
        (o.msg ? '<div class="toast__msg">' + o.msg + "</div>" : "") +
        (o.reason ? '<code class="toast__reason">' + o.reason + "</code>" : "") +
        (o.action ? '<div class="toast__actions"><button class="btn btn--sm">' + o.action + "</button></div>" : "") +
      "</div>" +
      '<button class="toast__close" aria-label="Cerrar">' + NT.icon("x", 15) + "</button>";

    el.querySelector(".toast__close").addEventListener("click", function () { el.remove(); });
    host.appendChild(el);
    if (o.sticky !== true) setTimeout(function () { el.remove(); }, o.ms || 6500);
    return el;
  };

  /* Atajo: acción no disponible en el mockup. Nunca falla en silencio. */
  NT.notInMock = function (what) {
    NT.toast({
      kind: "info",
      title: "Fuera de alcance del mockup",
      msg: (what || "Esta acción") + " se implementa en F1, con backend real.",
      reason: "MOCKUP_F0 · sin backend, sin persistencia · propose → approve → execute"
    });
  };

  /* --- Modales ------------------------------------------------------------ */
  NT.openModal = function (id) {
    var m = document.getElementById(id);
    if (!m) { NT.toast({ kind: "err", title: "No se pudo abrir el panel", msg: "El mockup no encontró el diálogo solicitado.", reason: "MODAL_NOT_FOUND · id=" + id }); return; }
    m.hidden = false;
  };
  NT.closeModal = function (id) { var m = document.getElementById(id); if (m) m.hidden = true; };

  /* --- Shell: topbar + rail ----------------------------------------------- */
  var NAV = [
    { g: "Operación", items: [
      { k: "agenda",    t: "Agenda",              i: "calendar", h: "agenda.html",       c: "18" },
      { k: "despacho",  t: "Despacho",            i: "truck",    h: "despacho.html",     c: "14" },
      { k: "asignacion",t: "Asignación",          i: "inbox",    h: "asignacion.html",   c: "4" },
      { k: "nuevo",     t: "Nuevo servicio",      i: "plus",     h: "servicio-nuevo.html" },
      { k: "mapa",      t: "Mapa en vivo",        i: "map",      h: "mapa.html",         c: "7" }
    ]},
    { g: "Maestros", items: [
      { k: "clientes",  t: "Clientes",            i: "building", h: "clientes.html",     c: "312" },
      { k: "colabs",    t: "Colaboradores",       i: "users",    h: "colaboradores.html", c: "24" },
      { k: "catalogos", t: "Catálogos",           i: "layers",   h: "catalogos.html" }
    ]},
    { g: "Análisis", items: [
      { k: "informes",  t: "Informes",            i: "chart",    h: "informes.html" },
      { k: "orden",     t: "Orden de servicio",   i: "file",     h: "orden-pdf.html" }
    ]},
    { g: "Sistema", items: [
      { k: "apk",       t: "App del técnico",     i: "download", h: "descargar-app.html" },
      { k: "patrones",  t: "Patrones de UI",      i: "settings", h: "patrones.html" }
    ]}
  ];

  NT.shell = function (opts) {
    opts = opts || {};
    var active = opts.active || "";
    var root = document.querySelector("[data-shell]");
    if (!root) return;

    var railHtml = NAV.map(function (grp) {
      return '<div class="rail__group">' + grp.g + "</div>" + grp.items.map(function (it) {
        return '<a class="rail__item' + (it.k === active ? " is-active" : "") + '" href="' + it.h + '">' +
          NT.icon(it.i, 15) + "<span>" + it.t + "</span>" +
          (it.c ? '<span class="rail__count">' + it.c + "</span>" : "") + "</a>";
      }).join("");
    }).join("");

    root.insertAdjacentHTML("afterbegin",
      '<header class="topbar">' +
        '<button class="icon-btn u-hide" data-rail-toggle aria-label="Menú">' + NT.icon("menu", 18) + "</button>" +
        '<a class="brand" href="../index.html" style="color:#fff">' +
          '<span class="brand__mark">N</span><span>NovaTrack<span class="brand__sub">by Noventra</span></span>' +
        "</a>" +
        '<button class="tenant-pick" data-act="tenant">' +
          '<span class="tenant-pick__dot"></span><span>Frigorífico Guaraní S.A.</span>' + NT.icon("chevdown", 13) +
        "</button>" +
        '<label class="omni">' + NT.icon("search", 15) +
          '<input placeholder="Buscar servicio, cliente, técnico, sucursal…" data-act="omni"><kbd>⌘K</kbd>' +
        "</label>" +
        '<div class="topbar__right">' +
          '<button class="fx-chip" data-act="fx" title="Tipo de cambio editable">' + NT.icon("money", 14) +
            '<span>1 USD = <strong data-fx-label>7.350</strong> Gs</strong></span>' + NT.icon("edit", 12) +
          "</button>" +
          '<button class="icon-btn" data-act="alerts" aria-label="Alertas">' + NT.icon("bell", 17) +
            '<span class="icon-btn__badge">3</span></button>' +
          '<button class="icon-btn" data-act="help" aria-label="Ayuda">' + NT.icon("help", 17) + "</button>" +
          '<div class="avatar" data-act="user" title="Juan Di Matteo · Administrador">JD</div>' +
        "</div>" +
      "</header>" +
      '<div class="body"><nav class="rail" data-rail>' + railHtml +
        '<div class="rail__spacer"></div>' +
        '<div class="rail__foot">Mockup F0 · sin backend<br>Datos de ejemplo</div>' +
      "</nav>" +
      '<section class="main" data-main></section></div>');

    // Mover el contenido declarado en la página dentro de <section class="main">
    var main = root.querySelector("[data-main]");
    var payload = root.querySelector("[data-page]");
    if (payload && main) main.appendChild(payload);

    NT.bindShell();
    NT.paintFx();
  };

  NT.bindShell = function () {
    var t = document.querySelector("[data-rail-toggle]");
    if (t) t.addEventListener("click", function () { document.querySelector("[data-rail]").classList.toggle("is-open"); });

    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-act]");
      if (!el) return;
      var act = el.dataset.act;
      if (act === "fx")     { NT.openFxDialog(); }
      else if (act === "tenant") { NT.toast({ kind: "info", title: "Selector de tenant", msg: "Juan tiene acceso a 3 empresas. El cambio de tenant recarga el contexto completo y queda auditado.", reason: "TENANT_SWITCH · frigorifico-guarani → (demo)" }); }
      else if (act === "alerts") { NT.toast({ kind: "warn", title: "3 alertas operativas", msg: "1 servicio vencido sin check-in · 1 hueco de GPS de 14 min · 1 gasto sin comprobante.", sticky: true, action: "Ver alertas" }); }
      else if (act === "help")   { NT.toast({ kind: "info", title: "NovaTrack F0", msg: "Mockup navegable para aprobación visual. Ninguna pantalla persiste datos." }); }
      else if (act === "user")   { NT.toast({ kind: "info", title: "Juan Di Matteo", msg: "Administrador · Frigorífico Guaraní S.A. · sesión de demostración." }); }
      else if (act === "omni")   { /* input: no-op */ }
      else if (act === "mock")   { NT.notInMock(el.dataset.what); }
    });

    // Enter en el buscador global
    var omni = document.querySelector('[data-act="omni"]');
    if (omni) omni.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        NT.toast({ kind: "info", title: "Búsqueda global", msg: 'El buscador resuelve servicios, clientes, sucursales, técnicos y números de orden. Consulta: "' + (omni.value || "—") + '".' });
      }
    });
  };

  /* Diálogo de tipo de cambio — se inyecta una sola vez */
  NT.openFxDialog = function () {
    var id = "nt-fx-modal";
    if (!document.getElementById(id)) {
      document.body.insertAdjacentHTML("beforeend",
        '<div class="scrim" id="' + id + '" hidden>' +
          '<div class="modal" style="max-width:420px">' +
            '<div class="modal__head"><span style="color:var(--accent)">' + NT.icon("money", 18) + "</span>" +
              '<div class="modal__title">Tipo de cambio</div><div class="spacer"></div>' +
              '<button class="icon-btn" style="color:var(--n-500)" data-fx-close>' + NT.icon("x", 16) + "</button></div>" +
            '<div class="modal__body stack">' +
              '<div class="banner banner--info"><span class="banner__icon">' + NT.icon("info", 16) + "</span>" +
                "<div><strong>Cotización operativa</strong>Se aplica a todo monto mostrado en la sesión. Cada orden cerrada guarda además el TC del día de cierre, para que un informe histórico no cambie al mover esta cotización.</div></div>" +
              '<div class="field"><label class="field__label">Guaraníes por 1 USD <span class="req">*</span></label>' +
                '<input class="input" id="nt-fx-input" type="number" min="1" step="50">' +
                '<span class="field__hint">Última carga: hoy 08:15 · Juan Di Matteo</span></div>' +
            "</div>" +
            '<div class="modal__foot"><div class="spacer"></div>' +
              '<button class="btn" data-fx-close>Cancelar</button>' +
              '<button class="btn btn--primary" id="nt-fx-save">Aplicar</button></div>' +
          "</div></div>");
      document.getElementById(id).addEventListener("click", function (e) {
        if (e.target.closest("[data-fx-close]") || e.target.id === id) NT.closeModal(id);
      });
      document.getElementById("nt-fx-save").addEventListener("click", function () {
        if (NT.setFx(document.getElementById("nt-fx-input").value)) NT.closeModal(id);
      });
    }
    document.getElementById("nt-fx-input").value = NT.fx();
    NT.openModal(id);
  };

  /* --- Tabs / segmentos declarativos -------------------------------------- */
  NT.bindGroups = function () {
    document.addEventListener("click", function (e) {
      var b = e.target.closest(".tabs button, .seg button");
      if (!b || b.hasAttribute("data-no-toggle")) return;
      var scope = b.closest(".tabs, .seg");
      [].forEach.call(scope.querySelectorAll("button"), function (x) { x.classList.remove("is-active"); });
      b.classList.add("is-active");
      var panelId = b.dataset.panel;
      if (panelId) {
        var host = document.querySelector(b.dataset.panelHost || "[data-panels]");
        if (host) [].forEach.call(host.querySelectorAll("[data-panel-id]"), function (p) {
          p.hidden = p.dataset.panelId !== panelId;
        });
      }
    });
  };

  /* --- Selección de filas -------------------------------------------------- */
  NT.bindRows = function () {
    document.addEventListener("click", function (e) {
      var tr = e.target.closest("tr[data-row]");
      if (!tr || e.target.closest("a, button, input")) return;
      var tb = tr.closest("tbody");
      [].forEach.call(tb.querySelectorAll("tr"), function (x) { x.classList.remove("is-selected"); });
      tr.classList.add("is-selected");
    });
  };

  /* --- Cinta de mockup ----------------------------------------------------- */
  NT.ribbon = function (href) {
    document.body.insertAdjacentHTML("beforeend",
      '<a class="mock-ribbon" href="' + (href || "../index.html") + '">Mockup F0 · índice</a>');
  };

  NT.boot = function (opts) {
    NT.shell(opts);
    NT.bindGroups();
    NT.bindRows();
    NT.ribbon(opts && opts.home);
  };

  global.NT = NT;
})(window);
