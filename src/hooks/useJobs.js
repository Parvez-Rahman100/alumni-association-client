import { useEffect, useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const url = "https://alumni-association-server-56nn.vercel.app/jobs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return [jobs];
};

export default useJobs;
