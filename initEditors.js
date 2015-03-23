var editor;
var parseEditor;
var numLines;
var initEditor = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", numLines);
    editor.setOption("maxLines", numLines);
    editor.setFontSize(13);
};

var setParsedOutput = function(val){
	$("pre#parseEditor").text(val);
};

var initParseEditor = function(val){
	if(parseEditor){
		parseEditor = null;
		$(".second-editor").html('<pre id="parseEditor"></pre>');
	}
	setParsedOutput(val);
	parseEditor = ace.edit("parseEditor");
	parseEditor.getSession().setMode("ace/mode/ruby");
	parseEditor.setAutoScrollEditorIntoView(true);
	parseEditor.setOption("minLines", numLines);
    parseEditor.setOption("maxLines", numLines);
    parseEditor.setReadOnly(true);
    parseEditor.setFontSize(13);
};

var resizeContent = function(){
	var desiredHeight = $(".editor-content").height();
	$(".lex-content").height(desiredHeight);
	$(".lex-content table.table-scroll").height(desiredHeight);
	$(".buttons-container").height(desiredHeight - 2);
};
