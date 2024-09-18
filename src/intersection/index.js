function intersection(a, b) {
 let newMap = new Map();
 let result = new Set();

 a.forEach(element => {
    newMap.set(element);
    console.log("Set new map", newMap);
 });

 b.forEach(element => {
    if(newMap.has(element)){
        result.add(element);
    }  
 })

 return [...result];


}
module.exports = intersection;
