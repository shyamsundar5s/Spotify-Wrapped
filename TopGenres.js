import React from 'react';

function TopGenres({ genres }) {
  const genreCounts = genres.reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

  const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="top-genres">
      <h2>Top Genres</h2>
      <ul>
        {sortedGenres.map(([genre, count]) => (
          <li key={genre}>
            {genre}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopGenres;
