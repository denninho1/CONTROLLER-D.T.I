import subprocess
import time

servidor = "10.0.5.32"

while True:
    resposta = subprocess.run(
        ["ping", "-n", "1", servidor],
        stdout=subprocess.DEVNULL
    )

    if resposta.returncode == 0:
        print("Servidor ONLINE")
    else:
        print("Servidor OFFLINE")

    time.sleep(5)