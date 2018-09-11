IMAGE=undcomercio/node:10

yarn-install:
	docker run --rm -u node -ti -v $(PWD):/home/node/app -w /home/node/app $(IMAGE) yarn install

run-script:
	@clear
	@docker run --rm -u node -ti -v $(PWD):/home/node/app -w /home/node/app $(IMAGE) node_modules/.bin/ts-node ./$(SCRIPT)