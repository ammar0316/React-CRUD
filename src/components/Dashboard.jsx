// import React from 'react'
// import { NavLink , Outlet} from 'react-router-dom'

// const Dashboard = () => {
//   return ( 
//     <>
//       <div className='h-screen w-[200px] bg-gray-800 pl-10 pt-5  shadow-xl/80 rounded-r-2xl' >
//       <h1 className='text-2xl font-bold  text-red-600'> Dashboard</h1>
//       <ul className=' mt-10 text-2xl text-white  font-medium  flex gap-[30px] flex-wrap flex-col'>
//         <li> <NavLink to="./dashboard/forms"> Form</NavLink> </li>
//         <li> <NavLink to="./dashboard/updateForm"> Update Post</NavLink> </li>
//         <li> <NavLink to="./dashboard/deletePost"> Delete Post</NavLink> </li>
        
       
//       </ul>
//     </div>
    
       
//         <Outlet />
       
//     </>
//   )
// }

// export default Dashboard
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='h-screen w-[200px] bg-gray-800 pl-5 pt-5 shadow-xl '>
        <h1 className='text-2xl font-bold text-blue-300'>Dashboard</h1>
        <ul className='mt-10 text-2xl text-green-200 font-medium flex gap-[30px] flex-wrap flex-col'>
          <li><NavLink to="forms" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
                   : "rounded hover:bg-gray-700  text-green-200    font-medium"} aria-current="page">Add Post</NavLink></li>
          <li><NavLink to="updateForm" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
                   : "rounded hover:bg-gray-700  text-green-200    font-medium"}>Update Post</NavLink></li>
          <li><NavLink to="deletePost" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
                   : "rounded hover:bg-gray-700  text-green-200    font-medium"}>Delete Post</NavLink></li>
          <li><NavLink to="/" className="hover:bg-green-200 hover:rounded hover:text-black">Home</NavLink></li>
        </ul>
      </div> 
      <div className='h-screen w-screen bg-green-200'>
      <Outlet />
    
      </div>

      
    </div>
  )
}

export default Dashboard

