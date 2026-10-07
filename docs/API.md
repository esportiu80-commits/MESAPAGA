# API MVP

- GET /api/health — salud del servicio.
- GET /api/demo/order — cuenta simulada.
- POST /api/demo/payment-intents — crea intento simulado con amountCents e idempotencyKey.
- POST /api/webhooks/payment — endpoint reservado para webhook firmado del PSP.
- GET /t/:token — experiencia cliente NFC/QR.
- GET /admin — panel inicial del restaurante.

Los endpoints demo nunca deben mover dinero real.
