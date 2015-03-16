module.exports = function (grunt) {

	grunt.config.init({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			main:['WWW'],
			ts: [
				'WWW/app.ts',
				'WWW/**/*.ts',
				'!WWW/**/*.d.ts',
				'tscommand*'
			]
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: false,
						cwd:'tssrc/',
						src: [
							'**/*.ts',
							'**/*.html',
							'**/*.css',
							'**/*.json',
							'!index.html',
							'!app.json'
						],
						dest: 'WWW'
					}
				]
			}
		},
		ts: {
			options: {
				target: 'es5',
				//module: 'amd',
				sourceMap: false,
				compiler: './node_modules/typescript/bin/tsc'
			},
			files: {
				src: ['WWW/**/*.ts']
			//	dest:'tssrc/www'
			}
		}
	});

function readLibs(){
	var app = grunt.file.readJSON('tssrc/app.conf');
	var application ={
		appFiles : '',
		libsFiles : ''
	}

	for(var i=0; i<app.app.length; i++){
		application.appFiles+= '<script src="'+app.app[i]+'"></script>\n';
	}
	for(var i=0; i<app.libs.length; i++){
		application.libsFiles+= '<script src="'+app.libs[i]+'"></script>\n';
	}

	return application;
}
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.loadNpmTasks('grunt-tsd');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.loadNpmTasks('grunt-tsd');

	grunt.registerTask('createIndex',function(){
		var app = readLibs();
		var content = grunt.file.read('tssrc/index.html') ;
		var result = content.replace(/<body ng-app="app">/g, '<body ng-app="app">\n <!-- libs --> \n'+app.libsFiles +'\n  <!-- application --> \n'+app.appFiles);
		grunt.file.write('WWW/index.html', result);

		grunt.log.ok('Index file hs been created');

	});



   grunt.registerTask('build', ['clean:main','copy','ts','clean:ts', 'createIndex']);

};