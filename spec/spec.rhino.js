
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.7.0/lib/jspec.js')
load('lib/yourlib.core.js')

JSpec
.exec('spec/spec.core.js')
.run({ formatter : JSpec.formatters.Terminal })
.report()