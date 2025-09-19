import * as vscode from "vscode";
import { analyzeDocument } from "./analyzer";

export function activate(context: vscode.ExtensionContext) {
  console.log("NeuroOptimize Plugin Activated ✅");

  // Register document change listener
  vscode.workspace.onDidChangeTextDocument(event => {
    if (event.document.languageId === "java") {
      analyzeDocument(event.document);
    }
  });

  // Run analyzer on file open
  vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId === "java") {
      analyzeDocument(doc);
    }
  });
}

export function deactivate() {}
