import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";

import ARTICLE_QUERY from "../../queries/article/articles";

const Sections = () => {
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;
        return (
          <div>
            Section
           
          </div>
        );
      }}
    </Query>
  );
};

export default Sections;
