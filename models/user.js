const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  category: { type: String, enum: ["Appetizer", "Soup", "Salad", "Entree", "Dessert"]},
  mealType: { type: String, enum: ["Breakfast", "Lunch", "Dinner"]},
  ingredients: { type: String, required: true},
  instructions: { type: String},
  image: { type: String},
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [recipeSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
