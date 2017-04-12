Blockly.Blocks['h1'] = {
	init: function() {
		this.appendStatementInput("h1")
		.setCheck(null)
		.appendField("h1");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript["h1"] = function(block) {
	var statements_h1 = "<h1>" + Blockly.JavaScript.statementToCode(block, 'h1') + "</h1>";
	return statements_h1;
}

Blockly.Blocks['text'] = {
	init: function() {
		this.appendValueInput("string")
		.setCheck(null)
		.appendField(new Blockly.FieldTextInput("breadfish"), "text");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('Inserts text');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['text'] = function(block) {
	var text_text = block.getFieldValue('text');
	return text_text;
};



