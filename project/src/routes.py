"""Route handlers for the application"""
from flask import jsonify, request, render_template
from .data.movies import search_movies

def register_routes(app):
    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/search')
    def search():
        query = request.args.get('q', '')
        results = search_movies(query)
        return jsonify(results)