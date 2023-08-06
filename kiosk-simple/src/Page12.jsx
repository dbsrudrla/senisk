import React, { useState,useNavigate } from "react";

function Page12() {

    return (
        <div className="page">
            <div className="header">
                <div className="topWrap">
                    <div className="name">
                        Hello!
                    </div>
                </div>
            </div>

            <div className="body">
                <div className="payment">
                    <div className="paymentTxt">
                        <div className="text">
                            카드를 투입구에 넣어주세요.
                        </div>
                        <div className="text text_yellow">
                            결제가 완료될 때까지
                            <br />
                            카드를 뽑지 말고 기다려주세요.
                        </div>
                    </div>
                    <div className="paymentImg">
                        <img src="free-icon-credit-card-3282071.png" alt="" className="pay_img" />
                    </div>
                    <div className="cancel">
                        <button className="button cancelBtn">
                            결제취소
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page12;
