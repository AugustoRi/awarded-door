import { useState } from "react";
import { Door } from "../components/Door";
import { createDoors, updateDoors } from "../hooks/useDoors";
 
export default function Home() {
  const [doors, setDoors] = useState(createDoors(5, 3)); 

  function renderDoor() {
    return doors.map(door => {
      return <Door 
        key={door.number} 
        door={door} 
        doorChange={newDoor => setDoors(updateDoors(doors, newDoor))} 
      />
    })
  }

  return(
    <div style={{display: "flex"}}>
      {renderDoor()}    
    </div>
  );
}