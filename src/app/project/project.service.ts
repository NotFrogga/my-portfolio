import { ProjectComponent } from './project.component'; 

export class ProjectService {

	getProjects() {
		return ({
			0: {
				title: "Flip the cards",
				description: `Jeu en mode application web responsive où le but est de retirer toutes les cartes.`,
				imgUrl: "https://images.freeimages.com/images/large-previews/962/cards-1425279.jpg",
				programmingSkills: "HTML, CSS, Javascript"
			},
			1: {
				title: "My Secret Diary",
				description: "Application web responsive avec login permettant de disposer d’un carnet de texte en ligne automatiquement mis à jour via requêtes HTTP.",
				imgUrl: "https://images.freeimages.com/images/large-previews/53d/diary-page-1240501.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, PHP, MySQL"
			},
			2: {
				title: "Weather Forecast",
				description: "Application web responsive utilisant une API - OpenWeatherMap API - pour donner un court bulletin météo.",
				imgUrl: "https://images.freeimages.com/images/large-previews/f94/sky-sun-behind-clouds-sunburst-1337408.jpg",
				programmingSkills: "HTML, Bootstrap, Javascript, HTTP REST"
			},
		});
	}
}