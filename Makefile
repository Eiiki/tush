#use: make
# it generates morpho code from code.tsh, compiles it to code.mexe and runs it with the morpho virtual machine
all:
	jison tush.jison
	node tush.js code.tsh
	cat code.mexe | java -jar morpho.jar -c
	java -jar morpho.jar code

#use: make jison
# it creates the tush.js compiler from tush.jison
compiler:
	jison tush.jison

#use: make code
# it generates morpho assembly code from code.tsh using the tush.js compiler
code:
	node tush.js code.tsh

#use: make compile
# it compiles the morpho assembly code from code.mexe to executable
compile:
	cat code.mexe | java -jar morpho.jar -c

#use: make run
# it runs the morpho executable from code.mexe
run:
	java -jar morpho.jar code

#use: make clean
# it removes generated files
clean:
	rm -rf *.mexe
