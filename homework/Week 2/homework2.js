const name_input = document.querySelector("#r_name");
const number_input = document.querySelector("#r_number");
const address_input = document.querySelector("#r_address");
const phone_input = document.querySelector("#r_phone_num");

$(document).ready(
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



function order() {
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
                    console.log(w_phone_num)
                    
                    $('#order').append(ordered_list);
                    name_input.value ='';
                    number_input.value ='';
                    address_input.value ='';
                    phone_input.value ='';
                    

            
                }
                else {
                    alert('전화번호 형식으로 입력하세요! ex) 010-1234-5678');
                    return
                }
            }
        }
    }
    
}



const title = document.querySelector(".btn-primary");

const clicked_class = "btn clicked";

function handleClick() {

    const current_class = title.className;

    if (current_class !== clicked_class) {
        title.className = clicked_class;
    }
    else {
        title.className = "btn btn-primary";
    }
}
init();

function init() {
    title.addEventListener("mouseenter", handleClick);
    title.addEventListener("mouseleave", handleClick);
}