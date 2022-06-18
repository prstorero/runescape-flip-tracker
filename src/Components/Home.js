import { useEffect } from "react"
import { connect } from "react-redux"
import FlipList from "./FlipList"
import { add } from "../actions/flipActions"

const Home = (props) => {
  useEffect(() => {
    if (props?.flips?.length > 0) return

    const flipsJsonString = localStorage.getItem("flips")

    if (flipsJsonString === "undefined") return

    const flips = JSON.parse(localStorage.getItem("flips"))

    if (flips?.flips?.length === 0) return

    flips.flips.map(flip => props.add(flip))
  }, [])

  return (
    <div className="home">
      { <FlipList flips={props.flips} /> }
    </div>
  )
}

const connectStateToProps = (state) => {
  return {
    flips: state.flips
  }
}

const connectDispatchToProps = (dispatch) => {
  return {
    add: (flip) => { dispatch(add(flip)) }
  }
}

export default connect(connectStateToProps, connectDispatchToProps)(Home)