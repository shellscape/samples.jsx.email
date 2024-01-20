import xml from './xml-a24e2a65.js';
import './java-60c01165.js';

const lang = Object.freeze({ "displayName": "XSL", "name": "xsl", "patterns": [{ "begin": "(<)(xsl)((:))(template)", "captures": { "1": { "name": "punctuation.definition.tag.xml" }, "2": { "name": "entity.name.tag.namespace.xml" }, "3": { "name": "entity.name.tag.xml" }, "4": { "name": "punctuation.separator.namespace.xml" }, "5": { "name": "entity.name.tag.localname.xml" } }, "end": "(>)", "name": "meta.tag.xml.template", "patterns": [{ "captures": { "1": { "name": "entity.other.attribute-name.namespace.xml" }, "2": { "name": "entity.other.attribute-name.xml" }, "3": { "name": "punctuation.separator.namespace.xml" }, "4": { "name": "entity.other.attribute-name.localname.xml" } }, "match": " (?:([-_a-zA-Z0-9]+)((:)))?([a-zA-Z-]+)" }, { "include": "#doublequotedString" }, { "include": "#singlequotedString" }] }, { "include": "text.xml" }], "repository": { "doublequotedString": { "begin": '"', "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.xml" } }, "end": '"', "endCaptures": { "0": { "name": "punctuation.definition.string.end.xml" } }, "name": "string.quoted.double.xml" }, "singlequotedString": { "begin": "'", "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.xml" } }, "end": "'", "endCaptures": { "0": { "name": "punctuation.definition.string.end.xml" } }, "name": "string.quoted.single.xml" } }, "scopeName": "text.xml.xsl", "embeddedLangs": ["xml"] });
var xsl = [
  ...xml,
  lang
];

export { xsl as default };
