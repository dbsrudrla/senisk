import React, { useState } from "react";

function Page3() {

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
                            카테고리
                        </div>
                    </div>
                    <div className="text text_small">
                        드시고 싶은 메뉴를 선택해주세요.
                    </div>
                    <div className="menuWrap">
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">메뉴</div>
                            <div className="price">가격</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page3;
