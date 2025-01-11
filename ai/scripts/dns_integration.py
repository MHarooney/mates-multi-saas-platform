import requests

def update_dns(domain, ip_address):
    url = "https://api.godaddy.com/v1/domains/example.com/records"
    headers = {
        "Authorization": "sso-key YOUR_API_KEY",
        "Content-Type": "application/json"
    }
    payload = [
        {
            "data": ip_address,
            "name": "@",
            "ttl": 3600,
            "type": "A"
        }
    ]
    response = requests.put(url, headers=headers, json=payload)
    print(f"DNS updated: {response.json()}")

if __name__ == "__main__":
    update_dns("example.com", "192.168.1.1")
