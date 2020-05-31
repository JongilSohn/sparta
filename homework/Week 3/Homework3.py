import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1',  headers=headers)
# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

#############################
# (입맛에 맞게 코딩)
# selct, tr 을 가져와서 -> 영화 타이틀을 가져온다.

songs = soup.select("#body-content > div.newest-list > div > table > tbody > tr")

for song in songs:
    a_tag = song.select_one('td.info > a.title.ellipsis')
    if a_tag is not None:
        # a의 text를 찍어본다.
        title = a_tag.text
        total_rank = song.select_one('td.number').text
        sub_rank = song.select_one('td.number > span').text
        rank = total_rank.replace(sub_rank,'')
        # rank = songs.select_one('td.number').text
        singer = song.select_one('td.info > a.artist.ellipsis').text
        
        
        
        print(rank.strip(), title.strip(), singer.strip())
       


#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.number
#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.title.ellipsis
#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.artist.ellipsis

#body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.artist.ellipsis


