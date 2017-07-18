# History

# Day 1: Version 0.0.1

First thing we'll do is install node, npm and git.

For OSX, download node [here](https://nodejs.org/en/) and install it.

Once installed, check that both node and npm are installed by typing the following into the terminal (or using Git Bash if you're unfortunate enough to use Windows ): ):

```
$ node -v
```
```
$ npm -v
```

Both should return numbers if installed properly. To install git, download the appropriate version [here](https://git-scm.com/downloads).

Again, double check that it was installed correctly:

```
$ git --version
```

Now we'll get started with downloading the code in this repo. In the terminal, navigate to your desired directory (cd into your folder: cd <foldername>) type the following:

```
$ git clone https://github.com/SWCrew/cache-journaling.git
```

You should now have access to your own local version of this repository. You should have a package.json file. 
If not, then once you are in this git repo, type the following command:

```
$ git checkout develop
```

Next, let's install all the stuff in our package.json:

```
$ npm i
```

That will download all the necessary packages that we'll be using for this project. Cool!

So that's all for today. See you guys next time.

# Day 2: Version 0.0.1

So won't update this just yet since we'll just be adding an express server

So now you may notice there are more things added to the develop branch!
Once you pull down these changes, type in the follow console command at the root of your project:

```
$ npm i
```

This should go ahead and install all the nifty new node modules we have. The next thing I recommend is installed nodemon so that you can host the server locally:

```
$ npm i nodemon -g
```

The -g is to ensure that you can call nodemon directly from the console. Once you have nodemon, we're ready to run our server. At the root of your project, go ahead and type this command:

```
$ nodemon index.js
```

You should get a message like the following:

```
Listening to server on port: 9000
```

That means the server is up and running. To test the server, let's go ahead and download [postman](https://www.getpostman.com/). Postman will allow you to directly query your server.

In postman, with your server running, go ahead and type the following URL:

```
http://localhost:9000/hello
```

This should get you a JSON file with a message. Cheers and happy coding!