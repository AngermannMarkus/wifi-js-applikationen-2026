const output = document.getElementById('output');
const helloButton = document.getElementById('helloButton');
const infoButton = document.getElementById('infoButton');
const nameInput = document.getElementById('name');

helloButton.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'WIFI';
    output.textContent = window.electronAPI.sayHello(name);
});

infoButton.addEventListener('click', async () => {
    output.textContent = 'Lade Infos...';

    const info = await window.electronAPI.getAppInfo();
    output.textContent = `Betriebssystem: ${info.platform}, App-Name: ${info.appname}`;
});