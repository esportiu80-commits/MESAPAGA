# Threat model

| Riesgo | Control |
|---|---|
| NFC/QR manipulado | tokens firmados, revocación, tags seguros, mostrar restaurante/mesa antes de pagar |
| Cambio de importe cliente | importe recalculado y validado en servidor |
| doble cobro/reintentos | idempotency key + constraint DB + estado transaccional |
| webhook falso/repetido | firma PSP + inbox durable + event id único |
| carrera en pagos parciales | row lock/serialización y saldo atómico |
| XSS/e-skimming | CSP, mínimo JS tercero, inventario e integridad/tamper monitoring |
| secreto filtrado | secretos fuera del repo, rotación y mínimo privilegio |
| cuenta restaurante comprometida | passkeys/MFA, RBAC, step-up para acciones sensibles |
| fallo TPV tras cobro | outbox/retry, conciliación y estado payment_confirmed/pos_pending |
| caída PSP | estado recuperable, polling servidor, multi-provider futuro |
| caída MESAPAGA | health checks, observabilidad, backups, QR/NFC no contiene secretos de pago |
| abuso API | rate limit, schema validation, authz y audit log |
