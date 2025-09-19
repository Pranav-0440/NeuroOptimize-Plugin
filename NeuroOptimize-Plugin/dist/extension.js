"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const analyzer_1 = require("./analyzer");
function activate(context) {
    console.log("NeuroOptimize Plugin Activated ✅");
    // Register document change listener
    vscode.workspace.onDidChangeTextDocument(event => {
        if (event.document.languageId === "java") {
            (0, analyzer_1.analyzeDocument)(event.document);
        }
    });
    // Run analyzer on file open
    vscode.workspace.onDidOpenTextDocument(doc => {
        if (doc.languageId === "java") {
            (0, analyzer_1.analyzeDocument)(doc);
        }
    });
}
function deactivate() { }
