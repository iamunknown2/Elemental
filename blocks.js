var delimiter1 = "|~|"; // Delimiter is weird to prevent clashes
var delimiter2 = "<|~"; // See above

function escapeRegExp(str) { // Taken from http://stackoverflow.com/a/6969486
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
} 

Blockly.Blocks['text'] = {
	init: function() {
		this.appendValueInput("string")
		.setCheck(null)
		.appendField(new Blockly.FieldTextInput("breadfish"), "text");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
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
		.appendField(new Blockly.FieldTextInput("name"), "name")
		.appendField(":")
		.appendField(new Blockly.FieldTextInput("value"), "value");
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
	var code = text_name + delimiter2 + text_value + delimiter1 + value_name;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['style'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('style');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['style'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<style ' + attrib_string + '>' + statements_children + '</style>';
	return code;
};

Blockly.Blocks['selector'] = {
	init: function() {
		this.appendValueInput("selector")
			.setCheck(null)
			.appendField("selector")
			.appendField(new Blockly.FieldTextInput("body"), "selected");
		this.appendStatementInput("properties")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['selector'] = function(block) {
	var text_selected = block.getFieldValue('selected');
	var value_selector = Blockly.JavaScript.valueToCode(block, 'selector', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_properties = Blockly.JavaScript.statementToCode(block, 'properties');
	// TODO: Assemble JavaScript into code variable.
	var code = text_selected + '{' + statements_properties + '}';
	return code;
};

Blockly.Blocks['style_attribute'] = {
	init: function() {
	this.appendValueInput("style_attribute")
		.setCheck(null)
		.appendField("Style attribute");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(210);
	this.setTooltip('Attach a name:value block to the right of this block');
	this.setHelpUrl('');
	}
};

Blockly.JavaScript['style_attribute'] = function(block) {
	var value_style_attribute = Blockly.JavaScript.valueToCode(block, 'style_attribute', Blockly.JavaScript.ORDER_ATOMIC);
	var regex1 = new RegExp(escapeRegExp(delimiter1), "g");
	var regex2 = new RegExp(escapeRegExp(delimiter2), "g");
	var code = value_style_attribute.replace(regex1, ";").replace(regex2, ":").slice(1, -1);
	return code;
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
	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = "";
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + "='" + attribute_array[i].split(delimiter2)[1] + "' ";
	}
	var code = '<h1 ' + attrib_string + '>' + statements_children + '</h1>';
	return code;
};

Blockly.Blocks['h2'] = {
	init: function() {
		this.appendValueInput("attributes")
			.setCheck(null)
			.appendField("h2");
		this.appendStatementInput("children")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['h2'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
	// TODO: Assemble JavaScript into code variable.
	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = "";
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + "='" + attribute_array[i].split(delimiter2)[1] + "' ";
	}
	var code = '<h2 ' + attrib_string + '>' + statements_children + '</h2>';
	return code;
};


Blockly.Blocks['h3'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('h3');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['h3'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<h3 ' + attrib_string + '>' + statements_children + '</h3>';
	return code;
};


Blockly.Blocks['p'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('p');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['p'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<p ' + attrib_string + '>' + statements_children + '</p>';
	return code;
};


Blockly.Blocks['span'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('span');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['span'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<span ' + attrib_string + '>' + statements_children + '</span>';
	return code;
};


Blockly.Blocks['pre'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('pre');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['pre'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<pre ' + attrib_string + '>' + statements_children + '</pre>';
	return code;
};


Blockly.Blocks['code'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('code');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['code'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<code ' + attrib_string + '>' + statements_children + '</code>';
	return code;
};


Blockly.Blocks['a'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('a');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['a'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<a ' + attrib_string + '>' + statements_children + '</a>';
	return code;
};


Blockly.Blocks['abbr'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('abbr');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['abbr'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<abbr ' + attrib_string + '>' + statements_children + '</abbr>';
	return code;
};


Blockly.Blocks['b'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('b');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['b'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<b ' + attrib_string + '>' + statements_children + '</b>';
	return code;
};


Blockly.Blocks['i'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('i');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['i'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<i ' + attrib_string + '>' + statements_children + '</i>';
	return code;
};


Blockly.Blocks['strong'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('strong');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['strong'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<strong ' + attrib_string + '>' + statements_children + '</strong>';
	return code;
};


Blockly.Blocks['em'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('em');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['em'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<em ' + attrib_string + '>' + statements_children + '</em>';
	return code;
};


Blockly.Blocks['mark'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('mark');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['mark'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<mark ' + attrib_string + '>' + statements_children + '</mark>';
	return code;
};


Blockly.Blocks['del'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('del');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['del'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<del ' + attrib_string + '>' + statements_children + '</del>';
	return code;
};


Blockly.Blocks['ins'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('ins');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['ins'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<ins ' + attrib_string + '>' + statements_children + '</ins>';
	return code;
};


Blockly.Blocks['sub'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('sub');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['sub'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<sub ' + attrib_string + '>' + statements_children + '</sub>';
	return code;
};


Blockly.Blocks['sup'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('sup');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['sup'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<sup ' + attrib_string + '>' + statements_children + '</sup>';
	return code;
};


Blockly.Blocks['kbd'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('kbd');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['kbd'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<kbd ' + attrib_string + '>' + statements_children + '</kbd>';
	return code;
};


Blockly.Blocks['samp'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('samp');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['samp'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<samp ' + attrib_string + '>' + statements_children + '</samp>';
	return code;
};


Blockly.Blocks['var'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('var');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['var'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<var ' + attrib_string + '>' + statements_children + '</var>';
	return code;
};


Blockly.Blocks['ol'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('ol');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['ol'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<ol ' + attrib_string + '>' + statements_children + '</ol>';
	return code;
};


Blockly.Blocks['ul'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('ul');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['ul'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<ul ' + attrib_string + '>' + statements_children + '</ul>';
	return code;
};


Blockly.Blocks['li'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('li');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['li'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<li ' + attrib_string + '>' + statements_children + '</li>';
	return code;
};


Blockly.Blocks['input'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('input');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(90);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['input'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<input ' + attrib_string + '>';
	return code;
};


Blockly.Blocks['form'] = {
	init: function() {
		this.appendValueInput('attributes')
			.setCheck(null)
			.appendField('form');
		this.appendStatementInput('children')
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(90);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['form'] = function(block) {
	var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_children = Blockly.JavaScript.statementToCode(block, 'children');

	var attribute_array = value_attributes.split(delimiter1);
	var attrib_string = '';
	for (var i = 0; i < attribute_array.length - 1; i++) {
		attrib_string += attribute_array[i].split(delimiter2)[0].slice(1) + '="' + attribute_array[i].split(delimiter2)[1] + '" ';
	}
	var code = '<form ' + attrib_string + '>' + statements_children + '</form>';
	return code;
};
