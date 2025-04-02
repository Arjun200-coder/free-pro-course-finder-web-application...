// Course data with external links
const courses = {
    it: {
        free: [
            {
                title: "CS50's Intro to CS",
                description: "Introduction to Cyber security focuses on protecting systems, networks, and data from cyber threats. It covers core concepts like malware, phishing, encryption, network security, and ethical hacking.",
                provider: "EDX",
                duration: "6-18 hrs per week",
                // color: "#3498db",
                image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg",
                link: "https://pll.harvard.edu/course/cs50-introduction-computer-science"
            },
            {
                title: "Web Development Basics",
                description: "Web development basics involve creating websites using HTML for structure, CSS for styling, and JavaScript for interactivity. It includes understanding web design principles, responsive layouts, and hosting.",
                provider: "EDX",
                duration: "1 Hour",
                // color: "#e74c3c",
                image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
                link: "https://www.edx.org/learn/computer-science/ibm-guided-project-web-development-w-html-css-for-beginners?index=product&queryID=d3b7fadf8901acea3dc60500ccb88b8e&position=2&results_level=first-level-results&term=Web+Development+Basics&objectID=course-40eabb04-17b3-430d-85e8-3f2ef697417e&campaign=Guided+Project%3A+Web+Development+w%2F+HTML+%26+CSS+for+Beginners&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Introduction to Cyber Security",
                description: "Introduction to Cyber security focuses on protecting systems, networks, and data from cyber threats. It covers core concepts like malware, phishing, encryption, network security, and ethical hacking.",
                provider: "Udemy",
                duration: "1 Hour 8 min",
                // color: "#e74c3c",
                image: "https://static.vecteezy.com/system/resources/thumbnails/006/950/568/small_2x/cyber-security-data-protection-business-concept-on-virtual-screen-shield-protect-icon-in-wireframe-robotic-hand-antivirus-interface-illustration-vector.jpg",
                link: "https://www.udemy.com/course/certified-secure-netizen/"
            },
            {
                title: "Google IT Automation with Python",
                description: "Automating Google searches with Python often involves using libraries like Selenium for browser interaction or Google Search API for programmatic access.",
                provider: "Udemy",
                duration: "2 Hour",
                // color: "#e74c3c",
                image: "https://fabiopacifici.com/wp-content/uploads/2020/02/Learn_python_with_google_image.jpg",
                link: "https://www.udemy.com/course/python-from-beginner-to-expert-starter-free/"
            },
        ],
        paid: [
            {
                title: "The Complete JavaScript Course",
                description: "Master JavaScript with the most complete course on the market! Projects, challenges, quizzes.",
                provider: "Udemy",
                duration: "10-15 hrs per week",
                // color: "#f39c12",
                image: "https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08=",
                link: "https://www.udemy.com/course/the-complete-javascript-course/"
            }
        ]
    },
    business: {
        free: [
            {
                title: "Entrepreneurship in Emerging Economies",
                description: "Entrepreneurship in economics involves the creation of new businesses or innovations that drive economic growth. Entrepreneurs identify market opportunities, take risks, and organize resources to produce goods or services.",
                provider: "EDX",
                duration: "18 Hour",
                // color: "#3498db",
                image: "https://canadiansme.ca/wp-content/uploads/2023/10/Level-Up-Your-Entrepreneurial-Journey-with-Alberta-Women-Entrepreneurs.png",
                link: "https://www.edx.org/learn/entrepreneurship/harvard-university-entrepreneurship-in-emerging-economies?index=product&queryID=21417bef07b01d1e4db67bdf56f80eee&position=4&linked_from=autocomplete&c=autocomplete"
            },
            {
                title: "Entrepreneurship in Emerging Economies",
                description: "Innovation for entrepreneurs is the process of developing new ideas, products, or services that solve problems or meet unmet needs in the market. It involves creativity, risk-taking, and leveraging emerging technologies or new business models.",
                provider: "Udemy",
                duration: "1 Hour",
                // color: "#3498db",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVLqGASMUSkTAdxM10lNP1QXEqxpsX6U1hw&s",
                link: "https://www.udemy.com/course/60-day-startup-introduction-to-startups/"
            },
            {
                title: "Fundamentals of Digital Marketing",
                description: "Digital marketing fundamentals include understanding target audiences, creating engaging content, utilizing various online platforms (social media, search engines, email), and optimizing websites for search engines (SEO).",
                provider: "Udemy",
                duration: "1 Hour",
                // color: "#3498db",
                image: "https://www.springboard.com/blog/wp-content/uploads/2022/06/what-is-digital-marketing.png",
                link: "https://www.udemy.com/course/the-fundamentals-of-the-digital-marketing/"
            },
            {
                title: "Business Fundamentals",
                description: "Business fundamentals are the core principles that drive successful enterprises. They include understanding financial management, marketing, operations, and strategy. Key concepts involve budgeting, profit margins, customer acquisition, and market research.",
                provider: "EDX",
                duration: "18 Hour",
                // color: "#3498db",
                image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Business%20Fundamentals.jpg&w=1200&h=630",
                link: "https://www.edx.org/learn/business-administration/university-of-british-columbia-business-foundations?index=product&queryID=391d5f0e1c09959a429b133c779c9890&position=1&results_level=first-level-results&term=business+fundamentals&objectID=course-1c30e9b3-78ee-4c57-9af9-922153073d99&campaign=Business+Foundations&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            }
            
        ],
        paid: [
            {
                title: "Financial Accounting",
                description: "Learn the fundamentals of financial accounting concepts and financial statements.",
                provider: "Coursera",
                duration: "4-6 hrs per week",
                // color: "#3498db",
                image: "https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600nw-2441922909.jpg",
                link: "https://www.coursera.org/learn/financial-accounting"
            }
        ]
    },
    design: {
        free: [
            {
                title: "Introduction to Psychology",
                description: "Introduction to Psychology explores the scientific study of human behavior and mental processes. It covers topics like perception, memory, learning, emotions, personality, and social interactions.",
                provider: "EDX",
                duration: "50 Hour",
                // color: "#2ecc71",
                image: "https://blogs.longwood.edu/edwinelleportfolio/files/2016/12/blog-examprep-061913.jpg",
                link: "https://www.edx.org/learn/python/st-margarets-episcopal-school-introduction-to-psychology?index=product&queryID=8f57a3b8e1f080ee7583bb6dcd9566f3&position=2&results_level=first-level-results&term=introduction+to+pyschology&objectID=course-1580c6c4-5a81-4a79-bf35-bb4dddfb891f&campaign=Introduction+to+Psychology&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "COVID-19: Tackling the Novel Coronavirus",
                description: "Tackling the novel coronavirus involves a combination of preventive measures like mask-wearing, hand hygiene, and social distancing, alongside widespread vaccination campaigns.",
                provider: "Udemy",
                duration: "2 Hour",
                // color: "#2ecc71",
                image: "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg",
                link: "https://www.udemy.com/course/mental-health-for-coping-with-stress-anxiety-covid-19/"
            },
            {
                title: "Health Informatics on FHIR",
                description: "FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically. It enables seamless data sharing between systems using RESTful APIs and standardized formats like JSON or XML. ",
                provider: "EDX",
                duration: "50 Hour",
                // color: "#2ecc71",
                image: "https://www.onyxhealth.io/wp-content/uploads/2021/02/fhir-1.png",
                link: "https://www.edx.org/learn/health-informatics/the-georgia-institute-of-technology-health-informatics-data-and-interoperability-standards?index=product&queryID=6c8de4b7d5aa6dc5c3480b7b6d1868d3&position=1&results_level=first-level-results&term=Health+Informatics+on+FHIR&objectID=course-e3933140-d4dc-4a6a-bf08-4e068cc5609e&campaign=Health+Informatics%3A+Data+and+Interoperability+Standards&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Nutrition and Health: Macronutrients and Overnutrition",
                description: "Nutrition and health are closely linked, as a balanced diet provides essential nutrients that support body functions, boost immunity, and prevent diseases",
                provider: "EDX",
                duration: "52 Hour",
                // color: "#2ecc71",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ACuGHpVzK7aiL7VtielvqPBgBgacxh9uUQ&s",
                link: "https://www.edx.org/learn/nutrition/wageningen-university-research-nutrition-and-health-macronutrients-and-overnutrition?index=product&queryID=3a8f18279511ec67a15e1d6d9c96bbca&position=1&results_level=first-level-results&term=Nutrition+and+Health%3A+Macronutrients+and+Overnutrition&objectID=course-c2f0c9cd-6577-4f38-8a31-56c8dd1cf2a4&campaign=Nutrition+and+Health%3A+Macronutrients+and+Overnutrition&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            }
        ],
        paid: [
            {
                title: "Nutrition and Health: Macronutrients and Overnutrition",
                description: "Nutrition and health are closely linked, as a balanced diet provides essential nutrients that support body functions, boost immunity, and prevent diseases. Proper nutrition includes consuming a variety of foods rich in vitamins, minerals, proteins, fats, and carbohydrates. ",
                provider: "Classcentral",
                duration: "1 Hour ",
                // color: "#2ecc71",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1j02DtgdqwBePfzwFpMu155n-wJeLAThKQ&s",
                link: "https://www.classcentral.com/course/nutrition-wageningen-university-research-nutritio-2154"
            }
        ]
    },
    marketing: {
        free: [
            {
                title: "Modern Art & Ideas",
                description: "Modern art refers to artistic movements from the late 19th to mid-20th century that broke traditional boundaries, emphasizing innovation and experimentation. It includes abstract, surrealism, and expressionism.",
                provider: "Udemy",
                duration: "1 Hour",
                // color: "#2ecc71",
                image: "https://cdn.mos.cms.futurecdn.net/7YrobQvFFzw8aWsAUtoYXB-650-80.jpg.webp",
                link: "https://www.udemy.com/course/art-fundamentals-in-one-hour/"
            },
            {
                title: "Shakespeare’s Life and Work",
                description: "William Shakespeare (1564-1616) was an English playwright, poet, and actor, widely regarded as one of the greatest writers in the English language. ",
                provider: "EDX",
                duration: "20 Hour",
                // color: "#2ecc71",
                image: "https://cdn.thecollector.com/wp-content/uploads/2024/08/top-plays-william-shakespeare.jpg?width=1400&quality=70",
                link: "https://www.edx.org/learn/shakespeare/harvard-university-shakespeare-s-life-and-work?index=product&queryID=79c2392a4919e70fb6d143d3345533ce&position=1&results_level=first-level-results&term=Shakespeare%E2%80%99s+Life+and+Work&objectID=course-36eb1cb5-abab-4f1c-b9f7-1c386f5b11e7&campaign=Shakespeare%27s+Life+and+Work&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Introduction to Philosophy",
                description: "Philosophy is the study of fundamental questions regarding existence, knowledge, ethics, reason, and the mind. It explores concepts like reality, morality, and human nature through critical thinking and logical analysis.",
                provider: "Udemy",
                duration: "1 Hour",
                // color: "#2ecc71",
                image: "https://philosophyawayoflife.com/wp-content/uploads/2021/10/philosophy-a-way-of-life-ph.jpg?w=1000",
                link: "https://www.udemy.com/course/introduction-to-philosophy-with-plato/"
            },
            {
                title: "Film, Images & Historical Interpretation",
                description: "Films often serve as powerful tools for historical interpretation, blending artistic expression with factual events. Filmmakers can offer unique perspectives on historical events, influencing how audiences understand the past. ",
                provider: "Udemy",
                duration: "30 min",
                // color: "#2ecc71",
                image: "https://www.thoughtco.com/thmb/LSSFSX6XnWWvyJieTJ_Vk_INrqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-654313960-5c532556c9e77c00014b0273.jpg",
                link: "https://www.udemy.com/course/filmschoolcinema101/"
            }
        ],
        paid: [
            {
                title: "Modern Art & Ideas",
                description: "Modern art refers to artistic movements from the late 19th to mid-20th century that broke traditional boundaries, emphasizing innovation and experimentation. It includes abstract, surrealism, and expressionism, focusing on subjective expression and the exploration of new mediums.",
                provider: "Course",
                duration: "40 min",
                // color: "#2ecc71",
                image: "https://media.istockphoto.com/id/478065559/photo/emotions-inside-human.webp?a=1&b=1&s=612x612&w=0&k=20&c=aElijLuchHxdJP0sHsHOXa8HI1SkvOs8Wnot8SFZfX8=",
                link: ""
            }
        ]
    },
    'data-science': {
        free: [
            {
                title: "The Science of Climate Change",
                description: "Climate change refers to long-term alterations in temperature, weather patterns, and ecosystems due to human activities, primarily the burning of fossil fuels. ",
                provider: "EDX",
                duration: "16 Hour",
                // color: "#2ecc71",
                image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20211112073341/ri/673/picture/2021/11/shutterstock_1127223938.jpg",
                link: "https://www.edx.org/learn/climate-change/sdg-academy-climate-change-the-science-and-global-impact?index=product&queryID=e7325c8c18588dcef7ff21cbeaa01beb&position=1&results_level=first-level-results&term=Climate+Change&objectID=course-32779451-9094-45c8-9805-505bfe77ae02&campaign=Climate+Change%3A+The+Science+and+Global+Impact&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Biodiversity and Conservation",
                description: "Biodiversity refers to the variety of life on Earth, including species, ecosystems, and genetic diversity. Conservation is the protection and management of this biodiversity to prevent extinction.",
                provider: "EDX",
                duration: "7 Hour",
                // color: "#2ecc71",
                image: "https://www.euroschoolindia.com/wp-content/uploads/2024/02/What-is-Biodiversity-Importance-Ways-To-Conserve.jpg",
                link: "https://www.edx.org/learn/ecosystems/ethx-environmental-dna-sensing-the-diversity-of-life-and-assessing-ecosystem-health?index=product&queryID=086404033b906d96cc0eb17afc3ac5a3&position=1&results_level=first-level-results&term=Biodiversity+and+Conservation&objectID=course-66aff7f5-721e-496e-9e85-4c62ded67880&campaign=Environmental+DNA%3A+Sensing+the+Diversity+of+Life+and+Assessing+Ecosystem+Health&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Introduction to Environmental Law and Policy",
                description: "Environmental law and policy regulate human activities to protect the environment. It includes laws on air and water quality, waste management, biodiversity conservation, and climate change.",
                provider: "EDX",
                duration: "5 Hour",
                // color: "#2ecc71",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL35uKzT0OBe8ifg11BKOLwIn--kZi3ShLBw&s",
                link: "https://www.edx.org/learn/climate-change/massachusetts-institute-of-technology-cities-and-climate-change-mitigation-and-adaptation?index=product&queryID=ab7f2c0e7b9545c7d914b57028209602&position=1&results_level=first-level-results&term=Environmental+Law+and+Policy&objectID=course-6101ee5b-bd7a-4ce0-b229-949de6bf28dd&campaign=Cities+and+Climate+Change%3A+Mitigation+and+Adaptation&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
            },
            {
                title: "Global Environmental Management",
                description: "Global environmental management involves strategies and practices to address environmental challenges across borders. It includes international cooperation, policies.",
                provider: "FutureLearn",
                duration: "4 Hour",
                // color: "#2ecc71",
                image: "https://media.istockphoto.com/id/1413930025/photo/crystal-globe-putting-on-moss-esg-icon-for-environment-social-and-governance.jpg?s=612x612&w=0&k=20&c=AfK7HKFtO8yy6JE557Agw6GJXojjMJWlH2lrGM_RD2o=",
                link: "https://www.futurelearn.com/courses/introduction-to-environmental-science"
            },
        ],
        paid: [
            {
                title: "The Science of Climate Change",
                description: "Climate change refers to long-term alterations in temperature, weather patterns, and ecosystems due to human activities, primarily the burning of fossil fuels.",
                provider: "SDG",
                duration: "9 Hour",
                // color: "#2ecc71",
                image: "https://cdn.pixabay.com/photo/2022/05/21/21/47/river-7212351_1280.jpg",
                link: "https://sdgacademy.org/course/climate-change-the-science-and-global-impact/"
            },
            {
                title: "Introduction to Environmental Law and Policy",
                description: "Environmental law and policy regulate human activities to protect the environment. It includes laws on air and water quality, waste management, biodiversity conservation, and climate change.",
                provider: "Classcentral",
                duration: "2 Hour",
                // color: "#2ecc71",
                image: "https://media.istockphoto.com/id/1482810339/photo/the-green-world-is-in-the-book-there-is-a-judging-hammer-behind-it-the-concept-of-global.jpg?s=612x612&w=0&k=20&c=L21gfJOsPDqh6Dw_jx0cQpclwEX_DHNpQJZpe9jXszU=",
                link: "https://www.classcentral.com/course/environlaw-725"
            }
        ]
    }
};

// DOM Elements
const homePage = document.getElementById('home-page');
const coursesPage = document.getElementById('courses-page');
const aboutPage = document.getElementById('about-page');
const topicSelect = document.getElementById('topic');
const typeSelect = document.getElementById('type');
const searchBtn = document.getElementById('search-btn');
const errorMessage = document.getElementById('error-message');
const coursesGrid = document.getElementById('courses-grid');
const homeLink = document.getElementById('home-link');
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const coursesBackBtn = document.getElementById('courses-back-btn');
const aboutBackBtn = document.getElementById('about-back-btn');

// Show home page by default
showHomePage();

// Event Listeners
topicSelect.addEventListener('change', validateForm);
typeSelect.addEventListener('change', validateForm);
searchBtn.addEventListener('click', showCoursesPage);
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHomePage();
});
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    showHomePage();
});
navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    showAboutPage();
});
coursesBackBtn.addEventListener('click', showHomePage);
aboutBackBtn.addEventListener('click', showHomePage);

