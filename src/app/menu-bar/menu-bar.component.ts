import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}
	
	scrollDown() {
		window.scrollTo(0, window.innerHeight);
	}

}
