import requests

def deploy_system(tenant_id, system_type):
    url = f"http://localhost:8000/api/tenants/{tenant_id}/systems/deploy"
    payload = {"system_type": system_type}
    response = requests.post(url, json=payload)
    print(f"System deployed: {response.json()}")

if __name__ == "__main__":
    deploy_system(1, "lms")
