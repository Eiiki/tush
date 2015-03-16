var editor;
var initEditor = function(){
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/ruby");
	editor.setAutoScrollEditorIntoView(true);
	editor.setOption("minLines", 35);
    editor.setOption("maxLines", 35);
    editor.setFontSize(13);
};

var resizeContent = function(){
	var desiredHeight = $(".editor-content").height();
	$(".lex-content").height(desiredHeight);
	$(".lex-content table.table-scroll").height(desiredHeight);
	$(".buttons-container").height(desiredHeight - 2);
};

var renderSuccessMessages = function(emittedProgram){
	if(emittedProgram){
		var code = $('<div class="emittedProgram"></div>');
		for(var n = 0; n < emittedProgram.length; n++){
			code.append('<p>'+emittedProgram[n]+'</p>');
		}
		$(".parse-content").html(code);
	}
};

var renderErrorMessages = function(message, err){
	if(!err){
		err = message;
		console.log(err);
		err = err.split("\n");
		message = err.shift();
	}else{
		console.log(err);
		err = err.split("\n");
	}
	var alertBox = $('<div class="alert alert-danger alert-dismissible" role="alert">');
	alertBox.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
						'<span aria-hidden="true">&times;</span>'+
					'</button>'
					);
	alertBox.append("<h5>"+
						"<i class='fa fa-exclamation-circle'></i> "+message+
					"</h5>"
					);
	var errMessages = $("<div class='error-messages'></div>");
	for(var n = 0; n < err.length; n++){
		if(n < 2)
			errMessages.append("<pre>"+err[n].toString()+"</pre>");
		else
			errMessages.append("<p>"+err[n].toString()+"</p>");
	}
	alertBox.append(errMessages);
	$(".messages").html(alertBox);
};