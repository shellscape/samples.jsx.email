import typescript from './typescript-95afed98.js';
import handlebars from './handlebars-45ae059f.js';
import './html-b7eb033b.js';
import './javascript-78122384.js';
import './css-3bffa9b0.js';
import './yaml-a1f70f1a.js';

const lang = Object.freeze({ "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json", "name": "glimmer-ts", "scopeName": "source.gts", "patterns": [{ "include": "source.ts" }], "injections": { "L:source.gts -comment -string": { "patterns": [{ "name": "meta.js.embeddedTemplateWithoutArgs", "begin": "\\s*(<)(template)\\s*(>)", "beginCaptures": { "1": { "name": "punctuation.definition.tag.html" }, "2": { "name": "entity.name.tag.other.html" }, "3": { "name": "punctuation.definition.tag.html" } }, "end": "(</)(template)(>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.html" }, "2": { "name": "entity.name.tag.other.html" }, "3": { "name": "punctuation.definition.tag.html" } }, "patterns": [{ "include": "text.html.handlebars" }] }, { "name": "meta.js.embeddedTemplateWithArgs", "begin": "(<)(template)", "beginCaptures": { "1": { "name": "punctuation.definition.tag.html" }, "2": { "name": "entity.name.tag.other.html" } }, "end": "(</)(template)(>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.html" }, "2": { "name": "entity.name.tag.other.html" }, "3": { "name": "punctuation.definition.tag.html" } }, "patterns": [{ "begin": "(?<=\\<template)", "end": "(?=\\>)", "patterns": [{ "include": "text.html.handlebars#tag-stuff" }] }, { "begin": "(>)", "beginCaptures": { "1": { "name": "punctuation.definition.tag.end.js" } }, "end": "(?=</template>)", "contentName": "meta.html.embedded.block", "patterns": [{ "include": "text.html.handlebars" }] }] }] } }, "displayName": "Glimmer TS", "aliases": ["gts"], "embeddedLangs": ["typescript", "handlebars"] });
var glimmerTs = [
  ...typescript,
  ...handlebars,
  lang
];

export { glimmerTs as default };
