# Arquitectura técnica — CertiMed AI Panamá

## Estado
La versión 0.1 es una demostración estática. No hay backend, autenticación, emisión real, verificación institucional ni IA conectada.

## Componentes objetivo
1. **Web pública:** misión, alcance, transparencia, contacto y demo.
2. **Identidad y acceso:** autenticación, MFA para profesionales y roles mínimos.
3. **Portal médico:** creación de documento por profesional idóneo, firma y registro de eventos.
4. **Portal paciente:** acceso a documentos propios, revocación/consentimiento según diseño jurídico.
5. **Portal empresa:** consulta de estado y datos mínimos autorizados; no exponer diagnóstico.
6. **Registro verificable:** identificador aleatorio, estado, emisor, sello temporal y registro de auditoría.
7. **Motor documental:** PDF accesible, QR que apunta a una URL de verificación HTTPS.
8. **CertiMed Intelligence:** OCR y análisis de consistencia; salida explicable y siempre revisada por humano.
9. **Administración:** gestión de roles, auditoría, retención y respuesta a incidentes.

## Diseño de datos conceptual
- `professional`: identidad profesional, idoneidad y estado verificado (no aceptar autodeclaración como verificación).
- `organization`: establecimiento y autorización.
- `document`: ID, emisor, timestamps, estado, hash del archivo y metadatos mínimos.
- `verification_event`: actor, finalidad, fecha, resultado y datos consultados.
- `consent`: alcance, versión, fecha y revocación.
- `audit_event`: operación, usuario, recurso, timestamp y contexto mínimo.

## Seguridad necesaria antes de datos reales
- HTTPS; cifrado en tránsito y reposo; secretos fuera del frontend.
- Autenticación robusta, MFA, RBAC/ABAC y principio de mínimo privilegio.
- Separación por organización/tenant y pruebas de aislamiento.
- Logs sin diagnóstico ni información clínica innecesaria.
- Backups cifrados, recuperación probada, monitoreo y respuesta a incidentes.
- Retención y eliminación definidas legalmente.
- Evaluación de riesgos, pruebas de penetración y revisión independiente.
- Contratos, consentimiento y avisos de privacidad claros.
- No usar datos reales en servicios gratuitos no aprobados.

## IA open source sin API comercial
Opciones a evaluar: OCR (p. ej. Tesseract) y modelos open source autoalojados (p. ej. Ollama con un modelo compatible). Requieren CPU/GPU/RAM, servidor y mantenimiento. “Sin créditos por token” no significa “sin costo de infraestructura”. La IA no autentica al emisor ni decide incapacidad; solo apoya extracción/clasificación y detección de anomalías.

## Verificación
QR contiene URL HTTPS con token aleatorio, no datos clínicos. La página debe mostrar únicamente estado, emisor validado y fecha/alcance autorizados. Un QR o PDF aislado no prueba autenticidad: la consulta debe ir al registro confiable y contemplar revocación.
