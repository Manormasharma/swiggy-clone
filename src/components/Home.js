import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IMG_CDN_URL, swiggy_api_URL } from '../utitlity/constants'
import ResitemCard from './ResitemCard'
import { Link } from 'react-router-dom'

const Home = () => {
  const [restaurantList, setRestaurantList ] = useState("")
  const [headerTitle, setHeaderTitle ] = useState("")
  
  useEffect(()=>{
    getRestaurantList();
  },[])
  const getRestaurantList = async()=>{
    let result = await fetch(swiggy_api_URL)
    result = await result.json()
    const resData = await result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    const title = await result.data.cards[2].card.card.header.title;
    setHeaderTitle(title)
    setRestaurantList(resData)
  }
  return (
    <div className='container my-5 resCardContainer'>
      <div className='row'>
        <h2 className='text-start mb-4'>{headerTitle}</h2>
        {
          restaurantList.length > 0 ? 
          restaurantList.map((restaurant,index)=>
            <Link className='mb-4' to={"/restaurant/"+ restaurant.info.id} style={{width:"25%"}} ><ResitemCard key={index} restData={restaurant} /></Link>
          ) : <h2>No Restaurant Found</h2>
        }
      </div> 
    </div>
  )
}

export default Home