import os, re, shutil

SRC = os.getcwd()
DIST = os.path.join(SRC, "dist")
EXTS = {'.html': 'html', '.css': 'css', '.js': 'js'}

def min_html(c):
    c = re.sub(r'<!--.*?-->', '', c, flags=re.S)
    c = re.sub(r'>\s+<', '><', c)
    c = re.sub(r'\s{2,}', ' ', c)
    return c.strip()

def min_css(c):
    c = re.sub(r'/\*.*?\*/', '', c, flags=re.S)
    c = re.sub(r'\s+', ' ', c)
    c = re.sub(r'\s*([{};:,])\s*', r'\1', c)
    c = c.replace(';}', '}')
    return c.strip()

def min_js(c):
    c = re.sub(r'//.*', '', c)
    c = re.sub(r'/\*.*?\*/', '', c, flags=re.S)
    c = re.sub(r'\s+', ' ', c)
    return c.strip()

MINIFIERS = {'html': min_html, 'css': min_css, 'js': min_js}

def process(root):
    if os.path.exists(DIST): shutil.rmtree(DIST)
    os.makedirs(DIST, exist_ok=True)
    for dirpath, _, files in os.walk(root):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            src_path = os.path.join(dirpath, f)
            rel = os.path.relpath(src_path, root)
            out_path = os.path.join(DIST, rel)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            with open(src_path, 'r', encoding='utf-8', errors='ignore') as fh:
                content = fh.read()
            kind = EXTS.get(ext)
            if kind:
                content = MINIFIERS[kind](content)
            with open(out_path, 'w', encoding='utf-8') as out:
                out.write(content)
    print("Minificado em:", DIST)

if __name__ == "__main__":
    process(SRC)
