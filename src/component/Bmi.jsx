import { useState } from "react"
import { useForm } from "react-hook-form";
function Bmi(){
   
    let[bmi, setBmi] = useState();
    let{register, handleSubmit,reset} = useForm();
function submitHandler(data){
let weight = data.weight;
let height = data.height;
setBmi =  (weight.value / Math.pow( (height.value/100), 2 ))
console.log('setBmi')
reset();
} 
return (
    <>
        <form action="" className="w-[400px] text-center mx-auto" onSubmit={handleSubmit(submitHandler)} >
        <div className="mx-auto w-[500px] mt-24 text-center">
        <h1 className="text-4xl font-black">{bmi}</h1>
            <h1 className="text-xl font-semibold text-neutral-800 ">BMI Calculation</h1>
            <p className="text-md font-semibold text-neutral-500 ">The BMI Calculation  can be done with the UseForm Hooks in react</p>
            <div className="flex w-[500px] mt-4 justify-center  gap-3">
     
                <input type="text"  {...register('weight')} className="w-[full] border border-neutral-300 outline-none rounded-lg p-3" placeholder="Enter Weight"/>
                <input type="text"  {...register('height')} className="w-[full] border border-neutral-300 outline-none rounded-lg p-3" placeholder="Enter Height" />
                </div>
                <div className="mt-4">
                <input type="submit" value="submit" className=" w-[250px]  border border-neutral-300 outline-none bg-black text-white rounded-lg p-3 cursor-pointer"  />
                </div>
               
         
          
          
        </div>
        </form>
    </>
)
}
export default Bmi