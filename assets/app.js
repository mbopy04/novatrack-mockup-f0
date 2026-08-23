/* ============================================================
   NovaTrack — Shell, patrones de UI y helpers del mockup
   ============================================================ */

/* ---------- Iconos (sprite inline) ---------- */
const ICONS = {
  dash:     '<path d="M3 3h7v7H3zM14 3h7v4h-7zM14 11h7v10h-7zM3 14h7v7H3z"/>',
  agenda:   '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  despacho: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><circle cx="12" cy="12" r="3"/>',
  servicio: '<path d="M14.7 6.3a4 4 0 1 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5z"/>',
  cliente:  '<path d="M3 21V8l7-5 7 5v13"/><path d="M9 21v-6h4v6M21 21V11l-4-2.8"/><path d="M2 21h20"/>',
  users:    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
  map:      '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  chart:    '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  pdf:      '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h4"/>',
  catalog:  '<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="8" cy="5" r="1.6" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="10" cy="19" r="1.6" fill="currentColor" stroke="none"/>',
  palette:  '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none"/>',
  search:   '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  bell:     '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  help:     '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17.5v.01"/>',
  chevD:    '<path d="M6 9l6 6 6-6"/>',
  chevR:    '<path d="M9 6l6 6-6 6"/>',
  chevL:    '<path d="M15 6l-6 6 6 6"/>',
  chevU:    '<path d="M18 15l-6-6-6 6"/>',
  plus:     '<path d="M12 5v14M5 12h14"/>',
  filter:   '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  down:     '<path d="M12 3v13M7 12l5 5 5-5M4 21h16"/>',
  export:   '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  print:    '<path d="M6 9V3h12v6M6 18H4v-6h16v6h-2"/><rect x="8" y="14" width="8" height="7"/>',
  refresh:  '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
  x:        '<path d="M18 6L6 18M6 6l12 12"/>',
  check:    '<path d="M20 6L9 17l-5-5"/>',
  alert:    '<path d="M12 3l9.5 17H2.5z"/><path d="M12 10v4M12 17.5v.01"/>',
  info:     '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/>',
  ban:      '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  pin:      '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  route:    '<circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="5" r="2.5"/><path d="M7.5 19H14a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6.5"/>',
  truck:    '<path d="M2 7h11v10H2z"/><path d="M13 10h4l4 4v3h-8z"/><circle cx="6" cy="18.5" r="2"/><circle cx="17" cy="18.5" r="2"/>',
  phone:    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  edit:     '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trash:    '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  eye:      '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  more:     '<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  menu:     '<path d="M3 6h18M3 12h18M3 18h18"/>',
  lock:     '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  logout:   '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  money:    '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.6-1-1.8-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2c-1.2 0-2.4-.5-3-1.5M12 6v12"/>',
  camera:   '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  sign:     '<path d="M3 17c3 0 3-10 6-10s3 10 6 10 3-6 6-6"/><path d="M2 21h20"/>',
  layers:   '<path d="M12 2 2 8l10 6 10-6z"/><path d="m2 14 10 6 10-6M2 11l10 6 10-6"/>',
  gauge:    '<path d="M12 14 8.5 8.5"/><circle cx="12" cy="14" r="1.6" fill="currentColor" stroke="none"/><path d="M3.5 17a9.5 9.5 0 1 1 17 0"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  shield:   '<path d="M12 2 4 5v6c0 5 3.4 9.2 8 11 4.6-1.8 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  save:     '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  copy:     '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  calc:     '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8"/>',
  swap:     '<path d="M16 3l4 4-4 4"/><path d="M20 7H4"/><path d="M8 21l-4-4 4-4"/><path d="M4 17h16"/>',
  sortA:    '<path d="M12 5v14M6 11l6-6 6 6"/>',
  grid:     '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  list:     '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  bolt:     '<path d="M13 2 3 14h8l-1 8 10-12h-8z"/>',
  wifi:     '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0"/>',
  battery:  '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/>',
  file:     '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/>',
  star:     '<path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z"/>',
  arrowR:   '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
function icon(name, cls) {
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
}

/* ---------- Estado persistido del mockup ---------- */
const store = {
  get fx() { return +(localStorage.getItem('nt_fx') || SESSION.fx); },
  set fx(v) { localStorage.setItem('nt_fx', v); },
  get tenant() { return localStorage.getItem('nt_tenant') || SESSION.tenantId; },
  set tenant(v) { localStorage.setItem('nt_tenant', v); },
};

/* ---------- Formateo ---------- */
const nfUsd = new Intl.NumberFormat('es-PY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const nfInt = new Intl.NumberFormat('es-PY', { maximumFractionDigits: 0 });
const nf1 = new Intl.NumberFormat('es-PY', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const usd = v => '$ ' + nfUsd.format(v);
const pyg = v => 'Gs. ' + nfInt.format(Math.round(v));
const toPyg = v => v * store.fx;

/** Bloque de doble moneda. Toda cifra monetaria del producto se muestra así. */
function money(v, cls) {
  return '<span class="money ' + (cls || '') + '" data-usd="' + v + '">' +
    '<b>' + usd(v) + '</b><i>' + pyg(toPyg(v)) + '</i></span>';
}
function moneyRow(v) {
  return '<span class="money-row" data-usd="' + v + '"><b>' + usd(v) + '</b> <i>' + pyg(toPyg(v)) + '</i></span>';
}
/** Recalcula todos los importes visibles cuando cambia el tipo de cambio. */
function repriceAll() {
  document.querySelectorAll('[data-usd]').forEach(el => {
    const v = +el.dataset.usd;
    const b = el.querySelector('b'), i = el.querySelector('i');
    if (b) b.textContent = usd(v);
    if (i) i.textContent = pyg(toPyg(v));
  });
  document.querySelectorAll('[data-pyg-only]').forEach(el => { el.textContent = pyg(toPyg(+el.dataset.pygOnly)); });
  document.querySelectorAll('.fx-val').forEach(el => { el.textContent = nfInt.format(store.fx); });
}

const initials = n => n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
const avColor = n => ['#2E5BD8', '#6A4A8F', '#0E7490', '#B45309', '#15803D', '#BE185D', '#4338CA'][n.charCodeAt(0) % 7];
function avatar(nombre, cls) {
  return '<span class="av ' + (cls || '') + '" style="background:' + avColor(nombre) + '" title="' + nombre + '">' + initials(nombre) + '</span>';
}
const pad = n => String(n).padStart(2, '0');
const hhmm = (h, m) => pad(h) + ':' + pad(m || 0);
function addMin(h, m, min) { const t = h * 60 + m + min; return hhmm(Math.floor(t / 60) % 24, t % 60); }
const DOW = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const DOW_S = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MES_S = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const fechaLarga = d => DOW[d.getDay()] + ' ' + d.getDate() + ' de ' + MES[d.getMonth()] + ' de ' + d.getFullYear();
const fechaCorta = d => pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
function parseISO(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
function isoToday() { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

function pill(estadoKey) {
  const e = ESTADOS[estadoKey];
  return '<span class="pill pill-' + estadoKey + '"><span class="dot"></span>' + e.label + '</span>';
}
/* Estado operativo de una persona — mismo vocabulario de color que las órdenes. */
const TEC_LABEL = { asignada: 'Con orden asignada', camino: 'En camino', trabajando: 'En sitio', pendiente: 'Con pendientes', cerrada: 'Libre' };
function pillTec(estadoKey) {
  return '<span class="pill pill-' + estadoKey + '"><span class="dot"></span>' + TEC_LABEL[estadoKey] + '</span>';
}
function prioTag(p) {
  if (p === 'urgente') return '<span class="pill pill-err">' + '⚡ Urgente</span>';
  if (p === 'alta') return '<span class="pill pill-warn">Alta</span>';
  return '<span class="pill pill-neutral">Normal</span>';
}
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ============================================================
   TOASTS — patrón obligatorio del producto.
   Regla: ningún error, bloqueo o redirect ocurre en silencio.
   ============================================================ */
const TOAST_ICON = { err: 'alert', warn: 'alert', ok: 'check', info: 'info' };
const TOAST_TITLE = { err: 'Error', warn: 'Atención', ok: 'Listo', info: 'Información' };

function toast(tipo, titulo, mensaje, opts) {
  opts = opts || {};
  let box = document.querySelector('.toasts');
  if (!box) { box = document.createElement('div'); box.className = 'toasts'; document.body.appendChild(box); }
  const el = document.createElement('div');
  el.className = 'toast toast-' + tipo;
  const meta = [];
  if (opts.code) meta.push('<code>' + esc(opts.code) + '</code>');
  meta.push(new Date().toLocaleTimeString('es-PY', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  if (opts.origen) meta.push(esc(opts.origen));
  el.innerHTML =
    '<span class="t-ico">' + icon(TOAST_ICON[tipo] || 'info', 'ic-lg') + '</span>' +
    '<div class="t-body">' +
      '<div class="t-title">' + esc(titulo || TOAST_TITLE[tipo]) + '</div>' +
      '<div class="t-msg">' + esc(mensaje) + '</div>' +
      '<div class="t-meta">' + meta.join('<span>·</span>') + '</div>' +
      (opts.accion ? '<div class="t-act"><button class="btn btn-sm">' + esc(opts.accion) + '</button></div>' : '') +
    '</div>' +
    '<button class="t-x" aria-label="Cerrar">' + icon('x', 'ic-sm') + '</button>';
  box.appendChild(el);
  const close = () => { el.classList.add('out'); setTimeout(() => el.remove(), 170); };
  el.querySelector('.t-x').onclick = close;
  const act = el.querySelector('.t-act .btn');
  if (act) act.onclick = () => { close(); if (opts.onAccion) opts.onAccion(); };
  if (!opts.sticky) setTimeout(close, opts.ms || (tipo === 'err' ? 8000 : 5000));
  return el;
}
const toastErr  = (t, m, o) => toast('err', t, m, o);
const toastWarn = (t, m, o) => toast('warn', t, m, o);
const toastOk   = (t, m, o) => toast('ok', t, m, o);
const toastInfo = (t, m, o) => toast('info', t, m, o);

/** Acción no disponible en el mockup: se avisa, nunca se ignora el click. */
function noMock(que) {
  toastInfo('Fuera de alcance del mockup', (que || 'Esta acción') + ' se implementa en F1. El mockup es solo aprobación visual.', { code: 'MOCKUP-F0' });
}

/* ============================================================
   Modal
   ============================================================ */
function modal(opts) {
  const bd = document.createElement('div');
  bd.className = 'backdrop';
  bd.innerHTML =
    '<div class="modal ' + (opts.size || '') + '" role="dialog" aria-modal="true">' +
      '<div class="modal-head">' + (opts.icon ? icon(opts.icon) : '') + '<h3>' + esc(opts.titulo) + '</h3>' +
        '<button class="x" aria-label="Cerrar">' + icon('x') + '</button></div>' +
      '<div class="modal-body">' + opts.body + '</div>' +
      (opts.foot === null ? '' : '<div class="modal-foot">' + (opts.foot ||
        '<button class="btn" data-close>Cancelar</button><button class="btn btn-primary" data-ok>Confirmar</button>') + '</div>') +
    '</div>';
  document.body.appendChild(bd);
  const close = () => bd.remove();
  bd.querySelector('.x').onclick = close;
  bd.onclick = e => { if (e.target === bd) close(); };
  bd.querySelectorAll('[data-close]').forEach(b => b.onclick = close);
  const ok = bd.querySelector('[data-ok]');
  if (ok) ok.onclick = () => { if (!opts.onOk || opts.onOk(bd) !== false) close(); };
  document.addEventListener('keydown', function esc2(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc2); }
  });
  return bd;
}

/* ============================================================
   Popover anclado
   ============================================================ */
function popover(anchor, html, opts) {
  document.querySelectorAll('.pop').forEach(p => p.remove());
  const p = document.createElement('div');
  p.className = 'pop';
  p.innerHTML = html;
  document.body.appendChild(p);
  const r = anchor.getBoundingClientRect();
  const w = p.offsetWidth;
  p.style.top = (r.bottom + 6 + window.scrollY) + 'px';
  p.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, (opts && opts.align === 'left' ? r.left : r.right - w))) + 'px';
  setTimeout(() => {
    document.addEventListener('click', function off(e) {
      if (!p.contains(e.target)) { p.remove(); document.removeEventListener('click', off); }
    });
  }, 0);
  return p;
}

/* ============================================================
   Navegación
   ============================================================ */
const NAV = [
  { titulo: 'Operación', items: [
    { id: 'agenda',     label: 'Agenda',              href: 'agenda.html',          ic: 'agenda' },
    { id: 'despacho',   label: 'Tablero de despacho', href: 'despacho.html',        ic: 'despacho' },
    { id: 'nuevo',      label: 'Nuevo servicio',      href: 'servicio-nuevo.html',  ic: 'plus' },
    { id: 'mapa',       label: 'Mapa en vivo',        href: 'mapa.html',            ic: 'map' },
  ]},
  { titulo: 'Maestros', items: [
    { id: 'clientes',      label: 'Clientes',      href: 'clientes.html',      ic: 'cliente' },
    { id: 'colaboradores', label: 'Colaboradores', href: 'colaboradores.html', ic: 'users' },
    { id: 'catalogos',     label: 'Catálogos',     href: 'catalogos.html',     ic: 'catalog' },
  ]},
  { titulo: 'Análisis', items: [
    { id: 'informes', label: 'Informes',        href: 'informes.html',  ic: 'chart' },
    { id: 'pdf',      label: 'Orden de servicio', href: 'orden-pdf.html', ic: 'pdf' },
  ]},
  { titulo: 'Sistema', items: [
    { id: 'patrones', label: 'Patrones de UI', href: 'patrones.html', ic: 'palette' },
  ]},
];

function navCounts() {
  const hoy = isoToday();
  const hoySrv = SERVICIOS.filter(s => s.fecha === hoy);
  return {
    agenda: hoySrv.length,
    despacho: hoySrv.filter(s => s.estado === 'asignada' || s.estado === 'camino').length,
    clientes: CLIENTES.length,
    colaboradores: COLABORADORES.filter(c => c.activo).length,
  };
}

/* ============================================================
   Shell (topbar + sidebar). Se inyecta en cada página.
   ============================================================ */
function renderShell(active) {
  const t = TENANTS.find(x => x.id === store.tenant) || TENANTS[0];
  const c = navCounts();

  document.getElementById('brand').innerHTML =
    '<div class="brand-mark">N</div>' +
    '<div class="brand-txt"><div class="brand-name">NovaTrack</div><div class="brand-sub">Field Service</div></div>';

  document.getElementById('topbar').innerHTML =
    '<button class="tb-btn tb-burger" id="burger" aria-label="Menú">' + icon('menu') + '</button>' +
    '<button class="tenant-pick" id="tenantPick">' +
      '<span class="tenant-avatar" style="background:' + t.color + '">' + t.code + '</span>' +
      '<span class="tenant-name">' + esc(t.name) + '</span>' + icon('chevD', 'ic-sm') +
    '</button>' +
    '<div class="gsearch">' + icon('search', 'ic-sm') +
      '<input id="gsearch" placeholder="Buscar orden, cliente, sucursal o técnico…"><kbd>⌘K</kbd></div>' +
    '<div class="tb-spacer"></div>' +
    '<button class="fx" id="fxBtn" title="Tipo de cambio — editable">' +
      '<span class="fx-label">USD</span>' + icon('swap', 'ic-sm') +
      '<span class="fx-val">' + nfInt.format(store.fx) + '</span>' +
      '<span class="fx-label">Gs</span>' + icon('edit', 'ic-sm') +
    '</button>' +
    '<button class="tb-btn" id="notifBtn" title="Notificaciones">' + icon('bell') + '<span class="tb-badge">5</span></button>' +
    '<button class="tb-btn" id="helpBtn" title="Ayuda">' + icon('help') + '</button>' +
    '<button class="tb-user" id="userBtn">' +
      '<span class="tb-avatar">' + SESSION.user.iniciales + '</span>' +
      '<span class="tb-uinfo"><span class="tb-uname">' + SESSION.user.nombre + '</span><br>' +
      '<span class="tb-urole">' + SESSION.user.rol + '</span></span>' + icon('chevD', 'ic-sm') +
    '</button>';

  document.getElementById('nav').innerHTML =
    NAV.map(g =>
      '<div class="nav-group"><div class="nav-title">' + g.titulo + '</div>' +
      g.items.map(i =>
        '<a class="nav-item' + (i.id === active ? ' active' : '') + '" href="' + i.href + '">' +
        icon(i.ic) + '<span>' + i.label + '</span>' +
        (c[i.id] != null ? '<span class="nav-count' + (i.id === 'despacho' ? ' hot' : '') + '">' + c[i.id] + '</span>' : '') +
        '</a>').join('') + '</div>').join('<div class="nav-sep"></div>') +
    '<div class="nav-foot"><div class="nav-env"><span class="dot"></span>Mockup F0 · datos de ejemplo</div></div>';

  wireShell(t);
}

function wireShell(t) {
  const burger = document.getElementById('burger');
  if (burger) burger.onclick = () => document.body.classList.toggle('nav-open');
  document.querySelector('.main').addEventListener('click', () => document.body.classList.remove('nav-open'));

  /* Selector de tenant */
  document.getElementById('tenantPick').onclick = function () {
    popover(this,
      '<div class="pop-title">Cambiar de organización</div>' +
      TENANTS.map(x =>
        '<button class="tenant-card' + (x.id === t.id ? ' on' : '') + (x.activo ? '' : ' off') + '" data-t="' + x.id + '">' +
        '<span class="t-av" style="background:' + x.color + '">' + x.code + '</span>' +
        '<span style="min-width:0"><span class="t-n">' + esc(x.name) + '</span>' +
        '<span class="t-m">' + x.plan + ' · ' + x.users + ' usuarios</span></span>' +
        (x.activo ? (x.id === t.id ? '<span style="margin-left:auto">' + icon('check', 'ic-sm') + '</span>' : '')
                  : '<span class="pill pill-err" style="margin-left:auto">Inactivo</span>') +
        '</button>').join('') +
      '<div class="hr"></div><div class="xsmall muted">El tenant se deriva del token de sesión, nunca de un parámetro del cliente.</div>'
    ).querySelectorAll('.tenant-card').forEach(b => {
      b.onclick = () => {
        const x = TENANTS.find(y => y.id === b.dataset.t);
        if (!x.activo) {
          /* Bloqueo con motivo: nunca falla en silencio. */
          toastErr('No se puede cambiar de organización', x.name + ': ' + x.motivo, { code: 'TENANT_INACTIVE', origen: 'Selector de tenant', accion: 'Ver facturación', onAccion: () => noMock('La pantalla de facturación') });
          return;
        }
        store.tenant = x.id;
        toastOk('Organización cambiada', 'Sesión activa en ' + x.name + '. Se recargaron los datos del tenant.', { code: 'TENANT_SWITCH' });
        setTimeout(() => location.reload(), 700);
      };
    });
  };

  /* Tipo de cambio editable */
  document.getElementById('fxBtn').onclick = function () {
    const p = popover(this,
      '<div class="pop-title">Tipo de cambio USD → Gs</div>' +
      '<div class="field"><label class="lbl">Cotización vigente</label>' +
      '<div class="inp-group"><input class="inp" id="fxInp" type="number" step="1" value="' + store.fx + '"><span class="addon">Gs / USD</span></div>' +
      '<div class="hint">Última actualización: ' + SESSION.fxFecha + ' · ' + SESSION.fxFuente + '</div></div>' +
      '<div class="row"><button class="btn btn-sm" id="fxBcp">Traer del BCP</button><span class="spacer"></span>' +
      '<button class="btn btn-primary btn-sm" id="fxOk">Aplicar</button></div>' +
      '<div class="hr"></div><div class="xsmall muted">Afecta la conversión mostrada en todo el sistema. Los montos se almacenan en su moneda de origen.</div>');
    p.querySelector('#fxBcp').onclick = () => { p.querySelector('#fxInp').value = 7318; };
    p.querySelector('#fxOk').onclick = () => {
      const v = +p.querySelector('#fxInp').value;
      if (!v || v < 1000 || v > 20000) {
        toastErr('Cotización rechazada', 'El valor ' + (v || '(vacío)') + ' está fuera del rango admitido (1.000 – 20.000 Gs/USD).', { code: 'FX_OUT_OF_RANGE', origen: 'Tipo de cambio' });
        return;
      }
      store.fx = v; repriceAll(); p.remove();
      toastOk('Tipo de cambio actualizado', 'Nueva cotización: ' + nfInt.format(v) + ' Gs/USD. Se recalcularon todos los importes en pantalla.', { code: 'FX_UPDATED', origen: SESSION.user.nombre });
    };
  };

  /* Notificaciones */
  document.getElementById('notifBtn').onclick = function () {
    popover(this,
      '<div class="pop-title">Notificaciones (5)</div>' +
      '<div style="max-width:330px">' + NOTIFS.map(n =>
        '<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--line-2)">' +
        '<span style="color:var(--' + (n.tipo === 'err' ? 'err' : n.tipo === 'warn' ? 'warn' : n.tipo === 'ok' ? 'ok' : 'info') + ')">' + icon(TOAST_ICON[n.tipo]) + '</span>' +
        '<div><div class="strong small">' + esc(n.t) + '</div><div class="xsmall muted">' + esc(n.m) + '</div>' +
        '<div class="xsmall muted-2">hace ' + n.hace + '</div></div></div>').join('') + '</div>');
  };

  document.getElementById('helpBtn').onclick = () => { location.href = 'patrones.html'; };

  document.getElementById('userBtn').onclick = function () {
    const p = popover(this,
      '<div style="display:flex;gap:9px;align-items:center;padding-bottom:9px;border-bottom:1px solid var(--line-2)">' +
      '<span class="av av-lg" style="background:var(--accent)">' + SESSION.user.iniciales + '</span>' +
      '<div><div class="strong">' + SESSION.user.nombre + '</div><div class="xsmall muted">' + SESSION.user.email + '</div>' +
      '<span class="pill pill-violet mt4">' + SESSION.user.rol + '</span></div></div>' +
      '<div style="padding-top:7px">' +
      '<a class="nav-item" style="color:var(--ink-2);height:28px;padding-left:0" href="#" id="uPerfil">' + icon('user') + 'Mi perfil</a>' +
      '<a class="nav-item" style="color:var(--ink-2);height:28px;padding-left:0" href="patrones.html">' + icon('palette') + 'Patrones de UI</a>' +
      '<a class="nav-item" style="color:var(--err);height:28px;padding-left:0" href="index.html">' + icon('logout') + 'Cerrar sesión</a>' +
      '</div>');
    p.querySelector('#uPerfil').onclick = e => { e.preventDefault(); p.remove(); noMock('La pantalla de perfil'); };
  };

  /* Buscador global */
  const gs = document.getElementById('gsearch');
  if (gs) {
    gs.onkeydown = e => {
      if (e.key === 'Enter') {
        const q = gs.value.trim();
        if (!q) { toastWarn('Búsqueda vacía', 'Escribí al menos 3 caracteres para buscar.', { code: 'SEARCH_EMPTY' }); return; }
        if (q.length < 3) { toastWarn('Búsqueda muy corta', 'La consulta “' + q + '” tiene menos de 3 caracteres.', { code: 'SEARCH_MIN_LEN' }); return; }
        globalSearch(q);
      }
    };
  }
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); if (gs) gs.focus(); }
  });
}

