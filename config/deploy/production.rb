set :stage, :production
set :node_env, 'production'

server "allsearch-prod1", user: "deploy", roles: %w{app web}
server "allsearch-prod2", user: "deploy", roles: %w{app web}