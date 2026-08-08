#!/usr/bin/env python3
import re, sys

filepath = sys.argv[1]
with open(filepath, 'r') as f:
    content = f.read()

# Find all backtick positions
positions = [i for i, c in enumerate(content) if c == '`']
print(f'Total backticks: {len(positions)}')
print(f'First backtick at pos: {positions[0] if positions else "none"}')
print(f'Last backtick at pos: {positions[-1] if positions else "none"}')

# Show chars around last backtick
if positions:
    last = positions[-1]
    context = content[max(0,last-5):last+10]
    print(f'Context around last backtick: {repr(context)}')

# Try matching
pattern = r'export const freelanceAiEconomyReport = `
(.*?)
`;'
match = re.search(pattern, content, re.DOTALL)
print(f'Regex match: {bool(match)}')
if match:
    print(f'Content length: {len(match.group(1))}')
