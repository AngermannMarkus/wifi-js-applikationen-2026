const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    getAppInfo: () => ipcRenderer.invoke('get-app-info'),

    sayHello: (name) => {
        return `Hallo ${name}!!`;
    }
});