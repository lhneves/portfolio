import React, { useRef, useState } from 'react';
import { Navbar, Image, Link as LinkUI } from '@nextui-org/react';
import { default as NextLink } from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggleButton from '../ThemeToggleButton';
import AnimationLayout from '../Animations/AnimationLayout';

export default function Header() {
  const navbarLinks = ['SKILLS', 'PROJECTS', 'CONTACT'];

  const navbarToggleRef = useRef<HTMLButtonElement>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleSideMenu = () => {
    if (navbarToggleRef.current && isSideMenuOpen) {
      navbarToggleRef.current.click();
    }
  };

  function handleSetActive(to: string) {
    setActiveLink(to);
  }

  function handleSetInactive(to: string) {
    if (to === 'skills') {
      setActiveLink('');
    }
  }

  return (
    <AnimationLayout type="down">
      <Navbar isBordered variant="floating" style={{ position: 'fixed' }}>
        <Navbar.Toggle
          showIn="xs"
          ref={navbarToggleRef}
          onChange={() => setIsSideMenuOpen(!isSideMenuOpen)}
        />
        <Navbar.Brand>
          <Image src="/images/me_around_clouds.png" showSkeleton />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor="default" hideIn="xs">
          {navbarLinks.map((link) => {
            const linkTo = link.split(' ').join('-').toLocaleLowerCase();
            return (
              <Navbar.Link
                as={ScrollLink}
                key={linkTo}
                to={linkTo}
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                isActive={activeLink === linkTo}
              >
                {link}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ThemeToggleButton />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {navbarLinks.map((item) => {
            const linkTo = item.split(' ').join('-').toLocaleLowerCase();
            return (
              <Navbar.CollapseItem
                key={item}
                activeColor="default"
                isActive={activeLink === linkTo}
              >
                <LinkUI
                  as={NextLink}
                  onClick={() => handleSideMenu()}
                  color="inherit"
                  href={`/#${item.split(' ').join('-').toLocaleLowerCase()}`}
                >
                  {item}
                </LinkUI>
              </Navbar.CollapseItem>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </AnimationLayout>
  );
}
