import { ProjectComponent } from './project.component'; 

export class ProjectService {

	getProjects() {
		return ({
			0: {
				title: "Flip the cards",
				description: `Web app game in which you start with some cards face up, some face down. You can remove any face up card, but the adjacent cards, if any, will flip.
				The goal is to successfully remove every card.`,
				imgUrl: "assets/img/cards.jpg",
				programmingSkills: "HTML, CSS, Javascript",
				link:"www.google.com"
			},
			1: {
				title: "My Secret Diary",
				description: "Web app in which you use a login and password to connect to your secret diary. The diary is updated automatically and is stored in a SQL database.",
				imgUrl: "assets/img/diary-page.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, PHP, MySQL",
				link:"https://www.google.com"
			},
			2: {
				title: "Weather Forecast",
				description: "Web app in which you can see a short forecast a city by using OpenWeatherMap API",
				imgUrl: "assets/img/clouds.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, HTTP REST",
				link:"https://www.google.com"
			},
		});
	}
}