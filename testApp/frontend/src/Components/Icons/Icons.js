import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { FaFileCsv } from 'react-icons/fa'

export const ProfileIcon = ({onClick, styles={}}) => <CgProfile style={styles} onClick={onClick} className='icon profile-icon' />
export const LogOutIcon = ({onClick, styles={}}) => <RiLogoutBoxRLine style={styles} onClick={onClick} className='icon log-out-icon' />
export const CSVIcon = ({onClick, styles={}})  => <FaFileCsv style={styles} onClick={onClick} className='icon csv-icon' />