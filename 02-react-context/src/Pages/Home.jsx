import SongDetail from '../Components/SongDetail/SongDetail'
import SongList from '../Components/SongList/SongList'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='left'>
        <p>lado izquierdo</p>
        <SongList />
      </div>
      <div className='right'>
        <p>lado derecho</p>
        <SongDetail />
      </div>
    </div>
  )
}

export default Home
