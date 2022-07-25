/* eslint-disable no-template-curly-in-string */

// If you can think of useful snippets, please contribute.

import {snippetCompletion as snip } from "@codemirror/autocomplete"
// C++
export const cppSnippets = [
  snip("#include<iostream> \n\nint main() {\n ${} \n}", {
    label: "main",
    type: "macro"
  }),
  snip('std::cout << "${}";', {
    label: "cout",
    type: "macro"
  }),
  snip('if (${}) {\n${}\n}', {
    label: "if",
    detail:"block",
    type: "keyword"
  }),
  snip('if (${}) {\n${}\n} else {\n ${} \n}', {
    label: "if",
    detail:"/ else block",
    type: "keyword"
  }),
  snip('class ${} {\n\tpublic: \n\t ${} \n\tprivate: \n\t ${}\n};', {
    label: "class",
    detail:"definition",
    type: "keyword"
  }),
  snip('for (int ${index} = 0; ${index} < ${bound}; ${index}++) {\n${}\n}', {
    label: "for",
    detail:"loop",
    type: "keyword"
  }),
  snip('while (${condition}) {\n\t${}\n}', {
    label: "while",
    detail:"loop",
    type: "keyword"
  }),
  snip('do {\n\t${}\n} while (${condition})', {
    label: "do",
    detail:"while",
    type: "keyword"
  }),
  snip('struct ${name} {\n\t${}\n};', {
    label: "struct",
    detail:"definition",
    type: "keyword"
  }),
  snip('${type} ${name}(${pType} ${param}) {\n\t${}\n}', {
    label: "function",
    detail:"definition",
    type: "macro"
  }),
  
  
]

// C

export const cSnippets = [
  snip("#include<stdio.h> \n\nint main() {\n ${} \n}", {
    label: "main",
    type: "macro"
  }),
  snip('struct ${name} {\n\t${}\n};', {
    label: "struct",
    detail:"definition",
    type: "keyword"
  }),
  snip('for (int ${index} = 0; ${index} < ${bound}; ${index}++) {\n${}\n}', {
    label: "for",
    detail:"loop",
    type: "keyword"
  }),
  snip('if (${}) {\n${}\n}', {
    label: "if",
    detail:"block",
    type: "keyword"
  }),
  snip('if (${}) {\n${}\n} else {\n ${} \n}', {
    label: "if",
    detail:"/ else block",
    type: "keyword"
  }),
  snip('${type} ${name}(${pType} ${param}) {\n\t${}\n}', {
    label: "function",
    detail:"definition",
    type: "macro"
  }),
  snip('while (${condition}) {\n\t${}\n}', {
    label: "while",
    detail:"loop",
    type: "keyword"
  }),
  snip('do {\n\t${}\n} while (${condition})', {
    label: "do",
    detail:"while",
    type: "keyword"
  }),
]



/// A collection of JavaScript-related
/// [snippets](#autocomplete.snippet).
export const pythonSnippets= [
  snip("def ${name}(${params}): \n\t${}\n", {
    label: "def",
    detail: "definition",
    type: "keyword"
  }),
  snip("for ${index} in range(${b0}, ${b1}):\n\t${}\n", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  snip("while ${}: \n\t${}\n", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  snip("try: \n\t${}\nexcept:\n\t${}\n", {
    label: "try",
    detail: "/ except block",
    type: "keyword"
  }),
  snip("if ${}: \n\t${}\n", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  snip("if ${}: \n\t${}\nelse:\n\t${}\n", {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  snip("class ${name}: \n\t def __init__ (${params}): \n\t\t${}\n\t\n", {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  snip("import ${name}", {
    label: "import",
    type: "keyword"
  }),
]