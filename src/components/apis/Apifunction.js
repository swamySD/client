

const sendHttpRequest=async(url)=>{
  const data=await fetch(url)
  const result=data.json()
  return result
}

export default sendHttpRequest