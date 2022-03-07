import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./styles.scss";

function App() {
  const [responsiveness, setResponsiveness] = useState("flow");

  useEffect(() => {
    // this could probably be more DRY, but yolo

    $(".ctrl-flow").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("flow");
    });

    $(".ctrl-grid").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("grid");
    });

    $(".ctrl-top").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("top");
    });

    $(".ctrl-left").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("left");
    });

    $(".ctrl-right").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("right");
    });

    $(".ctrl-fixed").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("fixed");
    });

    $(".ctrl-full").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("full");
    });

    $(".ctrl-card").click(function () {
      // update controls
      $("li").removeClass("active");
      $(this).addClass("active");
      // update layout
      $("section").removeClass();
      $("section").addClass("card");
    });
  });

  const handleClick = (responsive: string) => {
    console.log(`RESPONSIVENESS ->`, responsive);
    setResponsiveness(responsive);
  };

  const blocks = [
    { n: 1, b: "one" },
    { n: 2, b: "two" },
    { n: 3, b: "three" },
    { n: 4, b: "four" },
    { n: 5, b: "five" },
    { n: 6, b: "six" },
    { n: 7, b: "seven" },
    { n: 8, b: "eight" },
  ];

  const ctrls = [
    { n: "flow", b: "Flow" },
    { n: "grid active", b: "Grid" },
    { n: "top", b: `↑` },
    { n: "left", b: "←" },
    { n: "right", b: "→" },
    { n: "fixed", b: "Fixed" },
    { n: "full", b: "Full" },
    { n: "card", b: "Card" },
  ];

  return (
    <>
      <div>
        <title>Shift Nudge</title>
        <div className="ctrls">
          <ul>
            {ctrls.map((item, idx) => (
              <li
                onClick={(event) => handleClick(item.n)}
                key={`ctrls-${idx}`}
                className={`ctrl-${item.n}`}
              >
                <a href="#">{item.b}</a>
              </li>
            ))}
          </ul>
        </div>
        <section className="grid">
          {blocks.map((item, idx) => (
            <div key={idx} className={`block ${item.b}`}>
              {item.n}
            </div>
          ))}
        </section>
        <footer>
          <a href="http://poplogics.com">poplogics</a>
        </footer>
      </div>
    </>
  );
}

export default App;
