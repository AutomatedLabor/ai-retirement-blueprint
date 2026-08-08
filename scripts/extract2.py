#!/usr/bin/env python3
"""Extract and insert research content using line-by-line parsing."""

def extract_content_linebyline(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    in_content = False
    content_lines = []
    started = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        if not started:
            if stripped.startswith('export const') and chr(96) in line:
                bt_pos = line.index(chr(96))
                after_bt = line[bt_pos+1:]
                if after_bt.strip():
                    content_lines.append(after_bt)
                in_content = True
                started = True
            continue
        
        if in_content:
            if stripped == chr(96) + ';':
                in_content = False
                break
            content_lines.append(line)
    
    return ''.join(content_lines).strip()

for name, path in [
    ('freelance', '/home/z/my-project/ai-retirement-blueprint/src/data/research-freelance.ts'),
    ('geo', '/home/z/my-project/ai-retirement-blueprint/src/data/research-geoarbitrage.ts'),
    ('retire', '/home/z/my-project/ai-retirement-blueprint/src/data/research-retirement.ts'),
]:
    content = extract_content_linebyline(path)
    print(f'{name}: {len(content)} chars, first 80: {content[:80]!r}')
