# tiki-test
DEMO: https://pacific-plains-10343.herokuapp.com

# 1.Front-end
update config file Frontend/src/production.config.js to your accurate config

run script `cd Frontend && yarn && yarn build`

# 2.Back-end

update config file Backend/docker-compose.yml line 19,20 to your accurate config

run script `cd Backend && docker-compose up -d app`

After that you can access by url localhost:3001

# To access admin dashboard (CRUD)

Access url `/login` with account `admin@yopmail.com / 123456789`
