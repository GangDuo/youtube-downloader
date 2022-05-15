const fs = require('fs');
const ytdl = require('ytdl-core');

const YID = '';

ytdl(`http://www.youtube.com/watch?v=${YID}`)
  .pipe(fs.createWriteStream(`${YID}.mp4`));