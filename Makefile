init:
	@echo "Initializing"
	git submodule add git@github.com:fostermadeco/ansible-roles.git ansible/roles && \
	vagrant up

update-provisioner:
	@echo "Updating provisioner"
	git submodule update --remote && \
	vagrant provision
