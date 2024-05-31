import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import {Link} from 'react-router-dom';
import CustomLink from "./Navbar"
import './styles.css'


export default function CategoryDropdown(props) {
  let { title } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let [onHover, setHover] = useState();
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  const scrollToBottom = () => {
    const windowHeight = window.innerHeight
    window.scrollTo(0,5000)
  }
  const scrollToTop = () => {
    const windowHeight = window.innerHeight
    window.scrollTo(0, 130)
  }

  return (
    <Menu>
      <MenuButton class="MenuButton"
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={event => {
          setIsOverButton(false);
        }}
        onMouseLeave={event => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(false);
          setIsOpen(!isOpen);
          
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span> <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList
        onMouseEnter={event => {
          setIsOverList(true);
        }}
        onMouseLeave={event => {
          setIsOverList(false);
        }}
      >
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
          onClick={scrollToTop}
        >
         Public
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
          onClick={scrollToBottom}
        >
          Corporate
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          <Link to="/newcourses">Upcoming Courses</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}