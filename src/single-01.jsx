import React from 'react';

function Single01(props) {
	const title = props.title || "single 01";

	return (
		<svg height="48" width="48" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>{title}</title>
	<rect height="48" width="48" fill="#ffffff" rx="24" ry="24" stroke="none" x="0" y="0" data-element="frame"/>
	<g fill="#686363" transform="translate(12.24 12.24) scale(0.49)">
		<path d="M24,25c6.065,0,11-4.935,11-11v-2c0-6.065-4.935-11-11-11S13,5.935,13,12v2C13,20.065,17.935,25,24,25z" fill="#716f6f"/>
		<path d="M39.278,31.185C35.926,30.188,30.554,29,24,29s-11.926,1.188-15.278,2.185 C5.3,32.203,3,35.286,3,38.856V46c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1v-7.144C45,35.286,42.7,32.203,39.278,31.185z"/>
	</g>
</svg>
	);
};

export default Single01;