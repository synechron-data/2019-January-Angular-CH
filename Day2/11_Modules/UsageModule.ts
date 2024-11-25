import { IPoint, Point } from './PointModule';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

document.getElementById("hOne").innerHTML =
    point.getDistance().toString();
    
// $(document).ready(function () {
//     $("#hOne").html(point.getDistance());
// })
