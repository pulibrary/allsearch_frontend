require 'spec_helper'

describe 'skip to main content link' do
  it 'is has a non-visible link to main content' do
    visit 'http://localhost:5678'
    expect(page.find("a", :text => /Skip to main content/, visible: false)).to be
  end
  it 'has a link that becomes visible when focused' do
    visit 'http://localhost:5678'
    body = page.find('body')
    body.send_keys(:tab)
    expect(page.find("a", :text => /Skip to main content/, visible: true)).to be
  end
end
