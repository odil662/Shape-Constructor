import React, { useState } from "react";
import "./Constructor.css";
import ConstructorBtn from "./ConstructorBtn";

const figuresSettings = {
  colors: [
    { en: "green", ru: "Зелёный" },
    { en: "red", ru: "Красный" },
    { en: "orange", ru: "Оранжевый" },
    { en: "blue", ru: "Синий" },
  ],
  forms: [
    { en: "square", ru: "Квадрат" },
    { en: "circle", ru: "Круг" },
  ],
};

const Constructor = () => {
  const [newForms, setForms] = useState([]);

  const addFigure = (color, form) => {
    setForms([...newForms, { color, form }]);
  };

  return (
    <div className="page">
      <div className="constructor">
        <ConstructorBtn
          colors={figuresSettings.colors}
          forms={figuresSettings.forms}
          addFigure={addFigure}
        />
      </div>
      <div className="display">
        {newForms.map((el, i) => (
          <div key={i} className={`active_${el.color} ${el.form}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Constructor;
