'use client'

import React, { useState, useEffect } from 'react';
import Accordion from './accordion';
import Stack from './stack';
import contentData from '../data/content.json';

export default function ContentSection({ isDesktop: initialIsDesktop }) {
    const [isDesktop, setIsDesktop] = useState(initialIsDesktop);
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index);
    };

    useEffect(() => {
        const handleResize = () => {
        const newIsDesktop = window.innerWidth > 768; // Adjust the threshold as needed
        setIsDesktop(newIsDesktop);
        
        // Close any open accordion on mobile
        if (!newIsDesktop) {
            setOpenIndex(null);
        }
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to generate a random color in hex format
    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <div className="flex flex-col md:flex-row">
            {contentData.map((content, index) => {
                const iconSvg = content.icon && content.icon ? content.icon : '';

                // Check if there is a background image, if not, use a random color
                const backgroundImage = content.image ? content.image : getRandomColor();

                return isDesktop ? (
                <Accordion
                    key={index}
                    title={content.title}
                    overview={content.overview}
                    background={content.background}
                    features={content.features}
                    technologies={content.technologies}
                    icon={content.icon ?? ''}
                    backgroundImage={backgroundImage}
                    isInitiallyOpen={index === openIndex}
                    onToggle={() => handleToggle(index)}
                    index={index}
                />
                ) : (
                <Stack 
                    key={index}
                    title={content.title}
                    overview={content.overview}
                    background={content.background}
                    features={content.features}
                    technologies={content.technologies}
                    icon={content.icon ?? ''}
                    backgroundImage={backgroundImage}
                />
                );
            })}
        </div>
    );
}