const lang = Object.freeze({ "fileTypes": ["vhd", "vhdl", "vho", "vht"], "name": "vhdl", "patterns": [{ "include": "#block_processing" }, { "include": "#cleanup" }], "repository": { "architecture_pattern": { "patterns": [{ "begin": "(?x)\n\n						# The word architecture $1\n						\\b((?i:architecture))\\s+\n						\n						# Followed up by a valid $3 or invalid identifier $4\n						(([a-zA-z][a-zA-z0-9_]*)|(.+))(?=\\s)\\s+\n\n						# The word of $5\n						((?i:of))\\s+\n\n						# Followed by a valid $7 or invalid identifier $8\n						(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*(?i:is))\\b\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.type.architecture.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" }, "7": { "name": "entity.name.type.entity.reference.vhdl" }, "8": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\n\n						# Optional word architecture $3\n						(\\s+((?i:architecture)))?\n\n						# Optional same identifier $6 or illegal identifier $7\n						(\\s+((\\3)|(.+?)))?\n\n						# This will cause the previous to capture until just before the ; or $\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.type.architecture.end.vhdl" }, "7": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "name": "support.block.architecture", "patterns": [{ "include": "#block_pattern" }, { "include": "#function_definition_pattern" }, { "include": "#procedure_definition_pattern" }, { "include": "#component_pattern" }, { "include": "#if_pattern" }, { "include": "#process_pattern" }, { "include": "#type_pattern" }, { "include": "#record_pattern" }, { "include": "#for_pattern" }, { "include": "#entity_instantiation_pattern" }, { "include": "#component_instantiation_pattern" }, { "include": "#cleanup" }] }] }, "attribute_list": { "patterns": [{ "begin": "\\'\\(", "beginCaptures": { "0": { "name": "punctuation.vhdl" } }, "end": "\\)", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }, { "include": "#cleanup" }] }] }, "block_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line\n						^\\s*\n\n						(\n							([a-zA-Z][a-zA-Z0-9_]*)\n\n							# Colon\n							\\s*(:)\\s*\n						)?\n\n						(\\s*(?i:block))\n					", "beginCaptures": { "2": { "name": "meta.block.block.name" }, "3": { "name": "keyword.language.vhdl" }, "4": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						((?i:end\\s+block))\n\n						# Optional identifier\n						(\\s+((\\2)|(.+?)))?\n\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "2": { "name": "meta.block.block.end" }, "5": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "name": "meta.block.block", "patterns": [{ "include": "#control_patterns" }, { "include": "#cleanup" }] }] }, "block_processing": { "patterns": [{ "include": "#package_pattern" }, { "include": "#package_body_pattern" }, { "include": "#entity_pattern" }, { "include": "#architecture_pattern" }] }, "case_pattern": { "patterns": [{ "begin": "(?x)\n						# Beginning of line ...\n						^\\s*\n\n						# Optional identifier ... $3 or invalid identifier $4\n						(\n							(\n								 ([a-zA-Z][a-zA-Z0-9_]*)\n								|(.+?)\n							)\n							\\s*:\\s*\n						)?\n\n						# The word case $5\n						\\b((?i:case))\\b\n					", "beginCaptures": { "3": { "name": "entity.name.tag.case.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\\s*\n\n						# The word case $4 or invalid word $5\n						(\\s+(((?i:case))|(.*?)))\n\n						# Optional identifier from before $8 or illegal $9\n						(\\s+((\\2)|(.*?)))?\n\n						# Ending with a semicolon\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "4": { "name": "keyword.language.vhdl" }, "5": { "name": "invalid.illegal.case.required.vhdl" }, "8": { "name": "entity.name.tag.case.end.vhdl" }, "9": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#cleanup" }] }] }, "cleanup": { "patterns": [{ "include": "#comments" }, { "include": "#constants_numeric" }, { "include": "#strings" }, { "include": "#attribute_list" }, { "include": "#syntax_highlighting" }] }, "comments": { "patterns": [{ "match": "--.*$\\n?", "name": "comment.line.double-dash.vhdl" }] }, "component_instantiation_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line ...\n						^\\s*\n\n						# Match a valid identifier $1\n						([a-zA-Z][a-zA-Z0-9_]*)\n\n						# Colon! $2\n						\\s*(:)\\s*\n\n						# Another valid identifier $3\n						([a-zA-Z][a-zA-Z0-9_]*)\\b\n\n						# Make sure we are just the other word, or the beginning of\n						# a generic or port mapping\n						(?=\\s*($|generic|port))\n					", "beginCaptures": { "1": { "name": "entity.name.section.component_instantiation.vhdl" }, "2": { "name": "punctuation.vhdl" }, "3": { "name": "entity.name.tag.component.reference.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }, { "include": "#cleanup" }] }] }, "component_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line ...\n						^\\s*\n\n						# The word component $1\n						\\b((?i:component))\\s+\n\n						# A valid identifier $3 or invalid identifier $4\n						(([a-zA-Z_][a-zA-Z0-9_]*)\\s*|(.+?))(?=\\b(?i:is|port)\\b|$|--)\n\n						# Optional word is $6\n						(\\b((?i:is\\b)))?\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.type.component.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "6": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\\s+\n\n						# The word component $3 or illegal word $4\n						(((?i:component\\b))|(.+?))(?=\\s*|;)\n						\n						# Optional identifier $7 or illegal mismatched $8\n						(\\s+((\\3)|(.+?)))?(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "4": { "name": "invalid.illegal.component.keyword.required.vhdl" }, "7": { "name": "entity.name.type.component.end.vhdl" }, "8": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#generic_list_pattern" }, { "include": "#port_list_pattern" }, { "include": "#comments" }] }] }, "constants_numeric": { "patterns": [{ "match": "\\b([+\\-]?[\\d_]+\\.[\\d_]+([eE][+\\-]?[\\d_]+)?)\\b", "name": "constant.numeric.floating_point.vhdl" }, { "match": "\\b\\d+#[\\h_]+#\\b", "name": "constant.numeric.base_pound_number_pound.vhdl" }, { "match": "\\b[\\d_]+([eE][\\d_]+)?\\b", "name": "constant.numeric.integer.vhdl" }, { "match": '[xX]"[0-9a-fA-F_uUxXzZwWlLhH\\-]+"', "name": "constant.numeric.quoted.double.string.hex.vhdl" }, { "match": '[oO]"[0-7_uUxXzZwWlLhH\\-]+"', "name": "constant.numeric.quoted.double.string.octal.vhdl" }, { "match": '[bB]?"[01_uUxXzZwWlLhH\\-]+"', "name": "constant.numeric.quoted.double.string.binary.vhdl" }, { "captures": { "1": { "name": "invalid.illegal.quoted.double.string.vhdl" } }, "match": '([bBoOxX]".+?")', "name": "constant.numeric.quoted.double.string.illegal.vhdl" }, { "match": "'[01uUxXzZwWlLhH\\-]'", "name": "constant.numeric.quoted.single.std_logic" }] }, "control_patterns": { "patterns": [{ "include": "#case_pattern" }, { "include": "#if_pattern" }, { "include": "#for_pattern" }, { "include": "#while_pattern" }] }, "entity_instantiation_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# Component identifier or illegal identifier $1\n						([a-zA-Z][a-zA-Z0-9_]*)\n\n						# Colon! $2\n						\\s*(:)\\s*\n\n						# Optional word use $4\n						(((?i:use))\\s+)?\n\n						# Required word entity $5\n						((?i:entity))\\s+\n\n						# Optional library unit identifier $8 for invalid identifier $9 followed by a dot $10\n						(\n							(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n							(\\.)\n						)?\n\n						# Entity name reference $12 or illegal identifier $13\n						(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n						# Check to see if we are being followed by either open paren, end of line, or port or generic words\n						(?=\\s*(\\(|$|(?i:port|generic)))\n\n						# Optional architecture elaboration\n						(\n							# Open paren $16\n							\\s*(\\()\\s*\n\n							# Arch identifier $18 or invalid identifier $19\n							(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*\\))\n\n							# Close paren $21\n							\\s*(\\))\n						)?\n					", "beginCaptures": { "1": { "name": "entity.name.section.entity_instantiation.vhdl" }, "2": { "name": "punctuation.vhdl" }, "4": { "name": "keyword.language.vhdl" }, "5": { "name": "keyword.language.vhdl" }, "8": { "name": "entity.name.tag.library.reference.vhdl" }, "9": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "10": { "name": "punctuation.vhdl" }, "12": { "name": "entity.name.tag.entity.reference.vhdl" }, "13": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "16": { "name": "punctuation.vhdl" }, "18": { "name": "entity.name.tag.architecture.reference.vhdl" }, "19": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "21": { "name": "punctuation.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }, { "include": "#cleanup" }] }] }, "entity_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line ...\n						^\\s*\n\n						# The word entity $1\n						((?i:entity\\b))\\s+\n\n						# The identifier $3 or an invalid identifier $4\n						(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))(?=\\s)\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.type.entity.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "end": "(?x)\n\n						# The word end $1\n						\\b((?i:end\\b))\n\n						# Optional word entity $3\n						(\\s+((?i:entity)))?\n\n						# Optional identifier match $6 or indentifier mismatch $7\n						(\\s+((\\3)|(.+?)))?\n						\n						# Make sure there is a semicolon following\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.type.entity.end.vhdl" }, "7": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#comments" }, { "include": "#generic_list_pattern" }, { "include": "#port_list_pattern" }, { "include": "#cleanup" }] }] }, "for_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line\n						^\\s*\n						(\n							# Check for an identifier $2\n							([a-zA-Z][a-zA-Z0-9_]*)\n\n							# Followed by a colon $3\n							\\s*(:)\\s*\n						)?\n\n						# Make sure the next word is not wait\n						(?!(?i:wait\\s*))\n\n						# The for keyword $4\n						\\b((?i:for))\\b\n\n						# Make sure the next word is not all\n						(?!\\s*(?i:all))\n\n					", "beginCaptures": { "2": { "name": "entity.name.tag.for.generate.begin.vhdl" }, "3": { "name": "punctuation.vhdl" }, "4": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\\s+\n						(\n							# Followed by generate or loop $3\n							 ((?i:generate|loop))\n\n							# But it really is required $4\n							|(\\S+)\n						)\\b\n\n						# The matching identifier $7 or an invalid identifier $8\n						(\\s+((\\2)|(.+?)))?\n\n						# Only space and a semicolon left\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "4": { "name": "invalid.illegal.loop.or.generate.required.vhdl" }, "7": { "name": "entity.name.tag.for.generate.end.vhdl" }, "8": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#entity_instantiation_pattern" }, { "include": "#component_pattern" }, { "include": "#component_instantiation_pattern" }, { "include": "#process_pattern" }, { "include": "#cleanup" }] }] }, "function_definition_pattern": { "patterns": [{ "begin": '(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# The word function $1\n						((?i:impure)?\\s*(?i:function))\\s+\n\n						(\n							# A valid normal identifier $3\n							 ([a-zA-Z][a-zA-Z\\d_]*)\n							# A valid string quoted identifier $4\n							|("\\S+")\n							# A valid backslash escaped identifier $5\n							|(\\\\.+\\\\)\n							# An invalid identifier $5\n							|(.+?)\n						)\n\n						# Check to make sure we have a list or we return\n						(?=\\s*\n							(\n								 \\(\n								|(?i:\\breturn\\b)\n							)\n						)\n					', "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.function.function.begin.vhdl" }, "4": { "name": "entity.name.function.function.begin.vhdl" }, "5": { "name": "entity.name.function.function.begin.vhdl" }, "6": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "end": "(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# The word end $1\n						((?i:end))\n\n						# Optional word function $3\n						(\\s+((?i:function)))?\n\n						# Optional matched identifier $6 or mismatched identifier $7\n						(\\s+((\\3|\\4|\\5)|(.+?)))?\n\n						# Ending with whitespace and semicolon\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.function.function.end.vhdl" }, "7": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#parenthetical_list" }, { "include": "#type_pattern" }, { "include": "#record_pattern" }, { "include": "#cleanup" }] }] }, "function_prototype_pattern": { "patterns": [{ "begin": '(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# The word function $1\n						((?i:impure)?\\s*(?i:function))\\s+\n						\n						(\n							# A valid normal identifier $3\n							 ([a-zA-Z][a-zA-Z\\d_]*)\n							# A valid quoted identifier $4\n							|("\\S+")\n							# A valid backslash escaped identifier $5\n							|(\\\\.+\\\\)\n							# An invalid identifier $6\n							|(.+?)\n						)\n\n						# Check to make sure we have a list or we return\n						(?=\\s*\n							(\n								 \\(\n								|(?i:\\breturn\\b)\n							)\n						)\n					', "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.function.function.prototype.vhdl" }, "4": { "name": "entity.name.function.function.prototype.vhdl" }, "5": { "name": "entity.name.function.function.prototype.vhdl" }, "6": { "name": "invalid.illegal.function.name.vhdl" } }, "end": "(?<=;)", "patterns": [{ "begin": "\\b(?i:return)(?=\\s+[^;]+\\s*;)", "beginCaptures": { "0": { "name": "keyword.language.vhdl" } }, "end": "\\;", "endCaptures": { "0": { "name": "punctuation.terminator.function_prototype.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }, { "include": "#cleanup" }] }, { "include": "#parenthetical_list" }, { "include": "#cleanup" }] }] }, "generic_list_pattern": { "patterns": [{ "begin": "\\b(?i:generic)\\b", "beginCaptures": { "0": { "name": "keyword.language.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }] }] }, "if_pattern": { "patterns": [{ "begin": "(?x)\n						(\n							# Optional identifier $2\n							([a-zA-Z][a-zA-Z0-9_]*)\n\n							# Followed by a colon $3\n							\\s*(:)\\s*\n						)?\n\n						# Keyword if $4\n						\\b((?i:if))\\b\n					", "beginCaptures": { "2": { "name": "entity.name.tag.if.generate.begin.vhdl" }, "3": { "name": "punctuation.vhdl" }, "4": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\\s+\n\n						(\n							(\n								# Optional generate or if keyword $4\n								 ((?i:generate|if))\n\n								# Keyword if or generate required $5\n								|(\\S+)\n							)\\b\n							(\n								\\s+\n								(\n									# Optional matching identifier $8\n									 (\\2)\n\n									# Mismatched identifier $9\n									|(.+?)\n								)\n							)?\n						)?\n\n						# Followed by a semicolon\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "4": { "name": "keyword.language.vhdl" }, "5": { "name": "invalid.illegal.if.or.generate.required.vhdl" }, "8": { "name": "entity.name.tag.if.generate.end.vhdl" }, "9": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#process_pattern" }, { "include": "#entity_instantiation_pattern" }, { "include": "#component_pattern" }, { "include": "#component_instantiation_pattern" }, { "include": "#cleanup" }] }] }, "keywords": { "patterns": [{ "match": "'(?i:active|ascending|base|delayed|driving|event|high|image|instance|instance_name|last|last_value|left|leftof|length|low|path|path_name|pos|pred|quiet|range|reverse|reverse_range|right|rightof|simple|simple_name|stable|succ|transaction|val|value)\\b", "name": "keyword.attributes.vhdl" }, { "match": "\\b(?i:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|context|deallocate|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)\\b", "name": "keyword.language.vhdl" }, { "match": "\\b(?i:std|ieee|work|standard|textio|std_logic_1164|std_logic_arith|std_logic_misc|std_logic_signed|std_logic_textio|std_logic_unsigned|numeric_bit|numeric_std|math_complex|math_real|vital_primitives|vital_timing)\\b", "name": "standard.library.language.vhdl" }, { "match": "(\\+|\\-|<=|=|=>|:=|>=|>|<|/|\\||&|(\\*{1,2}))", "name": "keyword.operator.vhdl" }] }, "package_body_pattern": { "patterns": [{ "begin": "(?x)\n						# The word package $1\n						\\b((?i:package))\\s+\n\n						# ... but we want to be a package body $2\n						((?i:body))\\s+\n\n						# The valid identifier $4 or the invalid one $5\n						(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n						# ... and we end it with an is $6\n						((?i:is))\\b\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "2": { "name": "keyword.language.vhdl" }, "4": { "name": "entity.name.section.package_body.begin.vhdl" }, "5": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "6": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end\\b))\n\n						# Optional word package $3 body $4\n						(\\s+((?i:package))\\s+((?i:body)))?\n\n						# Optional identifier $7 or mismatched identifier $8\n						(\\s+((\\4)|(.+?)))?(?=\\s*;)", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "4": { "name": "keyword.language.vhdl" }, "7": { "name": "entity.name.section.package_body.end.vhdl" }, "8": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#protected_body_pattern" }, { "include": "#function_definition_pattern" }, { "include": "#procedure_definition_pattern" }, { "include": "#type_pattern" }, { "include": "#subtype_pattern" }, { "include": "#record_pattern" }, { "include": "#cleanup" }] }] }, "package_pattern": { "patterns": [{ "begin": "(?x)\n						# The word package $1\n						\\b((?i:package))\\s+\n\n						# ... but we do not want to be a package body\n						(?!(?i:body))\n\n						# The valid identifier $3 or the invalid one $4\n						(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n						# ... and we end it with an is $5\n						((?i:is))\\b\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.section.package.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end\\b))\n\n						# Optional word package $3\n						(\\s+((?i:package)))?\n\n						# Optional identifier $6 or mismatched identifier $7\n						(\\s+((\\2)|(.+?)))?(?=\\s*;)", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.section.package.end.vhdl" }, "7": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#protected_pattern" }, { "include": "#function_prototype_pattern" }, { "include": "#procedure_prototype_pattern" }, { "include": "#type_pattern" }, { "include": "#subtype_pattern" }, { "include": "#record_pattern" }, { "include": "#component_pattern" }, { "include": "#cleanup" }] }] }, "protected_body_pattern": { "patterns": [{ "begin": "(?x)\n						\\b((?i:type))\\s+\n\n						# The valid identifier $2 or the invalid one $3\n						(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n						\\b((?i:is\\s+protected\\s+body))\\s+\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.section.protected_body.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						\\b((?i:end\\s+protected\\s+body))\n\n						# Optional identifier\n						(\\s+((\\3)|(.+?)))?\n\n						(?=\\s*;)\n						", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "4": { "name": "entity.name.section.protected_body.end.vhdl" }, "5": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#function_definition_pattern" }, { "include": "#procedure_definition_pattern" }, { "include": "#type_pattern" }, { "include": "#subtype_pattern" }, { "include": "#record_pattern" }, { "include": "#cleanup" }] }] }, "protected_pattern": { "patterns": [{ "begin": "(?x)\n						\\b((?i:type))\\s+\n\n						# The valid identifier $2 or the invalid one $3\n						(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n						\\b((?i:is\\s+protected))\\s+\n\n						# Not body\n						(?!(?i:body))\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdls" }, "3": { "name": "entity.name.section.protected.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						\\b((?i:end\\s+protected))\n\n						# Optional identifier\n						(\\s+((\\3)|(.+?)))?\n\n						# Not body\n						(?!(?i:body))\n\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "4": { "name": "entity.name.section.protected.end.vhdl" }, "5": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#function_prototype_pattern" }, { "include": "#procedure_prototype_pattern" }, { "include": "#type_pattern" }, { "include": "#subtype_pattern" }, { "include": "#record_pattern" }, { "include": "#component_pattern" }, { "include": "#cleanup" }] }] }, "parenthetical_list": { "patterns": [{ "begin": "\\(", "beginCaptures": { "0": { "name": "punctuation.vhdl" } }, "end": "(?<=\\))", "patterns": [{ "begin": `(?=['"a-zA-Z0-9])`, "end": "(;|\\)|,)", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "name": "source.vhdl", "patterns": [{ "include": "#comments" }, { "include": "#parenthetical_pair" }, { "include": "#cleanup" }] }, { "match": "\\)", "name": "invalid.illegal.unexpected.parenthesis.vhdl" }, { "include": "#cleanup" }] }] }, "parenthetical_pair": { "patterns": [{ "begin": "\\(", "beginCaptures": { "0": { "name": "punctuation.vhdl" } }, "end": "\\)", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_pair" }, { "include": "#cleanup" }] }] }, "port_list_pattern": { "patterns": [{ "begin": "\\b(?i:port)\\b", "beginCaptures": { "0": { "name": "keyword.language.vhdl" } }, "end": "(?<=\\))\\s*;", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }] }] }, "procedure_definition_pattern": { "patterns": [{ "begin": '(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# The word function $1\n						((?i:procedure))\\s+\n\n						(\n							# A valid normal identifier $3\n							 ([a-zA-Z][a-zA-Z\\d_]*)\n							# A valid quoted identifier $4\n							|("\\S+")\n							# An invalid identifier $5\n							|(.+?)\n						)\n\n						# Check to make sure we have a list is\n						(?=\\s*(\\(|(?i:is)))\n					', "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.function.procedure.begin.vhdl" }, "4": { "name": "entity.name.function.procedure.begin.vhdl" }, "5": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "end": "(?x)\n						# From the beginning of the line\n						^\\s*\n\n						# The word end $1\n						((?i:end))\n\n						# Optional word function $3\n						(\\s+((?i:procedure)))?\n\n						# Optional matched identifier $6 or mismatched identifier $7\n						(\\s+((\\3|\\4)|(.+?)))?\n\n						# Ending with whitespace and semicolon\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.function.procedure.end.vhdl" }, "7": { "name": "invalid.illegal.mismatched.identifier.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }, { "include": "#control_patterns" }, { "include": "#type_pattern" }, { "include": "#record_pattern" }, { "include": "#cleanup" }] }] }, "procedure_prototype_pattern": { "patterns": [{ "begin": "(?x)\n						\\b((?i:procedure))\\s+\n						(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n						(?=\\s*(\\(|;))\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.function.procedure.begin.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctual.vhdl" } }, "patterns": [{ "include": "#parenthetical_list" }] }] }, "process_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line\n						^\\s*\n\n						(\n							# Optional identifier $2\n							([a-zA-Z][a-zA-Z0-9_]*)\n\n							# Colon $3\n							\\s*(:)\\s*\n						)?\n\n						# The word process #4\n						((?i:process\\b))\n					", "beginCaptures": { "2": { "name": "entity.name.section.process.begin.vhdl" }, "3": { "name": "punctuation.vhdl" }, "4": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						((?i:end))\n\n						# Optional word process $3\n						(\\s+((?i:process)))\n\n						# Optional identifier $6 or invalid identifier $7\n						(\\s+((\\2)|(.+?)))?\n\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "6": { "name": "entity.name.section.process.end.vhdl" }, "7": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#cleanup" }] }] }, "punctuation": { "patterns": [{ "match": "(\\.|,|:|;|\\(|\\))", "name": "punctuation.vhdl" }] }, "record_pattern": { "patterns": [{ "begin": "\\b(?i:record)\\b", "beginCaptures": { "0": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\n\n						# The word record $2\n						\\s+((?i:record))\n\n						# Optional identifier $5 or invalid identifier $6\n						(\\s+(([a-zA-Z][a-zA-Z\\d_]*)|(.*?)))?\n\n						# Only whitespace and semicolons can be left\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "2": { "name": "keyword.language.vhdl" }, "5": { "name": "entity.name.type.record.vhdl" }, "6": { "name": "invalid.illegal.invalid.identifier.vhdl" } }, "patterns": [{ "include": "#cleanup" }] }, { "include": "#cleanup" }] }, "strings": { "patterns": [{ "match": "'.'", "name": "string.quoted.single.vhdl" }, { "begin": '"', "end": '"', "name": "string.quoted.double.vhdl", "patterns": [{ "match": "\\\\.", "name": "constant.character.escape.vhdl" }] }, { "begin": "\\\\", "end": "\\\\", "name": "string.other.backslash.vhdl" }] }, "subtype_pattern": { "patterns": [{ "begin": "(?x)\n						# The word subtype $1\n						\\b((?i:subtype))\\s+\n\n						# Valid identifier $3 or invalid identifier $4\n						(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\\s+\n\n						# The word is $5\n						((?i:is))\\b\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.type.subtype.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "5": { "name": "keyword.language.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#cleanup" }] }] }, "support_constants": { "patterns": [{ "match": "\\b(?i:math_1_over_e|math_1_over_pi|math_1_over_sqrt_2|math_2_pi|math_3_pi_over_2|math_deg_to_rad|math_e|math_log10_of_e|math_log2_of_e|math_log_of_10|math_log_of_2|math_pi|math_pi_over_2|math_pi_over_3|math_pi_over_4|math_rad_to_deg|math_sqrt_2|math_sqrt_pi)\\b", "name": "support.constant.ieee.math_real.vhdl" }, { "match": "\\b(?i:math_cbase_1|math_cbase_j|math_czero|positive_real|principal_value)\\b", "name": "support.constant.ieee.math_complex.vhdl" }, { "match": "\\b(?i:true|false)\\b", "name": "support.constant.std.standard.vhdl" }] }, "support_functions": { "patterns": [{ "match": "\\b(?i:finish|stop|resolution_limit)\\b", "name": "support.function.std.env.vhdl" }, { "match": "\\b(?i:readline|read|writeline|write|endfile|endline)\\b", "name": "support.function.std.textio.vhdl" }, { "match": "\\b(?i:rising_edge|falling_edge|to_bit|to_bitvector|to_stdulogic|to_stdlogicvector|to_stdulogicvector|is_x)\\b", "name": "support.function.ieee.std_logic_1164.vhdl" }, { "match": "\\b(?i:shift_left|shift_right|rotate_left|rotate_right|resize|to_integer|to_unsigned|to_signed)\\b", "name": "support.function.ieee.numeric_std.vhdl" }, { "match": "\\b(?i:arccos(h?)|arcsin(h?)|arctan|arctanh|cbrt|ceil|cos|cosh|exp|floor|log10|log2|log|realmax|realmin|round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\b", "name": "support.function.ieee.math_real.vhdl" }, { "match": "\\b(?i:arg|cmplx|complex_to_polar|conj|get_principal_value|polar_to_complex)\\b", "name": "support.function.ieee.math_complex.vhdl" }] }, "support_types": { "patterns": [{ "match": "\\b(?i:boolean|bit|character|severity_level|integer|real|time|delay_length|now|natural|positive|string|bit_vector|file_open_kind|file_open_status|fs|ps|ns|us|ms|sec|min|hr|severity_level|note|warning|error|failure)\\b", "name": "support.type.std.standard.vhdl" }, { "match": "\\b(?i:line|text|side|width|input|output)\\b", "name": "support.type.std.textio.vhdl" }, { "match": "\\b(?i:std_logic|std_ulogic|std_logic_vector|std_ulogic_vector)\\b", "name": "support.type.ieee.std_logic_1164.vhdl" }, { "match": "\\b(?i:signed|unsigned)\\b", "name": "support.type.ieee.numeric_std.vhdl" }, { "match": "\\b(?i:complex|complex_polar)\\b", "name": "support.type.ieee.math_complex.vhdl" }] }, "syntax_highlighting": { "patterns": [{ "include": "#keywords" }, { "include": "#punctuation" }, { "include": "#support_constants" }, { "include": "#support_types" }, { "include": "#support_functions" }] }, "type_pattern": { "patterns": [{ "begin": "(?x)\n						# The word type $1\n						\\b((?i:type))\\s+\n\n						# Valid identifier $3 or invalid identifier $4\n						(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n						(\n							# A semicolon is coming up if we are incomplete\n							 (?=\\s*;)\n\n							# Or the word is comes up $7\n							|(\\s+((?i:is)))\n						)\\b\n					", "beginCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "entity.name.type.type.vhdl" }, "4": { "name": "invalid.illegal.invalid.identifier.vhdl" }, "7": { "name": "keyword.language.vhdl" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.vhdl" } }, "patterns": [{ "include": "#record_pattern" }, { "include": "#cleanup" }] }] }, "while_pattern": { "patterns": [{ "begin": "(?x)\n						# From the beginning of the line\n						^\\s*\n						(\n							# Check for an identifier $2\n							([a-zA-Z][a-zA-Z0-9_]*)\n\n							# Followed by a colon $3\n							\\s*(:)\\s*\n						)?\n\n						# The for keyword $4\n						\\b((?i:while))\\b\n					", "beginCaptures": { "2": { "name": "" }, "3": { "name": "punctuation.vhdl" }, "4": { "name": "keyword.language.vhdl" } }, "end": "(?x)\n						# The word end $1\n						\\b((?i:end))\\s+\n						(\n							# Followed by keyword loop $3\n							 ((?i:loop))\n\n							# But it really is required $4\n							|(\\S+)\n						)\\b\n\n						# The matching identifier $7 or an invalid identifier $8\n						(\\s+((\\2)|(.+?)))?\n\n						# Only space and a semicolon left\n						(?=\\s*;)\n					", "endCaptures": { "1": { "name": "keyword.language.vhdl" }, "3": { "name": "keyword.language.vhdl" }, "4": { "name": "invalid.illegal.loop.keyword.required.vhdl" }, "7": { "name": "entity.name.tag.while.loop.vhdl" }, "8": { "name": "invalid.illegal.mismatched.identifier" } }, "patterns": [{ "include": "#control_patterns" }, { "include": "#cleanup" }] }] } }, "scopeName": "source.vhdl", "displayName": "VHDL" });
var vhdl = [
  lang
];

export { vhdl as default };
