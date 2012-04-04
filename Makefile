TESTS = test/Ext/*.js \
		test/lang/Array/*.js \
		test/lang/Date/*.js \
		test/lang/Function/*.js \
		test/lang/Number/*.js \
		test/lang/Object/*.js \
		test/lang/String/*.js \
		test/util/Format/*.js \
		test/class/Base/*.js \
		test/class/Class/*.js \
		test/class/ClassManager/*.js \
		test/class/Loader/*.js \
		test/version/Version/*.js \
		test/misc/JSON/*.js

REPORTER = dot

test:
	@NODE_ENV=test ../node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout 100 \
		--ignore-leaks \
		--growl \
		$(TESTS)

test-cov: lib-cov
	EXTSERVER_COV=1 $(MAKE) test REPORTER=html-cov > docs/test/coverage.html
	rm -Rf lib-cov;

lib-cov:
	rm -Rf lib-cov;
	jscoverage lib lib-cov

docs: test-docs

test-docs:
	make test REPORTER=doc \
		| cat docs/test/head.html - docs/test/tail.html \
		> docs/test/test.html

api:
	jsduck ./lib/ext-server \
		--title "Ext Server API Documentation" \
		--categories ./docs/api.conf/categories.json \
		--guides ./docs/api.conf/guide.json \
		--images ./docs/images \
		--output ./docs/api.base \
		--footer "<script type=\"text/javascript\">\
\
  var _gaq = _gaq || [];\
  _gaq.push(['_setAccount', 'UA-2285128-12']);\
  _gaq.push(['_trackPageview']);\
  (function() {\
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\
  })();\
\
</script>"
	rm -Rf ./docs/api/en;
	rm -Rf ./docs/api/ja;
	cp -Rf ./docs/api.base ./docs/api/en;
	cp -Rf ./docs/api.base ./docs/api/ja;
	node ./docs/api.conf/trans.js en ja;

.PHONY: test-cov test docs test-docs api
