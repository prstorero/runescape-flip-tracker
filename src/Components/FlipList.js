import Flip from "./Flip"

const FlipList = (props) => {
  return (
    <div className="flips-container">
      {
        props.flips.map(flip => (
          <Flip flip={flip} key={flip.id} />
        ))
      }
    </div>
  )
}
 
export default FlipList