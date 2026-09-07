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

La explicación usa `videos/refrioil-split-espuma-blanca-v3.mp4`: nuevo video desde la imagen frontal con espuma blanca. UNA generación Omni 1.1 Flash autorizada por hasta 12 créditos existentes, costo mostrado 12, 8 s/720p/24 fps/x1. No se auditó diferencia de saldo. El montaje final dura 6 s y no tiene audio: se retiraron los dos segundos finales donde la espuma se deformaba. Archivo completo decodificado (144 cuadros); referencias visuales revisadas. Es una representación conceptual IA, no una demostración física validada; conserva pequeñas imperfecciones de textura/etiqueta, sin iteraciones adicionales.

El clip anterior y su póster se conservan para recuperación, pero ya no se muestran en la explicación. Una edición anterior autorizada por 40 créditos no había mejorado la espuma y sigue fuera de la web; no confundirla con este nuevo resultado. Cualquier generación futura requiere nueva autorización.

Las fotos de envase suministradas muestran una tapa roja; el producto definitivo lleva tapa negra según el usuario. Falta una imagen final corregida para sustituirlas, sin modificar la marca.

Solo Espuma de Limpieza HVAC-R está habilitada; faltan confirmar materiales de los demás productos nuevos. Las animaciones 3D antiguas se conservan en archivos como respaldo, pero no se muestran ni se carga Three.js en la web.

## Verificación
Pruebas de lógica: navegación, error y acierto, reinicio, enlaces, resultado protegido de acceso directo y existencia de archivos. No equivalen a una prueba física en celular o a verificar la disponibilidad del stand.
