var generators = require('yeoman-generator');
var S = require('string');


module.exports = generators.Base.extend({
	prompting: function () {
        var done = this.async();
		this.data = {};
		var prompts =  [
			{
				type: 'input',
				name: 'templateName',
				message: 'What\'s the template Name?',
				default: 'RisingStarTemplate'
			},
		];
		
		this.prompt(prompts, function (answers) {
			this.data.templateName = answers.templateName;
			done();
		}.bind(this));
	},
    
	writing: function () {
		var templateName = this.data.templateName;		

		this.extract('https://github.com/joomla/joomla-cms/releases/download/3.5.0/Joomla_3.5.0-Stable-Full_Package.zip', '.', function(error) {
			//console.log(error);
			// ERROR OCCURED - do sth
		});

	},
}); 