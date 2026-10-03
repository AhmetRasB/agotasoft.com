"""Split Inter into a Latin subset (TR/EN/UZ/TK, punctuation, ₺, arrows) and a Cyrillic subset (RU).

app/fonts.js declares both with matching unicode-range, so the Cyrillic files are only downloaded
on pages that contain Cyrillic text. Re-run after replacing the source fonts.

Usage (from sofax/):  python3 scripts/subset-fonts.py   (needs: pip install fonttools brotli)
"""
import os

from fontTools import subset

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "app/fonts/inter")
OUT = os.path.join(SRC, "subset")
WEIGHTS = ["Regular", "Medium", "SemiBold", "Bold"]

# Keep in sync with the unicode-range values in app/fonts.js.
RANGES = {
    "latin": "U+0000-024F,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2070-209F,U+20A0-20CF,U+2100-214F,U+2190-21FF,U+2212,U+2215,U+FEFF,U+FFFD",
    "cyrillic": "U+0400-052F,U+2116",
}


def unicodes(spec):
    out = []
    for part in spec.split(","):
        part = part.strip().replace("U+", "")
        if "-" in part:
            start, end = part.split("-")
            out.extend(range(int(start, 16), int(end, 16) + 1))
        else:
            out.append(int(part, 16))
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    for weight in WEIGHTS:
        for name, spec in RANGES.items():
            options = subset.Options()
            options.flavor = "woff2"
            options.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk", "case", "tnum"]
            options.name_IDs = ["*"]
            font = subset.load_font(os.path.join(SRC, f"Inter-{weight}.woff2"), options)
            subsetter = subset.Subsetter(options)
            subsetter.populate(unicodes=unicodes(spec))
            subsetter.subset(font)
            target = os.path.join(OUT, f"Inter-{weight}.{name}.woff2")
            subset.save_font(font, target, options)
            print(f"{target[len(ROOT) + 1:]}: {os.path.getsize(target) // 1024} KB")


if __name__ == "__main__":
    main()
