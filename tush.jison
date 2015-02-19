
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
"<="                       return '<=';
">="                       return '>=';
"<"                        return '<';
">"                        return '>';
"=="                       return '==';
"*"                        return '*';
"/"                        return '/';
"-"                        return '-';
"+"                        return '+';
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
%left '+' '-'
%left '*' '/'
%right '='
%right '%'
%left UMINUS

%start program

%% /* language grammar */

program
   : functions EOF
      {  /*typeof console !== 'undefined' ? console.log($1) : print($1);*/
         return $1; }
   ;

functions
   : functions fundecl 
   | fundecl
   ;

fundecl
   : FUNDECL NAME '(' optnames ')' optdecls exprs END    {  
                                                         }
   ;

optdecls
   :  {  /* Optional declerations are optional */   }
   | decls 
   ;

decls
   : decls decl DECLEND
   | decl DECLEND
   ;

decl
   : VAR names
   ;

optnames
   :  {  /* Optional names are optional */   }
   | names
   ;

names
   : names ',' NAME     {
                        }
   | NAME               {
                        }
   ;

exprs
   : exprs expr DECLEND    {  
                           }
   | expr DECLEND          { 
                           }
   ;

optexprs
   :  {  /* Optional expressions are optional */ }
   | exprsnodeclend
   ;

exprsnodeclend
   : exprsnodeclend ',' expr 
   |expr 
   ;

expr
   : NUMBER
   | NAME
   | NAME '=' expr
   | NAME '(' optexprs ')'
   | RETURN expr
   //| OPNAME expr
   //| expr 'OPNAME' expr
   | expr '+' expr
   | expr '-' expr
   | expr '*' expr
   | expr '/' expr
   | expr '%' expr
   | expr '<' expr
   | expr '>' expr
   | expr '<=' expr
   | expr '>=' expr
   | expr '==' expr
   | STRING
   //| LITERAL
   | '(' expr ')'
   | ifexpr
   | WHILE '(' expr ')' body END {
                                 }
   ;

ifexpr
   : IF '(' expr ')' body optelsifs optelse END {
                                                }
   ;

optelsifs
   :  {  /* optional elsif's is optional */ }
   | elsifs
   ;

elsifs
   : elsifs elsif
   | elsif
   ;

elsif
   : ELSIF '(' expr ')' body  {
                              }
   ;

optelse
   :  {  /* optional else is optional */}
   | ELSE body    { 
                  }
   ;

body
   : exprs
   ;

