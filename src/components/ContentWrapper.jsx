import Content from "./Content";
import SideContent from "./SideContent";
import styled from "styled-components";


const ContentManager = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    justify-content: center;

    #side-content {
        display: none; 
    }

    #main-content {
        width: 50%
        background-color:red;
    }

    @media (min-width: 900px) {
        flex-direction: row; 

        #side-content {
            display: block; 
            width: 25%;
            border-left: 1px solid #f2f2f2
        }
    }
`

function ContentWrapper() {
    return(
        <ContentManager>
            <div id="main-content">
                <Content />
            </div>
            <div id="side-content">
                <SideContent />
            </div>
        </ContentManager>
    );
}

export default ContentWrapper;