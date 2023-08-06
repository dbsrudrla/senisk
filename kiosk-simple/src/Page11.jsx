import React, { useState } from "react";

function Page11() {

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
                        <div className="text">
                            결제하실 방법을 선택해주세요.
                        </div>
                    </div>
                    <div className="btnWrap">
                        <button className="button payBtn payBtn30">
                            결제방법
                        </button>
                        <button className="button payBtn payBtn50">
                            결제방법
                        </button>
                        <button className="button payBtn payBtn70">
                            결제방법
                        </button>
                        <button className="button payBtn">
                            결제방법
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page11;
