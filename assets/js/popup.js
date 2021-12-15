function about_toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var about_popup = document.getElementById('about_popup');
	about_popup.classList.toggle('active')

}

function contact_toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var contact_popup = document.getElementById('contact_popup');
	contact_popup.classList.toggle('active')

}

function education_toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var education_popup = document.getElementById('education_popup');
	education_popup.classList.toggle('active')
}

function skillset_toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var skillset_popup = document.getElementById('skillset_popup');
	skillset_popup.classList.toggle('active')
}

function projects_toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var projects_popup = document.getElementById('projects_popup');
	projects_popup.classList.toggle('active')
}

document.getElementsByName('contact-form').onsubmit = function(){submit()};

function submit(){
	alert('Thanks for reaching out!');
	location.reload();
}