require 'spec_helper'

describe 'jump to section' do
  it "displays a Skip to Section button in a screen < 1000px" do
    visit 'http://localhost:5678?q=Octopus'
    page.driver.browser.manage.window.resize_to(998,600)
    expect(page).to have_selector('.lux-button', text: 'Skip to Section')
  end
  it "does not display a Skip to Section button in a screen > 999px" do
    visit 'http://localhost:5678?q=Octopus'
    page.driver.browser.manage.window.resize_to(1000,600)
    expect(page).not_to have_selector('.lux-button', text: 'Skip to Section')
  end
end
