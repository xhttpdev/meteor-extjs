#!/usr/bin/env node

// This script scans the image directory for images and generates a list to be copied to the package.js.

var fs = require('fs');
var path = require('path');

var imageExtnames = [
  '.png',
  '.gif',
  '.jpg'
];

var scanImages = function (results, currentPath) {
  var filenames = fs.readdirSync(currentPath);
  for (var i = 0, n = filenames.length, filename, fullPath, stat; i < n; i++) {
    filename = filenames[i];
    fullPath = path.join(currentPath, filename);
    stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanImages(results, fullPath);
    } else {
      if (imageExtnames.indexOf(path.extname(filename)) != -1) {
        results.push(fullPath);
      }
    }
  }
};

var results = [];
scanImages(results, 'extjs-5.1.1/resources/images');
console.log(results);
