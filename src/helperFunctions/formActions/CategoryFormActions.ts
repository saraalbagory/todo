
import { useStore } from "../../store/store";

export async function addCategoryAction(_prevState:unknown, formData: FormData){
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

  
        return{
          success:true,
          message:'Category added successfully'
        }
       
}

export async function editCategoryAction(_prevState:unknown, formData: FormData){
      const { findCategory,updateCategory } = useStore.getState();
      const categoryId= formData.get("categoryId") as string;
      const oldCategoryName= formData.get("oldName") as string;
      const categoryName= formData.get("categoryName")?.toString().trim();
      if(!categoryName)
      {
        return{
          success:false,
          message:"Category name is required"
        }
      }
      if(categoryName && categoryName.toUpperCase()!==oldCategoryName &&findCategory(categoryName) )
      {
        return {
          success:false,
          message:'Category with this name already exists'
        }
      }
      updateCategory(categoryId,categoryName);

  
        return{
          success:true,
          message:'Category added successfully'
        }
       
    }
 
