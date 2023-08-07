import React, { useState } from "react";

function Call_staff() {

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
                <div className="callWrap call">
                    <div className="callTxt">
                        <div className="text">
                            직원이 도우러 오는 중이에요.
                        </div>
                        <div className="text">
                            조금만 기다려주세요.
                        </div>
                    </div>
                    <div className="rotateArrow">
                        <img src="arrow-rotate.svg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Call_staff;
