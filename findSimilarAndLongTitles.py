import re
from cdifflib import CSequenceMatcher
import difflib
from collections import Counter

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

# Check if one multiset is almost contained in another
def almost_contained(counts1, counts2):
    """Return True if counts1 is contained in counts2."""
    diff = 0
    for word, freq in counts1.items():
        diff += abs(max(0, freq - counts2.get(word, 0)))
        if diff > 0:
            return False
    return True

# Read the file
with open(input_file, "r", encoding="utf-8") as f:
    lines = [line.strip() for line in f if line.strip()]

# Prepare normalized entries
entries = [(normalize(line), line) for line in lines]

# Group similar titles (>= 90% similarity)
visited = set()
groups = []

for i, (norm1, line1) in enumerate(entries):
    if i in visited:
        continue
    print(str(i) + '\n')
    counts1 = Counter(norm1.split(' '))
    group = [line1]
    visited.add(i)
    for j in range(i + 1, len(entries)):
        if j in visited:
            continue
        norm2, line2 = entries[j]
        counts2 = Counter(norm2.split(' '))
        if (almost_contained(counts1, counts2) or almost_contained(counts2, counts1)):
            group.append(line2)
            visited.add(j)
    if len(group) > 1:
        groups.append(group)

# Write to the output file
with open(output_file, "w", encoding="utf-8") as f:
    for group in groups:
        for line in group:
            f.write(line + "\n")
        f.write("\n")

print(f"Output saved to: {output_file}")