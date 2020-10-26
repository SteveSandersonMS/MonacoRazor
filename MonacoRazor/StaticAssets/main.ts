//import * as monaco from 'monaco-editor';

export function init(element: HTMLElement) {
    console.log(element, {
        value: "function hello() {\n\talert('Hello world!');\n}",
	    language: "javascript"
    });
}
