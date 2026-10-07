# MESAPAGA — Master Plan 2026

## Tesis
MESAPAGA no es un lector NFC ni un TPV. Es una capa de checkout y conciliación para restauración. El NFC/QR resuelve descubrimiento de mesa; el PSP mueve el dinero; MESAPAGA mantiene estado, experiencia, seguridad, conciliación y conexión con caja.

## Arquitectura objetivo
NFC/QR firmado -> resolución mesa -> snapshot de cuenta -> checkout -> Payment Orchestrator -> PSP -> webhook verificado -> ledger interno -> PosAdapter -> recibo/analítica.

## Invariantes
1. El navegador nunca decide que un pago está completado.
2. El importe autorizado se valida contra estado servidor.
3. Una idempotency key identifica cada intento lógico.
4. Los webhooks se almacenan antes de procesarse y son reintentables.
5. Nunca almacenar PAN/CVV.
6. El saldo de una orden no puede bajar de cero.
7. Un pago confirmado no puede aplicarse dos veces al TPV.
8. Cada cambio sensible deja audit trail.
9. Crypto/agentic/pay-by-bank son rails opcionales, nunca dependencias del núcleo.
10. Los datos demo se etiquetan siempre como demo.

## P0 — antes de dinero real
- PostgreSQL persistente y migraciones.
- Restaurantes, usuarios, mesas, órdenes, items, payment attempts, webhook inbox, ledger y audit log.
- Autenticación y RBAC; passkeys preparados.
- Stripe/PSP sandbox mediante PaymentProvider.
- Checkout alojado/Elements según evaluación PCI.
- Firma/verificación real de webhooks.
- Idempotencia end-to-end y locking transaccional.
- CSP estricta, inventario de scripts, headers y tamper monitoring.
- Rate limiting, CSRF donde aplique, validación Zod, secretos solo en plataforma.
- Observabilidad, alertas, backups y runbooks.
- Tests unitarios/integración/E2E de pago, split, retry, duplicate webhook y POS failure.

## P1 — piloto restaurante
- Onboarding, creación de mesas y generación QR/NFC.
- Token NFC firmado, rotación/revocación y protección anti-clonado compatible con tags seguros.
- Cuenta desde PosAdapter; simulador primero y conector real después.
- Pago total/parcial, propina configurable, recibo.
- Dashboard operativo real, conciliación y exportación.
- Feature flags por restaurante.
- Métricas: tap->checkout, checkout->paid, tiempo, fallos, adopción.

## P2 — escala
- Multi-PSP y failover controlado.
- Apple Pay/Google Pay/Link vía PSP.
- Pay-by-bank/instant payments cuando exista contrato e integración adecuada.
- Click to Pay/SRC cuando aporte conversión y el PSP lo soporte.
- Bizum/Wero/ENP según disponibilidad comercial.
- Multi-local, facturación SaaS, soporte y SLA.
- XRPL/RLUSD experimental, aislado y apagado.

## Decisiones de producto
- No fabricar hardware propietario en MVP.
- No custodiar fondos.
- No IA tomando decisiones de cobro.
- No prometer mejora de rotación hasta medir pilotos.
- Mantener PSP y TPV detrás de interfaces para evitar lock-in.
