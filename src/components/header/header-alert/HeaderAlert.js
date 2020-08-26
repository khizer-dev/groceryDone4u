import React, { useState } from "react";

export const HeaderAlert = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div style={{zIndex: '999' }}>
      {isShow ? (
        <div>
          <div
            className=" alert-success fade show xs-promotion promotion-v2"
            role="alert"
          >
            <div className="container">
              <button
                type="button"
                className="close"
                onClick={() => setIsShow(false)}
              >
                <span aria-hidden="true" style={{zIndex: '999' }}>X</span>
              </button>
              <p>
                Welcome to Marketpress ! Wrap new offers / gift every single day
                on Weekends – New Coupon code: Happy2020
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderAlert;
