/* ============================================================
   NovaTrack — Datos de ejemplo (hardcodeados)
   MOCKUP: nada de esto viene de un backend. Generación determinista.
   ============================================================ */

/* PRNG determinista: el mockup se ve igual en cada recarga. */
function mkRand(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const iRange = (r, a, b) => a + Math.floor(r() * (b - a + 1));

/* ---------- Estados del servicio (contrato de color) ---------- */
const ESTADOS = {
  asignada:   { key: 'asignada',   label: 'Asignada',                color: '#DC2626', bg: '#FEE9E9', desc: 'Despachada al técnico, aún sin salir' },
  camino:     { key: 'camino',     label: 'En camino',               color: '#EA580C', bg: '#FEEDE0', desc: 'Técnico en tránsito, GPS activo' },
  trabajando: { key: 'trabajando', label: 'Trabajando',              color: '#16A34A', bg: '#E4F6EA', desc: 'Check-in hecho en sitio' },
  pendiente:  { key: 'pendiente',  label: 'Finalizada c/ pendientes', color: '#CA8A04', bg: '#FBF3D8', desc: 'Check-out hecho, quedan tareas abiertas' },
  cerrada:    { key: 'cerrada',    label: 'Cerrada',                 color: '#6B7280', bg: '#EEF0F2', desc: 'Conformada y facturable' },
};
const ESTADO_ORDER = ['asignada', 'camino', 'trabajando', 'pendiente', 'cerrada'];

/* ---------- Tenants (empresas suscriptas al SaaS) ---------- */
const TENANTS = [
  { id: 'nvt', code: 'NVT', name: 'Noventra E.A.S.',            plan: 'Enterprise', users: 48,  color: '#2E5BD8', ruc: '80098765-4', ciudad: 'Asunción',       activo: true },
  { id: 'clt', code: 'CTP', name: 'ClimaTec Paraguay S.A.',     plan: 'Business',   users: 22,  color: '#6A4A8F', ruc: '80045512-1', ciudad: 'San Lorenzo',    activo: true },
  { id: 'rfx', code: 'RFX', name: 'Refrimax S.R.L.',            plan: 'Business',   users: 15,  color: '#0E7490', ruc: '80033401-7', ciudad: 'Ciudad del Este', activo: true },
  { id: 'gsr', code: 'GSR', name: 'Grupo Servitec del Este',    plan: 'Starter',    users: 7,   color: '#B45309', ruc: '80071230-9', ciudad: 'Encarnación',    activo: false, motivo: 'Suscripción vencida el 31/07 — regularizar pago para reactivar' },
];

/* ---------- Catálogos administrables ---------- */
const TIPOS_SERVICIO = [
  { id: 'TS-01', nombre: 'Mantenimiento preventivo A/A',   dur: 90,  sla: 72, precio: 85,  cat: 'Climatización', activo: true,  color: '#2E5BD8', reqFoto: true,  reqFirma: true,  checklist: 12 },
  { id: 'TS-02', nombre: 'Correctivo A/A split',            dur: 120, sla: 24, precio: 130, cat: 'Climatización', activo: true,  color: '#2E5BD8', reqFoto: true,  reqFirma: true,  checklist: 9  },
  { id: 'TS-03', nombre: 'Recarga de gas refrigerante',     dur: 60,  sla: 24, precio: 145, cat: 'Climatización', activo: true,  color: '#0E7490', reqFoto: true,  reqFirma: true,  checklist: 6  },
  { id: 'TS-04', nombre: 'Instalación cámara frigorífica',  dur: 480, sla: 168, precio: 1250, cat: 'Refrigeración', activo: true, color: '#0E7490', reqFoto: true,  reqFirma: true,  checklist: 24, cuadrilla: true },
  { id: 'TS-05', nombre: 'Correctivo cámara frigorífica',   dur: 180, sla: 8,  precio: 320, cat: 'Refrigeración', activo: true,  color: '#0E7490', reqFoto: true,  reqFirma: true,  checklist: 15 },
  { id: 'TS-06', nombre: 'Mantenimiento grupo electrógeno', dur: 150, sla: 72, precio: 210, cat: 'Energía',       activo: true,  color: '#B45309', reqFoto: true,  reqFirma: true,  checklist: 18 },
  { id: 'TS-07', nombre: 'Puesta en marcha chiller',        dur: 360, sla: 120, precio: 890, cat: 'Climatización', activo: true, color: '#2E5BD8', reqFoto: true,  reqFirma: true,  checklist: 21, cuadrilla: true },
  { id: 'TS-08', nombre: 'Instalación CCTV',                dur: 300, sla: 120, precio: 540, cat: 'Electrónica',   activo: true,  color: '#6A4A8F', reqFoto: true,  reqFirma: true,  checklist: 16, cuadrilla: true },
  { id: 'TS-09', nombre: 'Correctivo eléctrico',            dur: 120, sla: 12, precio: 160, cat: 'Energía',       activo: true,  color: '#B45309', reqFoto: true,  reqFirma: true,  checklist: 11 },
  { id: 'TS-10', nombre: 'Inspección técnica / relevamiento', dur: 45, sla: 168, precio: 45, cat: 'Otros',        activo: true,  color: '#6B7280', reqFoto: true,  reqFirma: false, checklist: 8  },
  { id: 'TS-11', nombre: 'Limpieza de conductos',           dur: 240, sla: 168, precio: 380, cat: 'Climatización', activo: false, color: '#2E5BD8', reqFoto: true, reqFirma: true,  checklist: 10, motivo: 'Descontinuado — se factura dentro de TS-01 desde 01/2026' },
  { id: 'TS-12', nombre: 'Garantía / retrabajo (no facturable)', dur: 120, sla: 24, precio: 0, cat: 'Otros',      activo: true,  color: '#DC2626', reqFoto: true,  reqFirma: true,  checklist: 9  },
];

const TIPOS_GASTO = [
  { id: 'TG-01', nombre: 'Combustible',            tope: 45,  unidad: 'por servicio', reqComprobante: true,  reqFoto: true,  activo: true,  cuenta: '5.1.03.001', imputa: 'Servicio' },
  { id: 'TG-02', nombre: 'Peaje',                  tope: 12,  unidad: 'por servicio', reqComprobante: true,  reqFoto: true,  activo: true,  cuenta: '5.1.03.002', imputa: 'Servicio' },
  { id: 'TG-03', nombre: 'Viático — almuerzo',     tope: 9,   unidad: 'por día',      reqComprobante: false, reqFoto: false, activo: true,  cuenta: '5.1.04.001', imputa: 'Colaborador' },
  { id: 'TG-04', nombre: 'Viático — cena',         tope: 11,  unidad: 'por día',      reqComprobante: false, reqFoto: false, activo: true,  cuenta: '5.1.04.002', imputa: 'Colaborador' },
  { id: 'TG-05', nombre: 'Hospedaje (interior)',   tope: 55,  unidad: 'por noche',    reqComprobante: true,  reqFoto: true,  activo: true,  cuenta: '5.1.04.003', imputa: 'Colaborador' },
  { id: 'TG-06', nombre: 'Repuesto comprado en ruta', tope: 180, unidad: 'por servicio', reqComprobante: true, reqFoto: true, activo: true, cuenta: '5.1.02.007', imputa: 'Servicio' },
  { id: 'TG-07', nombre: 'Flete / encomienda',     tope: 40,  unidad: 'por envío',    reqComprobante: true,  reqFoto: true,  activo: true,  cuenta: '5.1.03.005', imputa: 'Servicio' },
  { id: 'TG-08', nombre: 'Estacionamiento',        tope: 6,   unidad: 'por servicio', reqComprobante: false, reqFoto: true,  activo: true,  cuenta: '5.1.03.004', imputa: 'Servicio' },
  { id: 'TG-09', nombre: 'Lavado de vehículo',     tope: 8,   unidad: 'por semana',   reqComprobante: true,  reqFoto: false, activo: false, cuenta: '5.1.03.006', imputa: 'Vehículo', motivo: 'Suspendido por política de gastos 2026' },
];

/* ---------- Clientes y sucursales ---------- */
const CIUDADES = [
  { n: 'Asunción',              lat: -25.2867, lng: -57.6470 },
  { n: 'Fernando de la Mora',   lat: -25.3396, lng: -57.5450 },
  { n: 'San Lorenzo',           lat: -25.3400, lng: -57.5085 },
  { n: 'Luque',                 lat: -25.2667, lng: -57.4869 },
  { n: 'Lambaré',               lat: -25.3467, lng: -57.6067 },
  { n: 'Capiatá',               lat: -25.3550, lng: -57.4456 },
  { n: 'Ñemby',                 lat: -25.3950, lng: -57.5350 },
  { n: 'Mariano R. Alonso',     lat: -25.2000, lng: -57.5333 },
  { n: 'Villa Elisa',           lat: -25.3667, lng: -57.5900 },
  { n: 'Limpio',                lat: -25.1667, lng: -57.4833 },
  { n: 'Encarnación',           lat: -27.3306, lng: -55.8667 },
  { n: 'Ciudad del Este',       lat: -25.5167, lng: -54.6167 },
  { n: 'Coronel Oviedo',        lat: -25.4500, lng: -56.4400 },
  { n: 'Pedro Juan Caballero',  lat: -22.5470, lng: -55.7330 },
];

const EMPRESAS = [
  ['Supermercados Stock S.A.', 'Retail', 34], ['Superseis S.A.', 'Retail', 28],
  ['Farmacenter S.A.', 'Farmacia', 41], ['Punto Farma S.A.', 'Farmacia', 37],
  ['Banco Continental S.A.E.C.A.', 'Banca', 22], ['Visión Banco S.A.E.C.A.', 'Banca', 31],
  ['Banco Familiar S.A.E.C.A.', 'Banca', 18], ['ueno bank S.A.', 'Banca', 14],
  ['Petropar', 'Energía', 26], ['Copetrol S.A.', 'Energía', 33],
  ['Chacomer S.A.E.', 'Automotriz', 9], ['Nicolás González Oddone S.A.', 'Automotriz', 7],
  ['Tigo Paraguay S.A.', 'Telecom', 19], ['Personal — Núcleo S.A.', 'Telecom', 16],
  ['Paraguay Refrescos S.A.', 'Industria', 5], ['Cervecería Paraguaya S.A.', 'Industria', 6],
  ['Lactolanda — Coop. Colonias Unidas', 'Industria', 8], ['Frigorífico Concepción S.A.', 'Industria', 4],
  ['Biggie S.A.', 'Retail', 46], ['Casa Rica S.A.', 'Retail', 6],
  ['Shopping del Sol S.A.', 'Retail', 3], ['Shopping Mariscal López', 'Retail', 3],
  ['McDonald\'s Paraguay — Alsea', 'Gastronomía', 15], ['Burger King PY — Grupo Vierci', 'Gastronomía', 21],
  ['Bristol S.A.', 'Retail', 12], ['Electroban S.A.', 'Retail', 17],
  ['Real S.A.', 'Retail', 11], ['Farmacias Catedral', 'Farmacia', 24],
  ['Sanatorio Migone Battilana', 'Salud', 2], ['Hospital Bautista', 'Salud', 2],
  ['IPS — Instituto de Previsión Social', 'Salud', 13], ['Universidad Americana', 'Educación', 5],
  ['Colegio San José', 'Educación', 2], ['Itaú Paraguay S.A.', 'Banca', 24],
  ['Sudameris Bank S.A.E.C.A.', 'Banca', 15], ['Cellshop S.A.', 'Retail', 13],
  ['La Vienesa S.A.', 'Gastronomía', 18], ['Panal Compañía de Seguros', 'Seguros', 4],
  ['Aseguradora Paraguaya S.A.', 'Seguros', 6], ['Grupo Cartes — Tabesa', 'Industria', 4],
  ['Trociuk & Cía. S.A.', 'Agro', 7], ['Frutika S.R.L.', 'Agro', 3],
  ['Nutrihuevos S.A.', 'Agro', 5], ['Pollpar S.A.', 'Agro', 4],
  ['Alex S.A.', 'Industria', 6], ['Sodería La Fortuna', 'Industria', 3],
  ['DHL Paraguay', 'Logística', 5], ['Aerolíneas del Sur — DINAC', 'Logística', 2],
  ['Puerto Seguro Fluvial', 'Logística', 3], ['Terminal de Ómnibus de Asunción', 'Logística', 2],
  ['Grupo Vierci — Casa Central', 'Corporativo', 2], ['Banco Atlas S.A.', 'Banca', 17],
  ['Financiera Paraguayo Japonesa', 'Banca', 9], ['Coop. Universitaria Ltda.', 'Banca', 26],
  ['Coop. Medalla Milagrosa', 'Banca', 21], ['Farmacia Santa María', 'Farmacia', 8],
  ['Supermercado España', 'Retail', 4], ['Los Jardines Retail Center', 'Retail', 3],
  ['Paseo La Galería', 'Retail', 2], ['Hotel Sheraton Asunción', 'Hotelería', 1],
  ['Hotel Guaraní Esplendor', 'Hotelería', 1], ['Resort Yacht y Golf Club', 'Hotelería', 2],
  ['Bodega Sacramento', 'Gastronomía', 4], ['Kilkenny Irish Pub', 'Gastronomía', 3],
];

const CONTACTOS = ['Ing. Rocío Benítez', 'Lic. Marcelo Duarte', 'Sra. Analía Cañete', 'Ing. Hugo Villalba', 'Lic. Carmen Insfrán',
  'Sr. Federico Ayala', 'Ing. Patricia Mendoza', 'Lic. Diego Samaniego', 'Sra. Liz Ovelar', 'Ing. Ramón Escobar',
  'Lic. Verónica Torres', 'Sr. Aníbal Sanabria', 'Ing. Silvia Riveros', 'Lic. Osvaldo Fretes', 'Sra. Mabel Acosta'];

const CALLES = ['Avda. Mariscal López', 'Avda. España', 'Avda. Eusebio Ayala', 'Avda. Aviadores del Chaco', 'Avda. San Martín',
  'Avda. República Argentina', 'Avda. Santa Teresa', 'Ruta PY02 km 12', 'Avda. Félix Bogado', 'Avda. Artigas',
  'Palma esq. Chile', 'Avda. Boggiani', 'Avda. Molas López', 'Avda. Perú', 'Ruta Transchaco km 8', 'Avda. Denis Roa'];

function buildClientes() {
  const r = mkRand(20260823);
  return EMPRESAS.map((e, i) => {
    const [nombre, rubro, nSuc] = e;
    const cid = 'CL-' + String(1000 + i);
    const sucursales = [];
    for (let s = 0; s < nSuc; s++) {
      const c = CIUDADES[Math.floor(r() * (i < 40 ? 10 : CIUDADES.length))];
      sucursales.push({
        id: cid + '-S' + String(s + 1).padStart(2, '0'),
        nombre: s === 0 ? 'Casa Central' : (rubro === 'Retail' || rubro === 'Farmacia' ? 'Sucursal ' + c.n + (s > 3 ? ' ' + s : '') : 'Planta ' + (s + 1) + ' — ' + c.n),
        ciudad: c.n,
        dir: pick(r, CALLES) + ' ' + iRange(r, 120, 4890),
        lat: +(c.lat + (r() - 0.5) * 0.055).toFixed(6),
        lng: +(c.lng + (r() - 0.5) * 0.055).toFixed(6),
        equipos: iRange(r, 2, 34),
        contacto: pick(r, CONTACTOS),
        tel: '+595 9' + iRange(r, 61, 86) + ' ' + iRange(r, 100, 999) + '-' + iRange(r, 100, 999),
        geo: r() > 0.08,
        contrato: pick(r, ['Preventivo mensual', 'Preventivo trimestral', 'Por demanda', 'Full service 24/7']),
      });
    }
    const sinGeo = sucursales.filter(s => !s.geo).length;
    return {
      id: cid,
      nombre, rubro,
      ruc: iRange(r, 80010000, 80099999) + '-' + iRange(r, 0, 9),
      sucursales,
      nSuc: sucursales.length,
      sinGeo,
      contacto: pick(r, CONTACTOS),
      email: 'servicios@' + nombre.toLowerCase().replace(/[^a-z]/g, '').slice(0, 12) + '.com.py',
      tel: '+595 21 ' + iRange(r, 200, 699) + '-' + iRange(r, 100, 999),
      estado: r() > 0.09 ? 'activo' : 'suspendido',
      motivoSuspension: 'Cuenta con 2 facturas vencidas (> 60 días). Bloqueado para nuevos servicios.',
      condPago: pick(r, ['Contado', '15 días', '30 días', '45 días', '60 días']),
      moneda: r() > 0.62 ? 'USD' : 'PYG',
      saldoUsd: +(r() * 18400 - 2000).toFixed(2),
      serviciosMes: iRange(r, 1, 62),
      ticketProm: +(r() * 420 + 60).toFixed(2),
      slaCumpl: iRange(r, 78, 100),
      desde: iRange(r, 2016, 2025),
      ejecutivo: pick(r, ['M. Rivas', 'C. Duarte', 'L. Franco', 'A. Vera']),
    };
  });
}
const CLIENTES = buildClientes();

/* ---------- Colaboradores ---------- */
const NOMBRES_TEC = [
  ['Óscar Benítez', 'Técnico Senior', 'Climatización'], ['Derlis Cáceres', 'Técnico Senior', 'Refrigeración'],
  ['Rodrigo Villalba', 'Técnico', 'Climatización'], ['Blas Ayala', 'Técnico', 'Electricidad'],
  ['Marcos Duarte', 'Jefe de cuadrilla', 'Refrigeración'], ['Fabián Ortiz', 'Técnico', 'Electrónica'],
  ['Hugo Ramírez', 'Técnico Senior', 'Energía'], ['Néstor Giménez', 'Técnico', 'Climatización'],
  ['Luis Zárate', 'Ayudante', 'Climatización'], ['Carlos Meza', 'Técnico', 'Refrigeración'],
  ['Julio Franco', 'Jefe de cuadrilla', 'Energía'], ['Alberto Rojas', 'Técnico', 'Electricidad'],
  ['Diego Aquino', 'Ayudante', 'Refrigeración'], ['Milcíades Paredes', 'Técnico Senior', 'Electrónica'],
  ['Ever Cardozo', 'Técnico', 'Climatización'], ['Richard Bogado', 'Técnico', 'Energía'],
  ['Cristian Ruíz Díaz', 'Ayudante', 'Electricidad'], ['Wilson Espínola', 'Técnico', 'Refrigeración'],
  ['Gustavo Recalde', 'Supervisor', 'Climatización'], ['Aldo Vera', 'Técnico', 'Electrónica'],
  ['Sergio Ojeda', 'Técnico', 'Climatización'], ['Pablo Ferreira', 'Ayudante', 'Energía'],
  ['Andrés Cabral', 'Técnico Senior', 'Refrigeración'], ['Víctor Notario', 'Técnico', 'Electricidad'],
];
const JORNADA_PLANTILLAS = {
  estandar: { nombre: 'Estándar 8–17', dias: [1,2,3,4,5], ini: '08:00', fin: '17:00', break: ['12:00','13:00'], horas: 40 },
  extendida: { nombre: 'Extendida 7–18 + sáb.', dias: [1,2,3,4,5,6], ini: '07:00', fin: '18:00', break: ['12:00','13:00'], horas: 55 },
  temprana: { nombre: 'Temprana 6–15', dias: [1,2,3,4,5], ini: '06:00', fin: '15:00', break: ['11:00','12:00'], horas: 40 },
  guardia: { nombre: 'Guardia 24/7 rotativa', dias: [1,2,3,4,5,6,0], ini: '00:00', fin: '23:59', break: null, horas: 48 },
  parcial: { nombre: 'Media jornada 8–12', dias: [1,2,3,4,5], ini: '08:00', fin: '12:00', break: null, horas: 20 },
};
const VEHICULOS = ['Toyota Hilux · ABC 123', 'Kia Bongo · BXD 447', 'Hyundai H100 · CQP 902', 'Nissan Frontier · AAJ 771',
  'Moto Honda XR · 512 KLM', 'Moto Yamaha YBR · 887 PLM', 'Chevrolet N400 · BNM 330', 'Sin vehículo asignado'];

function buildColaboradores() {
  const r = mkRand(770123);
  const jk = Object.keys(JORNADA_PLANTILLAS);
  return NOMBRES_TEC.map((t, i) => {
    const [nombre, rol, esp] = t;
    const estados = ['trabajando', 'camino', 'asignada', 'cerrada'];
    const disp = i < 18 ? pick(r, estados) : 'cerrada';
    const c = CIUDADES[Math.floor(r() * 10)];
    return {
      id: 'CO-' + String(200 + i),
      nombre, rol, esp,
      ci: iRange(r, 2100000, 6900000).toString(),
      legajo: 'L-' + String(1200 + i),
      tel: '+595 9' + iRange(r, 61, 86) + ' ' + iRange(r, 100, 999) + '-' + iRange(r, 100, 999),
      email: nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '.').slice(0, 18) + '@noventra.com.py',
      jornada: i % 7 === 0 ? 'extendida' : (i % 11 === 0 ? 'guardia' : (i % 13 === 0 ? 'temprana' : (i % 17 === 0 ? 'parcial' : 'estandar'))),
      vehiculo: VEHICULOS[i % VEHICULOS.length],
      activo: i !== 21 && i !== 23,
      motivoBaja: 'Licencia médica hasta el 05/09 — no puede recibir asignaciones',
      estado: disp,
      cuadrilla: i < 12 ? ['Cuadrilla Norte', 'Cuadrilla Sur', 'Cuadrilla Este'][i % 3] : null,
      ciudad: c.n,
      lat: +(c.lat + (r() - 0.5) * 0.05).toFixed(6),
      lng: +(c.lng + (r() - 0.5) * 0.05).toFixed(6),
      bateria: iRange(r, 12, 100),
      ultimoPing: i === 3 || i === 9 ? iRange(r, 28, 46) : iRange(r, 0, 14),
      servMes: iRange(r, 8, 54),
      horasMes: iRange(r, 96, 198),
      sla: iRange(r, 72, 100),
      calif: +(3.4 + r() * 1.6).toFixed(1),
      km: iRange(r, 180, 2400),
      gastosUsd: +(r() * 380 + 40).toFixed(2),
      cert: r() > 0.55 ? ['NR-134a', 'Altura'] : (r() > 0.4 ? ['NR-134a'] : []),
      desde: iRange(r, 2015, 2026),
    };
  });
}
const COLABORADORES = buildColaboradores();

