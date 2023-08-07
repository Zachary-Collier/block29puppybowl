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
        const player = await fetchSinglePlayer((params.id)); //don't know if this is correct//
          console.log(params.id); //don't know if this is correct//
        return setSinglePlayer(player);
      }catch (error) {
        setError(error);
      }
    }
  }

    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

 
