curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
unxz -c ffmpeg-release-amd64-static.tar.xz | tar xvf -
export PATH=$PATH:~/Guacamole/ffmpeg-4.4.1-amd64-static
