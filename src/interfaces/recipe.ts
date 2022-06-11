interface Recipe {
  slug: string;
  title: string;
  description: string;
  ingredients: string[];
  method: string[];
  ingredientsRows: number;
  methodRows: number;
}

export default Recipe;
