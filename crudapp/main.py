import requests
import json

urls = {
    "auth": ["/auth/Signup", "/auth/Login", "/auth/forgotPwd", "/auth/verifyOTP", "/auth/hehe"],
    "user": ["/user/me", "/user/edit"],
    "saved": ["/saved-post"]
}


headers = {}
Body = {}
UserBody = {
    "email": "dimebeatengreen8@gmail.com",
    "password": "thatscool",
    "FirstName": "TheGhost"
}
OTP = {
    "OTP": 480525,
    "email": "dimebeatengreen8@gmail.com",
}

resp = requests.get(
    url=f"http://localhost:3000{urls['saved'][0]}", data=UserBody, headers={
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJpYXQiOjE2NjM0NDY5OTcsImV4cCI6MTY2MzUzMzM5N30.bdQp6LpxD-0Dx_fq8Lyy5pDO4J-yfcKaCuNR6RcF8vI"
    })


print(resp.text, resp.status_code, sep="\t")
