document.addEventListener("DOMContentLoaded", function () {
    // Inject SEO Meta Tags only (structured data is in HTML <head>)
    const metaTags = [
        {
            name: "description",
            content: "Join SuPrathon 2k25 – India's Biggest Virtual Hackathon organized by Sumit Waghmare (Founder of CodeElevate). Win prizes, internships, and national recognition."
        },
        {
            name: "keywords",
            content: "SuPrathon, SuPrathon 2k25, CodeElevate, Sumit Waghmare, virtual hackathon, national hackathon, AI hackathon, app development hackathon, student hackathon, coding competition, CEO Sumit Waghmare, Founder Sumit Waghmare, Entrepreneur Sumit Waghmare"
        },
        {
            property: "og:title",
            content: "SuPrathon 2k25 - India's Biggest Virtual Hackathon"
        },
        {
            property: "og:description",
            content: "Organized by CodeElevate, SuPrathon is a national-level virtual hackathon empowering innovation and talent."
        },
        {
            property: "og:image",
            content: "http://suprathon.suprazotech.in/SuPrathon_Logo.png"
        },
        {
            property: "og:url",
            content: "http://suprathon.suprazotech.in"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:title",
            content: "SuPrathon 2k25 - India's Biggest Virtual Hackathon"
        },
        {
            name: "twitter:description",
            content: "Join us for SuPrathon 2k25 – organized by Sumit Waghmare. 36 hours of coding, innovation and mentorship."
        },
        {
            name: "twitter:image",
            content: "http://suprathon.suprazotech.in/SuPrathon_Logo.png"
        }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, val]) => meta.setAttribute(key, val));
        document.head.appendChild(meta);
    });
});
