from pymongo import MongoClient  
from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/order', methods=['POST'])
def test_post():
    print("print-order-POST")

    name_receive = request.form['name_give']
    number_receive = request.form['number_give']
    address_receive = request.form['address_give']
    phone_receive = request.form['phone_num_give']

    print("post-print", name_receive, number_receive,
          address_receive, phone_receive)

    # 2. DB에 정보 삽입하기
    # DB에 삽입할 review 만들기
    order = {
        'name': name_receive,
        'number': number_receive,
        'address': address_receive,
        'phone_num': phone_receive
    }
    # reviews에 review 저장하기
    db.order.insert_one(order)

    return jsonify({'result': 'success', 'msg': '이 요청은 POST!'})


@app.route('/order', methods=['GET'])
def test_get():
    # 1. 모든 reviews의 문서를 가져온 후 list로 변환합니다.
    order = list(db.order.find({}, {'_id': 0}))
    # 2. 성공 메시지와 함께 리뷰를 보냅니다.
    return jsonify({'result': 'success', 'order' :order})


if __name__ == '__main__':  # 프로그램이 시작하는점. 항상 main이 시작점으로 생각한다.
    app.run('localhost', port=5000, debug=True)  # app.run은 실행

