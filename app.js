var express = require('express');
var webot = require('weixin-robot');

var app = express();

webot.set('hi', '���');

webot.watch(app, { token: 'mOxIgAnDrCampain', path: '/wechat' });

app.listen(80);