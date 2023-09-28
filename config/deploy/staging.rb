set :stage, :staging
set :node_env, 'staging'

server "allsearch-staging1", user: "deploy", roles: %w{app web}
server "allsearch-staging2", user: "deploy", roles: %w{app web}
