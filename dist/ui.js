"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHint = showHint;
const vscode = require("vscode");
function showHint(doc, range) {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document !== doc)
        return;
    const decorationType = vscode.window.createTextEditorDecorationType({
        after: {
            contentText: "💡 NeuroOptimize Suggestion: Consider parallelizing loops here.",
            color: "#00c853",
            margin: "20px"
        }
    });
    editor.setDecorations(decorationType, [range]);
    // Auto clear decoration after 10 seconds
    setTimeout(() => {
        editor.setDecorations(decorationType, []);
    }, 10000);
}
