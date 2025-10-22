const fruits = ["Strawberry", "Banana", "Orange", "Apple"];  
  
const foodSchedule = [  
  { name: "Heura", isVegan: true },  
  { name: "Salmon", isVegan: false },  
  { name: "Tofu", isVegan: true },  
  { name: "Burger", isVegan: false },  
  { name: "Rice", isVegan: true },  
  { name: "Pasta", isVegan: true },  
];

for (let i = 0; i < foodSchedule.length; i++) {
    const randomFruit = Math.floor(Math.random()*fruits.length);
    if (foodSchedule[i].isVegan == false){
        foodSchedule[i] = fruits[randomFruit]
        fruits.splice(randomFruit,1)
    }

}
console.log(foodSchedule)