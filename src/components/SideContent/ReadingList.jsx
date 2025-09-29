import { ReadingListSection } from "../styles/SideContent.styled";
import SaveIcon from '../icons/SaveIcon'; 

function ReadingList() {
    return(
        <div>
            <h3>Reading List</h3>
            <ReadingListSection>
                <p>
                    <span>Click the </span>
                    <SaveIcon />
                    <span>  on any story to easily add it to your reading list or a custom list that you can share.</span>
                </p>
            </ReadingListSection>
        </div>
    )
}

export default ReadingList;