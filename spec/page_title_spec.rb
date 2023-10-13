require 'spec_helper'

describe 'Page title' do
  it 'defaults to Princeton University Library' do
    visit 'http://localhost:5678'
    expect(page.title).to eq('Princeton University Library')
  end
  it 'includes a search query, if provided' do
    visit 'http://localhost:5678?q=Octopus'
    expect(page.title).to eq('Octopus search results | Princeton University Library')
  end
end
