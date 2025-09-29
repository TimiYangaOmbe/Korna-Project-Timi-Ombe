import { WhoToFollowSection } from "../styles/SideContent.styled";
import { whoToFollowSuggestions } from "../../lib/whoToFollow.js";

function WhoToFollow() {
    return (
        <div>
            <h3>Who to follow</h3>
            <WhoToFollowSection>
                {
                    whoToFollowSuggestions.map((suggestion, idx) =>
                        <div className="sugg" key={idx}>
                            <div className="sugg-left">
                                <img className="sugg-img" src={suggestion.pfp} alt="" />
                                <div>
                                    <h5 className="sugg-name">{suggestion.name}</h5>
                                    <p className="sugg-about">{suggestion.about}</p>
                                </div>
                            </div>
                            <div className="sugg-right">
                                <button className="follow-btn">Follow</button>
                            </div>
                        </div>
                    )
                }
                <a href="#" className="see-more">See more suggestions</a>
            </WhoToFollowSection>
        </div>
    )
}

export default WhoToFollow;