/* Los jefes de cuadrilla pertenecen a la cuadrilla que lideran. */
[['Marcos Duarte', 'Cuadrilla Norte'], ['Julio Franco', 'Cuadrilla Sur'], ['Gustavo Recalde', 'Cuadrilla Este'],
 ['Andrés Cabral', 'Cuadrilla Interior']].forEach(([n, cu]) => {
  const c = COLABORADORES.find(x => x.nombre === n);
  if (c) c.cuadrilla = cu;
});

const CUADRILLAS = [
  { id: 'CU-01', nombre: 'Cuadrilla Norte', jefe: 'Marcos Duarte',  n: 4, esp: 'Refrigeración', zona: 'Luque / Mariano R.A. / Limpio', activa: true },
  { id: 'CU-02', nombre: 'Cuadrilla Sur',   jefe: 'Julio Franco',   n: 3, esp: 'Energía',       zona: 'Lambaré / Villa Elisa / Ñemby', activa: true },
  { id: 'CU-03', nombre: 'Cuadrilla Este',  jefe: 'Gustavo Recalde', n: 4, esp: 'Climatización', zona: 'San Lorenzo / Capiatá / F. de la Mora', activa: true },
  { id: 'CU-04', nombre: 'Cuadrilla Interior', jefe: 'Andrés Cabral', n: 2, esp: 'Mixta',       zona: 'CDE / Encarnación', activa: false, motivo: 'Sin jefe de cuadrilla asignado desde el 12/08' },
];

