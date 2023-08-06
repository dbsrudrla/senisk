import React, { useState } from "react";

function Page10() {

    return (
        <div className="page">
            <div className="header">
                <div className="topWrap">
                    <button className="button">
                        <img src="left_arrow.png" alt="leftArrow" className="btnImg" />
                    </button>
                    <div className="name">
                        Hello!
                    </div>
                    <button className="button">
                        <img src="close.png" alt="x_img" className="x_img" />
                    </button>
                </div>
            </div>

            <div className="body">
                <div className="wrapper">
                    <div className="txtWrap">
                        <div className="text text_big">
                            카드로
                            <br />
                            결제하시겠습니까?
                        </div>
                    </div>
                    <div className="btnWrap">
                        <button className="button yesBtn">
                            예
                        </button>
                        <button className="button noBtn">
                            아니오
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page10;
