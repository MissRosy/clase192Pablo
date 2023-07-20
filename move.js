// Registrando componentes
AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 0 },
    },
  
    tick: function () {
        window.addEventListener("keydown", (e) => {   
            if(e.key === "w"){
            this.data.moveY = this.data.moveY + 0.001;
        }
        if(e.key === "s"){
            this.data.moveY = this.data.moveY - 0.001;
        }
          });
var pos = this.el.getAttribute("position");
pos.y = this.data.moveY;
      this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    },
  });
  