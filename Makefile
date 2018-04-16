init:
	@echo "Initializing"
	git submodule init && \
	git submodule update --remote && \
	vagrant up