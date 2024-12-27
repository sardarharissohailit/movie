from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Sample movie database with recommendations
MOVIES_DB = {
    "squid game": {
        "title": "Squid Game",
        "image": "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?auto=format&fit=crop&q=80&w=1000",
        "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games.",
        "recommendations": ["Alice in Borderland", "The Platform", "Battle Royale"]
    },
    "the platform": {
        "title": "The Platform",
        "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
        "description": "A vertical prison with one cell per level. Two people per cell. One only food platform.",
        "recommendations": ["Squid Game", "Cube", "Circle"]
    },
    "jawan": {
        "title": "Jawan",
        "image": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000",
        "description": "A high-octane action thriller that outlines the emotional journey of a man.",
        "recommendations": ["Pathaan", "Tiger 3", "War"]
    },
    "money heist": {
        "title": "Money Heist",
        "image": "https://images.unsplash.com/photo-1601024445121-e294d33f47db?auto=format&fit=crop&q=80&w=1000",
        "description": "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in history.",
        "recommendations": ["Lupin", "Prison Break", "Kaleidoscope"]
    }
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = []
    
    for movie_id, movie in MOVIES_DB.items():
        if query in movie_id:
            results.append(movie)
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)