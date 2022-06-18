import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

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
      // On cleanup, capture the most up to date
      // minutes remaining until an update so we
      // can store it
      const flipWithUpdatedTime = {
        ...props.flip,
        minsToUpdate: timeRemaining / 60
      }
      clearInterval(timerId)
      dispatch({
        type: "UPDATE",
        flip: flipWithUpdatedTime,
        id: props.flip.id
      })
    }
  }, [timeRemaining])


  const handleClick = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
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