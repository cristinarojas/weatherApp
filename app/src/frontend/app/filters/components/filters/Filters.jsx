// Dependencies
import React, { Fragment } from 'react';

// styles
import styles from './Filters.scss';

// Components
import OnClickFilter from './OnClickFilter';
import OnChangeFilter from './OnChangeFilter';

const Filters = () => (
  <>
    <OnClickFilter />
    <OnChangeFilter />
  </>
);

export default Filters;
