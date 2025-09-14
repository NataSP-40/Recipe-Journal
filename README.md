![Recipe Journal](/public/Img/readme-1.png)

# Recipe Journal
### Description

Recipe Journal is a full-stack web application that allows users to securely manage their personal collection of recipes. Users can sign up, log in, and then create, view, edit, or delete recipes. Each recipe includes details like category, meal type, speciality, ingredients, and instructions. Recipes can also display images to make them look more real and appetizing. App has responsive layout feature.

### User Stories
#### 1. Welcome Page & Authentication
    As a user, I want a welcome page with a friendly greeting and options to sign in/sign up so I know where to start.
    I should be able to create, edit, or delete recipes only if signed in with a username and password.
    I want to be able to sign out early from any page to keep my account secure.
#### 2. View Recipes
    As a user, I want to easily view my collection of recipes to manage and review what is already stored.
#### 3. Create Recipes
    As a user, I want to create a new recipe by filling out a form with:
        * Recipe Name
        * Category
        * Meal Type
        * Speciality (dropdown)
        * Ingredients (free text input)
        * Cooking Instructions
    I should also be able to add an image to the recipe detail page so it feels more real and appetizing.
#### 4. Edit Recipes
    As a user, I want to edit my recipe (change name, ingredients, instructions, or category).
#### 5. Delete Recipes
    As a user, I want to delete a recipe if I no longer want to keep it.
    
### Web Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/recipes` | Show all recipes | Yes |
| GET | `/recipes/new` | New recipe form | Yes |
| POST | `/recipes` | Create recipe | Yes |
| GET | `/recipes/:id` | Show recipe | Yes |
| GET | `/recipes/:id/edit` | Edit recipe form | Yes |
| PUT | `/recipes/:id` | Update recipe | Yes |
| DELETE | `/recipes/:id` | Delete recipe | Yes |

### Attributions
* Express.js – Web framework
* MongoDB & Mongoose – Database
* EJS – Templating engine
* Node.js – Backend runtime
* Additional assets (images)

### Technologies Used
* JavaScript (Node.js, Express.js)
* MongoDB + Mongoose
* EJS templating
* HTML, CSS
* Git & GitHub for version control

### Next Steps (Stretch Goals)
* Add search and filter functionality for recipes.
* Allow users to “favorite” or bookmark recipes.
* Add tags for recipes (e.g., gluten-free, vegan, quick-meals).
* Allow users to upload multiple images per recipe.
* Improve styling.
* Add share functionality so recipes can be shared with friends or made public.
* Add more data entities in additon to the User model so users can save/comment/like on Recipes

### Screenshots
![sign in page](/public/Img/readme-2.png)
![create new recipe](/public/Img/readme-3.png)
![show recipe](/public/Img/readme-4.png)
