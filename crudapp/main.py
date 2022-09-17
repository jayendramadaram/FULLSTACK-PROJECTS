import requests
import json

urls = {
    "auth": ["/auth/Signup", "/auth/Login", "/auth/forgotPwd", "/auth/verifyOTP", "/auth/hehe"]
}


headers = {}
Body = {}
UserBody = {
    "email": "obitouchiha@gmail.com",
    "password": "thatscool",
    "Firstname": "TheGhost"
}
OTP = {
    "OTP": 619591,
    "email": "obitouchiha@gmail.com",
}

resp = requests.post(
    url=f"http://localhost:3000{urls['auth'][4]}", data=OTP)


print(resp.text, resp.status_code, sep="\t")