// Validate form function
function validateForm() {
    if (topicSelect.value && typeSelect.value) {
        searchBtn.disabled = false;
        errorMessage.style.display = 'none';
    } else {
        searchBtn.disabled = true;
        
        if ((topicSelect.value && !typeSelect.value) || (!topicSelect.value && typeSelect.value)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    }
}

// Show home page
function showHomePage() {
    homePage.style.display = 'block';
    coursesPage.style.display = 'none';
    aboutPage.style.display = 'none';
}

// Show courses page
function showCoursesPage() {
    const topic = topicSelect.value;
    const type = typeSelect.value;
    
    // Clear previous courses
    coursesGrid.innerHTML = '';
    
    // Get selected courses
    const selectedCourses = courses[topic]?.[type] || [];
    
    if (selectedCourses.length > 0) {
        selectedCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.onclick = () => window.open(course.link, '_blank');
            
            courseCard.innerHTML = `
                <div class="course-image" style="background-color: ${course.color}; background-image: url('${course.image}')">
                </div>
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-meta">
                        <span>By: ${course.provider}</span>
                        <span>${course.duration}</span>
                    </div>
                </div>
            `;
            
            coursesGrid.appendChild(courseCard);
        });
    } else {
        coursesGrid.innerHTML = '<p>No courses found for the selected filters.</p>';
    }
    
    homePage.style.display = 'none';
    coursesPage.style.display = 'block';
    aboutPage.style.display = 'none';
}

// Show about page
function showAboutPage() {
    homePage.style.display = 'none';
    coursesPage.style.display = 'none';
    aboutPage.style.display = 'block';
}

