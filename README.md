# Dynamic-profile-api

A simple RESTful API built with Node.js and Express that returns profile information and a random cat fact.

## Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "ruthambogo.ra@gmail.com",
    "name": "Musungu Ruth Ambogo",
    "stack": "Backend"
  },
  "timestamp": "2025-10-16T12:54:25.659Z",
  "fact": "Every year, nearly four million cats are eaten in Asia."
}
