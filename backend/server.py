from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper import scrape_instagram_stats
import os

app = Flask(__name__)
CORS(app)

@app.route("/get_statistics", methods=["GET"])
def get_statistics():
    username = request.args.get("username")
    if not username:
        return jsonify({"error": "Username is required"}), 400
    try:
        data = scrape_instagram_stats(username)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/config", methods=["GET"])
def get_config():
    return jsonify({
        "googleClientId": os.getenv("GOOGLE_CLIENT_ID", "")
    })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)


