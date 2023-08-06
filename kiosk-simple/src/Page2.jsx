import React, { useState } from "react";

function Page2() {

    return (
        <div className="page">
            <div className="header">
                <div className="topWrap">
                    <button className="button arrow">
                        <img src="left_arrow.png" alt="leftArrow" className="btnImg" />
                    </button>
                    <div className="name">
                        Hello!
                    </div>
                    <button className="button xBtn">
                        <img src="close.png" alt="x_img" className="btnImg x_img" />
                    </button>
                </div>
            </div>

            <div className="body">
                {/* menu_bar option 선택하면 색 변경 */}
                <div className="wrapper">
                    <div className="txtWrap">
                        <div className="text">
                            어떤 메뉴를 고르시겠습니까?
                            <br />
                            메뉴를 선택해주세요.
                        </div>
                    </div>
                    <div className="menuWrap">
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">카테고리</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">카테고리</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">카테고리</div>
                        </div>
                        <div className="menu">
                            <img src="pictures.png" alt="" />
                            <div className="menu_name">카테고리</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page2;
