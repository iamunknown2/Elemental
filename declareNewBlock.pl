package DeclareNewBlock;
our $VERSION = '1.0';
use strict;
use warnings;

my $tag = $ARGV[0];
my $flag;
if (scalar(@ARGV) == 2) {
	$flag = $ARGV[1];
}
my $flagraised = $flag eq '--noclosingtag';
my $statementinput = $flagraised ? "" :
"
this.appendStatementInput('children')
    .setCheck(null);
";
my $closingtag = $flagraised ? "" : " + statements_children + '</$tag>'";
my $code =
"
Blockly.Blocks['$tag'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('$tag');
		$statementinput
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['$tag'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '=\"' + attribute_array[i].split(delimiter2)[1] + '\" ';
	}
	var code = '<$tag ' + attrib_string + '>'" . $closingtag . ";
	return code;
};
";

open(my $file, ">>", "blocks.js")
	or die "Error: file couldn't be opened";

print $file "\n$code";

close $file;

1;
