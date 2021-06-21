import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../Logo'
import Nav from '../Nav'
import Icon from '../Icon'
import MobileMenu from '../MobileMenu'
import MemberPortal from '../MemberPortal'
import MediaQueries from '../MediaQueries'

// constants
import { HEADER_NAV } from '../Nav/constants'

const Header = ({ siteTitle }) => {
  const { isDesktop, isTabletOrMobile, isMobile } = MediaQueries()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <Container className="header__inner">
        <Logo title={siteTitle} />
        {isDesktop && <Nav nav={HEADER_NAV} modifier="header" />}
        <div className="header__left">
          {!isMobile && <MemberPortal />}
          {isTabletOrMobile && (
            <>
              <button onClick={() => setOpen(!open)} className="btn-menu-toggler">
                <Icon name={open ? 'close' : 'menu'} size={open ? [22, 22] : [32, 32]} />
              </button>
              {open && (
                <MobileMenu>
                  <Nav nav={HEADER_NAV} modifier="mobile" />
                  {isMobile && <MemberPortal />}
                </MobileMenu>
              )}
            </>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
