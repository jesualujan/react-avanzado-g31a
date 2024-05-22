import SongDetail from '../Components/SongDetail/SongDetail'
import SongList from '../Components/SongList/SongList'
import { SongProvider } from '../Context/SongContext'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
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
    </SongProvider>
  )
}

export default Home
