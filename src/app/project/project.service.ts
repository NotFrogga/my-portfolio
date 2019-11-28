import { ProjectComponent } from './project.component'; 

export class ProjectService {

	getProjects() {
		return ({
			0: {
				title: "Flip the cards",
				description: `Web app game in which you start with some cards face up, some face down. You can remove any face up card, but the adjacent cards, if any, will flip.
				The goal is to successfully remove every card.`,
				imgUrl: "https://images.freeimages.com/images/large-previews/962/cards-1425279.jpg",
				programmingSkills: "HTML, CSS, Javascript"
			},
			1: {
				title: "My Secret Diary",
				description: "Web app in which you use a login and password to connect to your secret diary. The diary is updated automatically and is stored in a SQL database.",
				imgUrl: "https://images.freeimages.com/images/large-previews/53d/diary-page-1240501.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, PHP, MySQL"
			},
			2: {
				title: "Weather Forecast",
				description: "Web app in which you can see a short forecast a city by using OpenWeatherMap API",
				imgUrl: "https://images.freeimages.com/images/large-previews/f94/sky-sun-behind-clouds-sunburst-1337408.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, HTTP REST"
			},
		});
	}
}