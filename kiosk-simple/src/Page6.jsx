import React, { useState } from "react";

function Page6() {

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
                    <div className="menu_bar">
                        <div className="bar_option">
                            메뉴 - 추가옵션
                        </div>
                    </div>
                    <div className="text text_small">
                        추가하실 옵션을 선택해주세요.
                    </div>
                    <div className="menuWrap">
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">옵션</div>
                            <div className="price">+0,000원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page6;
