const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

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

router.get("/new", async (req, res) => {
    res.render("recipes/new.ejs");
});

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