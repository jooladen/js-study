# import requests
# from bs4 import BeautifulSoup

# # 크롤링 대상 URL (네이버 뉴스 예시)
# url = "https://news.naver.com/"

# # HTML 가져오기
# res = requests.get(url)
# soup = BeautifulSoup(res.text, "html.parser")

# # 제목 태그 예시 추출
# titles = soup.select("a[href*='/read?oid=']")[:5]

# for i, t in enumerate(titles, start=1):
#     print(f"{i}. {t.text.strip()}")


# import requests
# from bs4 import BeautifulSoup

# print("🟢 네이버 뉴스 크롤링 시작!")

# # 네이버 뉴스 메인 페이지
# url = "https://news.naver.com/"

# # 요청 보내기 (User-Agent 추가: 일부 사이트는 필요)
# headers = {"User-Agent": "Mozilla/5.0"}
# res = requests.get(url, headers=headers)

# # HTML 파싱
# soup = BeautifulSoup(res.text, "html.parser")

# # 뉴스 제목 링크 가져오기 (최대 5개만)
# titles = soup.select("a[href*='/read?oid=']")[:5]

# print(f"🔍 총 {len(titles)}개의 뉴스 발견")
# for i, t in enumerate(titles, start=1):
#     print(f"{i}. {t.text.strip()}")

# print("✅ 크롤링 완료")


import requests
from bs4 import BeautifulSoup

print("🟢 네이버 뉴스 RSS 크롤링 시작!")

# 네이버 주요 뉴스 RSS (정치 뉴스 예시)
url = "https://rss.naver.com/rss/section_politics.xml"

res = requests.get(url)
soup = BeautifulSoup(res.content, "xml")

# item 태그 안의 title 가져오기 (앞에서 5개만)
titles = soup.find_all("title")[1:6]  # 첫 번째는 채널 제목이라 제외

print(f"🔍 총 {len(titles)}개의 뉴스 발견")
for i, t in enumerate(titles, start=1):
    print(f"{i}. {t.text.strip()}")

print("✅ 크롤링 완료")


# import requests
# from bs4 import BeautifulSoup

# url = "http://feeds.bbci.co.uk/news/rss.xml"

# res = requests.get(url)
# soup = BeautifulSoup(res.content, "xml")

# titles = soup.find_all("title")[1:6]

# for i, t in enumerate(titles, 1):
#     print(f"{i}. {t.text.strip()}")
