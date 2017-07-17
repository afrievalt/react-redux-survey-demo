import React from 'react';
import { Route } from 'react-router-dom'

const ButtonToNavigate = ({ title, history }) => (
  <button
    type="submit"
    onClick={() => {
      console.log("in ButtonToNavigate, onClick")
      history.push('/my-new-location')
      return false  
      }
    }
  >
    {title}
  </button>
);

export const ActionButton = () => (
  <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Navigate elsewhere" />} />
)    