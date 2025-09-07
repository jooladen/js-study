import requests
from bs4 import BeautifulSoup

print("🟢 크롤링 시작!")

url = "https://www.example.com"  # 예제 도메인 (항상 존재함)

res = requests.get(url)
soup = BeautifulSoup(res.text, "html.parser")

print("페이지 타이틀:", soup.title.text)
