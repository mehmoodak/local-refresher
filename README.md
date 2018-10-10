# Local Refresher
This is a gulp script that can refresh the server when files of particular extensions changes inside the mentioned folder. Currently this script support change in following extensions
* .haml
* .css, .scss
* .js, .coffee
* .rb , .erb

## Instructions
1. Run `npm install` inside this folder.
2. Place your folder inside it on which you want to run the server.
3. Change `port` and `folder_name` on `gulpfile.js`.
4. Run `gulp` on `local-refresher`.
5. New tab will be automatically opened and now every change in the supported files auto refresh the server.

### Bonus Tip
You can also share the server across your local network (i.e. computers connected with same network for example same wifi). For that please use the `External URL` that appears on console.
