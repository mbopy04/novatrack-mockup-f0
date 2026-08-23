# NovaTrack · Mockup F0

Mockup navegable para **aprobación visual** de la fase F0 de NovaTrack (Noventra E.A.S., Paraguay).

**Sin backend, sin base de datos, sin autenticación real, sin código de producción.**
Todos los datos son de ejemplo y están hardcodeados. Método Noventra: propose → approve → execute.

👉 **Ver publicado:** https://mbopy04.github.io/novatrack-mockup-f0/

Repo **descartable**: existe sólo para servir esta revisión. Se puede borrar una vez aprobado F0.

---

## Qué incluye

### Web Admin — 11 pantallas (`web/`)

| Archivo | Qué cubre |
|---|---|
| `login.html` | Ingreso + selección de tenant. La empresa suspendida devuelve el motivo y no deja entrar. |
| `agenda.html` | Día / semana / mes. Día es vista de recurso (técnico × hora) con franjas fuera de jornada y línea de «ahora». |
| `despacho.html` | Tablero operativo del día: las órdenes en cinco columnas por estado, con filtros, SLA y facturable cerrado. Avanza con los eventos que reporta la app. |
| `servicio-nuevo.html` | Alta en 4 pasos. Técnico individual o cuadrilla de 2 a 4, con validación de capacidad. |
| `clientes.html` | Listado paginado 25/página sobre 312 clientes, filtros y selección múltiple. |
| `cliente-detalle.html` | Ficha con sucursales georreferenciadas: mapa, coordenadas, radio de tolerancia. |
| `colaboradores.html` | Personas + jornada laboral configurable por día, excepciones, horas extra, cuadrillas. |
| `mapa.html` | Posición de técnicos y sucursales, recorrido del día, huecos de GPS mostrados como huecos. |
| `informes.html` | Estados por mes, tiempo de cierre, composición facturada, rankings. Con vista de tabla equivalente. |
| `orden-pdf.html` | PDF de orden de servicio en A4, 2 páginas, con `@media print` real. |
| `catalogos.html` | Tipos de gasto, tipos de servicio y el contrato de estados. |

### App del técnico (Android) — 12 pantallas (`app/`)

`login` · `consentimiento` · `push` · `servicios` · `detalle` · `estados` · `camara` · `reporte` · `firmas` · `gastos` · `offline` · `privacidad`

`push.html` es el punto de entrada del técnico al servicio: la notificación sobre la pantalla bloqueada,
sin datos del cliente más allá del nombre de la sucursal.

### Sistema de diseño — 1 pantalla

`web/patrones.html` — la referencia del lenguaje visual: anatomía del toast con motivo y código, contrato de
estados, marca, la regla de los dos amarillos, doble moneda, inventario de componentes y métricas de densidad.
No es una pantalla del producto: es contra qué se comparan las demás.

---

## Notas de diseño

- Marca Noventra: navy `#1B2A6B`, accent `#2E5BD8`, violeta `#6A4A8F`.
- Densidad SAP Business One / Salesforce Lightning: fila de 34 px, control de 30 px, cabecera sticky.
- **Moneda dual USD / Guaraníes** con tipo de cambio editable desde la topbar. Cada orden cerrada
  congela el TC de su fecha, así el histórico no se mueve.
- **Prohibido el silent failure:** todo error, bloqueo o redirect levanta un toast con motivo técnico visible.
- Responsive: el rail colapsa a drawer bajo 960 px; las grillas caen a una columna bajo 720 px.

### Contraste del amarillo de estados

El amarillo del contrato de estados `#C9A227` mide **2,42:1** sobre blanco, por debajo del piso de 3:1
para una marca de gráfico. Decisión aprobada por Juan: **mantener los dos usos separados.**

- **Badges** → conservan el `#C9A227` del contrato, sobre fondo tintado, con borde y texto oscurecido.
- **Rellenos de gráfico** → usan el paso oscuro de la misma familia ámbar, `#A16207`, que sí pasa.

---

## Cómo correrlo local

Cero dependencias: ni CDN ni npm. Abrir `index.html` con doble clic, o servir la carpeta con
cualquier hosting estático.
