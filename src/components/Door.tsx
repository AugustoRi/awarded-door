import styles from "../styles/Door.module.css";
import doorModel from "../../model/door";
import { Gift } from "./Gift";

interface DoorProps {
  door: doorModel,
  doorChange: (newDoor: doorModel) => void;
}

export function Door({
  door,
  doorChange,
}: DoorProps) {

  let doorSelected = door.selected && door.close ? styles.selected : '';
  let selectionToggle = () => doorChange(door.selectionToggle());
  const open = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    doorChange(door.openDoor());
  }  

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div 
          className={styles.handle} 
          onClick={open}
        >
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.area} onClick={selectionToggle}>
      <div className={`${styles.frame} ${doorSelected}`}>
        {door.close ? renderDoor() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.sill}></div>
    </div>
  );
}