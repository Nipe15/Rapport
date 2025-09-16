import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RenderRichText } from "./RenderRichText"
import { RapportDetailsStyled } from "./RapportDetails.Styled";

export const RapportDetails = () => {
  const { rapportID } = useParams();
  const [rapport, setRapport] = useState(null);

  useEffect(() => {
    contentfulClient
      .getEntry(rapportID)
      .then((entry) => {
        setRapport(entry.fields);
      })
      .catch((err) => console.log("Fejl:", err));
  }, [rapportID]);

  if (!rapport) {
    return <RapportDetailsStyled><p>Loading..</p></RapportDetailsStyled>;
  }

  return (
    <RapportDetailsStyled>
      {rapport.image?.fields?.file?.url && (
        <img
          src={`https:${rapport.image.fields.file.url}`}
          alt={rapport.image.fields.title || "Rapport billede"}
          className="rapport-image"
        />
      )}

      <h1>{rapport.title}</h1>
      <p className="meta">
        {rapport.date} af {rapport.author.fields.name}
      </p>
      <p className="category">{rapport.category}</p>

      <div className="rapport-content">
        <RenderRichText document={rapport.content} />
      </div>
    </RapportDetailsStyled>
  );
};
