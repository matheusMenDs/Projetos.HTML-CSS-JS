const {response} = require ('express');

var HTPP = require('http');
var URL = require('url');
var mysql = require('mysql2');     

HTPP.createServer(

    function(req, res){

        res.setHeader("charset", "UTF-8");
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Sistema de controle de acesso</title>");
        res.write("</head>");


        /* Recuperando os dados que vieram do HTML */

        var querystring = url.parse(req.url, true).query;
        var Nome = querystring['Nome'];
        var Email = querystring['Email'];
        var Login = querystring['Login'];
        var Senha = querystring['Senha'];

        var SQL = "INSERT INTO sistema(Nome, Email) VALUES ('" + Nome + "', '" + Email + "', '" + Login + "''" + Senha + "' )";
        console.log(SQL);
        
        var mysql = require('mysql2');
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123321ma",
            database: "controle_acesso"
        });

        if (Nome != undefined && Email != undefined && Login != undefined && Senha != undefined) {
            con.connect(function(err){
                if(err) throw err;
                console.log("Conexao realizada com sucesso");
                
                var SQL = "INSERT INTO controle_acesso(Nome, Email, Login, Senha) VALUES ('";
                SQL = SQL + Nome +"','";
                SQL = SQL + Email +"','";
                SQL = SQL + Login +"','";
                SQL = SQL + Senha +"')'";

                con.query(SQL, function(err, result) {
                    if(err) throw err;
                    console.log("Dados inseridos com sucesso!");
                    });
            });
        }
        res.write("</body>");
        res.write("</html>");
    }
).listen(8080);