#!/usr/bin/env python3
"""Insert new research papers into research.ts."""

def extract_content(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    in_content = False
    content_lines = []
    started = False
    bt = chr(96)
    for line in lines:
        stripped = line.strip()
        if not started:
            if stripped.startswith('export const') and bt in line:
                bt_pos = line.index(bt)
                after_bt = line[bt_pos+1:]
                if after_bt.strip():
                    content_lines.append(after_bt)
                in_content = True
                started = True
            continue
        if in_content:
            if stripped == bt + ';':
                in_content = False
                break
            content_lines.append(line)
    return ''.join(content_lines).strip()

def make_entry(slug, title, desc, icon, category, readTime, content):
    bt = chr(96)
    lines = [
        '  {',
        '    slug: "' + slug + '",',
        '    title: "' + title + '",',
        '    description: "' + desc + '",',
        '    icon: "' + icon + '",',
        '    category: "' + category + '",',
        '    readTime: "' + readTime + '",',
        '    content: ' + bt,
        content,
        '    ' + bt + ',',
        '  },',
    ]
    return '\n'.join(lines)

def main():
    base = '/home/z/my-project/ai-retirement-blueprint/src/data'
    
    fc = extract_content(base + '/research-freelance.ts')
    gc = extract_content(base + '/research-geoarbitrage.ts')
    rc = extract_content(base + '/research-retirement.ts')
    
    print('freelance:', len(fc), 'chars')
    print('geo:', len(gc), 'chars')
    print('retire:', len(rc), 'chars')
    
    e1 = make_entry(
        'freelance-ai-economy-2026',
        'The AI-Powered Freelance Economy: Market Data, Income Benchmarks & Strategic Opportunities 2025-2026',
        'A comprehensive analysis of the freelance and independent workforce, AI adoption rates, income benchmarks, platform economics, and strategic positioning for AI-era freelancers.',
        '\U0001f4ca',
        'Income Analysis',
        '30 min',
        fc
    )
    
    e2 = make_entry(
        'geoarbitrage-strategy-2026',
        'Geoarbitrage in the AI Age: A Data-Driven Financial Strategy for Location Independence 2025-2026',
        'A data-driven analysis of geoarbitrage opportunities, cost-of-living comparisons across 25+ cities, tax implications, and the mathematical case for location-independent living.',
        '\U0001f30d',
        'Strategy',
        '35 min',
        gc
    )
    
    e3 = make_entry(
        'social-security-retirement-strategy-2026',
        'Social Security Optimization & Retirement Account Strategies for AI-Era Workers: A 2025-2026 Guide',
        'A comprehensive guide to Social Security claiming strategies, retirement account optimization for gig workers, tax-efficient withdrawal strategies, and AI-income integration.',
        '\U0001f3e6',
        'Financial Strategy',
        '30 min',
        rc
    )
    
    # Read existing research.ts
    with open(base + '/research.ts', 'r') as f:
        existing = f.read()
    
    # Replace closing ]; with new entries + ];
    stripped = existing.rstrip()
    if stripped.endswith('];'):
        existing = stripped[:-2]
    
    updated = existing + ',\n' + e1 + '\n' + e2 + '\n' + e3 + '\n];\n'
    
    with open(base + '/research.ts', 'w') as f:
        f.write(updated)
    
    print('Updated research.ts:', len(updated), 'chars total')

if __name__ == '__main__':
    main()
