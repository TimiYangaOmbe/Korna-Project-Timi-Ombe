import { staffPicks } from "../../lib/articles";
import { StaffPickSection } from "../styles/SideContent.styled";
import StarIcon from "../icons/StarIcon";

function StaffPicks() {
    return (
        <div>
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
                                    <StarIcon />
                                    <span>{pick.posted}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <a href="#" className="see-more">See full list</a>
            </StaffPickSection>
        </div>

    )

}

export default StaffPicks;