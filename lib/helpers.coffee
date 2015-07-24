{Range} = require('atom')
XRegExp = require('xregexp').XRegExp
path = require 'path'
child_process = require('child_process')

Helpers = module.exports =
  error: (e) ->
    atom.notifications.addError(e.message, {detail: e.stack, dismissible: true})
  messageKey: (message) ->
    text = message.text or message.html
    toReturn = message.type + '-' + message.filePath + '-' + (message.range?.serialize?()) + '-' + text
    toReturn.toLowerCase()
  shouldTriggerLinter: (linter, bufferModifying, onChange, scopes) ->
    # Trigger lint-on-Fly linters on both events but on-save linters only on save
    # Because we want to trigger onFly linters on save when the
    # user has disabled lintOnFly from config
    return false if onChange and not linter.lintOnFly
    return false unless scopes.some (entry) -> entry in linter.grammarScopes
    return false if linter.modifiesBuffer isnt bufferModifying
    return true
