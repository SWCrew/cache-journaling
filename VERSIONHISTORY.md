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

# Day 2: Version 0.1.0

Cool, so for this part, we will keep expanding our routes by adding more CRUD operation routes as well as learn a bit on how to test them. To get started, we'll want to install all the new libraries listed in our package.json by calling npm i in the command line:

```
$ npm i
```
Upon further investigation of the package.json, we'll notice that there is a scripts field and one of them now is test key in scripts:

```javascript
...
"scripts": {
  "lint": "eslint .",
  "start": "node index.js",
  "test": "mocha ./test && eslint ."
}
...
```

These are basically quick ways to use npm to run these commands in the sequence you desire. So once everything is finished installing we'll run the following command in the CLI: 

```
$ npm run test
```

This will then run the command line script 'mocha ./test && eslint .' Basically, it's calling our mocha framework to go ahead and begin running the tests described in our test folder and then will run eslint on the entire directory to ensure we're keeping the code conformed to our eslint rules as set by our .eslintrc file.

You'll notice that when you run test, a bunch of letters/numbers will fly by. Assuming everything goes right, they should all be green (so I made sure all the tests pass).

Let's quickly turn aside to the routes file:

```javascript
app
  .get('/hello', function (req, res, next) {
    res.send({ message: 'hello world' })
  })
  .post('/hello', bodyParser, function (req, res, next) {
    res.send({ message: 'got it', original: req.body })
  })
  .put('/hello', bodyParser, function (req, res, next) {
    res.send({ message: 'got the update', original: req.body })
  })
  .delete('/hello/:id', bodyParser, function (req, res, next) {
    res.send({ message: `ok, will delete right away: ${req.params.id}` })
  })
```

 Notice that we have post, put, and delete all chained together after calling get. This basically means that whenever we make an http request with those methods, the route will match the route with the proper method. I recommend looking up server CRUD operations (acronym for Create, Read, Update, Delete) but basically on a server, you want to limit what the user can do on the client side of things so you are setting what methods are initially allowed. Really recommend looking at the [express docs](http://expressjs.com/en/api.html) when you get a chance for understanding how these routes work. The overall idea is that for a site, you want to create things (like new user accounts), get information, update information, or even delete things. Here we designate the routes and then set the methods we want so the user has little control over this process.

Next, let's turn to our test file (app.test.js):

```javascript
const app = require('../lib/app')
const fetch = require('node-fetch')
const assert = require('assert')
const http = require('http')

describe('app route', function () {
  let port = 9000
  let server
  let url = `http://localhost:${port}`

  before(function () {
    server = http.createServer(app)
    server.listen(port)
  })

  after(function () {
    server.close.bind(server)
    server.close()
  })
...
```

So a couple of things to note here, we are bringing in new libraries for which we'll use to test the new route. Because our route is fairly modular, before we begin testing, we can bring it into the test file and create a local server here in the test file which will then listen to port 9000. Then we can create a url that we'll query using the fetch library. Take a look at the tests and come back with questions.

