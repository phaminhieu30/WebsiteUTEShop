import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.ZTqhtTuLcTtwVGFd_6jGVgHaEo?rs=1&pid=ImgDetMain"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/R.2e8a7ddb30e9606b296fb80a7e1882a5?rik=fhVrecDsVHgc3A&pid=ImgRaw&r=0"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.tlMqcrLeH2jS1RkLFZO7UAHaEo?rs=1&pid=ImgDetMain"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.hellotech.com/blog/wp-content/uploads/2021/09/Apple-Event.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.EsPK-AX9GZgD9IxDWc_8fQHaEo?rs=1&pid=ImgDetMain"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;

