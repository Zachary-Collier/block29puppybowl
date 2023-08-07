import { useState, useEffect } from "react";
import { addNewPlayer } from "../API/index.js";

export default function NewPlayerForm() {
  const defaultImage =
    "https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/big-dog-breeds-akita.jpg?fit=728%2C524";

  const [puppyNameIs, setPuppyNameIs] = useState("");
  const [puppyBreedIs, setPuppyBreedIs] = useState("");
  const [playerStatusIs, setPlayerStatusIs] = useState("bench");
  const [imageUrl, setImageUrl] = useState(defaultImage);

  function handleSubmit(e) {
    e.preventDefault();
    const nameIs = e.target[0].value;
    const breedIs = e.target[1].value;
    const statusIs = e.target[2].value;
    const imageUrl = e.target[3].value;

    console.log(nameIs, breedIs, statusIs, imageUrl);

    async function newPlayer() {
      try {
        const data = await addNewPlayer(nameIs, breedIs, statusIs, imageUrl);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    newPlayer();
    setFormDefaults();
  }

  function setFormDefaults() {
    setPuppyNameIs("");
    setPuppyBreedIs("");
    setPlayerStatusIs("bench");
    setImageUrl(defaultImage);
  }

  return (
    <section id="form-cont">
      <h1>Add New Player</h1>
      <form method="POST" onSubmit={handleSubmit} id="form">
        <label>
          Name:{" "}
          <input
            value={puppyName}
            onChange={(e) => setPuppyName(e.target.value)}
            required
          />
        </label>

        <label>
          Breed:{" "}
          <input
            value={puppyBreed}
            onChange={(e) => setPuppyBreed(e.target.value)}
            required
          />
        </label>

        <label>
          Status:{" "}
          <select
            value={playerStatus}
            onChange={(e) => {
              setPlayerStatus(e.target.value);
            }}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>

        <label>
          ImageURL:
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </label>

        <button className="button">Submit</button>
      </form>
    </section>
  );
}
