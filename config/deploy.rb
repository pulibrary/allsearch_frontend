# config valid for current version and patch releases of Capistrano
lock "~> 3.17.1"

set :branch, ENV['BRANCH'] || 'main'

set :application, "allsearch_frontend"
set :repo_url, "https://github.com/pulibrary/allsearch_frontend.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/opt/allsearch_frontend"

namespace :deploy do
  desc "Run yarn install"
  task :yarn_install do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && yarn install")
      end
    end
  end
  desc "Create dist"
  task :yarn_build do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && yarn build")
      end
    end
  end
end

