import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1, 
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2921-02-12 09:00:00'),
        },
        {
          id:2, 
          title: 'Software',
          type: 'withdraw',
          category: 'Suporte',
          amount: 2000,
          createdAt: new Date('2921-02-12 09:00:00'),
        },
        {
          id:3, 
          title: 'Curso',
          type: 'withdraw',
          category: 'Dev',
          amount: 1000,
          createdAt: new Date('2921-02-12 09:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';
  
    this.get('/transactions', () =>{
      return this.schema.all('transactions');
    })
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

