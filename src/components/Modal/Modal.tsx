import React, { useState } from 'react';
import { StyledModal } from './Modal.style';

export const Modal: React.FC = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div data-testid="Modal">
			<button onClick={handleOpen}>Open modal</button>
			{open && (
				<>
					<StyledModal onClick={handleClose}>
						<h2 id="modal-title">Text in a modal</h2>
						<p id="modal-description">
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</p>
						<button onClick={handleClose}>Close</button>
					</StyledModal>
				</>
			)}
		</div>
	);
};