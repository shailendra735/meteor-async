Package.describe({
	name: 'jordan:async',
	summary: 'Meteor wrapper for npm async',
	version: '1.5.2',
	git: 'https://github.com/shailendra735/meteor-async',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.add_files('async.js');
});