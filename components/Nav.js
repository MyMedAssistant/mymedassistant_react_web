import Link from 'next/link'
import React, { Component } from 'react';

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
      <div>
        <button onClick={this.showMenu}>
          Menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <Link href="/schedule">
                  <a>Schedule</a>
                </Link>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
                <Link href="/form">
                  <a>Add Med</a>
                </Link>
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