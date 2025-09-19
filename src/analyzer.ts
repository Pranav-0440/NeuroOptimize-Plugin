import * as vscode from "vscode";
import { showHint } from "./ui";

export function analyzeDocument(doc: vscode.TextDocument) {
  const text = doc.getText();

  // Simple regex: detect methods with @NeuroOptimize
  const regex = /@NeuroOptimize[\s\S]*?\)\s*{[\s\S]*?}/g;
  const matches = [...text.matchAll(regex)];

  matches.forEach(match => {
    if (match.index !== undefined) {
      const startPos = doc.positionAt(match.index);
      const endPos = doc.positionAt(match.index + match[0].length);

      // Show inline optimization suggestion
      showHint(doc, new vscode.Range(startPos, endPos));
    }
  });
}
