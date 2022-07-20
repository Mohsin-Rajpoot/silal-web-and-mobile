import React from "react";

function Countdowntimer({ minutes, seconds, completed }) {
  return (
    <div>
      {completed ? (
        "Resend code"
      ) : (
        <span>
          Resend code {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </div>
  );
}

export default Countdowntimer;
