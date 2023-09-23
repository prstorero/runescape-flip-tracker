import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { update, remove } from '../redux/slices/flipsSlice'
import Card from './common/styled-components/Card'
import FancyButton from './common/styled-components/FancyButton'

const Flip = ({flip}) => {
  const [timeRemaining, setTimeRemaining] = useState(flip.minsToUpdate * 60)
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
          flip: {id: flip.id, minsToUpdate: timeRemaining / 60},
        })
      )
    }
  }, [timeRemaining, dispatch, flip.id])


  const handleClick = (id) => {
    dispatch(remove(id))
  }

  return (
    <Card>
      <Card.Body>
      <Card.Title className={ ['text-truncate'] } title={flip.itemName}>{flip.itemName}</Card.Title>
        <Card.Text>
        <span>
          { `${Math.floor(timeRemaining / 60)} min ${Math.floor(timeRemaining % 60)} sec` }
        </span>
          <span>{ flip.buyOrSell }</span>
          <span>{ `${flip.itemPrice}m` }</span>
          <FancyButton onClick={() => handleClick(flip.id)} text="Delete"></FancyButton>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
 
export default Flip