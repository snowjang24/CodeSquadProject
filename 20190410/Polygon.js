const { PI } = Math;

const argCheck = (items) => {
   Array.prototype.slice.call(items).forEach(item => {
      if (typeof item === 'undefined' ? true: false){
         throw new Error("인수의 개수가 부족합니다.");
      } else if (typeof item !== 'number' ? true: false){
         throw new Error("인수가 숫자가 아닙니다.");
      }
   })
}

const circle = function(radius) {
   argCheck(arguments);
   return PI * radius * radius;
};
const rectangle = function(height, width) {
   argCheck(arguments);
   return height * width;
};
const trapezoid = function(top, bottom, height) {
   argCheck(arguments);
   return (top + bottom) / 2 * height;
};
const cylinder = function(radius, height) {
   return circle(radius) * 2 + rectangle(2 * PI * radius, height);
};
 
module.exports = {
   circle, rectangle, trapezoid, cylinder
};