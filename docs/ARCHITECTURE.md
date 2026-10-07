# Arquitectura MVP

## Cliente
El cliente acerca el móvil a una etiqueta NFC (QR como respaldo). La etiqueta abre una URL HTTPS con un identificador firmado/seguro de mesa.

## Core
El servidor resuelve mesa y cuenta. El Payment Engine reserva saldo, crea el intento de pago con clave de idempotencia y nunca declara una cuenta pagada por una respuesta del navegador.

## Confirmación
Un webhook verificado del PSP confirma el pago. La actualización de saldo debe ser atómica para soportar pagos parciales/concurrentes y evitar doble cobro.

## PSP
Primera integración: Stripe Connect en sandbox. El restaurante conecta su cuenta y el PSP liquida al banco del comercio. MESAPAGA no custodia tarjetas ni IBAN completos.

## TPV
Interfaz PosAdapter. MVP: SimulatedPosAdapter. Primera integración prevista: Glop; después Ágora, Revo y Last.app.

## NFC
Prototipo: NTAG216. Piloto/comercial: NTAG 424 DNA/TagTamper. Para mesas metálicas, etiqueta on-metal.

## Crypto Rail
Interfaz futura XRPL para XRP/RLUSD. Debe permanecer desactivada durante el MVP.
