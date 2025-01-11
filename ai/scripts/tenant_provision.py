import subprocess

def provision_tenant(tenant_name, domain):
    subprocess.run([
        'docker', 'exec', 'db', 'psql', '-U', 'user', '-d', 'mates_saas',
        '-c', f'CREATE DATABASE {tenant_name};'
    ])
    print(f"Tenant {tenant_name} provisioned with domain {domain}")

if __name__ == "__main__":
    provision_tenant("example_tenant", "example.com")
