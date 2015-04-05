// Made by Eirikur Ingi Magnusson, eim5@hi.is

/* lexical grammar */
%lex
%%

\s+                        /* skip whitespace */
^\#.*                      /* skip comments */ 
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
"not"                      return 'NOT';
"!"                        return 'NOT';
"or"                       return 'OR';
"||"                       return 'OR';
"and"                      return 'AND';
"&&"                       return 'AND';
"<="                       return '<=';
">="                       return '>=';
"<"                        return '<';
">"                        return '>';
"=="                       return '==';
"++"                       return '++';
"*"                        return '*';
"/"                        return '/';
"-"                        return '-';
"+"                        return '+';
"%"                        return '%';
"="                        return '=';
"("                        return '(';
")"                        return ')';
"["                        return '[';
"]"                        return ']';
","                        return ',';
\"[^\"]*\"                 return 'STRING';
[0-9]+("."[0-9]+)?\b       return 'NUMBER';
[A-Za-z]+([0-9A-Za-z])*\b  return 'NAME';
<<EOF>>                    return 'EOF';
.                          return 'INVALID';

/* " */


/lex
%token FUNDECL
%token NOT
%token OR
%token AND
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
         generateProgram();
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
      FUNDECL NAME '(' optargs ')' optdecls exprs END
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

names:
      names ',' nameoptval
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  nameoptval
      %{
         $$ = [$1];
      %}
   ;

nameoptval:
      NAME              { $$ = {decl: $1, val: null }; }
   |  NAME '=' expr     { $$ = {decl: $1, val: $3 }; }
   ;

optargs: 
      %{  /* Optional arguments are optional */
         $$ = [];
      %}
   |  argsnodecl                    { $$ = { nodecls: $1, decls: [] }; }
   |  argswithdecl                  { $$ = { nodecls: [], decls: $1 }; }
   |  argsnodecl ',' argswithdecl   { $$ = { nodecls: $1, decls: $3 }; }
   ;

argsnodecl:
      argsnodecl ',' argnodecl
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  argnodecl
      %{
         $$ = [$1];
      %}
   ;

argswithdecl:
      argswithdecl ',' argwithdecl
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  argwithdecl
      %{
         $$ = [$1];
      %}
   ;

argnodecl:
      NAME              { $$ = { name: $1, val: null }; }
   ;

argwithdecl:
      NAME '=' NUMBER   { $$ = { name: $1, val: $3   }; }
   |  NAME '=' TRUE     { $$ = { name: $1, val: $3   }; }
   |  NAME '=' FALSE    { $$ = { name: $1, val: $3   }; }
   |  NAME '=' NULL     { $$ = { name: $1, val: $3   }; }
   |  NAME '=' STRING   { $$ = { name: $1, val: $3   }; }
   ;

exprs: 
      exprs someexpr
      %{
         $1.push($2);
         $$ = $1;
      %}
   |  someexpr
      %{
         $$ = [$1];
      %}
   ;

