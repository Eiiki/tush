/**********
	* This is the recursive descent parser for the prototype of the tush programming language
***********/

var next_token = {};
next_token.ID = null;
next_token.name = null;

var constructError = function(token){
	try{
		var lineNo = tush.lexer.yylloc.first_line;
		if(token)
			throw new ParsingError("Error on line "+lineNo+". Expected "+token+", found "+next_token.name);
		else
			throw new ParsingError("Error on line "+lineNo+". Unexpected token "+next_token.name);
	}catch(err){
		renderErrorMessages(err.message, tush.lexer.showPosition());
		throw Error("Parsing unsuccessful");
	}
};

var advance = function(){
	next_token.ID 	= tush.lexer.lex();
	next_token.name = tush.terminals_[next_token.ID];
	//console.log(next_token.ID, next_token.name);
};

var over = function(token){
	if(token !== next_token.name){
		constructError(token);
	}
	advance();

	if(next_token.name === "EOF"){
		advance();
	}
};

var body = function(){
	while(next_token.name !== "END" && next_token.name !== "ELSIF" && next_token.name !== "ELSE"){
		expr();
		over("DECLEND");
	}
};

var ifexpr = function(){
	over("IF");
	over("(");
	expr();
	over(")");
	body();
	while(next_token.name === "ELSIF"){
		advance();
		over("(")
		expr();
		over(")");
		body();
	}
	if(next_token.name === "ELSE"){
		advance();
		body();
	}
	over("END");
};

var checkOps = function(){
	if(next_token.name === "+"){
		advance();
		expr();
	}
	else if(next_token.name === "-"){
		advance();
		expr();
	}
	else if(next_token.name === "*"){
		advance();
		expr();
	}
	else if(next_token.name === "/"){
		advance();
		expr();
	}
	else if(next_token.name === "%"){
		advance();
		expr();
	}
	else if(next_token.name === "<"){
		advance();
		expr();
	}
	else if(next_token.name === ">"){
		advance();
		expr();
	}
	else if(next_token.name === "<="){
		advance();
		expr();
	}
	else if(next_token.name === ">="){
		advance();
		expr();
	}
	else if(next_token.name === "=="){
		advance();
		expr();
	}
};

var expr = function(){
	if(next_token.name === "NUMBER"){
		advance();
		checkOps();
	}
	else if(next_token.name === "STRING"){
		advance();
	}
	else if(next_token.name === "NAME"){
		advance();
		if(next_token.name === "="){
			advance();
			expr();
		}
		else if(next_token.name === "("){
			advance();
			while(next_token.name !== ")"){
				expr();
				while(next_token.name === ","){
					advance();
					expr();
				}
			}
			over(")");
		}else{
			checkOps();
		}
	}
	else if(next_token.name === "RETURN"){
		advance();
		expr();
	}
	else if(next_token.name === "("){
		advance();
		expr();
		over(")");
	}
	else if(next_token.name === "IF"){
		ifexpr();
	}
	else if(next_token.name === "WHILE"){
		advance();
		over("(");
		expr();
		over(")");
		body();
		over("END");
	}
	else{
		constructError();
	}
};

var decl = function(){
	over("VAR");
	over("NAME");
	while(next_token.name === ","){
		advance();
		over("NAME");
	}
};

var func = function(){
	over("FUNDECL");
	over("NAME");
	over("(");
	if(next_token.name === "NAME"){
		advance();
		while(next_token.name === ","){
			advance();
			over("NAME");
		}
	}
	over(")");
	while(next_token.name === "VAR"){
		decl();
		over("DECLEND");
	}
	expr();
	over("DECLEND");
	while(next_token.name !== "END"){
		expr();
		over("DECLEND");
	}
	over("END");
};

var program = function(){
	func();
	while(next_token.ID !== EOF){
		func();
	}
};

var recursiveDescentParse = function(){
	//We start by getting the program text which we want to parse and put it into the lexer.
	tush.lexer.setInput(editor.getValue());
	advance();
	program();
	if(next_token.ID !== EOF){
		throw new ParsingError("Expected EOF, found "+next_token.name);
	}else{
		renderSuccessMessages();
	}
};
