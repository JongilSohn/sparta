from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print("post-print", title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})

@app.route('/test', methods=['GET'])
def test_get():
   title_receive = request.args.get('title_give')
   print("get-print", title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 GET!'})


if __name__ == '__main__':                  #프로그램이 시작하는점. 항상 main이 시작점으로 생각한다.
   app.run('0.0.0.0',port=5000,debug=True)  # app.run은 실행


