# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import requests
import json

hostName = "localhost"
serverPort = 4201


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        remote_uri = "https://np.ironhelmet.com/api"
        params = {
            "game_number": "4609009191223296",
            "code": "z8gm9N",
            "api_version": "0.1"
        }
        payload = requests.post(remote_uri, params)

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(bytes(payload.text, "utf-8"))


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
