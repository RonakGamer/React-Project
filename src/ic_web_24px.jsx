import React from 'react';

function Ic_web_24px(props) {
	const title = props.title || "ic web 24px";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<rect height="24" width="24" fill="#deb5fb" rx="12" ry="12" stroke="none" x="0" y="0" data-element="frame"/>
	<g fill="#4d1759" transform="translate(6.12 6.12) scale(0.49)">
		<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
	</g>
</svg>
	);
};

export default Ic_web_24px;