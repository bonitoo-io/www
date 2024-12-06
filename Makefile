HOST ?= ubuntu@ec2-3-70-193-247.eu-central-1.compute.amazonaws.com
KEY ?= BonitooWeb.pem
SSH ?= ssh -i $(KEY) $(HOST)

login:
	$(SSH)

logStrapi:
	$(SSH) journalctl -u strapi.service -f

install: installDb installNvm deployStrapi installStrapiService installService
	$(SSH) "sudo apt-get update"
	$(SSH) "sudo apt install postgresql"

installDb:
	$(SSH) "sudo -u postgres psql template1 -c 'ALTER ROLE postgres WITH ENCRYPTED PASSWORD '\''changeit'\'';'"
	$(SSH) "sudo systemctl restart postgresql.service"

installNvm:
	$(SSH) "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
	$(SSH) "bash -ic 'nvm install 22'"
	$(SSH) "bash -ic 'nvm install 20'"

installService:
	scp -i $(KEY) www.service $(HOST):.
	$(SSH) "sudo cp www.service /etc/systemd/system"
	$(SSH) "sudo systemctl daemon-reload"
	$(SSH) "sudo systemctl enable www.service"
	$(SSH) "sudo systemctl start www.service"

installStrapiService:
	scp -i $(KEY) strapi.service $(HOST):.
	$(SSH) "sudo cp strapi.service /etc/systemd/system"
	$(SSH) "sudo systemctl daemon-reload"
	$(SSH) "sudo systemctl enable strapi.service"
	$(SSH) "sudo systemctl start strapi.service"

deploy:
	$(SSH) rm -rf next
	tar czf next.tgz --exclude node_modules --exclude .next next
	scp -i $(KEY) -r next.tgz $(HOST):.
	rm next.tgz
	$(SSH) tar xzf next.tgz
	$(SSH) "cd next;bash -ic 'nvm use 22;npm install;npm run build'"
	$(SSH) "sudo systemctl restart www.service"

deployStrapi:
	$(SSH) rm -rf strapi
	tar czf strapi.tgz --exclude node_modules strapi
	scp -i $(KEY) -r strapi.tgz $(HOST):.
	rm strapi.tgz
	$(SSH) tar xzf strapi.tgz
	$(SSH) "cd strapi;bash -ic 'nvm use 20;npm install;npm run build'"
	$(SSH) "sudo systemctl restart strapi.service"

