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
