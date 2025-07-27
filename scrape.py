import re
import random
import time
import requests
from bs4 import BeautifulSoup

jokeRegex = re.compile(r"Joke.*")
count = 0
with open("lastoutput", "w", encoding="utf8") as outfile:
    with open("articles", encoding="utf8") as file:
        for url in file:
            try:
                response = requests.get(url.rstrip("\n"))
                soup = BeautifulSoup(response.text, "html.parser")
                output = ""
                jokeElem = soup.find(id=jokeRegex)
                if jokeElem and jokeElem.parent:
                    curElem = jokeElem.parent.next_sibling
                    while curElem and curElem.name != "h2":
                        output += curElem.text
                        curElem = curElem.next_sibling
                    output = output.replace("\n"," ").replace("\r"," ")
                else:
                    output += "No joke found."
                
                authorParentElem = soup.find("div", {"data-source": "author"})
                if authorParentElem:
                    divElem = None
                    for child in authorParentElem.children:
                        if child.name == "div":
                            divElem = child
                    if divElem:
                        output += ";;;" + divElem.text
            except Exception as e:
                output += "Exception while fetching, parsing or navigating page: " + str(e)
            outfile.write(output + "\n")
            count += 1
            if count % 100 == 0:
                print(str(count) + ": " + output)
            time.sleep((random.random() * 2) + 0.5)
