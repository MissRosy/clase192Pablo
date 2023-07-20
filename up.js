AFRAME.registerComponent('up', {
init:function() {
    this.mr()
},
mr:function(){
    var wheelRotation = 0;
    var wheelPosition = 0;
window.addEventListener("keydown",function(e){
     //Rotación del volante al presionar las flechas derecha e izquierda
    var wheel = document.querySelector("#nave")
    if (e.key == "d" && wheelRotation>-90) {
        wheelRotation -= 5
        wheelPosition +=3
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation }) 
                wheel.setAttribute("position", { x: wheelPosition, y: 0, z:-10})
                wheel.setAttribute("scale", { x:0.001, y: 0.001, z:0.001})  
    }
    if (e.key == "a" && wheelRotation<90){
        wheelRotation += 5
        wheelPosition -=3
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
                wheel.setAttribute("position", { x: wheelPosition, y: 0, z:-10 })
                wheel.setAttribute("scale", { x:0.001, y: 0.001, z:0.001}) 
    }
});
}
})