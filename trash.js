AFRAME.registerComponent("trash", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `satelite${i}`;
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
        var position = { x: posX, y: posY, z: posZ };
        this.flyingBirds(id,position);
    }
    },
    flyingBirds:(id,position) => {
      var all=document.querySelector("#terrain")
      var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    ringEl.setAttribute("material","color","#ff9100");
    ringEl.setAttribute("position",position);
    ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   

    // Establecer el atributo del cuerpo estático del sistema físico
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2
    });

      ringEl.setAttribute("choque",{elementId:`#${id}`})
      all.appendChild(ringEl)
      
    },
  });