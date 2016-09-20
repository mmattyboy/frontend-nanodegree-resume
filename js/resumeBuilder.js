
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x, y);
// });

// function inName(name)
// {
//   name = name.trim().split(" ");
//   console.log(name);
//   var newName = "";
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
// }
//
// $("#main").append(internationalizeButton);


var bio = {
    "name": "Matt",
    "role": "student",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "computer@gmail.com",
        "github": "github.matty.com",
        "location": "California"
    },
    "welcomeMessage": "Welcome to my page",
    "skills": ["C++", " Javascript", " HTML", " CSS"],
    "biopic": "images/2016 Spring 025 - Copy.JPG",
    displayBio: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills);
        $("#header").append(formattedSkill);
    }
};

bio.displayBio();

var education = {
    "schools": [{
        "name": "Udacity",
        "location": "USA",
        "degree": "Nanodegree",
        "majors": ["biochemistry", " computer science"],
        "dates": "08/2011 - 05/2016",
        "url": "Udacity.com"
    }],
    "onlineCourses": [{
        "title": "PhD",
        "school": "Udacity",
        "dates": "08/2011 - 05/2016",
        "url": "Udacity.com"
    }],
    displayEducation: function() {
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $("#education").append(formattedschoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $("#education").append(formattedSchoolDegree);

            var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $("#education").append(formattedSchoolDate);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $("#education").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $("#education").append(formattedSchoolMajor);

            var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.schools[i].url);
            $("#education").append(formattedSchoolURL);
        }

        $("#education").append(HTMLonlineClasses);
        for (i = 0; i < education.onlineCourses.length; i++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            $("#education").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $("#education").append(formattedOnlineSchool);

            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $("#education").append(formattedOnlineDate);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $("#education").append(formattedOnlineURL);
        }
    }
};

education.displayEducation();

var work = {
    "jobs": [{
        "employer": "Web Developer",
        "title": "Ninja",
        "location": "USA",
        "dates": "in progress",
        "description": "Build Websites"
    }],

    displayWork: function() {
        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            $("#workExperience").append(formattedWorkEmployer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $("#workExperience").append(formattedTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $("#workExperience").append(formattedDate);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $("#workExperience").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $("#workExperience").append(formattedDescription);
        }
    }
};

work.displayWork();

var projects = {
    "projects": [{
        "title": "HI",
        "dates": "ANYOHASEYO",
        "description": "NIHAO",
        "images": ["images/image.jpeg", "images/image3.jpg.jpeg"]
    }],
    displayProjects: function() {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
            $("#projects").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
            $("#projects").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
            $("#projects").append(formattedDescription);
        }
        for (i = 0; i < projects.projects[0].images.length; i++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[0].images[i]);
            $("#projects").append(formattedImage);
        }
    }
};

projects.displayProjects();

$("#mapDiv").append(googleMap);
$("#footerContacts").append("Matt@udacity.com");
