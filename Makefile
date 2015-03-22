#user: make jison
# it creates the tush.js from tush.jison and generates morpho code from code.tsh
jison:
	jison tush.jison
	node tush.js code.tsh
#use: cat code.mexe | make compile
# it compiles the morpho code to executable
compile:
	java -jar morpho.jar -c
#use: make run
# it runs the morpho executable from code.mexe
run:
	java -jar morpho.jar code
