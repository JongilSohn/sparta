import requests
from bs4 import BeautifulSoup


URL = f'http://www.saramin.co.kr/zf_user/search/recruit?search_area=main&search_done=y&search_optional_item=n&searchType=default_mysearch&searchword=Python'
URL_op = f'&recruitSort=relation&recruitPageCount=40&inner_com_type=&company_cd=0,1,2,3,4,5,6,7,9&quick_apply='

def get_last_page():
    result = requests.get(URL+URL_op)

    # 뷰티풀숩을 사용해 Html을 전체 가져온다.
    soup = BeautifulSoup(result.text, 'html.parser')
    pagination = soup.find("div", {"class":"pagination"}).find_all("span")
    last_page = pagination[-1].get_text()
    return int(last_page)

def extract_job(job):
    companys = job.find("strong", {"class":"corp_name"}).find("span").string
    positions = job.find("h2", {"class":"job_tit"}).find("a")["title"]
    locations = job.find("div", {"class":"job_condition"}).find("a").string
    #links = job.find("h2", {"class":"job_tit"}).find("a")["rel class href="]
    ##질문!!! 여기서 구, 동을 가져오고 싶다.
    jobs_kind = {'company':companys, 'positions':positions, 'locations':locations}
    return jobs_kind




def extract_page(last_page):
    jobs = []
    for page in range(last_page):
    #for page in range(1):
        print(f"Saramin page : {page+1}")
        result = requests.get(URL+f'&recruitPage={page}'+URL_op)
        soup = BeautifulSoup(result.text, 'html.parser')
        jobs_page = soup.find_all("div", {"class":"item_recruit"})

        for job in jobs_page:
            #job = extract_job(jobs_page)
            job = extract_job(job)
            jobs.append(job)
            #print(jobs)
             

        
    print(jobs)    
    return jobs

# def extract_job(jobs):
    
#     companys = jobs.find("a")["title"]
#     print(companys)


extract_page(get_last_page())
#extract_job()