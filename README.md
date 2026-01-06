### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer-
* getElementById: Gets one element by its unique ID.
* getElementsByClassName: Gets a list (collection) of elements with that class.
* querySelector: Gets the first element that matches any CSS selector.
* querySelectorAll: Gets all elements matching a CSS selector as a list.

2. How do you **create and insert a new element into the DOM**?
Answer-
* Create: const el = document.createElement('div');
* Modify: el.textContent = 'Hi';
* Insert: document.body.appendChild(el);

3. What is **Event Bubbling** and how does it work?
Answer-
When an event triggers on an element, it bubbles up to its parent, then its grandparent, and so on, until it reaches the root (window). It is the default way events travel in the DOM.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer-
Instead of putting a listener on every child (like every <li>), you put one listener on the parent.
* Why? It saves memory and works automatically for new items added to the list later.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer-preventDefault() vs. stopPropagation()
* preventDefault(): Stops the default browser behavior (e.g., stops a link from jumping to a new page).

* stopPropagation(): Stops the event from climbing up the DOM (stops bubbling).
