
/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                        /* skip whitespace */
"not"                      return 'NOT';
"!"                        return 'NOT';
"or"                       return 'OR';
"||"                       return 'OR';
"and"                      return 'AND';
"&&"                       return 'AND';
"var"                      return 'VARDECL';
"def"                      return 'FUNDECL';
"while"                    return 'WHILE';
"if"                       return 'IF';
"elsif"                    return 'ELSIF';
"else"                     return 'ELSE';
"end"                      return 'END';
";"                        return 'DECLEND';
"return"                   return 'RETURN';
"*"                        return '*';
"/"                        return '/';
"-"                        return '-';
"+"                        return '+';
"%"                        return '%';
"="                        return '=';
"("                        return '(';
")"                        return ')';
","                        return ',';
[0-9]+("."[0-9]+)?\b       return 'NUMBER';
[A-Za-z]+([0-9A-Za-z])*\b  return 'NAME';
<<EOF>>                    return 'EOF';
.                          return 'INVALID';

/lex

%token FUNDECL
%token VARDECL
%token WHILE
%token IF
%token ELSIF
%token ELSE
%token RETURN
%token END
%token EOF
/* operator associations and precedence */

%right RETURN
%left NOT
%left OR
%left AND
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
   : FUNDECL NAME '(' optnames ')' optdecls exprs END   {  console.log("FUNDECL: "+$1);
                                                            console.log("NAME: "+$2);
                                                            console.log("'(': "+$3);
                                                            console.log("')': "+$5);
                                                         }
   ;

optdecls
   :        {  /* Optional declerations are optional */   }
   | decls 
   ;

decls
   : decls decl DECLEND
   | decl DECLEND
   ;

decl
   : VARDECL names
   ;

optnames
   :        {  /* Optional names are optional */   }
   | names
   ;

names
   : names ',' NAME     {  console.log("',': "+$2);
                           console.log("NAME: "+$3);
                        }
   | NAME               {  console.log("NAME: "+$1);           }
   ;

exprs
   : exprs expr DECLEND    {  console.log("DECLEND: "+$3);  }
   | expr DECLEND          {  console.log("DECLEND: "+$2);  }
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
   //| LITERAL
   | '(' expr ')'
   | ifexpr
   | WHILE '(' expr ')' body END {  console.log("WHILE: "+$1);
                                    console.log("'(': "+$2);
                                    console.log("')': "+$4);
                                    console.log("END: "+$6);
                                 }
   ;

ifexpr
   : IF '(' expr ')' body optelsifs optelse END  {  console.log("'(': "+$2);
                                                   console.log("')': "+$4);
                                                   console.log("END: "+$8);
                                                }
   ;

optelsifs
   :        {  /* optional elsif's is optional */ }
   | elsifs
   ;

elsifs
   : elsifs elsif
   | elsif
   ;

elsif
   : ELSIF '(' expr ')' body  {  console.log("ELSIF: "+$1);
                                 console.log("'(': "+$2);
                                 console.log("')': "+$4);
                              }
   ;

optelse
   :              {  /* optional else is optional */}
   | ELSE body    {  console.log("ELSE: "+$1);   }
   ;

body
   : exprs
   ;

