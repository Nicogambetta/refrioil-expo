# Refrioil - versión expo

Evento: Expo Frío Calor 2026, Costa Salguero, Buenos Aires. Stand 145A.

## Recorrido
Escanear QR → conocer la espuma → resolver tres casos variables → con 3/3, presentarse con el equipo para registrar la participación en el sorteo presencial. La web no registra personas ni entrega premios automáticamente. La cantidad de obsequios, las condiciones y el horario los debe confirmar el equipo.

El desafío tiene 12 casos: elegir un producto, armar un kit para dos tareas independientes y detectar una asignación incorrecta. Usa fotografías oficiales de Clean Air, Detector de Fugas Exterior, Sellalong 10 y la espuma suministrada. Una respuesta confirmada por caso; no hay reloj. Al repetir, cambian los tres casos y se mezclan las opciones. El sorteo sigue siendo presencial; el puntaje no genera ganadores ni tickets.

## Material para imprimir
Usar cartel/cartel-expo-145A.pdf (A4), o cartel/cartel-expo-145A.html. El QR conserva https://nicogambetta.github.io/refrioil-expo/?producto=espuma . Probar escaneando una impresión antes de imprimir todos.

## Para mostrar sin internet
Descomprimir el respaldo y abrir index.html. El desafío, las fotos y los videos locales no requieren conexión. Se retiró el visor 3D simplificado y sus flechas del recorrido. Frente/dorso se muestra con fotos del envase. Los videos incluidos son demostraciones conceptuales, no filmaciones del producto.

## Pendiente importante
La portada usa `videos/refrioil-angulos-v2.mp4`: montaje de fotografías de 12 s, 1080p, 24 fps, tres ángulos (split frontal, detalle de aletas, condensadora lateral). Dos imágenes nuevas con generación integrada, una por escena, sin variantes; se reutilizó la imagen lateral existente. Prompts y referencias en `escenas/PROMPTS.md`. No presentar el montaje como una filmación del producto.

La explicación conserva el video de Flow original de 8 s/720p. El 7/9 se autorizó y ejecutó UNA edición con Gemini Omni Flash (tarifa oficial: 40 créditos), sin compras ni variantes. Se descargó el resultado, se decodificaron sus 192 cuadros y se compararon principio, medio y final: no hay aumento claro de espuma, por lo que NO se publicó como mejora. Queda guardado fuera de la web en `work/video-omni-no-aprobado.mp4`. No volver a generar sin autorización. Aumentar la espuma del clip sigue pendiente.

Las fotos de envase suministradas muestran una tapa roja; el producto definitivo lleva tapa negra según el usuario. Falta una imagen final corregida para sustituirlas, sin modificar la marca.

Solo Espuma de Limpieza HVAC-R está habilitada; faltan confirmar materiales de los demás productos nuevos. Las animaciones 3D antiguas se conservan en archivos como respaldo, pero no se muestran ni se carga Three.js en la web.

## Verificación
Pruebas de lógica: navegación, error y acierto, reinicio, enlaces, resultado protegido de acceso directo y existencia de archivos. No equivalen a una prueba física en celular o a verificar la disponibilidad del stand.
