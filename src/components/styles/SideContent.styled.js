import styled from "styled-components";


export const SideContentMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 70px;
    margin-left: 40px;

    h3 {
        margin-bottom: -30px; 

    }

    .see-more {
        text-decoration: none; 
        color: #6b6b6b;
    }

`

export const StaffPickSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    #picks {
        display: flex; 
        flex-direction: column;
        gap: 40px;
    }

    #picks > div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    #icon {
        height: 25px;
        width: 25px;
    }

    .round-pfp {
        border-radius: 100% 
    }

    .info {
        margin-left: 4px; 
        margin-right: 4px; 
        color: black;
    }

    .icon-and-info {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .icon-and-info > span {
        font-size: 15px; 
        color: #6b6b6b;
    }

    .title {
        font-size: 18px; 
    }
        
    .date-posted {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        color: #6b6b6b
    }
`
export const RecommendedSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
    
    // each tag
    .tags > div {
        color: #5a5a5aff;
        background-color: #f2f2f2;
        padding: 8px 13px;
        border-radius: 15px; 
    }
`
