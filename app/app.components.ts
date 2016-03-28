import {Component} from 'angular2/core';

export class Hero {
	id : Number;
	name : string;
}

@Component({
	selector : 'my-app',
	template : `<h1>{{title}}</h1>
				<h2>{{hero.name}} Detail</h2>
				<div><label>id: </label>{{hero.id}}</div>
				<div>
					<label>name: </label>
					<input [(ngModel)]="hero.name" placeholder="name"/>
				</div>`
})

export class AppComponent {
	public title = 'Tour of Heros';
	public hero:Hero = {
		id : 1,
		name : 'windstorm'
	}
};