import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { useCallback } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>HeYY, Dev.</span>
              </p>
              <p>how can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest beautiful places to see on an upcoming road trips.
                </p>
                <img src={assets.compass_icon} alt="compass-icon" />
              </div>
              <div className="card">
                <p>
                  In order to be irreplaceable one must always be different.
                </p>
                <img src={assets.bulb_icon} alt="compass-icon" />
              </div>
              <div className="card">
                <p>
                  Always remember that you are absolutely unique. Just like
                  everyone else.
                </p>
                <img src={assets.message_icon} alt="compass-icon" />
              </div>
              <div className="card">
                <p>
                  The greatness of art is not to find what is common but what is
                  unique.
                </p>
                <img src={assets.code_icon} alt="compass-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-tittle">
              <img src={assets.user_icon} alt="user icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="send icon"
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
