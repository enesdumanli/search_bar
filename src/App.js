import './App.css';
import {useState,useEffect} from 'react'

function App() {

  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState("");
  
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
  }


  return (
    <div className="App">
      <form>
        <input id="buton" type="text" placeholder="Search names" value={search}
              onChange={(e)=>setSearch(e.target.value)}/>
              <ul>
      {search === "" ? (
          users.map(user=>
            <li>
            {user.name}
            </li>
          )
        ) : (
            users.filter((user)=>user.name.toLowerCase()
            .includes(search.toLowerCase())).map((user)=>(
                <li>
                {user.name}
                </li>
              )
            )
        )
        }
      </ul>
        </form>
    </div>
  );
}

export default App;
