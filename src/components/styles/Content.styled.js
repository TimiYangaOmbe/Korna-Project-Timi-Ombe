import styled from "styled-components";

export const ContentMain = styled.div`
    padding-top: 70px;

    @media (min-width: 789px) {
        padding-right: 70px;
    }
`

export const Tab = styled.div`
    display: flex;
    gap: 25px;
    color: #6b6b6b;

    span {
        border-bottom: 1px solid transparent; 
        padding-bottom: 12px
    }

    #active {
        color: black; 
        border-bottom: 1px solid black;
    }

`
export const Article = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #f2f2f2;
    padding: 25px 0px;

    .article-middle {
        display: flex;
        gap: 5px;
    }
    
    #author-and-section {
        font-size: 15px; 
    }

    #author-and-section > div,
    #author-and-section > span {
        display: flex;
        align-items: center; 
        gap: 10px;
        color: #6b6b6b
    }
    
    .info-text {
        color: black;
        font-weight: 500;
        margin: 0px 5px;
    }

    .top-info > img {
        width: 30px;
        height: 30px;
        border-radius: 10%;
    }

    #pfp {
        border-radius: 100%; 
    }

    #right > img {
        width: 70px; 
        height: 50px;
    }

    #left {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    #title-and-summary {
        width: 100%; 
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #title {
        font-size: 22px;
    }

    #summary {
        font-size: 18px;
        color: #6b6b6b;
    }

    .pair {
        display: flex; 
        align-items: center;
        gap: 8px;
    }


    #metrics,
    #others {
        display: flex; 
        align-items: center;
        gap: 18px;
        color: #6b6b6b;
    }
    
    .article-bottom {
        display: flex;
        justify-content: space-between;
    }
    
    .hidden-on-mobile {
        display: none; 
    }

    @media (min-width: 789px) {
        .hidden-on-mobile {
            display: block;
        }
        #left {
            justify-content: space-between;
        }
        #author-and-section {
            font-size: 18px;
        }
        .article-middle {
            gap: 50px;
        }
        #right > img {
            width: 180px; 
            height: 127px;
        }
        #title-and-summary {
            width: 500px; 
        }

        #title {
            font-size: 25px; 
        }
        .pair {
            gap: 4px; 
        }

        .article-bottom{
            justify-content: start;
            gap: 26%;
        } 

    }

`