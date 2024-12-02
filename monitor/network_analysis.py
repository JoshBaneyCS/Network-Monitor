import psutil
import requests
import time

API_URL = "http://localhost:6969/api/network"

def monitor_network():
    stats = psutil.net_io_counters()
    data = {
        "bytes_sent": stats.bytes_sent,
        "bytes_recv": stats.bytes_recv,
    }
    requests.post(API_URL, json=data)

if __name__ == "__main__":
    while True:
        monitor_network()
        time.sleep(5)
