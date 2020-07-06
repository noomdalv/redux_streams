## Stream Service App

This application allows users to sign in with their google account and create/edit/delete and view live streams.
It implements redux, applying async functionality with redux-thunk and route handling based on RESTful architecture.
The user is able to create a stream and setup an easy connection through the RTMP server by using his stream id as the stream key.
The application was tested using OBS(Open Broadcaster Software).

## Built With

- ReactJS (Frontend)
- Redux (State Management)

## App Screenshots

![screenshot](./client/src/misc/ss1.jpg)
![screenshot](./client/src/misc/ss3.jpg)

## Setup instructions

Open a terminal window, go to the location you'd like to add the project and then run the commands below.

# Clone Repository

```console
git clone https://github.com/noomdalv/redux_streams.git
```

# Setup NodeMediaServer or RTMP Server

Go to the /rtmpserver folder inside redux_streams and type:
```console
npm start
```

# Setup JSONServer API

In your terminal, go to the api directory within the created redux_streams folder and install dependencies with:
```console
npm install
```
and start the server with:
```console
npm start
```

# Setup Client
In your terminal, go to the client directory within the created redux_streams folder and install dependencies with:
```console
npm install
```
Finally, start the server with:
```console
npm start
```


## Author

👤 **Vladimir Luna**

- Github: [@noomdalv](https://github.com/noomdalv)


## 📝 License

This project is [MIT](lic.url) licensed.
