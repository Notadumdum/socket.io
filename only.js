const socket = require('socket.io-client')('https://ws2.qxbroker.com/socket.io/')
 
socket.on('connect',() => {
    console.log('connected to the server')
 
})
 
socket.on('event',(data) => {
    socket.emit("authorization",JSON.stringify({"session":"dO3bGzuhruhrrrhruhurerettgtyty","isDemo":1}))
    socket.emit("tick")
    socket.emit("indicator/list")
    socket.emit("drawing/load")
    socket.emit("pending/list")
    socket.emit("instruments/update",JSON.stringify({"asset":"NZDUSD","period":60}))
    socket.emit("chart_notification/get")
    socket.emit("depth/follow","NZDUSD")
    socket.emit("settings/store",JSON.stringify({"chartId":"graph","settings":{"chartId":"graph","chartType":2,"currentExpirationTime":0,"isFastOption":false,"isFastAmountOption":false,"isIndicatorsMinimized":false,"isIndicatorsShowing":true,"isShortBetElement":false,"chartPeriod":4,"currentAsset":{"symbol":"NZDUSD"},"dealValue":1000,"dealPercentValue":1,"isVisible":true,"timePeriod":60,"gridOpacity":8,"isAutoScrolling":1,"isOneClickTrade":true,"upColor":"#0FAF59","downColor":"#FF6251"}}))
    console.log('event:' + data)
})
 
socket.on('disconnect',() => {
    console.log('disconnected from server')
})
