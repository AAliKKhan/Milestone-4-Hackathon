type PersonalInfo = {
    name: string;
    nationality: string;
    religion: string;
    gender: string;
};

type OtherInfo = {
    education: string;
    workExperience: string;
    skills: string;
};

const formButton = document.querySelector('button') as HTMLButtonElement;

formButton.addEventListener('click', () => {
    const name = (document.querySelector('#name') as HTMLInputElement)?.value.trim() || 'Not Provided';
    const nationality = (document.querySelector('#nationality') as HTMLInputElement)?.value.trim() || 'Not Provided';
    const religion = (document.querySelector('#religion') as HTMLInputElement)?.value.trim() || 'Not Provided';
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || 'Not Specified';
    const education = (document.querySelector('#education') as HTMLTextAreaElement)?.value.trim() || 'Not Provided';
    const workExperience = (document.querySelector('#workExperience') as HTMLTextAreaElement)?.value.trim() || 'Not Provided';
    const skills = (document.querySelector('#skills') as HTMLTextAreaElement)?.value.trim() || 'Not Provided';

    const personalInfo: PersonalInfo = {
        name,
        nationality,
        religion,
        gender
    };

    const otherInfo: OtherInfo = {
        education,
        workExperience,
        skills
    };

    generateResume(personalInfo, otherInfo);
});

function generateResume(personalInfo: PersonalInfo, otherInfo: OtherInfo) {
    const resumeContainer = document.getElementById('resumeContainer')!;
    resumeContainer.innerHTML = `
        <div id="personalInfo" contenteditable="true">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> <span id="nameDisplay">${personalInfo.name}</span></p>
            <p><strong>Nationality:</strong> <span id="nationalityDisplay">${personalInfo.nationality}</span></p>
            <p><strong>Religion:</strong> <span id="religionDisplay">${personalInfo.religion}</span></p>
            <p><strong>Gender:</strong> <span id="genderDisplay">${personalInfo.gender}</span></p>
        </div>
        <div id="education" contenteditable="true">
            <h2>Education</h2>
            <p id="educationDisplay">${otherInfo.education}</p>
        </div>
        <div id="workExperience" contenteditable="true">
            <h2>Work Experience</h2>
            <p id="workExperienceDisplay">${otherInfo.workExperience}</p>
        </div>
        <div id="skills" contenteditable="true">
            <h2>Skills</h2>
            <p id="skillsDisplay">${otherInfo.skills}</p>
        </div>
    `;

  
    addEditableEventListeners();
}

function addEditableEventListeners() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');

    editableElements.forEach(element => {
        element.addEventListener('blur', () => {
            updateResumeContent();
        });
    });
}

function updateResumeContent() {
    const personalInfo: PersonalInfo = {
        name: (document.querySelector('#nameDisplay') as HTMLSpanElement).textContent || 'Not Provided',
        nationality: (document.querySelector('#nationalityDisplay') as HTMLSpanElement).textContent || 'Not Provided',
        religion: (document.querySelector('#religionDisplay') as HTMLSpanElement).textContent || 'Not Provided',
        gender: (document.querySelector('#genderDisplay') as HTMLSpanElement).textContent || 'Not Specified'
    };

    const otherInfo: OtherInfo = {
        education: (document.querySelector('#educationDisplay') as HTMLParagraphElement).textContent || 'Not Provided',
        workExperience: (document.querySelector('#workExperienceDisplay') as HTMLParagraphElement).textContent || 'Not Provided',
        skills: (document.querySelector('#skillsDisplay') as HTMLParagraphElement).textContent || 'Not Provided'
    };

    generateResume(personalInfo, otherInfo);
}