function globalSearch(q) {
  const ql = q.toLowerCase();
  const srv = SERVICIOS.filter(s => (s.id + s.cliente + s.sucursal).toLowerCase().includes(ql)).slice(0, 6);
  const cli = CLIENTES.filter(c => c.nombre.toLowerCase().includes(ql)).slice(0, 6);
  const col = COLABORADORES.filter(c => c.nombre.toLowerCase().includes(ql)).slice(0, 6);
  const total = srv.length + cli.length + col.length;
  if (!total) {
    toastWarn('Sin resultados', 'No se encontró nada para “' + q + '” en órdenes, clientes ni colaboradores del tenant activo.', { code: 'SEARCH_NO_RESULTS', origen: 'Buscador global' });
    return;
  }
  modal({
    titulo: 'Resultados para “' + q + '”', icon: 'search', size: 'wide', foot: '<button class="btn" data-close>Cerrar</button>',
    body:
      (srv.length ? '<div class="lbl">Órdenes de servicio (' + srv.length + ')</div>' + srv.map(s =>
        '<a class="row" style="padding:6px 0;border-bottom:1px solid var(--line-2)" href="orden-pdf.html">' +
        '<span class="mono strong">' + s.id + '</span>' + pill(s.estado) +
        '<span class="truncate">' + esc(s.cliente) + ' · ' + esc(s.sucursal) + '</span>' +
        '<span class="spacer"></span><span class="xsmall muted">' + s.fecha + '</span></a>').join('') : '') +
      (cli.length ? '<div class="lbl mt12">Clientes (' + cli.length + ')</div>' + cli.map(c =>
        '<a class="row" style="padding:6px 0;border-bottom:1px solid var(--line-2)" href="cliente.html?id=' + c.id + '">' +
        icon('cliente', 'ic-sm') + '<span class="strong">' + esc(c.nombre) + '</span>' +
        '<span class="tag">' + c.nSuc + ' sucursales</span><span class="spacer"></span>' +
        '<span class="xsmall muted">' + c.rubro + '</span></a>').join('') : '') +
      (col.length ? '<div class="lbl mt12">Colaboradores (' + col.length + ')</div>' + col.map(c =>
        '<a class="row" style="padding:6px 0;border-bottom:1px solid var(--line-2)" href="colaboradores.html">' +
        avatar(c.nombre, 'av-sm') + '<span class="strong">' + esc(c.nombre) + '</span>' +
        '<span class="tag">' + c.rol + '</span><span class="spacer"></span>' + pill(c.estado) + '</a>').join('') : ''),
  });
}

