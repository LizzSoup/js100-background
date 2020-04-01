// function myFunction() {
//   const body = document.querySelector('body');
//   const randomNumber = Math.floor(Math.random() * 10);
//   const colors = {
//     red: `#E74C3C`,
//     orange: `#E67E22`,
//     yellow: `#F4D03F`,
//     green: `#28B463`,
//     turquoise: `#76D7C4`,
//     blue: `#2980B9`,
//     purple: `#7D3C98`,
//     pink: `#F5B7B1`,
//     grey: `#5D6D7E`,
//     hotPink: `#E91E63`
//   };

//     if (randomNumber < 1) {
//       body.style.background = colors.red;
//     } else if (randomNumber < 2) {
//       body.style.background = colors.orange;
//     } else if (randomNumber < 3) {
//       body.style.background = colors.yellow;
//     } else if (randomNumber < 4) {
//       body.style.background = colors.green;
//     } else if (randomNumber < 5) {
//       body.style.background = colors.turquoise;
//     } else if (randomNumber < 6) {
//       body.style.background = colors.blue;
//     } else if (randomNumber < 7) {
//       body.style.background = colors.purple;
//     } else if (randomNumber < 8) {
//       body.style.background = colors.pink;
//     } else if (randomNumber < 9) {
//       body.style.background = colors.grey;
//     } else {
//       body.style.background = colors.hotPink;
//     }
// };

// ====================================================================================
// The instructions say this could have been done using 12 lines of JS. Should I have used an array here instead? I will try to re-factor this using an array:
// ====================================================================================

const body = document.querySelector('body');
// colors legend [0:red, 1:orange, 2: yellow, 3:green, 4:turquoise, 5:blue, 6:purple, 7:pink, 8:grey, 9:hotPink]
const colors = ['#E74C3C', '#E67E22', '#F4D03F', '#28B463', '#76D7C4', '#2980B9', '#7D3C98', '#F5B7B1', '#5D6D7E', '#E91E63'];

function myFunction() {
  let randomNumber = parseInt(Math.random() * colors.length);
  body.style.background = colors[randomNumber];
}