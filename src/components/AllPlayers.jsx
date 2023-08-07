import { useState, useEffect } from "react";



function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function PlayersFetch() {
      try {
        const data = await fetchPlayers();
        return setPlayers(data);
      } catch (error) {
        setError(error);
      }
    }
    PlayersFetch();
  }, [handleDelete]);

    return (
      <div>
        <h1>All Players component</h1>
      </div>
    );
    console.log(AllPlayers);
  }

  export default AllPlayers;

 
