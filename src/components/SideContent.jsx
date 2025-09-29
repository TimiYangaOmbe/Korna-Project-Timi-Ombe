import StaffPicks from "./SideContent/StaffPicks";
import Recommendations from "./SideContent/Recommendations";
import WhoToFollow from "./SideContent/WhoToFollow";
import ReadingList from "./SideContent/ReadingList";
import FooterManager from "./FooterManager";

import { 
    SideContentMain, 
} from "./styles/SideContent.styled";

function SideContent() {
    return(
        <SideContentMain>
            <StaffPicks />
            <Recommendations />
            <WhoToFollow />
            <ReadingList />
            <FooterManager />
        </SideContentMain> 
    )
}

export default SideContent;