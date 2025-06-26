from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def getdata():
    url = 'https://codolio.com/profile/Aaditya/card'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
    }

    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        return {'error': f"Request failed with status code {response.status_code}"}

    soup = BeautifulSoup(response.content, 'html.parser')
    spans = soup.find_all('span', class_='block text-4xl text-center')
    values = [span.get_text(strip=True) for span in spans]

    if len(values) >= 4:
        return {
            'Total Questions': int(values[0]),
            'Total Days': int(values[1]),
            'Active Days': int(values[2]),
            'Total Contributions': int(values[3])
        }
    else:
        # Optional: log response HTML for debugging
        with open("debug_response.html", "w", encoding="utf-8") as f:
            f.write(response.text)
        return {'error': 'Failed to extract all data. Check HTML structure.'}

@app.route('/')
def scrape_and_return():
    data = getdata()
    return jsonify(data)