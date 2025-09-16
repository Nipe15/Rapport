import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentfulClient } from "../../Utils/contentfulClient";
import { Link } from 'react-router-dom';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RapportStyled } from "./Rapport.Styled";

export const Rapport = () => {
    const { rapportID } = useParams();
    const [rapports, setRapports] = useState([]);
  
    useEffect(() => {
      contentfulClient
        .getEntries({
          content_type: "rapport",
          "sys.id": rapportID,
          select: "fields"
        })
        .then((data) => {
          console.log('Fetched Data:', data);
          setRapports(data.items);
        })
        .catch((err) => console.log(err));
    }, [rapportID]);
  
    return (
      <RapportStyled>
        {rapports.length > 0 ? (
          rapports.map((item) => (
              <figure key={item.sys.id}>
                {item.fields.image?.fields?.file?.url && (
                  <img src={`https:${item.fields.image.fields.file.url}`} alt="Contentful Image" />
                )}
                <Link to={`/rapport/${item.sys.id}`} key={item.sys.id}>
                  <h3>{item.fields.title}</h3>
                </Link>
                <p className="text-grey">{`${item.fields.date} af Nicolas`}</p>
                <p className="category">{item.fields.category}</p>
              </figure>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </RapportStyled>
    );
  };
