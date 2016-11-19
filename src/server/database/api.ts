import * as mysql from "mysql";
import {Promise} from "core-js";


export class API {

  private connection: mysql.IConnection;

  constructor(settings: mysql.IConnectionConfig){
    this.connection = mysql.createConnection(settings);
  }

  consultantsList(){
    return new Promise((resolve, reject) => {

      let sql:string = "SELECT cu.* FROM cao_usuario cu JOIN permissao_sistema ps ON ps.co_sistema = 1 AND ps.in_ativo = 'S' AND ps.co_tipo_usuario IN (0,1,2) AND ps.co_usuario = cu.co_usuario";

      let options: mysql.IQueryOptions = {
        sql: sql,
        nestTables: true
      };

      this.connection.query(options, function(err, rows, fields) {
        if (err){
          reject(err)
        }else{
          resolve(rows);
        }
      });

      this.connection.end();
    });
  }

}
