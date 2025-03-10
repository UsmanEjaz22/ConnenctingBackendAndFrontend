import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/info')
    .then((response) => {
      setInfo(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })


  return (
    <>
      <div>
        <h3>total info: {info.length}</h3>
        <table className='custom-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {
              info.map((info) => {
                return (
                  <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.title}</td>
                    <td>{info.content}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
