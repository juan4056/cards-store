import { useState, useEffect, useMemo } from "react";

interface CheckoutCounterProps {
  onComplete: () => void;
}

export function CheckoutCounter({ onComplete }: CheckoutCounterProps) {
  const [seconds, setSeconds] = useState(300);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes ? `${minutes}:` : ""}${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, [seconds]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [seconds, onComplete]);

  return (
    <div>
      <p>Tiempo restante para completar la compra: {formattedTime}</p>
    </div>
  );
}
