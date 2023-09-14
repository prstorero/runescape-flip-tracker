import FlipList from './FlipList'
import { useSelector } from 'react-redux'

const Home = () => {
  const flips = useSelector((state) => state.flips)

  return (
    <div className="home">
      { <FlipList flips={flips} /> }
    </div>
  );
}

export default Home