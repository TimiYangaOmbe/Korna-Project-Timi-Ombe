import { RecommendedSection } from "../styles/SideContent.styled";
import { topics } from "../../lib/topics";

function Recommendations() {
    return (
        <div>
            <h3>Recommended topics</h3>
            <RecommendedSection>
                <div className="tags">
                    {
                        topics.map((topic, idx) =>
                            <div key={idx}>{topic}</div>
                        )
                    }
                </div>
                <a href="#" className="see-more">See more topics</a>
            </RecommendedSection>
        </div>

    )
}

export default Recommendations;