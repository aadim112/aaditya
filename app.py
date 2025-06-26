from flask import Flask,jsonify
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route('/')
def scrape_and_return():
    url = 'https://codolio.com/profile/Aaditya/card'
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Get all <span> elements with the target class
    spans = soup.find_all('span', class_='block text-4xl text-center')
    values = [span.get_text(strip=True) for span in spans]

    # Check if we have all 4 values
    if len(values) >= 4:
        formatted_output = {
            'Total Questions': int(values[0]),
            'Total Days': int(values[1]),
            'Active Days': int(values[2]),
            'Total Contributions': int(values[3])
        }

    else:
        formatted_output = "Failed to extract all data."

    return jsonify(formatted_output)

if __name__ == '__main__':
    app.run(debug=True)
