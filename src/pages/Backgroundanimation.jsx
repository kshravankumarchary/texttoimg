import React from "react";

const particles = [
  {
    color: "#583C87",
    top: "44%",
    left: "81%",
    duration: 53,
    delay: -7,
    origin: "-4vw 11vh",
    shadow: "40vmin 0 5.7vmin",
  },
  {
    color: "#583C87",
    top: "19%",
    left: "85%",
    duration: 52,
    delay: -20,
    origin: "4vw 20vh",
    shadow: "40vmin 0 5.1vmin",
  },
  {
    color: "#E45A84",
    top: "81%",
    left: "9%",
    duration: 36,
    delay: -35,
    origin: "23vw -16vh",
    shadow: "-40vmin 0 5.3vmin",
  },
  {
    color: "#FFACAC",
    top: "92%",
    left: "54%",
    duration: 17,
    delay: -10,
    origin: "4vw -16vh",
    shadow: "-40vmin 0 5.8vmin",
  },
  {
    color: "#E45A84",
    top: "34%",
    left: "44%",
    duration: 6,
    delay: -36,
    origin: "10vw -6vh",
    shadow: "40vmin 0 5.8vmin",
  },
  {
    color: "#583C87",
    top: "36%",
    left: "99%",
    duration: 49,
    delay: -25,
    origin: "-22vw -3vh",
    shadow: "-40vmin 0 6vmin",
  },
  {
    color: "#583C87",
    top: "55%",
    left: "74%",
    duration: 38,
    delay: -14,
    origin: "-8vw -17vh",
    shadow: "40vmin 0 5.9vmin",
  },
  {
    color: "#E45A84",
    top: "24%",
    left: "72%",
    duration: 45,
    delay: -18,
    origin: "-21vw -12vh",
    shadow: "40vmin 0 5.5vmin",
  },
];

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 bg-[#3E1E68] overflow-hidden -z-10">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-move"
          style={{
            width: "20vmin",
            height: "20vmin",
            top: p.top,
            left: p.left,
            color: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transformOrigin: p.origin,
            boxShadow: `${p.shadow} currentColor`,
            backfaceVisibility: "hidden",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
