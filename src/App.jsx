import { useState } from "react";
import './App.css';

const survivors = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(survivors);

  const handleAddFighter = (fighter) => {
    //check if you have enough $$
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    //add to team
    setTeam([...team, fighter]);
    //pay for fighter
    setMoney(money - fighter.price);
    //remove from zombieFighters
    const updatedFighters = zombieFighters.filter(
      (zombieFighter) => zombieFighter.id !== fighter.id
    );
    setZombieFighters(updatedFighters);

    setTotalStrength(totalStrength + fighter.strength);
    setTotalAgility(totalAgility + fighter.agility);
  }

  const handleRemoveFighter = (fighter) => {
    //add to zombieFighters
    setZombieFighters([...zombieFighters, fighter]);
    // increase money
    setMoney(money + fighter.price);
    //remove from team
    const updatedFighters = team.filter(
      (teammate) => teammate.id !== fighter.id
    );
    setTeam(updatedFighters);

    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  }



  return (
    <>
      <h1>Zombie Fighters!</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team:</h2>
      <ul>
        {team.map((teammate, idx) => (
          <>
            <li key={idx}>
              <img src={teammate.img} />
              <h3>{teammate.name}</h3>
              <p>Price: {teammate.price}</p>
              <p>Strength: {teammate.strength}</p>
              <p>Agility: {teammate.agility}</p>
              <button onClick={() => handleRemoveFighter(teammate)}>Remove</button>
            </li>
          </>

        ))}
      </ul>
      <p>{team.length === 0 ? "Pick some team members." : "You have someone on your time"}</p>
      <h3>Fighters:</h3>
      <ul>
        {zombieFighters.map((survivor, idx) => (
          <>
            <li key={idx}>
              <img src={survivor.img} />
              <h3>{survivor.name}</h3>
              <p>Price: {survivor.price}</p>
              <p>Strength: {survivor.strength}</p>
              <p>Agility: {survivor.agility}</p>
              <button onClick={() => handleAddFighter(survivor)}>Add</button>
            </li>
          </>

        ))}
      </ul>
    </>
  );
}

export default App