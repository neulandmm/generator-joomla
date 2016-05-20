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
			{
				type: 'input',
				name: 'keepDefaultTemplates',
				message: 'Do you want to keep the default Frontend Templates? (Y/N)',
				default: 'Y'
			},
		];
		
		this.prompt(prompts, function (answers) {
			this.data.templateName = answers.templateName;
			this.data.keepDefaultTemplates = answers.keepDefaultTemplates;
			done();
		}.bind(this));
	},
    
	writing: function () {
		
		var templateName = this.data.templateName;
		var keepDefaultTemplates = this.data.keepDefaultTemplates;
		if(keepDefaultTemplates === 'N') {
			this.deleteFolderRecursive(this.destinationPath('templates/beez3'));
			this.deleteFolderRecursive(this.destinationPath('templates/protostar'));
		}
				
		this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('templates/' + templateName + '/package.json'), {templateName: templateName})
		this.fs.copyTpl(this.templatePath('Gruntfile.js'), this.destinationPath('templates/' + templateName + '/Gruntfile.js'), {templateName: templateName})
		this.fs.copy(this.templatePath('templateDetails.xml'), this.destinationPath('templates/' + templateName + '/templateDetails.xml'))
		this.fs.copy(this.templatePath('component.php'), this.destinationPath('templates/' + templateName + '/component.php'))
		this.fs.copy(this.templatePath('index.php'), this.destinationPath('templates/' + templateName + '/index.php'))
	},
	deleteFolderRecursive: function(path) {
	  var fs = require('fs');
	  if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file,index){
		  var curPath = path + "/" + file;
		  if(fs.lstatSync(curPath).isDirectory()) { // recurse
			this.deleteFolderRecursive(curPath);
		  } else { // delete file
			fs.unlinkSync(curPath);
		  }
		});
		fs.rmdirSync(path);
	  }
	},
	
}); 