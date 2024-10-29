const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

// c.fillStyle = "white";
// c.fillRect(0, 0, canvas.width, canvas.height);

// player color
// c.fillStyle='red';
// c.fillRect(100,100,100,100)


const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "/images/one.jpg",
});
const player = new Player();

const keys = {
  w: {
    pressed: false,
  },

  a: {
    pressed: false,
  },

  d: {
    pressed: false,
  },
};

//  animation loop
// let y = 100;
// const height = 100;
// let bottom = y + 100;

function animate() {
  window.requestAnimationFrame(animate);

  // if(keys.d.pressed){
  //   player.velocity.x=1
  // }else if(keys.a.pressed{
  //   player.velocity.x=-1
  // })
  //!what to do when pressing a key
  background.draw();
  player.velocity.x = 0;

  if (keys.d.pressed) player.velocity.x = 5; //* set speed
  else if (keys.a.pressed) player.velocity.x = -5;

  player.draw();
  player.update();
}
animate();
