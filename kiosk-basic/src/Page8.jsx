import React, { useState } from "react";

function Page8() {

    return (
        <div className="page">
            <div className="header">
                <div className="topWrap">
                    <div className="name">Hello!</div>
                </div>
            </div>

            <div className="body">
                <div className="receipt">
                    <div className="receiptTxt">
                        <div className="text">
                            영수증을 출력하시겠습니까?
                        </div>
                    </div>
                    <div className="receiptImg">
                        <img src="bill.png" alt="" className="pay_img" />
                    </div>
                    <div className="yesnoBtn">
                        <button className="yes">
                            예
                        </button>
                        <button className="no">
                            아니오
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page8;
