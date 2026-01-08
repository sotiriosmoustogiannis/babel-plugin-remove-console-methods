module.exports = function removeConsolePlugin({ types: t }) {
  return {
    name: "remove-console-methods",
    visitor: {
      CallExpression(path, state) {
        // Get the function
        const callee = path.get("callee");

        // Continue only if the function is console.<method>
        if (
          !callee.isMemberExpression() ||
          !callee.get("object").isIdentifier({ name: "console" })
        ) {
          return;
        }

        // Get the <method> name
        const method = callee.get("property").node.name;
        // Get the options from babel config or "log" by default
        const options = state.opts || {};
        const removeList = options.remove || ["log"];

        // Continue only if the method is on removeList
        if (!removeList.includes(method)) return;

        // Get all comments in the file
        const allComments = path.hub.file.ast.comments || [];
        // Get the line of the console.<method> function
        const nodeLine = path.node.loc.start.line;

        // Check if any comment with 'keep' is on the same line of console.<method>
        const keep = allComments.some(
          (c) =>
            c.value.includes("keep") && (c.loc.start.line === nodeLine)
        );

        // Skip the removal of console.<method> if the keep comment exists
        if (keep) return; // skip removing

        // Remove the call from AST
        path.remove();
      }
    }
  };
};
