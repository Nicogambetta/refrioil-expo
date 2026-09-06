# Experiencia Espuma HVAC-R · cómo abrirla y cómo seguir

## Qué es
Un juego de 4 pantallas para celular, pensado para el QR del stand:
1. **Inicio** — foto grande + "¿Sabés para qué sirve esta espuma?" + botón Jugar.
2. **Mirala de cerca** — el envase gira en 3D con el dedo (frente ↔ dorso). También con los botones Frente / Dorso.
3. **Desafío** — serpentina (ilustración) + "Vas a limpiar una serpentina. ¿Qué producto elegís?" con 3 opciones. Si erra, sacude y deja probar. Si acierta: confeti y pasa solo a la pantalla final.
4. **¡Correcto!** — "Esta espuma está indicada para limpiar serpentinas", usos de la etiqueta, invitación a preguntar al equipo, botón Jugar de nuevo.
El botón "Inicio" arriba a la derecha vuelve al principio desde cualquier pantalla.

## Archivos
- `index.html` — toda la experiencia.
- `experiencia.html` — solo redirige a la pantalla del envase (`index.html?pantalla=producto`). Se puede borrar.
- `*-web.jpg` — copias livianas que usa la página (0,5 MB en total, cargan rápido por QR).
- `producto.png`, `dorso.png`, `serpentina.png`, `aceite.png`, `refrigerante.png` — originales, sin tocar.
- `primera-version.html`, `segunda-version.html` — versiones anteriores.

## Probar en la compu
Doble clic en `index.html`. Funciona sin servidor.

## Probar en el celular (misma red Wi-Fi)
1. En la Mac, abrir Terminal y correr:
   ```bash
   cd "/Users/nicolasgambetta/Documents/Codex/2026-09-06/re/outputs/espuma-refrioil" && python3 -m http.server 8080
   ```
2. Ver la IP de la Mac (Ajustes → Wi-Fi → Detalles), por ejemplo `192.168.0.15`.
3. En el celular abrir `http://192.168.0.15:8080/index.html`.
Sirve para probar, no para la expo.

## Para la expo (QR)
El QR necesita una dirección pública. Nada está publicado todavía; requiere tu OK:
- **Netlify Drop** (gratis, 2 minutos): arrastrar la carpeta a app.netlify.com/drop → URL tipo `https://algo.netlify.app`.
- **GitHub Pages** o una subcarpeta en refrioil.com (ej. `refrioil.com/espuma`).
Con la URL se genera el QR (Canva o cualquier generador) y se imprime grande. El QR debe apuntar a `index.html`.

## Giro 3D vs. giro 360° real
Hoy el giro 3D usa las dos fotos (frente y dorso) como una tarjeta que rota. Para un giro 360° real hay dos caminos:
- **Fotos desde varios ángulos**: guardarlas en `360/` como `espuma-01.jpg`, `espuma-02.jpg`, … (mínimo 8, ideal 12 a 24, girando siempre para el mismo lado, mismo encuadre y fondo) y cargar las rutas en `giro360` dentro de `PRODUCTOS`. Aparece solo el botón "360°".
- **Arte plano de la etiqueta** (el archivo que usa la imprenta, probablemente lo tiene Alan): con eso se arma un envase 3D real (cilindro con la etiqueta) que gira completo. Es un desarrollo aparte.

## Sumar productos (Limpiador de Bomba, Long)
En `index.html`, en la lista `PRODUCTOS`, hay dos bloques vacíos con `disponible: false`.
Completar fotos, usos de etiqueta, pregunta y opciones, y poner `disponible: true`.
Con dos o más disponibles el inicio muestra un selector. Abrir uno directo: `index.html?producto=long`.

## Regenerar las copias web (si cambia un original)
```bash
cd "/Users/nicolasgambetta/Documents/Codex/2026-09-06/re/outputs/espuma-refrioil" && sips -s format jpeg -s formatOptions 82 --resampleWidth 1400 producto.png --out producto-web.jpg && sips -s format jpeg -s formatOptions 82 --resampleWidth 1400 dorso.png --out dorso-web.jpg
```

## Textos: qué se afirma y de dónde sale
- "Espuma de limpieza HVAC-R" y "Serpentinas · Motores · Radiadores": del frente del envase.
- No se incluyen modo de uso, dosis, rendimiento ni certificaciones.
- `aceite.png` y `refrigerante.png` son ilustraciones genéricas y así están señaladas en pantalla, igual que la serpentina.
