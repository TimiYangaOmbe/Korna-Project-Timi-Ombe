import Content from "./Content";
import SideContent from "./SideContent";
import styled from "styled-components";


const ContentManager = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 30px 40px;

    #side-content {
        display: none; 
    }

    @media (min-width: 768px) {
        flex-direction: row; 

        #side-content {
            display: block; 
        }
    }
`

function ContentWrapper() {
    return(
        <ContentManager>
            <Content />
            <div id="side-content">
                <SideContent />
            </div>
        </ContentManager>
    );
}

export default ContentWrapper;