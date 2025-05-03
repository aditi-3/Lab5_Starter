# Lab 5 - Starter

### Collaborators
- Aditi Verma
- Chris Park
  
### Check your understanding

#### 1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Since the message feature is interactive, a simple unit test cannot test how individual components interact with each other on an application or feature level. Maybe we would be able to test smaller things like if the message is in the right format or something along those lines but we cannot do unit test for interaction between different messages sent or received by different users.

#### 2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, you can use a unit test to check for "max message length" since this only deals with the message component and does not require any interaction with multple message components. Changing other app feature won't have any effect on non-related unit tests.