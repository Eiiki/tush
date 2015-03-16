
/* lexical grammar */
%lex
%%

\s+                        /* skip whitespace */
^\#.*                      /* skip comments */ 
"not"                      return 'NOT';
"!"                        return 'NOT';
"or"                       return 'OR';
"||"                       return 'OR';
"and"                      return 'AND';
"&&"                       return 'AND';
"var"                      return 'VAR';
"def"                      return 'FUNDECL';
"while"                    return 'WHILE';
"if"                       return 'IF';
"elsif"                    return 'ELSIF';
"else"                     return 'ELSE';
"end"                      return 'END';
";"                        return 'DECLEND';
"return"                   return 'RETURN';
"true"                     return 'TRUE';
"false"                    return 'FALSE';
"null"                     return 'NULL';
"<="                       return '<=';
">="                       return '>=';
"<"                        return '<';
">"                        return '>';
"=="                       return '==';
"*"                        return '*';
"/"                        return '/';
"-"                        return '-';
"+"                        return '+';
"++"                       return '++';
"%"                        return '%';
"="                        return '=';
"("                        return '(';
")"                        return ')';
","                        return ',';
\"[^\"]*\"                 return 'STRING';
[0-9]+("."[0-9]+)?\b       return 'NUMBER';
[A-Za-z]+([0-9A-Za-z])*\b  return 'NAME';
<<EOF>>                    return 'EOF';
.                          return 'INVALID';

/* " */


/lex
%token FUNDECL
%token VAR
%token WHILE
%token IF
%token ELSIF
%token ELSE
%token RETURN
%token TRUE
%token FALSE
%token NULL
%token NAME
%token NUMBER
%token STRING
%token END
%token EOF
/* operator associations and precedence */

%right RETURN
%left NOT
%left OR
%left AND
%left '<' '>' '<=' '>=' '=='
%left '++'
%left '+' '-'
%left '*' '/'
%right '='
%right '%'
%left UMINUS

%start program

%% 
/* language grammar */

program
   :  functions EOF
      %{
         generateCode();
      %}
   ;

functions: 
      functions fundecl
      %{

      %}
   |  fundecl
      %{
         
      %}
   ;

fundecl:
      FUNDECL NAME '(' optnames ')' optdecls exprs END
      %{
         var funcName = $2;
         //functions are kept as a dictionary objects
         functions[funcName] = {
            args : $4,
            decls : $6,
            exprs : $7
         };
      %}
   ;

optdecls:  
      %{  /* Optional declerations are optional */
         $$ = [];  
      %}
   |  decls
   ;

decls: 
      decls decl DECLEND
      %{
         for(var i = 0; i < $2.length; i++){
            $1.push($2[i]);
         }
         $$ = $1;
      %}
   |  decl DECLEND
      %{
         $$ = $1;
      %}
   ;

decl
   :  VAR names
      %{
         $$ = $2;
      %}
   ;

optnames:  
      %{  /* Optional names are optional */
         $$ = [];  
      %}
   |  names
   ;

names: 
      names ',' NAME
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  NAME
      %{
         $$ = [$1];
      %}
   ;

exprs: 
      exprs expr DECLEND
      %{
         $1.push($2);
         $$ = $1;
      %}
   |  expr DECLEND
      %{
         $$ = [$1];
      %}
   ;

optexprs:  
      %{  /* Optional expressions are optional */
         $$ = [];
      %}
   |  exprlist
   ;

exprlist: 
      exprlist ',' expr
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  expr
      %{
         $$ = [$1];
      %}
   ;

