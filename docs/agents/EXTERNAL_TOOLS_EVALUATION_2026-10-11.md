# MESAPAGA — fuentes externas para agentes (evaluación)
Fecha: 2026-10-11. Estado: REFERENCIAS REGISTRADAS, NO INSTALADAS NI AUTORIZADAS.
Rama: feature/saas-operations-admin. No modificar sitio oficial ni flujo de pagos.

## 1. BotDirectory — https://botdirectory.ai/
Directorio abierto de prompts de bots y agentes recurrentes; tiene feed JSON, API y OpenAPI. Útil como biblioteca de patrones para agentes de prospección, seguimiento, soporte y resúmenes.
Regla: revisar individualmente prompts, permisos, integraciones, destinos, frecuencia y efectos secundarios. No importar ni ejecutar prompts automáticamente. Fuente: https://botdirectory.ai/about/

## 2. NoSignups — https://nosignups.net/
Catálogo de herramientas open source sin registro. No es un orquestador de agentes.
Herramientas candidatas para desarrollo/diseño y pruebas: Hoppscotch (API), drawDB (esquemas), Excalidraw (flujos), PDFme (tickets PDF). Evaluar licencias y privacidad por herramienta. No enviar datos de clientes, claves ni pagos a servicios web externos. Fuente: https://nosignups.net/

## 3. DigitalPlat FreeDomain — https://github.com/DigitalPlatDev/FreeDomain
Registro de nombres gratuitos bajo dominios de terceros y delegación DNS a proveedor externo. Útil para pruebas aisladas de DNS; NO sustituye un dominio corporativo propio para cobros en producción, ni es infraestructura de agentes.
Fuente: https://github.com/DigitalPlatDev/FreeDomain

## 4. NoimosAI — https://noimosai.com/
Posible agente de marketing/SEO/GEO/social y prospección comercial. Existe CLI @noimosai/cli y opciones de integración, sujetas a validación de costes, privacidad, permisos y límites. No conectar CRM, correo, redes ni publicar campañas sin autorización explícita; no acceso a datos de pago.
Fuente: https://noimosai.com/en/blog/mastering-personalized-content-creation-with-ai-marketing-automation

## Aprobación para integrar
- Ejecutar prueba con datos ficticios en entorno aislado; validar procedencia, licencia, seguridad, mantenimiento, costes y resultados.
- Solo conceder permisos mínimos; revisión humana antes de envíos, publicaciones o cambios.
- Cualquier automatización comercial debe respetar RGPD y normas anti-spam.
- Ninguna de estas herramientas puede actualizar estados de pago, cobrar, manejar claves PSP ni confirmar tickets.
- Registrar resultado: PROPUESTO / VALIDADO / PROBADO / INSTALADO / BLOQUEADO.
