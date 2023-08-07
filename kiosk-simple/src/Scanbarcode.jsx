import React, { useState,useNavigate } from "react";

function Scanbarcode() {

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
                            바코드를 스캔해주세요.
                        </div>
                        <div className="text text_yellow">
                            결제가 완료될 때까지
                            <br />
                            바코드를 대고 기다려주세요.
                        </div>
                    </div>
                    <div className="paymentImg">
                        <img src="scanbarcode.png" alt="" className="pay_img" />
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

export default Scanbarcode;
