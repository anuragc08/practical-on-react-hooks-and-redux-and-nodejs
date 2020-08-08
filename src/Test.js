// import React,{useState} from 'react'
//
// function Test() {
//
// const [state,setState]=useState({
//   password:"",
//   confirmPassword:"",
//   passwordError:false,
//   confirmPasswordError:false,
//   isPasswordMatch:false
// })
// const changeHandler = (e)=>{
//   console.log(e.target.name)
//     setState({...state,[e.target.name]:e.target.value})
//       // console.log(state.isPasswordMatch)
//       // console.log(state.password)
//       if(state.password)
//       console.log(state.password);
//       if( state.confirmPassword)
//     console.log(state.confirmPassword);
//       if(state.password===state.confirmPassword&&state.password.length>0)
//       setState({...state,isPasswordMatch:true})
//         console.log(state.isPasswordMatch)
//
// }
// const passwordValidate = (e)=>{
//   e.preventDefault();
//     console.log(state.password)
//     console.log(state.confirmPassword)
//     console.log(state.passwordError)
//     console.log(state.confirmPasswordError)
//     // if(state.password===state.confirmPassword)
//     // setState({...state,isPasswordMatch:true})
//     //   console.log(state.isPasswordMatch)
// }
//
//
//   return (
//     <div>
// <form onSubmit={passwordValidate}>
// <input
//   type="password"
//   name="password"
//   id="firstPassword"
//   placeholder="enter password"
// value={state.password}
// // onChange={(e)=>setState({...state,password:e.target.value})}
// onChange={changeHandler}
// />
// <input
//   type="password"
//   name="confirmPassword"
//   id="confirmPassword"
//   placeholder="enter confirmPassword"
// value={state.confirmPasswordpassword}
// // onChange={(e)=>setState({...state,confirmPassword:e.target.value})}
// onChange={changeHandler}
// />
// <button>Submit</button>
//
// </form>
//
//     </div>
//   )
// }
//
// export default Test
// import React from "react";
// import { useForm,Controller } from "react-hook-form";
// import ReactDatePicker from "react-datepicker";
// // import "./styles.css";
//
// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input name={label} ref={register({ required })} />
//   </>
// );
//
// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ label, register }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={label} ref={ref}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));
//
// const App = ()=> {
//   const { register, handleSubmit,control } = useForm();
//   const onSubmit = data => console.log(data);
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="Name*" register={register} required />
//         <label>DOB</label>
//               <Controller
//                 as={ReactDatePicker}
//                 control={control}
//                 valueName="selected" // DateSelect value's name is selected
//                 onChange={([selected]) => selected}
//                 name="ReactDatepicker"
//                 className="input"
//                 placeholderText="Select date"
//               />
//       <Select label="Age" ref={register} />
//       <input type="submit" />
//     </form>
//   );
// }
// export default App;

// import React from "react";
// import { Form, Button, Input, InputNumber, Radio } from "antd";
// import {useForm}from "react-hook-form";
// import { RHFInput } from "react-hook-form-input";
//
// import "antd/dist/antd.css";
// import "./styles1.css";
//
// const formItemLayout = {
//   labelCol: { sm: { span: 8 } },
//   wrapperCol: { sm: { span: 8 } }
// };
//
// const tailFormItemLayout = {
//   wrapperCol: { sm: { span: 8, offset: 8 } }
// };
//
// const Test = ()=> {
//   const {
//     handleSubmit,
//     errors,
//     setValue,
//     unregister,
//     register,
//     watch
//   } = useForm({
//     mode: "onBlur",
//     reValidateMode: "onChange",
//     defaultValues: {
//       integer: 5,
//       type: "a"
//     }
//   });
//   console.log("errors:", errors);
//   const type = watch("type");
//   const onSubmit = data => {
//     console.log(data);
//   };
//
//   return (
//     <div className="App">
//       <Form {...formItemLayout} onSubmit={handleSubmit(onSubmit)}>
//         <Form.Item
//           required
//           label="Name"
//           validateStatus={errors && errors.htmlText ? "error" : "success"}
//           help={errors && errors.htmlText ? "Please enter some text" : ""}
//         >
//           <input
//             name="htmlText"
//             placeholder="Please enter some text"
//             ref={register({ required: true, minLength: 3, maxLength: 20 })}
//           />
//         </Form.Item>
//         <Form.Item
//           required
//           label="Text (AntD)"
//           validateStatus={errors && errors.text ? "error" : "success"}
//           help={errors && errors.text ? "Please enter some text" : ""}
//         >
//           <RHFInput
//             as={<Input placeholder="Please enter some text" />}
//             name="text"
//             register={register}
//             setValue={setValue}
//             rules={{ required: true, minLength: 3, maxLength: 20 }}
//             mode="onBlur"
//           />
//         </Form.Item>
//
//         <Form.Item
//           required
//           label="Integer"
//           validateStatus={errors && errors.integer ? "error" : "success"}
//           help={errors && errors.integer ? "Please enter an integer 2~10" : ""}
//         >
//           <RHFInput
//             as={
//               <InputNumber
//                 style={{ width: "100%" }}
//                 step={1}
//                 placeholder="Please enter an integer 2~10"
//               />
//             }
//             name="integer"
//             register={register}
//             setValue={setValue}
//             rules={{ required: true, validate: v => v >= 2 && v <= 10 }}
//             onChangeEvent={v => {
//               return { value: v[0] };
//             }}
//             mode="onChange"
//           />
//         </Form.Item>
//
//         <Form.Item label="Type" required={true}>
//           <RHFInput
//             as={
//               <Radio.Group>
//                 <Radio.Button value="a">A</Radio.Button>
//                 <Radio.Button value="b">B</Radio.Button>
//               </Radio.Group>
//             }
//             name="type"
//             register={register}
//             setValue={setValue}
//             rules={{ required: true }}
//             mode="onChange"
//           />
//         </Form.Item>
//
//         {type === "a" && (
//           <Form.Item
//             required={true}
//             label="Type A"
//             validateStatus={errors && errors.typeA ? "error" : "success"}
//             help={errors && errors.typeA ? "Please enter type A" : ""}
//           >
//             <RHFInput
//               as={<Input placeholder="Please enter type A" />}
//               name="typeA"
//               register={register}
//               unregister={unregister}
//               setValue={setValue}
//               rules={{ required: true }}
//               mode="onChange"
//             />
//           </Form.Item>
//         )}
//
//         {type === "b" && (
//           <Form.Item
//             required={true}
//             label="Type B"
//             validateStatus={errors && errors.typeB ? "error" : "success"}
//             help={errors && errors.typeB ? "Please enter type B" : ""}
//           >
//             <RHFInput
//               as={<Input placeholder="Please enter type B" />}
//               name="typeB"
//               register={register}
//               unregister={unregister}
//               setValue={setValue}
//               rules={{ required: true }}
//               mode="onChange"
//             />
//           </Form.Item>
//         )}
//
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }
//
// export default Test;
