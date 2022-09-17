import requests
import json

urls = {
    "auth": ["/auth/Signup", "/auth/Login"]
}


headers = {}
Body = {}
UserBody = {
    "email": "obitouchiha@gmail.com",
    "password": "thatscool",
    "Firstname": "TheGhost"
}

resp = requests.post(
    url=f"http://localhost:3000{urls['auth'][1]}", data=UserBody)


print(resp.text, resp.status_code, sep="\t")
