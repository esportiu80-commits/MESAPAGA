# MESAPAGA

MVP de pago NFC para restaurantes.

## Flujo
NFC/QR → identificación segura de mesa → cuenta → pago total/parcial → webhook PSP → confirmación servidor → TPV → panel.

## Principios
- NFC identifica la mesa; nunca contiene datos bancarios.
- MESAPAGA no almacena tarjetas.
- Confirmación únicamente desde servidor/webhook verificado.
- Idempotencia y protección contra doble cobro.
- Arquitectura POS-agnostic mediante adaptadores.
- Crypto Rail XRPL/XRP/RLUSD preparado pero desactivado.

## Stack
Next.js + TypeScript · PostgreSQL/Supabase · Stripe Connect (sandbox primero)

## Estado
Base técnica inicial del MVP. No usar pagos live hasta completar integración, pruebas y revisión de seguridad.
