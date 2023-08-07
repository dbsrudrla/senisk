import React, { useState } from "react";

function Page7() {

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
                    <div className="optionWrap">
                        <div className="txtWrap">
                        <div className="text">
                            옵션의 수량을 선택해주세요.
                        </div>
                        </div>
                        <div className="option">
                            <img src="pictures.png" alt="" />
                            <div className="option_text">
                                <div className="menu_name">옵션</div>
                                <div className="quantity">
                                    <button className="button minusBtn">-</button>
                                    수량 : 1
                                    <button className="button plusBtn">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="okWrap">
                    <button className="button okBtn">
                        확인
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Page7;
