import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import HeroBacground from '../../../../../../../../public/images/hero-background.png';
import { ComputerCanvas } from '@/apps/front/components/canvas/ComputerCanvas/ComputerCanvas';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image
                src={HeroBacground}
                alt='Hero background'
                fill
                quality={100}
                style={{
                    zIndex: -1,
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
            <div className={styles.heroWrapper}>
                <div className={styles.heroGradientWrapper}>
                    <div className={styles.heroGradientPoint} />
                    <div className={styles.heroGradient} />
                </div>
                <div className={styles.heroContentWrapper}>
                    <h1 className={styles.heroTitle}>
                        Bonjour, je suis <span className={styles.heroTitle__name}>Sébastien</span>
                    </h1>
                    <p className={styles.heroText}>Text de présentation</p>
                </div>
            </div>
            <ComputerCanvas />
            <div className={styles.mouseWrapper}>
                <a href='#about'>
                    <div className={styles.mouse}>
                        <motion.div
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#aaa6c3',

                            }}
                            animate={{
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};
