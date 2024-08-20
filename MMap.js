const roadmap = new Map();
roadmap.set('name', 'JavaScript');
roadmap.set('type', 'dynamic');
roadmap.set('year', 1995);

console.log(roadmap);
console.log(roadmap.get('type')); // JavaScript

// roadmap.delete('year');
console.log(roadmap.has('year')); // false
console.log(roadmap.size); // 2

roadmap.clear();
console.log(roadmap.size);