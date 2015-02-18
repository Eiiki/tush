var tush = parser;
tush.lexer = parser.lexer;

var editor;
var initEditor = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", 32);
    editor.setOption("maxLines", 32);
    editor.setFontSize(13);
};

var resizeContent = function(){
	var desiredHeight = $(".editor-content").height();
	$(".lex-content").height(desiredHeight);
	$(".lex-content table.table-scroll").height(desiredHeight);
};

var renderSuccessMessages = function(){
	var alertBox = $('<div class="alert alert-success alert-dismissible" role="alert">');
		alertBox.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
		alertBox.append("<strong>Þáttaðist!</strong>");
	$(".parse-content").html(alertBox);
};

var renderErrorMessages = function(err){
	var alertBox = $('<div class="alert alert-danger alert-dismissible" role="alert">');
		alertBox.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
		alertBox.append("<strong>"+err+"</strong>");
	$(".parse-content").html(alertBox);
};

var lex = function(){

	tush.lexer.setInput(editor.getValue());
	var tokenID = tush.lexer.lex();
	var tokenName = tush.terminals_[tokenID];
	var next = tush.lexer.match;
	var tableContainer = $("<table class='table table-hover table-scroll'></table>");
	tableContainer.append("<thead><tr><th> token ID </th><th> Token Name </th><th>Lexed Value</th></tr></thead>");
	var tableBody = $("<tbody></tbody>");
	while(tokenID !== 1){
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

var parse = function(){
	var hasNoError = true;
	try{
		tush.parse(editor.getValue());
	}catch(err){
		hasNoError = false;
		renderErrorMessages(err);
	}finally{
		if(hasNoError)
			renderSuccessMessages();
	}
};

$(document).ready(function(){
	initEditor();
	$("#lexCode").click(lex);
	$("#parseCode").click(parse);
	lex();
});
