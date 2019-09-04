create:
	@echo "Adding ansible submodule"
	git submodule add git@github.com:fostermadeco/ansible-roles.git ansible/roles && \
	vagrant up

init:
	@echo "Initializing ansible submodule"
	git submodule update --init && \
	vagrant up

update-provisioner:
	@echo "Updating provisioner"
	git submodule update --remote && \
	vagrant provision
