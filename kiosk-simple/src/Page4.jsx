import React, { useState } from "react";


function Page4() {

    return (
        <div className="page">
            <div className="header">
            <div className="topWrap">
                    <button className="button arrow">
                        <img src="left.png" alt="leftArrow" className="btnImg" />
                    </button>
                    <div className="name">
                        <button className="button call">
                            <img src="call-12-regular.svg" alt="call" className="phone" />
                        </button>
                        Hello!
                    </div>
                    <button className="button xBtn">
                        <img src="close.png" alt="x_img" className="btnImg x_img" />
                    </button>
                </div>
            </div>

            <div className="body">
                <div className="menu_bar">
                    <div className="text">
                        장바구니
                    </div>
                </div>

                <div className="selectMenuWrap">
                    <div className="selectMenu">
                        <button className="button xBtn">
                            <img src="close.png" alt="x_img" className="btnImg x_img" />
                        </button>
                        <img src="img/salad.jpg" alt="" />
                        <div className="menu_text">
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                            <br />
                            <div className="option_text">
                                <div>내가 고르기</div>
                                <div>치즈 추가 x1</div>
                                <div>옥수수 추가 x1</div>
                            </div>
                        </div>
                    </div>
                    <div className="selectMenu">
                        <button className="button xBtn">
                            <img src="close.png" alt="x_img" className="btnImg x_img" />
                        </button>
                        <img src="img/pizza2.jpg" alt="" />
                        <div className="menu_text">
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                            <br />
                            <div className="option_text">
                                <div>기본값으로 담기</div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="selectMenu">
                        <button className="button xBtn">
                            <img src="close.png" alt="x_img" className="btnImg x_img" />
                        </button>
                        <img src="img/skewer.jpg" alt="" />
                        <div className="menu_text">
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                            <br />
                            <div className="option_text">
                                <div>기본값으로 담기</div>
                                <div></div>
                                <div></div>
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
                    <button className="orderBtn">
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Page4;
