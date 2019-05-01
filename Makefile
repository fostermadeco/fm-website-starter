create:
	@echo "Adding submodule"
	git submodule add git@github.com:fostermadeco/ansible-roles.git ansible/roles && \
	@echo "vagrant up"
	vagrant up

init:
	@echo "Initializing submodule"
	git submodule update --init && \
	@echo "vagrant up"
	vagrant up

update-provisioner:
	@echo "Updating provisioner"
	git submodule update --remote && \
	vagrant provision
