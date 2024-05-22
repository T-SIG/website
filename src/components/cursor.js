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
    if (e.target.closest("#home")) {
        cursor.style.setProperty("--color","white")
    }
    if (e.target.closest("#event-info")){
      cursor.style.setProperty("--color","rgb(11, 247, 62)")
    }
    if (e.target.closest("#details")){
      cursor.style.setProperty("--color","rgb(247, 11, 196)")
    }
    if (e.target.closest("#enroll-box")){
      cursor.style.setProperty("--color","rgb(247, 180, 11)")
    }
    if (e.target.closest("#foot")){
      cursor.style.setProperty("--color","white")
    }
    if (cursor.style.getPropertyValue("--color") === "white") {
      cursor.style.opacity = 0.3
      // cursor.style.setProperty("--opacity",0.2)
    } else {
      cursor.style.opacity = 0.8
    }
    if (e.target.closest(".box")) {
      cursor.style.setProperty("--color",`rgb(${e.target.closest(".box").dataset.color})`)
    }
  };

  window.addEventListener("mousemove", animateCursor);
}



// card bg glow
const handleOnmouse = e =>{
  const {currentTarget:target } = e;
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  target.style.setProperty("--mx",x+'px')
  target.style.setProperty("--my",y+'px')
  let string = new String("color")
  if (string in target.dataset) {
    target.style.setProperty("--data-color",target.dataset.color)
  }
}
const boxes = document.querySelectorAll(".box")
boxes.forEach((box)=>{
  box.onmousemove = e => handleOnmouse(e)
})