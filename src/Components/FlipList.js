import Flip from './Flip'

const FlipList = (props) => {
  return (
    <div className="flip-list">
      {
        props.flips?.map(flip => (
          <Flip flip={flip} key={flip.id} />
        ))
      }
    </div>
  )
}
 
export default FlipList