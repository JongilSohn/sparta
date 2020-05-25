import requests
from bs4 import BeautifulSoup


from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(
    'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303', headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

#############################
# (입맛에 맞게 코딩)
# selct, tr 을 가져와서 -> 영화 타이틀을 가져온다.

movies = soup.select("#old_content > table > tbody > tr")

for movie in movies:
    a_tag = movie.select_one('td.title > div > a')
    if a_tag is not None:
        # a의 text를 찍어본다.
        title = a_tag.text
        rank = movie.select_one('td:nth-child(1) > img')['alt']
        star = movie.select_one('td.point').text
        print(title, rank, star)
# target_movie = db.movies.find_one({'title':'매트릭스'})
# target_star = target_movie['star']

# movies = list(db.movies.find({'star' : target_star}))

# for movies in movies:
#     print(movies['title'], movies['star'])

# db.movies.update_many({'star':target_star}, {'$set':{'star':0}})

# for movies in movies:
#     print(movies['title'], movies['star'])
        # doc = {
        #     'rank': rank,
        #     'title': title,
        #     'star': star
        # }
        # db.movies.insert_one(doc)

# old_content > table > tbody > tr:nth-child(2) > td.title > div > a
# old_content > table > tbody > tr:nth-child(2)
# old_content > table > tbody > tr:nth-child(3)
    #############################
# old_content > table > tbody > tr:nth-child(2) > td.point
# old_content > table > tbody > tr:nth-child(2) > td:nth-child(1) > img
# old_content > table > tbody > tr:nth-child(3) > td:nth-child(1)
