TESTS = test/Ext/*.js

REPORTER = dot

test:
	@NODE_ENV=test ../node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout 100 \
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
		--categories ./docs/api.categories.json \
		--images ./docs/images \
		--output ./docs/api

.PHONY: test-cov test docs test-docs api
