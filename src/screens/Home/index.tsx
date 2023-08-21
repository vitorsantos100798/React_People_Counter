import React from "react";
import { useState } from "react";
import { Card } from "../../components/Card";
import "./styles.css";

export const Home = () => {
  const [countBoy, setCountBoy] = useState(0);
  const [countGirl, setCountGirl] = useState(0);

  const incrementarBoy = () => {
    setCountBoy(countBoy + 1);
  };
  const decrementarBoy = () => {
    setCountBoy(countBoy - 1);
  };

  const incrementarGirl = () => {
    setCountGirl(countGirl + 1);
  };
  const decrementarGirl = () => {
    setCountGirl(countGirl - 1);
  };
  return (
    <>
      <div className="container">
        <div className="total">
          <p>Total</p>
          <div className="boxTop">{countBoy + countGirl}</div>
        </div>

        <div className="boxBottom">
          <div className="boxLeft">
            <Card />
            <div className="boxContent">
              <button onClick={incrementarBoy} className="btnMore">
                +
              </button>
              <button onClick={decrementarBoy} className="btnLess">
                -
              </button>
            </div>
            <div className="boxTop">{countBoy}</div>
            <p>Meninos</p>
          </div>
          <div className="boxRigth">
            <Card gender="female" />
            <div className="boxContent">
              <button onClick={incrementarGirl} className="btnMore">
                +
              </button>
              <button onClick={decrementarGirl} className="btnLess">
                -
              </button>
            </div>
            <div className="boxTop">{countGirl}</div>
            <p>Meninas</p>
          </div>
        </div>
      </div>
    </>
  );
};
