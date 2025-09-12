const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

//WELCOME after sign in to hold my search
// router.get("/", async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.session.user._id);
//     res.render("recipes/welcome.ejs");

//     // // Optional: Apply filters from query params
//     if (req.query.search) {
//       const search = req.query.search.toLowerCase();
//       recipes = recipes.filter(r =>
//         r.name.toLowerCase().includes(search) ||
//         r.ingredients.toLowerCase().includes(search)
//       );
//     }

//     if (req.query.category) {
//       recipes = recipes.filter(r => r.category === req.query.category);
//     }

//     if (req.query.mealType) {
//       recipes = recipes.filter(r => r.mealType === req.query.mealType);
//     }

//     res.render("welcome.ejs", { 
//         user: currentUser, recipes });
//   } catch (error) {
//     console.log(error);
//     res.redirect("/");
//   }
// });


//INDEX
router.get("/", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render("recipes/index.ejs", {
            user: currentUser,
            recipes: currentUser.recipes,
        });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    };
});

//NEW
router.get("/new", async (req, res) => {
    res.render("recipes/new.ejs");
});

//POST
router.post("/", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.recipes.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/recipes`);
    } catch (error) {
        console.log(error);
        res.redirect("/");
    };
});

//SHOW
router.get("/:recipeId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const recipe = currentUser.recipes.id(req.params.recipeId);
        res.render('recipes/show.ejs', {
            recipe: recipe,
            
        });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    };
});

//DELETE
router.delete("/:recipeId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.recipes.id(req.params.recipeId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/recipes`);
    } catch (error) {
        console.log(error);
        res.redirect("/");
    };
});

//EDIT
router.get("/:recipeId/edit", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const recipe = currentUser.recipes.id(req.params.recipeId);
        res.render("recipes/edit.ejs", {
            recipe: recipe,
        });
    } catch (error) {
        console.log(error)
        res.redirect("/");
    };
});

//UPDATE
router.put("/:recipeId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const recipe = currentUser.recipes.id(req.params.recipeId);
        recipe.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/recipes/${req.params.recipeId}`);
    } catch (error) {
        console.log(error);
        res.redirect("/");
    };
});

module.exports = router;