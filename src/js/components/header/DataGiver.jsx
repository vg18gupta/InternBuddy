const dataArray = [
	// data for login section and its styles####
	{
		loginData: [
			{
				id: '1',
				value: 'sign out',
				styles: 'glyphicon glyphicon-log-out',
				addressValue: 'sign-out'
			},
			{
				id: '2',
				value: 'sign in',
				styles: 'glyphicon glyphicon-log-in',
				addressValue: 'sign-in'
			}
		]
	}, // for seperation of objects
	// data for navbar section
	{
		dataNavbar: [
			// ////////////////// option values /////////////////////////////
			{
				id: '1',
				value: 'contact',
				addressValue: 'contact',
				styles: 'contact-header',
				// /////////////////// dropDown options are given here////////////////
				dropDownMenu: [
					{
						id: '1',
						value: '',
						addressValue: '',
						styles: ''
					}
				]
			},
			// ////////////////// option values /////////////////////////////
			
			// ////////////////// option values /////////////////////////////
			{
				id: '3',
				value: 'news|events',
				addressValue: '',
				styles: 'news-events-header',
				// /////////////////// dropDown options are given here////////////////
				dropDownMenu: [
					{
						id: '1',
						value: 'annual achievers',
						addressValue: 'annual-achievers',
						styles: ''
					},
					{
						id: '3',
						value: 'events',
						addressValue: 'events',
						styles: ''
					}
				]
			},
			// ////////////////// option values /////////////////////////////
			{
				id: '4',
				value: 'admissions',
				addressValue: '',
				styles: 'admissions-header',
				// /////////////////// dropDown options are given here////////////////
				dropDownMenu: [
					{
						id: '1',
						value: 'staff',
						addressValue: 'staff',
						styles: ''
					},
					{
						id: '2',
						value: 'policies',
						addressValue: 'policies',
						styles: ''
					}
				]
			},
			// ////////////////// option values /////////////////////////////
			{
				id: '5',
				value: 'our school',
				addressValue: '',
				styles: 'our-school-header',
				// /////////////////// dropDown options are given here////////////////
				dropDownMenu: [
					{
						id: '1',
						value: 'school',
						addressValue: 'school',
						styles: ''
					},
					{
						id: '2',
						value: 'dataScience',
						addressValue: 'junior',
						styles: ''
					},
					{
						id: '3',
						value: 'FullStack',
						addressValue: 'middle',
						styles: ''
					},
					{
						id: '4',
						value: 'webDevelopment',
						addressValue: 'senior',
						styles: ''
					}
				]
			},
			// ////////////////// option values /////////////////////////////
			{
				id: '6',
				value: 'home',
				addressValue: 'home',
				styles: 'home-header',
				// /////////////////// dropDown options are given here////////////////
				dropDownMenu: [
					{
						id: '1',
						value: '',
						addressValue: '',
						styles: ''
					}
				]
			}
		]
	}
];

export default dataArray;
