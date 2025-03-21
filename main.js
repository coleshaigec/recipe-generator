let requiredTools = ['Large mixing bowl', 'Saucepan', 'Meat tenderizer', 'Large pot', 'Colander'];
let requiredIngredients = ['Butter', 'Milk'];


let optionalTools = ['blowtorch', 'chef`s knife', 'food processor', 'spatula', 'cheesecloth'];
let optionalIngredients = ['lemon', 'carrot', 'tilapia', 'cherry', 'dark chocolate', 'cheddar cheese', 'egg', 'unagi', 'venison'];
let unitsOfMeasurement = ['cup', 'vial', 'bottle', 'pound', 'kilogram', 'pallet', 'jar', 'handful', 'pinch', 'tablespoon', 'truckload', 'planeload'];

let people = ['George', 'Władysław', 'Xinzhi', 'Marcos', 'Anastasia', 'Fatima', 'Abeba'];
let titles = ['Lord', 'Master Chef', 'King', 'General', 'Captain', 'Doctor'];
let adjective = ['Masterful Creation', 'Confection', 'Feast', 'Smorgasbørd', 'Concoction', 'Favorite'];

let recipeName = `${titles[Math.floor(Math.random()*titles.length)]} ${people[Math.floor(Math.random()*people.length)]}'s ${adjective[Math.floor(Math.random()*adjective.length)]}`;

function randomizeArray (arr) {
    let result = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return result;
}

let randomTools = randomizeArray(optionalTools);
let randomIngredients = randomizeArray(optionalIngredients);
let randomUnits =  randomizeArray(unitsOfMeasurement);

let startTasks = ['Preheat oven to 400º', `Take the ${randomIngredients[Math.floor(Math.random()*randomIngredients.length)]} out of the freezer and thaw overnight`, 'Feed your dog. You don’t want him stealing ingredients from the masterpiece you’re about to cook up!', 'Thoroughly disinfect your kitchen', `Place the ${randomIngredients[Math.floor(Math.random()*randomIngredients.length)]} in the microwave for 2 minutes. Set aside and allow to cool`];
let step1 = `${startTasks[Math.floor(Math.random()*startTasks.length)]}`;

let listOfIngredients = requiredIngredients.concat(randomIngredients.slice(0, 7));
let listOfTools = requiredTools.concat(randomTools.slice(0, 2));

let recipe = `1. ${step1}.\n2. Gather the ${randomIngredients[0]}. Sauteé in butter on low heat for 15 minutes.\n3. While the ${randomIngredients[0]} sauteés, combine a ${randomUnits[0]} of ${randomIngredients[1]} and ${randomIngredients[2]} in a large mixing bowl using the ${randomTools[0]}.\n4. Pulverize the ${randomIngredients[3]} using the meat tenderizer. Then, add it to the saucepan alongside the ${randomIngredients[0]}. Add milk, bring to high heat, and stir the mixture thoroughly.\n5. Fill a large pot with water. Bring the water to a boil.\n6. Finely chop 4 ${randomUnits[1]}s of ${randomIngredients[4]} and add it to the pot alongside 3 ${randomUnits[2]}s of ${randomIngredients[5]}s. Put the lid on the pot and allow to boil for 3 hours.\n7. Turn off the heat in the saucepan after 30 minutes. Stir thoroughly and add a ${randomUnits[3]} of ${randomIngredients[6]}.\n8. After 3 hours, drain the pot into the colander. Combine its contents and the sauteéd mixture in the saucepan with the other ingredients in the mixing bowl. Mix them thoroughly using ${randomTools[1]}.\n9. Refrigerate mixture overnight. Plate and serve the following day. Garnish with ${randomIngredients[7]} for best results.`;

console.log('\n');
console.log(recipeName);
console.log('\n');
console.log('Required tools:');
listOfTools.forEach(tool => console.log(tool.charAt(0).toUpperCase() + tool.slice(1, tool.length)));
console.log();
console.log('Required ingredients:');
listOfIngredients.forEach(ingredient => console.log(ingredient.charAt(0).toUpperCase() + ingredient.slice(1, ingredient.length)));
console.log();
console.log('Recipe:');
console.log(recipe);
console.log();
console.log('Enjoy! We are looking forward to cooking with you again soon!');
console.log();