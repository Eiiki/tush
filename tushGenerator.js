var tush = {};
tush.parser = parser;
var editor;
var initEditor = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", 10);
    editor.setOption("maxLines", 30);
};

$(document).ready(function(){
	initEditor();
	$("#lexCode").click(function(){
		console.clear();
		tush.parser.parse(editor.getValue());
	});
});