import styles from "../styles/Form.module.css";

import { Card } from "../components/Card";
import Link from "next/link";
import { NumberInput } from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtdeDoors, setQtdeDoors] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div id={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Amount of doors"
            value={qtdeDoors}
            onChange={newQtdeDoors => setQtdeDoors(newQtdeDoors)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Number of the door gifted"
            value={doorWithGift}
            onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`game/${qtdeDoors}/${doorWithGift}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}