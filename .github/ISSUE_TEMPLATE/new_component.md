---
name: Add a New Bento UI Tray
about: Add a New Search Result Tray to UI
title: "Add [Name] Tray to UI"
labels: ""
assignees: ""
---

## Description

What the component displays

### All Search API Information

What call you need to make to populate the component with results.

### Supporting Service Documentation

Other Background Information.

### Labeling

What heading should be used for the component.

### Acceptance Criteria

- [ ] Add the component(s) to to the general page layout template
- [ ] Displays a heading that is not a link
- [ ] Display an icon next to the heading relevant to the component type (i.e a book for the catalog)
- [ ] Provides a link to see more results in the source user interface positioned to the right of the title with the label "Refine"
- [ ] Displays a description for the component (AUX to provide, can use lorum ipsum to start)
- [ ] Displays up to three search results.
- [ ] If there are no results display a message to the user that provides them with a link to the source system to go there easily if they want to go right to that tool. Text "No results found. Search the [insert link] Name of Tray[close link].
- [ ] Includes the document ID of each result in a data attribute (probably attached to the html around the title field?)
- [ ] Add a link at the bottom of the component to the source interface search results that displays the number of total results in the source interface.
- [ ] Each Search Result Should display the following
  - Title Field as a link to the record in source service
  - Author or equivalent
  - Format type or equivalent
  - Icon relevant to format type
  - Other Fields relevant to the component
- [ ] I can successfully use this feature with Voice Over in Safari.
- [ ] I have checked this feature using one of the following browser extensions and confirmed that it does not add any level A or level AA issues:
  - axe dev tools
  - Lighthouse
  - Wave

### Implementation Notes

As Needed.
