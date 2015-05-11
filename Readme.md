# Introduction to Angular 2 #

First clone the repo on your desktop for example, and navigate to the folder:

	cd ~/Desktop && git clone git@github.com:aminmeyghani/ng2-intro.git && cd ng2-intro
	
Next, install some global dependencies with npm:

	npm install ts tsd typescript@^1.5.0-beta http-server -g
	
NOTE: use `sudo` if you have to, but if you run the following, you won't ever need to use `sudo` to use npm:

	sudo chown -R `whoami` ~/.npm && sudo chown -R `whoami` /usr/local/lib/node_modules

then install the local dependencies:

	npm install

Now, you have all the dependencies. You just need to open two terminal windows, the first for running the compiler, and the second for serving the files. In the first command window start the compiler with `npm start`. In the second window start a basic server with `http-server . -p 5000`. Then go to `http://localhost:5000` and you should be all set.