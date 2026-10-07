# Roadmap

## Hecho
Base Next.js/TypeScript, UI cliente, panel restaurante, dominio, PaymentProvider, PosAdapter, token NFC, API demo, esquema SQL, documentación de seguridad.

## Siguiente integración externa
1. PostgreSQL/Supabase y migraciones.
2. Stripe Connect sandbox + Elements/Payment Element.
3. Webhook con firma, idempotencia y transacción atómica.
4. Onboarding de restaurante.
5. Integración TPV piloto mediante PosAdapter.
6. NTAG 424 DNA y QR de respaldo.
7. Observabilidad, tests E2E y conciliación.
8. Piloto cerrado antes de activar live.

## Bloqueos externos
Para cobros reales hacen falta una cuenta PSP aprobada, credenciales sandbox/live y datos legales/bancarios del comercio. Esos secretos nunca se suben al repositorio.
