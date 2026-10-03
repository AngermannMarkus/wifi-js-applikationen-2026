const information = document.getElementById('info');
information.innerText = `Node Version: v${versions.node()} Chrome Version: v${versions.chrome()} Electron Version: v${versions.electron()}`;