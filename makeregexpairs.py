import re

# File paths
input_file = "similar_grouped_and_long_titles.txt"
output_file = "find_replace_pairs.txt"

target_name = None
replace_names = []
# Read the file
with open(input_file, "r", encoding="utf-8") as inFile, open(output_file, "w", encoding="utf-8") as outFile:
    for line in inFile:
        if not line.strip() and target_name and len(replace_names) > 0:
            outFile.write(target_name + "___(" + "|".join(replace_names) + ")\n")
            target_name = None
            replace_names.clear()
        elif not target_name:
            target_name = line.strip()
        else:
            replace_names.append(re.escape(line.strip()))