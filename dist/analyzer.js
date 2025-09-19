"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeDocument = analyzeDocument;
const vscode = require("vscode");
const ui_1 = require("./ui");
function analyzeDocument(doc) {
    const text = doc.getText();
    // Simple regex: detect methods with @NeuroOptimize
    const regex = /@NeuroOptimize[\s\S]*?\)\s*{[\s\S]*?}/g;
    const matches = [...text.matchAll(regex)];
    matches.forEach(match => {
        if (match.index !== undefined) {
            const startPos = doc.positionAt(match.index);
            const endPos = doc.positionAt(match.index + match[0].length);
            // Show inline optimization suggestion
            (0, ui_1.showHint)(doc, new vscode.Range(startPos, endPos));
        }
    });
}
