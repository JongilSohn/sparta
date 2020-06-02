#2.3강

import requests
from bs4 import BeautifulSoup

indeed_result = requests.get('https://kr.indeed.com/%EC%B7%A8%EC%97%85?as_and=python&as_phr=&as_any=&as_not=&as_ttl=&as_cmp=&jt=all&st=&as_src=&radius=25&l=%EC%9D%B8%EC%B2%9C&fromage=any&limit=20&sort=&psf=advsrch&from=advancedsearch')
indeed_soup = BeautifulSoup(indeed_result.text, 'html.parser')     #뷰티풀숩을 사용해 Html을 전체 가져온다.

pagination = indeed_soup.find("div", {"class":"pagination"})    #page 수를 찾기 위해 해당 div를 가져와서 확인한다.

links = pagination.find_all('a')    #가져온것에서 페이지의 링크 수를 찾아온다.

pages = []      #링크에서 span이 붙은것만 빼와서 리스트에 저장한다. 뒤에 짜잘한것을 없애주기 위해.

for link in links[:-1]:                     #Operation spans[-1] 하면 맨 마지막것을 칭한다.  So, [:-1]은 span을 가져오되 마지막 하나를 제외한다.
                                            #[0:5]하면 0부터 5까지 가져온다.

    #pages.append(link.find("span"))
    #pages.append(link.find("span").string)      #<sapn>1<span/>, <span>2><span/> 에서 문자만 가져오기 위해 string 사용
   
    #pages.append(link.string)   #바로 위의 결과와 같게 나온다. 위에 것을 쉽게 만든것이다. 링크 안에는 많은 내용이 있지만 string은 단 1개이다.
    pages.append(int(link.string))  #위에것을 가져오면 문자열이기때문에 정수형으로 바꿔준다.
    #print(page)
            #Operation spans[-1] 하면 맨 마지막것을 칭한다.  So, [:-1]은 span을 가져오되 마지막 하나를 제외한다.
                                  #[0:5]하면 0부터 5까지 가져온다.
    #print(pages) 최종적으로 가져온 페이지의 수는 2, 3, 4, 5 이렇게 정수형으로만 가져온다.   
###################################################### 이렇게 하게되면 Page의 총 갯수를 불러오게 된다.


## 1.  가장 마지막 페이지를 가져온다.
#print(pages[-1]) #마지막것 1개를 출력한다.
max_page = pages[-1]    #가장 마지막 페이지를 찾아 변수로 지정한다.
