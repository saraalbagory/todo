import { useStore } from "../../store/store";

export async function addCategoryAction(prevState:unknown, formData: FormData){
      const { findCategory,addCategory } = useStore.getState();
      const categoryName= formData.get("categoryName")?.toString().trim();
      if(!categoryName)
      {
        return{
          success:false,
          message:"Category name is required"
        }
      }
      if(categoryName && findCategory(categoryName))
      {
        return {
          success:false,
          message:'Category with this name already exists'
        }
      }
      addCategory({
        id:crypto.randomUUID(),
        name:categoryName.toUpperCase()});

        //TODO:reset the form after successful submission

        return{
          success:true,
          message:'Category added successfully'
        }
       
    }

    
    
