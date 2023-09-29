set :stage, :staging

server "allsearch-staging1", user: "deploy", roles: %w{app web}
server "allsearch-staging2", user: "deploy", roles: %w{app web}
