export const fetchTopTracks = async (token) => {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const fetchTopArtists = async (token) => {
  const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