/* ---------- Servicios / agenda ---------- */
function buildServicios() {
  const r = mkRand(31415926);
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const out = [];
  let n = 4820;
  /* de -34 a +12 días respecto de hoy */
  for (let d = -34; d <= 12; d++) {
    const fecha = new Date(hoy); fecha.setDate(hoy.getDate() + d);
    const dow = fecha.getDay();
    /* Sábado con media jornada; domingo solo guardias de urgencia. */
    let cant = dow === 0 ? iRange(r, 1, 3) : dow === 6 ? iRange(r, 5, 9) : iRange(r, 7, 14);
    for (let k = 0; k < cant; k++) {
      const ts = pick(r, TIPOS_SERVICIO.filter(t => t.activo));
      const cli = pick(r, CLIENTES.filter(c => c.estado === 'activo'));
      const suc = pick(r, cli.sucursales);
      const hIni = iRange(r, 7, 16);
      const mIni = pick(r, [0, 0, 15, 30, 30, 45]);
      const dur = ts.dur;
      let estado;
      if (d < -1) estado = r() > 0.14 ? 'cerrada' : 'pendiente';
      else if (d === -1) estado = pick(r, ['cerrada', 'cerrada', 'pendiente', 'trabajando']);
      else if (d === 0) {
        const nowH = new Date().getHours();
        if (hIni + dur / 60 < nowH) estado = r() > 0.25 ? 'cerrada' : 'pendiente';
        else if (hIni <= nowH) estado = r() > 0.4 ? 'trabajando' : 'camino';
        else estado = r() > 0.22 ? 'asignada' : 'camino';
      } else estado = 'asignada';

      const esCuadrilla = !!ts.cuadrilla && r() > 0.35;
      const cuad = esCuadrilla ? pick(r, CUADRILLAS.filter(c => c.activa)) : null;
      const tecnicos = esCuadrilla
        ? COLABORADORES.filter(c => c.cuadrilla === cuad.nombre && c.activo).slice(0, iRange(r, 2, 4))
        : [pick(r, COLABORADORES.filter(c => c.activo))];

      const gastos = [];
      if (estado === 'cerrada' || estado === 'pendiente') {
        const ng = iRange(r, 0, 3);
        for (let g = 0; g < ng; g++) {
          const tg = pick(r, TIPOS_GASTO.filter(t => t.activo));
          gastos.push({ tipo: tg.nombre, usd: +(r() * tg.tope * 0.9 + 2).toFixed(2), comprobante: tg.reqComprobante ? 'F-' + iRange(r, 100000, 999999) : null });
        }
      }

      n++;
      out.push({
        id: 'OS-' + n,
        fecha: fmtISO(fecha),
        dow,
        hIni, mIni,
        dur,
        estado,
        prioridad: dow === 0 ? 'urgente' : (r() > 0.86 ? 'urgente' : (r() > 0.55 ? 'alta' : 'normal')),
        tipo: ts.nombre, tipoId: ts.id, cat: ts.cat,
        clienteId: cli.id, cliente: cli.nombre,
        sucursalId: suc.id, sucursal: suc.nombre, ciudad: suc.ciudad, dir: suc.dir,
        lat: suc.lat, lng: suc.lng,
        contacto: suc.contacto, tel: suc.tel,
        cuadrilla: cuad ? cuad.nombre : null,
        tecnicos: tecnicos.map(t => ({ id: t.id, nombre: t.nombre, rol: t.rol })),
        montoUsd: +(ts.precio * (0.85 + r() * 0.5)).toFixed(2),
        gastos,
        gastosUsd: +gastos.reduce((a, b) => a + b.usd, 0).toFixed(2),
        km: iRange(r, 3, 82),
        checklistTotal: ts.checklist,
        checklistOk: estado === 'cerrada' ? ts.checklist : (estado === 'pendiente' ? ts.checklist - iRange(r, 1, 4) : (estado === 'trabajando' ? iRange(r, 1, ts.checklist - 1) : 0)),
        fotos: estado === 'cerrada' || estado === 'pendiente' ? iRange(r, 3, 11) : (estado === 'trabajando' ? iRange(r, 0, 4) : 0),
        firma: estado === 'cerrada',
        sla: ts.sla,
        slaOk: r() > 0.11,
        pendientes: estado === 'pendiente' ? pick(r, [
          'Falta repuesto: capacitor 45+5 µF — pedido al depósito',
          'Cliente no disponible para firmar conformidad',
          'Requiere segunda visita con escalera telescópica',
          'Falta recarga de gas R-410A — sin stock en móvil',
          'Tablero sin identificación, se requiere relevamiento eléctrico',
        ]) : null,
        obs: pick(r, [
          'Acceso por portón lateral. Coordinar con seguridad.',
          'Equipo en azotea — requiere arnés.',
          'Cliente solicita factura a nombre de la casa matriz.',
          'Horario de atención limitado: 08:00 a 12:00.',
          'Reincidencia: tercera visita por la misma falla.',
          '',
        ]),
      });
    }
  }
  return out;
}
function fmtISO(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
const SERVICIOS = buildServicios();

/* ---------- Notificaciones ---------- */
const NOTIFS = [
  { t: 'SLA en riesgo', m: 'OS-4931 (Frigorífico Concepción) vence en 42 min y sigue en “Asignada”.', tipo: 'err', hace: '4 min' },
  { t: 'Gasto sobre tope', m: 'Derlis Cáceres cargó Gs. 420.000 en combustible (tope Gs. 330.750).', tipo: 'warn', hace: '18 min' },
  { t: 'Check-in fuera de geocerca', m: 'Blas Ayala hizo check-in a 780 m de la sucursal declarada.', tipo: 'warn', hace: '35 min' },
  { t: 'Servicio cerrado', m: 'OS-4902 conformada con firma digital del cliente.', tipo: 'ok', hace: '1 h' },
  { t: 'Tipo de cambio', m: 'Cotización actualizada manualmente a 7.350 Gs/USD por M. Rivas.', tipo: 'info', hace: '2 h' },
];

/* ---------- Sesión / configuración del mockup ---------- */
const SESSION = {
  user: { nombre: 'Mateo Rivas', rol: 'Administrador', iniciales: 'MR', email: 'mateo.rivas@noventra.com.py' },
  tenantId: 'nvt',
  fx: 7350,               // Gs por USD — editable en la topbar
  fxFecha: 'hoy 08:12',
  fxFuente: 'Manual (BCP ref. 7.318)',
};
