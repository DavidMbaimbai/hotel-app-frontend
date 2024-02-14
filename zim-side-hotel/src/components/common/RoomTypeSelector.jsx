import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../Utils/ApiFunctions'

const RoomTypeSelector = () => {
  const[RoomTypes, setRoomTypes] = useState([])
  const[showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false)
  const[newRoomType, setNewRoomType] = useState("")
  useEffect(()=>{
    getRoomTypes().then((data)=>{
      setRoomTypes(data)
    }, [])
  })
  return (
    <div>RoomTypeSelector</div>
  )
}

export default RoomTypeSelector