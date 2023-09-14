import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { update, remove } from '../redux/slices/flipsSlice';

const Flip = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(props.flip.minsToUpdate * 60)
  const dispatch = useDispatch()

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1)
      } else {
        clearInterval(timerId)
      }
    }, 1000)
  
    return () => {
      clearInterval(timerId)
      dispatch(
        update({
          flip: {id: props.flip.id, minsToUpdate: timeRemaining / 60},
        })
      )
    }
  }, [timeRemaining, dispatch, props.flip.id])


  const handleClick = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className="flip-item">
      <div className="item-header-container">
        <h2>{ props.flip.itemName }</h2>
      </div>
      <div className="flip-details">
        <div>{ `${Math.floor(timeRemaining / 60)} min ${Math.floor(timeRemaining % 60)} sec` }</div>
        <div>{ props.flip.buyOrSell }</div>
        <div>{ `${props.flip.itemPrice}m` }</div>
        <button onClick={() => handleClick(props.flip.id)}>Delete</button>
      </div>
    </div>
  )
}
 
export default Flip