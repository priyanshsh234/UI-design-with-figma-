import { useEffect, useState, useRef } from "react";

export default function Countdown() {
  // 🔹 Store end time once (stable across renders)
  const endTimeRef = useRef(
    Date.now() + (18 * 3600 + 57 * 60 + 14) * 1000
  );

  const calculateTimeLeft = (endTime) => {
    const diff = endTime - Date.now();

    if (diff <= 0) {
      return { hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Initial calculation AFTER mount
    setTimeLeft(calculateTimeLeft(endTimeRef.current));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTimeRef.current));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-gray-400 text-sm mb-2">Auction Ends In</p>

      <div className="flex gap-6 text-center">
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
