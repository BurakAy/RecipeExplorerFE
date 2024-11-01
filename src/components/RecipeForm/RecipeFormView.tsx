import React from 'react'
import "../../styles/Recipes/CreateRecipeView.css"
import { Recipe } from './RecipeFormController'

type FormProps = {submitForm: (e: React.FormEvent<HTMLFormElement>) => void, selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void, deleteRecipe: (e: React.MouseEvent<HTMLButtonElement>) => void, imageURL: string | undefined, recipeData: Recipe | undefined, editRecipe: boolean, formMessage: string, submitted: boolean}

function RecipeFormView({submitForm, selectImage, deleteRecipe, imageURL, recipeData, editRecipe, formMessage, submitted}: FormProps) {
  return (
    <div className='create-recipe-wrapper'>
      <h2>{editRecipe ? "Edit Recipe" : "Create A New Recipe"}</h2>
      <form className="create-recipe-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
        <label>Recipe name
        <input type="text" id='recipe-name' name='recipeName' required defaultValue={editRecipe ? recipeData?.recipeName : ''} />
        </label>
        
        <label>Category
        <input type="text" id='recipe-category' name='category' required defaultValue={editRecipe ? recipeData?.category : ''}/>
        </label>

        <label>Cuisine
        <input type="text" id='recipe-cuisine' name='cuisine' required defaultValue={editRecipe ? recipeData?.cuisine : ''}/>
        </label>

        <label>Description
        <textarea id='description' name='description' required defaultValue={editRecipe ? recipeData?.description : ''}/>
        </label>

        <label>Instructions
        <textarea id='recipe-instructions' name='instructions' required defaultValue={editRecipe ? recipeData?.instructions : ''}/>
        </label>

        <label>Ingredients
        <input type='text' id='recipe-ingredients' name='ingredients' required defaultValue={editRecipe ? recipeData?.ingredients : ''}/>
        </label>

        <div className="image-upload-wrapper">
          <label id="recipe-image-upload-label">Image
          <input type="file" id='recipe-image-upload' name='recipeThumb' data-testid="recipe-image-upload" onChange={selectImage}/>
          </label>
          {imageURL ? <img id='image-preview' src={imageURL} alt="preview" data-testid="recipe-thumbnail" /> : ''}
        </div>

        <div className='recipe-form-message' data-testid="recipe-form-message">
          <p>{formMessage ? formMessage : "" }</p>
        </div>

        {editRecipe ? 
        <div className='recipe-form-buttons-container'>
          <button className="submit-edit-btn" type='submit' data-testid="submit-button">{submitted ? "Recipe Updated" : "Save Edits"}</button>
          <button className='delete-recipe-btn' type='button' data-testid="delete-button" onClick={deleteRecipe}>Delete Recipe</button> 
        </div> :
        <button className='submit-recipe-btn' type='submit' data-testid="submit-button">{submitted ? "Recipe Submitted" : "Create Recipe"}</button>
        }
      </form>
    </div>
  )
}

export default RecipeFormView