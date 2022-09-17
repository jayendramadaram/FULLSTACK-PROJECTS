import requests
import json

urls = [
    "/auth/Signup"
]
headers = {}
Body = {}

resp = requests.get(url=f"http://localhost:3000{urls[0]}")
print(resp.text, resp.status_code, sep="\t")
