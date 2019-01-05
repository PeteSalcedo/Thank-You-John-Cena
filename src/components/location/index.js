import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15044.094217058344!2d-99.1751227!3d19.4976224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b87a619305eb9fc!2sArena+Ciudad+de+M%C3%A9xico!5e0!3m2!1sen!2smx!4v1546715466000"
				width="100%"
				height="500px"
				frameborder="0"
				allowfullscreen
			/>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
