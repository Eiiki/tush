var tush;
var EOF;
var emittedProgram = [];

var emit = function(val){
	emittedProgram.push(val.toString());
};

var parse = function(){
	var hasNoError = true;
	emittedProgram = [];
	try{
		tush.parse(editor.getValue());
	}catch(err){
		hasNoError = false;
		renderErrorMessages(err.message);
		initParseEditor("Parsing error");
	}
	if(hasNoError){
		renderSuccessMessages(emittedProgram);
	}
};

var lex = function(){
	tush.lexer.setInput(editor.getValue());
	var tokenID = tush.lexer.lex();
	var tokenName = tush.terminals_[tokenID];
	var next = tush.lexer.match;

	var tableContainer = $("<table class='table table-hover table-scroll'></table>");
	tableContainer.append("<thead><tr><th> token ID </th><th> Token Name </th><th>Lexed Value</th></tr></thead>");
	var tableBody = $("<tbody></tbody>");

	while(tokenID !== EOF){
		$(tableBody).append("<tr><td>"+tokenID+"</td><td>"+tokenName+"</td><td>"+next+"</td></tr>");
		tokenID = tush.lexer.lex();
		tokenName = tush.terminals_[tokenID];
		next = tush.lexer.match;
	}

	$(".lex-content").empty();
	$(tableContainer).append(tableBody);
	$(".lex-content").append(tableContainer);
	resizeContent();
};

$(document).ready(function(){
	$(".spinner").show();
	$(".container.body").hide();
	numLines = (((($(window).height() - 40) - ($(".navbar").height() || 53)) / 17) - 1) || 35;
	$.get("code.tsh", success = function(content){
		tush = parser;
		EOF = tush.lexer.EOF;
		$(".spinner").fadeOut("slow");
		$(".container.body").fadeIn("slow");
		$("pre#editor").text(content);
		initEditor();
		$("#lexCode").click(function(){
			$(".lex-content").show();
			$(".second-editor").hide();
			lex();
		});
		$("#parseCode").click(function(){
			$(".lex-content").hide();
			$(".second-editor").show();
			parse();
		});
		$("#recursiveDescentParse").click(function(){
			$(".lex-content").show();
			$(".second-editor").hide();
			recursiveDescentParse();
		});
		lex();
	});
});
