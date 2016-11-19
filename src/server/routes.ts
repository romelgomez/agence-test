import * as path from "path" // normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import express = require('express');
import * as database from "./database/api";


export class Routes {

  protected basePath: string;

  protected api: database.API;

  constructor(NODE_ENV: string){

    switch(NODE_ENV) {
      case 'production':
        this.basePath = '/dist';
        break;
      case 'development':
        this.basePath = '/public';
        break;
    }

    this.api = new database.API({
      host     : 'localhost',
      user     : 'root',
      password : '1',
      database : 'agence'
    });

  }

  defaultRoute(req: express.Request, res: express.Response){
    res.sendFile('index1.html', {root: path.join(process.cwd(), this.basePath)});
  }

  paths(app: express.Application) {

    app.get('/', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

    app.get('/consultants-list',(req: express.Request, res: express.Response)=>{

        this.api.consultantsList()
          .then((result)=>{
            res.send(result);
          })
          .catch((err)=>{
            res.redirect('/error');
          })

    });

    app.get('/error', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });


  }

}
