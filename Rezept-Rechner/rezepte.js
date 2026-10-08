const recipe = {
  name: "Pfannkuchen",
  servings: 4,
  ingredients: [
    { amount: 300, unit: "g", name: "Mehl" },
    { amount: 3, unit: "Stk", name: "Eier" },
    { amount: 500, unit: "ml", name: "Milch" },
    { amount: 50, unit: "g", name: "Zucker" },
    { amount: 1, unit: "Prise", name: "Salz" },
    { amount: 30, unit: "g", name: "Butter" },
  ],
};

function calculateFactor(baseServings, targetServings) {
  let factor = targetServings / baseServings;
  return factor;
}

function scaleIngredient(ingredient, factor) {
  let newAmount = ingredient.amount * factor;
  let rounded = Math.round(newAmount * 10) / 10;

  return {
    amount: rounded,
    unit: ingredient.unit,
    name: ingredient.name,
  };
}

function scaleRecipe(ingredients, baseServings, targetServings) {
  let factor = calculateFactor(baseServings, targetServings);
  let scaled = [];

  for (let i = 0; i < ingredients.length; i++) {
    let newIngredient = scaleIngredient(ingredients[i], factor);
    scaled.push(newIngredient);
  }

  return scaled;
}

function formatRecipe(recipeName, servings, ingredients) {
  console.log("=== " + recipeName + " ===");
  console.log("Portionen: " + servings);
  console.log("");

  for (let i = 0; i < ingredients.length; i++) {
    let ing = ingredients[i];
    console.log(ing.amount + " " + ing.unit + " " + ing.name);
  }
}

let scaledIngredients = scaleRecipe(recipe.ingredients, recipe.servings, 6);
formatRecipe(recipe.name, 6, scaledIngredients);
