import React, { useState } from "react";

function Page9() {

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
                <div className="wrapper page9">
                    <div className="menu_bar">
                        <div className="bar_option">
                            장바구니
                        </div>
                    </div>
                    <div className="selectmenuWrap">
                        <div className="selectMenu">
                            <button className="button xBtn">
                                <img src="close.png" alt="x_img" className="btnImg x_img" />
                            </button>
                            <img src="pictures.png" alt="" />
                            <div className="menu_text">
                                <div className="text_small">메뉴</div>
                                <div className="">가격</div>
                                <div className="option">
                                    <div>내가 고르기</div>
                                    <div>옵션 x 1</div>
                                    <div>옵션 x 1</div>
                                </div>
                            </div>
                        </div>
                        <div className="selectMenu">
                            <button className="button xBtn">
                                <img src="close.png" alt="x_img" className="btnImg x_img" />
                            </button>
                            <img src="pictures.png" alt="" />
                            <div className="menu_text">
                                <div className="text_small">메뉴</div>
                                <div className="">가격</div>
                                <div className="option">
                                    <div>내가 고르기</div>
                                    <div>옵션 x 1</div>
                                    <div>옵션 x 1</div>
                                </div>
                            </div>
                        </div>
                        <div className="selectMenu">
                            <button className="button xBtn">
                                <img src="close.png" alt="x_img" className="btnImg x_img" />
                            </button>
                            <img src="pictures.png" alt="" />
                            <div className="menu_text">
                                <div className="text_small">메뉴</div>
                                <div className="">가격</div>
                                <div className="option">
                                    <div>내가 고르기</div>
                                    <div>옵션 x 1</div>
                                    <div>옵션 x 1</div>
                                </div>
                            </div>
                        </div>
                        <div className="selectMenu">
                            <button className="button xBtn">
                                <img src="close.png" alt="x_img" className="btnImg x_img" />
                            </button>
                            <img src="pictures.png" alt="" />
                            <div className="menu_text">
                                <div className="text_small">메뉴</div>
                                <div className="">가격</div>
                                <div className="option">
                                    <div>내가 고르기</div>
                                    <div>옵션 x 1</div>
                                    <div>옵션 x 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <div className="bottomWrap">
                    <div className="totalPrice">
                        총 금액 : 가격
                    </div>
                    <button className="button orderBtn">
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Page9;