/* ============================================================
   Page header
   ============================================================ */
function pageHead(o) {
  return '<div class="page-head">' +
    '<div class="crumbs">' + (o.crumbs || []).map((c, i, a) =>
      (c.href ? '<a href="' + c.href + '">' + esc(c.t) + '</a>' : '<span>' + esc(c.t) + '</span>') +
      (i < a.length - 1 ? '<span class="sep">/</span>' : '')).join('') + '</div>' +
    '<div class="ph-row">' +
      '<div class="ph-title">' + (o.icon ? '<span class="ph-ico">' + icon(o.icon, 'ic-lg') + '</span>' : '') +
      '<div><h1>' + esc(o.titulo) + '</h1>' + (o.meta ? '<div class="ph-meta">' + o.meta + '</div>' : '') + '</div></div>' +
      '<div class="ph-actions">' + (o.acciones || '') + '</div>' +
    '</div>' +
    (o.kpis ? '<div class="kpis">' + o.kpis + '</div>' : '') +
    (o.tabs ? '<div class="tabs">' + o.tabs + '</div>' : '') +
    '</div>';
}
function kpi(label, val, sub, extra) {
  return '<div class="kpi"><div class="kpi-label">' + (extra || '') + label + '</div>' +
    '<div class="kpi-val">' + val + '</div>' + (sub ? '<div class="kpi-sub">' + sub + '</div>' : '') + '</div>';
}

