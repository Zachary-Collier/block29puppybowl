const Players_API_URL = `${APIURL}/players`;

export async function fetchPlayers() {
  try {
    const response = await fetch(Players_API_URL);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Having problems fetching players: ", error);
  }
}

fetchPlayers();

  export async function addNewPlayer(nameIs, breedIs, statusIs, imageUrl) {
    try {
      const response = await fetch(PLAYERS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${nameIs}`,
          breed: `${breedIs}`,
          status: `${statusIs}`,
          imageUrl: `${imageUrl}`,
        }),
      });
      console.log("Status is: ", response.status);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
    return (
      <div>
        <h1>Index Component</h1>
      </div>
    );
  }

 
