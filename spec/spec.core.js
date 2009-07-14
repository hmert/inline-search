
describe 'jQuery'
  describe '.search()'
    it 'should filter'
      users = elements(fixture('users'))
      items = users.children('li')
      $.search(items, 'Holowaychuk')
      items.get(0).should.be_visible
      items.get(1).should.be_visible
      items.get(2).should.be_hidden
      items.get(3).should.be_hidden
    end
  end
end