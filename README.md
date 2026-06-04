# Lab: Fix the Broken Search Bar

<img src="public/main.png" alt="Lab preview" width="600" />

## Introduction

Sometimes you inherit code that almost works. The UI is there, the styles look great, but something is missing, the feature just does not do anything. That is the situation you are in today.

You have a working app that displays a list of characters as cards. There is also a search bar component already built: the icon is there, the input is styled, but if you type anything… nothing happens. Your job is to make it work.

This lab is about two things: **state management** and **lifting state up**. Both are core React concepts you will use in every real project.

---

## What is the app doing?

The app fetches a list of characters and renders them as cards on the page. The component that holds those cards also holds a piece of **state**: an array of the characters currently being displayed.

The search bar lives in a **separate component**. Right now it has no functionality, no event handlers, no connection to any data. It is just a pretty input field that does nothing.

The problem? The search bar needs access to the characters list so it can filter it. But that list lives in a sibling or parent component, and React data only flows **down**, not sideways.

---

## What you will fix

* **Lift the state up** so both the cards component and the search bar component can share it.
* **Add search functionality** to the search bar: as the user types, the displayed cards should update in real time.
* The filter should match characters **by name** (case insensitive).

---

## Part 1: Understand the current structure

Before touching any code, read through the existing components.

**Step 1.** Open the component that renders the character cards. Find where the array of characters is stored in state. Ask yourself: which component owns this state right now?

**Step 2.** Open the search bar component. Notice that it receives no props and has no logic. It is just markup.

**Step 3.** Think about which component should own the state so that both the cards list and the search bar can access it. That is the component you will refactor.

---

## Part 2: Lift the state up

Right now the characters array lives inside the cards component. That means the search bar cannot see it or change it.

**Step 1.** Move the characters state (and any related state for filtering) to the **closest common ancestor** of both the cards component and the search bar component.

**Step 2.** Pass the characters array down to the cards component as a **prop**.

**Step 3.** Make sure the app still works exactly as before — all cards should still render correctly.

---

## Part 3: Add a filtered list

Now that the parent owns the data, you can add a second piece of state to track what the user has typed.

**Step 1.** Add a state variable for the search query (start it as an empty string).

**Step 2.** Derive a filtered list from the full characters array using the search query. Use `.filter()` and `.toLowerCase()` to make it case insensitive.

**Step 3.** Pass the **filtered** list (not the full list) down to the cards component instead.

---

## Part 4: Wire up the search bar

Now give the search bar something to do.

**Step 1.** Create a handler function in the parent component that updates the search query state whenever the input changes.

**Step 2.** Pass that handler down to the search bar component as a prop.

**Step 3.** Inside the search bar component, attach the handler to the input's `onChange` event.

**Step 4.** Type something in the search bar. The cards should filter in real time.

---

## Part 5: Check your work

Go through this checklist before you consider the lab done:

[ ] Typing in the search bar filters the character cards immediately
[ ] The filter is case insensitive (typing `"rick"` and `"Rick"` both work)
[ ] Clearing the search bar shows all characters again
[ ] No prop drilling warnings or console errors

---

## Iteration

Once the basic search is working, push it a bit further:

* Can you highlight the matched part of the name in the card?
* Can you show a message like *"No characters found"* when the filter returns an empty list?
* Can you add a **Clear** button inside the search bar that resets the query?
* Can you filter by something other than name — for example, by species or status?

---

## Key concepts to review

* **Lifting state up**: [React docs: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
* **Controlled inputs**: [React docs: Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
* **Derived state**: computing values from existing state instead of storing them separately
