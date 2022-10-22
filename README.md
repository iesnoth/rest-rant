# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| Method | Path | Purpose |
|--------|------|----------|
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing page |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a certain place |
| DELETE | /places/:id/rant/:rantId | Delete a rant about a particular place |
| GET | * | 404 page (matches any route not defined above)

### Fake Data
Your places should have a name (string), city (string), state (string), cuisines (string) and a pic (string)
| Name | City | State | Cuisines | Pic |
|------|------|-------|----------|-----|
| Pho King | Belview | AK | Vietnamese | PIC |

### Notes
The most important part to remember is the name attribute of the input tag. This is important because it will be the variable name we end up using on the back-end later.
Less critical, but still important, is to make a for attribute on the label that corresponds to an id attribute on the input. That is for accessibility/screen readers! (part5)