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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,7],$V2=[1,11],$V3=[1,13],$V4=[11,17,20],$V5=[8,9,36,37,38,39,40,41,43,45],$V6=[1,17],$V7=[1,21],$V8=[1,28],$V9=[1,22],$Va=[1,23],$Vb=[1,24],$Vc=[1,25],$Vd=[1,26],$Ve=[1,27],$Vf=[1,30],$Vg=[1,31],$Vh=[1,38],$Vi=[1,39],$Vj=[1,40],$Vk=[1,41],$Vl=[1,42],$Vm=[1,43],$Vn=[1,44],$Vo=[1,45],$Vp=[1,46],$Vq=[1,47],$Vr=[1,48],$Vs=[11,17,20,25,26,27,28,29,30,31,32,33,34,35],$Vt=[8,9,18,36,37,38,39,40,41,43,45],$Vu=[8,9,14,36,37,38,39,40,41,43,45,50,51],$Vv=[11,17,20,25,26,27,31,32,33,34,35],$Vw=[11,17,20,25,26,27,28,29,31,32,33,34,35],$Vx=[11,17,20,31,32,33,34,35],$Vy=[11,20],$Vz=[14,50,51],$VA=[14,51],$VB=[1,87];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"functions":4,"EOF":5,"fundecl":6,"FUNDECL":7,"NAME":8,"(":9,"optnames":10,")":11,"optdecls":12,"exprs":13,"END":14,"decls":15,"decl":16,"DECLEND":17,"VAR":18,"names":19,",":20,"expr":21,"optexprs":22,"exprlist":23,"=":24,"+":25,"++":26,"-":27,"*":28,"/":29,"%":30,"<":31,">":32,"<=":33,">=":34,"==":35,"RETURN":36,"NUMBER":37,"STRING":38,"TRUE":39,"FALSE":40,"NULL":41,"ifexpr":42,"WHILE":43,"body":44,"IF":45,"optelsifs":46,"optelse":47,"elsifs":48,"elsif":49,"ELSIF":50,"ELSE":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"FUNDECL",8:"NAME",9:"(",11:")",14:"END",17:"DECLEND",18:"VAR",20:",",24:"=",25:"+",26:"++",27:"-",28:"*",29:"/",30:"%",31:"<",32:">",33:"<=",34:">=",35:"==",36:"RETURN",37:"NUMBER",38:"STRING",39:"TRUE",40:"FALSE",41:"NULL",43:"WHILE",45:"IF",50:"ELSIF",51:"ELSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,8],[12,0],[12,1],[15,3],[15,2],[16,2],[10,0],[10,1],[19,3],[19,1],[13,3],[13,2],[22,0],[22,1],[23,3],[23,1],[21,3],[21,4],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,1],[21,2],[21,1],[21,1],[21,1],[21,1],[21,1],[21,3],[21,1],[21,6],[42,8],[46,0],[46,1],[48,2],[48,1],[49,5],[47,0],[47,2],[44,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

         generateCode();
      
break;
case 2:


      
break;
case 3:

         
      
break;
case 4:

         var funcName = $$[$0-6];
         //functions are kept as a dictionary objects
         functions[funcName] = {
            args : $$[$0-4],
            decls : $$[$0-2],
            exprs : $$[$0-1]
         };
      
break;
case 5:
  /* Optional declerations are optional */
         this.$ = [];  
      
break;
case 7:

         for(var i = 0; i < $$[$0-1].length; i++){
            $$[$0-2].push($$[$0-1][i]);
         }
         this.$ = $$[$0-2];
      
break;
case 8:

         this.$ = $$[$0-1];
      
break;
case 9:

         this.$ = $$[$0];
      
break;
case 10:
  /* Optional names are optional */
         this.$ = [];  
      
break;
case 12: case 18:

         $$[$0-2].push($$[$0]);
         this.$ = $$[$0-2];
      
break;
case 13: case 19:

         this.$ = [$$[$0]];
      
break;
case 14:

         $$[$0-2].push($$[$0-1]);
         this.$ = $$[$0-2];
      
break;
case 15:

         this.$ = [$$[$0-1]];
      
