import React, { useState } from "react";

function Page1() {

    return (
        <div className="page">

            <div className="body">
                <div className="wrapper">
                    <div className="homeTxt">
                        <div className="text text_big">
                            어서오세요.
                        </div>
                        <div className="text">
                            주문하시려면
                            <br />
                            아래의 버튼을 눌러주세요.
                        </div>
                    </div>
                    <div className="btnWrap">
                        <button className="button packBtn">
                            포장
                        </button>
                        <button className="button shopBtn">
                            매장
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="button callBtn">
                    직원 호출
                </button>
                <div>
                    직원의 도움을 받아보세요!
                </div>
            </div>
        </div>
    )
};

export default Page1;
