var tush = parser;
tush.lexer = parser.lexer;

var editor;
var initEditor = function(maxLines){
	if(!maxLines) maxLines = 32;
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", 35);
    editor.setOption("maxLines", 35);
    editor.setFontSize(13);
};

var resizeContent = function(){
	var desiredHeight = $(".editor-content").height();
	$(".lex-content").height(desiredHeight);
	$(".lex-content table.table-scroll").height(desiredHeight);
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
	//tush.parser.parse(editor.getValue());
};

$(document).ready(function(){
	initEditor();
	$("#lexCode").click(lex);
	$("#parseCode").click(parse);
	lex();
});