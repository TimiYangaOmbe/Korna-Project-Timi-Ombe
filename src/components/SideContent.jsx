import { staffPicks } from "../lib/articles";
import { topics } from "../lib/topics";
import { SideContentMain, StaffPickSection, RecommendedSection } from "./styles/SideContent.styled";

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
            <div></div>
        </SideContentMain> 
    )
}

export default SideContent;