import { ContentMain, Tab } from "./styles/Content.styled";
import { articles } from "../lib/articles";
import ArticleBody from "./Content/ArticleBody";

function Content() {

    return (
        <ContentMain>
            <Tab>
                <span id="active">For You</span>
                <span>Featured</span>
            </Tab>
            <div>
                {
                    articles.map((article, idx) =>
                        <ArticleBody key={idx} article={article} />
                    )
                }
            </div>
        </ContentMain>
    )
}

export default Content;