import { useState } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  
const[amount,setAmount]=useState("")
const[discount,setDiscount]=useState("")
const[finalAmount,setFinalAmount]=useState(0)

const findAmount=()=>{
  const discountAmount =((amount * discount) / 100)
  const calculatedAmount =amount-discountAmount
  setFinalAmount(calculatedAmount)
}

  return (
    <>
      <div className="container mt-5 border border-2 text-center w-50">
          <h2 className='mt-5 mb-3'>Discount-Calculator</h2>
          <div className='d-flex flex-column mt-5 w-50' style={{marginLeft:"190px"}}>
          <TextField id="outlined-basic" label="Enter the Amount" className='mb-3 text-center' value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
          <TextField id="outlined-basic" label="Enter the Discount " className='mb-3 text-center'value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
          </div>
          <div className="mt-3">
            <h1 className='text-danger'>&#8377; {finalAmount.toFixed(2)}</h1>
          </div>
          <div className="btn border border-2 mt-5 mb-3">
            <Button onClick={findAmount}  type="submit" style={{color:"brown"}}>Calculate</Button>
          </div>
      </div>
    </>
  )
}

export default App
