import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

function Home() {
  return (
    
    <div className="text-6xl mb-4">
        <UserResults />
        <UserSearch />
    </div>
  
    
  )
}

export default Home