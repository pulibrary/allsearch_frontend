set :branch, ENV['BRANCH'] || 'main'

set :application, "allsearch_frontend"
set :repo_url, "https://github.com/pulibrary/allsearch_frontend.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/opt/allsearch_frontend"

# Default value for :linked_files is []
append :linked_files, ".env"

namespace :deploy do
  before :updated, 'yarn:install'
  before :updated, 'yarn:build'
end

namespace :yarn do
  desc "Run yarn install"
  task :install do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && yarn install")
      end
    end
  end
  desc "Create dist"
  task :build do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && yarn build")
      end
    end
  end
end

