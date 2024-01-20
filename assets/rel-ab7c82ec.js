const lang = Object.freeze({ "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json", "name": "rel", "patterns": [{ "include": "#strings" }, { "include": "#comment" }, { "include": "#single-line-comment-consuming-line-ending" }, { "include": "#deprecated-temporary" }, { "include": "#operators" }, { "include": "#symbols" }, { "include": "#keywords" }, { "include": "#otherkeywords" }, { "include": "#types" }, { "include": "#constants" }], "repository": { "strings": { "name": "string.quoted.double.rel", "begin": '"', "end": '"', "patterns": [{ "name": "constant.character.escape.rel", "match": "\\\\." }] }, "comment": { "patterns": [{ "name": "comment.block.documentation.rel", "begin": "/\\*\\*(?!/)", "beginCaptures": { "0": { "name": "punctuation.definition.comment.rel" } }, "end": "\\*/", "endCaptures": { "0": { "name": "punctuation.definition.comment.rel" } }, "patterns": [{ "include": "#docblock" }] }, { "name": "comment.block.rel", "begin": "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?", "beginCaptures": { "1": { "name": "punctuation.definition.comment.rel" }, "2": { "name": "storage.type.internaldeclaration.rel" }, "3": { "name": "punctuation.decorator.internaldeclaration.rel" } }, "end": "\\*/", "endCaptures": { "0": { "name": "punctuation.definition.comment.rel" } } }, { "name": "comment.block.documentation.rel", "begin": 'doc"""', "end": '"""' }, { "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)", "beginCaptures": { "1": { "name": "punctuation.whitespace.comment.leading.rel" }, "2": { "name": "comment.line.double-slash.rel" }, "3": { "name": "punctuation.definition.comment.rel" }, "4": { "name": "storage.type.internaldeclaration.rel" }, "5": { "name": "punctuation.decorator.internaldeclaration.rel" } }, "end": "(?=$)", "contentName": "comment.line.double-slash.rel" }] }, "single-line-comment-consuming-line-ending": { "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)", "beginCaptures": { "1": { "name": "punctuation.whitespace.comment.leading.rel" }, "2": { "name": "comment.line.double-slash.rel" }, "3": { "name": "punctuation.definition.comment.rel" }, "4": { "name": "storage.type.internaldeclaration.rel" }, "5": { "name": "punctuation.decorator.internaldeclaration.rel" } }, "end": "(?=^)", "contentName": "comment.line.double-slash.rel" }, "deprecated-temporary": { "patterns": [{ "name": "keyword.other.rel", "match": "@inspect" }] }, "operators": { "patterns": [{ "name": "keyword.other.rel", "match": "(\\b(if|then|else|and|or|not|eq|neq|lt|lt_eq|gt|gt_eq)\\b)|(\\+|\\-|\\*|\\/|\xF7|\\^|\\%|\\=|\\!\\=|\u2260|\\<|\\<\\=|\u2264|\\>|\\>\\=|\u2265|\\&)|\\s+(end)" }] }, "symbols": { "patterns": [{ "name": "variable.parameter.rel", "match": "(:[\\[_$[:alpha:]](\\]|[_$[:alnum:]]*))" }] }, "keywords": { "patterns": [{ "name": "keyword.control.rel", "match": "(\\b(def|entity|bound|include|ic|forall|exists|\u2200|\u2203|return|module|^end)\\b)|(((\\<)?\\|(\\>)?)|\u2200|\u2203)" }] }, "otherkeywords": { "patterns": [{ "name": "keyword.other.rel", "match": "\\s*(@inline)\\s*|\\s*(@auto_number)\\s*|\\s*(function)\\s|(\\b(implies|select|from|\u2208|where|for|in)\\b)|(((\\<)?\\|(\\>)?)|\u2208)" }] }, "types": { "patterns": [{ "name": "entity.name.type.rel", "match": "(\\b(Symbol|Char|Bool|Rational|FixedDecimal|Float16|Float32|Float64|Int8|Int16|Int32|Int64|Int128|UInt8|UInt16|UInt32|UInt64|UInt128|Date|DateTime|Day|Week|Month|Year|Nanosecond|Microsecond|Millisecond|Second|Minute|Hour|FilePos|HashValue|AutoNumberValue)\\b)" }] }, "constants": { "patterns": [{ "name": "constant.language.rel", "match": "(\\b(true|false)\\b)" }] } }, "scopeName": "source.rel", "displayName": "Rel" });
var rel = [
  lang
];

export { rel as default };