expr: 
      NAME '=' expr           { $$ = {type: "STORE", name: $1, val: $3}; }
   |  NAME '(' optexprs ')'   { $$ = {type: "CALL",  name: $1, exprs: $3}; }
   |  expr '+' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '++' expr          { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '-' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '*' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '/' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '%' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '<' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '>' expr           { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '<=' expr          { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '>=' expr          { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  expr '==' expr          { $$ = {type: "CALL",  name: $2, exprs: [$1, $3]}; }
   |  NAME                    { $$ = {type: "FETCH", name: $1}; }
   |  RETURN expr             { $$ = {type: "RETURN",  val: $2}; }
   |  NUMBER                  { $$ = {type: "LITERAL", val: $1}; }
   |  STRING                  { $$ = {type: "LITERAL", val: $1}; }
   |  TRUE                    { $$ = {type: "LITERAL", val: $1}; }
   |  FALSE                   { $$ = {type: "LITERAL", val: $1}; }
   |  NULL                    { $$ = {type: "LITERAL", val: $1}; }
   |  '(' expr ')'            { $$ = {type: "()",      val: $2}; }
   |  ifexpr
   |  WHILE '(' expr ')' body END   { $$ = {type: "WHILE", cond: $3, body: $5}; }
   ;

ifexpr: 
      IF '(' expr ')' body optelsifs optelse END 
      %{
         var bodies = [$5];
         var conds = [$3];
         var elsebodies = $7;
         hasElse = false;

         bodies = bodies.concat($6.bodies);
         if(elsebodies.length > 0){
            bodies = bodies.concat($7);
            hasElse = true;
         }
         conds = conds.concat($6.conds);
         $$ = {
            type: "IF",
            conds: conds,
            bodies: bodies,
            hasElse: hasElse
         };
      %}
   ;

optelsifs:  
               { $$ = {bodies: [], conds: []}; }
   | elsifs    { $$ = $1; }
   ;

elsifs: 
      elsifs elsif
      %{
         $1.bodies = $1.bodies.concat($2.bodies);
         $1.conds = $1.conds.concat($2.conds);
         $$ = $1;
      %}
   |  elsif { $$ = $1; }
   ;

elsif: 
   ELSIF '(' expr ')' body    { $$ = {bodies: [$5], conds: [$3]}; } 
   ;

optelse:  
                  { $$ = []; }
   | ELSE body    { $$ = [$2]; }
   ;

body
   : exprs  { $$ = {type: "BODY", exprs: $1}; }
   ;

%%

var functions = {};
//var vars = {}; //will use for micro-morpho
//var exprs = {}; //will use for micro-morpho

var programName = "test";
if(this.process !== undefined){
   var fs = require('fs');
   var emittedProgram = [];
   var emit = function(x){
      emittedProgram.push(x.toString());
   };
   var argv = this.process.argv;
   programName = argv[argv.length - 1].split(".")[0];
} else {
   emit = window.emit;
}

var log = function(val){
   if(this.process !== undefined){
      console.log(val);
   }
}

var nextLab = 1;
var ID = 0;
var varTable = {};
var newLab = function(){
   return nextLab++;
}

var newID = function(){
   return ID++;
}

var generateExpr = function(expr){
   var type = expr.type;

   if(!type){
      return;
   }
   else if(type === "STORE"){
      generateExpr(expr.val);
      emit('(Store '+varTable[expr.name]+')');
   }
   else if(type === "CALL"){
      for(var n = 0; n < expr.exprs.length; n++){
         generateExpr(expr.exprs[n]);
         if(n+1 !== expr.exprs.length)
            emit('(Push)');
      }
      emit('(Call #"'+expr.name+'[f'+expr.exprs.length+']" '+expr.exprs.length+')');

   }
   else if(type === "FETCH"){
      emit('(Fetch '+varTable[expr.name]+')');
   }
   else if(type === "LITERAL"){
      emit('(MakeVal '+expr.val+')');
   }
   else if(type === "()"){
      generateExpr(expr.val);
   }
   else if(type === "IF"){
      var conds = expr.conds;
      var bodies = expr.bodies;
      var startLabel = newLab();
      var endLabel = startLabel+conds.length;

      for(var n = 0; n < conds.length; n++){
         var nextLab = parseInt(newLab() - 1);
         generateExpr(conds[n]);
         emit('(GoFalse _L'+nextLab+')');
         generateExpr(bodies[n]);
         emit('(Go _L'+endLabel+')');
         emit('_L'+nextLab+':');
      }
      if(expr.hasElse){
         generateExpr(bodies[bodies.length - 1]);
      }else{
         emit('(MakeVal null)');
      }
      emit('_L'+endLabel+':');
   }
   else if(type === "RETURN"){
      generateExpr(expr.val);
      emit('(Return)');
   }
   else if(type === "WHILE"){
      var startLab = newLab();
      var nextLab = newLab();

      emit('_L'+startLab+':');
      generateExpr(expr.cond);
      emit('(GoFalse _L'+nextLab+')');
      for(var n = 0; n < expr.body.exprs.length; n++){
         generateExpr(expr.body.exprs[n]);
      }
      emit('(Go _L'+startLab+')');
      emit('_L'+nextLab+':');
   }
   else if(type === "BODY"){
      for(var n = 0; n < expr.exprs.length; n++){
         generateExpr(expr.exprs[n]);
      }
   }
};

var generateDecl = function(decl){
   varTable[decl] = newID();
   emit('(Push)');
};

var generateFunction = function(name, func){
   ID = 0;
   varTable = {};
   var args = func.args;
   var decls = func.decls;
   var exprs = func.exprs;

   emit('#"'+name+'[f'+args.length+']"=');
   emit('[');
   for(var n = 0; n < args.length; n++){
      varTable[args[n]] = newID();
   }
   for(var n = 0; n < decls.length; n++){
      if(n === 0)
         emit('(MakeVal null)');
      generateDecl(decls[n]);
   }
   for(var n = 0; n < exprs.length; n++){
      generateExpr(exprs[n]);
   }
   emit('(Return)');
   emit('];');
};

var generateCode = function(){
   nextLab = 1;
   emit('"'+programName+'.mexe" =');
   emit('!{{');
   for(n in functions){
      var func = functions[n];
      generateFunction(n, func);
   }
   emit('}}*BASIS;');
   if(this.process !== undefined){
      for(var n = 0; n < emittedProgram.length; n++){
         console.log(emittedProgram[n]);
      }
   }
};

