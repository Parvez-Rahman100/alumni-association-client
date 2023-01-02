import { useEffect, useState } from "react";

const useAlumnus = () => {
  const [alumnus, setAlumnus] = useState([]);

  useEffect(() => {
    const url = "https://alumni-association-server-56nn.vercel.app/alumnus";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlumnus(data));
  }, []);
  return [alumnus];
};

export default useAlumnus;
