require 'capybara/rspec'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

  config.include Capybara::DSL
  Capybara.default_driver = :selenium

  config.before(:suite) do
    $vite_pid = spawn("yarn dev --port 5678")
    Process.detach($vite_pid)
  end
  config.after(:suite) do
    Process.kill('TERM', $vite_pid)
  end
end
