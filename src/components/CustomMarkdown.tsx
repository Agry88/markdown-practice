import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

function CustomMarkdown() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <MDEditor value={value} onChange={v => setValue(v as string)} />
    </div>
  );
}

export default CustomMarkdown;