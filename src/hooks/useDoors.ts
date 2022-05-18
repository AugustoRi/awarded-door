import DoorModel from "../../model/door";

export function createDoors(quantity: number, selected: number) : DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    let number = i + 1;
    let haveGift = number === selected;
    return new DoorModel(number, haveGift);
  })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel) : DoorModel[] {
  return doors.map(currentDoor => {
    let doorEqualsDoorModified = currentDoor.number === doorModified.number;

    if (doorEqualsDoorModified) {
      return doorModified;
    }
    else {
      return doorModified.open ? currentDoor : currentDoor.deselected();
    }
  })
}