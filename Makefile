.PHONY: build

build:
	cd landing && npm run build
	open 'obsidian://advanced-uri?vault=fotosink&commandid=webpage-html-export%253Aexport-html-vault'
	rm -rf docs/*
	cp -r landing/dist/* docs/
	cp -r build/* docs/
	echo 'fotosink.com' > docs/CNAME
