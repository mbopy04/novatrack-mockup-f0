# NovaTrack — Mockup F0 (Web Admin)

Mockup HTML navegable para **aprobación visual** (issue NOVAA-9).
Sin backend, sin base de datos, sin autenticación real: HTML + CSS + JavaScript
plano, con datos de ejemplo hardcodeados y deterministas.

## Pantallas

| # | Pantalla | Archivo |
|---|----------|---------|
| 1 | Login + selección de tenant | `index.html` |
| 2 | Agenda (día / semana / mes) con estados por color | `agenda.html` |
| — | Tablero de despacho (kanban por estado) | `despacho.html` |
| 3 | Creación y asignación de servicio (técnico o cuadrilla 2–4) | `servicio-nuevo.html` |
| 4 | Clientes — listado paginado 25/página | `clientes.html` |
| 4b | Ficha de cliente + sucursales georreferenciadas | `cliente.html` |
| 5 | Colaboradores + jornada laboral configurable | `colaboradores.html` |
| 6 | Mapa en vivo — técnicos y sucursales | `mapa.html` |
| 7 | Informes | `informes.html` |
| 7b | Vista previa del PDF de orden de servicio | `orden-pdf.html` |
| 8 | Catálogos administrables (servicios, gastos, checklists, monedas) | `catalogos.html` |
| — | Patrones de UI (incluye el patrón de toasts) | `patrones.html` |

## Convenciones del producto que el mockup fija

- **Estados por color**: asignada `#DC2626` · en camino `#EA580C` · trabajando `#16A34A` ·
  finalizada con pendientes `#CA8A04` · cerrada `#6B7280`.
- **Marca Noventra**: navy `#1B2A6B`, accent `#2E5BD8`, violeta `#6A4A8F`.
- **Doble moneda** USD / Guaraníes en todo importe, con tipo de cambio editable
  desde la barra superior (recalcula la pantalla completa).
- **Prohibido el fallo silencioso**: todo error, bloqueo o redirect muestra un toast
  con motivo, código rastreable y acción de salida. Ver `patrones.html`.
- Mobile-responsive: el menú colapsa, las grillas se apilan, las tablas mantienen
  scroll horizontal sin recortar columnas.

## Fuera de alcance

Backend, base de datos, autenticación real y cualquier código de producción.
