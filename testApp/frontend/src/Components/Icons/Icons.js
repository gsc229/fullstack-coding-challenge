import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export const ProfileIcon = ({onClick, styles={}}) => <CgProfile style={styles} onClick={onClick} className='icon profile-icon' />
export const LogOutIcon = ({onClick, styles={}}) => <RiLogoutBoxRLine style={styles} onClick={onClick} className='icon log-out-icon' />
