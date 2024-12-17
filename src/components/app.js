import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './navigation';
import Content from './content';
import RoundedToggle from './rounded_toggle';
import GithubSlugger from 'github-slugger';
import debounce from 'lodash.debounce';
import { brandNames, brandClasses } from '../../custom';
import qs from 'querystring';

// Initialize slugger for consistent heading slugs
const slugger = new GithubSlugger();
const slug = (title) => {
    slugger.reset();
    return slugger.slug(title);
};

// Constants for language options
const languageOptions = ['JavaScript'];
const defaultLanguage = 'JavaScript';

const App = ({ content, ast }) => {
    // State hooks
    const [queryMatches, setQueryMatches] = useState({});
    const [activeSection, setActiveSection] = useState('Introduction');
    const [language, setLanguage] = useState(defaultLanguage);
    const [showNav, setShowNav] = useState(false);
    const [columnMode, setColumnMode] = useState(2);

    // Media query setup
    useEffect(() => {
        const mqls = {
            desktop: window.matchMedia('(min-width: 961px)'),
            tablet: window.matchMedia('(max-width: 960px)'),
            mobile: window.matchMedia('(max-width: 640px)'),
        };

        const updateQueryMatches = () => {
            setQueryMatches({
                desktop: mqls.desktop.matches,
                tablet: mqls.tablet.matches,
                mobile: mqls.mobile.matches,
            });
        };

        Object.values(mqls).forEach((mql) => mql.addListener(updateQueryMatches));
        updateQueryMatches();

        return () => {
            Object.values(mqls).forEach((mql) => mql.removeListener(updateQueryMatches));
        };
    }, []);

    // Handle scroll to detect active section
    const handleScroll = useCallback(
        debounce(() => {
            const sections = document.querySelectorAll('div.section');
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.bottom > 0) {
                    setActiveSection(section.getAttribute('data-title'));
                    return;
                }
            }
        }, 100),
        []
    );

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Update URL hash when the active section changes
    useEffect(() => {
        const debouncedReplaceState = debounce((hash) => {
            window.history.replaceState('', '', hash);
        }, 100);

        debouncedReplaceState(`#${slug(activeSection)}`);
    }, [activeSection]);

    // Handle language changes
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        const searchParams = qs.stringify({ language: newLanguage });
        window.history.pushState(null, null, `?${searchParams}${window.location.hash}`);
    };

    // Toggle navigation visibility
    const toggleNav = () => setShowNav((prev) => !prev);

    // Toggle column mode
    const toggleColumnMode = () => setColumnMode((prev) => (prev === 1 ? 2 : 1));

    // Render component
    const col1 = columnMode === 1 && queryMatches.desktop;

    return (
        <div className="container unlimiter">
            {/* Content background */}
            {!col1 && !queryMatches.mobile && (
                <div className={`fixed-top fixed-right ${queryMatches.desktop && 'space-left16'}`}>
                    <div className="fill-light col6 pin-right"></div>
                </div>
            )}

            {/* Desktop navigation */}
            {queryMatches.desktop && (
                <div className="space-top5 scroll-styled pad1 width16 sidebar fixed-left fill-dark dark">
                    <Navigation
                        navigationItemClicked={setActiveSection}
                        activeSection={activeSection}
                        ast={ast}
                    />
                </div>
            )}

            {/* Main content */}
            <div className={`${queryMatches.desktop && 'space-left16'}`}>
                <div className={col1 ? 'col8 margin1' : ''}>
                    <Content
                        leftClassname={
                            col1
                                ? 'space-bottom4 pad2x prose clip'
                                : 'space-bottom8 col6 pad2x prose clip'
                        }
                        rightClassname={
                            col1
                                ? 'space-bottom2 pad2 prose clip fill-light space-top5'
                                : 'space-bottom4 col6 pad2 prose clip fill-light space-top5'
                        }
                        ast={ast}
                        language={language.toLowerCase()}
                    />
                </div>
            </div>

            {/* Language toggle */}
            <div className={`fixed-top ${queryMatches.desktop && 'space-left16'}`}>
                <div
                    className={`events fill-light bottom-shadow pad1 ${
                        col1 ? '' : 'col6 pin-topright'
                    } ${queryMatches.tablet ? 'dark fill-blue' : ''} ${
                        queryMatches.mobile ? 'space-top5 fixed-topright' : ''
                    }`}
                >
                    <div className="space-right1 small quiet inline">Show examples in:</div>
                    <RoundedToggle
                        options={languageOptions}
                        onChange={handleLanguageChange}
                        active={language}
                    />
                    {queryMatches.desktop && (
                        <div className="fr pad0">
                            <a
                                title={`Display as ${col1 ? 2 : 1} column`}
                                onClick={toggleColumnMode}
                                style={{ cursor: 'pointer' }}
                                className={`icon quiet caret-${col1 ? 'right' : 'left'} pad0 fill-darken0 round`}
                            ></a>
                        </div>
                    )}
                </div>
            </div>

            {/* Header */}
            <div
                className={`fill-dark dark bottom-shadow fixed-top ${
                    queryMatches.tablet ? 'pad1y pad2x col6' : 'pad0 width16'
                }`}
            >
                <a
                    href="#origo-map"
                    className={`active space-top1 space-left1 pin-topleft icon round dark pad0 ${brandClasses}`}
                ></a>
                <div
                    className={`strong small pad0 ${
                        queryMatches.mobile ? 'space-left3' : ''
                    } ${
                        queryMatches.tablet
                            ? 'space-left2'
                            : 'space-left4 line-height15'
                    }`}
                >
                    {queryMatches.desktop
                        ? brandNames.desktop
                        : queryMatches.mobile
                        ? brandNames.mobile
                        : brandNames.tablet}
                </div>
                {queryMatches.tablet && (
                    <div>
                        <button
                            onClick={toggleNav}
                            className={`short quiet pin-topright button rcon ${
                                showNav ? 'caret-up' : 'caret-down'
                            } space-right1 space-top1`}
                        >
                            <span className="micro">{activeSection}</span>
                        </button>
                        {showNav && (
                            <div className="fixed-left keyline-top fill-dark pin-left col6 pad2 scroll-styled space-top5">
                                <Navigation
                                    navigationItemClicked={setActiveSection}
                                    activeSection={activeSection}
                                    ast={ast}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