break;
case 16:
  /* Optional expressions are optional */
         this.$ = [];
      
break;
case 20:
 this.$ = {type: "STORE", name: $$[$0-2], val: $$[$0]}; 
break;
case 21:
 this.$ = {type: "CALL",  name: $$[$0-3], exprs: $$[$0-1]}; 
break;
case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32:
 this.$ = {type: "CALL",  name: $$[$0-1], exprs: [$$[$0-2], $$[$0]]}; 
break;
case 33:
 this.$ = {type: "FETCH", name: $$[$0]}; 
break;
case 34:
 this.$ = {type: "RETURN",  val: $$[$0]}; 
break;
case 35: case 36: case 37: case 38: case 39:
 this.$ = {type: "LITERAL", val: $$[$0]}; 
break;
case 40:
 this.$ = {type: "()",      val: $$[$0-1]}; 
break;
case 42:
 this.$ = {type: "WHILE", cond: $$[$0-3], body: $$[$0-1]}; 
break;
case 43:

         var bodies = [$$[$0-3]];
         var conds = [$$[$0-5]];
         var elsebodies = $$[$0-1];
         hasElse = false;

         bodies = bodies.concat($$[$0-2].bodies);
         if(elsebodies.length > 0){
            bodies = bodies.concat($$[$0-1]);
            hasElse = true;
         }
         conds = conds.concat($$[$0-2].conds);
         this.$ = {
            type: "IF",
            conds: conds,
            bodies: bodies,
            hasElse: hasElse
         };
      
break;
case 44:
 this.$ = {bodies: [], conds: []}; 
break;
case 45: case 47:
 this.$ = $$[$0]; 
break;
case 46:

         $$[$0-1].bodies = $$[$0-1].bodies.concat($$[$0].bodies);
         $$[$0-1].conds = $$[$0-1].conds.concat($$[$0].conds);
         this.$ = $$[$0-1];
      
break;
case 48:
 this.$ = {bodies: [$$[$0]], conds: [$$[$0-2]]}; 
break;
case 49:
 this.$ = []; 
break;
case 50:
 this.$ = [$$[$0]]; 
break;
case 51:
 this.$ = {type: "BODY", exprs: $$[$0]}; 
