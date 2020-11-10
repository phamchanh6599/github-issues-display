Installation: 
+ Please clone this repository using git clone https://github.com/phamchanh6599/github-issues-display.git first
+ $ cd github-issues-display
  $ npm install

Run : 
+ $ npm start

Technical decision:

+ How did you implement styling? What are the pros and cons? Why did you chose this approach? 
  - I selected CSS Modules way (SASS) for this project.
  + Pros : 
  - All class names and animation names are scoped locally- by default, each component will have its own Css files.
  - When scaling projects, we have less overrides and trouble.
  - By having a common css files where we can define variables, mixin or function which is using for other components, we can share it everywhere and must easier to know what’s used or not vv.
  + Cons :
  - Because each component has its own Css files so we will have many files Css
   Because some of pros above, I decide to choose this way.

+ How did you share state between components? What are the pros and cons? Why did you chose this approach?
   - Redux helps me to share state between components
   + Pros :
   - Easy to start writing (if you can get over the syntax)
   - Less re-rendering!
   - Total separation of data and presentation
   + Cons :
   - Community conventions are still developing so It hards to have a standard structure
   - Syntax is complex for someone
   For me, I tried others way as using context-api but Redux is covenient and I think It has much better than other way so I choose this

+ Did you use React hooks? Why or why not?
   + Yes, Because : 
   - We can maintains internal state data with simplified and less code.
   - Make the code look cleaner, easier to read
   - Create re-usable, isolated components to avoid redundant logic.

+ How did you prevent wasted renders?
   + I tried to use something like:
   - React memo
   - UseCallBack
   to prevent wasted renders

View more details on https://github-issues-display.herokuapp.com/
