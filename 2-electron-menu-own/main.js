const { app, BrowserWindow, globalShortcut, dialog, Menu, MenuItem } = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    globalShortcut.register('CommandOrControl+Alt+K', () => {
        dialog.showMessageBox({
            type: 'info',
            message: 'Success!',
            detail: 'You pressed the registered global shortcut keybinding.',
            buttons: ['OK']
        });
    });
};

const template = [
    {
        label: 'Edit',
        submenu: [
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                type: 'separator'
            },
            {
                role: 'undo'
            },
            {
                role: 'redo'
            }
        ]
    },
    {
        label: 'View-test',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.on('ready', createWindow);

app.on('will-quit', function () {
    globalShortcut.unregisterAll();
});