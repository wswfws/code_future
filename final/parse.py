import requests
from bs4 import BeautifulSoup

url = 'https://www.100bestbooks.ru/'
response = requests.get(url)
links = []
soup = BeautifulSoup(response.text, 'lxml')
quotes = soup.find_all('table', class_='t-check')
for i in quotes:
    item =i.find_all('a', href=True)[1]
    links.append(item['href'])

print(links)
for i in links:
    response = requests.get(url+i)
    soup = BeautifulSoup(response.text, 'lxml')
    image = url+soup.find_all('img', class_='bookinfo-preview')[0]['src']
    name = soup.find_all('h1', itemprop='name')[0].text
    description = soup.find_all('p', itemprop='description')[0].text
    autor = soup.find_all('span', itemprop='name')[0].text
    print(f"['{image}', '{name} ({autor})', '{description}']")
