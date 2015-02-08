/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[5,8],$V2=[1,12],$V3=[1,20],$V4=[1,22],$V5=[1,18],$V6=[1,19],$V7=[1,21],$V8=[1,24],$V9=[1,25],$Va=[1,27],$Vb=[11,18,38],$Vc=[1,34],$Vd=[1,35],$Ve=[1,36],$Vf=[1,37],$Vg=[1,38],$Vh=[11,18,21,22,23,24,25,38],$Vi=[9,10,19,26,27,31,34],$Vj=[9,10,11,13,26,27,31,34,38],$Vk=[11,18,21,22,38],$Vl=[11,18,21,22,23,24,38],$Vm=[11,38],$Vn=[9,10,26,27,31,33,34,35,36,37];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"tush":3,"program":4,"EOF":5,"functions":6,"func":7,"FUNCDECL":8,"NAME":9,"(":10,")":11,"funcbody":12,"FUNCEND":13,"multinames":14,"decls":15,"exprs":16,"decl":17,"DECLEND":18,"VARDECL":19,"expr":20,"+":21,"-":22,"*":23,"/":24,"%":25,"NUMBER":26,"RETURN":27,"=":28,"multiargs":29,"ifexpr":30,"WHILE":31,"body":32,"ENDWHILE":33,"IF":34,"ENDIF":35,"ELSE":36,"ELSIF":37,",":38,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"FUNCDECL",9:"NAME",10:"(",11:")",13:"FUNCEND",18:"DECLEND",19:"VARDECL",21:"+",22:"-",23:"*",24:"/",25:"%",26:"NUMBER",27:"RETURN",28:"=",31:"WHILE",33:"ENDWHILE",34:"IF",35:"ENDIF",36:"ELSE",37:"ELSIF",38:","},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,6],[7,7],[12,2],[12,1],[15,3],[15,2],[17,2],[16,3],[16,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,1],[20,1],[20,2],[20,3],[20,3],[20,4],[20,3],[20,1],[20,6],[30,6],[30,8],[30,11],[30,13],[32,3],[32,2],[14,3],[14,1],[29,3],[29,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
  /*typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);*/
         return $$[$0-1]; 
break;
case 5:
  console.log("FUNCDECL: "+$$[$0-5]);
                                                            console.log("FUNCNAME: "+$$[$0-4]);
                                                            console.log("'(': "+$$[$0-3]);
                                                            console.log("')': "+$$[$0-2]);
                                                            console.log("FUNCEND: "+$$[$0]); 
                                                         
break;
case 6:
  console.log("FUNCDECL: "+$$[$0-6]);
                                                            console.log("FUNCNAME: "+$$[$0-5]);
                                                            console.log("'(': "+$$[$0-4]);
                                                            console.log("')': "+$$[$0-2]);
                                                            console.log("FUNCEND: "+$$[$0]); 
                                                         
break;
case 9: case 10: case 12: case 13: case 32: case 33:
  console.log("DECLEND: "+$$[$0]);  
break;
case 11:
  console.log("VARDECL: "+$$[$0-1]);  
break;
case 14:
  console.log("'+': "+$$[$0-1]);      
break;
case 15:
  console.log("'-': "+$$[$0-1]);      
break;
case 16:
  console.log("'*': "+$$[$0-1]);      
break;
case 17:
  console.log("'/': "+$$[$0-1]);      
break;
case 18:
  console.log("'%': "+$$[$0-1]);      
break;
case 19:
  console.log("NUMBER: "+$$[$0]);   
break;
case 20: case 35:
  console.log("NAME: "+$$[$0]);     
break;
case 21:
  console.log("RETURN: "+$$[$0-1]);   
break;
case 22:
  console.log("NAME: "+$$[$0-2]);
                                                console.log("'=': "+$$[$0-1]);      
break;
case 23:
  console.log("NAME: "+$$[$0-2]);
                                                console.log("'(': "+$$[$0-1]);
                                                console.log("')': "+$$[$0]);      
break;
case 24:
  console.log("NAME: "+$$[$0-3]);
                                                console.log("'(': "+$$[$0-2]);
                                                console.log("')': "+$$[$0]);      
break;
case 25:
  console.log("'(': "+$$[$0-2]);
                                                console.log("')': "+$$[$0]);      
break;
case 27:
  console.log("'(': "+$$[$0-4]);
                                                console.log("')': "+$$[$0-2]);
                                                console.log("ENDWHILE: "+$$[$0]); 
break;
case 28:
  console.log("IF: "+$$[$0-5]);
                                                                           console.log("'(': "+$$[$0-4]);
                                                                           console.log("')': "+$$[$0-2]);
                                                                           console.log("ENDIF: "+$$[$0]);
                                                                        
break;
case 29:
  console.log("IF: "+$$[$0-7]);
                                                                           console.log("'(': "+$$[$0-6]);
                                                                           console.log("')': "+$$[$0-4]);
                                                                           console.log("ELSE: "+$$[$0-2]);
                                                                           console.log("ENDIF: "+$$[$0]);
                                                                        
break;
case 30:
  console.log("IF: "+$$[$0-10]);
                                                                           console.log("'(': "+$$[$0-9]);
                                                                           console.log("')': "+$$[$0-7]);
                                                                           console.log("ELSIF: "+$$[$0-5]);
                                                                           console.log("'(': "+$$[$0-4]);
                                                                           console.log("')': "+$$[$0-2]);
                                                                           console.log("ENDIF: "+$$[$0]);
                                                                        
break;
case 31:
  console.log("IF: "+$$[$0-12]);
                                                                           console.log("'(': "+$$[$0-11]);
                                                                           console.log("')': "+$$[$0-9]);
                                                                           console.log("ELSIF: "+$$[$0-7]);
                                                                           console.log("'(': "+$$[$0-6]);
                                                                           console.log("')': "+$$[$0-4]);
                                                                           console.log("ELSE: "+$$[$0-2]);
                                                                           console.log("ENDIF: "+$$[$0]);
                                                                        
break;
case 34:
  console.log("',' : "+$$[$0-1]);
                                                console.log("NAME: "+$$[$0]);     
break;
case 36:
  console.log("',': "+$$[$0-1]);      
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:$V0},{1:[3]},{5:[1,6]},{5:[2,2],7:7,8:$V0},o($V1,[2,4]),{9:[1,8]},{1:[2,1]},o($V1,[2,3]),{10:[1,9]},{9:$V2,11:[1,10],14:11},{9:$V3,10:$V4,12:13,15:14,16:15,17:16,19:$V5,20:17,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{11:[1,26],38:$Va},o($Vb,[2,35]),{13:[1,28]},{9:$V3,10:$V4,16:29,17:30,19:$V5,20:17,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,13:[2,8],20:31,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{18:[1,32]},{18:[1,33],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},{9:$V2,14:39},o($Vh,[2,19]),o($Vh,[2,20],{10:[1,41],28:[1,40]}),{9:$V3,10:$V4,20:42,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:43,26:$V6,27:$V7,30:23,31:$V8,34:$V9},o($Vh,[2,26]),{10:[1,44]},{10:[1,45]},{9:$V3,10:$V4,12:46,15:14,16:15,17:16,19:$V5,20:17,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:[1,47]},o($V1,[2,5]),{9:$V3,10:$V4,13:[2,7],20:31,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{18:[1,48]},{18:[1,49],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},o($Vi,[2,10]),o($Vj,[2,13]),{9:$V3,10:$V4,20:50,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:51,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:52,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:53,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:54,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{18:[2,11],38:$Va},{9:$V3,10:$V4,20:55,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,11:[1,56],16:58,20:17,26:$V6,27:$V7,29:57,30:23,31:$V8,34:$V9},o($Vb,[2,21],{21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg}),{11:[1,59],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},{9:$V3,10:$V4,20:60,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:61,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{13:[1,62]},o($Vb,[2,34]),o($Vi,[2,9]),o($Vj,[2,12]),o($Vk,[2,14],{23:$Ve,24:$Vf,25:$Vg}),o($Vk,[2,15],{23:$Ve,24:$Vf,25:$Vg}),o($Vl,[2,16],{25:$Vg}),o($Vl,[2,17],{25:$Vg}),o($Vl,[2,18],{25:$Vg}),o($Vl,[2,22],{25:$Vg}),o($Vh,[2,23]),{11:[1,63],38:[1,64]},o($Vm,[2,37],{30:23,20:31,9:$V3,10:$V4,26:$V6,27:$V7,31:$V8,34:$V9}),o($Vh,[2,25]),{11:[1,65],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},{11:[1,66],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},o($V1,[2,6]),o($Vh,[2,24]),{9:$V3,10:$V4,20:67,26:$V6,27:$V7,30:23,31:$V8,34:$V9},{9:$V3,10:$V4,20:69,26:$V6,27:$V7,30:23,31:$V8,32:68,34:$V9},{9:$V3,10:$V4,20:69,26:$V6,27:$V7,30:23,31:$V8,32:70,34:$V9},o($Vm,[2,36],{21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg}),{9:$V3,10:$V4,20:72,26:$V6,27:$V7,30:23,31:$V8,33:[1,71],34:$V9},{18:[1,73],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},{9:$V3,10:$V4,20:72,26:$V6,27:$V7,30:23,31:$V8,34:$V9,35:[1,74],36:[1,75],37:[1,76]},o($Vh,[2,27]),{18:[1,77],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},o($Vn,[2,33]),o($Vh,[2,28]),{9:$V3,10:$V4,20:69,26:$V6,27:$V7,30:23,31:$V8,32:78,34:$V9},{10:[1,79]},o($Vn,[2,32]),{9:$V3,10:$V4,20:72,26:$V6,27:$V7,30:23,31:$V8,34:$V9,35:[1,80]},{9:$V3,10:$V4,20:81,26:$V6,27:$V7,30:23,31:$V8,34:$V9},o($Vh,[2,29]),{11:[1,82],21:$Vc,22:$Vd,23:$Ve,24:$Vf,25:$Vg},{9:$V3,10:$V4,20:69,26:$V6,27:$V7,30:23,31:$V8,32:83,34:$V9},{9:$V3,10:$V4,20:72,26:$V6,27:$V7,30:23,31:$V8,34:$V9,35:[1,84],36:[1,85]},o($Vh,[2,30]),{9:$V3,10:$V4,20:69,26:$V6,27:$V7,30:23,31:$V8,32:86,34:$V9},{9:$V3,10:$V4,20:72,26:$V6,27:$V7,30:23,31:$V8,34:$V9,35:[1,87]},o($Vh,[2,31])],
defaultActions: {6:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 8
break;
case 2:return 13
break;
case 3:return 31
break;
case 4:return 33
break;
case 5:return 34
break;
case 6:return 37
break;
case 7:return 36
break;
case 8:return 35
break;
case 9:return 19
break;
case 10:return 27
break;
case 11:return 23;
break;
case 12:return 24;
break;
case 13:return 22;
break;
case 14:return 21;
break;
case 15:return 25;
break;
case 16:return 28
break;
case 17:return 10;
break;
case 18:return 11;
break;
case 19:return 38;
break;
case 20:return 18
break;
case 21:return 26;
break;
case 22:return 9;
break;
case 23:return 5;
break;
case 24:return 'INVALID';
break;
}
},
rules: [/^(?:\s+)/,/^(?:def\b)/,/^(?:end\b)/,/^(?:while\b)/,/^(?:endwhile\b)/,/^(?:if\b)/,/^(?:elsif\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:var\b)/,/^(?:return\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:;)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[A-Za-z]+([0-9A-Za-z])*\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}