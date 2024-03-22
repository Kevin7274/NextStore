"use client"
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';


const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button',{
        'button--border': hasBorder,
    });

    console.log(hasBorder)


    return(
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
            <Image 
                src="/images/description.jpg" 
                alt="products marketplace" 
                fill 
                placeholder='blur'
                blurDataURL={PLACEHOLDER_IMAGE}

                />
        </div>
        </button>
            
            <div className={styles.Description__text}>
            <h2>Bring me the future today </h2>
            <p>sfsdfsfsdfsdfsfsdfsdfdsfsddsfsd</p>
            </div>
        </section>
    )
}