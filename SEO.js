document.addEventListener("DOMContentLoaded", function () {
    // Structured Data for SuPrathon
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "SuPrathon 2k25 - India's Biggest Virtual Hackathon",
        "startDate": "2025-07-12T00:00",
        "endDate": "2025-07-13T12:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": "https://suprathon2k25.netlify.app/"
        },
        "image": [
            "https://yourwebsite.com/SuPrathon_Logo.png"
        ],
        "description": "SuPrathon 2k25 is India’s biggest virtual national-level hackathon organized by Sumit Waghmare and his Team, Founder & CEO of CodeElevate. A 36-hour event filled with coding, collaboration, and innovation.",
        "organizer": {
            "@type": "Person",
            "name": "Sumit Waghmare",
            "url": "https://www.codeelevate.in"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Inject SEO Meta Tags
    const metaTags = [
        { name: "description", content: "Join SuPrathon 2k25, India's Biggest Virtual Hackathon. Organized by Sumit Waghmare (Founder of CodeElevate). Win prizes, internships, and national recognition!" },
        { name: "keywords", content: "SuPrathon, SuPrathon 2k25, India Hackathon, CodeElevate, Sumit Waghmare, virtual hackathon, national hackathon, AI hackathon, app development hackathon, student hackathon, coding competition, innovation challenge , CEO Sumit Waghmare , Founeder Sumit Waghmare , Entrepreneur Sumit Waghmare" },
        { property: "og:title", content: "SuPrathon 2k25 - India's Biggest Virtual Hackathon" },
        { property: "og:description", content: "Organized by CodeElevate, SuPrathon is a national-level virtual hackathon empowering innovation and talent." },
        { property: "og:image", content: "https://yourwebsite.com/SuPrathon_Logo.png" },
        { property: "og:url", content: "https://yourwebsite.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "SuPrathon 2k25 - India's Biggest Virtual Hackathon" },
        { name: "twitter:description", content: "Join us for SuPrathon 2k25 - organized by Sumit Waghmare, with 36 hours of coding, innovation and mentorship." },
        { name: "twitter:image", content: "https://yourwebsite.com/SuPrathon_Logo.png" }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, val]) => meta.setAttribute(key, val));
        document.head.appendChild(meta);
    });
});
