import { useState } from "react";
import { useForm } from "react-hook-form";
function Bill(){
   
    let [bill, setBill] = useState('🚘⛱️');
    
    let {register,handleSubmit,reset} = useForm();
    function submitHandler(data){
            let amount = data.amount;
            let person  = data.person;
        
            setBill(Math.floor((amount / person)));
            reset();
    }

    return(
        <>
               <form action="" className="w-[400px] text-center mx-auto" onSubmit={handleSubmit(submitHandler)} >
        <div className="mx-auto w-[500px] mt-24 text-center">
        <h1 className="text-4xl font-black">{bill}</h1>
            <h1 className="text-xl font-semibold text-neutral-800 ">Split The Amount</h1>
            <p className="text-md font-semibold text-neutral-500 ">The Split the amount can be done with the UseForm Hooks in react</p>
            <div className="flex w-[500px] mt-4 justify-center  gap-3">
     
                <input type="text"  {...register('amount')} className="w-[full] border border-neutral-300 outline-none rounded-lg p-3" placeholder="Enter Amount"/>
                <input type="text"  {...register('person')} className="w-[full] border border-neutral-300 outline-none rounded-lg p-3" placeholder="Enter Persons" />
                </div>
                <div className="mt-4">
                <input type="submit" value="submit" className=" w-[250px]  border border-neutral-300 outline-none bg-black text-white rounded-lg p-3 cursor-pointer"  />
                </div>
               
         
          
          
        </div>
        </form>
        </>
    )
}
export default Bill