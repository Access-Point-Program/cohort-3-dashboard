---
name: 'Defintion Of Ready'
about: 'Describes when a story is ready'
title: 'As a [____], [____]'
labels: ''
assignees: ''

---
body:
- type: checkboxes
id: definition-of-ready
attributes:
    label: Have we met are definitios of ready?
    options:
    - label: Steps are written out
    - label: Acceptince criteria defined
    - label: Broken down as much as possible
    - label: Have all dependencies
    - label: Points agreed on by whole team
    - label: Check with scrum master that everything is there
- type: textarea
  id: component
  attributes:
    label: Description
    description: Which part of the application is this using.
    placeholder: Frontend.
 validations:
    required: true;
- type: textarea
  id: Problems
  attributes:
    label: problems
    description: Is there any problems?
    placeholder: No.
 validations:
    required: true
- type: textarea
  id: acceptance-criteria
  attributes:
    label: Acceptance criteria
    description: What is required for this story to be accepted?
    placeholder: Required
 validations:
    required: true
