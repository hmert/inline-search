
describe 'jQuery'
  describe '.search()'
    before_each
      users = elements(fixture('users'))
      items = users.children('li')
    end
    
    it 'should filter elements by substring by default'
      $.search(items, 'Holoway')
      items.get(0).should.be_visible
      items.get(1).should.be_visible
      items.get(2).should.be_hidden
      items.get(3).should.be_hidden
    end
        
    it 'should filter elements by keywords'
      $.search(items, 'Holowaychuk', 'by keyword')
      items.get(0).should.be_visible
      items.get(1).should.be_visible
      items.get(2).should.be_hidden
      items.get(3).should.be_hidden
    end
  end
end