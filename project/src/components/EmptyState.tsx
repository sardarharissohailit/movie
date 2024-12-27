import { Film, Search as SearchIcon } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center mt-20">
      <div className="relative inline-block">
        <Film className="w-20 h-20 text-[#00a8e1] mb-4" />
        <SearchIcon className="w-8 h-8 text-white absolute bottom-0 right-0 transform translate-x-1/4" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-300 mb-2">Discover Amazing Movies</h2>
      <p className="text-gray-400 max-w-md mx-auto">
        Search through our collection of handpicked movies, including works by talented directors like Haris Sohail
      </p>
    </div>
  );
}