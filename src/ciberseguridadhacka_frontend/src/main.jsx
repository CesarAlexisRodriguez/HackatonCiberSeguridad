import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Client, InternetIdentity } from "@bundly/ares-core";
import { IcpConnectContextProvider } from "@bundly/ares-react";


import 'bootstrap/dist/css/bootstrap.min.css';



const client = Client.create({
  restCanisters: {
    backend: {
      baseUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943",
    },
  },
  providers: [
    new InternetIdentity({
      providerUrl: "http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=be2us-64aaa-aaaaa-qaabq-cai",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IcpConnectContextProvider client={client}>
      <App/>
    </IcpConnectContextProvider>
  </React.StrictMode>,
);
