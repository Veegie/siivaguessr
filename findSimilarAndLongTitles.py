import re
from cdifflib import CSequenceMatcher
import difflib

difflib.SequenceMatcher = CSequenceMatcher

# File paths
input_file = "songListInput.txt"
output_file = "similar_grouped_and_long_titles.txt"

# Normalize the title
def normalize(title):
    title = title.lower().strip()
    title = re.sub(r'\band\b', '&', title)
    title = re.sub(r'\s+', ' ', title)
    return title

# Read the file
with open(input_file, "r", encoding="utf-8") as f:
    lines = [line.strip() for line in f if line.strip()]

# Prepare normalized entries
entries = [(normalize(line.split(":")[0]), line) for line in lines]

# Group similar titles (>= 60% similarity)
visited = set()
groups = []

for i, (norm1, line1) in enumerate(entries):
    if i in visited:
        continue
    print(str(i) + '\n')
    group = [line1]
    visited.add(i)
    for j in range(i + 1, len(entries)):
        if j in visited:
            continue
        norm2, line2 = entries[j]
        similarity = CSequenceMatcher(None, norm1, norm2).ratio()
        if similarity >= 0.60:
            group.append(line2)
            visited.add(j)
    if len(group) > 1:
        groups.append(group)

# Find all long titles
long_lines = [line for line in lines if len(line.split(":")[0].strip()) > 60]

# Write to the output file
with open(output_file, "w", encoding="utf-8") as f:
    for group in groups:
        for line in group:
            f.write(line + "\n")
        f.write("\n")
    f.write("\n--- LONG LINES ---\n\n")
    for line in long_lines:
        f.write(line + "\n")

print(f"Output saved to: {output_file}")