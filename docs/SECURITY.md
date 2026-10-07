# Seguridad

- HTTPS obligatorio en producción.
- Secretos exclusivamente en variables de entorno/secret manager.
- No almacenar PAN/CVC ni datos completos de tarjeta.
- Verificar firma y tolerancia temporal de webhooks.
- Idempotencia en creación y confirmación de pagos.
- Operaciones de saldo y reserva dentro de transacciones atómicas.
- Auditoría append-only de cambios críticos.
- Tokens NFC rotables/revocables; QR de respaldo.
- Rate limiting y detección de sesiones sospechosas.
- No habilitar pagos live hasta completar sandbox, pruebas, conciliación y revisión de seguridad.
