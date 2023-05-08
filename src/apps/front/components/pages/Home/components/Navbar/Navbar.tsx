import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../../../../../../public/images/logo.png';
import styles from './Navbar.module.scss';
import { MenuBurger } from './components';

const navLinks = [
    {
        id: 'about',
        title: 'À propos',
    },
    {
        id: 'projects',
        title: 'Projets',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const Navbar = () => {
    // Hooks
    const menuRef = useRef<HTMLDivElement>(null);

    // State
    const [activeItem, setActiveItem] = useState('');
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleBurgerMenuClick = () => {
        setOpenMobileMenu((prev) => !prev);
    };

    function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
        if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement)) {
            setOpenMobileMenu(false);
        }
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarWrapper}>
                <Link
                    href='/'
                    className={styles.navbarLogo}
                    onClick={() => setActiveItem('')}
                >
                    <Image
                        src={LogoImage}
                        alt='Logo de Sébastien Etcheto'
                        width={100}
                        height={100}
                        quality={100}
                    />
                    <p className={styles.navbarLogoText}>
                        Sébastien Etcheto<span className={styles.navbarLogo__secondaryText}>| Tomorrow's web</span>
                    </p>
                </Link>
                <ul className={styles.navbarList}>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            onClick={() => {
                                setActiveItem(link.id);
                            }}
                        >
                            <Link
                                href={`#${link.id}`}
                                className={
                                    activeItem == link.title ? styles.navbarListLinkActive : styles.navbarListLink
                                }
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.mobileButtonContainer}>
                    <MenuBurger
                        isOpen={openMobileMenu}
                        onClick={handleBurgerMenuClick}
                    />
                </div>
            </div>
            <div className={`${styles.mobileMenu} ${openMobileMenu ? styles.mobileMenuOpen : ''}`}>
                <div
                    className={styles.mobileMenuBackdrop}
                    onClick={handleBackdropClick}
                />
                <div ref={menuRef}>
                    <ul className={styles.mobileMenuList}>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => {
                                    setOpenMobileMenu(false);
                                    setActiveItem(link.title);
                                }}
                            >
                                <a
                                    className={styles.mobileMenuLink}
                                    href={`#${link.id}`}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
