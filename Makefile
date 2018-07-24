init:
	@echo "Initializing"
	git submodule init && \
	git submodule update --remote && \
	vagrant up

update-provisioner:
	@echo "Updating provisioner"
	git submodule update --remote && \
	vagrant provision
