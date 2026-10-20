"""Genera el sol animado de las firmas de correo: public/firmas/sol-eos.gif

Las firmas no pueden usar CSS animado ni SVG (Gmail y Outlook los quitan),
así que el sol es un GIF. Se dibuja a 4x y se reduce para suavizar bordes.

Escena (la misma idea que el arco de la portada de la web): las puertas del
cielo en forma de arco, con el cielo del alba dentro; los «dedos rosados»
(rayos) giran despacio, el sol late sobre el horizonte, el mar brilla y
Eósforo, la estrella de la mañana, centellea.

Outlook de escritorio solo muestra el primer fotograma: por eso el primero
ya es una imagen completa.

Uso:  python3 scripts/firmas/sol.py
"""
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

SALIDA = Path(__file__).resolve().parents[2] / 'public' / 'firmas' / 'sol-eos.gif'

W, H = 192, 240          # tamaño final (se muestra a 96x120: nítido en pantallas retina)
K = 4                    # sobremuestreo
FOTOGRAMAS = 24
MS = 90                  # milisegundos por fotograma (≈2,2 s por vuelta)

FONDO = (255, 255, 255)
CIELO = [(245, 207, 198), (248, 220, 194), (251, 235, 221)]
ROSA = (233, 140, 131)
CORAL = (240, 122, 69)
NARANJA = (243, 160, 108)
AZAFRAN = (232, 163, 61)
TERRACOTA = (200, 100, 59)
MAR = (246, 223, 205)


def mezcla(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def arco(d, w, h, inset, fill):
    # Arco de medio punto con las esquinas de abajo un poco redondeadas.
    r = (w - 2 * inset) / 2
    d.ellipse([inset, inset, w - inset, inset + 2 * r], fill=fill)
    d.rounded_rectangle([inset, inset + r - 1, w - inset, h - inset], radius=8 * K, fill=fill)


def fotograma(t):
    w, h = W * K, H * K
    pad = 6 * K
    img = Image.new('RGB', (w, h), FONDO)

    # Máscara del arco
    mascara = Image.new('L', (w, h), 0)
    arco(ImageDraw.Draw(mascara), w, h, pad + 2 * K, fill=255)

    # Cielo del alba: degradado vertical
    cielo = Image.new('RGB', (w, h))
    dc = ImageDraw.Draw(cielo)
    for y in range(h):
        u = y / h
        c = mezcla(CIELO[0], CIELO[1], u / .5) if u < .5 else mezcla(CIELO[1], CIELO[2], (u - .5) / .5)
        dc.line([(0, y), (w, y)], fill=c)

    hx, hy = w / 2, h * 0.76          # el horizonte
    # Dedos rosados: 12 rayos que giran 30º por vuelta (bucle perfecto)
    rayos = Image.new('L', (w, h), 0)
    dr = ImageDraw.Draw(rayos)
    giro = t * 30
    for i in range(12):
        a0 = math.radians(giro + i * 30)
        a1 = a0 + math.radians(10)
        R = h * 1.2
        dr.polygon([(hx, hy), (hx + R * math.cos(a0), hy - R * math.sin(a0)),
                    (hx + R * math.cos(a1), hy - R * math.sin(a1))], fill=95)
    rayos = rayos.filter(ImageFilter.GaussianBlur(2 * K))
    cielo.paste(Image.new('RGB', (w, h), ROSA), (0, 0), rayos)

    # El sol: halo, anillo y núcleo, latiendo
    dsun = ImageDraw.Draw(cielo)
    pulso = 1 + 0.05 * math.sin(2 * math.pi * t)
    for radio, color in ((62, mezcla(AZAFRAN, CIELO[1], .45)), (46, NARANJA), (33, CORAL)):
        r = radio * K * pulso if radio == 62 else radio * K
        dsun.ellipse([hx - r, hy - r, hx + r, hy + r], fill=color)

    # El mar bajo el horizonte, con dos reflejos que se mueven
    dsun.rectangle([0, hy, w, h], fill=MAR)
    for j, (largo, dy) in enumerate(((54, 11), (30, 22))):
        desp = math.sin(2 * math.pi * (t + j * .3)) * 8 * K
        dsun.line([(hx - largo * K / 2 + desp, hy + dy * K), (hx + largo * K / 2 + desp, hy + dy * K)], fill=mezcla(CORAL, MAR, .35), width=3 * K)
    dsun.line([(0, hy), (w, hy)], fill=TERRACOTA, width=2 * K)

    # Eósforo, la estrella de la mañana
    ex, ey = w * 0.73, h * 0.27
    e = (10 + 3 * math.sin(2 * math.pi * t * 2)) * K
    f = e * 0.28
    dsun.polygon([(ex, ey - e), (ex + f, ey - f), (ex + e, ey), (ex + f, ey + f), (ex, ey + e), (ex - f, ey + f), (ex - e, ey), (ex - f, ey - f)], fill=(255, 250, 236))

    # Marco del arco: un filete de terracota (un arco relleno debajo, 2 px mayor)
    arco(ImageDraw.Draw(img), w, h, pad, fill=mezcla(TERRACOTA, FONDO, .4))
    img.paste(cielo, (0, 0), mascara)
    # Fuera del arco, transparente: así no aparece un recuadro blanco en los
    # correos con fondo oscuro. Se devuelve también la máscara a tamaño final.
    exterior = Image.new('L', (w, h), 0)
    arco(ImageDraw.Draw(exterior), w, h, pad, fill=255)
    return img.resize((W, H), Image.LANCZOS), exterior.resize((W, H), Image.LANCZOS)


def main():
    pares = [fotograma(i / FOTOGRAMAS) for i in range(FOTOGRAMAS)]
    # Paleta común a todos los fotogramas (evita parpadeos de color) con un
    # hueco libre, el último índice, que hace de transparente.
    TRANSP = 95
    paleta = pares[0][0].quantize(colors=TRANSP, method=Image.Quantize.MEDIANCUT)
    gif = []
    for rgb, alfa in pares:
        q = rgb.quantize(palette=paleta, dither=Image.Dither.NONE)
        fuera = alfa.point(lambda v: 255 if v < 128 else 0)
        q.paste(TRANSP, (0, 0), fuera)
        gif.append(q)
    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    gif[0].save(SALIDA, save_all=True, append_images=gif[1:], duration=MS, loop=0, optimize=False, disposal=2, transparency=TRANSP)
    print(f'{SALIDA.relative_to(SALIDA.parents[2])}: {SALIDA.stat().st_size // 1024} KB, {FOTOGRAMAS} fotogramas')


if __name__ == '__main__':
    main()
