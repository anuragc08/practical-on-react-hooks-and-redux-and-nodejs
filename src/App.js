// /* jshint esversion: 6 */
// import React,{useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import './App.css';
// import allActions from './Component/Action'
// // <button onClick={()=>dispatch(allActions.decrement())}>+</button>
// // <button onClick={()=>dispatch(allActions.decrement())}>-</button>
// // <button onClick={()=>dispatch(allActions.decrement())}>*</button>
// // <button onClick={()=>dispatch(allActions.decrement())}>/</button>
// function App() {
//   const count = useSelector(state => state)
//   console.log("counter is "+count)
//   const dispatch = useDispatch()
//   // const initialState=0
//   // const [count,setCount]=useState(initialState)
//   return (
//     <div className="App">
//       <p>Count:{count}</p>
//
//
// <button onClick={()=>dispatch(allActions.reset())}>Reset</button>
// <button onClick={()=> dispatch(allActions.increment())}>Increment</button>
// <button onClick={()=>dispatch(allActions.decrement())}>Decrement</button>
//
//     </div>
//   );
// }
//
// export default App;

import React,{Component} from "react"
// import axios from 'axios'
//
// const URL = 'http://hrms-dev-api.azurewebsites.net/Account/getUsers'
// const url ="http://hrms-dev-api.azurewebsites.net/Account/deleteUser"
// const token = ()=>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3MywiaWF0IjoxNTk1OTE0NzI3LCJleHAiOjE1OTYwMDExMjd9.9QPeYHzZUFG12cggHqU3juSW3g_HznsbEDOHxBJyJFM"
//
// const Table = () => {
//     const [employees, setEmployees] = React.useState([])
//
//     React.useEffect(() => {
//         getData()
//     }, [])
//
//     const getData = async () => {
//
//     axios.defaults.headers["Content-Type"] = "application/json";
//     axios.defaults.headers["Authorization"] = `Bearer ${token()}`;
//        const response = await axios.get(URL)
//            console.log(response.data.data)
//        setEmployees(response.data.data)
//     }
//
//     const removeData = (id) => {
//       axios.defaults.headers["Content-Type"] = "application/json";
//       axios.defaults.headers["Authorization"] = `Bearer ${token()}`;
//         axios.delete(`${url}?id=${id}`).then(res => {
//             const del = employees.filter(employee => id !== employee.id)
//
//             setEmployees(del)
//         })
//     }
//
//     const renderHeader = () => {
//         let headerElement = ['id', 'name', 'email', 'phone', 'operation']
//
//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }
//
//     const renderBody = () => {
//         return employees && employees.map(({ id, Name, Email, MobileNo }) => {
//
//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{Name}</td>
//                     <td>{Email}</td>
//                     <td>{MobileNo}</td>
//                     <td className='opration'>
//                         <button className='button' onClick={() => removeData(id)}>Delete</button>
//                     </td>
//                 </tr>
//             )
//         })
//     }
//
//     return (
//         <>
//             <table id='employee'>
//                 <thead>
//                     <tr>{renderHeader()}</tr>
//                 </thead>
//                 <tbody>
//                     {renderBody()}
//                 </tbody>
//             </table>
//         </>
//     )
// }
//
//
// export default Table


// let path= `../../images/topic-icons/${absImg}`;






// const ImageComponent = ({imgPath, h, w }) => {

    // let imgPath = `./images/image1.jpeg`
    // console.log('image component: ', imgPath,h,w);
//     return <img src={imgPath} alt="image" style={{ height: { h }, width: { w } }} />
// }
//
// export default ImageComponent;

class A extends Component {

render(){
let hello = `${<h1>Hello world</h1>}`
let b = ()=>{
 return `${<h1>Hello world</h1>}`
}

  return(
    <div>
<h1>Hello world</h1>

    </div>
  );
}
}
export default A
