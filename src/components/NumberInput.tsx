import styles from "../styles/NumberInput.module.css";

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function NumberInput({
  text,
  value,
  onChange,
} : NumberInputProps) {
  
  function dec() {
    if (value > 0) {
      onChange(value - 1);
    }
  }

  function inc() {
    if (value < 100) {
      onChange(value + 1); 
    }
  }

  return (
    <div id={styles.numberInput}>
      <h2>{text}</h2>
      <span>{value}</span>
      <div className={styles.buttons}>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}