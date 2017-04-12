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

Blockly.Blocks['attribute'] = {
	init: function() {
		this.appendValueInput("NAME")
		.setCheck(null)
		.appendField(new Blockly.FieldTextInput("color"), "name")
		.appendField(":")
		.appendField(new Blockly.FieldTextInput("black"), "value");
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['attribute'] = function(block) {
	var text_name = block.getFieldValue('name');
	var text_value = block.getFieldValue('value');
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = text_name + ':' + text_value + "," + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['h1'] = {
	init: function() {
		this.appendValueInput("attributes")
			.setCheck(null)
			.appendField("h1");
		this.appendStatementInput("children")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['h1'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
	// TODO: Assemble JavaScript into code variable.
	var attribute_array = value_attributes.split(",");
	var attrib_string = "";
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(":")[0].slice(1) + "='" + attribute_array[i].split(":")[1] + "' ";
	}
	var code = '<h1 ' + attrib_string + '>' + statements_children + '</h1>';
	return code;
};
