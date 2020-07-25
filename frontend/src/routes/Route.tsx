import React from 'react';
import {
  RouteProps as RouterDomProps,
  Route as RouteDom,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends RouterDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/*
  isPrivate/IsSigned
  true/true = OK
  true/false = Login redirect
  false/true = Dashboard redirect
  false/false = OK
*/

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <RouteDom
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
