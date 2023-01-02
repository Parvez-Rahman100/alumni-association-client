import { useEffect, useState } from "react";

const useInfo = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const url = "https://alumni-association-server-56nn.vercel.app/info";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);
  return [infos];
};

export default useInfo;
