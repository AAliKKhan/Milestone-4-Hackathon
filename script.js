"use strict";
const formButton = document.querySelector('button');
formButton.addEventListener('click', () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const name = ((_a = document.querySelector('#name')) === null || _a === void 0 ? void 0 : _a.value.trim()) || 'Not Provided';
    const nationality = ((_b = document.querySelector('#nationality')) === null || _b === void 0 ? void 0 : _b.value.trim()) || 'Not Provided';
    const religion = ((_c = document.querySelector('#religion')) === null || _c === void 0 ? void 0 : _c.value.trim()) || 'Not Provided';
    const gender = ((_d = document.querySelector('input[name="gender"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || 'Not Specified';
    const education = ((_e = document.querySelector('#education')) === null || _e === void 0 ? void 0 : _e.value.trim()) || 'Not Provided';
    const workExperience = ((_f = document.querySelector('#workExperience')) === null || _f === void 0 ? void 0 : _f.value.trim()) || 'Not Provided';
    const skills = ((_g = document.querySelector('#skills')) === null || _g === void 0 ? void 0 : _g.value.trim()) || 'Not Provided';
    const personalInfo = {
        name,
        nationality,
        religion,
        gender
    };
    const otherInfo = {
        education,
        workExperience,
        skills
    };
    generateResume(personalInfo, otherInfo);
});
function generateResume(personalInfo, otherInfo) {
    const resumeContainer = document.getElementById('resumeContainer');
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
    // Add event listeners to handle editing
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
    const personalInfo = {
        name: document.querySelector('#nameDisplay').textContent || 'Not Provided',
        nationality: document.querySelector('#nationalityDisplay').textContent || 'Not Provided',
        religion: document.querySelector('#religionDisplay').textContent || 'Not Provided',
        gender: document.querySelector('#genderDisplay').textContent || 'Not Specified'
    };
    const otherInfo = {
        education: document.querySelector('#educationDisplay').textContent || 'Not Provided',
        workExperience: document.querySelector('#workExperienceDisplay').textContent || 'Not Provided',
        skills: document.querySelector('#skillsDisplay').textContent || 'Not Provided'
    };
    generateResume(personalInfo, otherInfo);
}
