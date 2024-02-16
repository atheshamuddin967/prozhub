import React, { useEffect, useState } from 'react'
import { GetMyRequestApi } from '../features/Slicers/MyRequestSlicer';
import { useDispatch, useSelector } from 'react-redux';
import './MyRequest.css';
import { Card } from 'react-bootstrap';
import Loading from './Loading';
import { ToastContainer } from 'react-toastify';


const RequestService = () => {
const dispatch = useDispatch()
const {isLoading,MyRequestsDetail} = useSelector((state)=> state.MyRequestSlicer)
const [SeeRequest , setSeeRequest ] = useState([])

const handleViewRequest = (item) =>{
  console.log(item)

}

useEffect(()=>{
  if(MyRequestsDetail.length > 0)
  {
    setSeeRequest(MyRequestsDetail[0]) 
  }
  dispatch(GetMyRequestApi())
},[dispatch])


  return (
   <div className='container '>
    {isLoading && <Loading/>}
    {!isLoading &&
    
    <div className='RequestContainer p-5'>
    <div className=' d-flex justify-content-between pb-4'>

      <h3> 
        My Reuqests
      </h3>
        <button className='btn btn-secondary'>
          Place New Request
        </button>
    </div>
    <div className='d-flex justify-content-between'>

      <div className=''>
        {MyRequestsDetail
        && MyRequestsDetail.map((item,index)=>{
          
            return(
<Card className='' onClick={handleViewRequest(item)} style={{ width: '22rem' }}>
      <Card.Body >
        <Card.Title className=''>Card Title</Card.Title>
        <Card.Text className='text-secondary'> Date : wednesday 19 Dec</Card.Text>
        <Card.Text className='bg-danger text-white rounded px-2 py-3'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="btn btn-primary">View Request</button>
      </Card.Body>
    </Card>
            )
        })}
      
      </div>
      <div className=' border-2  border-primary w-'>
        <h2 className='text-center text-secondary '>
          content that will show Here 
        </h2>
    </div>

    </div>
    </div>
    }
     <ToastContainer autoClose={500} 
limit={2} />
   </div>
     
  )
}

export default RequestService