/* Leyenda de estados — reutilizada en agenda, mapa y despacho. */
function legendHTML() {
  return '<div class="legend">' + ESTADO_ORDER.map(k =>
    '<span class="legend-item" title="' + ESTADOS[k].desc + '"><span class="sw-box" style="background:' + ESTADOS[k].color + '"></span>' + ESTADOS[k].label + '</span>').join('') + '</div>';
}

/* Leyenda equivalente, con el vocabulario de personas. */
function legendTecHTML() {
  return '<div class="legend">' + ESTADO_ORDER.map(k =>
    '<span class="legend-item"><span class="sw-box" style="background:' + ESTADOS[k].color + '"></span>' + TEC_LABEL[k] + '</span>').join('') + '</div>';
}

/* ---------- Paginación reutilizable ---------- */
function pagerHTML(page, totalPages, totalRows, porPagina) {
  const p = [];
  const push = n => p.push('<button class="pg' + (n === page ? ' on' : '') + '" data-pg="' + n + '">' + n + '</button>');
  push(1);
  if (page > 3) p.push('<span class="pg dots">…</span>');
  for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) push(i);
  if (page < totalPages - 2) p.push('<span class="pg dots">…</span>');
  if (totalPages > 1) push(totalPages);
  const desde = (page - 1) * porPagina + 1, hasta = Math.min(page * porPagina, totalRows);
  return '<div class="pager">' +
    '<span>Mostrando <b>' + desde + '–' + hasta + '</b> de <b>' + nfInt.format(totalRows) + '</b></span>' +
    '<span class="sep-v"></span><span>' + porPagina + ' por página</span>' +
    '<span class="spacer"></span>' +
    '<div class="pages"><button class="pg" data-pg="' + Math.max(1, page - 1) + '"' + (page === 1 ? ' disabled' : '') + '>' + icon('chevL', 'ic-sm') + '</button>' +
    p.join('') +
    '<button class="pg" data-pg="' + Math.min(totalPages, page + 1) + '"' + (page === totalPages ? ' disabled' : '') + '>' + icon('chevR', 'ic-sm') + '</button></div></div>';
}

