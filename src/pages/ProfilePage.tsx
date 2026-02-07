import { Briefcase } from 'lucide-react'
import profileImage from "../assets/profileImage.jpeg"


function ProfilePage() {
 

  const user = {
    name: "Sara Nabil Ali ",
    role: "Software Engineer",
    bio: "I’m a software engineer with a strong interest in frontend development and a mindset that values clarity and simplicity. I really enjoy learning new things, especially when I can break complex ideas down into structured, easy-to-follow steps. This approach shapes how I tackle new problems and how I write code — I care a lot about keeping it clean, readable, and maintainable.",
    image:profileImage,
  }

  return (
    <div className="flex flex-col md:flex-row  gap-5   max-w-4xl py-20  mx-auto ">   
        
        <div className="  flex flex-col flex-2 items-center  gap-5 ">
          <img 
            src={user.image} 
            alt="Profile" 
            className=" w-60 h-60
                        sm:w-80 sm:h-80
                        md:w-94 md:h-94
                        
                        rounded-full
                        object-cover border-4 border-white dark:border-gray-800 shadow-lg mb-3 bg-gray-100"
          />
          <h1 className="text-3xl font-bold dark:text-white">{user.name}</h1>
          <p className="text-blue-600 font-medium flex items-center gap-1">
            <Briefcase size={24} /> {user.role}
          </p>
          
        
      </div>



    
      <div className=" flex-1   bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {user.bio}
        </p>
      </div>
      </div>)

     
}

export default ProfilePage;


