with open("hashesAndtitles", "r", encoding="utf8") as one, open("articlesPercentEncoded", "r", encoding="utf8") as two, open("jokesAndArtists", "r", encoding="utf8") as three, open("CombinedRawData", "w", encoding="utf8") as out:
    oneLines = one.readlines()
    twoLines = two.readlines()
    threeLines = three.readlines()
    for i in range(len(oneLines)):
        out.write(oneLines[i].rstrip("\r\n") + twoLines[i].rstrip("\r\n") + ";;;" + threeLines[i])

