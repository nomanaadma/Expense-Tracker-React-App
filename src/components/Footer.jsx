import React from 'react';
import heart from "../heart.png";

function Footer() {
	return (
		<p style={{ margin: '40px 0 0 0', textAlign: 'center', color: 'grey' }}>Made with <img src={heart} alt="Love" style={{ width: '19px', verticalAlign: 'text-bottom' }} /> by <a href="https://github.com/nomanaadma" target="_blank"  rel="noopener noreferrer" style={{ color: 'grey', textDecoration: 'none', fontWeight: 600 }}>Noman Shoukat</a></p>
	);
}

export default Footer;