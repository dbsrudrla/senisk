import React, { useState } from "react";
import './page2.css';

function Page2() {

    return (
        <div className="page">
            <div className="header">
                <div className="topWrap">
                    <button className="button arrow">
                        <img src="left.png" alt="leftArrow" className="btnImg" />
                    </button>
                    <div className="name">Hello!</div>
                    <button className="button xBtn">
                        <img src="close.png" alt="x_img" className="btnImg x_img" />
                    </button>
                </div>
            </div>

            <div className="body">
                <div className="menu_bar">
                    <button className="button bar_option">
                        추천메뉴
                    </button>
                    <button className="button bar_option">
                        전체
                    </button>
                    <button className="button bar_option">
                        사이드메뉴
                    </button>
                    <button className="button bar_option">
                        세트메뉴
                    </button>
                </div>

                {/* menu_bar option 선택하면 색 변경 */}
                <div className="menuWrap">
                    <div className="menu_scroll">
                        <div className="menu">
                            <img src="img/salad.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/pizza1.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/pizza2.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                    </div>
                    <div className="menu_scroll">
                        <div className="menu">
                            <img src="img/skewer.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/sushi.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/taco.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                    </div>
                    <div className="menu_scroll">
                        <div className="menu">
                            <img src="img/hamburger.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/steak.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="menu">
                            <img src="img/pizza2.jpg" alt="" />
                            <div className="menu_name">추천메뉴</div>
                            <div className="price">가격</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <div className="bottomWrap">
                    <button className="button arrow">
                        <img src="left.png" alt="leftArrow" className="btnImg" />
                    </button>
                    <button className="cartBtn">
                        장바구니
                    </button>
                    <button className="orderBtn">
                        주문하기
                    </button>
                    <button className="button arrow">
                        <img src="right.png" alt="rightArrow" className="btnImg" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Page2;