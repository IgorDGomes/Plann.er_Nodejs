# Plann.er Backend

Project from the NLW Journey event, made with Nodejs to integrate with the [React Native](https://github.com/IgorDGomes/Plann.er_React_Native) and [React](https://github.com/IgorDGomes/Plann.er_React) front-end.

<br />


## Overview

- [Tech](#tech)
- [Getting started](#getting-started)
- [API Endpoints](#api-endpoints)
    - [Trip Endpoints](#trip-endpoints)
    - [Participant Endpoints](#participant-endpoints)
    - [Link Endpoints](#link-endpoints)
    - [Activity Endpoints](#activity-endpoints)

<br />


## Tech

- NodeJS
- Typescript
- Prisma
- SQLite

<br />


## Getting started

It's necessary to have the following:

- [NodeJS](https://nodejs.org/en)

Follow these steps to have the project running in your machine:

### Clone
Choose the way you see fit to clone it, can be downloading the [zip file](https://github.com/IgorDGomes/Plann.er_Nodejs/archive/refs/heads/main.zip), using the github cli or from the git bash:

```bash
git clone https://github.com/IgorDGomes/Plann.er_Nodejs.git
```


### Config the .env file
You can either change the name of the .env.example to .env or create a new one, but it must contain at least the following:

```yaml
DATABASE_URL="file:./dev.db"

PORT="3333"

API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
```


### Install all the dependencies
Being on the project directory, run:

```bash
npm install
```

<br />


## API Endpoints

<br />

### Trip Endpoints

| routes                                  | description                                          
|-----------------------------------------|-----------------------------------------------------
| <kbd>POST /trips</kbd>                  | create trip - [details](#post-trip)
| <kbd>GET /trips/:tripId</kbd>           | retrieves trip info - [details](#get-trip-details)
| <kbd>PUT /trips/:tripId</kbd>           | update trip - [details](#update-trip)
| <kbd>GET /trips/:tripId/confirm</kbd>   | confirm trip - [details](#confirm-trip)


<br />


<h3 id="post-trip">POST /trips</h3>


**REQUEST**

```json
{
    "destination": "Destination",
    "starts_at": "2021-07-10 18:00:00",
    "ends_at": "2021-07-20 18:00:00",
    "owner_name": "Somebody",
    "owner_email": "somebody@email.com",
    "emails_to_invite": [
        "some@email.com",
        "another@email.com"
    ]
}
```

**RESPONSE**

```json
{
    "tripId": "42b9fab3-743a-4fb4-93df-eef6a14fdb04"
}
```

<br />


<h3 id="get-trip-details">GET /trips/:tripId</h3>


**RESPONSE**

```json
{
    "trip": {
        "id": "42b9fab3-743a-4fb4-93df-eef6a14fdb04",
        "destination": "Destination",
        "starts_at": "2021-07-10T17:00:00.000Z",
        "ends_at": "2021-07-20T17:00:00.000Z",
        "is_confirmed": false
    }
}
```

<br />


<h3 id="update-trip">PUT /trips/:tripId</h3>

**Request**

```json
{
    "destination": "Destination",
    "starts_at": "2021-07-10 17:00:00",
    "ends_at": "2021-07-20 17:00:00"
}
```

**Response**

```json
{
    "tripId": "42b9fab3-743a-4fb4-93df-eef6a14fdb04"
}
```

<br />


<h3 id="confirm-trip">GET /trips/:tripId/confirm</h3>

<kbd>Sends an email</kbd>

<br />

---

<br />

### Participant Endpoints

| routes                                              | description                                          
|-----------------------------------------------------|-----------------------------------------------------
| <kbd>POST /trips/:tripId/invites</kbd>              | create invite - [details](#post-participants)
| <kbd>GET /trips/:tripId/participants</kbd>          | retrieves participants - [details](#get-participants)
| <kbd>GET /participants/:participantId</kbd>         | retrieves participant details - [details](#get-participant-details)
| <kbd>GET /participants/:participantId/confirm</kbd> | update trip - [details](#confirm-participant)


<br />


<h3 id="post-participants">POST /trips/:tripId/invites</h3>


**REQUEST**

```json
{
    "email": "somebody123@email.com"
}
```

**RESPONSE**

```json
{
    "participantId": "cef2031c-3c35-4040-ab12-29dca70eefac"
}
```

<br />


<h3 id="get-participants">GET /trips/:tripId/participants</h3>


**RESPONSE**

```json
{
    "participants": [
        {
            "id": "3f8d21dc-2dc3-4c56-9a18-02516375e3f5",
            "name": "Somebody",
            "email": "somebody@email.com",
            "is_confirmed": true
        },
        {
            "id": "deeb14bd-a295-4cbd-9c80-5f02c69f3a39",
            "name": null,
            "email": "some@email.com",
            "is_confirmed": false
        },
        {
            "id": "35f01f4e-c0dc-4b61-b912-7cca2cb874c9",
            "name": null,
            "email": "another@email.com",
            "is_confirmed": false
        }
    ]
}
```

<br />


<h3 id="get-participant-details">GET /participants/:participantId</h3>


**RESPONSE**

```json
{
    "participant": {
        "id": "3f8d21dc-2dc3-4c56-9a18-02516375e3f5",
        "name": "Somebody",
        "email": "somebody@email.com",
        "is_confirmed": true
    }
}
```
        
<br />


<h3 id="confirm-participant">GET /participants/:participantId/confirm</h3>


<kbd>Sends an email</kbd>

<br />

---

<br />

### Link Endpoints

| routes                                  | description                                          
|-----------------------------------------|-----------------------------------------------------
| <kbd>POST /trips/:tripId/links</kbd>    | create link - [details](#post-link)
| <kbd>GET /trips/:tripId/links</kbd>     | retrieves links - [details](#get-links)


<br />


<h3 id="post-link">POST /trips/:tripId/links</h3>

**REQUEST**

```json
{
    "title": "AirBnB Hotel",
    "url": "https://airbnb.com/hotel"
}
```

**RESPONSE**

```json
{
    "linkId": "6e3b0531-3ef6-44b7-ab2c-ef9ad9f89477"
}
```

<br />


<h3 id="get-links">GET /trips/:tripId/links</h3>


**RESPONSE**

```json
{
    "links": [
        {
            "id": "6e3b0531-3ef6-44b7-ab2c-ef9ad9f89477",
            "title": "AirBnB Hotel",
            "url": "https://airbnb.com/hotel",
            "trip_id": "42b9fab3-743a-4fb4-93df-eef6a14fdb04"
        }
    ]
}
```

<br />

---

<br />

### Activity Endpoints

| routes                                      | description                                          
|---------------------------------------------|-----------------------------------------------------
| <kbd>POST /trips/:tripId/activities</kbd>   | create activity - [details](#post-activity)
| <kbd>GET /trips/:tripId/activities</kbd>    | retrieves activities - [details](#get-activities)


<br />


<h3 id="post-activity">POST /trips/:tripId/activities</h3>

**REQUEST**

```json
{
    "title": "Shopping",
    "occurs_at": "2021-07-11 09:00:00"
}
```

**RESPONSE**

```json
{
    "activityId": "6e1307f3-5320-40a7-9ce4-93be922e26a6"
}
```

<br />


<h3 id="get-activities">GET /trips/:tripId/activities</h3>


**RESPONSE**

```json
{
    "activities": [
        {
            "id": "6e1307f3-5320-40a7-9ce4-93be922e26a6",
            "title": "Shopping",
            "occurs_at": "2021-07-11T08:00:00.000Z",
            "trip_id": "42b9fab3-743a-4fb4-93df-eef6a14fdb04"
        }
    ]
}
```