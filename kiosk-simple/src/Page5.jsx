import React, { useState } from "react";

function Page5() {

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
                            추가 옵션을
                            <br />
                            기본값으로
                            <br />
                            담으시겠습니까?
                        </div>
                    </div>
                    <div className="btnWrap">
                        <button className="button yesBtn">
                            예
                        </button>
                        <button className="button pickBtn">
                            내가 고르기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page5;
