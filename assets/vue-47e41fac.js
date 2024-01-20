import html from './html-b7eb033b.js';
import markdown from './markdown-ed943c64.js';
import pug from './pug-078b05a0.js';
import stylus from './stylus-9e6b7c69.js';
import sass from './sass-2f8a90c6.js';
import css from './css-3bffa9b0.js';
import scss from './scss-abbedc35.js';
import less from './less-d39c6032.js';
import javascript from './javascript-78122384.js';
import typescript from './typescript-95afed98.js';
import jsx from './jsx-936d7c66.js';
import tsx from './tsx-bf5a80fb.js';
import json from './json-e36dbadf.js';
import jsonc from './jsonc-ef9dbafe.js';
import json5 from './json5-e54cc5fc.js';
import yaml from './yaml-a1f70f1a.js';
import toml from './toml-69f7494a.js';
import graphql from './graphql-b21c89b2.js';
import './ini-bc64dff2.js';
import './java-b36a89bb.js';
import './lua-051aa45b.js';
import './c-7bcddbf3.js';
import './make-2e432946.js';
import './perl-08c6522f.js';
import './xml-2818825a.js';
import './sql-1d674688.js';
import './r-b56421d0.js';
import './ruby-9131b804.js';
import './shellscript-54242dab.js';
import './php-131a7018.js';
import './vb-0bef84f1.js';
import './xsl-47a4c68f.js';
import './bat-1fc78d58.js';
import './clojure-21ee6759.js';
import './coffee-c52ba301.js';
import './cpp-f375ae77.js';
import './glsl-ff21ad95.js';
import './diff-05acac23.js';
import './docker-aaa834a3.js';
import './git-commit-20f66a18.js';
import './git-rebase-d06cbd62.js';
import './go-99671c7f.js';
import './groovy-8885900c.js';
import './objective-c-9a016530.js';
import './swift-15b85260.js';
import './raku-2d15cbef.js';
import './powershell-075a0e94.js';
import './python-061aa9fe.js';
import './julia-7981d1ff.js';
import './rust-4c4b1860.js';
import './scala-0e39458f.js';
import './csharp-da203bba.js';
import './fsharp-4fc27eb6.js';
import './dart-6959c1de.js';
import './handlebars-45ae059f.js';
import './erlang-a119c8e1.js';
import './elixir-a80c6cfa.js';
import './latex-4e1783a9.js';
import './tex-75615637.js';
import './haskell-69459b5c.js';
import './gnuplot-064c9701.js';
import './bibtex-dab21ee7.js';

