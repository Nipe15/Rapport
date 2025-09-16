// components/RenderRichText.jsx
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const RenderRichText = ({ document }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 style={{ marginTop: "2rem" }}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ marginTop: "1.5rem" }}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ whiteSpace: "pre-line", marginBottom: "1rem" }}>
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return <>{documentToReactComponents(document, options)}</>;
};