break;
}
},
table: [{3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5],6:6,7:$V0},o($V1,[2,3]),{8:[1,7]},{1:[2,1]},o($V1,[2,2]),{9:[1,8]},{8:$V2,10:9,11:[2,10],19:10},{11:[1,12]},{11:[2,11],20:$V3},o($V4,[2,13]),o($V5,[2,5],{12:14,15:15,16:16,18:$V6}),{8:[1,18]},{8:$V7,9:$V8,13:19,21:20,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($V5,[2,6],{16:32,18:$V6}),{17:[1,33]},{8:$V2,19:34},o($V4,[2,12]),{8:$V7,9:$V8,14:[1,35],21:36,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{17:[1,37],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},o($Vs,[2,33],{9:[1,50],24:[1,49]}),{8:$V7,9:$V8,21:51,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($Vs,[2,35]),o($Vs,[2,36]),o($Vs,[2,37]),o($Vs,[2,38]),o($Vs,[2,39]),{8:$V7,9:$V8,21:52,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($Vs,[2,41]),{9:[1,53]},{9:[1,54]},{17:[1,55]},o($Vt,[2,8]),{17:[2,9],20:$V3},o($V1,[2,4]),{17:[1,56],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},o($Vu,[2,15]),{8:$V7,9:$V8,21:57,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:58,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:59,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:60,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:61,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:62,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:63,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:64,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:65,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:66,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:67,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:68,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,11:[2,16],21:71,22:69,23:70,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($V4,[2,34],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr}),{11:[1,72],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},{8:$V7,9:$V8,21:73,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,21:74,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($Vt,[2,7]),o($Vu,[2,14]),o($Vv,[2,22],{28:$Vk,29:$Vl,30:$Vm}),o([11,17,20,26,31,32,33,34,35],[2,23],{25:$Vh,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vv,[2,24],{28:$Vk,29:$Vl,30:$Vm}),o($Vw,[2,25],{30:$Vm}),o($Vw,[2,26],{30:$Vm}),o($Vw,[2,27],{30:$Vm}),o($Vx,[2,28],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vx,[2,29],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vx,[2,30],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vx,[2,31],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vx,[2,32],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm}),o($Vw,[2,20],{30:$Vm}),{11:[1,75]},{11:[2,17],20:[1,76]},o($Vy,[2,19],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr}),o($Vs,[2,40]),{11:[1,77],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},{11:[1,78],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},o($Vs,[2,21]),{8:$V7,9:$V8,21:79,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},{8:$V7,9:$V8,13:81,21:20,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,44:80,45:$Vg},{8:$V7,9:$V8,13:81,21:20,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,44:82,45:$Vg},o($Vy,[2,18],{25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr}),{14:[1,83]},o($Vz,[2,51],{42:29,21:36,8:$V7,9:$V8,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,43:$Vf,45:$Vg}),o($VA,[2,44],{46:84,48:85,49:86,50:$VB}),o($Vs,[2,42]),{14:[2,49],47:88,51:[1,89]},o($VA,[2,45],{49:90,50:$VB}),o($Vz,[2,47]),{9:[1,91]},{14:[1,92]},{8:$V7,9:$V8,13:81,21:20,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,44:93,45:$Vg},o($Vz,[2,46]),{8:$V7,9:$V8,21:94,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,45:$Vg},o($Vs,[2,43]),{14:[2,50]},{11:[1,95],25:$Vh,26:$Vi,27:$Vj,28:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr},{8:$V7,9:$V8,13:81,21:20,36:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:29,43:$Vf,44:96,45:$Vg},o($Vz,[2,48])],
defaultActions: {5:[2,1],93:[2,50]},
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
      if(isNaN(varTable[expr.name])){
         errConstruct("Variable "+expr.name+" is undefined");
         return;
      }
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
            //console.log(emittedProgram[n]);
         }
         fs.writeFile(programName+".mexe", programToFile, function(err) {
            if(err) {
               return console.log(err);
            }

            console.log("Parsed successfully to "+programName+".mexe");
         }); 
      }else{
         console.log("Parsing unsuccessfull");
         console.log(errMessage);
      }
   }
};

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
case 1:/* skip comments */ 
break;
case 2:return 'NOT';
break;
case 3:return 'NOT';
break;
case 4:return 'OR';
break;
case 5:return 'OR';
break;
case 6:return 'AND';
break;
case 7:return 'AND';
break;
case 8:return 18;
break;
case 9:return 7;
break;
case 10:return 43;
break;
case 11:return 45;
break;
case 12:return 50;
break;
case 13:return 51;
break;
case 14:return 14;
break;
case 15:return 17;
break;
case 16:return 36;
break;
case 17:return 39;
break;
case 18:return 40;
break;
case 19:return 41;
break;
case 20:return 33;
break;
case 21:return 34;
break;
case 22:return 31;
break;
case 23:return 32;
break;
case 24:return 35;
break;
case 25:return 26;
break;
case 26:return 28;
break;
case 27:return 29;
break;
case 28:return 27;
break;
case 29:return 25;
break;
case 30:return 30;
break;
case 31:return 24;
break;
case 32:return 9;
break;
case 33:return 11;
break;
case 34:return 20;
break;
case 35:return 38;
break;
case 36:return 37;
break;
case 37:return 8;
break;
case 38:return 5;
break;
case 39:return 'INVALID';
break;
}
},
rules: [/^(?:\s+)/,/^(?:^#.*)/,/^(?:not\b)/,/^(?:!)/,/^(?:or\b)/,/^(?:\|\|)/,/^(?:and\b)/,/^(?:&&)/,/^(?:var\b)/,/^(?:def\b)/,/^(?:while\b)/,/^(?:if\b)/,/^(?:elsif\b)/,/^(?:else\b)/,/^(?:end\b)/,/^(?:;)/,/^(?:return\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:==)/,/^(?:\+\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:"[^\"]*")/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[A-Za-z]+([0-9A-Za-z])*\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],"inclusive":true}}
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