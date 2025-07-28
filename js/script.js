/* Custom CSS for Demo Journal Website */

/* General Body Styling */
body {
    font-family: 'Inter', sans-serif; /* Using Inter font */
    background-color: #f0f2f5; /* Light grey background */
    color: #333; /* Default text color */
}

/* Top Line Header */
.top-line {
    background-color: #003366; /* Dark blue */
    color: #fff;
    font-size: 0.85rem;
}

.irp h5 {
    color: #fff;
    text-align: center; /* Centered on small screens */
}

.irp:hover {
    color: #edd7c9; /* Light brown on hover */
}

/* Main Header */
.journal-main-header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.journal-main-header .info-list a {
    color: #333;
    font-size: 0.9rem;
    transition: color 0.2s ease-in-out;
}

.journal-main-header .info-list a:hover {
    color: #0056b3;
}

.journal-main-header .btn-info {
    background-color: #17a2b8; /* Bootstrap info color */
    border-color: #17a2b8;
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
}

/* Social Icons in Main Header */
.btn-social-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: #fff;
    border: none;
    transition: background-color 0.2s ease-in-out;
}

.btn-social-icon.facebook { background-color: #3b5998; }
.btn-social-icon.facebook:hover { background-color: #2d4373; }
.btn-social-icon.instagram { background-color: #e4405f; }
.btn-social-icon.instagram:hover { background-color: #c32aa3; }
.btn-social-icon.linkedin { background-color: #0e76a8; }
.btn-social-icon.linkedin:hover { background-color: #0a6692; }
.btn-social-icon.envelope { background-color: #6c757d; }
.btn-social-icon.envelope:hover { background-color: #5a6268; }


/* Navigation Bar */
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease-in-out;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
}

.navbar-nav .dropdown-menu {
    background-color: #343a40; /* Dark background for dropdowns */
    border: none;
    border-radius: 0.25rem;
}

.navbar-nav .dropdown-item {
    color: #fff;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease-in-out;
}

.navbar-nav .dropdown-item:hover {
    background-color: #0056b3; /* Blue on hover */
    color: #fff;
}

/* Header Banner */
.header-banner-place {
    margin-bottom: 1.5rem;
}

/* Card Styling */
.card {
    border: none;
    border-radius: 0.75rem;
    overflow: hidden;
}

/* Sidebar Widget Titles */
.widget-title.custom-list-header {
    background-color: #003366; /* Dark blue background */
    color: #fff;
    font-size: 1rem;
    border-left: 5px solid #ffab1f; /* Orange accent */
    margin-bottom: 0; /* Remove default margin */
}

.widget-title.custom-list-header a {
    color: #fff;
    text-decoration: none;
}

/* List Group Item Styling in Sidebars */
.list-group-item {
    border-color: #dee2e6;
    padding: 0.75rem 1rem;
}

.list-group-item a {
    color: #333;
    transition: color 0.2s ease-in-out;
}

.list-group-item a:hover {
    color: #0056b3;
    text-decoration: underline;
}

/* Central Content Section Titles */
.custom-section-title {
    color: #003366;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 2px solid #0056b3;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

/* Tabbed Content (Latest/Most Read/Most Cited) */
.nav-tabs {
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 1rem;
}

.nav-tabs .nav-link {
    color: #495057;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
}

.nav-tabs .nav-link.active {
    color: #003366;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: 600;
}

.nav-tabs .nav-link:hover:not(.active) {
    border-color: #e9ecef #e9ecef #dee2e6;
}

.small-posts h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.small-posts p {
    font-size: 0.85rem;
    line-height: 1.3;
}

/* Indexed by section (Jssor Slider images) */
.indimg1 {
    border: 2px solid #006699;
    height: 100px !important; /* Override inline height if present */
    margin-right: 15px !important;
    object-fit: contain; /* Ensure images fit within their bounds */
    padding: 5px; /* Add some padding inside the border */
}

/* Footer */
.journal-footer {
    background-color: #003366;
    color: #fff;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.75rem 0.75rem 0 0;
    margin-top: 2rem;
}

.journal-footer .list-footer li {
    border-right: 1px solid #fff;
    height: 13px; /* Visual separator height */
    line-height: 0; /* Align separator vertically */
    display: flex;
    align-items: center;
}

.journal-footer .list-footer li:last-child {
    border-right: none;
}

.journal-footer .list-footer a {
    font-size: 0.9rem;
    transition: color 0.2s ease-in-out;
}

.journal-footer .list-footer a:hover {
    color: #ffab1f; /* Orange on hover */
}

.journal-footer img {
    vertical-align: middle; /* Align Creative Commons image */
}

/* Loading Overlay */
.background-overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999;
    width: 100%;
    height: 100%;
    background-color: rgba(102, 102, 102, 0.38);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    text-align: center;
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
    .journal-main-header .info-list {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .journal-main-header .input-group {
        width: 100% !important;
        margin-bottom: 1rem;
    }
    .journal-main-header .social-icons {
        justify-content: center;
        width: 100%;
    }
    .navbar-collapse {
        text-align: center;
    }
    .navbar-nav .dropdown-menu {
        text-align: center;
    }
    .nav-tabs .nav-link {
        font-size: 0.9rem;
        padding: 0.5rem 0.75rem;
    }
    .journal-footer .list-footer li {
        border-right: none;
        width: 100%;
        text-align: center;
        height: auto;
        line-height: normal;
    }
}

@media (max-width: 575.98px) {
    .journal-main-header img {
        height: 30px;
    }
    .journal-main-header .btn-info {
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
    }
    .btn-social-icon {
        width: 25px;
        height: 25px;
        font-size: 0.8rem;
    }
    .widget-title.custom-list-header {
        font-size: 0.9rem;
        padding: 0.75rem 1rem;
    }
    .custom-section-title {
        font-size: 1.3rem;
    }
}
