import * as monaco from 'monaco-editor';

type DotNetObjectReference = any;

export function init(element: HTMLElement, component: DotNetObjectReference, language: string, value: string) {
    const editor = monaco.editor.create(element, {
        value: value,
        language: language,
        minimap: { enabled: false },
    });

    editor.onDidBlurEditorText(() => {
        const value = editor.getValue();
        component.invokeMethodAsync('HandleEditorBlur', value);
    });
}
