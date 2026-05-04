import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [num, setNum] = useState(1);

  const btn = async () => {
    const images = await axios.get(
      `https://picsum.photos/v2/list?page=${num}&limit=60`,
    );
    setUserData(images.data);
  };
  useEffect(() => {
    btn();
  }, [num]);

  const increase = () => {
    if (num >= 0) {
      setNum(num + 1);
    }
    setUserData([]);
  };
  const dicrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
    setUserData([]);
  };

  let load = "Loading...";

  if (userData.length > 10) {
    load = (
      <div className="mn">
        {userData.map(function (e, idx) {
          return (
            <a key={idx} href={e.url}>
              <div key={idx} className="scd_div">
                <img src={e.download_url} className="img" />
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="father">
      <div className="main">
        <h1 className="text-amber-50 font-bold ">{load}</h1>
      </div>
      <div className="flex w-full justify-center py-3.5 gap-3.5">
        <button
          onClick={dicrease}
          style={{
            opacity: num === 1 ? 0.5 : 1,
          }}
          className="fxdBtn flex  justify-center items-center px-8 text-7xl bg-amber-700 rounded-2xl text-amber-50 font-bold"
        >
          ←
        </button>
        <h1 className="text-amber-50 text-4xl mt-3 font-semiboldbold">
          Page {num}
        </h1>
        <button
          onClick={increase}
          className="flex  active:scale-95 justify-center items-center px-8 text-7xl text-center bg-amber-700 rounded-2xl text-amber-50 font-bold"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default App;
