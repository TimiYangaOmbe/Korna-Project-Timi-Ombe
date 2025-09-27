import { staffPicks } from "../lib/articles";
import { topics } from "../lib/topics";
import { whoToFollowSuggestions} from '../lib/whoToFollow';
import { 
    SideContentMain, 
    StaffPickSection, 
    RecommendedSection,
    WhoToFollowSection,
    ReadingListSection,
    Footer
} from "./styles/SideContent.styled";

function SideContent() {
    return(
        <SideContentMain>
            <h3>Staff Picks</h3>
            <StaffPickSection>
                <div id="picks">
                    {
                        staffPicks.map((pick, idx) => 
                            <div key={idx}>
                                <div className="icon-and-info">
                                    <img id="icon" className={pick.section == '' ? 'round-pfp' : ''} src={pick.icon} alt="" />
                                    <span>
                                        {
                                            pick.section != '' ?
                                            <span>
                                                <span>In</span>
                                                <span className="info">{pick.section}</span>
                                                <span>by</span>
                                            </span> :
                                            ''
                                        }
                                        <span className="info">{pick.author}</span>
                                    </span>
                                </div>
                                <h2 className="title">
                                    {pick.title}
                                </h2>
                                <div className="date-posted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64"><path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
                                    <span>{pick.posted}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <a href="#" class="see-more">See full list</a>
            </StaffPickSection>

            <h3>Recommended topics</h3>
            <RecommendedSection>
                <div className="tags">
                    {
                        topics.map((topic, idx) => 
                            <div key={idx}>{topic}</div>
                        )
                    }
                </div>
                <a href="#" class="see-more">See more topics</a>
            </RecommendedSection>

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
                            <div class="sugg-right">
                                <button className="follow-btn">Follow</button>
                            </div>
                        </div>
                    )
                }
                <a href="#" class="see-more">See more suggestions</a>
            </WhoToFollowSection>

            <h3>Reading List</h3>
            <ReadingListSection>
                <p>
                    <span>Click the </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 25 25" class="acm cc"><path fill="currentColor" d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .805.396L12.5 17l5.695 4.396A.5.5 0 0 0 19 21v-8.5a.5.5 0 0 0-1 0v7.485l-5.195-4.012a.5.5 0 0 0-.61 0L7 19.985z"></path></svg>
                    <span>  on any story to easily add it to your reading list or a custom list that you can share.</span>
                </p>
            </ReadingListSection>

            <Footer>
                <a className="see-more footer" href="#">Help</a>
                <a className="see-more footer" href="#">Status</a>
                <a className="see-more footer" href="#">About</a>
                <a className="see-more footer" href="#">Careers</a>
                <a className="see-more footer" href="#">Press</a>
                <a className="see-more footer" href="#">Blog</a>
                <a className="see-more footer" href="#">Privacy</a>
                <a className="see-more footer" href="#">Rules</a>
                <a className="see-more footer" href="#">Terms</a>
                <a className="see-more footer" href="#">Text to speech</a>
            </Footer>
        </SideContentMain> 
    )
}

export default SideContent;