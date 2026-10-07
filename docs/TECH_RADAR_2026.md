# MESAPAGA Technology Radar — octubre 2026

## Adoptar ahora
- Payment orchestration: interfaz multi-PSP para evitar dependencia de un único proveedor.
- Express wallets: Apple Pay, Google Pay y Link a través del PSP.
- WebAuthn/passkeys: acceso del restaurante sin contraseña y step-up para acciones sensibles.
- PWA: experiencia instalable, caché del shell y recuperación elegante ante conectividad irregular.
- Observabilidad: OpenTelemetry + trazas por order/payment/table.
- Feature flags: activar proveedores, TPV y pilotos por restaurante.
- Webhooks inbox/outbox: procesamiento idempotente, reintentos y conciliación.
- NFC seguro: tags con URL firmada; piloto comercial preparado para NTAG 424 DNA.

## Preparar mediante interfaces
- EMV Secure Remote Commerce / Click to Pay.
- Open Banking / pay-by-bank europeo.
- Bizum/Wero/European Network for Payments cuando la disponibilidad comercial y las APIs para España encajen.
- Credenciales digitales de pago y passkeys de ecosistema EMV.
- Agentic payments con límites/delegación verificable.
- XRPL / RLUSD como rail opcional, apagado por defecto.

## No adoptar todavía
- Custodia propia de fondos o datos de tarjeta.
- Cripto en el camino crítico del MVP.
- IA autorizando cobros autónomos.
- Hardware NFC propietario cuando un tag seguro + móvil resuelve el caso.

## Regla
Todo rail nuevo implementa PaymentProvider. Toda integración de caja implementa PosAdapter. Ninguna tecnología nueva modifica el núcleo mesa → cuenta → intención → confirmación → conciliación.
