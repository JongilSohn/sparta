$(document).ready(                                           //로딩되면 API를 호출한다.
    function () {
        $.ajax({
            type: "GET",
            url: "https://api.manana.kr/exchange/rate.json",
            data: {},
            success: function (response) {
                $('#ex_rate').empty();
                let ex_rate = response[1]['rate'];
                console.log(ex_rate);
                $('#ex_rate').append(ex_rate);
            }
        })
        // alert('다 로딩됐다!')
        // 여기에 환율 API Ajax 요청을 하면 되겠죠?
    }
);



function order() {                                          //주문정보값을 받아 조건에 맞춰 출력한다.
    let w_name = $("#r_name").val();    
    let w_number = $("#r_number").val();
    let w_address = $("#r_address").val();
    let w_phone_num = $("#r_phone_num").val();

    let ordered_list = '';





    if (w_name == '') {
        alert('이름을 입력하세요!');
        return
    }
    else {
        if (w_number == '0') {
            alert('수량을 선택하세요!');
            return
        }
        else {
            if (w_address == '') {
                alert('주소를 입력하세요!');
                return
            }   
            else {
                let phone_num = w_phone_num.split("-");



                if (w_phone_num == '') {
                    alert('번호를 입력하세요!');
                    return
                }

                else if (phone_num[0] == '010' && phone_num[1].length == 4 && phone_num[2].length == 4) {
                    alert('주문이 완료되었습니다.');
                    ordered_list = `<tr class="append_box">
                    <td>${w_name}</td>
                    <td>${w_number}</td>
                    <td>${w_address}</td>
                    <td>${w_phone_num}</td>
                    </tr>`;
                    
                    $('#order').append(ordered_list);
                    return
                    

            
                }
                else {
                    alert('전화번호 형식으로 입력하세요! ex) 010-1234-5678');
                    return
                }
            }
        }
    }
    
}



const title = document.querySelector(".btn-primary");       // 주문하기 버튼의 Class값을 title에 넣는다.

const clicked_class = "btn clicked";                        //클래스를 만들어 변수 안에 넣는다.

function handleClick() {                                    //handleClick 함수를 호출하면

    const current_class = title.className;                  //현재  Class값에 title의 Class를 넣는다.

    if (current_class !== clicked_class) {                  //현재 Class와 비교하여 다를 경우
        title.className = clicked_class;                    // Class를 변경한다.
    }
    else {
        title.className = "btn btn-primary";                //그렇지 않다면 다시 변경한다.
    }
}
init();                                                     //init 함수를 호출한다.

function init() {
    title.addEventListener("mouseenter", handleClick);      //마우스를 가져다 댔을 때, 
    title.addEventListener("mouseleave", handleClick);      //마우스를 뗐을 때,
}