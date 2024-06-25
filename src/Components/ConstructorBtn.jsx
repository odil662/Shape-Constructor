import React, { useState } from "react";

const ConstructorBtn = ({ colors, forms, addFigure }) => {
  const [colorValue, setColorValue] = useState("");
  const [formValue, setFormValue] = useState("");

  const changeColor = (value) => {
    if (colorValue === value) {
      setColorValue("");
    } else {
      setColorValue(value);
    }
  };

  const changeForm = (value) => {
    if (formValue === value) {
      setFormValue("");
    } else {
      setFormValue(value);
    }
  };

  return (
    <>
      <div className="box">
        <div className="colorBox">
          <h3 className="title">Виберите цвет:</h3>
          {colors.map((el, i) => (
            <button
              key={i}
              className={`colorButton ${
                colorValue === el.en ? "selected" : ""
              } ${el.en}`}
              onClick={() => changeColor(el.en)}
            >
              {el.ru}
            </button>
          ))}
        </div>
        <div className="formBox">
          <h3 className="title">Выбурите фигуру:</h3>
          {forms.map((el, i) => (
            <button
              key={i}
              className={`formButton ${formValue === el.en ? "selected" : ""}`}
              onClick={() => changeForm(el.en)}
            >
              {el.ru}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => addFigure(colorValue, formValue)}
        className="buttonAddForm"
      >
        Добавить
      </button>
    </>
  );
};

export default ConstructorBtn;
