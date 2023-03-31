import Head from "next/head";
import Image from "next/image";
import React from "react";

import Favicon from "../images/favicon-32x32.png";
import IconPerson from "../images/icon-person.svg";

export default function Home() {
  const Ratings = [5, 10, 15, 25, 50];

  const [rating, setRating] = React.useState(0);
  const [customRating, setCustomRating] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [people, setPeople] = React.useState(0);
  const [resetState, setResetState] = React.useState(false);
  const [currentBill, setCurrentBill] = React.useState(0);

  function reset() {
    setRating(0);
    setCustomRating(0);
    setPeople(0);
    setResetState(false);
    setCurrentBill(0);
  }

  function onMouseButton1Click(givenRating) {
    if (rating == givenRating) {
      setRating(0);
      return;
    }
    setRating(givenRating);
    setResetState(true);

  function onMouseButton1Click(givenRating) {
    setRating(givenRating);
  }

  function inputChanged() {
    setRating(0);
    setResetState(true);
  }

  function onBillInputChange(event) {
    let EmptyString = !event.target.value || event.target.value.length === 0;
    setCurrentBill(event.target.value);
    setResetState(true);
  }

  function enterPressed(event) {
    if (event.key == "Enter") {
      setCustom(event.target.value);
      setResetState(true);
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <title>Tip Calculator App</title>
        <link rel="icon" href={Favicon} />
      </Head>

      <h1>
        SPLI
        <br />
        TTER
      </h1>

      <div className="main-container">
        <div className="tip-container">
          <div className="container-1">
            <p>Bill</p>
            <div className="user-input">
              <p>$</p>
              <input
                type="number"
                id="bill-input"
                className="bill-input"
                onInput={onBillInputChange}
              ></input>
            </div>
          </div>

          <div className="container-2">
            <p>Select Tip %</p>
            <div className="selector-container">
              {Ratings.map((index) => (
                <button
                  className={`rating-button ${
                    rating == index ? "rating-active" : ""
                  }`}
                  onClick={() => onMouseButton1Click(index)}
                  x
                  key={index}
                >{`${index}%`}</button>
              ))}
                <input
                  type="text"
                  className="tip-input"
                  placeholder="Custom"
                  onClick={inputChanged}
                  onChange={inputChanged}
                  onKeyDown={enterPressed}
                ></input>
            </div>
          </div>

          <div className="container-1 no-margin-bottom">
            <p>Number of People</p>
            <div className="user-input">
              <Image src={IconPerson} alt="Person" />
              <input
                type="number"
                id="bill-input"
                className="bill-input"
              ></input>
            </div>
          </div>
        </div>

        <div className="price-container">
          <ul>
            <li>
              <div className="price-container-1 float-left">
                <p className="text-1">
                  Tip Ammount <br /> <b className="text-2">/ Person</b>
                </p>
              </div>

              <p className="result float-right">$0.00</p>
            </li>
            <li>
              <div className="price-container-1 float-left">
                <p className="text-1">
                  Total <br /> <b className="text-2">/ Person</b>
                </p>
              </div>

              <p className="result float-right">$0.00</p>
            </li>
          </ul>

          <button
            className={`reset-button ${
              resetState == false ? "not-active-reset" : ""
            }`}
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
