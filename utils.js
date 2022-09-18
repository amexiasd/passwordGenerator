// function random(min, max) {
// 	if (min instanceof Array) {
// 		return min[Math.floor(Math.random() * min.length)];
// 	} else if (max) {
// 		return Math.floor(Math.random() * (max - min + 1) + min);
// 	} else {
// 		return Math.floor(Math.random() * (min + 1));
// 	}
// }

class  utils{

  static randomBetween(min, max){
    return Math.floor(Math.random()* (max - min +1)+ min);
  }
  static randomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }
  static randomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
