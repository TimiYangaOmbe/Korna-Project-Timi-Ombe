import { Article } from "../styles/Content.styled";
import StarIcon from "../icons/StarIcon";
import ApplaudIcon from "../icons/ApplaudIcon";
import CommentIcon from "../icons/CommentIcon";
import RemoveIcon from "../icons/RemoveIcon";
import SaveIcon from "../icons/SaveIcon";
import OptionIcon from "../icons/OptionIcon";

import { formatNumber } from "../../lib/helpers";


function ArticleBody({ article }) {
    return (
        <Article>
            <div className="article-top" id="author-and-section">
                {
                    article.section == '' ?
                        <div className="top-info">
                            <img id="pfp" src={article?.pfp} alt="profile picture" />
                            <span className="info-text">{article.author}</span>
                        </div> :
                        <span className="top-info">
                            <img src={article?.sectionIcon} alt="section logo" />
                            <span>
                                In
                                <span className="info-text">
                                    {article.section}
                                </span>
                                by
                                <span className="info-text">
                                    {article.author}
                                </span>
                            </span>
                        </span>
                }
            </div>
            <div className="article-middle">
                <div id="left">
                    <div id="title-and-summary">
                        <h1 id="title">{article.title}</h1>
                        <p id="summary">{article.summary}</p>
                    </div>
                </div>
                <div id="right">
                    <img src={article.hero} alt="" />
                </div>
            </div>
            <div className="article-bottom">
                <div id="metrics">
                    <StarIcon />
                    <span id="posted">{article.posted}</span>
                    <div className="pair">
                        <ApplaudIcon />
                        <span id="applauds">{formatNumber(article.applauds)}</span>
                    </div>
                    <div className="pair">
                        <CommentIcon />
                        <span id="comments">{article.comments}</span>
                    </div>
                </div>
                <section id="others">
                    <RemoveIcon />
                    <div className="hidden-on-mobile">
                        <SaveIcon />
                    </div>
                    <OptionIcon />
                </section>
            </div>
        </Article>
    )
}

export default ArticleBody;
