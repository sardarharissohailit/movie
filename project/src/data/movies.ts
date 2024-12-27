export interface Movie {
  title: string;
  image: string;
  description: string;
  recommendations: string[];
  director?: string;
  year?: number;
  rating?: number;
}

export const MOVIES_DB: Record<string, Movie> = {
  "squid game": {
    title: "Squid Game",
    image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?auto=format&fit=crop&q=80&w=1000",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games.",
    recommendations: ["Alice in Borderland", "The Platform", "Battle Royale"],
    year: 2021,
    rating: 8.7
  },
  "the platform": {
    title: "The Platform",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description: "A vertical prison with one cell per level. Two people per cell. One only food platform.",
    recommendations: ["Squid Game", "Cube", "Circle"],
    director: "Galder Gaztelu-Urrutia",
    year: 2019,
    rating: 7.0
  },
  "jawan": {
    title: "Jawan",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000",
    description: "A high-octane action thriller that outlines the emotional journey of a man.",
    recommendations: ["Pathaan", "Tiger 3", "War"],
    director: "Atlee Kumar",
    year: 2023,
    rating: 7.9
  },
  "money heist": {
    title: "Money Heist",
    image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?auto=format&fit=crop&q=80&w=1000",
    description: "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in history.",
    recommendations: ["Lupin", "Prison Break", "Kaleidoscope"],
    year: 2017,
    rating: 8.2
  },
  "the lost city": {
    title: "The Lost City",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description: "A gripping adventure directed by Haris Sohail about explorers discovering an ancient civilization.",
    recommendations: ["Uncharted", "Jungle Cruise", "Tomb Raider"],
    director: "Haris Sohail",
    year: 2023,
    rating: 8.5
  },
  "echoes of destiny": {
    title: "Echoes of Destiny",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description: "A psychological thriller by Haris Sohail that explores the consequences of time travel.",
    recommendations: ["Inception", "Tenet", "Interstellar"],
    director: "Haris Sohail",
    year: 2022,
    rating: 8.8
  }
};