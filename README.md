# Local Refresher
This is a gulp script that can refresh the server when files of particular extensions changes inside the mentioned folder. Currently this script support change in following extensions
* .haml
* .css, .scss
* .js, .coffee
* .rb , .erb

## Instructions
Prerequisites are `node` and `npm` so kindly install them first.

1. Run `npm install` inside this `local-refresher`.
2. Place your folder inside `local-refresher`. This is the folder that represents your files which will host on local server.
3. In `gulpfile.js` change `server_address` to your `running server address` and `folder_name` to your folder that you place inside `local-refresher`.
4. Run `gulp` on `local-refresher`.
5. New tab will be automatically opened and now every change in the supported files extensions will auto refresh the server.

### Bonus Tip
You can also share the server across your local network (i.e. computers connected with same network for example same wifi). For that please use the `External URL` that appears on console.