const lang = Object.freeze({ "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json", "name": "vue", "scopeName": "source.vue", "patterns": [{ "include": "text.html.basic#comment" }, { "include": "#self-closing-tag" }, { "begin": "(<)", "beginCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" } }, "end": "(>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.end.html.vue" } }, "patterns": [{ "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)md\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "text.html.markdown", "patterns": [{ "include": "text.html.markdown" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)html\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "text.html.derivative", "patterns": [{ "include": "#html-stuff" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)pug\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "text.pug", "patterns": [{ "include": "text.pug" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)stylus\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.stylus", "patterns": [{ "include": "source.stylus" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)postcss\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.postcss", "patterns": [{ "include": "source.postcss" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)sass\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.sass", "patterns": [{ "include": "source.sass" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)css\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.css", "patterns": [{ "include": "source.css" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)scss\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.css.scss", "patterns": [{ "include": "source.css.scss" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)less\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.css.less", "patterns": [{ "include": "source.css.less" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)js\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.js", "patterns": [{ "include": "source.js" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)ts\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.ts", "patterns": [{ "include": "source.ts" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsx\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.js.jsx", "patterns": [{ "include": "source.js.jsx" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)tsx\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.tsx", "patterns": [{ "include": "source.tsx" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.json", "patterns": [{ "include": "source.json" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsonc\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.json.comments", "patterns": [{ "include": "source.json.comments" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json5\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.json5", "patterns": [{ "include": "source.json5" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)yaml\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.yaml", "patterns": [{ "include": "source.yaml" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)toml\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.toml", "patterns": [{ "include": "source.toml" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)(gql|graphql)\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.graphql", "patterns": [{ "include": "source.graphql" }] }] }, { "begin": `([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)vue\\b\\2)`, "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "source.vue", "patterns": [{ "include": "source.vue" }] }] }, { "begin": "(template)\\b", "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/template\\b)", "name": "text.html.derivative", "patterns": [{ "include": "#html-stuff" }] }] }, { "begin": "(script)\\b", "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/script\\b)", "name": "source.js", "patterns": [{ "include": "source.js" }] }] }, { "begin": "(style)\\b", "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/style\\b)", "name": "source.css", "patterns": [{ "include": "source.css" }] }] }, { "begin": "([a-zA-Z0-9:-]+)", "beginCaptures": { "1": { "name": "entity.name.tag.$1.html.vue" } }, "end": "(</)(\\1)\\s*(?=>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "patterns": [{ "include": "#tag-stuff" }, { "begin": "(?<=>)", "end": "(?=<\\/)", "name": "text" }] }] }], "repository": { "self-closing-tag": { "begin": "(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))", "beginCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "end": "(/>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.end.html.vue" } }, "name": "self-closing-tag", "patterns": [{ "include": "#tag-stuff" }] }, "template-tag": { "patterns": [{ "include": "#template-tag-1" }, { "include": "#template-tag-2" }] }, "template-tag-1": { "begin": "(<)(template)\\b(>)", "beginCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" }, "3": { "name": "punctuation.definition.tag.end.html.vue" } }, "end": "(/?>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.end.html.vue" } }, "name": "meta.template-tag.start", "patterns": [{ "begin": "\\G", "end": "(?=/>)|((</)(template)\\b)", "endCaptures": { "2": { "name": "punctuation.definition.tag.begin.html.vue" }, "3": { "name": "entity.name.tag.$3.html.vue" } }, "name": "meta.template-tag.end", "patterns": [{ "include": "#html-stuff" }] }] }, "template-tag-2": { "begin": "(<)(template)\\b", "beginCaptures": { "1": { "name": "punctuation.definition.tag.begin.html.vue" }, "2": { "name": "entity.name.tag.$2.html.vue" } }, "end": "(/?>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.end.html.vue" } }, "name": "meta.template-tag.start", "patterns": [{ "begin": "\\G", "end": "(?=/>)|((</)(template)\\b)", "endCaptures": { "2": { "name": "punctuation.definition.tag.begin.html.vue" }, "3": { "name": "entity.name.tag.$3.html.vue" } }, "name": "meta.template-tag.end", "patterns": [{ "include": "#tag-stuff" }, { "include": "#html-stuff" }] }] }, "html-stuff": { "patterns": [{ "include": "#template-tag" }, { "include": "text.html.derivative" }, { "include": "text.html.basic" }] }, "tag-stuff": { "begin": "\\G", "end": "(?=/>)|(>)", "endCaptures": { "1": { "name": "punctuation.definition.tag.end.html.vue" } }, "name": "meta.tag-stuff", "patterns": [{ "include": "#vue-directives" }, { "include": "text.html.basic#attribute" }] }, "vue-directives": { "patterns": [{ "include": "#vue-directives-control" }, { "include": "#vue-directives-style-attr" }, { "include": "#vue-directives-original" }, { "include": "#vue-directives-generic-attr" }] }, "vue-directives-original": { "begin": "(?:\\b(v-)|([:\\.])|(@)|(#))(\\[?)([\\w\\-]*)(\\]?)(?:\\.([\\w\\-]*))*", "beginCaptures": { "1": { "name": "entity.other.attribute-name.html.vue" }, "2": { "name": "punctuation.attribute-shorthand.bind.html.vue" }, "3": { "name": "punctuation.attribute-shorthand.event.html.vue" }, "4": { "name": "punctuation.attribute-shorthand.slot.html.vue" }, "5": { "name": "punctuation.separator.key-value.html.vue" }, "6": { "name": "entity.other.attribute-name.html.vue" }, "7": { "name": "punctuation.separator.key-value.html.vue" }, "8": { "name": "entity.other.attribute-name.html.vue" }, "9": { "name": "punctuation.separator.key-value.html.vue" } }, "end": "(?=\\s*+[^=\\s])", "endCaptures": { "1": { "name": "punctuation.definition.string.end.html.vue" } }, "name": "meta.attribute.directive.vue", "patterns": [{ "include": "#vue-directives-expression" }] }, "vue-directives-control": { "begin": "(v-for)|(v-if|v-else-if|v-else)", "captures": { "1": { "name": "keyword.control.loop.vue" }, "2": { "name": "keyword.control.conditional.vue" } }, "end": "(?=\\s*+[^=\\s])", "name": "meta.attribute.directive.control.vue", "patterns": [{ "include": "#vue-directives-expression" }] }, "vue-directives-expression": { "patterns": [{ "begin": "(=)\\s*('|\"|`)", "beginCaptures": { "1": { "name": "punctuation.separator.key-value.html.vue" }, "2": { "name": "punctuation.definition.string.begin.html.vue" } }, "end": "(\\2)", "endCaptures": { "1": { "name": "punctuation.definition.string.end.html.vue" } }, "patterns": [{ "begin": "(?<=('|\"|`))", "end": "(?=\\1)", "name": "source.ts.embedded.html.vue", "patterns": [{ "include": "source.ts" }] }] }, { "begin": "(=)\\s*(?=[^'\"`])", "beginCaptures": { "1": { "name": "punctuation.separator.key-value.html.vue" } }, "end": "(?=(\\s|>|\\/>))", "patterns": [{ "begin": "(?=[^'\"`])", "end": "(?=(\\s|>|\\/>))", "name": "source.ts.embedded.html.vue", "patterns": [{ "include": "source.ts" }] }] }] }, "vue-directives-style-attr": { "begin": "\\b(style)\\s*(=)", "captures": { "1": { "name": "entity.other.attribute-name.html.vue" }, "2": { "name": "punctuation.separator.key-value.html.vue" } }, "end": `(?<='|")`, "name": "meta.attribute.style.vue", "patterns": [{ "comment": "Copy from source.css#rule-list-innards", "begin": `('|")`, "beginCaptures": { "1": { "name": "punctuation.definition.string.begin.html.vue" } }, "end": "(\\1)", "endCaptures": { "1": { "name": "punctuation.definition.string.end.html.vue" } }, "name": "source.css.embedded.html.vue", "patterns": [{ "include": "source.css#comment-block" }, { "include": "source.css#escapes" }, { "include": "source.css#font-features" }, { "match": "(?x) (?<![\\w-])\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*", "name": "variable.css" }, { "begin": "(?<![-a-zA-Z])(?=[-a-zA-Z])", "end": "$|(?![-a-zA-Z])", "name": "meta.property-name.css", "patterns": [{ "include": "source.css#property-names" }] }, { "comment": "Modify end to fix #199. TODO: handle ' character.", "begin": "(:)\\s*", "beginCaptures": { "1": { "name": "punctuation.separator.key-value.css" } }, "end": `\\s*(;)|\\s*(?='|")`, "endCaptures": { "1": { "name": "punctuation.terminator.rule.css" } }, "contentName": "meta.property-value.css", "patterns": [{ "include": "source.css#comment-block" }, { "include": "source.css#property-values" }] }, { "match": ";", "name": "punctuation.terminator.rule.css" }] }] }, "vue-directives-generic-attr": { "begin": "\\b(generic)\\s*(=)", "captures": { "1": { "name": "entity.other.attribute-name.html.vue" }, "2": { "name": "punctuation.separator.key-value.html.vue" } }, "end": `(?<='|")`, "name": "meta.attribute.generic.vue", "patterns": [{ "begin": `('|")`, "beginCaptures": { "1": { "name": "punctuation.definition.string.begin.html.vue" } }, "end": "(\\1)", "endCaptures": { "1": { "name": "punctuation.definition.string.end.html.vue" } }, "name": "meta.type.parameters.vue", "comment": "https://github.com/microsoft/vscode/blob/fd4346210f59135fad81a8b8c4cea7bf5a9ca6b4/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L4002-L4020", "patterns": [{ "include": "source.ts#comment" }, { "name": "storage.modifier.ts", "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))" }, { "include": "source.ts#type" }, { "include": "source.ts#punctuation-comma" }, { "name": "keyword.operator.assignment.ts", "match": "(=)(?!>)" }] }] }, "vue-interpolations": { "patterns": [{ "begin": "(\\{\\{)", "beginCaptures": { "1": { "name": "punctuation.definition.interpolation.begin.html.vue" } }, "end": "(\\}\\})", "endCaptures": { "1": { "name": "punctuation.definition.interpolation.end.html.vue" } }, "name": "expression.embedded.vue", "patterns": [{ "begin": "\\G", "end": "(?=\\}\\})", "name": "source.ts.embedded.html.vue", "patterns": [{ "include": "source.ts" }] }] }] } }, "displayName": "Vue", "embeddedLangs": ["html", "markdown", "pug", "stylus", "sass", "css", "scss", "less", "javascript", "typescript", "jsx", "tsx", "json", "jsonc", "json5", "yaml", "toml", "graphql"] });
var vue = [
  ...html,
  ...markdown,
  ...pug,
  ...stylus,
  ...sass,
  ...css,
  ...scss,
  ...less,
  ...javascript,
  ...typescript,
  ...jsx,
  ...tsx,
  ...json,
  ...jsonc,
  ...json5,
  ...yaml,
  ...toml,
  ...graphql,
  lang
];

export { vue as default };
