	rm -Rf ./docs/api/en;
	rm -Rf ./docs/api/ja;
	cp -Rf ./docs/api.base ./docs/api/en;
	cp -Rf ./docs/api.base ./docs/api/ja;
	node ./docs/api.conf/trans.js en ja;

