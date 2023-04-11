import dynamic from "next/dynamic";
import "@uiw/react-markdown-preview/markdown.css";

type Props = {
  markdownValue: string;
}

const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

export default function CustomMarkdownViewer({ markdownValue }: Props) {
  return (
    <Markdown
      source={markdownValue}
      style={{
        color: "black"
      }}
    />
  )
}