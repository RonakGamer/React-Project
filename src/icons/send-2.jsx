import React from 'react';

function Send2(props) {
	const title = props.title || "send 2";

	return (
		<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>{title}</title>
	<rect height="24" width="24" fill="#deb5fb" rx="12" ry="12" stroke="none" x="0" y="0" data-element="frame"/>
	<g fill="#4d1759" transform="translate(6.12 6.12) scale(0.49)">
		<path d="M15,22c-0.377,0-0.725-0.213-0.895-0.553l-2.968-5.936c-0.163-0.326-0.135-0.716,0.072-1.017L16,8 l-6.495,4.79c-0.301,0.208-0.691,0.234-1.017,0.072L2.553,9.895c-0.356-0.179-0.573-0.552-0.551-0.95 C2.023,8.547,2.28,8.199,2.654,8.062l19-7c0.365-0.133,0.776-0.046,1.053,0.231c0.276,0.275,0.366,0.687,0.231,1.053l-7,19 c-0.138,0.374-0.485,0.631-0.883,0.652C15.037,21.999,15.018,22,15,22z" fill="#4d1759"/>
	</g>
</svg>
	);
};

export default Send2;