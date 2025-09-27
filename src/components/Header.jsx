import {
    StyledHeader,
    SearchBar,
    SearchInput,
    SearchIcon
} from './styles/Header.styled';

import { MoveUpRightIcon, Menu, SquarePenIcon, Bell } from 'lucide-react'

function Header() {
    return (
        <StyledHeader>
            <div id='top' className='hidden-on-mobile'>
                <span>Open in app</span>
                <MoveUpRightIcon id='move-up-icon' className='icons' />
            </div>

            <div id='bottom'>
                <div id='left'>
                    <Menu className='icons' />
                    <div>
                        <img src='/medium-logo.png' width={110} />
                    </div>
                    <div className='hidden-on-mobile'>
                        <SearchBar>
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