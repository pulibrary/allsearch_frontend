require 'spec_helper'

describe 'search' do
  it 'shows a validation error if the user tries an empty search' do
    visit 'http://localhost:5678'
    expect { click_button 'search' }.not_to change { page.current_path }
    expect(page).to have_content 'Please input a search'
  end
  it 'shows a validation error if the user tries an all-whitespace search' do
    visit 'http://localhost:5678'
    page.fill_in 'q', with: '   '
    expect { click_button 'search' }.not_to change { page.current_path }
    expect(page).to have_content 'Please input a search'
  end
end
