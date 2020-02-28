destroy-vm:
	@echo "Removing VM files"
	rm rokanan.lock && \
	rm ansible.cfg && \
	rm -Rf ansible && \
	rm Vagrantfile && \
	git add . && \
	git commit -m "Remove old VM"
