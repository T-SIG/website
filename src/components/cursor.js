export let cursor;
export function cursorAnimation() {
  // cursor animation
    cursor = document.getElementById("event-cursor");

  const animateCursor = (e) => {
    // console.log(e.target);
    const x = e.clientX - cursor.offsetWidth / 2,
      y = e.clientY - cursor.offsetHeight / 2;

    const moveKeyFrames = {
      transform: `translate(${x}px, ${y}px)`,
    };
    cursor.animate(moveKeyFrames, {
      duration: 800,
      fill: "forwards",
    });
  };

  window.addEventListener("mousemove", animateCursor);
}
