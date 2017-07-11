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
