var express = require('express'),
	app = express(),
	fs = require('fs'),
	multipart = require('connect-multiparty'),
	multipartMiddleware = multipart(),
	PORT = 3000,
	localPath = './uploads/',
	serverPath = '/uploads';

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(localPath, express.static(__dirname + localPath));

app.post(serverPath, multipartMiddleware, function(req, res) {
	var file = req.files.file;
	fs.rename(file.path, localPath + file.name, function(err) {
		if (err) throw err;
		res.send({path: serverPath + '/' + file.name});
	});
});

app.listen(PORT);

console.log('Server started on port %s', PORT);