 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                          To-DO list
import React, { useState } from 'react'

export default function App() {

const [inp_val,setinp_value]=useState("")
const[edit_data,set_edit]=useState()
const [data,set_data]=useState([])
const [swap,setswap]=useState(0)

function handleclick(e){
   setinp_value(e.target.value)
}

function handleSave(){
set_data([...data,inp_val])
setinp_value("")
}
const edit=(i,ele)=>{
  setswap(1)
  set_edit(ele)
  setinp_value(i)
}
const update=()=>{
  if(inp_val==""){
    alert("please select one div")
  }
    else{
      setswap(0)
      set_data(data[edit_data]=inp_val)
     set_data([...data])
    }
  }
const shiftUp=(ele)=>{
if(ele===0){
  alert("you are at 1st box")
}
else{
  var tem=data[ele]
  data[ele]=data[ele-1]
  data[ele-1]=tem
  set_data([...data])
  console.log(ele,"else up");
}
}
const shiftDown=(ele)=>{
   if(ele==data.length-1){
    alert("you are at last box")
   }
   else{
    var tem=data[ele]
    data[ele]=data[ele+1]
    data[ele+1]=tem
    set_data([...data])
   }
}
function del(ele){
  // console.log(i,data,"test");
  const newdata=data
  newdata.splice(ele,1)
  set_data([...newdata])
}
console.log(inp_val,"jkcnd");
console.log(data,"data");
  return (
     <>
     <div className='bg-pink-200 text-purple-500 w-full h-auto md:pl-[90px] pl-[60px] flex flex-col items-center' >
      <h1 className='text-5xl mt-[100px] mb-[40px]'>To-Do List</h1>
      <div className='flex items-center w-[90%] justify-center'>
      <input className='pl-[10px] w-[60%]  h-[50px] border-[2px] border-purple-500 rounded-[50px]
      
      ' type="text" value={inp_val} onChange={handleclick}/>
   {swap===0 &&   <button onClick={handleSave} className="
   bg-purple-500 hover:bg-purple-700 text-white font-bold rounded w-[80px] ml-[40px] h-[50px] py-1 px-2 ">Add</button>
}
{swap===1 &&    <button onClick={()=>{update()}} className="bg-purple-500 hover:bg-purple-700 text-white font-bold w-[80px] ml-[40px] h-[50px] py-1 px-2  rounded " >Update</button>
}
      </div>
    <div>
     <div className='flex my-[50px] flex-wrap'>
     {data.map((i,ele)=>{
          return(
            <div className='border-[3px] border-purple-500 h-[150px] md:w-[270px] w-[80%] rounded-[10px] m-[10px] flex flex-col'>
                 <h1 className='text-3xl self-center mb-[40px]'>{i}</h1>
                 <div className='flex justify-evenly'>
                 <button  className="bg-purple-500 w-[50px] hover:bg-purple-700 text-white font-bold py-1 px-2 rounded  " onClick={()=>{edit(i,ele)}}>Edit</button>
                 <button  className="bg-purple-500 w-[60px] hover:bg-purple-700 text-white font-bold py-1 px-2 rounded  " onClick={()=>{del(ele)}}>Delete</button>
                 <button  className="bg-purple-500 w-[50px] hover:bg-purple-700 text-white font-bold py-1 px-2 rounded  " onClick={()=>{shiftUp(ele)}}>Up</button>
                 <button  className="bg-purple-500 w-[60px] hover:bg-purple-700 text-white font-bold py-1 px-2 rounded  " onClick={()=>{shiftDown(ele)}}>Down</button>
               
                 </div>
            </div>
            
           
          )

        })}
     </div>
       
       </div>
      </div>
     </>
  )
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ----------------------slider 01-----------------
// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import Img1 from "./pic/chef1.jpg"
// import Img2 from "./pic/chef2.jpg"
// import Img3 from "./pic/chef3.jpg"
// import Img4 from "./pic/chef4.jpg"
// import Img5 from "./pic/chef5.jpg"
// import Img6 from "./pic/chef6.jpg"
// import Img7 from "./pic/chef7.jpg"
// import Img8 from "./pic/chef8.jpg"
// import Img9 from "./pic/couple1.jpg"




// import "./index";
// import { Pagination } from "swiper";
// export default function app() {
//   return (
//      <>
//      <Swiper
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide> 
//           <img className='h-[200px] w-[200px]' src={Img1} alt=""/>
//         </SwiperSlide>
//         <SwiperSlide> <img src={Img2} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img3} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img4} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img5} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img6} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img7} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img8} alt=""/></SwiperSlide>
//         <SwiperSlide> <img src={Img9} alt=""/></SwiperSlide>
//       </Swiper>
//      </>
//   )
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ----------------------slider 02-----------------
// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import "./index";
// import Img1 from "./pic/chef1.jpg"
// import Img2 from "./pic/chef2.jpg"
// import Img3 from "./pic/chef3.jpg"
// import Img4 from "./pic/chef4.jpg"
// import Img5 from "./pic/chef5.jpg"
// import Img6 from "./pic/chef6.jpg"
// import Img7 from "./pic/chef7.jpg"
// import Img8 from "./pic/chef8.jpg"
// import Img9 from "./pic/couple1.jpg"
// export default function app() {
//   return (
//      <>
//      <Swiper
//         className="mySwiper swiper-h"
//         spaceBetween={50}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//       >
//         <SwiperSlide> 
//         <img src={Img1} alt=""/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Swiper
//             className="mySwiper2 swiper-v"
//             direction={"vertical"}
//             spaceBetween={50}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination]}
//           >
//             <SwiperSlide><img src={Img2} alt=""/></SwiperSlide>
//             <SwiperSlide><img src={Img3} alt=""/></SwiperSlide>
//             <SwiperSlide><img src={Img4} alt=""/></SwiperSlide>
//             <SwiperSlide><img src={Img5} alt=""/></SwiperSlide>
//             <SwiperSlide><img src={Img6} alt=""/></SwiperSlide>
//           </Swiper>
//         </SwiperSlide>
//         <SwiperSlide><img src={Img7} alt=""/></SwiperSlide>
//         <SwiperSlide><img src={Img8} alt=""/></SwiperSlide>
//       </Swiper></>
//   )
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ----------------------  1st API -----------------
// import React, { useState } from 'react'
// import Axios from 'axios'
// export default function App() {
// const[arr,setarr]=useState([])
// Axios.get('https://jsonplaceholder.typicode.com/users')
// .then(res=> setarr(res.data))
// console.log(arr,"data");
//   return (
//      <>
//      <div className='bg-black text-5xl text-white flex justify-center py-5'>API Data</div>
//      <div className='flex border'>

//      {
//       arr.map((ele)=>{
//         return(
// <div className='card pl-[40px] w-[30%] h-[150px] bg-gray-500 text-white rounded-[40px] mb-[20px] flex flex-col justify-evenly allign-center'>
//         <h1>Name : {ele.name}</h1>
//         <h2> ID : {ele.id}</h2>
//         <h2> E-Mail : {ele.email}</h2>
//         <h2> Website : {ele.website}</h2>
//         </div>


//         )
        
//       })
//      }
//           </div>

//      </>
//   )
// }
