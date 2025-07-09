import '../style/Home.css'
import Events from './Events'

function Home() {

  return (
    <div>
      <h1 className='home'>Welcome to the UFC</h1>
      <article>
        Upcoming Events
        <Events />
      </article>
    </div>
  )
}

export default Home
