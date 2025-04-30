import { useEffect, useState } from 'react';

const useSpotifyAPI = (endpoint, token) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [endpoint, token]);

  return data;
};

export default useSpotifyAPI;
