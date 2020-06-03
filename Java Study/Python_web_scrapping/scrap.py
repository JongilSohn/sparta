from indeed import extract_indeed_pages, extract_indeed_jobs

last_indeed_pages = extract_indeed_pages()      # 최대 페이지를 정의하는 함수를 변수에 넣는다.

indeed_jobs = extract_indeed_jobs(last_indeed_pages)      #최대 페이지를 정의하는 함수를 넣은 변수를 인자로 넣고 함수를 실행한다.

print(indeed_jobs)