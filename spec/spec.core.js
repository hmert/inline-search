
describe 'jQuery'
  describe '.search()'
    before_each
      users = elements(fixture('users'))
      items = users.children('li')
    end
    
    describe 'filter'
      describe 'by substring'
        it 'should be the default'
          $.search(items, 'Holoway')
          items.get(0).should.be_visible
          items.get(1).should.be_visible
          items.get(2).should.be_hidden
          items.get(3).should.be_hidden 
        end
      end
      
      describe 'by keyword'
        it 'should filter by entire words only'
          $.search(items, 'Holowaychuk', 'by keyword')
          items.get(0).should.be_visible
          items.get(1).should.be_visible
          items.get(2).should.be_hidden
          items.get(3).should.be_hidden
          
          $.search(items, 'Holoway', 'by keyword')
          items.get(0).should.be_visible
          items.get(1).should.be_visible
          items.get(2).should.be_visible
          items.get(3).should.be_visible
        end
      end
    end
    
  end
end