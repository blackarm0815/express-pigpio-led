
Starting Nmap 7.92 ( https://nmap.org ) at 2025-02-15 15:43 GMT
Nmap scan report for 192.168.1.66
Host is up (0.11s latency).

PORT   STATE    SERVICE
22/tcp filtered ssh
MAC Address: 3E:ED:75:8E:D5:47 (Unknown)

Nmap scan report for 192.168.1.68
Host is up (0.076s latency).

PORT   STATE  SERVICE
22/tcp closed ssh
MAC Address: A0:8C:FD:88:45:30 (Hewlett Packard)

Nmap scan report for 192.168.1.127
Host is up (0.36s latency).

PORT   STATE SERVICE
22/tcp open  ssh
MAC Address: 1C:BF:CE:E5:EC:99 (Shenzhen Century Xinyang Technology)

Nmap scan report for _gateway (192.168.1.254)
Host is up (0.0033s latency).

PORT   STATE    SERVICE
22/tcp filtered ssh
MAC Address: 04:70:56:99:25:9E (Unknown)

Nmap scan report for blackbox (192.168.1.244)
Host is up (0.000054s latency).

PORT   STATE  SERVICE
22/tcp closed ssh



# simple_node_api


## install the 64 bit version of raspberry pi os


update
> sudo apt update && sudo apt upgrade

enable ssh (Interface options > ssh > yes)
> sudo raspi-config


find the raspberry pi ip addess and take a note of install (look under the wlan0 part)
> ifconfig

## ssh in and work remotely from this point



   82  wget https://github.com/joan2937/pigpio/archive/master.zip
   83  unzip master.zip 
   84  cd pigpio-master/
   85  make
   86  sudo make install




install stuff
> sudo apt install -y tmux git nginx nodejs npm vorbis-tools

tmux - runs the api even after ssh disconnects
git - for pulling the software repo
nginx - lightweight web server for handling the web pages
nodejs - runs javascript on the server
npm - node package manager for handling dependencies
vorbis-tools - can play audio files on the command line

pull this repo
> git clone https://github.com/blackarm0815/simple_node_api.git
> cd simple_node_api

install node dependencies
> npm install

edit the index.html file with nano and update the ip address in serverIpAddress (ctrl x to exit)
> nano index.html

put the web content into place

> sudo cp -r html/* /var/www/html

start a tmux session
> tmux new -s api

start the node api in tmux
> node api.js

detach the tmux session (ctrl-b then d)

list running tmux sessions
> tmux ls

reattach the tmux session
> tmux attach -t api

put the raspberry ip address in a browser followed

interact with the html elements and watch the tmux output