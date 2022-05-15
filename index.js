const fs = require('fs');
const ytdl = require('ytdl-core');
const { exec } = require('child_process');

const YID = '';

const video = ytdl(`http://www.youtube.com/watch?v=${YID}`);
video.pipe(fs.createWriteStream(`${YID}.mp4`));
video.on('end', () => {
  exec(`ffmpeg -y -i ${YID}.mp4 ${YID}.mp3`, (error, stdout, stderr) => {
    if(error) {
      console.error(error)
      return
    }
    console.log(stdout)
    console.log(stderr)
  })
})