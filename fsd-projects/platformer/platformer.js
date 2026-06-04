$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(700, 900, 20, 290);
    createPlatform(1100, 500, 100, 30);
    createPlatform(900, 700, 100, 10);
    createPlatform(950, 600, 200, 20);
    createPlatform(700, 500, 100, 30);



    // TODO 3 - Create Collectables
    createCollectable("diamond", 100, 170, 0.5, 0.7);
    createCollectable("steve", 1100, 450);
    createCollectable("grace", 1000, 575);
    createCollectable("kennedi", 750, 450);

    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 2000);
    createCannon("right", 200, 2000);
    createCannon("left", 300, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
