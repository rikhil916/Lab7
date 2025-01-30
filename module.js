//find the area and perimeter of a circle,square and rectangle using nodejs local modules

const {ca,cp}=require("./circle");
const {sa,sp}=require("./square");
const {ra,rp}=require("./rectangle");

console.log(`Circle: radius=5 : area: ${ca(5)} : perimeter:  ${cp(5)}`);
console.log(`Square : side=5 : area : ${sa(5)} :perimeter : ${sp(5)}`);
console.log(`rectangle : l=2, b=3 : area : ${ra(2,3)} : perimeter: ${rp(2,3)}`);

