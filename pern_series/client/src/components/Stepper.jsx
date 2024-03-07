import React, { useEffect, useRef, useState } from "react";
import { STEPPER_DATA } from "./StepperData";

function Stepper() {
  const [current, setCurrent] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(() => {
    console.log(stepRef.current[0].offsetWidth);
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth/2,
      marginRight: stepRef.current[STEPPER_DATA.length-1].offsetWidth/2,
    });
  }, [stepRef, STEPPER_DATA.length]);

  const handleNext = () => {
    setCurrent((prev) => {
      if (prev == STEPPER_DATA.length) {
        setIsComplete(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const calculateProgressBar = () => {
    return ((current - 1) / (STEPPER_DATA.length - 1)) * 100;
  };

  const ActiveComponent = STEPPER_DATA[current - 1]?.component;

  return (
    <>
      <div className="stepper">
        {STEPPER_DATA.map((item, index) => {
          const { name, component } = item;
          return (
            <div
              key={index}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                current > index + 1 || isComplete ? "complete" : ""
              } ${current === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {current > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft:margins.marginLeft
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBar()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      {!isComplete && (
        <button onClick={handleNext}>
          {current == STEPPER_DATA.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default Stepper;
