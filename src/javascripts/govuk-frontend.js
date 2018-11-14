import Accordion from 'govuk-frontend/components/accordion/accordion'
import Button from 'govuk-frontend/components/button/button'
import Details from 'govuk-frontend/components/details/details'
import CharacterCount from 'govuk-frontend/components/character-count/character-count'
import Checkboxes from 'govuk-frontend/components/checkboxes/checkboxes'
// Intentionally avoid importing ErrorSummary since it will steal focus, scrolling example pages.
// import ErrorSummary from 'govuk-frontend/components/error-summary/error-summary'
import Radios from 'govuk-frontend/components/radios/radios'
import Header from 'govuk-frontend/components/header/header'
import Tabs from 'govuk-frontend/components/tabs/tabs'

new Button(document).init()

var $accordion = document.querySelector('[data-module="accordion"]')
if ($accordion) {
  new Accordion($accordion).init()
}

var $details = document.querySelector('details')
if ($details) {
  new Details($details).init()
}

var $characterCount = document.querySelector('[data-module="character-count"]')
if ($characterCount) {
  new CharacterCount($characterCount).init()
}

var $checkbox = document.querySelector('[data-module="checkboxes"]')
if ($checkbox) {
  new Checkboxes($checkbox).init()
}

var $radio = document.querySelector('[data-module="radios"]')
if ($radio) {
  new Radios($radio).init()
}

var $header = document.querySelector('[data-module="header"]')
if ($header) {
  new Header($header).init()
}

var $tabs = document.querySelector('[data-module="tabs"]')
if ($tabs) {
  new Tabs($tabs).init()
}
