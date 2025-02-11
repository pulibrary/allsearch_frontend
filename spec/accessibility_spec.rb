require 'axe-rspec'

context 'in dark mode' do
  before do
    visit 'http://localhost:5678'
    click_button 'Appearance'
    click_button 'Dark mode'
  end
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
end

context 'in light mode' do
  before do
    visit 'http://localhost:5678'
    click_button 'Appearance'
    click_button 'Light mode'
  end
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
end
