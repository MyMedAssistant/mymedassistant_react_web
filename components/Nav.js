import Link from 'next/link'
import React, { Component } from 'react';
import style from '../scss/Nav.module.scss'

class Nav extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div className = {style.nav}>
        <button onClick={this.showMenu}>
          Menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <Link href="/schedule">
                  <button>Schedule</button>
                </Link>
                <Link href="/form">
                  <button>Add Med</button>
                </Link>
                {/* <Link href="/about">
                  <button>About Us</button>
                </Link> */}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Nav