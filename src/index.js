import anime from "animejs";

const timeline = anime.timeline();

timeline.add({
  targets: document.getElementsByClassName("big-covers"),
  scaleY: [0, 1],
  easing: "easeInOutExpo",
  duration: (_, i, l) => 300 - (i / (l - 1)) * 100,
  delay: (_, i, l) => (i / (l - 1)) * 400,
});

timeline.add(
  {
    targets: document.getElementsByClassName("text-box"),
    translateY: ["101%", 0],
    easing: "easeOutQuad",
    duration: 200,
  },
  "-=50",
);
timeline.add(
  {
    targets: document.getElementsByClassName("text"),
    translateY: ["100%", 0],
    easing: "easeOutQuad",
    duration: 200,
  },
  "-=100",
);

timeline.add(
  {
    targets: document.getElementsByClassName("toaster")[0].children,
    translateX: ["50%", 0],
    scaleX: [0, 1],
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: (_, i, l) => 400 - (i / (l - 1)) * 100,
    delay: (_, i, l) => (i / (l - 1)) * 250,
  },
  "-=500",
);

timeline.add(
  {
    targets: document.getElementsByClassName("tops")[0].children,
    translateY: ["50%", 0],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: (_, i, l) => 750,
    delay: (_, i, l) => (i / (l - 1)) * 250,
  },
  500,
);

[...document.getElementsByClassName("round")].map((e, j, { length }) => {
  const base = (j / (length - 1)) * 200 + 300;
  timeline
    .add(
      {
        targets: e.children,
        scale: [0, 1],
        easing: "easeInCubic",
        duration: 150,
        delay: (_, i, l) => (i / (l - 1)) * 100,
      },
      base,
    )
    .add(
      {
        targets: e.children,
        borderWidth: 0,
        opacity: (_, i, l) => (i !== l - 1 ? 0 : 1),
        easing: "easeOutCubic",
        duration: 150,
        delay: (_, i, l) => (i / (l - 1)) * 100,
      },
      base + 200,
    );
});

[...document.getElementsByClassName("bottoms")].map((e, j, { length }) => {
  timeline.add(
    {
      targets: e.children,
      scaleX: [0, 1],
      easing: "easeOutQuad",
      duration: (_, i, l) => 200 - (i / (l - 1)) * 75,
      delay: (_, i, l) => (i / (l - 1)) * 250,
    },
    (j / (length - 1)) * 150 + 250,
  );
});

timeline.pause();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    timeline.play();
  }, 500);
});
