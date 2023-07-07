const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // ctx = CONTEXTE

function drawCirlcle() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 50;

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.closePath();

  ctx.fill();
}

drawCirlcle();

// const btns = document.querySelectorAll("button");

// function draw() {
//   const x = (canvas.width - 100) / 2;
//   const y = (canvas.height - 100) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canevas
//   ctx.fillRect(x, y, 100, 100);
// }

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     switch (btn.innerHTML) {
//       case "Green":
//         ctx.fillStyle = "green";
//         draw();
//         break;
//       case "Red":
//         ctx.fillStyle = "red";
//         draw();
//         break;
//       case "Black":
//         ctx.fillStyle = "black";
//         draw();
//         break;

//       default:
//         break;
//     }
//   });
// });

// draw(); // Dessine le rectangle initial avec la couleur de remplissage par défaut (rouge)
