# MESAPAGA — Investigación de pagos rápidos (09-10-2026)

**Estado:** investigación y diseño; ninguna opción nueva activada para cobros reales. No alterar el checkout del piloto.

## Opciones y prioridad
1. **SEPA Instant + iniciación bancaria (PIS/open banking)** — ALTA prioridad de evaluación. Las transferencias SCT Inst pueden poner euros a disposición en menos de 10 segundos, 24/7. **No confundir liquidación bancaria rápida con checkout NFC listo:** hace falta PSP/PISP autorizado, UX de autenticación bancaria, confirmación verificable, conciliación, devoluciones, cobertura y tarifas. Fuente: https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer-sct-inst/sepa-instant-credit-transfer
2. **Bizum para comercio** — ALTA prioridad de evaluación con banco/PSP adquirente; verificar disponibilidad de API, comisiones, autenticación, split-bill y eventos de confirmación. No asumir integración directa sin contrato.
3. **XRP Ledger / XRP / RLUSD** — I+D controlada, inicialmente OFF. Ripple informa de infraestructura y alianzas institucionales, pero no prueba por sí solo disponibilidad de aceptación de pago presencial de restaurante con conversión a EUR y abono bancario en España. XRP tiene volatilidad; RLUSD está denominado en USD y exige conversión a EUR. Evaluar proveedor regulado, MiCA, custodia/no custodia, AML/KYC, contabilidad, FX, reembolsos y tiempos de abono. Fuente: https://ripple.com/products/stablecoin/ ; https://ripple.com/ripple-press/ripple-and-bitso-expand-partnership/
4. **Euro digital** — VIGILANCIA ESTRATÉGICA, no método de pago disponible hoy. BCE prevé piloto desde segundo semestre de 2027. Convocatoria para comercios de e-commerce/m-commerce hasta el 27-10-2026; comprobar si MESAPAGA o un restaurante piloto cumple requisitos. Fuente: https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.es.html
5. **Tarjeta/Apple Pay/Google Pay vía PSP** — REFERENCIA de piloto y fallback: comparar tiempo hasta confirmación y tiempo hasta ingreso bancario por separado.

## Matriz de evaluación por proveedor
- Experiencia móvil desde NFC: pasos, autenticación, tiempo de confirmación.
- Disponibilidad contractual y técnica en España.
- Pago parcial y múltiples pagadores por mesa.
- Webhook firmado, idempotencia, estados pending/succeeded/failed, reintentos.
- Coste fijo + variable + FX + reembolsos + chargebacks.
- Cuándo recibe EUR el restaurante en su IBAN (no confundir con confirmación).
- Regulación, privacidad, soporte y conciliación.

## Diseño futuro: PaymentAdapter
Separar provider de checkout/ledger con interfaz: createPayment, getStatus, verifyWebhook, refund, reconcile. Solo webhook/confirmación autenticada del proveedor cambia el estado financiero; n8n y agentes no pueden hacerlo. Feature flags por restaurante y sandbox por proveedor. XRP/RLUSD OFF por defecto.

## Prueba comparativa propuesta
Una cuenta de 48,50 EUR; pagar 100 %, dividir 2/5 personas, elegir productos, fallos y reintentos. Registrar latencia NFC→confirmación, conciliación, liquidación real al IBAN, coste efectivo y incidencias. No declarar ganador sin datos de pruebas.
