import { useState } from 'react';
import { MOVIES_DB } from './data/movies';
import { SearchBar } from './components/SearchBar';
import { MovieCard } from './components/MovieCard';
import { EmptyState } from './components/EmptyState';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = Object.entries(MOVIES_DB)
    .filter(([key]) => key.includes(searchQuery.toLowerCase()))
    .map(([, movie]) => movie);

  return (
    <div className="min-h-screen bg-[#0f171e] text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8 text-[#00a8e1]">Movie Recommendations</h1>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </header>

        <main>
          {searchQuery ? (
            filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.title} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center mt-20 text-gray-400">
                No movies found for "{searchQuery}"
              </div>
            )
          ) : (
            <EmptyState />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;