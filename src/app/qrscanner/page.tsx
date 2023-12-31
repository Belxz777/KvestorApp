'use client';
import React,  {useEffect, useState}  from "react";
import {QrReader} from "react-qr-reader";
import { useRouter } from "next/navigation";
import Link from "next/link";
import{ motion} from 'framer-motion'
import { AiOutlineAim, AiOutlineArrowLeft } from "react-icons/ai";
export default function Scaner() {
  type ScanResult = {
    text: string;
  }  
  const [data, setData] = useState<boolean>();
  const [mdata, setmData] = useState<number[]>([]);
  const router = useRouter()
  const RequestFunc= async(result:string)=>{
    const coordinatesArray  =  await result.split(',').map(coord => parseFloat(coord));
    if(coordinatesArray.length!==2){
      setData(false)
   }
   else{
    setmData(coordinatesArray)
    await router.push(`https://4qf73x8p-3000.euw.devtunnels.ms/quest/${coordinatesArray[0]}/${coordinatesArray[1]}`)
   }
  }
  return (
    <div className=" bg-scin-base h-screen w-screen">
<button className=" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex" onClick={()=> router.push(`/`)}>
<AiOutlineArrowLeft  />
Обратно на главную
</button>
      <div className=" rounded-xl pt-10  border-4 border-base mt-5">
        <QrReader
          onResult={(result: any , error: any) => {
            if (result) {
              setData(result?.text)
           RequestFunc(result?.text)
         // alert(coordinatesArray)

            }
            if (error) {
         console.log(error)
            }
          } } constraints={{ facingMode: "environment" } }   className=" rounded-xl "    />
          {
            data ? 
            <h2 className=" text-link-base text-black   text-2xl hover:text-emerald-100 text-center ">Код отсканирован</h2>
            :
            null
          }

      </div>
      <motion.div
      className=" w-10 h-2 bg-orange-600 flex justify-center items-center"
      animate={{
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "0%", "0%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
      <h1 className=' text-center font-extrabold text-scin-base text-xl  '>
  Включено автоопределение кода  просто наведите камеру 
</h1>
    </div>
  );
  }