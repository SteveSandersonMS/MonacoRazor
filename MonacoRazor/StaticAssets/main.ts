import * as monaco from 'monaco-editor';

export function init(element: HTMLElement, language: string, value: string) {
    monaco.editor.create(element, {
        value: value,
        language: language,
        minimap: { enabled: false },
    });
}
