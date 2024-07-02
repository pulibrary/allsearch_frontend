require 'axe-rspec'

describe 'Initial page' do
  it 'passes axe accessibility checks' do
      visit 'http://localhost:5678'
      expect(page).to be_axe_clean
  end
end

describe 'Search results page' do
  it 'passes axe accessibility checks' do
    visit 'http://localhost:5678?q=Octopus'
    expect(page).to be_axe_clean
  end
end
