const React = window.React;
const compsButton = React.createElement(() => {
  const { useState } = window.React;

  const [text, setText] = useState('');


  return React.createElement(
    "div",
    {
      className: "wrap"
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "fr"
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "left"
        },
        /*#__PURE__*/ React.createElement(
          "h1",
          null,
          "WHAT SHOULD I EAT FOR TODAY?"
        ),
        /*#__PURE__*/ React.createElement("h3", null, "I SHOULD EAT:"),
        /*#__PURE__*/ React.createElement("input", {
          value: text,
          onChange: (event) => {
            const value = event.target.value;
            let text = value
              .split("")
              .filter((i) => i >= "A" && i <= "z")
              .join("");

            if (text.length > 4) {
              text = text.substr(0, 4);
            }

            setText(text);
          }
        }),
        /*#__PURE__*/ React.createElement("h3", null, "\u2026\u2026")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "content"
        },
        text.split("").map((i) =>
            /*#__PURE__*/ React.createElement("img", {
            src: `./img/${i.toLowerCase()}.png`
          })
        )
      )
    )
  );

});

ReactDOM.render(compsButton, document.getElementById("example"));
