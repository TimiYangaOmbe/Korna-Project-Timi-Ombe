import {
    StyledHeader,
    SearchBar,
    SearchInput,
    MoveUpRightIcon,
    SearchIcon
} from './styles/Header.styled';

import { Menu, SquarePenIcon, Bell } from 'lucide-react'

function Header() {
    return (
        <StyledHeader>
            <div id='top' className='hidden-on-mobile'>
                <span>Open in app</span>
                <MoveUpRightIcon></MoveUpRightIcon>
            </div>

            <div id='bottom'>
                <div id='left'>
                    <Menu className='icons' />
                    <div>
                        <img src='/medium-logo.png' width={110} />
                    </div>
                    <div id='search-parent'>
                        <SearchBar className='hidden-on-mobile'>
                            <SearchIcon className="icons"></SearchIcon>
                            <SearchInput type='text' placeholder='Search'></SearchInput>
                        </SearchBar>
                    </div>
                </div>
                <div id='right'>
                    <div className='hidden-on-mobile'>
                        <SquarePenIcon className='icons' />
                        <span className='texts'>Write</span>
                    </div>

                    <Bell className='icons hidden-on-mobile' />

                    <SearchIcon className='icons mobile-search'></SearchIcon>
                    <div id='pfp'></div>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;