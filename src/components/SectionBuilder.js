import React, { useState } from "react";

function SectionBuilder({ sections, setSections }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [indent, setIndent] = useState(1);

  const addBlock = () => {
    const updated = [...sections];
    const existing = updated.find((s) => s.title === title);

    if (!existing) {
      updated.push({ title, content: [{ text, indent }] });
    } else {
      existing.content.push({ text, indent });
    }

    setSections(updated);
    setText("");
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Add Section Content</h3>

      <input
        placeholder="Section Title (e.g., 1) Objectives)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          placeholder="Content"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1 }}
        />

        <select
          value={indent}
          onChange={(e) => setIndent(Number(e.target.value))}
          style={{ width: "120px" }}
        >
          <option value={0}>1</option>
          <option value={1}>a</option>
          <option value={2}>i</option>
        </select>

        <button onClick={addBlock}>+ Add</button>
      </div>
    </div>
  );
}

export default SectionBuilder;
