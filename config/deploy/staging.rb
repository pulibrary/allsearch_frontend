set :stage, :staging

server "allsearch-staging1.princeton.edu", user: "deploy", roles: %w{app web}
server "allsearch-staging2.princeton.edu", user: "deploy", roles: %w{app web}
