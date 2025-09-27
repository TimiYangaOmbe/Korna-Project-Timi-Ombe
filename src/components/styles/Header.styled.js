import styled from "styled-components";
import { Search } from 'lucide-react'

export const StyledHeader = styled.header`

    .hidden-on-mobile {
        display: none;
    }

    #top {
        display: flex; 
        justify-content: center;
        padding: 10px 0;
        gap: 5px;
        color: #6b6b6b;
    }

    #bottom {
        display: flex;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        padding: 10px 20px;
        justify-content: space-between;
        align-items: center;
    }
    
    #left, #right {
        display: flex; 
        align-items: center;
        gap: 10px;
    }


    @media (min-width: 768px) {
        .hidden-on-mobile {
            display: block;
        }
        #top, .mobile-search {
            display: none;
        }

        #right > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        #left, #right {
            gap: 30px;
        }
    }

    .texts {
        color: #6b6b6b;
    }

    .icons {
        color: #6b6b6b;
        width: 20px;
        height: 20px; 
        cursor: pointer;
    }

    #move-up-icon {
        width: 15px;
        height: 15px; 
    }

    #pfp {
        width: 30px; 
        height: 30px;
        background-color: black;
        border-radius: 100%;
    }

`

export const SearchBar = styled.div`
  width: 270px;
  height: 40px;

  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0 8px;
  background-color: #f9f9f9;  /* fixed */
  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #f9f9f9;
  line-height: 1;  /* keeps text aligned with icon */
`;

export const SearchIcon = styled(Search)`
  flex: 0 0 auto;
  margin-right: 12px;
  color: #6b6b6b;
  width: 15px;
  height: 15px;
`;
