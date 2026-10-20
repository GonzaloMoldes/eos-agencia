"""Genera la greca de las firmas: public/firmas/greca.png (filete de terracota).

Se dibuja a 2x (1040x24) y se muestra a 520x12. Uso: python3 scripts/firmas/greca.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

SALIDA = Path(__file__).resolve().parents[2] / 'public' / 'firmas' / 'greca.png'
K = 8                      # sobremuestreo
W, H, PASO = 1040, 24, 48  # tamaño final y ancho de cada módulo
img = Image.new('RGBA', (W * K, H * K), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
c, g = (200, 100, 59, 255), 2 * K
for x0 in range(0, W, PASO):
    pts = [(0, 22), (10, 22), (10, 2), (34, 2), (34, 16), (22, 16), (22, 9)]
    d.line([((x0 + x) * K, y * K) for x, y in pts], fill=c, width=g, joint='curve')
    d.line([((x0 + 34) * K, 22 * K), ((x0 + PASO) * K, 22 * K)], fill=c, width=g)
img.resize((W, H), Image.LANCZOS).save(SALIDA, optimize=True)
print(f'{SALIDA.name}: {SALIDA.stat().st_size // 1024} KB')
