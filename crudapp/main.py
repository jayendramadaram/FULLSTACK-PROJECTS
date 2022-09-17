import requests
import json

urls = {
    "auth": ["/auth/Signup"]
}
headers = {}
Body = {}
UserBody = {}

resp = requests.post(url=f"http://localhost:3000{urls['auth'][0]}", )


print(resp.text, resp.status_code, sep="\t")
