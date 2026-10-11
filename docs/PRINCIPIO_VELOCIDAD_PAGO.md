# MESAPAGA — Principio de velocidad de pago

## Misión operativa
MESAPAGA debe reducir al mínimo el tiempo entre:
**terminar de comer → consultar/dividir la cuenta → pagar → confirmación fiable → poder irse.**

Para el restaurante:
**solicitud de cobro → confirmación verificable → mesa liberada → mayor rotación.**

## Regla de innovación
Evaluar de forma continua nuevas tecnologías de pago (PSP, wallets, open banking, SEPA Instant, Bizum, rails regulados, euro digital y tecnologías DLT como XRPL) únicamente cuando puedan mejorar al menos uno de estos indicadores sin empeorar seguridad, cumplimiento o fiabilidad:
- tiempo NFC → cuenta visible;
- tiempo cuenta → pago iniciado;
- tiempo pago → confirmación verificable;
- tiempo confirmación → Dinii/mesa liquidada;
- tiempo hasta disponibilidad/liquidación de fondos al comercio;
- número de pasos/toques del cliente;
- tasa de error/reintento;
- coste efectivo para restaurante/MESAPAGA.

## Regla de decisión
No integrar una tecnología por ser nueva. Probarla primero en sandbox/piloto y compararla contra el método actual con la misma cuenta y escenario. Adoptarla si aporta una mejora medible y cumple requisitos regulatorios y operativos.

## Arquitectura
Mantener PaymentAdapter y feature flags por proveedor/restaurante. Ninguna tecnología experimental puede modificar directamente el ledger. Solo una confirmación autenticada del proveedor puede confirmar un pago.

## KPI de producto
MESAPAGA debe poder medir el tiempo real **fin de comida/petición de cuenta → mesa totalmente pagada** y usarlo como KPI principal de experiencia y rotación.
