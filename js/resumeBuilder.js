
var bio = {
    "name": "Matt",
    "role": "student",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "computer@gmail.com",
        "github": "github.matty.com",
        "location": "El Monte, CA"
    },
    "welcomeMessage": "Welcome to my page",
    "skills": ["C++", " Javascript", " HTML", " CSS"],
    "biopic": "images/2016 Spring 025 - Copy.JPG",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        // bio.skills.forEach(function(skills){
        //     var formattedSkill = HTMLskills.replace("%data%", skills);
        //     $("#skills").append(formattedSkill);
        // })
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills-h3").append(formattedSkill);
        }
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Fullerton, CA",
        "degree": "Nanodegree",
        "majors": ["biochemistry", " computer science"],
        "dates": "08/2011 - 05/2016",
        "url": "http://udacity.com"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "08/2011 - 05/2016",
        "url": "http://Udacity.com"
    }],
    display: function() {
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry:last").append(formattedschoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDate);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedSchoolMajor);

            var formattedSchoolURL = HTMLonlineURL.replace("#", education.schools[i].url).replace("%data%", education.schools[i].url);
            $(".education-entry:last").append(formattedSchoolURL);
        }

        for (i = 0; i < education.onlineCourses.length; i++) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedOnlineDate);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "Web Developer",
        "title": "Ninja",
        "location": "San Gabriel, CA",
        "dates": "in progress",
        "description": "Build Websites"
    }],

    display: function() {
        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", "https://www.udacity.com/");
            $(".work-entry:last").append(formattedWorkEmployer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(formattedTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "HI",
        "dates": "ANYOHASEYO",
        "description": "NIHAO",
        "images": ["images/image.jpeg", "images/image3.jpg.jpeg"]
    }],
    display: function() {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", "https://www.udacity.com/");
            $(".project-entry:last").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            for (j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
