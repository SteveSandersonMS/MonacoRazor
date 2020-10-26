import * as monaco from 'monaco-editor';

export function init(element: HTMLElement) {
    monaco.editor.create(element, {
        value: "function hello() {\n\talert('Hello world!');\n}",
	    language: "javascript"
    });
}
