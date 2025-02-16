pub:  publish push
publish:
	npm run test && npm run build && npm publish
push:
	git add . && git commit -m 'chore' && git push origin