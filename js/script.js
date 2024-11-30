// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openPopup(section) {
    const popupContent = {
        'medical-research': `
            <h3>🧪 Medical Research Articles 📚</h3>
            <p>With over 5 years of expertise in the healthcare domain, I have developed and published diverse medical research articles, case studies, and healthcare blogs. My experience includes:
            <ul>
                <li>Designing licensing exam questionnaires for prestigious exams like PTCB, NCLEX, and USMLE. 📑</li>
                <li>Creating healthcare hiring assessments for AI platforms, streamlining the recruitment process for healthcare professionals. 💻</li>
                <li>Developing an accredited PTCB Certification Training Course, empowering aspiring pharmacy technicians with comprehensive knowledge. 🎓</li>
            </ul></p>
          
        `,
        'wikipedia': `
            <h3>📖 Wikipedia Contributions 📝</h3>
            <p>A seasoned Wikipedia editor and contributor with an extended profile status, allowing me to publish new articles in just four days. Highlights of my work include:
            <ul>
                <li>Publishing 10+ Wikipedia pages for notable public profiles, organizations, and brands. 🌐</li>
                <li>Performing countless edits to ensure accuracy, credibility, and adherence to Wikipedia's guidelines. 🔍</li>
                <li>Leveraging my expertise to craft engaging and well-sourced content, ensuring pages meet encyclopedic standards. 🧠</li>
            </ul></p>
            
        `,
        'presentation-design': `
            <h3>🎨 Professional Presentation Designer 📊</h3>
            <p>With a decade of experience as a presentation designer, I specialize in creating visually compelling and content-rich presentations for a variety of purposes. My expertise includes:
            <ul>
                <li>Designing high-impact slides for professional, academic, and corporate use. 📈</li>
                <li>Transforming complex information into visually appealing graphics and layouts. 📐</li>
                <li>Delivering custom-tailored designs that align with branding and messaging goals. 💡</li>
            </ul></p>
            
        `
    };

    document.getElementById("popup-content-detail").innerHTML = popupContent[section];
    document.getElementById("popup-modal").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
}
