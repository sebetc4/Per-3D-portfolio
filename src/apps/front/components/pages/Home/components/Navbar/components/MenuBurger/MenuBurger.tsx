import React from 'react';
import styles from './MenuBurger.module.scss';

type MenuBurgerProps = {
    isOpen: boolean;
    onClick: () => void;
}

export const MenuBurger = ({isOpen, onClick}: MenuBurgerProps) => {
    return (
        <div
            className={styles.burgerMenu}
            onClick={onClick}
        >
            <div className={`${styles.burgerMenuIcon} ${isOpen ? styles.burgerMenuIconOpen : ''}`}></div>
        </div>
    );
};
