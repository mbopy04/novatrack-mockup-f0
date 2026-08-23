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

**§2b — pendiente de aprobación.** La leyenda ampliada de estados
(`web/patrones.html#s-estados-nuevos`): los 5 aprobados intactos, más `sin_asignar` y `cancelada`.
Ver «Contrato de estados» más abajo.

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

### Contrato de estados — 5 aprobados, 2 propuestos

Los **5 aprobados** son el contrato vigente y no se tocan:
`asignada` `#C02C38` · `camino` `#D97316` · `trabajando` `#1C7F4E` · `pendientes` `#C9A227` · `cerrada` `#6B7890`.

Juan pidió **ampliar conservando esos significados**. La propuesta (§2b de `patrones.html`) suma dos:

- `sin_asignar` — ya existe en `agenda.html` (KPI «Sin asignar» y panel «Arrastrá al técnico»), pero hoy se
  pinta con el rojo de `asignada`, así que «nadie la tomó» y «alguien la tomó y no salió» se ven igual.
- `cancelada` — ya existe en el diálogo destructivo de `patrones.html` §5 y en `despacho.html`, pero sin
  estado propio cae en `cerrada`, que significa **facturable**.

**Ninguno estrena color:** el contrato sigue con cinco hues y los dos agregados se distinguen por *forma*
—badge hueco punteado, y gris tachado con cruz— porque los dos son ausencias, no pasos del recorrido.

Quedan **fuera** a propósito: `pausada` (el modelo aprobado ya lo resuelve con «No puedo terminar» →
`finalizada c/ pendientes` + revisita) y el corte `en_sitio` / `en_proceso` (el despachador no puede actuar
distinto con uno que con el otro; el minuto de arranque ya está en la línea de tiempo).

**Pendiente de aprobación:** hasta que Juan apruebe, ni el contrato ni las pantallas de F1 que pintan estados
se tocan — `src/lib/types.ts`, `globals.css` y `StatusChip` siguen sin modificarse.

---

## Cómo correrlo local

Cero dependencias: ni CDN ni npm. Abrir `index.html` con doble clic, o servir la carpeta con
cualquier hosting estático.
