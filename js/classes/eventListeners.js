//! player movement {main}
window.addEventListener("keydown", (event) => {
    console.log(event);
    switch (event.key) {
      case "w":
        if (player.velocity.y === 0) player.velocity.y = -20; //!jump height
        break;
  
      case "a":
        // move player to the left
        keys.a.pressed = true;
        break;
  
      case "d":
        // move player to the right
        keys.d.pressed = true;
        break;
    }
  });
  
  //! player movement {to stop the player}
  window.addEventListener("keyup", (event) => {
    console.log(event);
    switch (event.key) {
      case "w":
  
      case "a":
        // move player to the left
        keys.a.pressed = false;
        break;
  
      case "d":
        // move player to the right
        keys.d.pressed = false;
        break;
    }
  });
              