import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { RapportStyled } from "../Rapport/Rapport.Styled";

export const FilteredRapports = () => {
  const { category } = useParams();
  const [rapports, setRapports] = useState([]);


  useEffect(() => {
    async function fetchRapports() {
      try {
        const data = await contentfulClient.getEntries({
          content_type: "rapport",
          "fields.category[match]": category,
          select: "fields"
        });
        setRapports(data.items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRapports();
  }, [category]);


  const renderRapports = () => {
    if (!rapports.length) {
      return <p>Ingen..</p>;
    }
    return rapports.map(({ sys, fields }) => (
      <figure key={sys.id}>
        {fields.image?.fields?.file?.url && (
          <img src={`https:${fields.image.fields.file.url}`} alt="Contentful Image" />
        )}
        <Link to={`/rapport/${sys.id}`}>
          <h3>{fields.title}</h3>
        </Link>
        <p className="text-grey">{`${fields.date} af ${fields.author.fields.name}`}</p>
        <p className="category">{fields.category}</p>
      </figure>
    ));
  };

  return <RapportStyled>{renderRapports()}</RapportStyled>;
};