/* ---------- Detalle de una orden (drawer compartido) ---------- */
function abrirServicio(s) {
  const tot = s.montoUsd + s.gastosUsd;
  modal({
    titulo: 'Orden ' + s.id, icon: 'servicio', size: 'wide',
    foot: '<button class="btn btn-danger left" onclick="noMock(\'Cancelar la orden\')">' + icon('ban', 'ic-sm') + 'Cancelar orden</button>' +
      '<button class="btn" data-close>Cerrar</button>' +
      '<a class="btn" href="orden-pdf.html">' + icon('pdf', 'ic-sm') + 'Ver PDF</a>' +
      '<button class="btn btn-primary" data-ok>' + icon('edit', 'ic-sm') + 'Reasignar</button>',
    onOk: () => { toastOk('Orden reasignada', s.id + ' pasó a la Cuadrilla Norte. Se notificó por push a los 4 integrantes.', { code: 'ORDER_REASSIGNED' }); },
    body:
      '<div class="row wrap mb12">' + pill(s.estado) + prioTag(s.prioridad) +
      '<span class="tag">' + esc(s.tipoId) + '</span><span class="tag">SLA ' + s.sla + ' h</span>' +
      (s.slaOk ? '' : '<span class="pill pill-err">SLA vencido</span>') + '</div>' +
      '<div class="grid g-2">' +
        '<div><dl class="dl">' +
          '<dt>Tipo</dt><dd>' + esc(s.tipo) + '</dd>' +
          '<dt>Cliente</dt><dd>' + esc(s.cliente) + '</dd>' +
          '<dt>Sucursal</dt><dd>' + esc(s.sucursal) + '</dd>' +
          '<dt>Dirección</dt><dd>' + esc(s.dir) + ', ' + esc(s.ciudad) + '</dd>' +
          '<dt>Geo</dt><dd class="mono xsmall">' + s.lat + ', ' + s.lng + '</dd>' +
          '<dt>Contacto</dt><dd>' + esc(s.contacto) + ' · ' + esc(s.tel) + '</dd>' +
        '</dl></div>' +
        '<div><dl class="dl">' +
          '<dt>Fecha</dt><dd>' + fechaCorta(parseISO(s.fecha)) + '</dd>' +
          '<dt>Ventana</dt><dd>' + hhmm(s.hIni, s.mIni) + ' – ' + addMin(s.hIni, s.mIni, s.dur) + ' (' + (s.dur / 60).toFixed(1).replace('.0', '') + ' h)</dd>' +
          '<dt>Asignado a</dt><dd>' + (s.cuadrilla ? '<span class="pill pill-violet">' + esc(s.cuadrilla) + '</span> ' : '') +
            s.tecnicos.map(t => esc(t.nombre)).join(', ') + '</dd>' +
          '<dt>Checklist</dt><dd>' + s.checklistOk + ' / ' + s.checklistTotal + '</dd>' +
          '<dt>Evidencia</dt><dd>' + s.fotos + ' fotos · ' + (s.firma ? 'firma OK' : 'sin firma') + '</dd>' +
          '<dt>Kilometraje</dt><dd>' + s.km + ' km</dd>' +
        '</dl></div>' +
      '</div>' +
      (s.pendientes ? '<div class="note note-warn mt12">' + icon('alert') + '<div><b>Pendiente declarado por el técnico</b><br>' + esc(s.pendientes) + '</div></div>' : '') +
      (s.obs ? '<div class="note note-neutral mt12">' + icon('info') + '<div>' + esc(s.obs) + '</div></div>' : '') +
      '<div class="lbl mt16">Importes</div>' +
      '<table class="tbl tbl-compact"><tbody>' +
        '<tr><td>Mano de obra (' + esc(s.tipo) + ')</td><td class="num">' + moneyRow(s.montoUsd) + '</td></tr>' +
        s.gastos.map(g => '<tr><td class="muted">Gasto — ' + esc(g.tipo) + (g.comprobante ? ' <span class="tag">' + g.comprobante + '</span>' : '') + '</td><td class="num">' + moneyRow(g.usd) + '</td></tr>').join('') +
      '</tbody><tfoot><tr><td>Total</td><td class="num">' + moneyRow(tot) + '</td></tr></tfoot></table>',
  });
}

/* ---------- Arranque ---------- */
function boot(active) {
  renderShell(active);
  document.querySelectorAll('[data-nomock]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); noMock(el.dataset.nomock); });
  });
}
