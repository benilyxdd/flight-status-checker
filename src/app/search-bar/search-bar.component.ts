import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
	flightCodeInput: FormGroup = new FormGroup({});

	constructor(private formBuilder: FormBuilder) {
		this.flightCodeInput = this.formBuilder.group({
			IATA: formBuilder.control(''),
		});
	}

	ngOnInit(): void {}

	onFormSubmit(): void {
		console.log('submiited');
	}
}
