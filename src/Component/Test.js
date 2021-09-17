import React from 'react'
import './Test.css'
export default function Test() {
    return (
        <div class="container">
            <div class="dropdown">
                <button class="dropDownButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                    <a data-toggle="collapse" data-target="#demo" class="dropdown-item">123</a>
                    <a data-toggle="collapse" data-target="#demo2" class="dropdown-item">456</a>
                    <a data-toggle="collapse" data-target="#demo3" class="dropdown-item">789</a>
                </div>
            </div>
            <div className="box mt-5">
                <div>
                    <div className="title">
                        <h4 data-toggle="collapse" data-target="#demo" style={{ cursor: 'pointer' }}>Câu 1:Khi truy cập vào 1 trang web (VD:https://geekadventure.vn) trình duyệt sẽ làm gì?</h4>
                    </div>
                    <div id="demo" class="collapse">
                        Khi truy cập vào 1 trang web trình duyệt sẽ tiến hành xử lý code trang web thông qua JS engine . 1 JS engine gồm có 3 bộ con là parser , trasfer , execute.
                    </div>
                </div>
                <div>
                    <div className="title" >
                        <h4 data-toggle="collapse" data-target="#demo2" style={{ cursor: 'pointer' }}>Câu 2: Khác nhau giữa Desktop First & Mobile First trong Web responsive implementation là gì ?</h4>
                    </div>
                    <div id="demo2" class="collapse">
                        Đối với Desktop First sẽ sử dụng max-width , Giao diện thay đổi khi độ rộng màn hình nhỏ hơn hoặc bằng break point
                        <br />
                        Đối với Mobile First sẽ sử dụng min-width , Giao diện thay đổi khi độ rộng màn hình lớn hơn hoặc bằng break point
                    </div>
                </div>
                <div>
                    <div className="title" >
                        <h4 data-toggle="collapse" data-target="#demo3" style={{ cursor: 'pointer' }}>Câu 3: Nếu có 2 CSS selectors cùng ứng với 1 element thì style của selector nào sẽ được ưu tiên hơn</h4>
                    </div>
                    <div id="demo3" class="collapse">
                        Nếu có 2 CSS selectors cùng ứng với 1 element thì style của selector nằm ở dưới sẽ được ưu tiên hơn
                    </div>
                </div>
            </div>
        </div>
    )
}
