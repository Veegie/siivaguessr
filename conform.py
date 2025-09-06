import re

regexFile = "find_replace_pairs.txt"
dbFile = "js/db.js"
conformedFile = "js/db.conformed.js"

findReplaceTuples = []
with open(regexFile, "r", encoding="utf-8") as rFile:
    for line in rFile:
        parts = line.strip().split('___')
        findReplaceTuples.append((parts[0], re.compile(parts[1])))

with open(dbFile, "r", encoding="utf-8") as dbFile, open(conformedFile, "w", encoding="utf-8") as outFile:
    for line in dbFile:
        outLine = line
        for frTuple in findReplaceTuples:
            if frTuple[1].search(line):
                outLine =  re.sub(frTuple[1], frTuple[0], line)
                break
        outFile.write(outLine)

