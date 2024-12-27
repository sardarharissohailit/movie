import { Movie } from '../data/movies';
import { Star, Calendar, User } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-[#1a242f] rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        {movie.rating && (
          <div className="absolute top-2 right-2 bg-[#00a8e1] px-2 py-1 rounded-md flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">{movie.rating}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#00a8e1]">{movie.title}</h3>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
          {movie.year && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{movie.year}</span>
            </div>
          )}
          {movie.director && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{movie.director}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-300 mb-4 text-sm">{movie.description}</p>
        
        <div className="border-t border-[#2a3543] pt-4">
          <h4 className="text-[#00a8e1] text-sm font-semibold mb-2">Recommended Movies:</h4>
          <ul className="space-y-1">
            {movie.recommendations.map((rec) => (
              <li key={rec} className="text-gray-300 text-sm pl-4 relative">
                <span className="absolute left-0 text-[#00a8e1]">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}