import DoorModel from "../../model/door";

export function createDoors(quantity: number, doorWithGift: number) : DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorWithGift;
    return new DoorModel(number, haveGift);
  })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel) : DoorModel[] {
  return doors.map(currentDoor => {
    const doorEqualsDoorModified = currentDoor.number === doorModified.number;

    if (doorEqualsDoorModified) {
      return doorModified;
    }
    else {
      return doorModified.open ? currentDoor : currentDoor.deselected();
    }
  })
}