const { app, BrowserWindow } = require('electron')


app.whenReady().then(() => {

    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        icon: "./assets/icon.png"
    })

    win.loadURL('https://calendar.google.com');

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})