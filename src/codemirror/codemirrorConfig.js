/**
 * codemirrorConfig.js
 * Created by Sharan Sajiv Menon
 * 
 */

import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp'
import * as snippets from './snippets';
import { completeFromList } from '@codemirror/autocomplete';

export const langDict = {
    "Python": python,
    "C++": cpp,
    "C": cpp
}

export const langAutocomplete = {
    "Python": [completeFromList(snippets.pythonSnippets)],
    "C++": [completeFromList(snippets.cppSnippets)],
    "C": [completeFromList(snippets.cSnippets)]
}