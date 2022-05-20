import styles from "../../../styles/Game.module.css";

import DoorModel from "../../../../model/door";

import { Door } from "../../../components/Door";
import { createDoors, updateDoors } from "../../../hooks/useDoors";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
 
export default function Game() {
  const { query, isReady } = useRouter();
  const [ doors, setDoors ] = useState<DoorModel[]>([]);
  const [ valid, setValid ] = useState(false);

  useEffect(() => {
    if (query.doors && query.haveGift) {
      const doors = +query.doors;
      const haveGift = +query.haveGift;

      const validationQtdeDoors = doors >= 3 && doors <= 100;
      const validationHaveGift = haveGift >= 1 && haveGift <= doors;

      setValid(validationQtdeDoors && validationHaveGift);
    }
  }, [query.doors, query.haveGift])
  
  useEffect(() => {
    if (isReady && query.doors && query.haveGift) {
      const doors = +query.doors;
      const haveGift = +query.haveGift;
      setDoors(createDoors(doors, haveGift));
    }
  }, [isReady, query])

  function renderDoors() {
    return valid && doors.map(door => {
      return <Door
        key={door.number} 
        value={door}
        doorChange={newDoor => setDoors(updateDoors(doors, newDoor))}
      />
    })
  }

  return(
    <div id={styles.game}>
      <div className={styles.doors}>
        { valid ? 
          renderDoors() :
          <h1>ERROR! Invalid values. Please reset your game.</h1>
        }
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
}