someexpr:
      expr DECLEND
      %{
         $$ = $1;
      %}
   |  ifexpr
      %{
         $$ = $1;
      %}
   |  whileexpr
      %{
         $$ = $1;
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

list:
      '[' ']'              { $$ = null; }
   |  '[' listelements ']' { $$ = $2;   }
   ;

listelements:
     listelements ',' listelement
      %{
         $1.push($3);
         $$ = $1;
      %}
   |  listelement
      %{
         $$ = [$1];
      %}
   ;

listelement:
      expr  { $$ = $1; } 
   ;

expr: 
      NAME '=' expr           { $$ = {type: "STORE",    name: $1, val: $3}; }
   |  NAME '(' optexprs ')'   { $$ = {type: "CALLFUNC", name: $1, exprs: $3 }; }
   |  expr '+' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '++' expr          { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '-' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '*' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '/' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '%' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  '-' expr %prec UMINUS   { $$ = {type: "CALLOP",   name: $1, exprs: [$2] }; }
   |  expr '<' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '>' expr           { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '<=' expr          { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '>=' expr          { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr '==' expr          { $$ = {type: "CALLOP",   name: $2, exprs: [$1, $3] }; }
   |  expr AND expr           { $$ = {type: "AND",      exprs: [$1, $3]}; }
   |  expr OR expr            { $$ = {type: "OR",       exprs: [$1, $3]}; }
   |  NOT expr                { $$ = {type: "NOT",      val: $2}; }
   |  NAME                    { $$ = {type: "FETCH",    name: $1}; }
   |  RETURN expr             { $$ = {type: "RETURN",   val: $2}; }
   |  NUMBER                  { $$ = {type: "LITERAL",  val: $1}; }
   |  STRING                  { $$ = {type: "LITERAL",  val: $1}; }
   |  TRUE                    { $$ = {type: "LITERAL",  val: $1}; }
   |  FALSE                   { $$ = {type: "LITERAL",  val: $1}; }
   |  NULL                    { $$ = {type: "LITERAL",  val: $1}; }
   |  list                    { $$ = {type: "LIST",     val: $1 }; }
   |  '(' expr ')'            { $$ = {type: "()",       val: $2}; }
   ;

whileexpr:
      WHILE '(' expr ')' body END   { $$ = {type: "WHILE", cond: $3, body: $5}; }
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
var emit;
var errConstruct;
var errMessage;
if(this.process !== undefined){
   var fs = require('fs');
   var emittedProgram = [];
   emit = function(code){
      emittedProgram.push(code.toString());
   };
   errConstruct = function(code){
      errMessage = code;
   };
   var argv = this.process.argv;
   programName = argv[argv.length - 1].split(".")[0];
} else {
   emit = window.emit;
   errConstruct = window.throwParsingError;
}

var nextLab = 1;
var ID = 0;
var varTable = {};
var hasReturned = false;
var newLab = function(){
   return nextLab++;
};

var newID = function(){
   return ID++;
};

//PreExpr is an object containing the functions needed for the prework of some of the expressions.
//This was implemented due to the tail recursion in the language and als to reduce code..
var preExpr = {
   tushFunc : function(expr){
      var numParams = 0;
      var params = expr.exprs; //parameters sent to function
      var argsIn = functions[expr.name].args; //arguments used in function

      if(argsIn.hasOwnProperty('nodecls')){
         //If tush functions are given wrong number of arguments
         if(params.length < argsIn.nodecls.length){
            errConstruct("#<ArgumentError: Wrong number of arguments calling '"+
                        expr.name+"' ("+params.length+" for "+argsIn.nodecls.length+")>"
                        );
         }
         else if(params.length > argsIn.nodecls.length + argsIn.decls.length){
            errConstruct("#<ArgumentError: Wrong number of arguments calling '"+
                        expr.name+"' ("+params.length+" for "+parseInt(argsIn.nodecls.length+argsIn.decls.length)+")>"
                        );
         }
         else{
            var numArgsWithDecl = argsIn.nodecls.length + argsIn.decls.length - params.length;
            for(var n = 0; n < params.length; n++){
               generateExpr(params[n]);
               if(n+1 !== params.length){
                  emit('(Push)');
               }
               numParams++;
            }
            var i = argsIn.decls.length - numArgsWithDecl;
            while(i !== argsIn.decls.length){
               if(params.length > 0){
                  emit('(Push)');
               }
               emit('(MakeVal '+argsIn.decls[i].val+')');
               i++;
               numParams++;
            }
         }
      }
      return numParams;
   },
   normalFunc : function(expr){
      for(var n = 0; n < expr.exprs.length; n++){
         generateExpr(expr.exprs[n]);
         if(n+1 !== expr.exprs.length)
            emit('(Push)');
      }
   },
   store : function(expr){
      generateExpr(expr.val);
   },
   callop : function(expr){
      for(var n = 0; n < expr.exprs.length; n++){
         generateExpr(expr.exprs[n]);
         if(n+1 !== expr.exprs.length)
            emit('(Push)');
      }
   },
   fetch : function(expr){
      if(isNaN(varTable[expr.name])){
         errConstruct("Variable "+expr.name+" is undefined");
         return true;
      }
      return false;
   },
   list : function(expr){
      if(expr.val === null){
         emit('(MakeVal null)');
      }else{
         for(var n = 0; n < expr.val.length; n++){
            generateExpr(expr.val[n]);
            if(n+1 !== expr.val.length){
               emit('(Push)');
            }
         }
         emit('(List '+expr.val.length+')');
      }
   },
   parenth : function(expr){
      generateExpr(expr.val);
   },
   ifst : function(expr){
      var conds = expr.conds;
      var bodies = expr.bodies;
      var startLabel = newLab();
      var endLabel = newLab();

      for(var n = 0; n < conds.length; n++){
         var nextLab = newLab();
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
   },
   whilest : function(expr){
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
   },
   body : function(expr){
      for(var n = 0; n < expr.exprs.length; n++){
         generateExpr(expr.exprs[n]);
      }
   },
   and : function(expr){
      var falseLab = newLab();
      generateExpr(expr.exprs[0]);
      emit('(GoFalse _L'+falseLab+')');
      generateExpr(expr.exprs[1]);
      emit('_L'+falseLab+':');
   },
   or : function(expr){
      var trueLab = newLab();
      generateExpr(expr.exprs[0]);
      emit('(GoTrue _L'+trueLab+')');
      generateExpr(expr.exprs[1]);
      emit('_L'+trueLab+':');
   },
   not : function(expr){
      generateExpr(expr.val);
   }
};

var generateExpr = function(expr){
   var type = expr.type;

   if(!type){
      return;
   }
   else if(type === "CALLFUNC"){
      //If we are dealing with functions from the tush language
      if(functions[expr.name]){
         var numParams = preExpr.tushFunc(expr);
         emit('(Call #"'+expr.name+'[f'+numParams+']" '+numParams+')');
      }else{
         preExpr.normalFunc(expr);
         emit('(Call #"'+expr.name+'[f'+expr.exprs.length+']" '+expr.exprs.length+')');
      }
   }
   else if(type === "STORE"){
      preExpr.store(expr);
      emit('(Store '+varTable[expr.name]+')');
   }
   else if(type === "CALLOP"){
      preExpr.callop(expr);
      emit('(Call #"'+expr.name+'[f'+expr.exprs.length+']" '+expr.exprs.length+')');
   }
   else if(type === "FETCH"){
      var hasError = preExpr.fetch(expr);
      if(hasError) return;
      emit('(Fetch '+varTable[expr.name]+')');
   }
   else if(type === "LITERAL"){
      emit('(MakeVal '+expr.val+')');
   }
   else if(type === "LIST"){
      preExpr.list(expr);
   }
   else if(type === "()"){
      preExpr.parenth(expr);
   }
   else if(type === "IF"){
      preExpr.ifst(expr);
   }
   else if(type === "RETURN"){
      generateExprR(expr);
   }
   else if(type === "WHILE"){
      preExpr.whilest(expr);
   }
   else if(type === "BODY"){
      preExpr.body(expr);
   }
   else if(type === "AND"){
      preExpr.and(expr);
   }
   else if(type === "OR"){
      preExpr.or(expr);
   }
   else if(type === "NOT"){
      preExpr.not(expr);
      emit('(Not)');
   }
   else{
      errConstruct("Unexpected type of expression: "+type);
   }
};

var generateExprR = function(expr){
   var type = expr.type;
   hasReturned = true;
   if(!type){
      hasReturned = false;
      return;
   }
   else if(type === "RETURN"){
      var returnExpr = expr.val;
      var retType = returnExpr.type;

      if(retType === "CALLFUNC"){
         //If we are dealing with functions from the tush language
         if(functions[returnExpr.name]){
            var numParams = preExpr.tushFunc(returnExpr);
            emit('(CallR #"'+returnExpr.name+'[f'+numParams+']" '+numParams+')');
         }else{
            preExpr.normalFunc(returnExpr);
            emit('(CallR #"'+returnExpr.name+'[f'+returnExpr.exprs.length+']" '+
               returnExpr.exprs.length+')');
         }
      }
      else if(retType === "STORE"){
         preExpr.store(returnExpr);
         emit('(StoreR '+varTable[returnExpr.name]+')');
      }
      else if(retType === "CALLOP"){
         preExpr.callop(returnExpr);
         emit('(CallR #"'+returnExpr.name+'[f'+returnExpr.exprs.length+']" '+returnExpr.exprs.length+')');
      }
      else if(retType === "FETCH"){
         var hasError = preExpr.fetch(returnExpr);
         if(hasError) return;
         emit('(FetchR '+varTable[returnExpr.name]+')');
      }
      else if(retType === "LITERAL"){
         emit('(MakeValR '+returnExpr.val+')');
      }
      else if(retType === "LIST"){
         preExpr.list(returnExpr);
         hasReturned = false;
      }
      else if(retType === "()"){
         preExpr.parenth(returnExpr);
         hasReturned = false;
      }
      else if(retType === "IF"){
         preExpr.ifst(returnExpr);
         hasReturned = false;
      }
      else if(retType === "RETURN"){
         //no sense in making 'return return something' but we'll keep it here anyway
         generateExprR(returnExpr.val);
      }
      else if(retType === "WHILE"){
         preExpr.whilest(returnExpr);
         hasReturned = false;
      }
      else if(retType === "BODY"){
         preExpr.body(returnExpr);
         hasReturned = false;
      }
      else if(retType === "AND"){
         preExpr.and(returnExpr);
         hasReturned = false
      }
      else if(retType === "OR"){
         preExpr.or(returnExpr);
         hasReturned = false;
      }
      else if(retType === "NOT"){
         preExpr.not(returnExpr);
         emit('(NotR)');
      }
      else{
         errConstruct("Unexpected type of expression: "+retType);
      }
   }
   else{
      errConstruct("Can't call generateExprR function for type "+retType);
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

   var argsLen = 0;
   //If it is a function that takes in arguments
   if(args.hasOwnProperty('nodecls')){
      argsLen += args.nodecls.length + args.decls.length;
   }

   emit('#"'+name+'[f'+argsLen+']"=');
   emit('[');
   //Arguments passed to function
   if(argsLen > 0){
      for(var n = 0; n < args.nodecls.length; n++){
         varTable[args.nodecls[n].name] = newID();
      }
      for(var n = 0; n < args.decls.length; n++){
         varTable[args.decls[n].name] = newID();
      }
   }
   //Declerations made in function
   for(var n = 0; n < decls.length; n++){
      if(decls[n].val === null){
         emit('(MakeVal null)');
      }else{
         generateExpr(decls[n].val);
      }
      generateDecl(decls[n].decl);
   }
   //Expressions in function
   hasReturned = false;
   for(var n = 0; n < exprs.length; n++){
      var expr = exprs[n];
      //Implementation of tail recursion
      if(expr.type === "RETURN"){
         generateExprR(expr);
      }else{
         generateExpr(expr);
      }
   }
   //if we haven't returned anything from current function
   if(!hasReturned){
      emit('(Return)');
   }
   emit('];');
};

var generateProgram = function(){
   nextLab = 1;
   emit('"'+programName+'.mexe" = main in');
   emit('!{{');
   for(n in functions){
      var func = functions[n];
      generateFunction(n, func);
   }
   emit('}}*BASIS;');

   if(this.process !== undefined){
      if(!errMessage){
         var programToFile = "";
         for(var n = 0; n < emittedProgram.length; n++){
            programToFile += emittedProgram[n];
            programToFile += "\n";
         }
         fs.writeFile(programName+".mexe", programToFile, function(err) {
            if(err) {
               console.log(err);
            }else{
               console.log("Parsed successfully to "+programName+".mexe");
            }
         }); 
      }else{
         console.log("Parsing unsuccessfull");
         console.log(errMessage);
      }
   }
};

