set :stage, :production

server "allsearch-prod1.princeton.edu", user: "deploy", roles: %w{app web}
server "allsearch-prod2.princeton.edu", user: "deploy", roles: %w{app web}