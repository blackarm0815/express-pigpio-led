## install stuff

> sudo apt install -y tmux git nginx nodejs npm

tmux - runs the api even after ssh disconnects

git - for pulling the software repo

nginx - lightweight web server for handling the web pages

nodejs - runs javascript on the server

npm - node package manager for handling dependencies


## pull this repo
> git clone https://github.com/blackarm0815/express-pigpio-led.git
> cd express-pigpio-led

## install node dependencies
> npm install


## compile and install pigpio

wget https://github.com/joan2937/pigpio/archive/master.zip

unzip master.zip 

cd pigpio-master/

make

sudo make install


## edit the index.html file with nano and update the ip address in serverIpAddress (ctrl x to exit)
> nano index.html

## put the web content into place

> sudo cp -r html/* /var/www/html

## start a tmux session
> tmux new -s api

## start the node api in tmux as root
> sudo node api.js

## detach the tmux session (ctrl-b then d)

## list running tmux sessions
> tmux ls

## reattach the tmux session
> tmux attach -t api

put the raspberry ip address in a browser followed

move the slider on the webpage and the led should change