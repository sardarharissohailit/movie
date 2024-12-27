import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search for movies (e.g., Squid Game, Money Heist)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-4 pl-12 pr-4 rounded-lg bg-[#1a242f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a8e1] transition-shadow"
      />
    </div>
  );
}