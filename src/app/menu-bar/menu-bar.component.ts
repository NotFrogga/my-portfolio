import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  randomAnimation : Array<string> = ["rubberBand","pulse","bounce", "shake", "wobble", "jackInTheBox", "swing", "tada"];
  constructor() { }

  ngOnInit() {
	}
	
	/**
	 * Scrolls view to bottom of website page
	 *
	 * @memberof MenuBarComponent
	 */
	scrollDown() {
		window.scrollTo(0, document.body.scrollHeight);
	}

  /**
	 * Selects a random index and get the value from that index
	 *
	 * @param {Array<any>} array
	 * @memberof MenuBarComponent
	 */
	selectRandom(array : Array<any>) : any {
		const lenght = array.length;
		const ran = parseInt((Math.random()*lenght).toString(), 10);
		return array[ran];
	}

	/**
	 * Triggers logo animation on click
	 *
	 * @memberof MenuBarComponent
	 */
	logoAnimation() {
		const animation = this.selectRandom(this.randomAnimation);
		let element = document.querySelector("#logo");
		element.classList.add('animated', animation);
		element.addEventListener('animationend', () => element.classList.remove('animated', animation));
	}
}
