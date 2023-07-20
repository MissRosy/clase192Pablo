AFRAME.registerComponent("choque", {
    schema: {
      elementId: { type: "string", default: "#satelite1" },
    },
  
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function (elementId) {
        console.log(elementId)
      const element = document.querySelector(elementId);
      console.log(element)
      element.addEventListener("collide", (e) => {
        if (elementId.includes("#satelite")) {
          console.log(" collision");
        } 
      });
    },
  });