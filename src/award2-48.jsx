import React from 'react';

function Award48(props) {
	const title = props.title || "award 48";

	return (
		<svg height="48" width="48" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>{title}</title>
	<rect height="48" width="48" fill="#ffffff" rx="24" ry="24" stroke="none" x="0" y="0" data-element="frame"/>
	<g fill="#021321" transform="translate(12.24 12.24) scale(0.49)">
		<path d="M9.669,25.106L2.129,38.51c-0.185,0.327-0.17,0.729,0.037,1.042 c0.207,0.312,0.566,0.488,0.944,0.442l8.307-0.923l3.688,7.376C15.275,46.786,15.621,47,16,47s0.725-0.214,0.895-0.553l6.733-13.466 C17.761,32.853,12.626,29.744,9.669,25.106z"/>
		<path d="M38.331,25.106l7.54,13.404c0.185,0.327,0.17,0.729-0.037,1.042 c-0.207,0.312-0.566,0.488-0.944,0.442l-8.307-0.923l-3.688,7.376C32.725,46.786,32.379,47,32,47s-0.725-0.214-0.895-0.553 l-6.733-13.466C30.239,32.853,35.374,29.744,38.331,25.106z"/>
		<path d="M24,1C15.729,1,9,7.729,9,16s6.729,15,15,15s15-6.729,15-15S32.271,1,24,1z M24,21c-2.757,0-5-2.243-5-5 s2.243-5,5-5s5,2.243,5,5S26.757,21,24,21z" fill="#021321"/>
	</g>
</svg>
	);
};

export default Award48;