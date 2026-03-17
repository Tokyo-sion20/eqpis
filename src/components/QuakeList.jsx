import { useEffect, useState } from "react";

export default function QuakeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.p2pquake.net/v2/history?codes=551&limit=10")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>履歴</h2>
      {data.map((q, i) => (
        <div key={i}>
          {q.earthquake.hypocenter.name}
        </div>
      ))}
    </div>
  );
}
