import { useEffect, useState } from 'react';
import { fetchSinglePlayer } from './API/index.js';

export default function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  console.log('params: ', params, params.id);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await fetchSinglePlayer((params.id));
          console.log(params.id);
        return setSinglePlayer(player);
      }catch (error) {
        setError(error);
      })
    }
  }

    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

 
