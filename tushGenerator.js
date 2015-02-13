var tush = parser;
tush.lexer = parser.lexer;
x = parser.lexer;
var editor;
var initEditor = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", 32);
    editor.setOption("maxLines", 32);
};

$(document).ready(function(){
	initEditor();
	$("#lexCode").click(function(){
		console.clear();
		//tush.parser.parse(editor.getValue());
		tush.lexer.setInput(editor.getValue());
		var tokenID = tush.lexer.lex();
		var tokenName = tush.terminals_[tokenID];
		var next = tush.lexer.match;
		var tableContainer = $("<table class='table table-hover table-scroll'></table>");
		tableContainer.append("<thead><tr><th> token ID </th><th> Token Name </th><th>Lexed Value</th></tr></thead>");
		var tableBody = $("<tbody></tbody>");
		while(tokenID !== 1){
			//console.log(tush.terminals_[tokenID]+" -> "+tokenID+": "+tush.lexer.match);
			$(tableBody).append("<tr><td>"+tokenID+"</td><td>"+tokenName+"</td><td>"+next+"</td></tr>");

			tokenID = tush.lexer.lex();
			tokenName = tush.terminals_[tokenID];
			next = tush.lexer.match;
		}
		$(".lex-content").empty()
		$(tableContainer).append(tableBody);
		$(".lex-content").append(tableContainer);
	});
});