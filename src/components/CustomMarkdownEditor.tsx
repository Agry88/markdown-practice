import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

type Props = {
  markdownValue: string;
  setMarkdownValue: (value: string) => void;
}

export default function CustomMarkdownEditor({ markdownValue, setMarkdownValue }: Props) {
  return (
    <div>
      <MDEditor
        value={markdownValue}
        onChange={v => setMarkdownValue(v as string)}
        preview="edit"
      />
    </div>
  );
}