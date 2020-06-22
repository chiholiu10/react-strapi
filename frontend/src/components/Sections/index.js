import React from "react";
import Query from "../Query";
import ReactMarkdown from 'react-markdown'
import ARTICLES_QUERY from "../../queries/article/articles";

console.log(ARTICLES_QUERY);
const Sections = () => {
  return (
    <div>
      <Query query={ARTICLES_QUERY} id={null}>
        {({ data: { articles } }) => {
            console.log('articles' + JSON.stringify(articles))
            return (
                <div>
                    {articles.map((article, i) => {
                        return (
                            <div key={i}>
                                {article.title}
                                <ReactMarkdown source={article.content}/>
                                <ReactMarkdown source={article.images}/>
                            </div>
                        )
                    })}
                </div>
            )
        }}
      </Query>
    </div>
  );
};

export default Sections;
