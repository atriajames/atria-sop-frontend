import React, { useState } from "react";
import './App.css';
import SectionBuilder from "./components/SectionBuilder";
import PreviewPane from "./components/PreviewPane";
import { generateSOP, exportDocx } from "./api";

function App() {
  const [purpose, setPurpose] = useState("");
  const [sections, setSections] = useState([]);
  const [preview, setPreview] = useState("");

  const handleGenerate = async () => {
    const response = await generateSOP({ purpose, sections });
    setPreview(response.inline);
  };

  const handleExport = async () => {
    await exportDocx({ purpose, sections });
  };

  return (
    <div className="App">
      <h1>Atria SOP Generator</h1>

      <textarea
        placeholder="Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />

      <SectionBuilder sections={sections} setSections={setSections} />

      <button onClick={handleGenerate}>Generate Preview</button>
      <button onClick={handleExport}>Download .docx</button>

      <PreviewPane content={preview} />
    </div>
  );
}

export default App;
