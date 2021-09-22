count = 0;
while (count < 100) {
  const animation = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ '];
  for (let frame of animation) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, count * 200)
    count ++;
  }
}

