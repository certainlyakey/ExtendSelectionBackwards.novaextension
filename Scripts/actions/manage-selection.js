/**
 * manage-selection.js
 *
 * Extends or shrinks selection in the backward direction
 */

nova.commands.register(
  "extendSelectionBackwards.extendSelectionBackwards",
  (editor) => {
    const selectedRange = editor.selectedRange;
    if (selectedRange.start > 0) {
      const newSelection = new Range(
        selectedRange.start - 1,
        selectedRange.end
      );
      editor.selectedRange = newSelection;
    }
  }
);

nova.commands.register(
  "extendSelectionBackwards.shrinkSelectionBackwards",
  (editor) => {
    const selectedRange = editor.selectedRange;
    if (selectedRange.length > 1) {
      const newSelection = new Range(
        selectedRange.start + 1,
        selectedRange.end
      );
      editor.selectedRange = newSelection;
    }
  }
);
