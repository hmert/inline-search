
require 'rubygems'
require 'rext/all'

def title title, subheading
  %(<h1>#{title} <em>#{subheading}</em></h1>)
end

def project_url username, project
  "http://github.com/#{username}/#{project}"
end

def read path
  File.read File.join(File.dirname(__FILE__), 'data', path)
end

PROJECT_URL = project_url('username', 'project')
