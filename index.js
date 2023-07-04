const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // ctx = CONTEXTE
const btns = document.querySelectorAll("button");

function draw() {
  const x = (canvas.width - 100) / 2;
  const y = (canvas.height - 100) / 2;
//   ctx.fillStyle = "red";
  ctx.fillRect(x, y, 100, 100);
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.innerHTML) {
      case "Green":
        ctx.fillStyle = "green";
        draw();
        break;
      case "Red":
        ctx.fillStyle = "red";
        draw();
        break;
      case "Black":
        ctx.fillStyle = "black";
        draw();
        break;

      default:
        break;
    }
  });
});

// draw();
