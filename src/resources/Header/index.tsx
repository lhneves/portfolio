import React, { useRef, useState } from 'react';
import { Navbar, Link as LinkUI } from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggleButton from '../ThemeToggleButton';
import AnimationLayout from '../Animations/AnimationLayout';
import Image from 'next/image';

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
          <Image src="/images/me_around_cloud.webp" alt="Me Around Clouds" width={56} height={56} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor="default" hideIn="xs">
          {navbarLinks.map((link) => {
            const linkTo = link.toLocaleLowerCase();
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
          {navbarLinks.map((link) => {
            const linkTo = link.toLocaleLowerCase();
            return (
              <Navbar.CollapseItem
                key={link}
                activeColor="primary"
                isActive={activeLink === linkTo}
              >
                <LinkUI
                  as={ScrollLink}
                  to={linkTo}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                  onClick={() => handleSideMenu()}
                  color="inherit"
                >
                  {link}
                </LinkUI>
              </Navbar.CollapseItem>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </AnimationLayout>
  );
}
