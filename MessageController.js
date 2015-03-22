function ParsingError(message) {
    this.name = "ParsingError";
    this.message = (message || "");
};
ParsingError.prototype = Error.prototype;

var throwParsingError = function(err){
	throw new ParsingError(err);
};

var renderSuccessMessages = function(emittedProgram){
	if(emittedProgram){
		var code = "";
		for(var n = 0; n < emittedProgram.length; n++){
			code += emittedProgram[n];
			code += "\n";
		}
		$(".messages .alert button span").trigger("click");
		initParseEditor(code);
	}
};

var renderErrorMessages = function(message, err){
	if(!err){
		err = message;
		err = err.split("\n");
		message = err.shift();
	}else{
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
		errMessages.append("<pre>"+err[n].toString()+"</pre>");	
	}
	alertBox.append(errMessages);
	$(".messages").html(alertBox);
};