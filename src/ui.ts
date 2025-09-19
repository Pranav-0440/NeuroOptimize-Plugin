import * as vscode from "vscode";

export function showHint(doc: vscode.TextDocument, range: vscode.Range) {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document !== doc) return;

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
