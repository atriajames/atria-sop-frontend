import React from "react";

function PreviewPane({ content }) {
  return (
    <div>
      <h3>Live SOP Preview</h3>
      <pre>{content}</pre>
    </div>
  );
}

export default PreviewPane;
