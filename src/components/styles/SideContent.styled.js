import styled from "styled-components";


export const SideContentMain = styled.div`
    padding-top: 70px;
    margin-left: 40px;

    h4 {
        margin-bottom: 20px; 
    }

    #staff-picks {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

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
        font-size: 19px; 
    }
        
    .date-posted {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        color: #6b6b6b
    }

    .see-more {
        text-decoration: none; 
        color: #6b6b6b;
    }


`