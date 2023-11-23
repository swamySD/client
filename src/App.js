import {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import sendHttpRequest from './components/apis/Apifunction';
import { useApi, useFetch } from './components/apis/CustomHook';
import Pagination from './components/Nabars/Pagination';
import PaginationB from './components/Nabars/BackendPagination';
import ProgressBar from './components/ProgressBar/ProgressBar';
import RadioButton from './components/RadioButttons/RadioButton';
import Otp from './components/RadioButttons/Otp';
import UseMemoHook from './components/Hooks/UseMemoHook';
import PasswordGenerator from './components/Hooks/PasswordGenerator';
const url='https://fakestoreapi.com/products'
const urll='https://dummyjson.com/products'
function App() {

  //this value state is for progress bar
   const [value,setValue]=useState(0)

   useEffect(()=>{
    let timer=setInterval(() => {
      setValue(preVal=>preVal+1)
    }, 1000);
    return ()=>clearInterval(timer)
   },[value])

  
//   const { data, loading, error, fetchData }=useFetch(urll)
useEffect(()=>{
  const fetchData = async () => {
    try {
      const data = await sendHttpRequest(url);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
},[])

// console.log(data)



  return (
    <div className="App">
{/*        
     <Pagination/>
     <PaginationB/>
    <ProgressBar value={25}/>
    <RadioButton/>
    <Otp otpLength={4}/>
    <UseMemoHook/> */}
    <PasswordGenerator/>
  </div>
  );
}

export default App;
