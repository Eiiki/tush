
/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                        /* skip whitespace */
"def"                      return 'FUNCDECL'
"end"                      return 'FUNCEND'
"while"                    return 'WHILE'
"endwhile"                 return 'ENDWHILE'
"if"                       return 'IF'
"elsif"                    return 'ELSIF'
"else"                     return 'ELSE'
"endif"                    return 'ENDIF'
"var"                      return 'VARDECL'
"return"                   return 'RETURN'
"*"                        return '*';
"/"                        return '/';
"-"                        return '-';
"+"                        return '+';
//"^"                      return '^';
//"!"                      return '!';
"%"                        return '%';
"="                        return '='
"("                        return '(';
")"                        return ')';
","                        return ',';
";"                        return 'DECLEND'
[0-9]+("."[0-9]+)?\b       return 'NUMBER';
[A-Za-z]+([0-9A-Za-z])*\b  return 'NAME';
<<EOF>>                    return 'EOF';
.                          return 'INVALID';

/lex

%token FUNCDECL
%token FUNCEND
%token VARDECL
%token WHILE
%token ENDWHILE
%token IF
%token ELSIF
%token ELSE
%token ENDIF
%token RETURN
/* operator associations and precedence */

%right RETURN
%left '+' '-'
%left '*' '/'
//%left '^'
//%right '!'
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
   : functions func 
   | func
   ;

func
   : FUNCDECL NAME '('')' funcbody FUNCEND               {  console.log("FUNCDECL: "+$1);
                                                            console.log("FUNCNAME: "+$2);
                                                            console.log("'(': "+$3);
                                                            console.log("')': "+$4);
                                                            console.log("FUNCEND: "+$6); 
                                                         }
   | FUNCDECL NAME '('multinames')' funcbody FUNCEND    {  console.log("FUNCDECL: "+$1);
                                                            console.log("FUNCNAME: "+$2);
                                                            console.log("'(': "+$3);
                                                            console.log("')': "+$5);
                                                            console.log("FUNCEND: "+$7); 
                                                         }

   ;

funcbody
   : decls exprs
   | exprs
   ;

decls
   : decls decl DECLEND                      {  console.log("DECLEND: "+$3);  }
   | decl DECLEND                            {  console.log("DECLEND: "+$2);  }
   ;

decl
   : VARDECL multinames                      {  console.log("VARDECL: "+$1);  }
   ;

exprs
   : exprs expr DECLEND                      {  console.log("DECLEND: "+$3);  }
   | expr DECLEND                            {  console.log("DECLEND: "+$2);  }
   ;

expr
   : expr '+' expr                           {  console.log("'+': "+$2);      }
   | expr '-' expr                           {  console.log("'-': "+$2);      }
   | expr '*' expr                           {  console.log("'*': "+$2);      }
   | expr '/' expr                           {  console.log("'/': "+$2);      }
   | expr '%' expr                           {  console.log("'%': "+$2);      }
   | NUMBER                                  {  console.log("NUMBER: "+$1);   }
   | NAME                                    {  console.log("NAME: "+$1);     }
   | RETURN expr                             {  console.log("RETURN: "+$1);   }
   | NAME '=' expr                           {  console.log("NAME: "+$1);
                                                console.log("'=': "+$2);      }
   | NAME '('')'                             {  console.log("NAME: "+$1);
                                                console.log("'(': "+$2);
                                                console.log("')': "+$3);      }
   |  NAME '(' multiargs ')'                 {  console.log("NAME: "+$1);
                                                console.log("'(': "+$2);
                                                console.log("')': "+$4);      }
   | '(' expr ')'                            {  console.log("'(': "+$1);
                                                console.log("')': "+$3);      }
   | ifexpr
   | WHILE '(' expr ')' body ENDWHILE        {  console.log("'(': "+$2);
                                                console.log("')': "+$4);
                                                console.log("ENDWHILE: "+$6); }
   ;

ifexpr
   : IF '(' expr ')' body ENDIF                                         {  console.log("IF: "+$1);
                                                                           console.log("'(': "+$2);
                                                                           console.log("')': "+$4);
                                                                           console.log("ENDIF: "+$6);
                                                                        }
   | IF '(' expr ')' body ELSE body ENDIF                               {  console.log("IF: "+$1);
                                                                           console.log("'(': "+$2);
                                                                           console.log("')': "+$4);
                                                                           console.log("ELSE: "+$6);
                                                                           console.log("ENDIF: "+$8);
                                                                        }
   | IF '(' expr ')' body ELSIF '(' expr ')' body ENDIF                 {  console.log("IF: "+$1);
                                                                           console.log("'(': "+$2);
                                                                           console.log("')': "+$4);
                                                                           console.log("ELSIF: "+$6);
                                                                           console.log("'(': "+$7);
                                                                           console.log("')': "+$9);
                                                                           console.log("ENDIF: "+$11);
                                                                        }
   | IF '(' expr ')' body ELSIF '(' expr ')' body ELSE body ENDIF       {  console.log("IF: "+$1);
                                                                           console.log("'(': "+$2);
                                                                           console.log("')': "+$4);
                                                                           console.log("ELSIF: "+$6);
                                                                           console.log("'(': "+$7);
                                                                           console.log("')': "+$9);
                                                                           console.log("ELSE: "+$11);
                                                                           console.log("ENDIF: "+$13);
                                                                        }
   ;

body
   : body expr DECLEND                       {  console.log("DECLEND: "+$3);  }
   | expr DECLEND                            {  console.log("DECLEND: "+$2);  }
   ;

multinames
   : multinames ',' NAME                     {  console.log("',' : "+$2);
                                                console.log("NAME: "+$3);     }
   | NAME                                    {  console.log("NAME: "+$1);     }
   ;

multiargs
   : multiargs ',' expr                      {  console.log("',': "+$2);      }
   | exprs
   ;


















