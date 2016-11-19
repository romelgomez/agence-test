"use strict";
var mysql = require("mysql");
var core_js_1 = require("core-js");
var API = (function () {
    function API(settings) {
        this.connection = mysql.createConnection(settings);
    }
    API.prototype.consultantsList = function () {
        var _this = this;
        return new core_js_1.Promise(function (resolve, reject) {
            var sql = "SELECT cu.* FROM cao_usuario cu JOIN permissao_sistema ps ON ps.co_sistema = 1 AND ps.in_ativo = 'S' AND ps.co_tipo_usuario IN (0,1,2) AND ps.co_usuario = cu.co_usuario";
            var options = {
                sql: sql,
                nestTables: true
            };
            _this.connection.query(options, function (err, rows, fields) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
            _this.connection.end();
        });
    };
    return API;
}());
exports.API = API;
