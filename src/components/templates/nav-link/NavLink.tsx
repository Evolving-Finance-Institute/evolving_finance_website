// Libs
import React, { FC, memo, useState } from 'react'
import styles from './nav-link.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Interface
interface INavLink {
  navLinks:
    | {
        name: string
        href: string
        dropdown?: {
          name: string
          href: string
        }[]
      }[]
    | null
    | undefined
  variant?: 'row' | 'column'
}

// Component
const NavLink: FC<INavLink> = ({ navLinks, variant = 'row' }) => {
  // Router
  const { push, pathname } = useRouter()
  const [showDropdown, setShowDropdown] = useState(false)

  // Return
  return (
    <ul className={`${styles.nav_link} ${variant === 'column' ? styles.column : ''}`}>
      {navLinks &&
        navLinks.map((item, i) => (
          <li
            key={`${item.name} ${i}`}
            className={`${styles.nav_link__item} ${variant === 'column' ? styles.column : ''} ${
              pathname === item.href ? styles.active : ''
            }`}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {item.name}
            {item.dropdown && (
              <div
                className='dropdown-container'
                style={{ display: showDropdown ? 'block' : 'none' }}
              >
                <ul className='dropdown'>
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link href={dropdownItem.href} as={dropdownItem.href}>
                        <a>{dropdownItem.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
    </ul>
  )
}

export default memo(NavLink)
