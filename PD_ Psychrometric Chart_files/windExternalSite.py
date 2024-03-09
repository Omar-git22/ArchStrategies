import requests
from bs4 import BeautifulSoup

# URL of the external website
url = "https://wind-data.ch/tools/profile.php?h=10&v=3&z0=0.5&abfrage=To+update"

# Variables you want to enter into the input boxes
variable1 = "value1"
variable2 = "value2"
variable3 = "value3"

# Send HTTP GET request
response = requests.get(url)

# Parse HTML content
soup = BeautifulSoup(response.text, "html.parser")

# Find input boxes by their attributes or CSS selectors
input_box1 = soup.find("input", {"name": "h"})
input_box2 = soup.find("input", {"name": "v"})
input_box2 = soup.find("input", {"name": "z0"})

# Fill in the input boxes with variables
input_box1["value"] = variable1
input_box2["value"] = variable2
input_box2["value"] = variable3

# Submit form (if needed)
# form = soup.find('form')
# submit_button = form.find('input', {'type': 'submit'})
# submit_button.click() # This is just a pseudo code, actual implementation may vary

# Print modified HTML content (optional)
# print(soup)

# You can then post this modified HTML content back to your server or use it as needed
