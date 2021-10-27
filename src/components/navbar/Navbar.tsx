import React, { Fragment, useEffect, useState } from 'react'
import ArtistryIcon from '../../assets/Icon.svg'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useStore } from '../../store'
import HamMenu from '../ham-menu/HamMenu'
import Portal from '../portal/Portal'
import styles from './navbar.module.css'

const NavLinksList: React.FC<{
    smallerThan600px?: boolean
    onClick?: () => void
}> = ({ smallerThan600px = false, onClick }) => {
    const visible = useStore((s) => s.visible)
    const widerThan800px = useMediaQuery('(min-width: 800px)')

    return (
        <div
            className={`bg-white w-full flex justify-between items-center px-10 ${
                smallerThan600px ? 'absolute py-5 bg-gray' : ''
            } ${styles.navLinks}`}
        >
            {(visible === 'About' || visible === 'Our Team') && widerThan800px && (
                <div
                    className={`flex items-center justify-center ${styles.icon}`}
                >
                    <img
                        src={ArtistryIcon}
                        alt='university'
                        width='50px'
                        height='50px'
                    />
                </div>
            )}
            <ul
                className={`flex m-auto ${
                    smallerThan600px
                        ? 'flex-col items-center'
                        : 'justify-center'
                }`}
            >
                <li>Events</li>
                <li>Host Event</li>
                <li>Invite</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}

export function Navbar() {
    const smallerThan600px = useMediaQuery('(max-width: 745px)')
    const [open, setOpen] = useState<boolean>(false)

    function closeNavLinks() {
        setOpen(false)
    }

    function toggleNavbar() {
        setOpen((o) => !o)
    }

    useEffect(() => {
        if (!smallerThan600px) {
            setOpen(false)
        }

        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [smallerThan600px, open, setOpen])

    return (
        <Fragment>
            <div style={{ width: '100%', height: '70px' }}></div>
            <nav
                className={` bg-white fixed w-full z-30 top-0 ${
                    smallerThan600px && open
                        ? 'z-20 left-0 right-0 fixed flex justify-end items-center border-b-2 border-accent5'
                        : 'flex justify-end items-center'
                } ${styles.nav} bg-gray`}
            >
                {smallerThan600px && (
                    <div className='px-4 w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img
                                src={ArtistryIcon}
                                alt=''
                                style={{ width: 40 }}
                            />
                            <p className='ml-2'>Artistry</p>
                        </div>
                        <div className='cursor-pointer h-full flex justify-center items-center mx-3 flex'>
                            <HamMenu onClick={toggleNavbar} open={open} />
                        </div>
                    </div>
                )}

                {smallerThan600px ? (
                    <Fragment>
                        {open ? (
                            <NavLinksList
                                smallerThan600px
                                onClick={closeNavLinks}
                            />
                        ) : (
                            <Fragment></Fragment>
                        )}
                    </Fragment>
                ) : (
                    <NavLinksList />
                )}

                <Portal selector='backdrop'>
                    {open && smallerThan600px && (
                        <div
                            className={`absolute w-full h-screen bg-gray left-0 right-0 z-10 opacity-60 ${styles.backdrop}`}
                            onClick={closeNavLinks}
                            style={{ top: window.scrollY }}
                        ></div>
                    )}
                </Portal>
            </nav>
        </Fragment>
    )
}
