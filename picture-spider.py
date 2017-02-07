import requests
from bs4 import BeautifulSoup
import os

d = requests.get("http://222.204.2.140:85/main.asp")
d.encoding = "gb2312"
cookies = d.cookies

d = requests.get("http://222.204.2.140:85/link/campus.asp?campusid=qh", cookies=cookies, headers={
                 "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2950.4 Safari/537.36"})
d.encoding = "gb2312"

soup = BeautifulSoup(d.text, "html5lib")

areas = soup.find_all("area")

for area in areas:
    link = area.attrs["href"]
    name = area.attrs["alt"]
    if os.path.exists(name):
        continue
    os.mkdir(name)
    os.chdir(name)
    print("%s" % name)
    d2 = requests.get("http://222.204.2.140:85/" + link, cookies=cookies, headers={
                      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2950.4 Safari/537.36"})
    d2.encoding = "gb2312"
    soup = BeautifulSoup(d2.text, "html5lib")
    lou = soup.table.tbody.contents[2].td.table.tbody.find_all("td")
    for l in lou:
        link = l.a.attrs["href"]
        floor = l.text
        print("\t %s" % floor)
        d3 = requests.get("http://222.204.2.140:85/" + link, cookies=cookies)
        d3.encoding = "gb2312"
        soup = BeautifulSoup(d3.text, "html5lib")
        img = soup.find("img")
        if img is None:
            break

        img_url = img.attrs["src"]
        img = "http://222.204.2.140:85/" + img_url

        img_file = requests.get(img)

        with open(floor.strip() + ".gif", "wb+") as f:
            f.write(img_file.content)

    os.chdir("../")
