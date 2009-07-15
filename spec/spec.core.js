
describe 'jQuery'
  before_each
    users = elements(fixture('users'))
    items = users.find('li')
  end
  
  describe '.search()'
    describe '.version'
      it 'should be a triple'
        $.search.version.should.match(/\d+\.\d+\.\d+/)
      end
    end
    
    describe 'filter'
      it 'should with no input should show everything'
        $.search(items, '', function(){ return true })
        items.get(0).should.be_visible
        items.get(1).should.be_visible
        items.get(2).should.be_visible
        items.get(3).should.be_visible
      end
      
      it 'should with input consisting of whitespace should show everything'
        $.search(items, '    ', function(){ return true })
        items.get(0).should.be_visible
        items.get(1).should.be_visible
        items.get(2).should.be_visible
        items.get(3).should.be_visible
      end
    
      describe 'by arbitrary function'
        it 'should work'
          $.search(items, 'Foo', function(){ return true })
          items.get(0).should.be_hidden
          items.get(1).should.be_hidden
          items.get(2).should.be_hidden
          items.get(3).should.be_hidden
          
          $.search(items, 'Foo', function(){ return false })
          items.get(0).should.be_visible
          items.get(1).should.be_visible
          items.get(2).should.be_visible
          items.get(3).should.be_visible
        end  
      end
      
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
          items.get(0).should.be_hidden
          items.get(1).should.be_hidden
          items.get(2).should.be_hidden
          items.get(3).should.be_hidden
        end
      end
    end
  end
  
  describe '.fn.search()'
    before_each
      table = $(fixture('vehicles'))
      th = table.find('th')
      skyline = table.find('tr:nth-child(1)')
      rx7 = table.find('tr:nth-child(2)')
      supra = table.find('tr:nth-child(3)')
    end
    
    it 'should work'
      $(items).search('Holoway')
      items.get(0).should.be_visible
      items.get(1).should.be_visible
      items.get(2).should.be_hidden
      items.get(3).should.be_hidden
    end
    
    it 'should work with other filters'
      $(items).search('Alan Taylor', 'by keyword')
      items.get(0).should.be_hidden
      items.get(1).should.be_visible
      items.get(2).should.be_visible
      items.get(3).should.be_hidden
    end
    
    it 'should allow a function to determine what should be filtered'
      parent = function(){ return this.parent() }
      $('tr td:nth-child(1)', table).search('Toyota', 'by keyword', { remove : parent })
      th.should.be_visible
      skyline.should.be_hidden
      rx7.should.be_hidden
      supra.should.be_visible
    end
    
    describe 'lookup functions'
      describe 'parent'
        it 'should remove the filtered elements parent'
          $('tr td:nth-child(1)', table).search('Toyota', 'by keyword', { remove : 'parent' })
          th.should.be_visible
          skyline.should.be_hidden
          rx7.should.be_hidden
          supra.should.be_visible
        end
      end
    end
  end
  
end