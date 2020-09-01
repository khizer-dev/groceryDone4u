import React, { useState } from "react";

export const HeaderAlert = () => {

  const [isShow, setIsShow] = useState(true);
  setTimeout(()=> { setIsShow(false)}  , 10000)
  return (
    <div style={{zIndex: '999' }}>
      {isShow ? (
        <div>
          <div
            className=" alert-success fade show xs-promotion promotion-v2"
            role="alert"
          >
            <div className="container">
              
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
