import styled from 'styled-components';

export const StyledFooter = styled.div`
 .footer-content {
        display: flex;
        align-items: center;
        padding: 20px;
        position: relative;
    }

    .footer-logo-container {
        display: flex; /* Use flexbox for horizontal alignment */
        align-items: center;
        position: relative;
        margin-right: 200px; /* space between logo and links */
        transform: skewX(-10deg); /* Skew logo container to the left */
    }

    .footer-logo-container img {
        width: 50px; 
        height: 50px;
        margin-right: 15px; /* Space between logo and text */
    }

    .footer-logo-container span {
        font-size: ${props => props.theme.fontSizes['xl']}; 
        color: ${props => props.theme.colors['secondary']};
    }

    .footer-links {
        display: flex; /* Use flexbox layout for columns */
        flex: 1; /* Allow the links section to take up remaining space */
    }

    .footer-links-column {
        width: 100px; /* Set a fixed width for each column */
        margin-right: 40px; /* Space between columns */
    }

    .footer-links-column h4 {
        font-size: ${props => props.theme.fontSizes['sm']}; 
        color: ${props => props.theme.colors['primary']};
        margin-bottom: 10px; /* Space below the heading */
    }

    .footer-links-column a {
        display: block; /* Each link takes up the full width of its container */
        margin-bottom: 8px; /* Space between links */
        text-decoration: none; /* Remove underline from links by default */
        font-size: ${props => props.theme.fontSizes['sm']}; /* Theme-based font size for links */
    }

    .footer-links-column a:hover {
        text-decoration: underline; /* Underline links on hover */
        color: ${props => props.theme.colors['secondary']}; /* Change color on hover */
    }

    .footer-bottom-section {
        border-top: 1px solid #ccc; /* Thin line separating sections */
        padding: 10px 20px; /* Vertical padding */
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${props => props.theme.fontSizes['sm']}; 
    }

    .footer-bottom-left {
        display: flex;
        justify-content: flex-start;
        flex: 1; 
    }

    .footer-bottom-center {
        text-align: center;
        flex: 2; 
    }

    .footer-bottom-right {
        display: flex;
        justify-content: flex-end;
        flex: 1; 
    }

    .footer-bottom-left a,
    .footer-bottom-right a {
        text-decoration: none; /* Remove underline from links by default */
        font-size: ${props => props.theme.fontSizes['sm']}; 
    }

    .footer-bottom-left img {
        width: 24px; 
        height: 24px;
        margin: 0 5px; /* Space between icons */
        transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transition for hover effects */
    }

    .footer-bottom-left img:hover {
        transform: scale(1.1); /* Slightly enlarge the icon on hover */
    }

    .footer-bottom-right a {
        margin: 0 5px; /* Space between links */
    }

    .footer-bottom-right a:hover {
        text-decoration: underline; /* Underline links on hover */
        color: ${props => props.theme.colors['primary']}; /* Change color on hover */
    }
`;
